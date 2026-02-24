import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useMeeting = (meetingId) => {
  const socketRef = useRef(null);
  const localVideo = useRef(null);
  const localStreamRef = useRef(null);
  const peersRef = useRef({});
  const iceQueuesRef = useRef({});
  const [remoteStreams, setRemoteStreams] = useState([]);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  useEffect(() => {
    const start = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
        const socketUrl = apiUrl.replace("/api", "").replace(/\/$/, "") || "http://localhost:5000";
        socketRef.current = io(socketUrl);

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });

        localStreamRef.current = stream;

        if (localVideo.current) {
          localVideo.current.srcObject = stream;
        }

        socketRef.current.emit("join-room", {
          meetingId,
          userId: socketRef.current.id
        });

        setupSocketListeners();
      } catch (err) {
        console.error("Failed to start meeting:", err);
      }
    };

    const createPeerConnection = (socketId) => {
      if (peersRef.current[socketId]) {
        return peersRef.current[socketId];
      }

      const peer = new RTCPeerConnection({
        iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }]
      });

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => {
          peer.addTrack(track, localStreamRef.current);
        });
      }

      iceQueuesRef.current[socketId] = [];

      peer.onicecandidate = (e) => {
        if (e.candidate && socketRef.current) {
          if (peer.remoteDescription) {
            socketRef.current.emit("signal", {
              meetingId,
              data: { candidate: e.candidate },
              targetId: socketId
            });
          } else {
            iceQueuesRef.current[socketId].push(e.candidate);
          }
        }
      };

      peer.ontrack = (e) => {
        const stream = e.streams[0];
        setRemoteStreams(prev => {
          if (!prev.find(s => s.id === socketId)) {
            return [...prev, { id: socketId, stream }];
          }
          return prev;
        });
      };

      peer.onconnectionstatechange = () => {
        if (peer.connectionState === "failed" || peer.connectionState === "disconnected") {
          setRemoteStreams(prev => prev.filter(s => s.id !== socketId));
          if (peersRef.current[socketId]) {
            peersRef.current[socketId].close();
            delete peersRef.current[socketId];
          }
          delete iceQueuesRef.current[socketId];
        }
      };

      peersRef.current[socketId] = peer;
      return peer;
    };

    const setupSocketListeners = () => {
      socketRef.current.on("user-joined", async ({ socketId }) => {
        if (socketId === socketRef.current.id) return;

        const peer = createPeerConnection(socketId);

        try {
          if (peer.signalingState === "stable") {
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);

            socketRef.current.emit("signal", {
              meetingId,
              data: { offer },
              targetId: socketId
            });
          }
        } catch (err) {
          console.error("Error creating offer:", err);
        }
      });

      socketRef.current.on("existing-users", async (userIds) => {
        for (const socketId of userIds) {
          if (socketId === socketRef.current.id) continue;

          const peer = createPeerConnection(socketId);

          try {
            if (peer.signalingState === "stable") {
              const offer = await peer.createOffer();
              await peer.setLocalDescription(offer);

              socketRef.current.emit("signal", {
                meetingId,
                data: { offer },
                targetId: socketId
              });
            }
          } catch (err) {
            console.error("Error creating offer for existing user:", err);
          }
        }
      });

      socketRef.current.on("signal", async ({ offer, answer, candidate, from }) => {
        if (!from) return;

        const peer = createPeerConnection(from);

        try {
          if (offer && peer.signalingState === "stable") {
            await peer.setRemoteDescription(offer);
            const answer = await peer.createAnswer();
            await peer.setLocalDescription(answer);

            const queue = iceQueuesRef.current[from] || [];
            while (queue.length > 0) {
              const candidate = queue.shift();
              try {
                await peer.addIceCandidate(candidate);
              } catch (err) {
                if (err.name !== "OperationError") {
                  console.error("Error adding queued ICE candidate:", err);
                }
              }
            }

            socketRef.current.emit("signal", {
              meetingId,
              data: { answer },
              targetId: from
            });
          } else if (answer && peer.signalingState === "have-local-offer") {
            await peer.setRemoteDescription(answer);

            const queue = iceQueuesRef.current[from] || [];
            while (queue.length > 0) {
              const candidate = queue.shift();
              try {
                await peer.addIceCandidate(candidate);
              } catch (err) {
                if (err.name !== "OperationError") {
                  console.error("Error adding queued ICE candidate:", err);
                }
              }
            }
          } else if (candidate && peer.remoteDescription) {
            try {
              await peer.addIceCandidate(candidate);
            } catch (err) {
              if (err.name !== "OperationError") {
                console.error("Error adding ICE candidate:", err);
              }
            }
          } else if (candidate && !peer.remoteDescription) {
            iceQueuesRef.current[from] = iceQueuesRef.current[from] || [];
            iceQueuesRef.current[from].push(candidate);
          }
        } catch (err) {
          if (err.name !== "InvalidStateError" && err.name !== "OperationError") {
            console.error("Error handling signal:", err);
          }
        }
      });

      socketRef.current.on("user-left", ({ socketId }) => {
        if (peersRef.current[socketId]) {
          peersRef.current[socketId].close();
          delete peersRef.current[socketId];
        }
        delete iceQueuesRef.current[socketId];
        setRemoteStreams(prev => prev.filter(s => s.id !== socketId));
      });
    };

    start();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
      Object.values(peersRef.current).forEach(peer => peer.close());
      peersRef.current = {};
      iceQueuesRef.current = {};
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [meetingId]);

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoEnabled(videoTrack.enabled);
      }
    }
  };

  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioEnabled(audioTrack.enabled);
      }
    }
  };

  return {
    localVideo,
    remoteStreams,
    isVideoEnabled,
    isAudioEnabled,
    toggleVideo,
    toggleAudio
  };
};

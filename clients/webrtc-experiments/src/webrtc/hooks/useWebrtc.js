import { useEffect, useRef, useState } from "react";

export default function useWebRTC() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const peerRef = useRef(null);

  useEffect(() => {
    startLocalStream();
  }, []);

  const startLocalStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);
  };

  const createPeerConnection = () => {
    const peer = new RTCPeerConnection();

    peer.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    localStream?.getTracks().forEach((track) => {
      peer.addTrack(track, localStream);
    });

    peerRef.current = peer;
    return peer;
  };

  return {
    localStream,
    remoteStream,
    createPeerConnection,
  };
}

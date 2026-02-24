import { useMeeting } from "../hooks/useMeeting";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { api } from "../utils/api";

export default function Meeting() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const {
    localVideo,
    remoteStreams,
    isVideoEnabled,
    isAudioEnabled,
    toggleVideo,
    toggleAudio
  } = useMeeting(id);
  const remoteVideoRefs = useRef({});

  useEffect(() => {
    const validateMeeting = async () => {
      try {
        await api.get(`/meetings/${id}`);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "Meeting not found");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    };

    validateMeeting();
  }, [id, navigate]);

  useEffect(() => {
    remoteStreams.forEach(({ id, stream }) => {
      if (remoteVideoRefs.current[id]) {
        remoteVideoRefs.current[id].srcObject = stream;
      }
    });
  }, [remoteStreams]);

  const leaveMeeting = () => {
    navigate("/dashboard");
  };

  const totalParticipants = 1 + remoteStreams.length;
  let gridClass = "grid-cols-1";
  if (totalParticipants === 2) gridClass = "grid-cols-2";
  else if (totalParticipants <= 4) gridClass = "grid-cols-2";
  else if (totalParticipants > 4) gridClass = "grid-cols-3";

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading meeting...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className={`flex-1 grid gap-2 p-2 ${gridClass} max-w-7xl mx-auto w-full`}>
        <div className="relative rounded-lg overflow-hidden bg-gray-900 fade-in">
          <video
            ref={localVideo}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-xs font-medium">
            You {!isVideoEnabled && "(Video Off)"} {!isAudioEnabled && "(Muted)"}
          </div>
        </div>

        {remoteStreams.map(({ id, stream }) => (
          <div key={id} className="relative rounded-lg overflow-hidden bg-gray-900 fade-in">
            <video
              ref={el => remoteVideoRefs.current[id] = el}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-xs font-medium">
              Participant
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 p-4 bg-black border-t border-white">
        <button
          onClick={toggleAudio}
          className={`px-6 py-3 rounded font-medium transition-all ${
            isAudioEnabled
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          {isAudioEnabled ? "Mute" : "Unmute"}
        </button>
        <button
          onClick={toggleVideo}
          className={`px-6 py-3 rounded font-medium transition-all ${
            isVideoEnabled
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          {isVideoEnabled ? "Stop Video" : "Start Video"}
        </button>
        <button
          onClick={leaveMeeting}
          className="px-6 py-3 rounded font-medium bg-red-600 hover:bg-red-700 text-white transition-all"
        >
          Leave
        </button>
      </div>
    </div>
  );
}

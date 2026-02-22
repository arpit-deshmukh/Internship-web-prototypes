import VideoPlayer from "./components/VideoPlayer";
import Controls from "./components/Controls";
import useWebRTC from "./hooks/useWebRTC";

export function WebRTCTemplate() {
  const { localStream, remoteStream, createPeerConnection } = useWebRTC();

  const handleStart = () => {
    createPeerConnection();
  };

  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-4">
        <VideoPlayer stream={localStream} muted />
        <VideoPlayer stream={remoteStream} />
      </div>

      <Controls onStart={handleStart} />
    </div>
  );
}

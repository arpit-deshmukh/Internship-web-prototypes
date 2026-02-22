export default function VideoPlayer({ stream, muted }) {
  return (
    <video
      autoPlay
      playsInline
      muted={muted}
      ref={(video) => {
        if (video && stream) {
          video.srcObject = stream;
        }
      }}
      className="w-full rounded-xl bg-black"
    />
  );
}

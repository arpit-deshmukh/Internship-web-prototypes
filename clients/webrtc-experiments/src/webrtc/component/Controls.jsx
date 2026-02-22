export default function Controls({ onStart }) {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
      >
        Start Call
      </button>
    </div>
  );
}

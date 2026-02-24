export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full border-2 border-black rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
    />
  );
}

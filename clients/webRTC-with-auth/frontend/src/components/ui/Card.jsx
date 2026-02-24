export default function Card({ children }) {
  return (
    <div className="bg-white border-2 border-black p-6 rounded-md shadow-lg max-w-md mx-auto mt-10 fade-in slide-up">
      {children}
    </div>
  );
}

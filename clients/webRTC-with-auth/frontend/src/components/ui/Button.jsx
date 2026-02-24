export default function Button({ children, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  };

  return (
    <button
      {...props}
      className={`w-full py-2 rounded text-sm font-medium transition-all scale-in ${variants[variant]} ${props.className || ""}`}
    >
      {children}
    </button>
  );
}

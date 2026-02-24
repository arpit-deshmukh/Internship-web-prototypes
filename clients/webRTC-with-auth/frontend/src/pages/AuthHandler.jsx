import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthHandler() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } else {
      setError("Authentication failed");
      setTimeout(() => navigate("/"), 2000);
    }
  }, [navigate]);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-black text-xl">Authenticating...</div>
    </div>
  );
}

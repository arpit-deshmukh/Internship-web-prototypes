import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { api } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <Card>
      <h1 className="text-lg font-medium mb-4">Sign In</h1>
      <Button onClick={handleGoogleLogin}>Continue with Google</Button>

      <div className="my-3 text-center text-xs text-gray-400">or</div>

      <Input 
        placeholder="Email" 
        value={email}
        onChange={e => setEmail(e.target.value)} 
      />
      <div className="mt-2" />
      <Input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={e => setPassword(e.target.value)} 
      />

      {error && (
        <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </div>
      )}

      <div className="mt-4" />
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>

      <p className="text-sm mt-3 text-center">
        New user? <a href="/register" onClick={(e) => { e.preventDefault(); navigate("/register"); }} className="text-blue-600 hover:underline">Register</a>
      </p>
    </Card>
  );
}

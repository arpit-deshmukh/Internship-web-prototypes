import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    }).catch(() => {
      localStorage.removeItem("token");
      navigate("/");
    });
  }, [navigate]);

  const startMeeting = async () => {
    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        const r = await api.post("/meetings/create-guest");
        navigate(`/meeting/${r.data.meetingId}`);
        return;
      }

      const r = await api.post(
        "/meetings/create",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate(`/meeting/${r.data.meetingId}`);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create meeting");
    } finally {
      setLoading(false);
    }
  };

  const joinMeeting = async () => {
    if (!meetingId.trim()) {
      setError("Please enter a meeting ID");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const r = await api.get(`/meetings/${meetingId}`);
      navigate(`/meeting/${r.data.meetingId}`);
    } catch (err) {
      setError(err.response?.data?.error || "Meeting not found or expired");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border-2 border-black rounded shadow-lg bg-white fade-in">
      <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>

      <Button onClick={startMeeting} disabled={loading} variant="primary">
        {loading ? "Creating..." : "Start Meeting"}
      </Button>

      <div className="my-4 text-center text-sm text-gray-600">or</div>

      <Input
        placeholder="Enter Meeting ID"
        value={meetingId}
        onChange={e => setMeetingId(e.target.value)}
        onKeyPress={e => e.key === "Enter" && joinMeeting()}
      />

      {error && (
        <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </div>
      )}

      <div className="mt-3" />
      <Button onClick={joinMeeting} disabled={loading} variant="secondary">
        {loading ? "Joining..." : "Join Meeting"}
      </Button>
    </div>
  );
}

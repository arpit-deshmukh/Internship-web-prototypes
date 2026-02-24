import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AuthHandler from "../pages/AuthHandler";
import Meeting from "../pages/Meeting";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<AuthHandler />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meeting/:id" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}

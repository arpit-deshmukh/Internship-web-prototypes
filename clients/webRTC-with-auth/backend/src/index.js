import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { Server } from "socket.io";
import http from "http";
import { meetingSocket } from "./socket/meetingSocket.js";

const start = async () => {
  await connectDB();

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  meetingSocket(io);

  server.listen(process.env.PORT || 5000);
};

start();

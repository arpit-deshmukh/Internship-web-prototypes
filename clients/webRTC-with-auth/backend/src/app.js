import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import passport from "passport";

import { setupGoogle } from "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import rootRoutes from "./routes/root.js";

const app = express();

setupGoogle();
app.use(passport.initialize());

const allowedOrigins = [
  "http://localhost:5173",
  "https://visuals-v4-c1.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

app.use("/", rootRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal server error" });
});

export default app;

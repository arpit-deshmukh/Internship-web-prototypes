import { Router } from "express";
import { createMeeting, joinMeeting } from "../controllers/meetingController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/create", auth, createMeeting);
router.post("/create-guest", createMeeting);

router.get("/:id", joinMeeting);

export default router;

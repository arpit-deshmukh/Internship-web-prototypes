import Meeting from "../models/Meeting.js";
import { generateMeetingId } from "../utils/generateId.js";

export const createMeeting = async (req, res) => {
  try {
    const id = generateMeetingId();
    const isGuest = !req.user;

    const meeting = await Meeting.create({
      meetingId: id,
      host: req.user || null,
      isGuestMeeting: isGuest,
      expiresAt: isGuest ? new Date(Date.now() + 1000 * 60 * 60) : null
    });

    res.json({ meetingId: meeting.meetingId });
  } catch (err) {
    console.error("CREATE MEETING ERROR:", err);
    res.status(500).json({ error: "Failed to create meeting" });
  }
};

export const joinMeeting = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || id.trim().length === 0) {
      return res.status(400).json({ error: "Meeting ID is required" });
    }

    const meeting = await Meeting.findOne({ meetingId: id.trim() });

    if (!meeting) {
      return res.status(404).json({ error: "Meeting not found" });
    }

    if (meeting.expiresAt && meeting.expiresAt < new Date()) {
      await Meeting.deleteOne({ meetingId: id });
      return res.status(400).json({ error: "Meeting expired" });
    }

    res.json({
      meetingId: meeting.meetingId,
      host: meeting.host,
      isGuestMeeting: meeting.isGuestMeeting
    });
  } catch (err) {
    console.error("JOIN MEETING ERROR:", err);
    res.status(500).json({ error: "Failed to join meeting" });
  }
};

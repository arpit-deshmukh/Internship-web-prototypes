import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema({
  meetingId: { type: String, unique: true },
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  isGuestMeeting: { type: Boolean, default: false },
  expiresAt: { type: Date, default: null }
}, { timestamps: true });

export default mongoose.model("Meeting", MeetingSchema);

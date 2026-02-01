import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  instituteType: {
    type: String,
    enum: ["engineering", "polytechnic", "management"],  // 🔴 backend values
    required: true
  },

  college: String,   // sirf display ke liye
  category: String,
  title: String,
  message: String,
  date: String,
  linkText: String,
  linkUrl: String

}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);

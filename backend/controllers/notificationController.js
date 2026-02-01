import Notification from "../models/Notification.js";

/* CREATE */
export const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: "Create failed" });
  }
};

// MongoDB === notifications and JSON frontend ==== send 
export const getNotifications = async (req, res) => {
  try {
    const data = await Notification.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

/* UPDATE */
export const updateNotification = async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

/* DELETE */
export const deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
// 🔓 PUBLIC NOTIFICATIONS (no login required)
export const getNotificationsPublic = async (req, res) => {
  try {
    const { instituteType } = req.query;

    const data = await Notification.find({
      instituteType
    })
      .sort({ date: -1 })
      .limit(5);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


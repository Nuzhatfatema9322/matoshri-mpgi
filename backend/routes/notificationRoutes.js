import express from "express";
import {
  createNotification,
  getNotifications,
  updateNotification,
  deleteNotification,
  getNotificationsPublic 
} from "../controllers/notificationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/public", getNotificationsPublic);

//route match Notification DB save
router.post("/", protect, createNotification); //1.protect middleware
router.get("/", protect, getNotifications);
router.put("/:id", protect, updateNotification);
router.delete("/:id", protect, deleteNotification);

export default router;

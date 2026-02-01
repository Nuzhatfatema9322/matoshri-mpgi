import express from "express";
import upload from "../middleware/upload.js";
import {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} from "../controllers/administrationController.js";

const router = express.Router();

router.get("/", getAllStaff);          // GET all staff
router.post("/", upload.single("photo"), addStaff);
router.put("/:id", upload.single("photo"), updateStaff);
router.delete("/:id", deleteStaff);    // DELETE staff

export default router;

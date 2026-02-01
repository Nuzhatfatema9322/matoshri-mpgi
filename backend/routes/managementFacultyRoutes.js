import express from "express";
import upload from "../middleware/upload.js";
import {
  getManagementFaculty,
  addManagementFaculty,
} from "../controllers/managementFacultyController.js";

const router = express.Router();

router.get("/", getManagementFaculty);
router.post("/", upload.single("photo"), addManagementFaculty);

export default router;

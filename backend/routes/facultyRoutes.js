import express from "express";
import upload from "../config/multer.js";
import {
  addFaculty,
  getFaculty,
  updateFaculty,
  deleteFaculty,
} from "../controllers/facultyController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addFaculty);
router.get("/", getFaculty);
router.put("/:id", upload.single("image"), updateFaculty);
router.delete("/:id", deleteFaculty);

export default router;

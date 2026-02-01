import express from "express";
import upload from "../config/multer.js";
import {
  uploadImage,
  getImages,
  deleteImage,
  updateImage,
} from "../controllers/galleryController.js";

const router = express.Router();

// 🔥 GET (category REQUIRED: slider / gallery)
router.get("/", getImages);

// 🔥 UPLOAD
router.post("/upload", upload.single("image"), uploadImage);

// 🔥 DELETE
router.delete("/:id", deleteImage);

// 🔥 UPDATE
router.put("/:id", upload.single("image"), updateImage);

export default router;

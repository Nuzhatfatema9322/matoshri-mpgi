import Gallery from "../models/galleryModel.js";
import cloudinary from "../config/cloudinary.js";

/* ================= UPLOAD ================= */
export const uploadImage = async (req, res) => {
  try {
    if (!req.file || !req.body.category) {
      return res.status(400).json({ message: "Image & category required" });
    }

    const image = await Gallery.create({
  title: req.body.title,
  image: req.file.path,
  category: req.body.category,

  // 🔥 ADD THESE (safe)
  institute: req.body.institute,
  section: req.body.section,
});


    res.status(201).json({
      success: true,
      image,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET (STRICT) ================= */
export const getImages = async (req, res) => {
  try {
    const { category, institute, section } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (institute) filter.institute = institute;
    if (section) filter.section = section;

    const images = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



/* ================= DELETE ================= */
export const deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Not found" });

    const publicId = image.image.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(`mpgi_gallery/${publicId}`);

    await image.deleteOne();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
export const updateImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Not found" });

    if (req.file) {
      const publicId = image.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`mpgi_gallery/${publicId}`);
      image.image = req.file.path;
    }

    if (req.body.title) image.title = req.body.title;

    await image.save();
    res.json({ success: true, image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

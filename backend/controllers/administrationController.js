import Administration from "../models/Administration.js";

// ✅ Get all staff
export const getAllStaff = async (req, res) => {
  try {
    const staff = await Administration.find({ isActive: true });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new staff
export const addStaff = async (req, res) => {
  try {
    const newStaff = new Administration({
      ...req.body,
      photo: req.file
        ? `/uploads/administration/${req.file.filename}`
        : "",
    });

    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update staff
export const updateStaff = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    if (req.file) {
      data.photo = `/uploads/administration/${req.file.filename}`;
    }

    const updated = await Administration.findByIdAndUpdate(
      req.params.id,
       data, // ✅ YAHI FIX HAI
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete staff (soft delete)
export const deleteStaff = async (req, res) => {
  try {
    await Administration.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff permanently deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


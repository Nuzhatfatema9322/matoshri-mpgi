import ManagementFaculty from "../models/ManagementFaculty.js";

// ✅ Public (frontend)
export const getManagementFaculty = async (req, res) => {
  const data = await ManagementFaculty.find({ isActive: true });
  res.json(data);
};

// ✅ Admin
export const addManagementFaculty = async (req, res) => {
  const faculty = new ManagementFaculty({
    ...req.body,
    photo: req.file
      ? `/uploads/faculty/${req.file.filename}`
      : "",
  });
  await faculty.save();
  res.json(faculty);
};

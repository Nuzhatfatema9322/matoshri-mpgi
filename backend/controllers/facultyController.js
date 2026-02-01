import Faculty from "../models/facultyModel.js";

export const addFaculty = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    if (!req.body.instituteType) {
      return res.status(400).json({ message: "Institute type required" });
    }

    const faculty = await Faculty.create({
      instituteType: req.body.instituteType,   // ✅🔥 FIX
      name: req.body.name,
      designation: req.body.designation,
      qualification: req.body.qualification,
      experience: req.body.experience,
      joinedDate: req.body.joinedDate,
      department: req.body.department,
      image: req.file.path,
    });

    res.status(201).json(faculty);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


/* GET FACULTY (department wise) */
export const getFaculty = async (req, res) => {
  try {
    const { instituteType, department } = req.query;

    const filter = {};
    if (instituteType) filter.instituteType = instituteType;
    if (department) filter.department = department;

    const faculty = await Faculty.find(filter).sort({ createdAt: 1 });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    // text fields
    faculty.name = req.body.name || faculty.name;
    faculty.designation = req.body.designation || faculty.designation;
    faculty.qualification = req.body.qualification || faculty.qualification;
    faculty.experience = req.body.experience || faculty.experience;
    faculty.joinedDate = req.body.joinedDate || faculty.joinedDate;
    faculty.department = req.body.department || faculty.department;

    // image replace (optional)
    if (req.file) {
      faculty.image = req.file.path;
    }

    await faculty.save();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    await faculty.deleteOne();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    instituteType: {
      type: String,
      enum: ["engineering", "polytechnic", "management"],
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true, // HOD / Lecturer / Dean
    },

    qualification: {
      type: String,
    },

    experience: {
      type: String,
    },

    joinedDate: {
      type: String,
    },

    department: {
      type: String,
      required: true, // civil / mechanical / MBA / etc
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);

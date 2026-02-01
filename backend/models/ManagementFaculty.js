import mongoose from "mongoose";

const managementFacultySchema = new mongoose.Schema(
  {
    instituteType: {
      type: String,
      enum: ["management"],
      required: true,
      default: "management",
    },

    department: {
      type: String,
      default: "MBA",
    },

    name: String,
    designation: String,
    qualification: String,
    experience: String,
    joinedDate: String,
    photo: String,

    isDean: {
      type: Boolean,
      default: false, // 👈 bada card ke liye
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "ManagementFaculty",
  managementFacultySchema
);

import mongoose from "mongoose";

const administrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
    },
    dateOfJoining: {
      type: String,
    },
    experience: {
      type: String,
    },
    contactNo: {
      type: String,
    },
    section: {
      type: String,
    },
    photo: String, // 👈 image path
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Administration", administrationSchema);

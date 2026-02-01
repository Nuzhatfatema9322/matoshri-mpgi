import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },

    // 🔥 OPTIONAL (VERY IMPORTANT)
   institute: {
  type: String,
  required: true,
   enum: ["engineering", "management", "polytechnic", "matoshri"]
},

    section: { type: String },     // ❌ NOT required
  },
  { timestamps: true }
);


export default mongoose.model("Gallery", gallerySchema);

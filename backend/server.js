// 🔥 ENV sabse pehle load hona chahiye
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";


import authRoutes from "./routes/authRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import administrationRoutes from "./routes/administrationRoutes.js";
import path from "path";
import managementFacultyRoutes from "./routes/managementFacultyRoutes.js";
connectDB();

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//  JSON body parser
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/administration", administrationRoutes);
app.use("/uploads", express.static("uploads"));

app.use("/api/management/faculty", managementFacultyRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});

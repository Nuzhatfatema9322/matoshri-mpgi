import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import PolyNavbar from "./PolyNavbar";
import Footer from "../components/Footer";

export default function PolyHostel() {
  const navigate = useNavigate();

  // 🔥 STEP 1: STATE
  const [images, setImages] = useState([]);

  // 🔥 STEP 2: FETCH HOSTEL GALLERY
  useEffect(() => {
  fetch(
  "http://localhost:5000/api/gallery?category=gallery&institute=management"
)

      .then((res) => res.json())
      .then((data) => setImages(Array.isArray(data) ? data : []));
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <img
            src={logo}
            className="logo"
            alt="logo"
            onClick={() => navigate("/vishwabharati-polytechnic-institute")}
            style={{ cursor: "pointer" }}
          />
          <h1>Vishwabharati Polytechnic Institute</h1>
        </div>
      </header>

      <PolyNavbar />

      <div className="facility-page">
        {/* LEFT SIDEBAR */}
        <aside className="dept-sidebar">
          <div
            className="dept-item"
            onClick={() =>
              navigate("/vishwabharati-polytechnic-institute/facilities/classrooms")
            }
          >
            Classrooms
          </div>
          <div className="dept-item active">Girls and Boys Hostel</div>
          <div className="dept-item">Library</div>
          <div className="dept-item">Indoor Sports</div>
          <div className="dept-item">Outdoor Sports</div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="content">
          <h2>Girls and Boys Hostel</h2>

          <p>
            Separate hostels for boys and girls with basic amenities and
            security.
          </p>

          <ul>
            <li>Under CCTV Surveillance</li>
            <li>24 Hour's Security</li>
            <li>Free Wi-Fi</li>
            <li>Solar Water Heater</li>
            <li>RO Water</li>
            <li>24 Hour's Library</li>
            <li>Spacious Play Ground</li>
          </ul>
<br />
          <h3>Gallery</h3>

          {/* 🔥 STEP 3: USE IMAGES HERE */}
          <div className="gallery-grid">
            {images.map((img) => (
              <img key={img._id} src={img.image} alt={img.title} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

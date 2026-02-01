import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PolyHeader from "../pages/PolyHeader";
import Footer from "../components/Footer";

function CivilGallery() {
  const [images, setImages] = useState([]);

  // 🔥 backend se gallery images lao
  useEffect(() => {
    const fetchGallery = async () => {
      try {
       const res = await fetch(
  "http://localhost:5000/api/gallery?category=gallery&institute=engineering"
)




        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Gallery fetch error", err);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <PolyHeader />

      {/* NAVBAR */}
      <nav className="poly-nav">
        <ul className="poly-nav-list">
          <li>Home</li>
          <li>Departments</li>
          <li>Cells & Committees</li>
          <li>Admission</li>
          <li>Facilities</li>
          <li>Alumni</li>
          <li>Activities/Events</li>
          <li>Campus</li>
          <li>Quick Links</li>
          <li>Download</li>
        </ul>
      </nav>

      {/* BANNER */}
      <section className="civil-banner">
        <h1>Civil Engineering</h1>
        <h2>At MPGIN</h2>
        <p>Vishwabharati Polytechnic Institute</p>
      </section>

      {/* MAIN */}
      <section className="civil-main">
        {/* LEFT */}
        <aside className="civil-left">
          <div className="profile-box">
            <div className="profile-title">Profile</div>

       <Link to="/vishwabharati-polytechnic-institute/departments/civil">
  <button>Overview</button>
</Link>
          
           <Link to="/vishwabharati-polytechnic-institute/departments/civil/faculty">
            <button>Faculty</button></Link>
            <button className="active">Gallery</button>
            
           <Link to="/school-of-management/departments/mba/labs">
            <button>Labs</button>
            </Link>
          </div>

          <div className="other-dept-box">
            <h4>Other Departments</h4>
            <ul>
              <li>Mechanical Engineering</li>
              <li className="active">Civil Engineering</li>
              <li>Electrical Engineering</li>
              <li>Computer Engineering</li>
              <li>Information Technology</li>
              <li>Electronics and Telecommunication</li>
              <li>Basic Sciences and Humanities</li>
            </ul>
          </div>
        </aside>

        {/* CENTER */}
        <div className="civil-center">
          <div className="gallery-grid">
            {images.length === 0 && (
              <p>No gallery images available.</p>
            )}

            {images.map((img) => (
              <div className="gallery-card" key={img._id}>
                <img src={img.image} alt={img.title} />
                {img.title && <span>{img.title}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CivilGallery;

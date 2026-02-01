import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PolyHeader from "./PolyHeader";
import PolyNavbar from "./PolyNavbar";
import Footer from "../components/Footer";

function CivilFaculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty?department=civil")
      .then((res) => res.json())
      .then(setFaculty);
  }, []);
  
  return (
    <>

      <PolyHeader />
<PolyNavbar />
     

      {/* BANNER */}
      <section className="civil-banner">
        <h1>Civil Engineering</h1>
        <h2>At MPGIN</h2>
        <p>Vishwabharati Polytechnic Institute</p>
      </section>

      {/* MAIN LAYOUT */}
      <section className="civil-main">
        {/* LEFT COLUMN */}
        <aside className="civil-left">
          <div className="profile-box">
            <div className="profile-title">Profile</div>
             <Link to="/vishwabharati-polytechnic-institute/departments/civil">
  <button>Overview</button>
</Link>
            <button className="active">Faculty</button>
        <Link to="/vishwabharati-polytechnic-institute/departments/civil/gallery">
  <button>Gallery</button>
</Link>

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
       {/* RIGHT COLUMN */}
<div className="civil-right">
  <div className="faculty-main-container">
    <h2 className="faculty-heading">
      <span className="faculty-icon"></span> Faculty Members
    </h2>

    <div className="faculty-cards">
      {faculty.map((f) => (
       <div className="faculty-card-small" key={f._id}>
  <div className="faculty-top">
    <img src={f.image} alt={f.name} className="faculty-avatar" />

    <div className="faculty-basic">
    <h3 className="faculty-name">{f.name}</h3>
    <span className="faculty-designation">{f.designation}</span>
  </div>
  </div>

  {/* DETAILS IMAGE KE NICHE */}
 <div className="faculty-info-list">
    <div>
      <span className="label">Qualification</span>
      <span className="value">{f.qualification}</span>
    </div>

    <div>
      <span className="label">Experience</span>
      <span className="value">{f.experience}</span>
    </div>

    <div>
      <span className="label">Joined Date</span>
      <span className="value">{f.joinedDate}</span>
    </div>
  </div>
</div>

      ))}
    </div>
  </div>
</div>
   
      </section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default CivilFaculty;

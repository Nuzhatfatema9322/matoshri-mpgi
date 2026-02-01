import logo from "../../assets/logo.png"; 
import ManagementNavbar from "./ManagementNavbar";
import Hero from "../../components/Hero";
import ManagementNotices from "../../components/ManagementNotices";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ManagementHome() {
   const [active, setActive] = useState("home");
      const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
  const path = location.pathname;

  // 1️⃣ faculty → Civil main
  if (path === "/") {
    navigate("/");
  }
  else {
    navigate("/");
  }
};
  return (
    <>
     <header className="header">
               <div className="header-container">
                 <img
                   src={logo}
                   alt="MPGI Logo"
                   className="logo"
                   onClick={handleClick}
                   style={{ cursor: "pointer" }}
                 />
                 <h1
                   onClick={handleClick}
                   style={{ cursor: "pointer" }}
                 >
                   School of Management
                 </h1>
               </div>
             </header>
      <ManagementNavbar />

 <Hero institute="management" />


      <div className="management-container">
        {/* LEFT SIDEBAR */}
        <div className="management-sidebar">
          <div
            className={`sidebar-item ${active === "home" ? "active" : ""}`}
            onClick={() => setActive("home")}
          >
            Home
          </div>
           <div
            className={`sidebar-item ${active === "vision" ? "active" : ""}`}
            onClick={() => setActive("vision")}
          >
            Vision & Mission
          </div>
          <div
  className="sidebar-item"
  onClick={() =>
    navigate("/school-of-management/dean")
  }
>
  Dean
</div>

          <div
            className={`sidebar-item ${active === "placements" ? "active" : ""}`}
            onClick={() => setActive("placements")}
          >
            Placements
          </div>

          <div
            className={`sidebar-item ${active === "iqac" ? "active" : ""}`}
            onClick={() => setActive("iqac")}
          >
            IQAC
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="management-content">
          {/* HOME */}
          {active === "home" && (
            <>
              <h2>Welcome to School of Management</h2>

          <h3>About Us</h3>
          <p>
            The School of Management at Matoshri Pratishthan Group of Institutions
            (MPGI), Nanded, is a leading business school established in 2010.
            It offers industry-aligned programs that build leadership, strategic
            thinking, and entrepreneurial skills among students.
          </p>

          <h3>Key Highlights:</h3>
          <ul>
            <li>Approved by AICTE, New Delhi & Affiliated to SRTMUN, Nanded</li>
            <li>NAAC Accreditation: B+ Grade</li>
            <li>Courses Offered: MBA (Dual Specialization), BBA</li>
            <li>Faculty: 30+ with academic and industry backgrounds</li>
            <li>Annual Intake: 180+ students</li>
            <li>Placement Support: Strong ties with 100+ companies</li>
          </ul>

          <h3>Infrastructure</h3>
          <ul>
            <li>Smart Classrooms with audio-visual technology</li>
            <li>Case Study & Group Discussion Halls</li>
            <li>Digital Library with e-resources</li>
            <li>Seminar Hall & Conference Facilities</li>
            <li>Dedicated Career Development Cell</li>
            <li>Wi-Fi Enabled Campus</li>
          </ul>
              </>
          )}

       {/* VISION */}
          {active === "vision" && (
            <>
              <h2>Vision & Mission</h2>

              <h3>Vision</h3>
              <p>
                To develop ethical, innovative and industry-ready management
                professionals.
              </p>

              <h3>Mission</h3>
              <ul>
                <li>Quality management education</li>
                <li>Industry exposure & leadership skills</li>
                <li>Entrepreneurial mindset</li>
              </ul>
            </>
          )}
           {/* PLACEMENTS */}
          {active === "placements" && (
            <>
              <h2>Placements</h2>

              <ul>
                <li>Campus recruitment drives</li>
                <li>Industry mentorship</li>
                <li>Soft skill & aptitude training</li>
                <li>Internships & live projects</li>
              </ul>
            </>
          )}

          {/* IQAC */}
          {active === "iqac" && (
            <>
              <h2>IQAC</h2>

              <p>
                IQAC ensures continuous improvement in academic quality and
                institutional performance.
              </p>

              <ul>
                <li>Academic audits</li>
                <li>Quality benchmarks</li>
                <li>Stakeholder feedback</li>
              </ul>
            </>
          )}
   </div>
       <div className="management-right">
  <ManagementNotices />
</div>

      </div>

      <Footer />
    </>
  );
}

export default ManagementHome;

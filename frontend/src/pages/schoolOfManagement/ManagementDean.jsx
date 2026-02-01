import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png"; 
import deanImg from "../../assets/dean.jpg";
import ManagementNavbar from "./ManagementNavbar";
import Hero from "../../components/Hero";
import ManagementNotices from "../../components/ManagementNotices";
import Footer from "../../components/Footer";

function ManagementDean() {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/school-of-management");
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
      <Hero category="management-slider" />
      <div className="management-container">

        {/* LEFT SIDEBAR */}
        <div className="management-sidebar">
          <div className="sidebar-item" onClick={() => navigate("/school-of-management")}>
            Home
          </div>
          <div className="sidebar-item">Vision & Mission</div>
          <div className="sidebar-item active">Dean</div>
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
          {/* DEAN */}
  {active === "home" && (
    <>
          <h2>Sadanand R. Shinde's Profile</h2>

          <div className="dean-layout">
            {/* TEXT CONTENT */}
            <div className="dean-text">
              <p>
                The new economic policy—globalization, privatization, and
                liberalization—has widened the horizon of business. The
                information technology revolution has transformed this planet
                into a global village. Hi-tech systems and the supersonic speed
                of communication have introduced new cross-cultural interactions
                in the global business scenario.
              </p>

              <p>
                This has also increased the demand for a strong ethical value
                foundation in a harmonic form. It is the responsibility of the
                School of Management to develop holistic leadership with a
                global vision and a mission of excellence.
              </p>

              <p>
                The School of Management at Matoshri Pratishthan’s Group of
                Institutes is fully committed to this task.
              </p>

              <p className="dean-sign">
                — <strong>Sadanand R. Shinde</strong>
              </p>
            </div>

            {/* PROFILE CARD */}
            <div className="dean-profile">
             <img
  src={deanImg}
  alt="Sadanand R. Shinde"
/>

              <h3>Sadanand R. Shinde</h3>
              <span>Dean</span>
           </div>
      </div>
    </>
  )}

           {/* PLACEMENTS */}
  {active === "placements" && (
    <>
      <h2>Placements</h2>
      <ul>
        <li>Campus recruitment drives</li>
        <li>Industry interaction</li>
        <li>Internships & live projects</li>
        <li>Career guidance sessions</li>
      </ul>
    </>
  )}

   {/* IQAC */}
  {active === "iqac" && (
    <>
      <h2>IQAC</h2>
      <p>
        Internal Quality Assurance Cell ensures academic excellence and
        continuous institutional improvement.
      </p>

      <ul>
        <li>Academic audits</li>
        <li>Quality benchmarks</li>
        <li>Stakeholder feedback</li>
      </ul>
    </>
  )}
        </div>

        {/* RIGHT NOTICE PANEL */}
        <div className="management-right">
          <ManagementNotices />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManagementDean;

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ManagementNavbar from "./ManagementNavbar";
import Footer from "../../components/Footer";

import deanImg from "../../assets/dean.jpg"; // ✅ image asset

function ManagementMBAProfile() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HEADER ===== */}
     <header className="header">
  <div className="header-container">
    <img
      src={logo}
      className="logo"
      alt="logo"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/school-of-management")}
    />
    <h1>School of Management</h1>
  </div>
</header>


      {/* ===== NAVBAR ===== */}
      <ManagementNavbar />

      {/* ===== HERO ===== */}
      <section className="dept-hero">
        <h2>MBA Program</h2>
        <p className="hero-sub">At MPGIN</p>
        <span>School of Management</span>
      </section>

      {/* ===== MAIN ===== */}
      <div className="dept-container">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="dept-sidebar">
          <div className="dept-item active">Profile</div>
          <div className="dept-item" onClick={() => 
            navigate("")}>
            Overview</div>
       <div
  className="dept-item"
  onClick={() =>
    navigate("/school-of-management/departments/mba/faculty")
  }
>
  Faculty
</div>
          
      <div
  className="dept-item"
  onClick={() =>
    navigate("/vishwabharati-polytechnic-institute/departments/civil/gallery")
  }
>
    Gallery
  </div>

          <div className="dept-item" onClick={() => 
            navigate("/school-of-management/departments/mba/labs")}>
            Labs</div>

          <h4 className="other-title">Other Departments</h4>
          <div className="other-link active">MBA Program</div>
          <div className="other-link">Training & Placement</div>
        </aside>

        {/* ===== CENTER CONTENT ===== */}
        <main className="dept-content">
          <h2>MBA Program</h2>

          <p>
            The new economic policy—globalization, privatization, and
            liberalization—has widened the horizon of business. The information
            technology revolution has transformed this planet into a global
            village. Hi-tech systems and the supersonic speed of communication
            have introduced new cross-cultural interactions in the global
            business scenario.
          </p>

          <p>
            This has also increased the demand for a strong ethical value
            foundation in a harmonic form. It is the responsibility of the
            School of Management to develop holistic leadership with a global
            vision and a mission of excellence.
          </p>

          <p>
            The School of Management at Matoshri Pratishthan’s Group of
            Institutions is fully committed to this task.
          </p>

          <p className="signature">— Sadanand R. Shinde</p>
        </main>

        {/* ===== RIGHT PROFILE CARD ===== */}
        <aside className="dept-profile">
          <img src={deanImg} alt="Dean" />
          <h3>Sadanand R. Shinde</h3>
          <span>DEAN - School of Management</span>
        </aside>
      </div>

      <Footer />
    </>
  );
}

export default ManagementMBAProfile;

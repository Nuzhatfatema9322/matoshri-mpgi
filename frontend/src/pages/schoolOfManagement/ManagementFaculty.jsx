import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ManagementNavbar from "./ManagementNavbar";
import Footer from "../../components/Footer";

function ManagementFaculty() {
  const [faculty, setFaculty] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty?instituteType=management")
      .then((res) => res.json())
      .then(setFaculty)
      .catch(console.error);
  }, []);

  const dean = faculty.find(
    (f) => f.designation?.toLowerCase().includes("dean")
  );
  const others = faculty.filter((f) => f !== dean);
 

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

      <ManagementNavbar />

      {/* HERO */}
      <section className="dept-hero">
        <h2>MBA Program</h2>
        <p className="hero-sub">At MPGIN</p>
        <span>School of Management</span>
      </section>

      <div className="dept-container">
        {/* SIDEBAR */}
        <aside className="dept-sidebar">
          <div
            className="dept-item"
            onClick={() =>
              navigate("/school-of-management/departments/mba/profile")
            }
          >
            Profile
          </div>
         <div
            className="dept-item"
            onClick={() =>
              navigate("/school-of-management/departments/mba/profile")
            }
          >Overview</div>

          <div className="dept-item active">Faculty</div>

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

        {/* CONTENT */}
        <div className="dept-content">
          <h2>Faculty Members</h2>

          {/* ===== DEAN CARD ===== */}
          {dean && (
            <div className="faculty-big-card">
              <div className="faculty-top">
                <img
                  src={dean.image}
                  alt={dean.name}
                  className="faculty-avatar"
                />

                <div>
                  <h4 className="faculty-name">{dean.name}</h4>
                  <div className="faculty-designation">
                    {dean.designation}
                  </div>
                </div>
              </div>

              <div className="faculty-info-list">
                <span className="label">Qualification</span>
                <span className="value">{dean.qualification || "-"}</span>

                <span className="label">Experience</span>
                <span className="value">{dean.experience || "-"}</span>

                <span className="label">Joined Date</span>
                <span className="value">{dean.joinedDate || "-"}</span>
              </div>
            </div>
          )}

          {/* ===== OTHER FACULTY (CIVIL STYLE SMALL CARDS) ===== */}
          <div className="faculty-grid">
            {others.map((f) => (
              <div className="faculty-card-small" key={f._id}>
                <div className="faculty-top">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="faculty-avatar"
                  />

                  <div>
                    <h4 className="faculty-name">{f.name}</h4>
                    <div className="faculty-designation">
                      {f.designation}
                    </div>
                  </div>
                </div>

                <div className="faculty-info-list">
                  <span className="label">Qualification</span>
                  <span className="value">{f.qualification || "-"}</span>

                  <span className="label">Experience</span>
                  <span className="value">{f.experience || "-"}</span>

                  <span className="label">Joined Date</span>
                  <span className="value">{f.joinedDate || "-"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManagementFaculty;

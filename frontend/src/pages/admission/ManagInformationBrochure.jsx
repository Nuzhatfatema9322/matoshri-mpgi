import logo from "../../assets/logo.png";
import ManagementNavbar from "../schoolOfManagement/ManagementNavbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function ManagInformationBrochure() {
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
      <ManagementNavbar />

      <div className="admission-container">
        {/* LEFT SIDEBAR */}
        <div className="admission-sidebar">
          <div className="sidebar-item" onClick={() => navigate("/school-of-management/admission/courses")}>
            Courses
          </div>
          <div className="sidebar-item" onClick={() => navigate("/school-of-management/admission/fee-structure")}>
            Fee Structure</div>
      
      
          <div className="sidebar-item" onClick={() => navigate("/school-of-management/admission/undertaking")}>
            Undertaking
          </div>
          <div className="sidebar-item active">Information Brochure 2025-26</div>
         
          <div
  className="sidebar-item"
  onClick={() =>
    window.open(
      "https://fe2025.mahacet.org/StaticPages/HomePage",
      "_blank"
    )
  }
>
  Admission process 2025-26
</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="admission-content">
          <h2>Information Brochures Academic Year 2025-26</h2>

          <a
            href="https://mpgi.ac.in/assets/information_brochure-CL4tD6wn.pdf"
            target="_blank"
            rel="noreferrer"
            className="brochure-link"
          >
            Click here to download Information Brochure Academic Year 2025-26
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManagInformationBrochure;

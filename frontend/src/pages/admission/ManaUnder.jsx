import logo from "../../assets/logo.png";
import ManagementNavbar from "../schoolOfManagement/ManagementNavbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function ManaUnder() {
  const navigate = useNavigate(); // ✅ ADD THIS
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
          <div
            className="sidebar-item"
            onClick={() =>
              window.location.href =
                "/school-of-management/admission/courses"
            }
          >
            Courses
          </div>

          <div className="sidebar-item"
            onClick={() => navigate("/school-of-management/admission/fee-structure")}
          >
            Fee Structure
          </div>
        
         <div className="sidebar-item"
            onClick={() => navigate("/school-of-management/admission/Information Brochure 2025-26")}
            >Information Brochure 2025-26</div>

          <div className="sidebar-item active">Undertaking</div>
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
          <h2>Undertaking Documents</h2>

          {/* CARD 1 */}
          <div className="undertaking-card">
            <h4>UNDERTAKING FOR STUDENT</h4>

            <a
              href="https://mpgi.ac.in/assets/UNDERTAKING%20FOR%20STUDENT-xPRs3x7q.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn dark"
            >
              Download PDF
            </a>
          </div>

          {/* CARD 2 */}
          <div className="undertaking-card">
            <h4>UNDERTAKING FOR PARENTS</h4>

            <a
              href="https://mpgi.ac.in/assets/UNDERTAKING%20FOR%20PARENTS-C8A7Hij5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn light"
            >
              Download PDF
            </a>
          </div>

          {/* CARD 3 */}
          <div className="undertaking-card">
            <h4>AFFIDAVIT BY THE STUDENT ON ANTI-RAGGING</h4>

            <a
              href="https://www.antiragging.in/affidavit_affiliated_form.php"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn light"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManaUnder;

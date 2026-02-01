import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ManagementNavbar from "../schoolOfManagement/ManagementNavbar";
import Footer from "../../components/Footer";

function ManagFee() {
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
          <div  onClick={() => navigate("/school-of-management/admission/courses")} 
          className="sidebar-item">Courses</div>
          
          <div className="sidebar-item active">Fee Structure</div>

        

            <div className="sidebar-item"
            onClick={() => 
              navigate("/school-of-management/admission/Information Brochure 2025-26")}
            >Information Brochure 2025-26</div>
        <div
            className="sidebar-item"
            onClick={() => navigate("/school-of-management/admission/undertaking")}
          >
            Undertaking
          </div>
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
          {/* CARD 1 */}
          <div className="admission-content">
            <h2>Fee Structure 2025-26</h2>
            <a
              href="https://mpgi.ac.in/assets/MPGI%20school%20of%20Management%20FRA%20Fees%20Structure%20A.Y.2025-26-BRPrcqEZ.pdf"
              target="_blank"
              rel="noreferrer"
              className="brochure-link"
            >
              Click here to download Fee Structure 2025-26
            </a>
          </div>

          <br />

          {/* CARD 2 */}
          <div className="admission-content">
            <h2>Fee Structure 2024-25</h2>
            <a
              href="https://mpgi.ac.in/assets/revised_fees_2024-25-B6D7wEWi.pdf"
              target="_blank"
              rel="noreferrer"
              className="brochure-link"
            >
              Click here to download Fee Structure 2024-25
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManagFee;

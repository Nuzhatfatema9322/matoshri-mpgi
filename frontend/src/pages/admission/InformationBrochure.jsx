import PolyHeader from "../PolyHeader";
import PolyNavbar from "../PolyNavbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function InformationBrochure() {
  const navigate = useNavigate();

  return (
    <>
      <PolyHeader />
      <PolyNavbar />

      <div className="admission-container">
        {/* LEFT SIDEBAR */}
        <div className="admission-sidebar">
          <div className="sidebar-item" onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/courses")}>
            Courses
          </div>
          <div className="sidebar-item">Fee Structure</div>
      
          <div className="sidebar-item" onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/administration")}>
            Administration
          </div>
          <div className="sidebar-item" onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/undertaking")}>
            Undertaking
          </div>
          <div className="sidebar-item active">Information Brochure 2025-26</div>
         
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

export default InformationBrochure;

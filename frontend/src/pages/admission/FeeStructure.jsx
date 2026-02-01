import { useNavigate } from "react-router-dom";
import PolyHeader from "../PolyHeader";
import PolyNavbar from "../PolyNavbar";
import Footer from "../../components/Footer";

function FeeStructure() {
     const navigate = useNavigate();
  return (
    <>
      <PolyHeader />
      <PolyNavbar />

      <div className="admission-container">
        {/* LEFT SIDEBAR */}
        <div className="admission-sidebar">
          <div  className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/courses")}
          >
            Courses</div>
          <div className="sidebar-item active">Fee Structure</div>
         
         <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/administration")}
          >
            Administration
          </div>
          <div className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/undertaking")}
          >
            Undertaking</div>
          <div className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/brochure")}
          >
            Information Brochure 2025-26</div>
       
        </div>

        {/* RIGHT CONTENT */}
        <div className="admission-content">
          {/* CARD 1 */}
          <div className="admission-content">
            <h2>Fee Structure 2025-26</h2>
            <a
              href="https://mpgi.ac.in/assets/MPGI%20school%20of%20Engineering%20FRA%20Fees%20Structure%202025-26-BHpk7Hj9.pdf"
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

export default FeeStructure;

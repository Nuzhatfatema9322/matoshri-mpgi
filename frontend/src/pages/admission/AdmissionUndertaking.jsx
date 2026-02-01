import PolyHeader from "../PolyHeader";
import PolyNavbar from "../PolyNavbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function AdmissionUndertaking() {
  const navigate = useNavigate(); // ✅ ADD THIS
  return (
    <>
      <PolyHeader />
      <PolyNavbar />

      <div className="admission-container">
        {/* LEFT SIDEBAR */}
        <div className="admission-sidebar">
          <div
            className="sidebar-item"
            onClick={() =>
              window.location.href =
                "/vishwabharati-polytechnic-institute/admission/courses"
            }
          >
            Courses
          </div>

          <div className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/fee-structure")}
          >
            Fee Structure</div>
        
          <div  className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/administration")}
          >
            
            Administration</div>

          <div className="sidebar-item active">Undertaking</div>

           <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/brochure")}
          >
            Information Brochure 2025-26
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
              href="https://mpgi.ac.in/assets/affidavit%20format%20anti%20ragging-DAcN0zRn.pdf"
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

export default AdmissionUndertaking;

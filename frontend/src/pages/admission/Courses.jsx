import { useNavigate } from "react-router-dom";
import PolyHeader from "../PolyHeader";
import PolyNavbar from "../PolyNavbar";
import Footer from "../../components/Footer";

function Courses() {
   const navigate = useNavigate();
  return (
    <>
    <PolyHeader />
      <PolyNavbar />
    <div className="admission-container">
      
      {/* LEFT SIDEBAR */}
      <div className="admission-sidebar">
        <div
            className="sidebar-item active"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/courses")}
          >
            Courses
          </div>
        <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/fee-structure")}
          >
            Fee Structure
          </div>

         
        <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/administration")}
          >
            Administration
          </div>

          <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/undertaking")}
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

        <div
            className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/brochure")}
          >
            Information Brochure 2025-26
          </div>

        
      </div>

      {/* RIGHT CONTENT */}
      <div className="admission-content">
        <h2>Courses Offered</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Course Offered</th>
              <th>Intake</th>
              <th>DTE Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Diploma in Computer Engineering</td>
              <td>90</td>
              <td>219424510</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Diploma in Information Technology</td>
              <td>60</td>
              <td>219424610</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Diploma in Electrical Engineering</td>
              <td>90</td>
              <td>219429310</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Diploma in E & TC Engineering</td>
              <td>30</td>
              <td>219437210</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Diploma in Civil Engineering</td>
              <td>30</td>
              <td>219419110</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Diploma in Mechanical Engineering</td>
              <td>30</td>
              <td>219461210</td>
            </tr>
          </tbody>
        </table>

        <h3>Eligibility Criteria</h3>
        <p>Pass in SSC (10th standard).</p>
  <br />
        <h3>Documents Required</h3>
        <ul>
          <li>SSC Marksheet</li>
          <li>Leaving Certificate</li>
          <li>Caste Certificate (if applicable)</li>
          <li>Domicile Certificate</li>
        </ul>
  <br />
        <a href="#" className="enquiry-link">
          Click here for F.Y. Admission Enquiry
        </a>
      </div>
    </div>
     <Footer />
    </>
  );
}

export default Courses;

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ManagementNavbar from "../schoolOfManagement/ManagementNavbar";
import Footer from "../../components/Footer";

function ManagCourses() {
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
        <div
            className="sidebar-item active"
            onClick={() => navigate("/school-of-management/admission/courses")}
          >
            Courses
          </div>
        <div
            className="sidebar-item"
            onClick={() => navigate("/school-of-management/admission/fee-structure")}
          >
            Fee Structure
          </div>

        
        <div
            className="sidebar-item"
            onClick={() => navigate("/school-of-management/admission/Information Brochure 2025-26")}
          >
            Information Brochure 2025-26
          </div>

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
        <h2>Courses Offered</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Course Offered</th>
              <th>Intake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Marketing Management</td>
              <td>90</td>
           
            </tr>
            <tr>
              <td>2</td>
              <td>Financial Management</td>
              <td>60</td>
            
            </tr>
            <tr>
              <td>3</td>
              <td>Human Resource Management</td>
              <td>90</td>
         
            </tr>
           
          
          </tbody>
        </table>

        <h3>Eligibility Criteria</h3>
        <p>The basic criteria for MBA Admission Eligibility are that the candidates need to 
            complete their Bachelor's Degree in any stream with at least 50% in aggregate 
            (45% for reserve category) from any UGC/ AIU (Association of Indian Universities) 
            recognized University. MAH-MBA/ MMS/ CAT Examination Score card. Other Entrance 
            Exams score card Like MAT, ATMA as per Gov. Notifications.</p>
  <br />
        <h3>Documents Required</h3>
        <ul>
          <li>SSC & HSC Marksheets



</li>
          <li>Graduation Marksheet (for PG programs)</li>
          <li>Caste Certificate (if applicable)</li>
          <li>Domicile Certificate</li>
          <li>Gap Certificate (if applicable)</li>
          <li>Transfer Certificate</li>
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

export default ManagCourses;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PolyHeader from "../PolyHeader";
import PolyNavbar from "../PolyNavbar";
import Footer from "../../components/Footer";

function Administration() {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    fetch("http://localhost:5000/api/administration")
      .then((res) => res.json())
      .then((data) => setStaff(Array.isArray(data) ? data : []));
  }, []);

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
          <div  className="sidebar-item"
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/fee-structure")}
          >
            Fee Structure</div>
         
          <div className="sidebar-item active">Administration</div>
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
            onClick={() => navigate("/vishwabharati-polytechnic-institute/admission/undertaking")}
          >
            Undertaking
          </div>
          <div className="sidebar-item">Information Brochure 2025-26</div>
        
        </div>

        {/* RIGHT CONTENT */}
        <div className="admission-content">
          <h2>Administration</h2>

         <div className="admin-cards-grid">
  {staff.map((item) => (
    <div className="admin-card" key={item._id}>
      <img
        src={
          item.photo
            ? `http://localhost:5000${item.photo}`
            : "/no-user.png"
        }
        alt={item.name}
        className="admin-photo"
      />

      <h4>{item.name}</h4>

      <p><strong>Designation:</strong> {item.designation}</p>
      <p><strong>Qualification:</strong> {item.qualification}</p>
      <p><strong>Date of Joining:</strong> {item.dateOfJoining}</p>
      <p><strong>Experience:</strong> {item.experience}</p>
      <p><strong>Contact No:</strong> {item.contactNo}</p>
      <p><strong>Section:</strong> {item.section}</p>
    </div>
  ))}
</div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Administration;

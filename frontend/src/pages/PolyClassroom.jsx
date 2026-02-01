import { Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import PolyNavbar from "./PolyNavbar";
import Footer from "../components/Footer";


export default function PolyClassroom() {
 const navigate = useNavigate();
  const location = useLocation();
 
    const isActive = (path) => location.pathname.includes(path);
 
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
       onClick={() => navigate("/vishwabharati-polytechnic-institute")}
     />
     <h1> Vishwabharati Polytechnic Institute</h1>
   </div>
 </header>
    

      {/* ===== NAVBAR ===== */}
      <PolyNavbar />
    <div className="facility-page">
     
 {/* ===== LEFT SIDEBAR ===== */}
      
         <aside className="dept-sidebar">
          <div className="dept-item active"> Classrooms</div>
          
          <div className="dept-item "
           onClick={() =>
          navigate("/school-of-management/facilities/girls-boys-hostel")
        }
      >
         Girls and Boys Hostel</div>
       
      <div
            className={`dept-item ${isActive("library") ? "active" : ""}`}
            onClick={() =>
              navigate("/school-of-engineering/facilities/library")
            }
          >
            Library
          </div>

          <div
            className={`dept-item ${isActive("bus-facilities") ? "active" : ""}`}
            onClick={() =>
              navigate("/school-of-engineering/facilities/bus-facilities")
            }
          >
            Bus Facilities
          </div>

          <div
            className={`dept-item ${isActive("virtual-labs") ? "active" : ""}`}
            onClick={() =>
              navigate("/school-of-engineering/facilities/virtual-labs")
            }
          >
            Virtual Labs
          </div>
          
    

         
        </aside>
      <div className="content">
        <h2>Classrooms</h2>
        <p>
          Spacious, air-conditioned classrooms with modern teaching aids and
          ICT support.
        </p>
      </div>
    </div>
      <Footer />
      </>
  );
}

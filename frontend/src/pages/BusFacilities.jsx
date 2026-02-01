import { useNavigate  } from "react-router-dom";

import logo from "../assets/logo.png";
import EngineeringNavbar from "./EngineeringNavbar";
import Footer from "../components/Footer";

export default function BusFacilities() {
 const navigate = useNavigate();
  return (
    <>
      <header className="header">
   <div className="header-container">
     <img
       src={logo}
       className="logo"
       alt="logo"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/school-of-engineering/facilities/girls-boys-hostel")}
     />
     <h1>School of Engineering</h1>
   </div>
 </header>
    

      {/* ===== NAVBAR ===== */}
      <EngineeringNavbar />
            <div className="facility-page">
        <div className="content soe-bus">
          <h2>Bus Facilities</h2>

      <h3>Gallery</h3>
<div className="soe-gallery">
        <img src="https://mpgi.ac.in/assets/bus1-DTUSD7aY.jpg" alt="Bus 1" />
        <img src= "https://mpgi.ac.in/assets/bus2-CoPw0mSJ.jpg" alt="Bus 2" />
        </div>
        </div>
      </div>
        <Footer />
      
    </>
  );
}

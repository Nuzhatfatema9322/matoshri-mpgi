import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


function EsteemedAlumni() {
 
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
  const path = location.pathname;

  // 1️⃣ faculty → Civil main
  if (path === "/esteemed-alumni") {
    navigate("/school-of-engineering");
  }
  else {
    navigate("/school-of-engineering");
  }
};
  return (
    <>
    <header className="header">
          <div className="header-container">
            <img
              src={logo}
              alt="MPGI Logo"
              className="logo"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            <h1
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              School of Engineering
            </h1>
          </div>
        </header>
      <EngineeringNavbar />
    <section className="alumni-section">
      <h2>School of Engineering Alumni's</h2>

      <div className="alumni-grid">

        <div className="alumni-card">
          <img src="/alumni/nikhil.jpg" alt="Nikhil Borlepawar" />
          <h4>Nikhil Borlepawar</h4>
          <p>Engineer</p>
          <p>SELECTED IN: RAKBAK Ras Al Khaimah, UAE</p>
          <p>PACKAGE: ₹36 LPA</p>
        </div>

        <div className="alumni-card">
          <img src="/alumni/pankaj.jpg" alt="Pankaj Chakrawar" />
          <h4>Pankaj Chakrawar</h4>
          <p>Team Lead</p>
          <p>SELECTED IN: FIS Global</p>
          <p>PACKAGE: ₹18 LPA</p>
        </div>

        <div className="alumni-card">
          <img src="/alumni/apoorva.jpg" alt="Apoorva Bahiwal" />
          <h4>Apoorva Bahiwal</h4>
          <p>Engineer</p>
          <p>SELECTED IN: Cognizant, Pune</p>
          <p>PACKAGE: ₹18 LPA</p>
        </div>

 <div className="alumni-card">
          <img src="/alumni/mohammed.jpg" alt="Mohammed Jafar Umer" />
          <h4>Mohammed Jafar Umer</h4>
          <p>Engineer</p>
          <p>SELECTED IN: Mirafra Technologies, Bangalore</p>
          <p>PACKAGE: ₹18 LPA</p>
        </div>

         <div className="alumni-card">
          <img src="/alumni/jatin.jpg" alt="Jatin Pithadiya" />
          <h4>Jatin Pithadiya</h4>
          <p>Technology Analyst</p>
          <p>SELECTED IN: Infosys</p>
          <p>PACKAGE: ₹18 LPA</p>
        </div>

         <div className="alumni-card">
          <img src="/alumni/mayur.jpg" alt="Mayur Chavan" />
          <h4>Mayur Chavan</h4>
          <p>Engineer (Gold Medalist 2013-14)</p>
          <p>SELECTED IN: Cognizant, Pune</p>
          <p>PACKAGE: ₹18 LPA</p>
        </div>
      </div>
      
    </section>
      <Footer/>
      </>
  );
}

export default EsteemedAlumni;

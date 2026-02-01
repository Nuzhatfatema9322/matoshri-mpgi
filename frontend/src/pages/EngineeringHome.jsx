import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import Hero from "../components/Hero";
import EngNotice from "../components/EngNotice";
import EngineeringLayout from "../pages/EngineeringLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function EngineeringHome() {
    const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
  const path = location.pathname;

  // 1️⃣ faculty → Civil main
  if (path === "/") {
    navigate("/");
  }
  else {
    navigate("/");
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

      {/* IMAGE SLIDER */}
    <Hero institute="engineering" />


<EngNotice/>
      {/* MAIN PAGE CONTENT */}
      <EngineeringLayout />
      <Footer/>
    </>
  );
}

export default EngineeringHome;

import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function PolyHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
  const path = location.pathname;

  
  if (
      path.startsWith("/admission") ||
      path.startsWith("/vishwabharati-polytechnic-institute/admission")
    ) {
      navigate("/vishwabharati-polytechnic-institute");
      return;
    }
  // 1️⃣ faculty → Civil main
   if (
      path ===
        "/vishwabharati-polytechnic-institute/departments/civil/faculty" ||
      path ===
        "/vishwabharati-polytechnic-institute/departments/civil/gallery"
    ) {
      navigate(
        "/vishwabharati-polytechnic-institute/departments/civil"
      );
      return;
    }

  // 2️⃣ Civil main → Poly home
  if (
      path ===
      "/vishwabharati-polytechnic-institute/departments/civil"
    ) {
      navigate("/vishwabharati-polytechnic-institute");
      return;
    }

  // 3️⃣ Poly home → Main home
   if (path === "/vishwabharati-polytechnic-institute") {
      navigate("/");
      return;
    }
    navigate("/");
};


  return (
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
          Vishwabharati Polytechnic Institute
        </h1>
      </div>
    </header>
    
  );
}

export default PolyHeader;

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
const navigate = useNavigate();
  return (
    <header className="dash-header">
      <div className="dash-header-container">
        <img
      src={logo}
      className="logo"
      alt="logo"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
    />
        <h1>Matoshri Pratishthan Group of Institutions, Nanded</h1>
      </div>
    </header>
  );
}

export default DashboardHeader;

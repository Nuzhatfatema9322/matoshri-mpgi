
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src={logo}
          alt="MPGI Logo"
          className="logo"
        />
        <h1>Matoshri Pratishthan Group of Institutions, Nanded</h1>
      </div>
    </header>
  );
}

export default Header;

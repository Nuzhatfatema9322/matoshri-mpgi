import { useState } from "react";
import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function AlumniRegistration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
    <section className="alumni-form-section">
      <h2>Alumni Registration</h2>
      <p>Join our alumni network and stay connected with your alma mater</p>

      {submitted ? (
        <p className="success-msg">
          ✅ Registration submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="alumni-form">
          <div>
            <label>Full Name *</label>
            <input type="text" required />
          </div>

          <div>
            <label>Email *</label>
            <input type="email" required />
          </div>

          <div>
            <label>Phone Number *</label>
            <input type="text" required />
          </div>

          <div>
            <label>Profile Photo</label>
            <input type="file" />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </section>
      <Footer/>
      </>
  );
}

export default AlumniRegistration;

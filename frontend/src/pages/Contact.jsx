import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


function EngineeringContact() {
     const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
  const path = location.pathname;

  // 1️⃣ faculty → Civil main
  if (path === "//school-of-engineering") {
    navigate("/");
  } else if (path === "/school-of-management") {
    navigate("/");
  }
  else {
    navigate("/");
  }
};
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
        onClick={() => navigate("/")}
      />
      <h1>Matoshri Pratishthan Group of Institutions, Nanded </h1>
    </div>
  </header>
      <EngineeringNavbar />
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-left">
          <h3>Contact – School of Engineering</h3>
          <p className="contact-sub">
            We are here to help you. Feel free to reach out to us for any
            academic, admission, or placement related queries.
          </p>

          <div className="contact-card">
            <h4>General Enquiry</h4>
            <p><strong>Email:</strong> info@mpgi.ac.in</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h4>Admissions</h4>
            <p><strong>Email:</strong> admissions@mpgi.ac.in</p>
            <p><strong>Phone:</strong> +91 91234 56789</p>
          </div>

          <div className="contact-card">
            <h4>Placement Cell</h4>
            <p><strong>Email:</strong> placement@mpgi.ac.in</p>
            <p><strong>Phone:</strong> +91 99887 66554</p>
          </div>
        </div>

        {/* RIGHT ADDRESS */}
        <div className="contact-right">
          <h4>Campus Address</h4>
          <p>
            Matoshri Pratishthan Group of Institutions <br />
            School of Engineering <br />
            Vishnupuri, Nanded – 431606 <br />
            Maharashtra, India
          </p>

          <div className="contact-note">
            Office Hours: <br />
            Monday – Saturday <br />
            10:00 AM – 5:00 PM
          </div>
        </div>

      </div>
    </section>
      <Footer/>
      </>
  );
}

export default EngineeringContact;

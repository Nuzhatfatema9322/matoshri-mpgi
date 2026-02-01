import { Link } from "react-router-dom";
// import tekisky from "../assets/tekisky.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-col">
          <h4>MPGI Nanded</h4>
          <p>
            Matoshri Pratishthan Group of Institutions is a premier educational
            institution committed to excellence in engineering and management
            education.
          </p>
          <p>Mon–Sat: 9:00 AM – 5:00 PM</p>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Khupsarwadi, Nanded – 431606</p>
          <p>📞 +91 2462 269900</p>
          <p>✉ info@mpgin.edu.in</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>

          {/* 🔥 ADMIN LOGIN */}
          <Link to="/login" className="footer-link">
            Admin Login
          </Link>

          <p>Admissions</p>
          <p>Departments</p>
        </div>

      </div>

      {/* MAP */}
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps?q=Matoshri%20Pratishthan%20Group%20of%20Institutions&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Matoshri Pratishthan Group of Institutions. All Rights Reserved.</p>

        <div className="tekisky">
          Maintained & Developed by
          {/* <img src={tekisky} alt="Tekisky Logo" /> */}
        </div>
      </div>

    </footer>
  );
}

export default Footer;

import { useState } from "react";
import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function SuggestionPage() {
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
    <section className="suggestion-section">
      <h2>Suggestions</h2>
      <p>We value your feedback. Please share your suggestions with us.</p>

      {submitted ? (
        <div className="suggestion-success">
          ✅ Thank you! Your suggestion has been submitted successfully.
        </div>
      ) : (
        <form className="suggestion-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" required />

          <label>Email Address</label>
          <input type="email" required />

          <label>Your Suggestion</label>
          <textarea rows="5" required />

          <button type="submit">Submit Suggestion</button>
        </form>
      )}
    </section>
        <Footer/>
      </>
  );
}

export default SuggestionPage;

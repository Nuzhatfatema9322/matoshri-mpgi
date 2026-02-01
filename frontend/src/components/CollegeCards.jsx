import { useNavigate } from "react-router-dom";

function CollegeCards() {
  const navigate = useNavigate();

  return (
    <section className="cards-container">
      <h2 className="section-title">Our Colleges</h2>

      {/* 🔥 THIS WRAPPER WAS MISSING */}
      <div className="cards-grid">

        {/* CARD 1 */}
         <div
          className="card"
          onClick={() => navigate("/school-of-engineering")}

          style={{ cursor: "pointer" }}
        >

          <div className="card-header">
            <div className="icon-box">🎓</div>
            <div className="arrow-box">›</div>
          </div>

          <h3>School Of Engineering</h3>
          <p className="code">DTE CODE - 2116</p>
          <p>Description about engineering....</p>
          <button className="see-details">See Details</button>
        </div>

        {/* CARD 2 */}
       <div
          className="card"
          onClick={() => navigate("/school-of-management")}

          style={{ cursor: "pointer" }}
        >
          <div className="card-header">
            <div className="icon-box">🏢</div>
            <div className="arrow-box">›</div>
          </div>

          <h3>School Of Management</h3>
          <p className="code">DTE CODE - 2116</p>
          <p>Description about management....</p>
          <button className="see-details">See Details</button>
        </div>

        {/* POLYTECHNIC */}
        <div
          className="card"
          onClick={() => navigate("/vishwabharati-polytechnic-institute")}

          style={{ cursor: "pointer" }}
        >
          <div className="card-header">
            <div className="icon-box">🏫</div>
            <div className="arrow-box">›</div>
          </div>

          <h3>Vishwabharti Polytechnic</h3>
          <p className="code">DTE CODE - 2194</p>
          <p>Description about polytechnic....</p>
          <button className="see-details">See Details</button>
        </div>

      </div>
    </section>
  );
}

export default CollegeCards;

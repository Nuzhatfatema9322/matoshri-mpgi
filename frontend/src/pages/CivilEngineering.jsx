import { Link } from "react-router-dom";
import PolyHeader from "../pages/PolyHeader";
import PolyNavbar from "../pages/PolyNavbar";
import Footer from "../components/Footer";
import presidentImg from "../assets/hod.jpg"

function CivilEngineering() {
  return (
    <>

      <PolyHeader />
      <PolyNavbar />

      {/* BANNER */}
      <section className="civil-banner">
        <h1>Civil Engineering</h1>
        <h2>At MPGIN</h2>
        <p>Vishwabharati Polytechnic Institute</p>
      </section>

      {/* MAIN LAYOUT */}
      <section className="civil-main">
        {/* LEFT COLUMN */}
        <aside className="civil-left">
          <div className="profile-box">
            <div className="profile-title">
              Profile</div>
            <button className="">Overview</button>
            <Link to="/vishwabharati-polytechnic-institute/departments/civil/faculty">
            <button>Faculty</button></Link>
            
        <Link to="/vishwabharati-polytechnic-institute/departments/civil/gallery">
  <button>Gallery</button>
</Link>

           <Link to="/school-of-management/departments/mba/labs">
            <button>Labs</button>
            </Link>
          </div>

          <div className="other-dept-box">
            <h4>Other Departments</h4>
            <ul>
              <li>Mechanical Engineering</li>
              <li className="active">Civil Engineering</li>
              <li>Electrical Engineering</li>
              <li>Computer Engineering</li>
              <li>Information Technology</li>
              <li>Electronics and Telecommunication</li>
              <li>Basic Sciences and Humanities</li>
            </ul>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <div className="civil-center">
          <h2>Civil Engineering</h2>

          <div className="civil-content-flex">
            <p>
              Welcome to the Department of Civil Engineering. It gives me great
              pleasure to lead a department that stands at the forefront of
              shaping the infrastructure and future of our society.
              <br /><br />
              Civil engineering is more than just building structures; it is
              about designing resilient communities, creating sustainable
              environments, and solving some of the most critical challenges
              facing our world today.
              <br /><br />
              Department of Civil Engineering is one of the established
              departments in the institute. It was started in the year 2009.
              The Department offers diploma in “Civil Engineering” with intake
              capacity of 30.
              <br /><br />
              We have a team of qualified, experienced & dedicated teaching
              faculty. Department is supported by equally dedicated qualified
              laboratory staff.
              <br /><br />
              “Civil engineering is the art of directing the great sources of
              power in nature for the use and convenience of man.”
              <br /><br />
              <strong>– Ms. Goud P.O</strong>
            </p>

            <div className="hod-box">
               <img src={presidentImg} className="profile-img"/>
              <h4>Ms. Goud P.O</h4>
              <span>Head of Department - Civil Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default CivilEngineering;

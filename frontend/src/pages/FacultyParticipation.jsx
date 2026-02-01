import logo from "../assets/logo.png";
import EngineeringNavbar from "../pages/EngineeringNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


function FacultyParticipation() {
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
    <section className="activity-section">
      <div className="activity-box">

        <div className="activity-header">
          Faculty Activities
        </div>

        <div className="activity-body">
          <p className="activity-desc">
            Programs and participation details for faculty members.
          </p>

          <h4>Departmental Activities</h4>

          <div className="activity-table-wrapper">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>SR. NO.</th>
                  <th>TITLE OF THE PROGRAM</th>
                  <th>NAME OF THE EXPERT</th>
                  <th>DATE / DURATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    One day workshop on Recent Advances in Industrial IOT:
                    the future of Manufacturing
                  </td>
                  <td>
                    Dr. Sagar Tambe, Professor, MIT ADT, University Pune
                  </td>
                  <td>9th Nov. 2024</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>
                    One day faculty development Program on Research Methodology,
                    Research Proposals and Publications
                  </td>
                  <td>
                    Dr. M. B. Kokare, Director, SGGS IET, Nanded
                  </td>
                  <td>19th Nov. 2024</td>
                </tr>

                <tr>
                  <td>03</td>
                  <td>
                    One day Student Development Program on Various online Courses
                    through SWAYAM portal
                  </td>
                  <td>
                    Dr. Nitin Darkunde, Department of Mathematics, SRTMU, Nanded
                  </td>
                  <td>23rd Nov. 2024</td>
                </tr>

                <tr>
                  <td>04</td>
                  <td>Palak Melawa</td>
                  <td>-</td>
                  <td>07th Dec. 2024</td>
                </tr>

                <tr>
                  <td>05</td>
                  <td>Alumni Meet - 2025</td>
                  <td>-</td>
                  <td>4th January 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
      <Footer/>
      </>
  );
}

export default FacultyParticipation;

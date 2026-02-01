import { useNavigate  } from "react-router-dom";
import logo from "../assets/logo.png";
import EngineeringNavbar from "./EngineeringNavbar";
import Footer from "../components/Footer";

export default function Library() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
   <div className="header-container">
     <img
       src={logo}
       className="logo"
       alt="logo"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/school-of-engineering/facilities/girls-boys-hostel")}
     />
     <h1>School of Engineering</h1>
   </div>
 </header>
    

      {/* ===== NAVBAR ===== */}
      <EngineeringNavbar />
   <div className="facility-page">
  <div className="content soe-library">
    <h2>Library</h2>
      <p>A well-stocked library with digital resources and study spaces.</p>

      <h3>Library Information</h3>

     <table className="soe-table">

        <thead>
          <tr>
            <th>Category</th>
            <th>Number of Titles</th>
            <th>Number of Books</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Engineering</td>
            <td>2,294</td>
            <td>15,400</td>
          </tr>
          <tr>
            <td>MBA</td>
            <td>1,506</td>
            <td>2,303</td>
          </tr>
          <tr>
            <td>Book Bank</td>
            <td>406</td>
            <td>2,356</td>
          </tr>
          <tr>
            <td>Donation</td>
            <td>567</td>
            <td>636</td>
          </tr>
          <tr>
            <td><b>Total</b></td>
            <td><b>4,773</b></td>
            <td><b>20,695</b></td>
          </tr>
        </tbody>
      </table>

      <h3>Journals</h3>
      <p>Printed: 13</p>
      <p>E-Journals: DELNET Subscription</p>
        </div>
        </div>
     <Footer />
      </>
  );
}

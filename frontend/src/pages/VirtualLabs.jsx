import { useNavigate  } from "react-router-dom";
import logo from "../assets/logo.png";
import EngineeringNavbar from "./EngineeringNavbar";
import Footer from "../components/Footer";


export default function VirtualLabs() {
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
        <div className="content soe-virtual">
          <h2>Virtual Labs</h2>

      <p>
        IIT Bombay Virtual Lab Nodal Center established at our institute in Feb
        2025.
      </p>

   <ul className="soe-list">
        <li>Enhanced safety and accessibility</li>
        <li>Interactive simulations</li>
        <li>Repeat experiments without limitation</li>
        <li>Data analysis and visualization tools</li>
        <li>Reduced cost and risks</li>
      </ul>

      <h3>Key Contacts</h3>

     <table className="soe-contact-table">
        <thead>
          <tr>
            <th>Post</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Outreach Coordinator</td>
            <td>Mr Lakhan Rathod</td>
            <td>Civil Engineering</td>
            <td>lakhan180689@gmail.com</td>
            <td>+91 9763433187</td>
          </tr>
          <tr>
            <td>Nodal Coordinator</td>
            <td>Mr Azhar Ahmed</td>
            <td>Electrical Engineering</td>
            <td>azhar.ahmed.eep@gmail.com</td>
            <td>+91 9272579279</td>
          </tr>
        </tbody>
      </table>
            </div>
      </div>
        <Footer />
    </>
  );
}

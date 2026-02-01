import PolyNotices from "../components/PolyNotices";
import profImg from "../assets/prof.jpg"; 

import { useEffect, useState } from "react";

function PolyLayout() {
  const [notices, setNotices] = useState([]);
  const [active, setActive] = useState("home");

 useEffect(() => {
  fetch(
    "http://localhost:5000/api/notifications/public?instituteType=polytechnic"
  )
    .then((res) => res.json())
    .then((data) => setNotices(data))
    .catch(console.error);
}, []);


  return (
    
    <section className="profile-section">
      <div className="profile-container">

        {/* LEFT SIDEBAR */}
        <aside className="profile-sidebar">
          <button
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </button>
          <button
            className={active === "vision" ? "active" : ""}
            onClick={() => setActive("vision")}
          >
            Vision & Mission
          </button>
          <button
            className={active === "principal" ? "active" : ""}
            onClick={() => setActive("principal")}
          >
            Principal
          </button>

          <button
            className={active === "placements" ? "active" : ""}
            onClick={() => setActive("placements")}
          >
            Placements
          </button>

          <button
            className={active === "iqac" ? "active" : ""}
            onClick={() => setActive("iqac")}
          >
            IQAC
          </button>
          <button
            className={active === "innovation" ? "active" : ""}
            onClick={() => setActive("innovation")}
          >
            Innovation & Incubation Centre
          </button>

          <button
            className={active === "swayam" ? "active" : ""}
            onClick={() => setActive("swayam")}
          >
            SWAYAM-NPTEL
          </button>
        </aside>

        {/* CENTER CONTENT */}
        <div className="profile-content">
             {/* HOME */}
          {active === "home" && (
            <>
          <h3>Welcome to Vishwabharati Polytechnic Institute</h3>

          <h4>About Us</h4>
          <p>
            The Vishwabharati Polytechnic Institute (MPVPI) at Matoshri
            Pratishthan Group of Institutions (MPGI), Nanded, is a premier
            polytechnic institute established in 2009 to provide an ideal
            environment for technical education and to give "technical wings
            to the brain."
          </p>

          <p>
            MPVPI is approved by AICTE, New Delhi and affiliated to MSBTE,
            Mumbai.
          </p>

          <h4>Key Highlights:</h4>
          <ul>
            <li>Recognized by AICTE & DTE</li>
            <li>ISO 9001:2008 Certified Institution</li>
            <li>Independent buildings for each institute</li>
            <li>State-of-the-art laboratories</li>
          </ul>
        
           </>
          )}
 {/* VISION & MISSION */}
          {active === "vision" && (
            <>
              <h3>Vision & Mission</h3>

              <h4>Vision</h4>
              <p>
                To educate youth for the contribution to sustainable economic and
                technological development of the nation based upon ethical
                values with holistic approach.
              </p>

              <h4>Mission</h4>
              <p>
                To create and establish world class educational institutions
                which impart quality education to cater the needs of national and
                global demands in the field of Engineering, Management and IT
                education with value foundations for the welfare of humanity.
              </p>

              <h4>Objectives</h4>
              <ul>
                <li>Provide world class quality education</li>
                <li>Develop synergistic partnership within the institute</li>
                <li>Promote e-learning and e-governance</li>
                <li>Foster enterprising spirit among students</li>
              </ul>
            </>
          )}

          {/* PRINCIPAL */}
          {active === "principal" && (
  <>
    <h3>Prof. Shahaji Deshmukh's Profile</h3>

    <div className="president-layout">
      
      {/* LEFT TEXT */}
      <div>
        <p>
          Greetings and a very warm welcome to School of Engineering, MPGI,
          Nanded!!
        </p>

        <p>
          In this era of Globalization of education, the obvious focus is on the
          quality of education. A good educational institution strives
          continuously for sustenance and enhancement of quality in every field
          of its activity.
        </p>

        <p>
          As School of Engineering, MPGI, Nanded works diligently to realize its
          mission of providing the best learning, teaching and research
          opportunities to students and academicians.
        </p>

        <p>
          The institute always puts an effort to give not only technical
          knowhow but also put continuous efforts to inculcate the good habits
          and high values among the students.
        </p>

        <p>
          The experienced faculty members are dedicated towards their duties.
          The training provided to our graduate students creates the next
          generation of scholars well-prepared to advance knowledge and
          transfer technology.
        </p>

        <p>
          The industrial training taken by the students adds a dimension of
          experience to the undergraduate education that simply cannot be
          replicated in the classroom.
        </p>

        <strong>– Prof. Shahaji Deshmukh</strong>
      </div>

      {/* RIGHT IMAGE */}
      <div className="president-image">
        <img
  src={profImg}
  alt="Principal"
  style={{ width: "180px" }}
/>

        <h4>Prof. Shahaji Deshmukh</h4>
        <span>Principal</span>
      </div>

    </div>
  </>
)}

          {/* PLACEMENTS */}
          {active === "placements" && (
            <>
              <h3>Placements</h3>

              <p>
                The Training and Placement Cell plays a vital role in guiding
                students towards successful professional careers by providing
                industry exposure and skill enhancement.
              </p>

              <h4>Placement Activities</h4>
              <ul>
                <li>Campus recruitment drives</li>
                <li>Industry interaction programs</li>
                <li>Soft skills and aptitude training</li>
                <li>Career guidance sessions</li>
              </ul>

              <h4>Objective</h4>
              <p>
                To prepare students to meet industry expectations and achieve
                excellence in their professional careers.
              </p>
            </>
          )}

          {/* IQAC */}
          {active === "iqac" && (
            <>
              <h3>Internal Quality Assurance Cell (IQAC)</h3>

              <p>
                IQAC is established to ensure quality culture as the prime
                concern for higher education institutions through
                institutionalizing and internalizing all initiatives taken with
                internal and external support.
              </p>

              <h4>Objective</h4>
              <ul>
                <li>Continuous improvement in academic performance</li>
                <li>Quality enhancement initiatives</li>
                <li>Stakeholder satisfaction</li>
              </ul>
            </>
          )}

          {/* INNOVATION */}
          {active === "innovation" && (
            <>
              <h3>Innovation & Incubation Centre</h3>

              <p>
                The Innovation & Incubation Centre aims to foster creativity,
                entrepreneurship and technological advancement by supporting
                innovative ideas and nurturing startups within the institution.
              </p>
            </>
          )}

          {/* SWAYAM */}
          {active === "swayam" && (
            <>
              <h3>SWAYAM - NPTEL</h3>

              <p>
                SWAYAM-NPTEL provides access to high quality online courses for
                students to enhance their technical knowledge and skills beyond
                the curriculum.
              </p>
            </>
          )}

        </div>

<aside className="profile-right">
  <PolyNotices />
</aside>



      </div>
    </section>
  );
}

export default PolyLayout;

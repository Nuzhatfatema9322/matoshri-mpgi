import { useState } from "react";
import presidentImg from "../assets/president.jpg";
import secretaryImg from "../assets/secretary.jpg";
import mdImg from "../assets/md.jpg";

function BoardProfile() {
  const [activePage, setActivePage] = useState("president");

  return (
    <section className="profile-section">
      <div className="profile-container2">

        {/* SIDEBAR – STRUCTURE SAME */}
        <div className="profile-sidebar">
          <button onClick={() => setActivePage("president")}>President</button>
          <button onClick={() => setActivePage("secretary")}>Secretary</button>
          <button onClick={() => setActivePage("md")}>Managing Director</button>
          <button onClick={() => setActivePage("board")}>Board of Directors</button>
          <button onClick={() => setActivePage("vision")}>Vision & Mission</button>
        </div>

        {/* CONTENT */}
        <div className="profile-content">

          {/* ================= PRESIDENT ================= */}
          {activePage === "president" && (
            <>
              <div className="president-layout">
                <div className="president-text">
                  <h3>Sow. Jayshree Kamaji Pawar's Profile</h3>
                  <p className="desk-title">From, President's Desk</p>

                  <p>
                    It gives me immense pleasure to welcome you to the Matoshri
                    Pratishthan Group of Institutions (MPGI) family.
                  </p>

                  <p>
                    Our vision extends beyond conventional education – we aim to
                    create an ecosystem that nurtures innovation, critical thinking,
                    and social responsibility.
                  </p>

                  <p>
                    – 25+ advanced laboratories <br />
                    – 10,000+ sq.ft. library <br />
                    – Incubation center <br />
                    – Sports complex
                  </p>
                </div>

                <div className="president-image">
                  <img src={presidentImg} alt="President" />
                  <p className="president-name">Sow. Jayshree Kamaji Pawar</p>
                  <p className="president-designation">President</p>
                </div>
              </div>

              <div className="president-signature">
                <p>
                  I invite you to embark on this transformative educational journey
                  with us.
                </p>
                <p className="signature-name">
                  — Sow. Jayshree Kamaji Pawar
                </p>
              </div>
            </>
          )}

          {/* ================= SECRETARY ================= */}
          {activePage === "secretary" && (
            <>
              <div className="president-layout">

                <div className="president-text">
                  <h3>Shri. Venkatchari Bramhachari Vreglum's Profile</h3>
                  <p className="desk-title">From, Secretary's Desk</p>

                  <p>
                    As Secretary of MPGI, I oversee the administrative excellence
                    that forms the backbone of our institution. Our key
                    administrative achievements include:
                  </p>

                  <p>
                    <strong>Operational Excellence:</strong> ISO 9001:2015
                    certified processes – 100% digital administration system –
                    24/7 student support services – Transparent governance
                    framework
                  </p>

                  <p>
                    <strong>Infrastructure Development:</strong> ₹50 crores
                    invested in campus development – Smart classrooms with IoT
                    integration – Hostel capacity expanded to 2000 students –
                    State-of-the-art auditorium complex
                  </p>

                  <p>
                    <strong>Student Services:</strong> One-stop student portal –
                    Grievance redressal within 48 hours – Scholarship disbursement
                    system – Career guidance cell
                  </p>

                  <p>
                    Our administrative team of 150+ professionals ensures smooth
                    functioning of all academic and non-academic activities.
                    I welcome you to experience our efficient systems designed
                    for your success.
                  </p>
                </div>

                <div className="president-image">
                  <img src={secretaryImg} alt="Secretary" />
                  <p className="president-name">
                    Shri. Venkatchari Bramhachari Vreglum
                  </p>
                  <p className="president-designation">Secretary</p>
                </div>

              </div>

              <div className="president-signature">
                <p className="signature-name">
                  — Shri. Venkatchari Bramhachari Vreglum
                </p>
              </div>
            </>
          )}

        {/* ================= MANAGING DIRECTOR ================= */}
          {activePage === "md" && (
            <>
              <div className="president-layout">

                <div className="president-text">
                  <h3>Mr. Arvind Patil's Profile</h3>
                  <p className="desk-title">From, Managing Director's Desk</p>

                  <p>
                    Dear Students, Faculty, Staff, and Parents,
                  </p>

                  <p>
                    As the Managing Director of Matoshri Pratishthan Group of
                    Institutions, I am filled with pride and excitement to see
                    our institute continue to thrive. Our mission remains
                    steadfast: to provide a cutting-edge technical education
                    that prepares our students to become leaders in their
                    respective fields.
                  </p>

                  <p>
                    We are committed to fostering a learning environment that
                    encourages innovation, critical thinking, and collaboration.
                  </p>

                  <p>
                    Our faculty is comprised of highly qualified professionals
                    who are dedicated to imparting knowledge. They consistently
                    stay abreast of the latest trends in instruction.
                  </p>

                  <p>
                    We are proud to have established strong industry partnerships
                    that provide practical exposure, internships,
                    apprenticeships, and future employment opportunities.
                  </p>

                  <p>
                    We are not just focused on technical skills. We strive to
                    develop well-rounded individuals capable of contributing to
                    society in meaningful ways.
                  </p>
                </div>

                <div className="president-image">
                  <img src={mdImg} alt="Managing Director" />
                  <p className="president-name">Mr. Arvind Patil</p>
                  <p className="president-designation">
                    Managing Director
                  </p>
                </div>

              </div>
            </>
          )}

          {/* ================= BOARD ================= */}
          {activePage === "board" && (
            <>
              <h3>Board of Directors</h3>
              <ul>
                <li>Sow. Jayshree Kamaji Pawar – President</li>
                <li>Sow. Alka Rajeshwar Satelikar – Vice President</li>
                <li>Shri. Venkatchari Bramhachari Vreglum – Secretary</li>
                <li>Shri. Arvind Shankarrao Patil – Managing Director</li>
                <li>Shri. Vimal Hanmantrao Sirsat – Joint Secretary</li>
                <li>Shri. Kamaji Gangadhharao Pawar – Member</li>
                <li>Smt. Sunita Ganpatrao Tamalwald –Member</li>
                <li>Shri. Ankush Damodarrao More – Member</li>
                <li>Sow. Manisha Devidas Pawar – Member</li>
                <li>Shri. Omprasad Venkatchari Vreglum – Member</li>
                <li>Kum. Shraddha Kamaji Pawar – Member</li>
                <li>Shri. Sadanand Arvind Patil – Member</li>
              </ul>
            </>
          )}

          {/* ================= VISION ================= */}
          {activePage === "vision" && (
            <>
              <h3>Our Vision</h3>
            <li>
               To be one of the leading Institutions for Engineering education, developing proficient Engineers with global acceptance in the service of mankind.
              </li>

<br />
               <h3>Our Mission</h3>
               <li>
                Providing quality Engineering education to cater to the needs of industry and society with a multidisciplinary approach on a sustainable basis.
                </li>

               <li>
                Developing globally competent Engineers having the ability to solve real-life problems, addressing environmental issues through technological innovation.
               </li>
            </>
          )}

        </div>
      </div>
    </section>
  );
}

export default BoardProfile;

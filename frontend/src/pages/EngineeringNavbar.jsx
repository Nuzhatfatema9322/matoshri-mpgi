import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EngineeringNavbar() {
   const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="poly-nav">
      <ul className="poly-nav-list">

        <li onClick={() => navigate("/")}>Home</li>

    
      <li
  onMouseEnter={() => setOpenMenu("departments")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Departments ▾

  {openMenu === "departments" && (
    <ul className="dropdown-menu">
      <li
        onClick={() =>
          navigate(
            "/vishwabharati-polytechnic-institute/departments/civil"
          )
        }
      >
        Civil Engineering
      </li>
    </ul>
  )}
</li>





         {/* ADMISSION */}
        <li
          onMouseEnter={() => setOpenMenu("addm")}
          onMouseLeave={() => setOpenMenu(null)}
          onClick={() => toggleDropdown("addm")}
        >
          Admission ▾
          {openMenu === "addm" && (
            <ul className="dropdown-menu">
              <li
                onClick={() =>
                  navigate(
                    "/vishwabharati-polytechnic-institute/admission/courses"
                  )
                }
              >
                Courses
              </li>

              <li
                onClick={() =>
                  navigate(
                    "/vishwabharati-polytechnic-institute/admission/fee-structure"
                  )
                }
              >
                Fee Structure
              </li>

              <li
                onClick={() =>
                  navigate(
                    "/vishwabharati-polytechnic-institute/admission/administration"
                  )
                }
              >
                Administration
              </li>

              <li
                onClick={() =>
                  window.open(
                    "https://fe2025.mahacet.org/StaticPages/HomePage",
                    "_blank"
                  )
                }
              >
                Admission process 2025-26
              </li>

              <li
                onClick={() =>
                  navigate(
                    "/vishwabharati-polytechnic-institute/admission/undertaking"
                  )
                }
              >
                Undertaking
              </li>

              <li
                onClick={() =>
                  navigate(
                    "/vishwabharati-polytechnic-institute/admission/brochure"
                  )
                }
              >
                Information Brochure 2025-2026
              </li>

           
            </ul>
          )}
        </li>
       {/* FACILITIES */}
<li
  onMouseEnter={() => setOpenMenu("facilities")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Facilities ▾
  {openMenu === "facilities" && (
    <ul className="dropdown-menu">
      <li
        onClick={() =>
          navigate("/school-of-engineering/facilities/classrooms")
        }
      >
        Classrooms
      </li>

      <li
        onClick={() =>
          navigate("/school-of-engineering/facilities/girls-boys-hostel")
        }
      >
        Girls and Boys Hostel
      </li>

       <li onClick={() => navigate("/school-of-engineering/facilities/library")}>
        Library
      </li>

      <li onClick={() => navigate("/school-of-engineering/facilities/virtual-labs")}>
        Virtual Labs
      </li>

      <li onClick={() => navigate("/school-of-engineering/facilities/bus-facilities")}>
        Bus Facilities
      </li>
    </ul>
  )}
</li>

        <li
  onMouseEnter={() => setOpenMenu("alumni")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Alumni ▾
  {openMenu === "alumni" && (
    <ul className="dropdown-menu">
      <li
        onClick={() =>
          navigate("/school-of-engineering/esteemed-alumni")
        }
      >
        Esteemed Alumni
      </li>

      <li
        onClick={() =>
          navigate("/school-of-engineering/alumni-registration")
        }
      >
        Alumni Registration
      </li>
    </ul>
  )}
</li>

       <li
  onMouseEnter={() => setOpenMenu("activities")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Activities / Events ▾
  {openMenu === "activities" && (
    <ul className="dropdown-menu">
      

      <li
        onClick={() =>
          navigate(
            "/school-of-engineering/departmental-activities"
          )
        }
      >
        Faculty Participation
      </li>
    </ul>
  )}
</li>

 <li
  onMouseEnter={() => setOpenMenu("quick")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Quick Links ▾

  {openMenu === "quick" && (
    <ul className="dropdown-menu">
      <li
        onClick={() =>
          window.open(
            "https://srtmun.ac.in/enrolment-open-for-swayam-nptel-online-courses-january-to-april-2024/",
            "_blank"
          )
        }
      >
        SRTMU University
      </li>

      <li
        onClick={() =>
          window.open(
            "https://dbatu.ac.in/",
            "_blank"
          )
        }
      >
        DBATU University
      </li>

      <li
        onClick={() =>
          window.open(
            "https://nptel.ac.in/",
            "_blank"
          )
        }
      >
        NPTEL
      </li>
    </ul>
  )}
</li>



       <li
  onMouseEnter={() => setOpenMenu("suggest")}
  onMouseLeave={() => setOpenMenu(null)}
>
  Suggestion Box ▾

  {openMenu === "suggest" && (
    <ul className="dropdown-menu">
      <li onClick={() => navigate("/school-of-engineering/suggestion/alumni")}>
        Alumni Suggestions
      </li>
      <li onClick={() => navigate("/school-of-engineering/suggestion/parent")}>
        Parent Suggestions
      </li>
      <li onClick={() => navigate("/school-of-engineering/suggestion/student")}>
        Student Suggestions
      </li>
      <li onClick={() => navigate("/school-of-engineering/suggestion/staff")}>
        Staff Suggestions
      </li>
      <li onClick={() => navigate("/school-of-engineering/suggestion/press")}>
        Press Suggestions
      </li>
    </ul>
  )}
</li>




      <li onClick={() => navigate("/school-of-engineering/contact")}>
  Contact
</li>
      
      </ul>
    </nav>
  );
}

export default EngineeringNavbar;

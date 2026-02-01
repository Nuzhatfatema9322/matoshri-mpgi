import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PolyHome from "../pages/PolyHome";
import EngineeringHome from "../pages/EngineeringHome";
import ManagementHome from "../pages/schoolOfManagement/ManagementHome";
import ManagementDean from "../pages/schoolOfManagement/ManagementDean";
import ManagementMBAProfile from "../pages/schoolOfManagement/ManagementMBAProfile";
import ManagementFaculty from "../pages/schoolOfManagement/ManagementFaculty";
import Classrooms from "../pages/schoolOfManagement/Classrooms";
import Hostel from "../pages/schoolOfManagement/Hostel";
import EngClassroom from "../pages/EngClassroom";
import EngHostel from "../pages/EngHostel";
import PolyClassroom from "../pages/PolyClassroom";
import PolyHostel from "../pages/PolyHostel";
import EsteemedAlumni from "../pages/EsteemedAlumni";
import AlumniRegistration from "../pages/AlumniRegistration";
import FacultyParticipation from "../pages/FacultyParticipation";
import EngineeringContact from "../pages/Contact";
import SuggestionPage from "../pages/SuggestionPage";
import Library from "../pages/Library";
import BusFacilities from "../pages/BusFacilities";
import VirtualLabs from "../pages/VirtualLabs";



import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

// POLYTECHNIC – CIVIL
import Courses from "../pages/admission/Courses";
import Administration from "../pages/admission/Administration";
import AdmissionUndertaking from "../pages/admission/AdmissionUndertaking";
import InformationBrochure from "../pages/admission/InformationBrochure";
import FeeStructure from "../pages/admission/FeeStructure";
import ManagCourses from "../pages/admission/ManagCourses";
import ManagFee from "../pages/admission/ManagFee";
import ManaUnder from "../pages/admission/ManaUnder";
import ManagInformationBrochure from "../pages/admission/ManagInformationBrochure";

import CivilEngineering from "../pages/CivilEngineering";
import CivilGallery from "../pages/CivilGallery";
import CivilFaculty from "../pages/CivilFaculty";



function AppRoutes() {
  return (
    <Routes>

      {/* MAIN WEBSITE HOME */}
      <Route path="/" element={<Home />} />

      {/* ================= POLYTECHNIC ================= */}
      <Route
        path="/vishwabharati-polytechnic-institute"
        element={<PolyHome />}
      />

<Route
  path="/vishwabharati-polytechnic-institute/admission/courses"
  element={<Courses />}
/>
<Route path="/vishwabharati-polytechnic-institute/admission/administration"
 element={<Administration />} />

<Route
  path="/vishwabharati-polytechnic-institute/admission/undertaking"
  element={<AdmissionUndertaking />}
/>
<Route path="/vishwabharati-polytechnic-institute/admission/brochure" 
element={<InformationBrochure />} />

<Route path="/vishwabharati-polytechnic-institute/admission/fee-structure" 
element={<FeeStructure />} />

 <Route
    path="/vishwabharati-polytechnic-institute/facilities/classrooms"
    element={<PolyClassroom />}
  />
 <Route
    path="/vishwabharati-polytechnic-institute/facilities/girls-boys-hostel"
    element={<PolyHostel />}
  />

  {/* ================= POLYTECHNIC – CIVIL ================= */}
      <Route
        path="/vishwabharati-polytechnic-institute/departments/civil"
        element={<CivilEngineering />}
      />

      <Route
        path="/vishwabharati-polytechnic-institute/departments/civil/gallery"
        element={<CivilGallery />}
      />

      <Route
        path="/vishwabharati-polytechnic-institute/departments/civil/faculty"
        element={<CivilFaculty />}
      />

      {/* ================= ENGINEERING ================= */}
      <Route
        path="/school-of-engineering"
        element={<EngineeringHome />}
      />
<Route
    path="/school-of-engineering/facilities/classrooms"
    element={<EngClassroom />}
  />
 <Route
    path="/school-of-engineering/facilities/girls-boys-hostel"
    element={<EngHostel />}
  />
<Route
  path="/school-of-engineering/facilities/library"
  element={<Library />} />
  <Route path="/school-of-engineering/facilities/bus-facilities" 
  element={<BusFacilities />} />
  <Route path="/school-of-engineering/facilities/virtual-labs" 
  element={<VirtualLabs />} />



<Route
  path="/school-of-management/departments/mba/labs"
  element={<Library />}
/>

<Route
  path="/school-of-engineering/esteemed-alumni"
  element={<EsteemedAlumni />}
/>

<Route
  path="/school-of-engineering/alumni-registration"
  element={<AlumniRegistration />}
/>
<Route
  path="/school-of-engineering/departmental-activities"
  element={<FacultyParticipation />}
/>

<Route
  path="/school-of-engineering/contact"
  element={<EngineeringContact />}
/>



<Route
  path="/school-of-engineering/suggestion/:type"
  element={<SuggestionPage />}
/>


<Route
  path="/school-of-management"
  element={<ManagementHome />}
/>
<Route
  path="/school-of-management/dean"
  element={<ManagementDean />}
/>

<Route
  path="/school-of-management/departments/mba/profile"
  element={<ManagementMBAProfile />}
/>
<Route path="/school-of-management/departments/mba/faculty" 
element={<ManagementFaculty />} />

<Route
    path="/school-of-management/facilities/classrooms"
    element={<Classrooms />}
  />
  <Route
    path="/school-of-management/facilities/girls-boys-hostel"
    element={<Hostel />}
  />

  <Route
  path="/school-of-management/admission/courses"
  element={<ManagCourses />}
/>
<Route path="/school-of-management/admission/fee-structure" 
element={<ManagFee />} />

<Route path="/school-of-management/admission/undertaking"
 element={<ManaUnder />} />

 <Route path="/school-of-management/admission/Information Brochure 2025-26" 
element={<ManagInformationBrochure />} />

      {/* ================= AUTH / ADMIN ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default AppRoutes;

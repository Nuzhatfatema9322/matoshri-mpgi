import { useState } from "react"
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../components/DashboardHeader";
import DashboardIntro from "../components/DashboardTopBar";
import DashboardTabs from "../components/DashboardTabs";

import NotificationTable from "../components/NotificationTable";
import NotificationModal from "../components/NotificationModal";

import SliderTable from "../components/SliderTable";
import SliderModal from "../components/SliderModal";

import GalleryTable from "../components/GalleryTable";
import GalleryModal from "../components/GalleryModal";

import FacultyTable from "../components/FacultyTable";
import FacultyModal from "../components/FacultyModal";

import AdministrationTable from "../components/AdministrationTable";
import AdministrationModal from "../components/AdministrationModal";

import CustomDropdown from "../components/CustomDropdown"; // 🔥 CUSTOM DROPDOWN

function Dashboard() {  //admin panel parent page
  const navigate = useNavigate();

  //Token delete
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

    // 🔥 GLOBAL INSTITUTE STATE
  const [selectedInstitute, setSelectedInstitute] = useState("engineering");

   // 🔥 DROPDOWN OPTIONS
  const instituteOptions = [
    { label: "Engineering", value: "engineering" },
    { label: "Polytechnic", value: "polytechnic" },
    { label: "Management", value: "management" }
  ];

  /* NOTIFICATION */
  const [showModal, setShowModal] = useState(false); //Modal open/close
  const [editData, setEditData] = useState(null); //Edit or Create
  const [reload, setReload] = useState(false); //Data refresh

  /* SLIDER */
  const [showSliderModal, setShowSliderModal] = useState(false);
  const [editSliderData, setEditSliderData] = useState(null);
  const [newSlider, setNewSlider] = useState(null);

  /* GALLERY */
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [newGallery, setNewGallery] = useState(null);

  /* FACULTY */
const [showFacultyModal, setShowFacultyModal] = useState(false);
const [editFacultyData, setEditFacultyData] = useState(null);
const [newFaculty, setNewFaculty] = useState(null);

const [showAdminModal, setShowAdminModal] = useState(false);
const [editAdminData, setEditAdminData] = useState(null);
const [newAdmin, setNewAdmin] = useState(null);
  return (
    <>
      <DashboardHeader />
      <DashboardIntro onLogout={handleLogout} />
      <DashboardTabs />

 {/* 🔥 INSTITUTE SELECTOR (CUSTOM DROPDOWN) */}
      <div style={{ padding: "10px 20px", maxWidth: "320px" }}>
        <label style={{ fontWeight: "600", marginBottom: "6px", display: "block" }}>
          Select Institute
        </label>

        <CustomDropdown
          options={instituteOptions}
          value={selectedInstitute}
          onChange={setSelectedInstitute}
          placeholder="Select Institute"
        />
      </div>


       <NotificationTable
        institute={selectedInstitute}
        setInstitute={setSelectedInstitute}
        onAdd={() => {
          setEditData(null);
          setShowModal(true);
        }}
        onEdit={(data) => {
          setEditData(data);
          setShowModal(true);
        }}
        reload={reload}
      />

       {showModal && (
        <NotificationModal
          institute={selectedInstitute}
          editData={editData}
          onClose={() => setShowModal(false)}
          refresh={() => setReload(!reload)}
        />
      )}

      <SliderTable
        onAdd={() => setShowSliderModal(true)}
        onEdit={(item) => setEditSliderData(item)}
        newItem={newSlider}
      />

      {showSliderModal && (
        <SliderModal
          editData={editSliderData}
          onClose={() => setShowSliderModal(false)}
          refresh={(img) => setNewSlider(img)}
        />
      )}

      <GalleryTable
        onAdd={() => setShowGalleryModal(true)}
        newItem={newGallery}
      />

      {showGalleryModal && (
  <GalleryModal
    onClose={() => setShowGalleryModal(false)}
    refresh={(img) => setNewGallery(img)}
    selectedInstitute={selectedInstitute}   // 🔥 ADD THIS
  />
)}


      <FacultyTable
  onAdd={() => {
    setEditFacultyData(null);
    setShowFacultyModal(true);
  }}
  onEdit={(item) => {
    setEditFacultyData(item);
    setShowFacultyModal(true);
  }}
  newItem={newFaculty}
/>

{showFacultyModal && (
  <FacultyModal
    editData={editFacultyData}
    onClose={() => setShowFacultyModal(false)}
    refresh={(faculty) => setNewFaculty(faculty)}

    // 🔥🔥 ADD THIS
    instituteType={selectedInstitute}
  />
)}


<div className="admin-panel">

  <div className="notify-box">   {/* 🔥 SAME AS OTHER TABLES */}
    <AdministrationTable
      onAdd={() => {
        setEditAdminData(null);
        setShowAdminModal(true);
      }}
      onEdit={(item) => {
        setEditAdminData(item);
        setShowAdminModal(true);
      }}
      newItem={newAdmin}
    />
  </div>

  {showAdminModal && (
    <AdministrationModal
      editData={editAdminData}
      onClose={() => setShowAdminModal(false)}
      refresh={(staff) => setNewAdmin(staff)}
    />
  )}

</div>

    </>
  );
}

export default Dashboard;

import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import NoticeBar from "../components/NoticeBar";
import CollegeCards from "../components/CollegeCards";
import BoardProfile from "../components/BoardProfile";
import Footer from "../components/Footer";
import PopupModal from "../components/PopupModal";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

 useEffect(() => {
  if (sessionStorage.getItem("popupClosed") === "true") return;

  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

const closePopup = () => {
  sessionStorage.setItem("popupClosed", "true");
  setShowPopup(false);
};


  return (
    <>
      <Header />
    <Hero institute="matoshri" />
      <NoticeBar />
      <CollegeCards />
      <BoardProfile />
      <Footer />

      {/* 🔥 POPUP LAST ME RAKHO */}
      {showPopup && <PopupModal onClose={closePopup} />}
    </>
  );
}

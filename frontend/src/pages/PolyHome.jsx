

import PolyHeader from "./PolyHeader";
import PolyNavbar from "./PolyNavbar";
import Hero from "../components/Hero";
import PolyLayout from "./PolyLayout";
import Footer from "../components/Footer";

function PolyHome() {
  return (
    <>
      <PolyHeader />
      <PolyNavbar />
      <Hero institute="polytechnic" />
      <PolyLayout />
      <Footer />
    </>
  );
}

export default PolyHome;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomObjServices, HomObjWork } from "../components/InfoSection/Data";
import InfoSection2 from "../components/InfoSection2";
import { HomObjAbout } from "../components/InfoSection2/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomObjServices} />
      <InfoSection {...HomObjWork} />
      <Services />
      <InfoSection2 {...HomObjAbout} />
      <Footer />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import ContactMe from "../components/Contact/new";

const ContactMePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ScrollToTop />
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <ContactMe />
    </div>
  );
};

export default ContactMePage;

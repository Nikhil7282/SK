import "./App.css";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SecondPage from "./pages/SecondPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import Parallax from "./components/Parallax";
import Footer from "./components/Footer";

import { useEffect, useRef, useState } from "react";
import Services from "./pages/Services";
import Projects from "./pages/ProjectsPage";
import { useGlobal } from "./context/GlobalContext";

function App() {
  const global = useGlobal();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      global?.setNavbarVisibility(true);
    } else {
      global?.setNavbarVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {global?.navbarVisibility && <Navbar />}
      <HomePage />
      <SecondPage />
      <Parallax />
      <Projects />
      <Services />
      <TeamPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";

import Navbar from "./components/Navbar";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import { useEffect } from "react";
import Services from "./pages/Services";
import Projects from "./pages/ProjectsPage";
import { useGlobal } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";

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
      <Projects />
      <Services />
      <TeamPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;

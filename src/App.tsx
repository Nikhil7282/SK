import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/Services";
import SecondPage from "./pages/SecondPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ClientsPage from "./pages/ClientsPage";
// import TeamPage from "./pages/TeamPage";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* {isVisible && <Navbar isVisible={isVisible} />} */}
      <HomePage />
      <SecondPage />
      {/* <ServicesPage />
      <ContactPage /> */}
      {/* <ProjectsPage />
      <ClientsPage /> */}
      {/* <TeamPage /> */}
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SecondPage from "./pages/SecondPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

// import ServicesPage from "./pages/Services";
// import ProjectsPage from "./pages/ProjectsPage";
// import ClientsPage from "./pages/ClientsPage";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
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
      {isVisible && (
        <Navbar isVisible={isVisible} ref={teamRef} contactRef={contactRef} />
      )}
      <HomePage />
      <SecondPage />
      {/* <ServicesPage /> */}
      {/* <ProjectsPage />
      <ClientsPage /> */}
      <TeamPage ref={teamRef} />
      <ContactPage ref={contactRef} />
    </>
  );
}

export default App;

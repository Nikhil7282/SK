import { useEffect, useRef, useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SecondPage from "./pages/SecondPage";
import TeamPage from "./pages/TeamPage";

// import ServicesPage from "./pages/Services";
// import ContactPage from "./pages/ContactPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ClientsPage from "./pages/ClientsPage";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const teamRef = useRef<HTMLDivElement>(null);

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
      {isVisible && <Navbar isVisible={isVisible} ref={teamRef} />}
      <HomePage />
      <SecondPage />
      {/* <ServicesPage />
      <ContactPage /> */}
      {/* <ProjectsPage />
      <ClientsPage /> */}
      <TeamPage ref={teamRef} />
    </>
  );
}

export default App;

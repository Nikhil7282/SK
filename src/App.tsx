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

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

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
        <Navbar
          isVisible={isVisible}
          ref={teamRef}
          contactRef={contactRef}
          serviceRef={serviceRef}
        />
      )}
      <HomePage />
      <SecondPage />
      <Parallax />
      <Services ref={serviceRef} />
      <TeamPage ref={teamRef} />
      <ContactPage ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;

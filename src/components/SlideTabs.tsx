import { useState } from "react";
import Tabs from "./Tabs";
import HoverCursor from "./HoverCursor";
import { useGlobal } from "../context/GlobalContext";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const global = useGlobal();

  return (
    <ul
      className={`flex flex-1 items-center justify-end gap-3 ${
        global?.isMenuOpen &&
        "flex-col bg-white/90 backdrop-blur-sm gap-5 p-3 rounded-2xl"
      }`}
      onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
    >
      <Tabs
        setPosition={setPosition}
        onClick={() => {
          if (
            global?.projectRef &&
            "current" in global?.projectRef &&
            global?.projectRef.current
          ) {
            global?.projectRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        What We Did
      </Tabs>
      <Tabs
        setPosition={setPosition}
        onClick={() => {
          if (
            global?.serviceRef &&
            "current" in global?.serviceRef &&
            global?.serviceRef.current
          ) {
            global?.serviceRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        What We Provide
      </Tabs>
      <Tabs
        setPosition={setPosition}
        onClick={() => {
          if (
            global?.teamRef &&
            "current" in global?.teamRef &&
            global?.teamRef.current
          ) {
            global?.teamRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Who We Are
      </Tabs>
      <Tabs
        setPosition={setPosition}
        onClick={() => {
          if (
            global?.contactRef &&
            "current" in global?.contactRef &&
            global?.contactRef.current
          ) {
            global?.contactRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Contact Us
      </Tabs>
      {!global?.isMenuOpen && <HoverCursor position={position} />}
    </ul>
  );
};

export default SlideTabs;

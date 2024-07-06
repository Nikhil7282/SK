import { forwardRef, RefObject, useState } from "react";
import Tabs from "./Tabs";
import HoverCursor from "./HoverCursor";
type Props = {
  contactRef: RefObject<HTMLDivElement>;
  serviceRef: RefObject<HTMLDivElement>;
};

const SlideTabs = forwardRef<HTMLDivElement, Props>(
  ({ contactRef, serviceRef }, ref) => {
    const [position, setPosition] = useState({
      left: 0,
      width: 0,
      opacity: 0,
    });

    return (
      <ul
        className="flex flex-1 items-center justify-end gap-3"
        onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
      >
        <Tabs
          setPosition={setPosition}
          onClick={() => {
            console.log(serviceRef);

            if (serviceRef && "current" in serviceRef && serviceRef.current) {
              serviceRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          What We Provide
        </Tabs>
        <Tabs
          setPosition={setPosition}
          onClick={() => {
            if (ref && "current" in ref && ref.current) {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Team
        </Tabs>
        <Tabs
          setPosition={setPosition}
          onClick={() => {
            if (contactRef && "current" in contactRef && contactRef.current) {
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us
        </Tabs>
        <HoverCursor position={position} />
      </ul>
    );
  }
);

export default SlideTabs;

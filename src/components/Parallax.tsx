import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ParallaxBackGround from "../assets/ParallaxBackground.jpg";
import ParallaxBottom from "../assets/PrallaxBottom.png";

function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-zinc-900 text-6xl relative z-10"
      >
        {" "}
        Parallax
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ParallaxBackGround})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${ParallaxBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
}

export default Parallax;

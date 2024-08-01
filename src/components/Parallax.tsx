import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import newParallaxBackGround from "../assets/new-parallax-background-main.jpg";
import newParallaxBottom from "../assets/new-parallax-background.png";

import Reveal from "./Reveal";

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
      className="w-full h-screen overflow-hidden relative grid place-items-start justify-center"
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-zinc-900 relative z-30 p-5 flex flex-col justify-center items-center"
      >
        {" "}
        <Reveal>
          <div className="text-4xl p-5 text-white">
            If you can Imagine it, We can build it
          </div>
        </Reveal>
        <a href="#" className="text_2">
          <div id="button_p" className="ac_btn btn w-fit">
            <Reveal>
              <>Contact Us</>
            </Reveal>
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
        </a>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage: `url(${ParallaxBackGround})`,
          backgroundImage: `url(${newParallaxBackGround})`,

          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          // backgroundImage: `url(${ParallaxBottom})`,
          backgroundImage: `url(${newParallaxBottom})`,

          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
}

export default Parallax;

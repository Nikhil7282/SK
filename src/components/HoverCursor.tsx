import { motion } from "framer-motion";

function HoverCursor({ position }: any) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
}

export default HoverCursor;

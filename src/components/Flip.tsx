import { motion } from "framer-motion";
function Flip({ children }: { children: string }) {
  return (
    <motion.div
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-white"
      initial="initial"
      whileHover="hovered"
    >
      <div>
        {children.split(" ").map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-110%" },
            }}
            transition={{ delay: 0.2 * index }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split(" ").map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ delay: 0.2 * index }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Flip;

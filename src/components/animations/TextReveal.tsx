import { motion } from "framer-motion";

function TextReveal({ children }: { children: string }) {
  const characters = children.split("");
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      className="inline-block"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          transition={{ duration: 0.5 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default TextReveal;

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  distance = 24,
  once = true,
  amount = 0.2,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

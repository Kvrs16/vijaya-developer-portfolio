import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
export default function Reveal({
  children,
}: {
  children: ReactNode;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.55 }}
    >
      {children}
    </motion.div>
  );
}

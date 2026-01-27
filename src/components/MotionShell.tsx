import { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MotionShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 8, scale: 0.995 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.995 },
      };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="pt-16 relative z-0"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: prefersReducedMotion ? 0.12 : 0.22 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
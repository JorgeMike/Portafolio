import type { ReactNode } from "react";
import { motion } from "motion/react";

function Reveal({
  children,
  className,
  onAnimationComplete,
}: {
  children: ReactNode;
  className?: string;
  onAnimationComplete?: () => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
      className={`overflow-hidden ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;

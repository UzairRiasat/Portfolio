"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const MotionSection = ({ children, className, delay = 0 }: MotionSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 1000, transformOrigin: "center top" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;

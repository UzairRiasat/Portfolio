"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Photo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 120, damping: 18 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), spring);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative"
      style={{
        width: "clamp(220px, 26vw, 420px)",
        height: "clamp(220px, 26vw, 420px)",
        perspective: 1000,
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-accent/25 blur-[60px] scale-110 animate-pulse-soft" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-[-8%] rounded-full border border-accent/30"
          style={{ transform: "translateZ(-40px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-glow-sm" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Mid counter-rotating dashed ring */}
        <motion.div
          className="absolute inset-[-2%] rounded-full border border-dashed border-white/15"
          style={{ transform: "translateZ(-20px)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />

        {/* Photo disc */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-accent/40 shadow-glow"
          style={{
            transform: "translateZ(30px)",
            backgroundImage: "url('/Assets/My_Photo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Uzair Riasat"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-accent/10" />
        </div>

        {/* Floating status chip */}
        <motion.div
          className="absolute -bottom-1 -right-1 glass-card px-3.5 py-2.5 rounded-xl shadow-card"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="font-primary text-[9px] uppercase tracking-widest text-accent/70">Focus</p>
          <p className="font-display text-xs font-semibold text-white">Full-Stack & AI</p>
        </motion.div>

        <motion.div
          className="absolute -top-1 -left-3 glass-card px-3.5 py-2.5 rounded-xl shadow-card"
          style={{ transform: "translateZ(55px)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <p className="font-display text-xl font-bold gradient-text">3+</p>
          <p className="font-primary text-[9px] uppercase tracking-widest text-white/50">Years Exp.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

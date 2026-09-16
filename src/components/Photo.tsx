"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Photo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 160, damping: 22 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), spring);

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
        width: "clamp(200px, 22vw, 360px)",
        height: "clamp(200px, 22vw, 360px)",
        perspective: 1000,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-[48px] scale-105 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        <motion.div
          className="absolute inset-[-6%] rounded-full border border-accent/30 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-glow-sm" />
        </motion.div>

        <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-accent/40 shadow-glow bg-secondary">
          <Image
            src="/Assets/My_Photo.png"
            alt="Uzair Riasat"
            fill
            sizes="(max-width: 1024px) 220px, 360px"
            priority
            quality={95}
            className="object-cover object-center"
            style={{ transform: "translateZ(0)" }}
          />
        </div>

        <div className="absolute -bottom-1 -right-1 glass-card px-3 py-2 rounded-xl shadow-card">
          <p className="font-primary text-[9px] uppercase tracking-widest text-accent/70">Focus</p>
          <p className="font-display text-xs font-semibold text-white">Backend & Full-Stack</p>
        </div>

        <div className="absolute -top-1 -left-3 glass-card px-3 py-2 rounded-xl shadow-card">
          <p className="font-display text-xl font-bold gradient-text">3+</p>
          <p className="font-primary text-[9px] uppercase tracking-widest text-white/50">Years Exp.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;

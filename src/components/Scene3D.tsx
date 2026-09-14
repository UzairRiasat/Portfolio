"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FLOATING_SHAPES = [
  { size: 180, x: "8%", y: "18%", depth: 40, delay: 0, type: "ring" as const },
  { size: 120, x: "78%", y: "22%", depth: 70, delay: 0.4, type: "cube" as const },
  { size: 90, x: "85%", y: "68%", depth: 55, delay: 0.8, type: "ring" as const },
  { size: 140, x: "12%", y: "72%", depth: 35, delay: 1.2, type: "sphere" as const },
  { size: 70, x: "48%", y: "12%", depth: 90, delay: 0.2, type: "cube" as const },
  { size: 100, x: "62%", y: "78%", depth: 45, delay: 1.6, type: "ring" as const },
];

const Scene3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(0,229,160,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_15%_70%,rgba(16,185,129,0.07),transparent_50%)]" />

      {/* Perspective vanishing floor grid */}
      <div className="absolute inset-0 flex items-end justify-center perspective-scene">
        <motion.div
          style={{ rotateX: 68, rotateY }}
          className="w-[200%] h-[70%] origin-bottom floor-grid opacity-40"
        />
      </div>

      {/* 3D floating geometry */}
      <motion.div
        className="absolute inset-0 perspective-scene"
        style={{ rotateX, rotateY }}
      >
        {FLOATING_SHAPES.map((shape, i) => (
          <FloatingShape key={i} {...shape} springX={springX} springY={springY} />
        ))}
      </motion.div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,8,12,0.85)_100%)]" />
    </div>
  );
};

type ShapeProps = (typeof FLOATING_SHAPES)[number] & {
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
};

function FloatingShape({ size, x, y, depth, delay, type, springX, springY }: ShapeProps) {
  const offsetX = useTransform(springX, [-0.5, 0.5], [-depth, depth]);
  const offsetY = useTransform(springY, [-0.5, 0.5], [-depth * 0.6, depth * 0.6]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        x: offsetX,
        y: offsetY,
        translateZ: depth,
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          y: [0, -18, 0],
          rotateZ: type === "cube" ? [0, 360] : [0, 180, 0],
        }}
        transition={{
          y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay },
          rotateZ: {
            duration: type === "cube" ? 28 + delay * 4 : 20 + delay * 3,
            repeat: Infinity,
            ease: "linear",
            delay,
          },
        }}
      >
        {type === "ring" && (
          <div
            className="w-full h-full rounded-full border border-accent/25"
            style={{
              boxShadow: "0 0 40px -8px rgba(0,229,160,0.25), inset 0 0 30px -10px rgba(0,229,160,0.15)",
              transform: "rotateX(60deg)",
            }}
          />
        )}
        {type === "cube" && (
          <div className="relative w-full h-full preserve-3d" style={{ transform: "rotateX(35deg) rotateY(35deg)" }}>
            <div className="absolute inset-[18%] border border-cyan-400/20 bg-cyan-400/[0.03] backdrop-blur-[1px]" />
            <div
              className="absolute inset-[18%] border border-accent/15 bg-accent/[0.04]"
              style={{ transform: "translateZ(18px)" }}
            />
          </div>
        )}
        {type === "sphere" && (
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(0,229,160,0.35), rgba(0,229,160,0.05) 45%, transparent 70%)",
              boxShadow: "0 0 60px -12px rgba(0,229,160,0.35)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default Scene3D;

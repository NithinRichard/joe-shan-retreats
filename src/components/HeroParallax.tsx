"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBase = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleBase = useTransform(scrollYProgress, [0, 1], [1.03, 0.97]);
  const y = useSpring(yBase, { stiffness: 70, damping: 40, mass: 0.25 });
  const scale = useSpring(scaleBase, { stiffness: 70, damping: 40, mass: 0.25 });

  return (
    <motion.div ref={ref} style={{ y, scale }} className="will-change-transform">
      {children}
    </motion.div>
  );
}

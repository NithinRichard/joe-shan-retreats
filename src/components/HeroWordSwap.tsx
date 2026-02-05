"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["calm", "crafted", "seaside", "slow", "serene"];

export function HeroWordSwap() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1em] w-[6ch] items-center justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

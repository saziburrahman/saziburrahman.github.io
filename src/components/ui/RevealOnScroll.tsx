"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  once?: boolean;
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Respects reduced motion preferences.
 */
export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
}: RevealOnScrollProps) {
  const reducedMotion = useReducedMotion();

  const directionMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: offset.y, x: offset.x }
      }
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.7,
                delay,
                ease: [0.16, 1, 0.3, 1],
              },
            }
      }
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

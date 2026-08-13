"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  strength?: number;
  ariaLabel?: string;
}

/**
 * Button with magnetic hover effect on desktop.
 */
export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  strength = 0.3,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || !isDesktop) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full cursor-pointer select-none";

  const variants = {
    primary:
      "px-7 py-3.5 text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white hover:shadow-xl hover:shadow-indigo-500/30 scale-[1.01] hover:scale-[1.03]",
    secondary:
      "px-7 py-3.5 text-sm border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-indigo-400 backdrop-blur-md shadow-sm",
    ghost:
      "px-4 py-2 text-sm font-medium text-slate-300 hover:text-white",
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className="inline-block bg-transparent border-none p-0">
      {content}
    </button>
  );
}

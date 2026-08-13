"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { isTouchDevice } from "@/lib/utils";

type CursorVariant = "default" | "hover" | "project" | "hidden";

/**
 * Custom cursor with contextual states.
 * - default: small glowing dot
 * - hover: expanded ring
 * - project: expanded with "VIEW" text
 * Disabled on touch devices and mobile.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    if (!isDesktop || isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth follow with requestAnimationFrame
    let rafId: number;
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor='hover'], [data-cursor='project']"
      );
      if (interactive) {
        const cursorType = interactive.getAttribute("data-cursor");
        if (cursorType === "project") {
          setVariant("project");
        } else {
          setVariant("hover");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor='hover'], [data-cursor='project']"
      );
      if (interactive) {
        setVariant("default");
      }
    };

    const handleMouseLeave = () => setVariant("hidden");
    const handleMouseEnter = () => setVariant("default");

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    rafId = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
    };
  }, [isDesktop, isTouch]);

  if (!isDesktop || isTouch) return null;

  const sizeMap = {
    default: 10,
    hover: 48,
    project: 80,
    hidden: 0,
  };

  const size = sizeMap[variant];

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[999] pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="rounded-full flex items-center justify-center"
        animate={{
          width: size,
          height: size,
          opacity: variant === "hidden" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          background:
            variant === "default"
              ? "rgba(124, 58, 237, 0.6)"
              : variant === "project"
              ? "rgba(124, 58, 237, 0.12)"
              : "transparent",
          border:
            variant === "hover" || variant === "project"
              ? "1px solid rgba(124, 58, 237, 0.4)"
              : "none",
          boxShadow:
            variant === "default"
              ? "0 0 12px rgba(124, 58, 237, 0.4), 0 0 24px rgba(124, 58, 237, 0.1)"
              : "none",
          transform: "translate(-50%, -50%)",
          mixBlendMode: variant === "hover" ? "difference" : "normal",
        }}
      >
        {variant === "project" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-medium text-foreground tracking-widest uppercase"
          >
            View
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

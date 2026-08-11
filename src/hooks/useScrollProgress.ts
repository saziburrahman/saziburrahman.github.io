import { useEffect, useState } from "react";
import { clamp } from "@/lib/utils";

/**
 * Returns scroll progress as a 0-1 value.
 * Also returns `scrolled` boolean (true when scrolled past threshold).
 */
export function useScrollProgress(threshold = 50) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0;

      setProgress(scrollProgress);
      setScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { progress, scrolled };
}

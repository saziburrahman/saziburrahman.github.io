import { useEffect, useState } from "react";

/**
 * Responsive breakpoint hook. Returns true when viewport matches the query.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Convenience: true if screen >= 1024px */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}

/** Convenience: true if screen >= 768px */
export function useIsTablet() {
  return useMediaQuery("(min-width: 768px)");
}

/** Convenience: true if screen < 768px */
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

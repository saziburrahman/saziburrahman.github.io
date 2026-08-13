"use client";

import { useState, useCallback, type ReactNode } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function ClientProviders({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("loading");
    }
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      {children}
    </>
  );
}

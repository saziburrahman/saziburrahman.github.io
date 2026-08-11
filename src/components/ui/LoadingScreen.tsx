import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolio";

interface LoadingScreenProps {
  onComplete: () => void;
}

/**
 * Premium Loading Screen with Initials + Smooth Hardware-Accelerated Progress Bar.
 * Restored for beautiful aesthetic entrance without main-thread re-render thrashes.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fast aesthetic loader timing (~650ms total)
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400); // Trigger completion after exit animation
    }, 650);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#090d16] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mesh Glow Background */}
          <div className="absolute w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Initials Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 relative z-10"
          >
            <span className="font-display text-4xl font-extrabold text-white">
              {portfolioData.personal.initials}
              <span className="text-indigo-400">.</span>
            </span>
          </motion.div>

          {/* Progress bar using pure Framer Motion hardware-accelerated transition */}
          <div className="w-48 h-[3px] bg-slate-800 rounded-full overflow-hidden relative z-10 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

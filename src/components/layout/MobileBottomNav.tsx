"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

interface NavTab {
  id: string;
  label: string;
  icon: typeof Home;
}

const MOBILE_TABS: NavTab[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export function MobileBottomNav() {
  const activeSection = useActiveSection();

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-auto">
      <div className="mx-auto max-w-md rounded-3xl border border-white/15 bg-slate-950/85 backdrop-blur-2xl px-2 py-2 shadow-2xl shadow-indigo-950/70">
        <nav className="flex items-center justify-around" aria-label="Mobile Bottom App Bar">
          {MOBILE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                whileTap={{ scale: 0.85 }}
                className={cn(
                  "relative flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-300 bg-transparent border-none cursor-pointer select-none",
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                )}
                aria-label={tab.label}
              >
                {/* Active Glowing Backdrop Pill */}
                {isActive && (
                  <motion.span
                    layoutId="mobile-bottom-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-sky-500/60 rounded-2xl border border-indigo-400/40 shadow-lg shadow-indigo-500/30"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 p-1">
                  <Icon size={19} className={cn(isActive ? "text-white stroke-[2.5]" : "text-slate-400 stroke-[1.8]")} />
                </span>

                <span className={cn("relative z-10 text-[9px] font-bold tracking-tight transition-all", isActive ? "text-white" : "text-slate-400")}>
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

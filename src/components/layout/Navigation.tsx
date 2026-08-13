import { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import portfolioData from "@/data/portfolio";
import { Download, Send } from "lucide-react";
import { MobileBottomNav } from "./MobileBottomNav";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const { scrolled } = useScrollProgress(80);
  const activeSection = useActiveSection();

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Top Header Bar */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-container">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-5 py-2 transition-all duration-500",
              scrolled
                ? "glass shadow-2xl shadow-indigo-950/50"
                : "bg-slate-900/40 backdrop-blur-md border border-white/10"
            )}
            role="navigation"
            aria-label="Main header navigation"
          >
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 text-left bg-transparent border-none cursor-pointer group"
              aria-label="Go to home"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center font-display font-black text-xs text-white shadow-md group-hover:scale-105 transition-transform">
                {portfolioData.personal.initials}
              </div>
              <span className="font-display font-extrabold text-base text-white hidden sm:inline-block">
                {portfolioData.personal.name}
              </span>
            </button>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300 bg-transparent border-none cursor-pointer rounded-full",
                    activeSection === item.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-indigo-600/35 border border-indigo-500/40 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Top Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/SaziburRahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-indigo-400 shadow-sm transition-all duration-300"
              >
                <Download size={13} className="text-sky-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <Send size={12} className="hidden xs:inline-block" />
                <span>Let's Talk</span>
              </a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Floating Mobile App Bottom Navbar */}
      <MobileBottomNav />
    </>
  );
}

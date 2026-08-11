import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import portfolioData from "@/data/portfolio";
import { Menu, X, Download } from "lucide-react";

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
  const isDesktop = useIsDesktop();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-container">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-6 transition-all duration-500",
              scrolled
                ? "glass py-2.5 shadow-2xl shadow-indigo-950/50"
                : "py-2"
            )}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-display font-bold text-lg text-white hover:text-indigo-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
              aria-label="Go to top"
            >
              {portfolioData.personal.initials}
              <span className="text-indigo-400">.</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer rounded-full",
                    activeSection === item.id
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  )}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full"
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

            {/* CTA Buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/SaziburRahman.pdf"
                download="MD_Sazibur_Rahman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-indigo-400 shadow-sm transition-all duration-300"
              >
                <Download size={14} className="text-sky-400" />
                Resume
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-white bg-transparent border-none cursor-pointer"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#090d16]/98 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col items-center gap-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-3xl font-display font-medium py-2.5 px-6 transition-colors duration-300 bg-transparent border-none cursor-pointer",
                    activeSection === item.id
                      ? "text-indigo-400 font-semibold"
                      : "text-slate-400"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                className="mt-6 flex flex-col items-center gap-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <a
                  href="/SaziburRahman.pdf"
                  download="MD_Sazibur_Rahman_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-full border border-white/15 bg-white/5 text-white hover:border-indigo-400"
                >
                  <Download size={18} className="text-sky-400" />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg transition-all duration-300"
                >
                  Let's Talk
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

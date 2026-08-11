import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroStagger, heroItem } from "@/components/animations/variants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import portfolioData from "@/data/portfolio";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { isWebGLAvailable } from "@/lib/utils";

const HeroCanvas = lazy(() =>
  import("@/components/three/HeroCanvas").then((m) => ({
    default: m.HeroCanvas,
  }))
);

function WebGLFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const { personal } = portfolioData;
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#090d16]"
      aria-label="Hero"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {webGLSupported ? (
          <Suspense fallback={<WebGLFallback />}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <WebGLFallback />
        )}
      </div>

      {/* Vibrant Background Mesh Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <motion.div
          className="max-w-3xl pt-24 md:pt-0"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.p
            variants={heroItem}
            className="text-label mb-6 font-semibold tracking-widest text-indigo-400"
          >
            {personal.heroLabel}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={heroItem}
            className="heading-hero text-white mb-6 font-extrabold"
          >
            {personal.heroHeadline.split(" ").map((word, i) =>
              word === "applications." ? (
                <span key={i} className="text-gradient">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={heroItem}
            className="text-body max-w-xl mb-10 text-lg text-slate-300 font-medium leading-relaxed"
          >
            {personal.heroSubtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton variant="primary" onClick={scrollToProjects}>
              View My Work
              <ArrowRight size={16} />
            </MagneticButton>

            {/* Resume Download CTA */}
            <a
              href="/SaziburRahman.pdf"
              download="MD_Sazibur_Rahman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-indigo-400 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Download size={16} className="text-sky-400" />
              Download Resume
            </a>

            <MagneticButton variant="secondary" onClick={scrollToContact}>
              Let's Talk
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-indigo-400" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090d16] to-transparent z-[2] pointer-events-none" />
    </section>
  );
}

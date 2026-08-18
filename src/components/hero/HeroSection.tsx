"use client";

import { heroItem, heroStagger } from "@/components/animations/variants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import portfolioData from "@/data/portfolio";
import { isWebGLAvailable } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";

const HeroCanvas = lazy(() =>
  import("@/components/three/HeroCanvas").then((m) => ({
    default: m.HeroCanvas,
  })),
);

function WebGLFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [canLoad3D, setCanLoad3D] = useState(false);

  useEffect(() => {
    // Check WebGL support
    if (isWebGLAvailable()) {
      setWebGLSupported(true);

      // Defer heavy 3D canvas initialization until after initial paint & main thread idle
      const timer = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(() => setCanLoad3D(true));
        } else {
          setCanLoad3D(true);
        }
      }, 400);

      return () => clearTimeout(timer);
    }
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
        {webGLSupported && canLoad3D ? (
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
          className="max-w-xl lg:max-w-2xl pt-24 md:pt-10 p-6 md:p-0 rounded-3xl bg-[#090d16]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none shadow-2xl md:shadow-none"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.p
            variants={heroItem}
            className="text-label mb-6 font-semibold tracking-widest text-indigo-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            {personal.heroLabel}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={heroItem}
            className="heading-hero text-white mb-6 font-extrabold drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            {personal.heroHeadline.split(" ").map((word, i) =>
              word === "applications." ? (
                <span key={i} className="text-gradient">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={heroItem}
            className="text-body max-w-xl mb-10 text-lg text-slate-200 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090d16] to-transparent z-[2] pointer-events-none" />
    </section>
  );
}

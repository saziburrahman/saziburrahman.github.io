"use client";

import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio";
import { isWebGLAvailable } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Calendar, CheckCircle2, GraduationCap } from "lucide-react";
import { Suspense, lazy, useRef, useState, type MouseEvent } from "react";

const SectionCanvas = lazy(() =>
  import("@/components/three/SectionCanvas").then((m) => ({
    default: m.SectionCanvas,
  })),
);

interface EducationCardProps {
  item: (typeof portfolioData.education)[0];
  isFeatured?: boolean;
}

function EducationCard({ item, isFeatured = false }: EducationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const coursework = item.coursework || [];

  if (isFeatured) {
    return (
      <motion.div
        variants={fadeUp}
        className="w-full group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          className="relative rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900/95 via-[#0d172e]/90 to-slate-900/95 backdrop-blur-xl p-8 md:p-10 shadow-2xl hover:shadow-sky-500/25 transition-all duration-500 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500" />

          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />

          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-inner">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  Higher Education — Major Degree
                </span>
                <h4 className="text-base md:text-lg font-bold text-white leading-tight">
                  {item.institution}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/90 px-4 py-2 rounded-full border border-white/10">
                <Calendar size={14} className="text-sky-400" />
                <span>{item.period}</span>
              </div>
            </div>
          </div>

          {/* Degree Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-sky-300 transition-colors duration-300">
            {item.degree}
          </h3>

          {/* Coursework Grid */}
          <div className="pt-6 border-t border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <BookOpen size={15} className="text-sky-400" />
              Specialized Core Curriculum & Knowledge Base
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {coursework.map((course, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-200 hover:border-sky-400/60 hover:bg-sky-950/40 hover:text-white transition-all duration-200"
                >
                  <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Grid Card Layout for Diploma & SSC
  return (
    <motion.div
      variants={fadeUp}
      className="w-full group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        className="h-full relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-7 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
              <GraduationCap size={22} />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 bg-slate-800/80 border border-white/10">
                <Calendar size={13} className="text-indigo-400" />
                {item.period}
              </span>
            </div>
          </div>

          <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
            {item.institution}
          </h4>

          <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
            {item.degree}
          </h3>
        </div>

        {/* Coursework Tags */}
        {coursework.length > 0 && (
          <div className="pt-4 border-t border-white/10 mt-4">
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-md border border-white/10"
                >
                  <CheckCircle2 size={12} className="text-indigo-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function EducationSection() {
  const { education } = portfolioData;
  const webGLSupported = isWebGLAvailable();

  const bscDegree = education[0];
  const otherEducation = education.slice(1);

  return (
    <section
      id="education"
      className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0b1329] to-[#090d16] overflow-hidden"
      aria-label="Academic Education"
    >
      {/* 3D Interactive Section Canvas Background */}
      {webGLSupported && (
        <Suspense fallback={null}>
          <SectionCanvas variant="education" />
        </Suspense>
      )}

      <div className="relative z-10 section-container">
        <SectionHeading
          label="Academic Foundation"
          title="Education & Academic Credentials."
          subtitle="Computer Science & Engineering degrees providing algorithmic theory, database management, web architecture, and software engineering discipline."
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Featured Bachelor Degree Card */}
          {bscDegree && <EducationCard item={bscDegree} isFeatured />}

          {/* Grid Layout for Secondary Qualifications (Diploma & SSC) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {otherEducation.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

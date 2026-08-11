import {
  drawLine,
  fadeUp,
  staggerContainer,
} from "@/components/animations/variants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio";
import { isWebGLAvailable } from "@/lib/utils";
import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { Suspense, lazy, useRef, useState, type MouseEvent } from "react";

const SectionCanvas = lazy(() =>
  import("@/components/three/SectionCanvas").then((m) => ({
    default: m.SectionCanvas,
  })),
);

interface ExperienceCardProps {
  item: (typeof portfolioData.experience)[0];
  index: number;
}

function ThreeDExperienceCard({ item, index }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isPresent = item.period.toLowerCase().includes("present");

  return (
    <motion.div
      variants={fadeUp}
      className="relative pl-10 md:pl-20 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Timeline Node */}
      <div className="absolute left-[7px] md:left-[27px] top-4 z-10">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isPresent
              ? "border-emerald-400 bg-slate-900 shadow-lg shadow-emerald-500/50 scale-110"
              : "border-indigo-500 bg-slate-900 group-hover:scale-125 group-hover:border-sky-400"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${isPresent ? "bg-emerald-400 animate-pulse" : "bg-indigo-400"}`}
          />
        </div>
      </div>

      {/* 3D Card Container */}
      <motion.div
        ref={cardRef}
        className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-7 md:p-9 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border-l-4 border-l-indigo-500 overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Top Glow bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 font-semibold flex items-center gap-2">
              <Building2 size={18} />
              <span className="text-sm font-bold text-white">
                {item.company}
              </span>
            </div>
            {isPresent && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Current Role
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-white/10">
            <Calendar size={14} className="text-sky-400" />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Role Title */}
        <h3 className="heading-subsection text-white font-extrabold text-xl md:text-2xl mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {item.role}
        </h3>

        {/* Summary Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium max-w-2xl">
          {item.description}
        </p>

        {/* Key Achievements Bullet points */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Sparkles size={14} className="text-indigo-400" />
            Key Contributions & Engineering Impact
          </h4>
          <ul className="space-y-2.5">
            {item.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-300 font-medium leading-relaxed group/item"
              >
                <CheckCircle2
                  size={16}
                  className="text-indigo-400 mt-0.5 shrink-0 group-hover/item:text-emerald-400 transition-colors"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const { experience } = portfolioData;
  const webGLSupported = isWebGLAvailable();

  return (
    <section
      id="experience"
      className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#090d16] overflow-hidden"
      aria-label="Work Experience"
    >
      {/* 3D Interactive Section Canvas Background */}
      {webGLSupported && (
        <Suspense fallback={null}>
          <SectionCanvas variant="experience" />
        </Suspense>
      )}

      <div className="relative z-10 section-container">
        <SectionHeading
          label="Professional Path"
          title="Work Experience."
          subtitle="A track record of frontend software engineering, building scalable React/Next.js platforms, performance optimization, and full-stack MERN development."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-4 md:left-[35px] top-6 bottom-6 w-1 bg-slate-800 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-500 via-sky-400 to-purple-500 rounded-full"
              variants={drawLine}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ height: "100%", transformOrigin: "top" }}
            />
          </div>

          {/* Experience 3D Cards list */}
          <motion.div
            className="space-y-10 md:space-y-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {experience.map((item, index) => (
              <ThreeDExperienceCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

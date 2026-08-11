import {
  drawLine,
  fadeUp,
  staggerContainer,
} from "@/components/animations/variants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio";
import { isWebGLAvailable } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { Suspense, lazy, useRef, useState, type MouseEvent } from "react";

const SectionCanvas = lazy(() =>
  import("@/components/three/SectionCanvas").then((m) => ({
    default: m.SectionCanvas,
  })),
);

interface EducationCardProps {
  item: (typeof portfolioData.education)[0];
  index: number;
}

function ThreeDEducationCard({ item, index }: EducationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const coursework =
    index === 0
      ? [
          "Data Structures & Algorithms",
          "Database Systems (SQL & MongoDB)",
          "Software Engineering & OOP",
          "Web Technologies & APIs",
        ]
      : [
          "Computer Fundamentals",
          "Data Structures",
          "Web Development",
          "Database Management Systems",
        ];

  return (
    <motion.div
      variants={fadeUp}
      className="relative pl-10 md:pl-20 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Timeline Node */}
      <div className="absolute left-[7px] md:left-[27px] top-4 z-10">
        <div className="w-5 h-5 rounded-full border-2 border-sky-400 bg-slate-900 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:border-indigo-400 shadow-md shadow-sky-500/30">
          <div className="w-2 h-2 rounded-full bg-sky-400" />
        </div>
      </div>

      {/* 3D Card Container */}
      <motion.div
        ref={cardRef}
        className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-7 md:p-9 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 border-l-4 border-l-sky-500 overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Top Glow bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating 3D background watermark number */}
        {/* <span className="font-display text-7xl font-extrabold text-slate-800/40 absolute -bottom-4 right-4 pointer-events-none select-none group-hover:text-sky-500/20 transition-colors duration-500">
          0{index + 1}
        </span> */}

        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold flex items-center gap-2">
              <GraduationCap size={20} />
              <span className="text-sm font-bold text-white">
                {item.institution}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/15 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              <Award size={14} className="text-emerald-400" />
              <span>{item.grade}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-white/10">
              <Calendar size={14} className="text-indigo-400" />
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        {/* Degree Name */}
        <h3 className="heading-subsection text-white font-extrabold text-xl md:text-2xl mb-3 group-hover:text-sky-400 transition-colors duration-300">
          {item.degree}
        </h3>

        {/* Core Coursework & Skills */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <BookOpen size={14} className="text-sky-400" />
            Core Academic Focus & Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/90 rounded-lg border border-white/10 hover:border-sky-400 hover:text-white transition-colors duration-200"
              >
                <CheckCircle2 size={12} className="text-sky-400" />
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function EducationSection() {
  const { education } = portfolioData;
  const webGLSupported = isWebGLAvailable();

  return (
    <section
      id="education"
      className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0d162a] to-[#090d16] overflow-hidden"
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
          title="Education & Credentials."
          subtitle="Computer Science & Engineering degrees providing rigorous algorithmic theory, database engineering, and software development foundations."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-4 md:left-[35px] top-6 bottom-6 w-1 bg-slate-800 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-500 rounded-full"
              variants={drawLine}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ height: "100%", transformOrigin: "top" }}
            />
          </div>

          {/* Education 3D Cards List */}
          <motion.div
            className="space-y-10 md:space-y-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {education.map((item, index) => (
              <ThreeDEducationCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

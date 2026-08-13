"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData, { type SkillCategory } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/components/animations/variants";
import { Layout, Cpu, Database, Wrench, FileText } from "lucide-react";

const categoryIcons = [Layout, FileText, Database, Wrench, Cpu];
const categoryGradients = [
  "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
  "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
  "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
  "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
  "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
];

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0e162a] to-[#090d16] overflow-hidden" aria-label="Skills">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 section-container">
        <SectionHeading
          label="Skills & Tech Stack"
          title="Tech Stack & Engineering Skills."
          subtitle="Modern web technologies, frameworks, state management libraries, and engineering tools I use daily."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((category: SkillCategory, index: number) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const badgeStyle = categoryGradients[index % categoryGradients.length];

            return (
              <motion.div
                key={category.category}
                variants={fadeUp}
                className="group relative p-8 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${badgeStyle}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="heading-subsection text-white font-extrabold">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((item) => (
                    <span
                      key={item.name}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 text-slate-200 border border-white/10 hover:border-indigo-400 hover:text-white hover:bg-indigo-600/30 transition-all duration-200"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

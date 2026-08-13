import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/components/animations/variants";
import { ArrowUpRight, Download, Code2, Cpu, Rocket, Award } from "lucide-react";

export function AboutSection() {
  const { personal, stats } = portfolioData;

  const statIcons = [Code2, Rocket, Cpu, Award];

  return (
    <section id="about" className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0d1326] to-[#090d16] overflow-hidden" aria-label="About Me">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 section-container">
        <SectionHeading
          label="About"
          title={personal.aboutHeadline}
          subtitle="A passionate Frontend Engineer dedicated to building high-traffic, accessible, and performant digital products."
        />

        {/* Narrative & Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Bio text */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {personal.aboutText.map((paragraph, i) => (
              <motion.p key={i} variants={fadeUp} className="text-body text-slate-200 text-lg leading-relaxed font-normal">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Let's Work Together
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/SaziburRahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:border-indigo-400 hover:bg-white/10 transition-all duration-300"
              >
                <Download size={16} className="text-sky-400" />
                Download CV (PDF)
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Cards Grid */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-4xl font-extrabold text-gradient">
                      {stat.value}{stat.suffix}
                    </span>
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

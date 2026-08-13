"use client";

import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio";
import { motion } from "framer-motion";
import { Box, Code2, Layers, Palette } from "lucide-react";

const iconMap = {
  code: Code2,
  palette: Palette,
  box: Box,
  layers: Layers,
};

export function ServicesSection() {
  const { services } = portfolioData;

  return (
    <section
      className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#120d26] to-[#090d16] overflow-hidden"
      aria-label="Services"
    >
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 section-container">
        <SectionHeading
          label="Services"
          title="Core Capabilities."
          subtitle="Specialized software development and engineering solutions."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.number}
                variants={fadeUp}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl hover:border-purple-500/50 hover:bg-slate-900/95 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 text-purple-400 group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>

                <h3 className="heading-subsection text-white mb-3 font-bold group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

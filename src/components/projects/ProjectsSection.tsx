"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import portfolioData, { type Project } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/components/animations/variants";
import {
  X,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryFilter = "All" | "E-Commerce" | "Travel" | "Admin Dashboard" | "Other";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "E-Commerce",
    "Travel",
    "Admin Dashboard",
    "Other",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          if (activeFilter === "E-Commerce") return p.category.includes("E-Commerce");
          if (activeFilter === "Travel") return p.category.includes("Travel");
          if (activeFilter === "Admin Dashboard") return p.category.includes("Admin");
          if (activeFilter === "Other") return p.category.includes("Corporate") || p.category.includes("Communication") || p.category.includes("Social");
          return true;
        });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0c1222] to-[#090d16] overflow-hidden" aria-label="Featured Projects">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 section-container">
        <SectionHeading
          label="Portfolio Showcase"
          title="Featured Projects."
          subtitle="Real-world production engineering work — e-commerce platforms, travel booking applications, global state architecture, and RTL interfaces."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer select-none",
                activeFilter === cat
                  ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white border-indigo-400 shadow-lg shadow-indigo-500/30 scale-105"
                  : "bg-slate-900/60 text-slate-400 border-white/10 hover:border-indigo-400/50 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl hover:border-indigo-500/50 hover:bg-slate-900/95 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Image / Header Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  {/* Project Screenshot */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}

                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1 drop-shadow-lg">
                        {project.subtitle}
                      </span>
                      <h3 className="heading-subsection text-white font-extrabold text-2xl group-hover:text-indigo-400 transition-colors duration-300 drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30 opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 4).map((t: string) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-500/30"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Details Indicator */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-white transition-colors duration-200">
                      View Details
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Sticky Close Button — always visible */}
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-slate-900 text-white hover:bg-indigo-600 transition-colors border border-white/20 shadow-2xl shadow-black/50"
              aria-label="Close modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
            >
              <X size={20} />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-3xl rounded-2xl border border-white/15 bg-slate-900 text-white shadow-2xl overflow-hidden z-10 my-6 mx-4"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Project Image — Full Width */}
              {selectedProject.image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              )}

              {/* Modal Header */}
              <div className="p-6 md:p-8 pb-0 md:pb-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {selectedProject.category}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-white/10">
                    {selectedProject.year}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-sky-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {selectedProject.longDescription}
                </p>

                {/* Case Study Details */}
                {selectedProject.caseStudy && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-indigo-400" />
                      Engineering Breakdown & Case Study
                    </h4>

                    <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-3">
                      <div>
                        <span className="text-xs font-bold text-sky-400 block mb-0.5">Problem Statement:</span>
                        <p className="text-xs text-slate-300">{selectedProject.caseStudy.problem}</p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-emerald-400 block mb-0.5">Solution & Architecture:</span>
                        <p className="text-xs text-slate-300">{selectedProject.caseStudy.solution}</p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-purple-400 block mb-0.5">Role & Focus:</span>
                        <p className="text-xs text-slate-300">{selectedProject.caseStudy.role}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Results Highlight */}
                {selectedProject.caseStudy?.results && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span className="text-sm font-bold text-emerald-300">
                      {selectedProject.caseStudy.results}
                    </span>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Layers size={14} className="text-indigo-400" />
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

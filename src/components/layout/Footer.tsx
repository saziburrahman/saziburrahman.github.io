"use client";

import portfolioData from "@/data/portfolio";
import { motion } from "framer-motion";
import { Globe, Link, Mail, MessageCircle } from "lucide-react";

const iconMap = {
  github: Globe,
  linkedin: Link,
  twitter: MessageCircle,
  mail: Mail,
};

export function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/10 bg-[#070a12] text-slate-300 pb-20 lg:pb-0"
      role="contentinfo"
    >
      <div className="section-container py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-lg text-white">
                {personal.name}
                <span className="text-indigo-400">.</span>
              </p>
              <p className="text-sm font-medium text-slate-400 mt-1">
                {personal.role}
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs font-medium text-slate-400">
                © {year} {personal.name}. All rights reserved.
              </p>
            </div>

            {/* Right — socials */}
            <div className="flex items-center gap-4">
              {social.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 p-2"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

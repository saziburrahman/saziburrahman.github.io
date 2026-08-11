import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import portfolioData from "@/data/portfolio";
import { Globe, Link, MessageCircle, Mail, ArrowUpRight, Download } from "lucide-react";

const iconMap = {
  github: Globe,
  linkedin: Link,
  twitter: MessageCircle,
  mail: Mail,
};

export function ContactSection() {
  const { personal, social } = portfolioData;

  return (
    <section id="contact" className="relative section-spacing bg-gradient-to-b from-[#090d16] via-[#0d1428] to-[#090d16] overflow-hidden" aria-label="Contact">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-sky-500/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-14 rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500" />

          <RevealOnScroll>
            <p className="text-label mb-6 font-semibold tracking-widest text-indigo-400">Get In Touch</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <h2 className="heading-section text-white mb-6 font-extrabold">
              Have a project or engineering role in{" "}
              <span className="text-gradient">mind?</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-body text-lg mb-10 max-w-xl mx-auto font-medium text-slate-300">
              Let's collaborate to build high-performance web applications that deliver real business impact.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <MagneticButton
                variant="primary"
                href={`mailto:${personal.email}`}
                ariaLabel="Start a conversation via email"
              >
                Start a Conversation
                <ArrowUpRight size={16} />
              </MagneticButton>

              <a
                href="/SaziburRahman.pdf"
                download="MD_Sazibur_Rahman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full border border-white/15 bg-white/5 text-white hover:border-indigo-400 hover:bg-white/10 transition-all duration-300"
              >
                <Download size={16} className="text-sky-400" />
                Download Resume (PDF)
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              {social.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group p-3.5 rounded-full border border-white/10 bg-slate-800/80 text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-600/30 transition-all duration-300 shadow-md"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

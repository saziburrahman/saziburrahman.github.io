import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Consistent section heading with optional label, title, and subtitle.
 * Uses scroll-triggered reveal animation.
 */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      {label && (
        <RevealOnScroll>
          <p className="text-label mb-4">{label}</p>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.05}>
        <h2 className="heading-section text-foreground">{title}</h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={0.1}>
          <p className="text-body mt-4 max-w-2xl" style={align === "center" ? { margin: "1rem auto 0" } : undefined}>
            {subtitle}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}

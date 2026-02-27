import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  // Alternate between section-bright (pure white) and section-cool (faint blue-white)
  // className prop overrides if passed (e.g. className="section-cool")
  const sectionClass = className?.includes("section-") ? className : cn("section-bright", className);

  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", sectionClass)}>
      <div className="section-divider" style={{ marginBottom: 0 }} />

      <Container>
        {/* Section header */}
        <div className="mb-14 max-w-2xl anim-hidden">
          {eyebrow && (
            <div className="eyebrow-pill">
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "#6366F1", flexShrink: 0 }} />
              {eyebrow}
            </div>
          )}
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: "#0F172A", lineHeight: "1.08", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "#64748B", maxWidth: "38rem" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Body content */}
        <div className="anim-hidden" style={{ transitionDelay: "100ms" }}>
          {children}
        </div>
      </Container>
    </section>
  );
}
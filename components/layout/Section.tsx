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
  const sectionClass = className?.includes("section-")
    ? className
    : cn("section-bright", className);

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-12 sm:py-16 md:py-20 lg:py-24",
        sectionClass
      )}
    >
      <div className="section-divider" style={{ marginBottom: 0 }} />

      <Container>
        <div className="mb-8 max-w-3xl anim-hidden sm:mb-10 md:mb-12">
          {eyebrow && (
            <div className="eyebrow-pill mb-4 sm:mb-5">
              <span
                className="h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: "#6366F1", flexShrink: 0 }}
              />
              {eyebrow}
            </div>
          )}

          <h2
            className="text-[2.2rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            style={{
              color: "#0F172A",
              lineHeight: "1.06",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="mt-3 text-base leading-8 sm:mt-4 sm:text-lg"
              style={{ color: "#64748B", maxWidth: "42rem" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="anim-hidden" style={{ transitionDelay: "100ms" }}>
          {children}
        </div>
      </Container>
    </section>
  );
} 
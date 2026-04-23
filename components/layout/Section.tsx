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
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", sectionClass)}>
      <div className="section-divider" style={{ marginBottom: 0 }} />

      <Container>
        <div className="mb-14 max-w-3xl anim-hidden">
          {eyebrow && (
            <div className="eyebrow-pill">
              <span
                className="h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: "#6366F1", flexShrink: 0 }}
              />
              {eyebrow}
            </div>
          )}

          <h2
            className="text-[2.55rem] font-semibold tracking-tight sm:text-[3rem] lg:text-[3.15rem]"
            style={{
              color: "#0F172A",
              lineHeight: "1.04",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="mt-4 max-w-[42rem] text-[1.06rem] leading-8"
              style={{ color: "#64748B" }}
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
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
        "scroll-mt-24 py-14 sm:py-18 md:py-22 lg:py-28",
        sectionClass
      )}
    >
      <div className="section-divider" style={{ marginBottom: 0 }} />

      <Container>
        <div className="mb-10 max-w-3xl anim-hidden sm:mb-12 md:mb-14">
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
            className="max-w-[18ch] text-[2.2rem] font-bold tracking-tight sm:text-[3.3rem] md:text-[3.9rem]"
            style={{
              color: "#0F172A",
              lineHeight: "0.96",
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="mt-4 text-[1rem] leading-8 sm:text-[1.04rem]"
              style={{ color: "#64748B", maxWidth: "44rem" }}
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

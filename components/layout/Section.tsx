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
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Container>
        {/* Header block animates up on scroll */}
        <div className="mb-12 max-w-2xl anim-hidden">
          {eyebrow ? (
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#6366F1",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: "#6366F1" }}
              />
              {eyebrow}
            </div>
          ) : null}
          <h2
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            style={{ lineHeight: "1.1" }}
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-lg leading-relaxed text-slate-500 max-w-xl">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Children animate in after header */}
        <div className="anim-hidden" style={{ transitionDelay: "120ms" }}>
          {children}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #F1F5F9" }}>
      {/* Indigo gradient top line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.25) 25%, rgba(99,102,241,0.5) 50%, rgba(99,102,241,0.25) 75%, transparent)",
        }}
      />
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="grid h-8 w-8 place-items-center rounded-xl text-white text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #818CF8, #6366F1)",
                boxShadow: "0 2px 8px rgba(99,102,241,0.3)",
              }}
            >
              PR
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#0F172A" }}>{site.name}</p>
              <p className="text-xs" style={{ color: "#94A3B8" }}>
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            {[
              { label: "FAQ", href: "#faq" },
              { label: "Engagement", href: "#engage" },
              { label: "Back to top ↑", href: "#top" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
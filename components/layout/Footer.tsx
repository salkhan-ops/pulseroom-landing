import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      {/* Gradient divider */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3) 30%, rgba(99,102,241,0.5) 50%, rgba(99,102,241,0.3) 70%, transparent)",
        }}
      />
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
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
              <p className="text-sm font-bold text-slate-900">{site.name}</p>
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            {[
              { label: "FAQ", href: "#faq" },
              { label: "Engagement", href: "#engage" },
              { label: "Back to top ↑", href: "#top" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-900 transition-colors"
                style={{ transition: "color 0.2s" }}
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
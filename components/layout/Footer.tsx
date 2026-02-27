import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E2E8F0", background: "#F8FAFC" }}>
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="grid h-8 w-8 place-items-center rounded-xl text-white text-xs font-bold"
              style={{ background: "#6366F1" }}
            >
              PR
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{site.name}</p>
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
import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #E2E8F0",
        marginTop: 56,
      }}
    >
      <Container className="py-12">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: 28,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #818CF8, #6366F1)",
                }}
              >
                PR
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "#0F172A" }}>{site.name}</div>
                <div style={{ fontSize: 13, color: "#64748B" }}>
                  Decision intelligence platform
                </div>
              </div>
            </div>

            <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, maxWidth: 420 }}>
              PulseRoom is a web-based software platform that helps facilitators, educators,
              and teams structure discussion, collect multi-dimensional input, visualize alignment,
              and produce clearer decision outcomes.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#0F172A", fontWeight: 700, marginBottom: 12 }}>Product</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/#how-it-works" className="footer-link">How it works</Link>
              <Link href="/#use-cases" className="footer-link">Use cases</Link>
              <Link href="/pricing" className="footer-link">Pricing</Link>
              <a href="https://app.pulseroom.app" target="_blank" rel="noopener noreferrer" className="footer-link">
                Open app
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#0F172A", fontWeight: 700, marginBottom: 12 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
              <Link href="/#faq" className="footer-link">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#0F172A", fontWeight: 700, marginBottom: 12 }}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-link">Terms of Service</Link>
              <Link href="/pricing" className="footer-link">Billing & pricing</Link>
            </div>

            <div style={{ marginTop: 18, color: "#64748B", fontSize: 14, lineHeight: 1.7 }}>
              <div>Email: {site.supportEmail}</div>
              <div>Sales: {site.salesEmail}</div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            paddingTop: 18,
            borderTop: "1px solid #F1F5F9",
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            color: "#94A3B8",
            fontSize: 13,
          }}
        >
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Software platform for structured group decision-making.</div>
        </div>
      </Container>

          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
              gap: 28,
            }}
></div>
    </footer>
  );
}
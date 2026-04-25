import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="border-t py-10 sm:py-12"
      style={{ borderColor: "rgba(148,163,184,0.16)", background: "#ffffff" }}
    >
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1fr]">
          <div>
            <div className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] text-xl font-extrabold text-white"
                style={{
                  background: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
                }}
              >
                PR
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  PulseRoom
                </h3>
                <p className="mt-1 text-base leading-7 text-slate-500">
                  Decision intelligence platform
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-[15px] leading-8 text-slate-600">
              PulseRoom is a web-based software platform that helps facilitators,
              educators, and teams structure discussion, collect multi-dimensional
              input, visualize alignment, and produce clearer decision outcomes.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-slate-900">Product</h4>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
              <li>
                <Link href="/#how-it-works" className="hover:text-violet-600">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="hover:text-violet-600">
                  Use cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-600">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://app.pulseroom.app/host/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600"
                >
                  Open app
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-slate-900">Company</h4>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
              <li>
                <Link href="/about" className="hover:text-violet-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-violet-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-violet-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-violet-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-violet-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-600">
                  Billing & pricing
                </Link>
              </li>
            </ul>

            <div className="mt-6 space-y-2 text-[15px] leading-7 text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Email:</span>{" "}
                support@pulseroom.app
              </p>
              <p>
                <span className="font-medium text-slate-900">Sales:</span>{" "}
                sales@pulseroom.app
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-6 text-sm text-slate-400"
          style={{ borderColor: "rgba(148,163,184,0.14)" }}
        >
          © 2026 PulseRoom. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
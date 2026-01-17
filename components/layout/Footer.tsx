import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">{site.name}</p>
            <p className="mt-1 text-sm text-slate-600">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#engage">
              Engagement
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { site } from "@/lib/site";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white shadow-soft">
        <span className="text-sm font-bold">PR</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-900">{site.name}</div>
        <div className="text-xs text-slate-500">{site.tagline}</div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Badge className="hidden sm:inline-flex">Static · Fast · Exportable</Badge>
          <Button href="#engage" variant="secondary" external={false} className="hidden sm:inline-flex">
            Explore options
          </Button>
          <Button href="#engage" variant="primary" external={false}>
            Get started
          </Button>
        </div>
      </Container>
    </header>
  );
}

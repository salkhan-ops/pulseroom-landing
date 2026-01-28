"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link"; // Standard Next.js Link
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

type SimpleItem = { label: string; href: string };

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

function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) handler();
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function DropMenu({
  id,
  openId,
  setOpenId,
  label,
  items,
}: {
  id: string;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  label: string;
  items: SimpleItem[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpen = openId === id;

  useOnClickOutside(rootRef, () => {
    if (isOpen) setOpenId(null);
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, setOpenId]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        {label}
        <span aria-hidden className="text-slate-400 ml-1">▾</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-lg p-2 z-50">
          {items.map((it) => (
            <Link
              key={it.href + it.label}
              href={it.href}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              onClick={() => setOpenId(null)}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openId, setOpenId] = useState<string | null>(null);

  const productId = useId();
  const proofId = useId();
  const engageId = useId();

  // Next.js Link handles the /pulseroom-landing prefix automatically
  // We use root-relative paths (starting with /)
  const product: SimpleItem[] = useMemo(
    () => [
      { label: "Why now", href: "/#why-now" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Outcomes", href: "/#outcomes" },
      { label: "Use cases", href: "/#use-cases" },
      { label: "Get PulseRoom", href: "/#get-pulseroom" },
    ],
    []
  );

  const proof: SimpleItem[] = useMemo(
    () => [
      { label: "Visual proof", href: "/#proof" },
      { label: "FAQ", href: "/#faq" },
      { label: "Decision notes (Blog)", href: "/blog" },
    ],
    []
  );

  const engage: SimpleItem[] = useMemo(
    () => [
      { label: "Engagement options", href: "/#engage" },
      { label: "Schedule pilot", href: "/#schedule" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} home`}
          onClick={() => setOpenId(null)}
        >
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          <DropMenu
            id={productId}
            openId={openId}
            setOpenId={setOpenId}
            label="Product"
            items={product}
          />
          <DropMenu
            id={proofId}
            openId={openId}
            setOpenId={setOpenId}
            label="Proof"
            items={proof}
          />
          <DropMenu
            id={engageId}
            openId={openId}
            setOpenId={setOpenId}
            label="Engage"
            items={engage}
          />
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/#engage"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            Explore options
          </Button>

          <Button
            href="https://calendar.app.google/WMFb5GpB8wNxyWcZ8"
            variant="primary"
            external={true}
          >
            Run a paid pilot
          </Button>
        </div>
      </Container>
    </header>
  );
}
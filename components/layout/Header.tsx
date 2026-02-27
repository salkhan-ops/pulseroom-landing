"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { site, APP_URL } from "@/lib/site";

type SimpleItem = { label: string; href: string };

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
  id, openId, setOpenId, label, items,
}: {
  id: string;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  label: string;
  items: SimpleItem[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpen = openId === id;

  useOnClickOutside(rootRef, () => { if (isOpen) setOpenId(null); });

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpenId(null); }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, setOpenId]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        {label}
        <span aria-hidden className="text-slate-400 ml-1 text-xs">▾</span>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-56 rounded-2xl bg-white p-2 z-50"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
        >
          {items.map((it) => (
            <Link
              key={it.href + it.label}
              href={it.href}
              className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
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
  const resultsId = useId();

  const product: SimpleItem[] = useMemo(() => [
    { label: "Why now", href: "/#why-now" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Outcomes", href: "/#outcomes" },
    { label: "Use cases", href: "/#use-cases" },
    { label: "Get PulseRoom", href: "/#get-pulseroom" },
  ], []);

  const results: SimpleItem[] = useMemo(() => [
    { label: "Visual results", href: "/#proof" },
    { label: "FAQ", href: "/#faq" },
    { label: "Decision notes (Blog)", href: "/blog" },
  ], []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} home`}
          onClick={() => setOpenId(null)}
        >
          <div
            className="grid h-9 w-9 place-items-center rounded-xl text-white text-sm font-bold"
            style={{ background: "#6366F1" }}
          >
            PR
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">{site.name}</div>
            <div className="text-xs text-slate-400">{site.tagline}</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <DropMenu id={productId} openId={openId} setOpenId={setOpenId} label="Product" items={product} />
          <DropMenu id={resultsId} openId={openId} setOpenId={setOpenId} label="Results" items={results} />
        </nav>

        {/* CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
          style={{
            background: "#6366F1",
            boxShadow: "0 2px 12px rgba(99,102,241,0.3)",
          }}
        >
          Try PulseRoom →
        </a>
      </div>
    </header>
  );
}
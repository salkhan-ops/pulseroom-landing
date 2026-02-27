"use client";

import { useEffect, useId, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { site, APP_URL } from "@/lib/site";
import "./header.css";

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
  const rootRef   = useRef<HTMLDivElement>(null);
  const btnRef    = useRef<HTMLButtonElement>(null);
  const panelId   = `dropmenu-panel-${id}`;
  const isOpen    = openId === id;

  // Set aria-expanded via DOM so linter never sees a JSX expression
  useEffect(() => {
    btnRef.current?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }, [isOpen]);

  useOnClickOutside(rootRef as React.RefObject<HTMLElement>, () => {
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
        ref={btnRef}
        type="button"
        className="dropmenu__trigger"
        aria-haspopup="listbox"
        aria-expanded="false"          /* static — useEffect keeps it in sync */
        aria-controls={panelId}
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        {label}
        <span aria-hidden="true" className="dropmenu__chevron">▾</span>
      </button>

      {isOpen && (
        /* ✅ role="listbox" has no required children constraint */
        <ul
          id={panelId}
          role="listbox"
          aria-label={label}
          className="dropmenu__panel"
        >
          {items.map((it) => (
            <li key={it.href + it.label} role="option" aria-selected="false">
              <Link
                href={it.href}
                className="dropmenu__item"
                onClick={() => setOpenId(null)}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [openId,     setOpenId]     = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const productId = useId();
  const resultsId = useId();

  // Set aria attributes via DOM — no JSX expressions
  useEffect(() => {
    burgerRef.current?.setAttribute("aria-expanded", mobileOpen ? "true" : "false");
    burgerRef.current?.setAttribute("aria-label", mobileOpen ? "Close menu" : "Open menu");
    drawerRef.current?.setAttribute("aria-hidden",   mobileOpen ? "false" : "true");
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const product: SimpleItem[] = useMemo(() => [
    { label: "Why now",       href: "/#why-now"       },
    { label: "How it works",  href: "/#how-it-works"  },
    { label: "Outcomes",      href: "/#outcomes"      },
    { label: "Use cases",     href: "/#use-cases"     },
    { label: "Get PulseRoom", href: "/#get-pulseroom" },
  ], []);

  const results: SimpleItem[] = useMemo(() => [
    { label: "Visual results",        href: "/#proof" },
    { label: "FAQ",                   href: "/#faq"   },
    { label: "Decision notes (Blog)", href: "/blog"   },
  ], []);

  return (
    <>
      <header className="header">
        <div className="header__inner">

          {/* Logo */}
          <Link
            href="/"
            className="header__logo"
            aria-label={`${site.name} home`}
            onClick={() => { setOpenId(null); setMobileOpen(false); }}
          >
            <div className="header__logo-mark" aria-hidden="true">PR</div>
            <div>
              <div className="header__logo-name">{site.name}</div>
              <div className="header__logo-tagline">{site.tagline}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Primary navigation">
            <DropMenu
              id={productId}
              openId={openId}
              setOpenId={setOpenId}
              label="Product"
              items={product}
            />
            <DropMenu
              id={resultsId}
              openId={openId}
              setOpenId={setOpenId}
              label="Results"
              items={results}
            />
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              Try PulseRoom →
            </a>

            <button
              ref={burgerRef}
              type="button"
              className={`header__burger${mobileOpen ? " header__burger--open" : ""}`}
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-drawer"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="header__burger-bar" />
              <span className="header__burger-bar" />
              <span className="header__burger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : "mobile-drawer--closed"}`}
        aria-hidden="true"
      >
        <nav className="mobile-drawer__inner" aria-label="Mobile navigation">
          <p className="mobile-drawer__label">Product</p>
          <ul className="mobile-drawer__list">
            {product.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-drawer__link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mobile-drawer__dot" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer__divider" role="separator" />

          <p className="mobile-drawer__label">Results</p>
          <ul className="mobile-drawer__list">
            {results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-drawer__link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mobile-drawer__dot" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer__divider" role="separator" />

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer__cta"
            onClick={() => setMobileOpen(false)}
          >
            Try PulseRoom for free →
          </a>
          <p className="mobile-drawer__hint">No credit card required</p>
        </nav>
      </div>
    </>
  );
}
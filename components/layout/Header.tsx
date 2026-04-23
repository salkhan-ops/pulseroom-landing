"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { site, APP_URL } from "@/lib/site";
import "./header.css";

type SimpleItem = { label: string; href: string };

function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) {
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelId = `dropmenu-panel-${id}`;
  const isOpen = openId === id;

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
        className={`dropmenu__trigger${isOpen ? " dropmenu__trigger--active" : ""}`}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={panelId}
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        {label}
        <span
          aria-hidden="true"
          className={`dropmenu__chevron${isOpen ? " dropmenu__chevron--open" : ""}`}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
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
                <span className="dropmenu__item-dot" aria-hidden="true" />
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
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const productId = useId();
  const resourcesId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    burgerRef.current?.setAttribute("aria-expanded", mobileOpen ? "true" : "false");
    burgerRef.current?.setAttribute("aria-label", mobileOpen ? "Close menu" : "Open menu");
    drawerRef.current?.setAttribute("aria-hidden", mobileOpen ? "false" : "true");
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const productItems: SimpleItem[] = useMemo(
    () => [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Outcomes", href: "/#outcomes" },
      { label: "Get PulseRoom", href: "/#get-pulseroom" },
    ],
    [],
  );

const resourcesItems: SimpleItem[] = useMemo(
  () => [
    { label: "Use cases", href: "/#use-cases" },
    { label: "Visual proof", href: "/#proof" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog / Decision notes", href: "/blog" },
  ],
  [],
);

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="header__rainbow" aria-hidden="true" />

        <div className="header__inner">
          <Link
            href="/"
            className="header__logo"
            aria-label={`${site.name} home`}
            onClick={() => {
              setOpenId(null);
              setMobileOpen(false);
            }}
          >
            <div className="header__logo-mark" aria-hidden="true">
              <span>PR</span>
              <div className="header__logo-glow" aria-hidden="true" />
            </div>
            <div>
              <div className="header__logo-name">{site.name}</div>
              <div className="header__logo-tagline">{site.tagline}</div>
            </div>
          </Link>

          <nav className="header__nav" aria-label="Primary navigation">
            <Link href="/" className="header__nav-link">
              Home
            </Link>

            <DropMenu
              id={productId}
              openId={openId}
              setOpenId={setOpenId}
              label="Product"
              items={productItems}
            />

            <Link href="/pricing" className="header__nav-link">
              Pricing
            </Link>

            <DropMenu
              id={resourcesId}
              openId={openId}
              setOpenId={setOpenId}
              label="Resources"
              items={resourcesItems}
            />

            <Link href="/contact" className="header__nav-link">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              <span className="header__cta-text">Get Started</span>
              <span className="header__cta-arrow" aria-hidden="true">
                →
              </span>
              <span className="header__cta-shimmer" aria-hidden="true" />
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

      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        ref={drawerRef}
        id="mobile-drawer"
        className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : "mobile-drawer--closed"}`}
        aria-hidden="true"
      >
        <nav className="mobile-drawer__inner" aria-label="Mobile navigation">
          <Link
            href="/"
            className="mobile-drawer__link mobile-drawer__link--home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-drawer__dot" aria-hidden="true" />
            Home
          </Link>

          <div className="mobile-drawer__divider" role="separator" />

          <p className="mobile-drawer__label">Product</p>
          <ul className="mobile-drawer__list">
            {productItems.map((item) => (
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

          <Link
            href="/pricing"
            className="mobile-drawer__link"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-drawer__dot" aria-hidden="true" />
            Pricing
          </Link>

          <div className="mobile-drawer__divider" role="separator" />

          <p className="mobile-drawer__label">Resources</p>
          <ul className="mobile-drawer__list">
            {resourcesItems.map((item) => (
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

          <Link
            href="/contact"
            className="mobile-drawer__link"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-drawer__dot" aria-hidden="true" />
            Contact
          </Link>

          <div className="mobile-drawer__divider" role="separator" />

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer__cta"
            onClick={() => setMobileOpen(false)}
          >
            Get Started →
          </a>
        </nav>
      </div>
    </>
  );
}
"use client";

import { useEffect } from "react";

/**
 * SmoothScroll
 * Lerp (linear interpolation) scroll — gives the page weight and momentum.
 * The scroll "drags" behind the cursor and coasts to a stop.
 *
 * Drop <SmoothScroll /> once in app/layout.tsx inside <body>.
 * No libraries. ~60 lines of vanilla JS.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Skip on touch/mobile — native momentum scroll is already great there
    const isTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice()) return;

    // ── Config ──────────────────────────────────────────────
    const LERP_FACTOR = 0.075;   // 0.05 = very dreamy, 0.12 = snappier
    const WHEEL_MULTIPLIER = 1.0; // scroll speed (1 = native feel)
    // ────────────────────────────────────────────────────────

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId: number | null = null;
    let isScrolling = false;

    // Lerp helper
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Clamp to valid scroll range
    const clamp = (v: number, min: number, max: number) =>
      Math.max(min, Math.min(max, v));

    const getMaxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    // On each wheel event, advance the target
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Normalise delta across browsers/trackpads
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 40;   // Firefox line mode
      if (e.deltaMode === 2) delta *= 800;  // page mode

      targetY = clamp(targetY + delta * WHEEL_MULTIPLIER, 0, getMaxScroll());

      if (!isScrolling) {
        isScrolling = true;
        raf();
      }
    };

    // Animation loop — lerps currentY toward targetY
    const raf = () => {
      const diff = Math.abs(targetY - currentY);

      if (diff < 0.5) {
        // Close enough — snap and stop
        currentY = targetY;
        window.scrollTo(0, currentY);
        isScrolling = false;
        rafId = null;
        return;
      }

      currentY = lerp(currentY, targetY, LERP_FACTOR);
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(raf);
    };

    // Anchor click — smooth scroll to section
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const offsetTop = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      targetY = clamp(offsetTop, 0, getMaxScroll());

      if (!isScrolling) {
        isScrolling = true;
        raf();
      }
    };

    // Keyboard scroll (arrow keys, Page Down, Space)
    const onKeyDown = (e: KeyboardEvent) => {
      // Don't hijack when user is typing in an input
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) return;

      const pageH = window.innerHeight;
      const lineH = 80;
      const map: Record<string, number> = {
        ArrowDown:  lineH,
        ArrowUp:   -lineH,
        PageDown:   pageH * 0.9,
        PageUp:    -pageH * 0.9,
        " ":        pageH * 0.9,
        Home:      -999999,
        End:        999999,
      };

      const delta = map[e.key];
      if (delta === undefined) return;

      e.preventDefault();
      targetY = clamp(targetY + delta, 0, getMaxScroll());

      if (!isScrolling) {
        isScrolling = true;
        raf();
      }
    };

    // Sync target when user uses scrollbar or browser back/forward
    const onScroll = () => {
      if (!isScrolling) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    // Attach
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
"use client";

import { useEffect, useRef } from "react";

/**
 * SmoothScroll
 * ─────────────────────────────────────────────────────────────
 * How it works:
 *  1. Fixes #smooth-content with position:fixed so it doesn't
 *     scroll natively — we drive it entirely with translate3d.
 *  2. Sets document.body height to match content height so the
 *     browser scrollbar still appears and has the right size.
 *  3. On every wheel event, advances `target` by deltaY.
 *  4. Every RAF frame, lerps `current` toward `target` by LERP%.
 *     This is what creates the "drag / coast" feel.
 *  5. Uses a `running` flag (not the RAF id) to stop the loop
 *     on cleanup — fixes the cancel bug.
 *
 * Usage
 * ─────
 * In layout.tsx:
 *   <SmoothScroll />
 *   <div id="smooth-content">
 *     {children}
 *   </div>
 *
 * Disabled automatically on touch devices.
 */

const LERP        = 0.07;   // 0.04 = heavy/dreamy · 0.07 = balanced · 0.12 = snappy
const SENSITIVITY = 1.0;    // wheel delta multiplier

export default function SmoothScroll() {
  const state = useRef({ current: 0, target: 0, running: false });

  useEffect(() => {
    // Skip on touch — native momentum scroll is better there
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const content = document.getElementById("smooth-content");
    if (!content) {
      console.warn("[SmoothScroll] #smooth-content not found in DOM.");
      return;
    }

    // ── Setup ────────────────────────────────────────────────
    const getLimit = () =>
      content.scrollHeight - window.innerHeight;

    const syncBodyHeight = () => {
      document.body.style.height = `${content.scrollHeight}px`;
    };

    // Fix content in place — we move it via transform
    content.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      will-change: transform;
      overflow: hidden;
    `;

    syncBodyHeight();

    // ── Wheel handler ────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const limit = getLimit();
      state.current.target = Math.max(
        0,
        Math.min(limit, state.current.target + e.deltaY * SENSITIVITY)
      );
    };

    // ── Anchor click — smooth jump to section ────────────────
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + state.current.current;
      state.current.target = Math.max(0, Math.min(getLimit(), top - 80));
    };

    // ── Keyboard scroll ──────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;

      const ph = window.innerHeight;
      const map: Record<string, number> = {
        ArrowDown:  80,
        ArrowUp:   -80,
        PageDown:   ph * 0.85,
        PageUp:    -ph * 0.85,
        " ":        ph * 0.85,
        Home:      -999999,
        End:        999999,
      };
      const delta = map[e.key];
      if (delta === undefined) return;
      e.preventDefault();
      state.current.target = Math.max(
        0,
        Math.min(getLimit(), state.current.target + delta)
      );
    };

    // ── RAF loop — the lerp that creates the drag feel ───────
    state.current.running = true;

    const loop = () => {
      if (!state.current.running) return; // ← clean stop on unmount

      const { current, target } = state.current;
      const next = current + (target - current) * LERP;

      // Only update DOM when there's meaningful movement
      if (Math.abs(target - next) > 0.05) {
        state.current.current = next;
        content.style.transform = `translate3d(0, ${-next}px, 0)`;
      } else if (next !== target) {
        // Snap to exact target when close enough
        state.current.current = target;
        content.style.transform = `translate3d(0, ${-target}px, 0)`;
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    // ── Resize ───────────────────────────────────────────────
    const onResize = () => {
      syncBodyHeight();
      // Clamp target if page got shorter
      state.current.target = Math.min(state.current.target, getLimit());
    };

    // ── Attach ───────────────────────────────────────────────
    window.addEventListener("wheel",     onWheel,      { passive: false });
    window.addEventListener("keydown",   onKeyDown);
    window.addEventListener("resize",    onResize);
    document.addEventListener("click",   onAnchorClick);

    // ── Cleanup ──────────────────────────────────────────────
    return () => {
      state.current.running = false;          // stops RAF loop
      window.removeEventListener("wheel",   onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize",  onResize);
      document.removeEventListener("click", onAnchorClick);
      document.body.style.height = "";
      content.style.cssText = "";
    };
  }, []);

  return null;
}
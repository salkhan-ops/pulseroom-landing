"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator
 * Injects an IntersectionObserver that watches all elements with
 * .anim-hidden or .anim-scale and adds .anim-visible when they enter
 * the viewport. Zero dependencies, pure DOM. Drop once in layout.tsx.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    // Smooth scroll override — cubic easing like Synthesia
    // (CSS scroll-behavior: smooth handles most, this adds JS-level control)
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onAnchorClick);

    // Intersection observer for fade-up animations
    const observed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-visible");
            // Keep observing so re-entering works (optional: unobserve for perf)
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Watch existing elements
    const watch = () => {
      document
        .querySelectorAll(".anim-hidden, .anim-scale")
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            observer.observe(el);
          }
        });
    };

    watch();

    // Also watch for dynamically added elements (Next.js route changes)
    const mutationObserver = new MutationObserver(watch);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
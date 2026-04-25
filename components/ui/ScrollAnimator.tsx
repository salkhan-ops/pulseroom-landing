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

    let rafId = 0;
    const updateParallax = () => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax || "0.12");
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const delta = (elementCenter - viewportCenter) * speed;
        el.style.setProperty("--parallax-y", `${delta.toFixed(2)}px`);
      });
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    // Watch existing elements
    const watch = () => {
      document
        .querySelectorAll(".anim-hidden, .anim-scale, .anim-zoom")
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            observer.observe(el);
          }
        });
    };

    watch();
    updateParallax();

    // Also watch for dynamically added elements (Next.js route changes)
    const mutationObserver = new MutationObserver(watch);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}

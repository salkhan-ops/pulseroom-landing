"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const scrollRef = useRef({
    current: 0,
    target: 0,
    limit: 0,
  });

  useEffect(() => {
    const content = document.getElementById("smooth-content");
    if (!content) return;

    // 1. SETTINGS - Tune these for the "Drag" feel
    const LERP = 0.05;       // LOWER = Heavier/More Drag (0.03 to 0.07 is the sweet spot)
    const SENSITIVITY = 0.8; // Adjust how far one wheel notch moves the page

    const updateLimit = () => {
      scrollRef.current.limit = content.getBoundingClientRect().height - window.innerHeight;
      // Sync body height so the scrollbar looks correct
      document.body.style.height = `${content.getBoundingClientRect().height}px`;
    };

    const onWheel = (e: WheelEvent) => {
      // Prevent native scroll - we are taking over entirely
      e.preventDefault();
      
      const { target, limit } = scrollRef.current;
      // Accumulate the "Target" (where we want to be)
      scrollRef.current.target = Math.max(0, Math.min(limit, target + e.deltaY * SENSITIVITY));
    };

    const raf = () => {
      const { current, target } = scrollRef.current;
      
      // The "Drag" Math: Move a small percentage of the distance every frame
      const newY = current + (target - current) * LERP;
      
      if (Math.abs(target - newY) > 0.01) {
        scrollRef.current.current = newY;
        // Move the content using GPU-accelerated transform
        content.style.transform = `translate3d(0, -${newY}px, 0)`;
      }

      requestAnimationFrame(raf);
    };

    // Initialize
    updateLimit();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateLimit);
    const animationId = requestAnimationFrame(raf);

    // CSS for the wrapper
    content.style.position = "fixed";
    content.style.top = "0";
    content.style.width = "100%";
    content.style.willChange = "transform";

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateLimit);
      cancelAnimationFrame(animationId);
      document.body.style.height = "";
    };
  }, []);

  return null;
}
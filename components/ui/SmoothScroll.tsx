"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const scrollRef = useRef({
    target: 0,
    current: 0,
    max: 0,
  });

  useEffect(() => {
    // 1. Setup Wrapper and Body
    const content = document.getElementById("smooth-content");
    if (!content) return;

    // We give the body a huge height so the browser scrollbar still works
    const updateBodyHeight = () => {
      document.body.style.height = `${content.getBoundingClientRect().height}px`;
      scrollRef.current.max = content.getBoundingClientRect().height - window.innerHeight;
    };

    // 2. Linear Interpolation (Lerp)
    const LERP_FACTOR = 0.08; // Lower = smoother/slower, Higher = snappier

    const animate = () => {
      const { target, current, max } = scrollRef.current;
      
      // Calculate new position
      const next = current + (target - current) * LERP_FACTOR;
      
      // Apply the transform (Translate3d is GPU accelerated)
      if (Math.abs(target - next) > 0.1) {
        content.style.transform = `translate3d(0, -${next}px, 0)`;
        scrollRef.current.current = next;
      }

      requestAnimationFrame(animate);
    };

    // 3. Listen for Native Scroll
    const onScroll = () => {
      scrollRef.current.target = window.scrollY;
    };

    // Initial setup
    updateBodyHeight();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateBodyHeight);
    const raf = requestAnimationFrame(animate);

    // Styling to make it work
    content.style.position = "fixed";
    content.style.top = "0";
    content.style.left = "0";
    content.style.width = "100%";
    content.style.willChange = "transform";

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBodyHeight);
      cancelAnimationFrame(raf);
      document.body.style.height = "";
    };
  }, []);

  return null;
}
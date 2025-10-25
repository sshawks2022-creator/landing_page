"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with subtle smoothness settings
    const lenis = new Lenis({
      duration: 1.1, // Faster animation (default is 1.2) - lower = less smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Subtle easing
      lerp: 0.08, // Subtle interpolation (default is 0.1) - lower = less smooth
    });

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy(); 
    };
  }, []);

  return null;
}

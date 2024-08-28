'use client'
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // Scroll duration (s)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: "vertical", // 'vertical' or 'horizontal'
      gestureDirection: "vertical", // Gesture direction
      smooth: true, // Enable smooth scroll
      mouseMultiplier: 1, // Speed multiplier for mouse events
      smoothTouch: true, // Enable smooth scroll on touch devices
      touchMultiplier: 2, // Speed multiplier for touch events
      infinite: false, // Infinite scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default SmoothScroll;

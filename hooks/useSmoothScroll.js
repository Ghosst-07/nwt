import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Simple setup - just enable CSS smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Smooth scroll to element function
  const smoothScrollTo = (target, duration = 0.6) => {
    if (typeof window === "undefined") return;

    // More reliable scroll to element
    let targetElement;
    let targetY;

    if (typeof target === "string") {
      // If it's a selector string
      targetElement = document.querySelector(target);
    } else if (target instanceof Element) {
      // If it's already an element
      targetElement = target;
    } else if (typeof target === "number") {
      // If target is a number (scroll position)
      targetY = target;
    }

    if (targetElement) {
      // Calculate target position with header offset
      const rect = targetElement.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      targetY = rect.top + scrollTop - 80; // Account for fixed header
    } else if (targetY === undefined) {
      console.warn("Scroll target not found:", target);
      return;
    }

    // Kill any existing scroll animations for immediate response
    gsap.killTweensOf(window);

    // Use GSAP for smooth animation with faster response
    gsap.to(window, {
      scrollTo: {
        y: targetY,
        autoKill: false,
      },
      duration,
      ease: "power2.out", // Faster easing
      overwrite: true, // Overwrite any conflicting animations
    });
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    smoothScrollTo(0, 0.8); // Faster scroll to top
  };

  return {
    smoothScrollTo,
    scrollToTop,
  };
};

export default useSmoothScroll;

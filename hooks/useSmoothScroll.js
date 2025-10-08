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

    // Smooth scroll configuration
    const setupSmoothScroll = () => {
      // Much simpler approach - just enable smooth scrolling without intercepting wheel events
      // This prevents conflicts with other scroll listeners and animations

      let isScrolling = false;
      let scrollTimeout;

      const handleWheel = (e) => {
        // Don't prevent default - let browser handle normal scrolling
        // Only add momentum for better feel
        if (isScrolling) return;

        clearTimeout(scrollTimeout);
        isScrolling = true;

        // Add a subtle momentum effect without intercepting the scroll
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 100);
      };

      // Add smooth wheel scrolling with passive listener to avoid conflicts
      document.addEventListener("wheel", handleWheel, { passive: true });

      // Use CSS smooth scrolling as backup
      document.documentElement.style.scrollBehavior = "smooth";

      // Cleanup function
      return () => {
        document.removeEventListener("wheel", handleWheel);
        document.documentElement.style.scrollBehavior = "auto";
        ScrollTrigger.killAll();
      };
    };

    // Initialize smooth scroll after DOM is ready
    const cleanup = setupSmoothScroll();

    return cleanup;
  }, []);

  // Smooth scroll to element function
  const smoothScrollTo = (target, duration = 1) => {
    if (typeof window === "undefined") return;

    // More reliable scroll to element
    let targetElement;

    if (typeof target === "string") {
      targetElement = document.querySelector(target);
    } else if (target instanceof Element) {
      targetElement = target;
    } else {
      // If target is a number (scroll position)
      gsap.to(window, {
        scrollTo: {
          y: target,
          autoKill: false,
        },
        duration,
        ease: "power2.inOut",
      });
      return;
    }

    if (!targetElement) {
      console.warn("Scroll target not found:", target);
      return;
    }

    gsap.to(window, {
      scrollTo: {
        y: targetElement,
        autoKill: false,
        offsetY: 80, // Account for fixed header
      },
      duration,
      ease: "power2.inOut",
    });
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    smoothScrollTo(0, 1.2);
  };

  return {
    smoothScrollTo,
    scrollToTop,
  };
};

export default useSmoothScroll;

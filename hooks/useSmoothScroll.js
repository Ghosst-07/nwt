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
      // Create scroll trigger for smooth scrolling
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Add momentum-based easing
          gsap.to(window, {
            scrollTo: {
              y: self.scroll(),
              autoKill: false,
            },
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      // Override default scroll behavior for smoother experience
      let isScrolling = false;

      const handleWheel = (e) => {
        if (isScrolling) return;

        e.preventDefault();
        isScrolling = true;

        const currentScroll = window.pageYOffset;
        const scrollAmount = e.deltaY * 2; // Adjust scroll sensitivity
        const targetScroll = Math.max(
          0,
          Math.min(
            document.body.scrollHeight - window.innerHeight,
            currentScroll + scrollAmount
          )
        );

        gsap.to(window, {
          scrollTo: {
            y: targetScroll,
            autoKill: false,
          },
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            isScrolling = false;
          },
        });
      };

      // Add smooth wheel scrolling
      document.addEventListener("wheel", handleWheel, { passive: false });

      // Cleanup function
      return () => {
        document.removeEventListener("wheel", handleWheel);
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

    gsap.to(window, {
      scrollTo: {
        y: target,
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

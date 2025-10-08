"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { InfiniteSliderHorizontal } from "../ImageSlider";

// --- Configuration Data (Easy to Edit) ---
// Updated to reflect "New World Group" branding.
const HERO_IMG_SRC =
  "https://placehold.co/600x400/BFDBFE/0E7490?text=Global+Logistics+and+Construction+Graphic"; // Updated image text

// --- Custom Counter Component ---

/**
 * Counts up to a target number when scrolled into view.
 * Uses Framer Motion's useMotionValue and animate API.
 */
const Counter = ({ from = 0, to, duration = 1.5, suffix = "" }) => {
  // Motion value tracks the numerical state
  const count = useMotionValue(from);
  // Transform rounds the number for display
  const rounded = useTransform(count, Math.round);

  const ref = useRef(null);
  // Trigger animation when component is in view (no margin to ensure it works on page load)
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      // Animate the motion value from 0 to the target 'to' number
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [count, isInView, to, duration]);

  return (
    <p ref={ref} className="text-3xl font-bold text-gray-900 sm:text-4xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </p>
  );
};

// --- Hero Content Component ---

const HeroContent = () => (
  // Section takes full viewport height and centers content
  <section
    id="home"
    className={`relative flex items-center justify-center h-screen bg-sky-50`}
  >
    {/* Absolute Background SVG Element (Water Flow/Wave) */}
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle blue wave 1 */}
        <path
          d="M0 450 C 300 550, 600 350, 1440 450 L 1440 800 L 0 800 Z"
          fill="#3B82F6"
          className="fill-blue-600/20"
        />
        {/* Cyan wave 2 */}
        <path
          d="M0 500 C 400 650, 800 400, 1440 550 L 1440 800 L 0 800 Z"
          fill="#06B6D4"
          className="fill-cyan-500/30"
        />
      </svg>
    </div>

    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full h-full flex items-center pt-16 lg:pt-20">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column (Text & Stats) */}
        <div>
          {/* New Tagline: Global focus for a business group */}
          <p className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Global Reach. Diversified Excellence.
          </p>

          {/* Unified and powerful headline: BOLD BRAND NAME */}
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 lg:mt-8 sm:text-7xl xl:text-8xl leading-tight">
            <span className="block text-blue-600">NEW WORLD</span>
            <span className="block">GROUP.</span>
          </h1>

          {/* New Description: Reflects diversified business nature */}
          <p className="mt-6 text-xl text-gray-700 max-w-lg">
            A powerful conglomerate driving innovation across logistics,
            construction, and trading, building a better tomorrow globally.
          </p>

          {/* New Stats Section - Now uses Counter component */}
          <div className="grid grid-cols-3 gap-6 mt-12 sm:mt-16 lg:mt-20 border-t border-gray-200 pt-6">
            <div className="py-3 pr-4 border-r border-gray-200">
              {/* Trusted Years: Counts to 20 */}
              <Counter to={20} />
              <p className="mt-1 text-sm font-medium text-gray-500">
                Trusted Years
              </p>
            </div>

            <div className="py-3 px-4 border-r border-gray-200">
              {/* Happy Clients: Counts to 600 with a '+' suffix */}
              <Counter to={600} suffix="+" />
              <p className="mt-1 text-sm font-medium text-gray-500">
                Happy Clients
              </p>
            </div>

            <div className="py-3 pl-4">
              {/* Tasks Completed: Counts to 600 with a '+' suffix */}
              <Counter to={600} suffix="+" />
              <p className="mt-1 text-sm font-medium text-gray-500">
                Tasks Completed
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <InfiniteSliderHorizontal />
      </div>
    </div>
  </section>
);

// --- Main Hero Component ---

const Hero = () => {
  return (
    // The main container uses relative positioning
    <div className="bg-white font-sans relative">
      <HeroContent />
      {/* Added extra content height for scrolling effect to test sticky header */}
    </div>
  );
};

export default Hero;

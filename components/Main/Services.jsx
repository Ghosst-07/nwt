"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Thematic SVG Icons (JSX Compliant) ---
const ICON_MAP = {
  Logistics: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Delivery: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-8 4h16" />
    </svg>
  ),
  Trading: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10v11h18V10M3 10l9-6 9 6M3 10l-2 2M21 10l2 2" />
    </svg>
  ),
  "Water Supply": (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 14v4M7 10h10M12 4v4m0 0l-4 4m4-4l4 4M5 19h14" />
    </svg>
  ),
  Transport: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10v11h18V10M3 10l9-6 9 6M3 10l-2 2M21 10l2 2" />
    </svg>
  ),
  Relocation: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l2 2m-2-2v10a1 1 0 01-1 1h-3" />
    </svg>
  ),
  Recovery: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 12m14.356 0H20v-5m0 0l-4-4m4 4l-4 4" />
    </svg>
  ),
  Environment: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19h14M12 4v12m-4-4l4 4 4-4" />
    </svg>
  ),
};

// --- Services Data: Using Static Images from public/services folder ---
const SERVICES = [
  {
    id: 1,
    title: "CARGO LOADING & UNLOADING",
    description:
      "Beside of cargo transportation we may also provide loading & unloading services with professional equipment and experienced team.",
    category: "Logistics",
    imageUrl: "/services/1.jpeg",
  },
  {
    id: 2,
    title: "PASSENGER LUGGAGE DELIVERY",
    description:
      "All types of luggage of passenger are easily portable for us with secure handling and timely delivery across UAE.",
    category: "Delivery",
    imageUrl: "/services/2.jpeg",
  },
  {
    id: 3,
    title: "CARGO PACKAGING",
    description:
      "You need to pack your cargo and make it ready for shipment no need to worry, we provide professional packaging services.",
    category: "Logistics",
    imageUrl: "/services/3.webp",
  },
  {
    id: 4,
    title: "BAGGAGE WRAPPING",
    description:
      "We may also provide wrapping baggage for transportation. Wrapping ensures extra protection during transit.",
    category: "Delivery",
    imageUrl: "/services/4.webp",
  },
  {
    id: 5,
    title: "CARGO TRANSPORT BY HEAVY TRUCK & LIGHT TRUCK",
    description:
      "We may provide the transportation of cargo with in UAE with the help of heavy trucks and light trucks as per requirement.",
    category: "Transport",
    imageUrl: "/services/5.webp",
  },
  {
    id: 6,
    title: "NEW & USED FURNITURE REMOVAL",
    description:
      "By our transportation facility we may also provide services for furniture removal, relocation and safe delivery.",
    category: "Relocation",
    imageUrl: "/services/6.webp",
  },
  {
    id: 7,
    title: "VEHICLE RECOVERY",
    description:
      "Your vehicle may need recovery at any time or anywhere we will assist you with professional vehicle recovery services.",
    category: "Recovery",
    imageUrl: "/services/7.jpeg",
  },
  {
    id: 8,
    title: "TRANSPORTATION OF SALT, TC WATER",
    description:
      "We may provide sweet water, TC water, water for gardening, water tanker services with reliable transportation.",
    category: "Water Supply",
    imageUrl: "/services/8.jpeg",
  },
  {
    id: 9,
    title: "TRANSPORTATION OF SWEET WATER",
    description:
      "We provide 5000,1000,2000 gallon capacity of tanker. Sweet water transportation for residential and commercial use.",
    category: "Water Supply",
    imageUrl: "/services/9.jpeg",
  },
  {
    id: 10,
    title: "TRANSPORTATION OF WASTE WATER",
    description:
      "We provide 5000,1000,2000 gallon capacity of tanker. Waste water transportation with proper disposal methods.",
    category: "Environment",
    imageUrl: "/services/10.jpeg",
  },
];

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const { imageUrl } = service;

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    // Premium hover animations with micro-interactions
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        rotationX: 2,
        rotationY: 1,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "center center",
      });

      gsap.to(card.querySelector(".icon-circle"), {
        scale: 1.1,
        rotationY: 10,
        duration: 0.3,
        ease: "back.out(1.2)",
      });

      gsap.to(card.querySelector(".premium-glow"), {
        opacity: 1,
        duration: 0.3,
      });

      gsap.to(image, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(overlay, {
        opacity: 0.3,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".icon-circle"), {
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".premium-glow"), {
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(overlay, {
        opacity: 0.7,
        duration: 0.3,
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="ServicesCard group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/40"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.1)",
      }}
    >
      {/* Premium glow effect */}
      <div
        className="premium-glow absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 100%)",
        }}
      />

      {/* Hero Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        {/* Professional overlay with gradient */}
        <div
          ref={overlayRef}
          className="absolute inset-0 opacity-70 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(51,65,85,0.6) 50%, rgba(71,85,105,0.4) 100%)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-xs font-medium text-white tracking-wide">
            {service.category}
          </span>
        </div>

        {/* Icon positioned over image */}
        <div className="absolute top-4 left-4">
          <div className="icon-circle w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300">
            {ICON_MAP[service.category] || ICON_MAP["Logistics"]}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 flex flex-col h-52">
        {/* Title */}
        <h3 className="text-base font-bold text-slate-800 mb-3 leading-snug tracking-tight min-h-[2.5rem]">
          {service.title}
        </h3>

        {/* Description - Full text always visible */}
        <div className="flex-grow mb-4 overflow-hidden">
          <p className="text-sm text-slate-600 leading-relaxed h-full">
            {service.description}
          </p>
        </div>

        {/* Premium CTA Button */}
        <div className="flex items-center justify-between mt-auto">
          <button className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 shadow-lg hover:shadow-xl">
            <span>Book Service</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Premium accent line */}
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-60" />
        </div>
      </div>

      {/* Subtle border accent */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200/50 group-hover:to-cyan-200/50 pointer-events-none" />
    </div>
  );
};

// Main Services Component
const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  // Use static services with images (no loading needed)
  const servicesWithImages = SERVICES;
  const loading = false;

  // State to control how many services are visible (default: false = first 6)
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll
    ? servicesWithImages
    : servicesWithImages.slice(0, 6);

  // Function to initialize GSAP animation for a card
  const initializeCardAnimation = useCallback((card, index) => {
    gsap.fromTo(
      card,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.08,
      }
    );
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    // Header animations
    gsap.fromTo(
      title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        delay: 0.2,
      }
    );

    // Background wave animation
    gsap.to(".wave-bg", {
      x: "10%", // Slower, more subtle movement
      duration: 30,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Cleanup function for GSAP
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  // Effect to handle initial card animations and animations after 'Show All'
  useEffect(() => {
    // 1. Kill existing triggers safely
    ScrollTrigger.getAll()
      // FIX: Added null/existence check (t.trigger) before accessing properties
      .filter(
        (t) =>
          t.trigger &&
          t.trigger.classList &&
          t.trigger.classList.contains("ServicesCard")
      )
      .forEach((t) => t.kill());

    // IMPORTANT FIX: Check if gridRef.current is available before trying to access children
    if (!gridRef.current) return;

    // 2. Animate all currently displayed cards
    const cards = Array.from(gridRef.current.children);
    cards.forEach((card, index) => {
      initializeCardAnimation(card, index);
    });
  }, [displayedServices, initializeCardAnimation]);

  // When 'show all' is toggled, update state and rely on the useEffect above to handle animation
  const handleShowAll = () => {
    // Set to true to show all services
    setShowAll(true);
    // Wait a moment for the new elements to render, then scroll to the grid container
    setTimeout(() => {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  if (loading) {
    return (
      <section className="relative py-20 lg:py-32 flex items-center justify-center min-h-[500px] bg-sky-50">
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-gray-600">Loading Pexels images...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
      }}
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Animated gradient waves */}
        <svg
          className="absolute w-full h-full wave-bg"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 300 C 300 400, 600 200, 1440 300 L 1440 800 L 0 800 Z"
            fill="url(#wave1)"
            className="opacity-20"
          />
          <path
            d="M0 400 C 400 550, 800 250, 1440 400 L 1440 800 L 0 800 Z"
            fill="url(#wave2)"
            className="opacity-15"
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <p
              ref={subtitleRef}
              className="text-sm font-semibold tracking-[0.2em] text-slate-600 uppercase"
            >
              Premium Services
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-500 rounded-full" />
          </div>

          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6"
            style={{
              background:
                "linear-gradient(135deg, #1e293b 0%, #475569 50%, #334155 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WORLD-CLASS
            <br />
            <span className="text-blue-600">SOLUTIONS</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience excellence in logistics with our comprehensive suite of
            premium services, engineered for the modern business landscape.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Premium Show All Button */}
        {!showAll && SERVICES.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={handleShowAll}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 shadow-xl hover:shadow-2xl"
            >
              <span>Explore All Services</span>
              <span className="text-sm opacity-75">
                ({SERVICES.length - 6} more)
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              {/* Premium button glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300 group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span>Show Less</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

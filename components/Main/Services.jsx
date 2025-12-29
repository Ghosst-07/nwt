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
      <path d="M5 3h14c.553 0 1 .447 1 1v16c0 .553-.447 1-1 1H5c-.553 0-1-.447-1-1V4c0-.553.447-1 1-1zm0 0l2 4h10l2-4M9 13h6" />
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
      <path d="M16 2h-3l-2 4H7c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2zm-2 7H8v-2h6v2z" />
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
      <path d="M3 5h18v2H3zM3 10h18v2H3zM3 15h18v2H3zM3 20h18v2H3z" />
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
      <path d="M12 4v16m-7-7h14m-7-7l7 7-7 7-7-7z" />
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
      <path d="M3 16c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2H5c-1.104 0-2 .896-2 2v8zm0 0l1-3h16l1 3" />
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
      <path d="M21 12V3h-6l-3 5-3-5H3v9l3 4v4h12v-4l3-4z" />
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
      <path d="M5 12h14v7h-7l2 5-5-5h-2l2-5H5z" />
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
      <path d="M5 20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2H7c-1.104 0-2 .896-2 2v16zm0 0l2-4h10l2 4" />
    </svg>
  ),
};

// --- Services Data: Using Static Images from public/services folder ---
const SERVICES = [
  {
    id: 1,
    title: "TRANSPORTATION OF SWEET WATER",
    description:
      "We provide 5000, 1000, and 2000-gallon capacity tankers for transporting sweet water. This service is available for both residential and commercial use, ensuring a steady supply of clean water for all your needs, whether for consumption, irrigation, or industrial purposes. Our fleet is equipped with modern vehicles to ensure on-time delivery and safe handling of water.",
    category: "Water Supply",
    imageUrl: "/services/9.jpg",
  },
  {
    id: 2,
    title: "Water Transportation Services",
    description:
      "Our efficient water transportation services cater to residential, commercial, and industrial sectors, ensuring the timely and reliable delivery of water to your desired location. Whether you're running a construction site or need a constant water supply for your home or business, we offer a wide range of tanker capacities and flexible scheduling to meet your needs.",
    category: "Water Supply",
    imageUrl: "/services/11.jpg",
  },
  {
    id: 3,
    title: "Transportation of Salt, TC Water",
    description:
      "We provide reliable transportation for sweet water, treated sewage (TC) water, and water for gardening. Our specialized tankers are equipped to handle different types of water and deliver them safely for various purposes, such as irrigation, industrial use, or other water-related needs. We ensure that all deliveries are made promptly and without compromise on quality.",
    category: "Water Supply",
    imageUrl: "/services/8.jpg",
  },
  {
    id: 4,
    title: "Portable Water Supply",
    description:
      "We offer convenient portable water supply solutions tailored for events, construction sites, emergency situations, and more. Our mobile water tanks are perfect for areas without a stable water source, ensuring you have access to clean, potable water at all times. We also offer flexible delivery schedules to suit your project timelines.",
    category: "Water Supply",
    imageUrl: "/services/13.webp",
  },
  {
    id: 5,
    title: "TSE Irrigation Water",
    description:
      "Our TSE (Treated Sewage Effluent) water transportation service provides eco-friendly irrigation and landscaping solutions. This treated water is ideal for gardening, parks, agricultural use, and other landscaping needs. We offer flexible tanker sizes, ensuring you receive just the right amount of water, with minimal environmental impact.",
    category: "Water Supply",
    imageUrl: "/services/16.jpg",
  },
  {
    id: 6,
    title: "CARGO LOADING & UNLOADING",
    description:
      "Along with cargo transportation, we also provide professional loading and unloading services. Our skilled team uses advanced equipment to handle goods of all sizes with care, ensuring your items are safely loaded, transported, and unloaded with minimal risk of damage. Whether you're moving heavy machinery or sensitive goods, we've got you covered.",
    category: "Logistics",
    imageUrl: "/services/1.jpg",
  },
  {
    id: 7,
    title: "PASSENGER LUGGAGE DELIVERY",
    description:
      "We specialize in transporting passenger luggage with secure handling and timely delivery. Our services ensure your luggage arrives safely at your destination, whether it's for travel, relocation, or special events. With dedicated routes and careful handling, we offer a reliable solution for all your luggage transportation needs across the UAE.",
    category: "Delivery",
    imageUrl: "/services/2.webp",
  },
  {
    id: 8,
    title: "CARGO PACKAGING",
    description:
      "Our cargo packaging service provides a professional solution to prepare your goods for safe shipment. We use high-quality materials and specialized techniques to protect your items from damage during transit. Whether it's fragile electronics or large equipment, our team ensures that everything is securely packed and ready for shipment.",
    category: "Logistics",
    imageUrl: "/services/3.jpg",
  },
  {
    id: 9,
    title: "BAGGAGE WRAPPING",
    description:
      "We provide baggage wrapping services to ensure extra protection for your belongings during transportation. Wrapping adds an additional layer of security against damage, dirt, or theft. It's especially useful for long-distance travel or when transporting fragile or valuable items.",
    category: "Delivery",
    imageUrl: "/services/4.webp",
  },
  {
    id: 10,
    title: "CARGO TRANSPORT BY HEAVY TRUCK & LIGHT TRUCK",
    description:
      "We offer cargo transportation using both heavy and light trucks, depending on the nature of your goods. Whether you need to move bulky, heavy items or smaller, lighter shipments, we have the right vehicle for the job. Our fleet is well-maintained and ready to handle all types of cargo, ensuring safe and timely delivery.",
    category: "Transport",
    imageUrl: "/services/5.png",
  },
  {
    id: 11,
    title: "NEW & USED FURNITURE REMOVAL",
    description:
      "We offer professional furniture removal services for both new and used furniture. Our team is trained to carefully handle, load, and transport furniture, ensuring it arrives safely at its new destination. Whether you're moving homes, offices, or need to dispose of old furniture, we provide a hassle-free and efficient solution.",
    category: "Relocation",
    imageUrl: "/services/6.jpeg",
  },
  {
    id: 12,
    title: "VEHICLE RECOVERY",
    description:
      "Our vehicle recovery service is available 24/7 to assist you in times of need. Whether you've had a breakdown, been in an accident, or need to transport a vehicle from one location to another, our experienced team ensures safe and efficient recovery, minimizing any additional damage to your vehicle during transport.",
    category: "Recovery",
    imageUrl: "/services/7.webp",
  },
  {
    id: 13,
    title: "SEWAGE WATER REMOVAL",
    description:
      "We provide safe and efficient sewage water removal services for both residential and commercial properties. Our team follows proper disposal methods and environmental guidelines to ensure that the wastewater is removed and disposed of correctly, minimizing the risk of contamination and unpleasant odors.",
    category: "Environment",
    imageUrl: "/services/14.png",
  },
  {
    id: 14,
    title: "DE WATERING SERVICES",
    description:
      "Our dewatering services help manage and remove excess water from construction sites and other areas prone to flooding. Using advanced equipment and techniques, we ensure that your site stays dry and safe, preventing water damage and delays in construction or other activities.",
    category: "Environment",
    imageUrl: "/services/12.png",
  },
  {
    id: 15,
    title: "PASSENGER PICKUP & DROP SERVICES",
    description:
      "We offer reliable passenger pickup and drop services, specializing in airport, hotel, and event transportation. Whether you're traveling for business or leisure, our professional drivers ensure timely and safe transportation, with a focus on comfort and convenience.",
    category: "Transport",
    imageUrl: "/services/15.webp",
  },
];

// Service Card Component
// Service Card Component
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const [expanded, setExpanded] = useState(false); // 👈 NEW: for See More toggle
  const { imageUrl } = service;

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        rotationX: 2,
        rotationY: 1,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(image, { scale: 1.05, duration: 0.6, ease: "power2.out" });
      gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
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
      gsap.to(image, { scale: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(overlay, { opacity: 0.7, duration: 0.3 });
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
      className="ServicesCard group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-white/50"
    >
      {/* Hero Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-xs font-medium text-white tracking-wide">
            {service.category}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <div className="icon-circle w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
            {ICON_MAP[service.category] || ICON_MAP["Logistics"]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col h-auto">
        <h3 className="text-base font-bold text-slate-800 mb-3 leading-snug tracking-tight">
          {service.title}
        </h3>

        {/* Description with toggle */}
        <div className="flex-grow mb-4">
          <p
            className={`text-sm text-slate-600 leading-relaxed transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {service.description}
          </p>

          {/* "See More" / "See Less" Button */}
          {service.description.length > 180 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-auto">
          <button className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
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
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-60" />
        </div>
      </div>
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
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
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
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      subtitle,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: 0.2,
      }
    );

    // Subtle background animation
    gsap.to(".wave-bg", {
      x: "5%",
      duration: 20,
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
    // No aggressive scrolling - let user stay where they are
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
            Reliable water tanker services providing dewatering and the
            transportation of sweet, potable, and TSE irrigation water for
            diverse project needs.
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

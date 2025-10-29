"use client";
import React, { useEffect } from "react";
import { useSmoothScrollContext } from "./SmoothScrollWrapper";

// --- Configuration Data (Easy to Edit) ---
const LOGO_SRC = "/logonwt.jpeg";
const NAV_LINKS = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about-section" },
  { title: "Contact", href: "#contact" },
];

// --- Utility Classes ---
const ACCENT_CYAN =
  "bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 text-white";
const LIGHT_BG_SCROLLED = "bg-sky-50 bg-opacity-95"; // Background when scrolled (solid)

// --- Header Component (Fixed, Transparent/Solid Scroll Effect, Mobile State Management) ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { smoothScrollTo } = useSmoothScrollContext();

  // Effect to handle scroll change for sticky background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set background solid after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP-powered smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    // More robust scroll handling with faster response
    const target = document.querySelector(href);
    if (target) {
      smoothScrollTo(target, 0.5); // Faster scroll duration
    } else {
      // Fallback: try to scroll using href directly
      console.warn(`Target not found for ${href}, trying direct scroll`);
      smoothScrollTo(href, 0.5);
    }

    setIsMenuOpen(false); // Close mobile menu if open
  };

  const NavSection = () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
      {NAV_LINKS.map((link) => (
        <a
          key={link.title}
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.href)}
          title={link.title}
          className="text-base text-gray-800 transition-all duration-200 hover:text-blue-600 cursor-pointer"
        >
          {link.title}
        </a>
      ))}
    </div>
  );

  const MobileMenuIcon = ({ isOpen }) => (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path> // Close Icon
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h16M4 16h16"
        ></path> // Hamburger Icon
      )}
    </svg>
  );

  return (
    // Apply conditional background and shadow based on scroll state
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? `${LIGHT_BG_SCROLLED} shadow-md` : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              title="New World Transportation Services LLC."
              className="flex cursor-pointer"
            >
              <img
                className="w-auto h-8"
                src={LOGO_SRC}
                alt="New World Transportation Services LLC Logo"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex p-2 text-gray-800 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <MobileMenuIcon isOpen={isMenuOpen} />
          </button>

          {/* Desktop Links */}
          <NavSection />

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            title="Get Quote"
            className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 font-semibold rounded-full ${ACCENT_CYAN} cursor-pointer`}
            role="button"
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile Menu Panel (Hidden by default, shown when state is open) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 py-4 border-t border-gray-200"
            : "max-h-0 opacity-0 overflow-hidden"
        } ${LIGHT_BG_SCROLLED}`} // Always solid for readability in mobile menu
      >
        <div className="px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block text-base text-gray-800 transition-all duration-200 hover:text-blue-600 cursor-pointer"
            >
              {link.title}
            </a>
          ))}
          {/* Mobile CTA Button (same as desktop CTA) */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            title="Get Quote"
            className={`block w-full text-center px-5 py-2.5 text-base transition-all duration-200 font-semibold rounded-full ${ACCENT_CYAN} cursor-pointer`}
            role="button"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

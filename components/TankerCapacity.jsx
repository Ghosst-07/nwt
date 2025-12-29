"use client";
import React from "react";

const TankerCapacity = () => {
  const capacities = [
    "2,000 Gallons",
    "5,000 Gallons",
    "7,000 Gallons",
    "10,000 Gallons",
    "15,000 Gallons",
  ];

  return (
    <section className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 py-8 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative">
        {/* Header text */}
        <div className="text-center mb-6">
          <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
            🚛 Available Tanker Capacities
          </h3>
          <p className="text-cyan-100 text-sm md:text-base mt-2">
            We have a diverse fleet ready to serve your needs
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative flex overflow-hidden">
          {/* First marquee track */}
          <div className="flex animate-marquee whitespace-nowrap">
            {capacities.map((capacity, index) => (
              <div
                key={`first-${index}`}
                className="mx-4 md:mx-8 flex items-center"
              >
                <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl px-8 py-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 16h18v2H3zM5 8h14v6H5z" />
                      <circle cx="7" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                    </svg>
                    <span className="text-white font-bold text-xl md:text-2xl">
                      {capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate marquee track for seamless loop */}
          <div
            className="flex animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            {capacities.map((capacity, index) => (
              <div
                key={`second-${index}`}
                className="mx-4 md:mx-8 flex items-center"
              >
                <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl px-8 py-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 16h18v2H3zM5 8h14v6H5z" />
                      <circle cx="7" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                    </svg>
                    <span className="text-white font-bold text-xl md:text-2xl">
                      {capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-600 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TankerCapacity;

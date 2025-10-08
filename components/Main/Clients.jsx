"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const Clients = () => {
  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-white">
      <div className="w-full mx-auto px-0">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-sm font-semibold tracking-wider text-cyan-600 uppercase mb-2">
            Partners in Progress
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Trusted by Global Industry Leaders
          </h2>

          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our reliable logistics and construction solutions power critical
            operations for companies around the world. We specialize in scalable
            transport, infrastructure, and supply chain services tailored to
            diverse industry needs. With decades of experience and a dedicated
            workforce, we deliver on time—every time. From cross-border shipping
            to large-scale relocations, our partners trust us with their most
            complex challenges. Innovation, precision, and a customer-first
            mindset define our approach to every project we undertake.
          </p>
        </div>
        <InfiniteSlider gap={24} reverse className="w-[100%] h-full">
          {Array.from({ length: 8 }, (_, i) => (
            <img
              key={`client-logo-${i}`}
              src={`/brand/company${i + 1}.png`}
              alt="logo"
              className="h-[200px] w-auto"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default Clients;

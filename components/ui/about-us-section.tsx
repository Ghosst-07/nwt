"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Truck,
  HeadphonesIcon,
  Building2,
  ArrowRight,
  Package,
  CheckCircle,
  Award,
  Globe,
} from "lucide-react";

export default function AboutUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about-section"
      className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden"
    >
      {/* Background Pattern - matching hero theme */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 450 C 300 550, 600 350, 1440 450 L 1440 800 L 0 800 Z"
            fill="#3B82F6"
            className="fill-blue-600/20"
          />
          <path
            d="M0 500 C 400 650, 800 400, 1440 550 L 1440 800 L 0 800 Z"
            fill="#06B6D4"
            className="fill-cyan-500/30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4"
            variants={itemVariants}
          >
            About New World Transportation Services LLC
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              LET US DO THE WORK
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            NEW WORLD GROUP OF COMPANIES CONSIST OF A GROUP OF ORGANISATIONS
            WHICH ARE EXPERIENCED IN WHAT THEY DO. WITH A TEAM OF QUALIFIED AND
            EXPERIENCED INDIVIDUALS HAVE BEEN SUCCESSFULLY OPERATING SINCE THE
            LAST 20 YEARS.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-7 h-7 text-blue-600" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable, Affordable & the Best! Consistently good in
                performance, able to be trusted. We create a clean, healthy work
                environment tailored for your needs across all our service
                divisions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Award className="w-7 h-7 text-cyan-600" />
                Why Choose Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    20+ years of trusted excellence in the UAE market
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Comprehensive services across multiple industries
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Qualified and experienced team members
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Customer Happiness
                  </h4>
                  <p className="text-gray-600">
                    Customer happiness is the level of loyalty and satisfaction
                    that your customers experience after engaging with our
                    services and team. We are regularly, at the right time, in
                    the right way.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bg.jpg"
                alt="New World Group Operations"
                className="w-full h-96 object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />

              {/* Centered Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h4 className="text-2xl font-semibold mb-2">
                  Trusted Excellence
                </h4>
                <p className="text-white/90 text-lg">
                  20+ years of reliable service across UAE
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  600+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Real data from website */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-10%" }}
        >
          {[
            { number: "20", label: "Trusted Years", icon: Award },
            { number: "600+", label: "Happy Clients", icon: Users },
            { number: "100+", label: "Staff Members", icon: Building2 },
            { number: "600+", label: "Tasks Completed", icon: CheckCircle },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={statVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Group Companies Section - Real companies from website */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Group Companies
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              THE GROUP INCLUDES specialized companies, each excelling in their
              respective fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HELPING HANDS BUILDING CLEANING LLC",
              "AFRAH ALMOSTAQBAL PASSENGER TRANSPORT LLC",
              "NB WATER PURIFIER LLC",
              "AFRAH GENERAL LAND TRANSPORT LLC",
              "AL SAQAR AL SAREE DRAINING SERVICES LLC",
              "NEW WORLD TRANSPORTATION SERVICES LLC",
              "ARABIAN MIDDLE EAST GENERAL LAND TRANSPORT LLC",
            ].map((company, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:bg-white transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                      {company}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Highlight */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Transportation</h4>
                <p className="text-sm text-white/80">
                  Cargo transport, passenger services, heavy equipment
                </p>
              </div>
              <div className="text-center">
                <Package className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Logistics</h4>
                <p className="text-sm text-white/80">
                  Cargo packaging, loading & unloading, luggage delivery
                </p>
              </div>
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Services</h4>
                <p className="text-sm text-white/80">
                  Building cleaning, water purification, waste disposal
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Need Reliable Services?
            </h3>
            <p className="text-gray-600">
              Let us handle your transportation, logistics, and business service
              needs with professional excellence. Contact us today!
            </p>
          </div>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

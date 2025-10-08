"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Globe,
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-4 bg-sky-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 450 C 300 550, 600 350, 1440 450 L 1440 800 L 0 800 Z"
            fill="#3B82F6"
            className="fill-blue-600/10"
          />
          <path
            d="M0 500 C 400 650, 800 400, 1440 550 L 1440 800 L 0 800 Z"
            fill="#06B6D4"
            className="fill-cyan-500/15"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-cyan-600 font-semibold mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Globe className="w-4 h-4" />
            GET IN TOUCH
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-blue-600">Contact</span> New World Group
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our professional
            team for reliable logistics and transport solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information & Map */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Our Location",
                  content:
                    "Office 102 bur dubaiLand Area, AlrafahUAE\nBaniyas Rd - near Etisalat Tower 1\nDeira - Riggat Al Buteen - Dubai - UAE",
                  link: "https://maps.google.com/maps?q=Dubai+Land+Department,Baniyas+Rd,+near+Etisalat+Tower+1,+Deira,+Riggat+Al+Buteen,+Dubai,+UAE",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone Numbers",
                  content:
                    "+971 52 335 5535 | +971 056 566 1114 | +971 050 336 1502",
                  link: "tel:+971523355535",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Address",
                  content: "info@newworldtransportationservices.com",
                  link: "mailto:info@newworldtransportationservices.com",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Business Hours",
                  content:
                    "Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: 9:00 AM - 5:00 PM",
                  link: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:bg-white/90 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 whitespace-pre-line"
                          target={
                            item.link.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <iframe
                width="100%"
                height="300"
                className="w-full"
                frameBorder={0}
                title="New World Group Location"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=Dubai+Land+Department,Baniyas+Rd,+near+Etisalat+Tower+1,+Deira,+Riggat+Al+Buteen,+Dubai,+UAE&ie=UTF8&t=&z=15&iwloc=B&output=embed"
                style={{ filter: "contrast(1.1) saturate(1.1)" }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl"
            variants={itemVariants}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form
              action="https://fabform.io/f/newworldgroup"
              method="post"
              className="space-y-6"
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 py-3 px-4 outline-none transition-all duration-200 ease-in-out"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 py-3 px-4 outline-none transition-all duration-200 ease-in-out"
                  placeholder="Enter your email address"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 py-3 px-4 outline-none transition-all duration-200 ease-in-out"
                  placeholder="+971 XX XXX XXXX"
                />
              </motion.div>

              {/* Service Interest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 py-3 px-4 outline-none transition-all duration-200 ease-in-out"
                >
                  <option value="">Select a service</option>
                  <option value="cargo-packaging">Cargo Packaging</option>
                  <option value="transportation">
                    Transportation Services
                  </option>
                  <option value="passenger-transport">
                    Passenger Transport
                  </option>
                  <option value="furniture-removal">Furniture Removal</option>
                  <option value="vehicle-recovery">Vehicle Recovery</option>
                  <option value="water-transportation">
                    Water Transportation
                  </option>
                  <option value="building-cleaning">Building Cleaning</option>
                  <option value="other">Other Services</option>
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 py-3 px-4 outline-none resize-none transition-all duration-200 ease-in-out"
                  placeholder="Tell us about your requirements..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              {/* Additional Contact Info */}
              <motion.div
                className="text-center pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <p className="text-sm text-gray-600 mb-2">
                  Need immediate assistance?
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <a
                    href="tel:+971523355535"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    📞 Call Now
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="https://wa.me/971523355535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

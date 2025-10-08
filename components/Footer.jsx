"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSmoothScrollContext } from "./SmoothScrollWrapper";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Building2,
  Truck,
  Package,
  Users,
  Droplets,
  Shield,
} from "lucide-react";

const Footer = () => {
  const { scrollToTop, smoothScrollTo } = useSmoothScrollContext();

  // Handle smooth scroll to sections
  const handleFooterScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      smoothScrollTo(target, 0.5); // Faster scroll duration
    }
  };

  const services = [
    { name: "Cargo Packaging", href: "#services" },
    { name: "Transportation", href: "#services" },
    { name: "Passenger Transport", href: "#services" },
    { name: "Furniture Removal", href: "#services" },
    { name: "Vehicle Recovery", href: "#services" },
    { name: "Water Transportation", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-section" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const groupCompanies = [
    "HELPING HANDS BUILDING CLEANING LLC",
    "AFRAH ALMOSTAQBAL PASSENGER TRANSPORT LLC",
    "NB WATER PURIFIER LLC",
    "AFRAH GENERAL LAND TRANSPORT LLC",
    "AL SAQAR AL SAREE DRAINING SERVICES LLC",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100088203145833&mibextid=ZbWKwL",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/",
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 350 C 300 450, 600 250, 1440 350 L 1440 800 L 0 800 Z"
            fill="#3B82F6"
            className="fill-blue-600/30"
          />
          <path
            d="M0 400 C 400 550, 800 300, 1440 450 L 1440 800 L 0 800 Z"
            fill="#06B6D4"
            className="fill-cyan-500/20"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-blue-400">NEW WORLD</span> GROUP
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4" />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                A powerful conglomerate driving innovation across logistics,
                construction, and trading, building a better tomorrow globally
                with 20+ years of trusted excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Office 102 bur dubaiLand Area, AlrafahUAE
                      <br />
                      Baniyas Rd - near Etisalat Tower 1<br />
                      Deira - Riggat Al Buteen - Dubai - UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <a
                      href="tel:+971523355535"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      +971 52 335 5535
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="tel:+971556832120"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      +971 55 683 2120
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:info@newworldgroup.ae"
                    className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    info@newworldgroup.ae
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      onClick={(e) => handleFooterScroll(e, service.href)}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterScroll(e, link.href)}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Business Hours */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Business Hours
                </h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p>Friday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Group Companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Group Companies
              </h4>
              <ul className="space-y-3 mb-8">
                {groupCompanies.map((company, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-xs leading-relaxed"
                  >
                    <span className="font-medium">{index + 1}.</span> {company}
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4">
                  Follow Us
                </h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      title={social.name}
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} New World Group. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Reliable, Affordable & the Best - Consistently good in
                performance, able to be trusted.
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

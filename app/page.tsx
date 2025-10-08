import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Main/Hero";
import Services from "@/components/Main/Services";
import Clients from "@/components/Main/Clients";
import AboutUsSection from "@/components/ui/about-us-section";
import Contact from "@/components/Main/Contact";
import Footer from "@/components/Footer";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <Header />
      <Hero />
      <Services />
      <Clients />
      <AboutUsSection />
      <Contact />
      <Footer />
    </SmoothScrollWrapper>
  );
}

"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Main/Hero";
import Services from "@/components/Main/Services";
import Clients from "@/components/Main/Clients";
import AboutUsSection from "@/components/ui/about-us-section";
import Contact from "@/components/Main/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };


  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <Services />
          <Clients />
          <AboutUsSection />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

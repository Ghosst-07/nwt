"use client";

import { createContext, useContext } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";

// Create context for smooth scroll functions
const SmoothScrollContext = createContext();

export const useSmoothScrollContext = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScrollContext must be used within SmoothScrollWrapper"
    );
  }
  return context;
};

export default function SmoothScrollWrapper({ children }) {
  const scrollFunctions = useSmoothScroll();

  return (
    <SmoothScrollContext.Provider value={scrollFunctions}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

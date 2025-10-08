"use client";
import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Complete loading after progress reaches 100
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-50 flex items-center justify-center">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Sophisticated logo area */}
        <div className="mb-12">
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>

            {/* Inner content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-lg font-bold tracking-wider">
                NWG
              </div>
            </div>
          </div>

          {/* Company name with elegant typography */}
          <h1 className="text-3xl font-light text-white mb-2 tracking-wider">
            NEW WORLD GROUP
          </h1>
          <p className="text-blue-200/80 text-sm font-medium tracking-widest uppercase">
            Premium Experience Loading
          </p>
        </div>

        {/* Minimal progress indicator */}
        <div className="w-64 mx-auto">
          <div className="h-px bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-xs mt-3 font-light">
            {progress < 100 ? "Preparing your experience..." : "Welcome"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

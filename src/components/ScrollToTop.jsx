import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop || window.scrollY;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Handle case where page is not scrollable (winHeightPx <= 0)
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0;
      
      setScrollProgress(Math.min(Math.max(scrolled, 0), 1)); // Clamp between 0 and 1
      setIsVisible(scrollPx > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Add resize listener in case document length changes
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG Circle properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[60]"
        >
          <button
            onClick={scrollToTop}
            className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-900 rounded-full shadow-[0_10px_40px_rgba(15,90,122,0.25)] dark:shadow-[0_10px_40px_rgba(15,90,122,0.1)] border border-brand-teal/10 transition-transform hover:scale-110 active:scale-95"
            aria-label="Scroll up"
          >
            {/* Background Track */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-100 dark:text-white/5"
              />
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                strokeWidth="3"
                className="stroke-brand-teal transition-all duration-150 ease-out"
              />
            </svg>

            {/* Pointer Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <ChevronUp 
                className="text-brand-teal transition-transform group-hover:-translate-y-1" 
                size={22} 
                strokeWidth={3}
              />
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-brand-teal rounded-full opacity-0 group-hover:opacity-5 blur-xl transition-opacity"></div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

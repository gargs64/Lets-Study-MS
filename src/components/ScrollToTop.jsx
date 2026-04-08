import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide button
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // Calculate progress
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 left-8 z-[60]" // Positioned to avoid overlapping with user's other buttons usually on right
        >
          <button
            onClick={scrollToTop}
            className="relative group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-[0_10px_40px_rgba(15,90,122,0.2)] border border-blue-50 transition-transform hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-blue-50"
              />
              <motion.circle
                cx="32"
                cy="32"
                r={radius}
                fill="none"
                stroke="#0F5A7A"
                strokeWidth="3"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              />
            </svg>

            {/* Pointer Icon */}
            <div className="relative z-10 flex flex-col items-center">
              <ChevronUp 
                className="text-[#0F5A7A] transition-transform group-hover:-translate-y-1" 
                size={24} 
                strokeWidth={3}
              />
              <span className="text-[10px] font-black text-[#0F5A7A]/40 uppercase tracking-tighter">Top</span>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-[#0F5A7A] rounded-full opacity-0 group-hover:opacity-5 blur-xl transition-opacity"></div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
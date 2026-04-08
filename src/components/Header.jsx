import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Users, Phone, Star, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      // Hero section is roughly 600-700px. Toggling contrast switch for all pages.
      setIsOverHero(scrollY < 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Study Material', path: '/login', icon: <BookOpen size={18} /> },
    { label: 'Courses', action: () => scrollToSection('courses'), icon: <Star size={18} /> },
    { label: 'Testimonials', action: () => scrollToSection('success-stories'), icon: <Users size={18} /> },
    { label: 'Team', action: () => scrollToSection('team'), icon: <Users size={18} /> },
    { label: 'Contact Us', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'w-[95%] max-w-6xl rounded-full py-2 px-6' 
            : 'w-[98%] md:w-[95%] max-w-6xl rounded-full py-2.5 px-8'
        } bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-white/10 gap-4 flex-nowrap`}
      >
        <Link to="/" className="flex-shrink-0 flex items-center group relative">
          <div className="absolute -inset-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg"
            alt="Let's Study"
            className={`transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'} w-auto relative z-10 rounded-xl`}
          />
        </Link>

        {/* Desktop Dynamic Island Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-2 justify-center">
          {navItems.map((item, index) => (
            item.path ? (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center flex-shrink-0 gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20'
                    : (theme === 'dark' || isOverHero)
                      ? 'text-white hover:text-blue-200 hover:bg-white/10'
                      : 'text-brand-teal hover:text-brand-teal/80 hover:bg-brand-teal/10'
                }`}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className="whitespace-nowrap font-black">{item.label}</span>
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.action}
                className={`flex items-center flex-shrink-0 gap-2 px-5 py-2.5 rounded-full font-black text-sm transition-all duration-300 ${
                  (theme === 'dark' || isOverHero)
                    ? 'text-white hover:text-blue-200 hover:bg-white/10'
                    : 'text-brand-teal hover:text-brand-teal/80 hover:bg-brand-teal/10'
                }`}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            )
          ))}
        </nav>

        {/* Action Controls (Mobile Menu + Theme) */}
        <div className="flex items-center gap-2 md:gap-4 relative z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 ${
              (theme === 'dark' || isOverHero)
                ? 'bg-white/10 text-white ring-1 ring-white/20'
                : 'bg-brand-teal/10 text-brand-teal ring-1 ring-brand-teal/20'
            }`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`rounded-xl transition-all duration-300 flex items-center justify-center group overflow-hidden ${
              isScrolled ? 'w-9 h-9' : 'w-10 h-10 md:w-11 md:h-11'
            } ${
              (theme === 'dark' || isOverHero)
                ? 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 shadow-lg shadow-white/5'
                : 'bg-brand-teal/10 text-brand-teal ring-1 ring-brand-teal/20 hover:bg-brand-teal/20 shadow-md shadow-brand-teal/5'
            }`}
            aria-label="Toggle Theme"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {theme === 'light' ? (
              <Moon size={isScrolled ? 18 : 22} className="relative z-10 transform group-hover:-rotate-12 transition-transform duration-300" />
            ) : (
              <Sun size={isScrolled ? 18 : 22} className="relative z-10 transform group-hover:rotate-45 transition-transform duration-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 mx-2 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-brand-teal/10 dark:border-white/10 shadow-2xl overflow-hidden p-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  item.path ? (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl text-brand-teal dark:text-blue-300 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border-b border-brand-teal/5 last:border-0"
                    >
                      <div className="text-brand-teal">{item.icon}</div>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      key={index}
                      onClick={item.action}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl text-brand-teal dark:text-blue-300 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border-b border-brand-teal/5 last:border-0 text-left"
                    >
                      <div className="text-brand-teal">{item.icon}</div>
                      <span>{item.label}</span>
                    </button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;

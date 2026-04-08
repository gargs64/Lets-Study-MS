import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Users, Phone, Star, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
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
        className={`pointer-events-auto relative flex flex-col items-center transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'w-auto max-w-[95%] rounded-[2rem] py-2 px-4' 
            : 'w-full max-w-6xl rounded-[2.5rem] py-3 px-6'
        } bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 overflow-hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center group relative">
            <div className="absolute -inset-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg"
              alt="Let's Study"
              className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto relative z-10 rounded-xl`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-[#0F5A7A] text-white shadow-lg'
                      : 'text-[#0F5A7A]/70 dark:text-blue-300/70 hover:text-[#0F5A7A] dark:hover:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  {isScrolled ? null : item.icon}
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-[#0F5A7A]/70 dark:text-blue-300/70 hover:text-[#0F5A7A] dark:hover:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  {isScrolled ? null : item.icon}
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button / Compact State */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0F5A7A] dark:text-blue-300 hover:scale-110 transition-transform active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-500' 
                  : 'bg-blue-50 dark:bg-blue-900/20 text-[#0F5A7A] dark:text-blue-300'
              } hover:scale-110 active:scale-95 md:hidden`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button
              onClick={() => navigate('/login')}
              className={`hidden md:flex items-center justify-center bg-[#0F5A7A] text-white rounded-full font-extrabold transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg shadow-[#0F5A7A]/20 ${
                isScrolled ? 'w-10 h-10' : 'px-8 py-3 text-sm'
              }`}
            >
              {isScrolled ? <Home size={18} /> : 'Portal'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Expansion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="w-full flex flex-col gap-1 overflow-hidden"
            >
              <div className="h-[1px] bg-[#0F5A7A]/10 dark:bg-white/10 w-full mb-4"></div>
              {navItems.map((item, index) => (
                item.path ? (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-4 px-6 text-[#0F5A7A] dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-2xl font-bold transition-all duration-200"
                  >
                    <div className="bg-blue-100/50 dark:bg-blue-800/30 p-2 rounded-xl text-[#0F5A7A] dark:text-blue-200">
                      {item.icon}
                    </div>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={item.action}
                    className="flex items-center gap-4 py-4 px-6 text-[#0F5A7A] dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-2xl font-bold transition-all duration-200"
                  >
                    <div className="bg-blue-100/50 dark:bg-blue-800/30 p-2 rounded-xl text-[#0F5A7A] dark:text-blue-200">
                      {item.icon}
                    </div>
                    {item.label}
                  </button>
                )
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
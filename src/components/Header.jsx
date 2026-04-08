import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // If not on Home page, navigate home with the hash
    if (window.location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      // If already on Home page, scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Study Material', path: '/login' },
    { label: 'Courses', action: () => scrollToSection('courses') },
    // CHANGED 'testimonials' to 'success-stories' to match Home.jsx
    { label: 'Testimonials', action: () => scrollToSection('success-stories') },
    { label: 'Team', action: () => scrollToSection('team') },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg"
              alt="Let's Study - School of Mathematics logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#0F5A7A] hover:text-[#0d4a63] font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-[#0F5A7A] hover:text-[#0d4a63] font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0F5A7A] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              {navItems.map((item, index) => (
                item.path ? (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-[#0F5A7A] hover:bg-gray-50 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left py-3 px-4 text-[#0F5A7A] hover:bg-gray-50 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
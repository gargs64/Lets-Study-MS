import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Send, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const courses = [
    { name: 'Foundation Batch', path: '/courses/foundation-batch' },
    { name: 'Semester Batch', path: '/courses/semester-batch' },
    { name: 'M.Sc Mathematics Entrances', path: '/courses/msc-mathematics' },
    { name: 'M.Tech/Data Science Entrances', path: '/courses/mtech-datascience' },
    { name: 'Engineering Mathematics', path: '/courses/engineering-mathematics' },
    { name: 'PhD Entrances', path: '/courses/phd-entrances' },
    { name: 'Advanced Courses', path: '/courses/advanced-courses' }
  ];

  return (
    <footer className="relative bg-[#091C25] dark:bg-[#020817] text-white pt-24 pb-12 overflow-hidden transition-colors duration-300">
      {/* Decorative Gradient Edge */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2FA4D9]/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[400px] bg-[#0F5A7A]/10 dark:bg-blue-500/5 blur-[120px] rounded-full -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20 text-center md:text-left">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-8 group">
              <div className="absolute -inset-2 bg-white/5 rounded-2xl blur-lg transition-all group-hover:bg-white/10"></div>
              <img
                src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg"
                alt="Let's Study"
                className="h-20 w-auto relative z-10 bg-white dark:bg-white/10 rounded-xl p-2 shadow-2xl transition-transform hover:scale-105 duration-500"
              />
            </div>
            <p className="text-blue-100/60 text-lg leading-relaxed mb-8 max-w-sm">
              Empowering the next generation of mathematical thinkers with rigor, clarity, and research-grade excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584835031140", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/ls2m_maths?utm_source=qr", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/let-s-study-school-of-mathematics-3443073a4/", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@letsstudysom", label: "YouTube" },
                { icon: Send, href: "https://t.me/LetsstudySOM", label: "Telegram", isTelegram: true }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100/70 hover:text-[#78E2FF] hover:border-[#78E2FF]/30 transition-all hover:bg-[#78E2FF]/5 shadow-sm group"
                >
                  <social.icon size={20} className={social.isTelegram ? "rotate-[-20deg]" : ""} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-[#2FA4D9] mr-4 hidden md:block"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Our Courses', id: 'courses' },
                { label: 'Success Stories', id: 'success-stories' },
                { label: 'Expert Team', id: 'team' }
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleScrollToSection(link.id)} 
                    className="text-blue-100/60 dark:text-slate-400 hover:text-white dark:hover:text-blue-200 transition-all text-base flex items-center group mx-auto md:mx-0"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2FA4D9]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-[#2FA4D9] mr-4 hidden md:block"></span>
              Academic Tracks
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {courses.map((course, i) => (
                <li key={i}>
                  <Link 
                    to={course.path} 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-blue-100/50 dark:text-slate-500 hover:text-[#78E2FF] transition-all text-sm block hover:translate-x-1 duration-300"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-[#2FA4D9] mr-4 hidden md:block"></span>
              Get in Touch
            </h3>
            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=118/105,+Near+Maya+Apartment,+Rabindrapally,+Khardaha,+Kolkata+700117" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start justify-center md:justify-start space-x-4 text-blue-100/60 group hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2FA4D9]/10 transition-all">
                  <MapPin size={20} className="text-[#2FA4D9]" />
                </div>
                <div className="text-sm">
                  118/105, Near Maya Apartment,<br />
                  Rabindrapally, Khardaha,<br />
                  Kolkata – 700 117
                </div>
              </a>

              <div className="flex items-start justify-center md:justify-start space-x-4 text-blue-100/60 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2FA4D9]/10 transition-all">
                  <Phone size={20} className="text-[#2FA4D9]" />
                </div>
                <div className="flex flex-col text-sm">
                  <a href="tel:+918481819726" className="hover:text-white transition-colors">+91 8481819726</a>
                  <a href="tel:+918777484102" className="hover:text-white transition-colors">+91 8777484102</a>
                </div>
              </div>

              <a 
                href="mailto:letsstudy2022bu@gmail.com" 
                className="flex items-center justify-center md:justify-start space-x-4 text-blue-100/60 group hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2FA4D9]/10 transition-all">
                  <Mail size={20} className="text-[#2FA4D9]" />
                </div>
                <span className="text-sm truncate">letsstudy2022bu@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center md:flex md:justify-between md:items-center">
          <p className="text-blue-100/30 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Let's Study. All scholarly rights reserved.
          </p>
          <div className="flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-blue-100/20">
            <span className="hover:text-blue-100/40 cursor-default">Transparency</span>
            <span className="hover:text-blue-100/40 cursor-default">Academic Integrity</span>
            <span className="hover:text-blue-100/40 cursor-default">Mentorship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Send, Mail, Phone, MapPin } from 'lucide-react';

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
    <footer className="bg-[#0F5A7A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <img
              src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg"
              alt="Logo"
              className="h-20 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-gray-200 text-sm mb-4">
              Empowering students with excellence in mathematics education through expert guidance.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61584835031140" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/ls2m_maths?utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>

              {/* LinkedIn */}
							<a href="https://www.linkedin.com/in/let-s-study-school-of-mathematics-3443073a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@letsstudysom" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Youtube size={20} />
              </a>

              {/* Telegram (Using Send icon with a slight tilt) */}
              <a
                href="https://t.me/LetsstudySOM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Send size={20} className="rotate-[-20deg]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xl font-bold mb-4 block border-b border-white/20 pb-2 w-fit">Quick Links</span>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleScrollToSection('courses')} className="text-gray-300 hover:text-white transition-all text-sm text-left">
                  Our Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('success-stories')} className="text-gray-300 hover:text-white transition-all text-sm text-left">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('team')} className="text-gray-300 hover:text-white transition-all text-sm text-left">
                  Expert Team
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <span className="text-xl font-bold mb-4 block border-b border-white/20 pb-2 w-fit">Programs</span>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link to={course.path} onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-all text-sm block">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xl font-bold mb-4 block border-b border-white/20 pb-2 w-fit">Contact Us</span>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-200">
                <MapPin size={18} />
                <p>Kolkata, West Bengal, India</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <Phone size={18} />
                <div>
                  <p>+91 8481819726</p>
                  <p>+91 8777415940</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <Mail size={18} />
                <p>letsstudy2022bu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-xs italic">
            © {new Date().getFullYear()} Let's Study MS - School of Mathematics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
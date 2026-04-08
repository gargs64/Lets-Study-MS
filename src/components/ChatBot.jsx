import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Search,
  Bot,
  ChevronRight,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SEARCH_ITEMS = [
  { title: 'Foundation Batch', path: '/courses/foundation-batch', type: 'Course' },
  { title: 'Semester Batch', path: '/courses/semester-batch', type: 'Course' },
  { title: 'M.Sc Mathematics Entrances', path: '/courses/msc-mathematics', type: 'Entrance' },
  { title: 'M.Tech/Data Science', path: '/courses/mtech-datascience', type: 'Entrance' },
  { title: 'Engineering Mathematics', path: '/courses/engineering-mathematics', type: 'Course' },
  { title: 'PhD Entrances', path: '/courses/phd-entrances', type: 'Entrance' },
  { title: 'Advanced Courses', path: '/courses/advanced-courses', type: 'Specialized' },
  { title: 'Contact Support', path: '/contact', type: 'Page' },
  { title: 'Student Testimonials', path: '/testimonials', type: 'Page' },
  { title: 'Login Portal', path: '/login', type: 'Portal' },
  { title: 'Direct Coaching', path: '/contact', type: 'Service' },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 I\'m your Let\'s Study assistant. How can I help you today?' }
  ]);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  // Close chat when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const filteredItems = searchQuery
    ? SEARCH_ITEMS.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: searchQuery }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "I'm a simplified search assistant. Please use the search results above or contact us directly via WhatsApp for specific queries!"
      }]);
    }, 1000);

    setSearchQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-[#0F5A7A] p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Student Assistant</h3>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 min-h-[300px]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex mb-4 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                      ? 'bg-[#0F5A7A] text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Search Interface inside Chat */}
              <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm mb-4">
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Search Results */}
                {searchQuery && (
                  <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg group transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div>
                            <p className="text-sm font-medium text-[#0F5A7A]">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.type}</p>
                          </div>
                          <ChevronRight size={14} className="text-gray-400 group-hover:text-[#0F5A7A]" />
                        </Link>
                      ))
                    ) : (
                      <p className="text-xs text-center text-gray-500 py-2">No courses found matching "{searchQuery}"</p>
                    )}
                  </div>
                )}

                {/* Quick Links (Show only when no search) */}
                {!searchQuery && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Popular Links</p>
                    <div className="flex flex-wrap gap-2">
                      <Link to="/courses/foundation-batch" className="text-xs bg-blue-50 text-[#0F5A7A] px-2 py-1 rounded-md hover:bg-blue-100 transition-colors">
                        Foundation
                      </Link>
                      <Link to="/courses/msc-mathematics" className="text-xs bg-blue-50 text-[#0F5A7A] px-2 py-1 rounded-md hover:bg-blue-100 transition-colors">
                        M.Sc Entrances
                      </Link>
                      <Link to="/contact" className="text-xs bg-blue-50 text-[#0F5A7A] px-2 py-1 rounded-md hover:bg-blue-100 transition-colors">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm bg-gray-50 border-0 rounded-full px-4 focus:ring-1 focus:ring-[#0F5A7A]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                disabled={!searchQuery}
                className="bg-[#0F5A7A] text-white p-2 rounded-full hover:bg-[#0d4a63] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons Container - CHANGED TO VERTICAL (flex-col) */}
      <div className="flex flex-col items-end gap-4">

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918481819726"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20ba5a] transition-colors relative group"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
          <WhatsAppIcon size={24} className="text-white" />
        </motion.a>

        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative group p-3.5 rounded-full shadow-lg flex items-center justify-center transition-all ${isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-[#0F5A7A] text-white'
            }`}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isOpen ? 'Close Chat' : 'Student Assistant'}
          </span>

          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </motion.button>
      </div>
    </div>
  );
};

export default ChatBot;
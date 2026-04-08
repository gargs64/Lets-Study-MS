import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Let's Study</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Return to Let's Study homepage." />
      </Helmet>

      <div className="min-h-screen mesh-bg noise-overlay flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg"
          >
            <div className="text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-teal to-[#2FA4D9] select-none">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-10 font-light leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center bg-brand-teal text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Home size={20} className="mr-2" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center bg-white dark:bg-slate-800 text-brand-teal dark:text-blue-400 font-bold px-8 py-4 rounded-full shadow-md ring-1 ring-brand-teal/10 dark:ring-white/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ChatBot from '@/components/ChatBot';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Testimonials from '@/pages/Testimonials';
import ContactUs from '@/pages/ContactUs';
import FoundationBatch from '@/pages/courses/FoundationBatch';
import SemesterBatch from '@/pages/courses/SemesterBatch';
import MScMathematics from '@/pages/courses/MScMathematics';
import MTechDataScience from '@/pages/courses/MTechDataScience';
import EngineeringMathematics from '@/pages/courses/EngineeringMathematics';
import PhDEntrances from '@/pages/courses/PhDEntrances';
import AdvancedCourses from '@/pages/courses/AdvancedCourses';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white noise-bg overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/courses/foundation-batch" element={<FoundationBatch />} />
            <Route path="/courses/semester-batch" element={<SemesterBatch />} />
            <Route path="/courses/msc-mathematics" element={<MScMathematics />} />
            <Route path="/courses/mtech-datascience" element={<MTechDataScience />} />
            <Route path="/courses/engineering-mathematics" element={<EngineeringMathematics />} />
            <Route path="/courses/phd-entrances" element={<PhDEntrances />} />
            <Route path="/courses/advanced-courses" element={<AdvancedCourses />} />
          </Routes>
        </AnimatePresence>
        <ChatBot />
        <Toaster />
      </div>
    </Router>
  );
}


export default App;

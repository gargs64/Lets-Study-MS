import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ChatBot from '@/components/ChatBot';
import ScrollToTop from '@/components/ScrollToTop';
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
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen">
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <ChatBot />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Clock, Users, CheckCircle, ArrowRight,
  ChevronDown, BookOpen, Library
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Curriculum Data
const CURRICULA = {
  ju: {
    name: "Jadavpur University",
    description: "Comprehensive semester preparation aligned with Jadavpur University's rigorous curriculum.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Real Analysis", "Geometry", "Linear algebra"]
    }, {
      id: 2,
      title: "Semester 2",
      topics: ["Algebra", "Theory of real functions", "Riemann integration and series of functions"]
    }, {
      id: 3,
      title: "Semester 3",
      topics: ["Ring Theory", "Ordinary differential Equations", "Numerical Analysis"]
    }, {
      id: 4,
      title: "Semester 4",
      topics: ["Metric spaces and Differential geometry", "Linear Algebra", "Partial differential equations", "Multivariable calculus"]
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Topology", "Group Theory", "Linear optimization and Game Theory", "Probability and Markov Chain"]
    }, {
      id: 6,
      title: "Semester 6",
      topics: ["Complex Analysis", "Integral equation, Integral transform, Calculus of variation", "Measure Theory", "Field theory and canonical form of matrics "]
    }, {
      id: 7,
      title: "Semester 7",
      topics: ["General Mechanics", "Functional analysis"]
    }]
  },
  cu: {
    name: "Calcutta University",
    description: "Targeted preparation for Calcutta University's CBCS syllabus, focusing on high-scoring areas.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Calculus", "Geometry", "Vector Analysis"]
    }, {
      id: 2,
      title: "Semester 2",
      topics: ["Basic Algebra"]
    }, {
      id: 3,
      title: "Semester 3",
      topics: ["Real Analysis", "Ordinary Differential Equations I and Group Theory I", "Linear Programming and Rectangular Games"]
    }, {
      id: 4,
      title: "Semester 4",
      topics: ["Theory of Real Functions", "Mechanics I", "Multivariable Calculus I and Partial Differential Equations I", "Group Theory II and Ring Theory I"]
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Probability and Statistics", "Ring Theory II and Linear Algebra I", "Riemann Integration and Series of functions", "Mechanics II"]
    }, {
      id: 6,
      title: "Semester 6",
      topics: ["Metric Spaces + Complex Analysis I", "Numerical Analysis", "Multivariable Calculus II and Application of Calculus"]
    }]
  },
  sxu: {
    name: "St. Xavier's College",
    description: "Specialized coaching for St. Xavier's autonomous curriculum with emphasis on conceptual clarity.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Differential Equation I", "Algebra I"]
    }, {
      id: 2,
      title: "Semester 2",
      topics: ["Analysis I", "Vector Algebra and Geometry"]
    }, {
      id: 3,
      title: "Semester 3",
      topics: ["Algebra II", "Analysis II"]
    }, {
      id: 4,
      title: "Semester 4",
      topics: ["Algebra III", "Analysis III"]
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Probability theory", "Metric Spaces", "Numerical Analysis", "Analysis IV"]
    }, {
      id: 6,
      title: "Semester 6",
      topics: ["Algebra IV", "Analysis V", "Differential Equation II", "Mechanics I"]
    }]
  },
  pu: {
    name: "Presidency University",
    description: "Research-oriented approach aligning with Presidency University's advanced mathematics syllabus.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Geometry and Introduction to Real numbers", "Algebra", "Differential Calculus"]
    }, {
      id: 2,
      title: "Semester 2",
      topics: ["Real Analysis I", "Group Theory I", "Ring Theory I"]
    }, {
      id: 3,
      title: "Semester 3",
      topics: ["Linear Algebra", "Real Analysis II + ODE"]
    }, {
      id: 4,
      title: "Semester 4",
      topics: ["Numerical Methods", "Sequence and series of functions + Metric space"]
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Multivariable Calculus", "Group Theory II", "Probability theory"]
    }, {
      id: 6,
      title: "Semester 6",
      topics: ["Complex Analysis", "PDE", "Optimization Techniques", "Mathematical Methods + Graph Theory"]
    }, {
      id: 7,
      title: "Semester 7",
      topics: ["Topology", "Advance ODE"]
    }, {
      id: 8,
      title: "Semester 8",
      topics: ["Differential Geometry", "Classical Mechanics"]
    }]
  }
};

const SemesterBatch = () => {
  const [selectedTrack, setSelectedTrack] = useState('ju');

  const features = [
    'Targeted preparation for semester examinations',
    'Syllabus-focused teaching methodology',
    'Previous year question paper analysis',
    'Weekly mock tests and assessments',
    'Personalized attention for weak areas',
    'Comprehensive notes and study materials'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Semester Batch | Mathematics Exam Coaching for West Bengal University Students | Let's Study MS</title>
        <meta name="description" content="Semester Batch at Let's Study MS — specialized maths coaching for West Bengal university students. Targeted preparation for Jadavpur, Calcutta, St. Xavier's and Presidency University semester examinations by expert faculty." />
        <meta name="keywords" content="semester maths coaching west bengal, university mathematics tutor kolkata, jadavpur university semester coaching, calcutta university maths preparation" />
        <link rel="canonical" href="https://letsstudyms.com/courses/semester-batch" />
        <meta property="og:title" content="Semester Batch | University Exam Coaching West Bengal | Let's Study MS" />
        <meta property="og:description" content="Semester exam coaching for Jadavpur, Calcutta, St. Xavier's and Presidency University students. Targeted preparation by expert faculty." />
        <meta property="og:url" content="https://letsstudyms.com/courses/semester-batch" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <GraduationCap size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">Semester Batch</h1>
              <p className="text-xl">Excel in your semester exams with targeted preparation</p>
            </motion.div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold text-[#0F5A7A] mb-6">Course Overview</h2>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  Our Semester Batch is specially designed for college students who want to score high in their
                  semester examinations. We provide focused preparation that aligns perfectly with your university syllabus.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  With regular practice sessions, mock tests, and expert guidance, we ensure that you're fully
                  prepared to tackle your semester exams with confidence and achieve excellent results.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="College students preparing for semester exams" src="https://i.postimg.cc/rpb1yX5v/pexels_karola_g_6256066.jpg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">University Curriculum Explorer</h2>
              <p className="text-gray-600 text-lg mb-8">Select your university to view the detailed semester-wise breakdown</p>

              {/* Dropdown Selector */}
              <div className="relative max-w-md mx-auto z-10">
                <div className="relative">
                  <select
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-4 px-6 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                  >
                    <option value="ju">Jadavpur University</option>
                    <option value="cu">Calcutta University</option>
                    <option value="sxu">St. Xavier's College</option>
                    <option value="pu">Presidency University</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                    <ChevronDown size={24} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Curriculum Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-12">
                  <h3 className="text-3xl font-bold text-[#0F5A7A] mb-2 flex items-center">
                    <Library className="mr-3" /> {CURRICULA[selectedTrack].name}
                  </h3>
                  <p className="text-gray-600 text-lg italic">{CURRICULA[selectedTrack].description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CURRICULA[selectedTrack].semesters.map((sem, index) => (
                    <motion.div
                      key={sem.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                    >
                      <div className="bg-[#0F5A7A] text-white p-4 flex justify-between items-center">
                        <h4 className="font-bold text-lg">{sem.title}</h4>
                        <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">Semester {sem.id}</span>
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <h5 className="text-[#0F5A7A] font-semibold flex items-center mb-3">
                            <BookOpen size={16} className="mr-2" /> Topics Covered
                          </h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-1">
                            {sem.topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">What You'll Get</h2>
              <p className="text-gray-600 text-lg">Everything you need to ace your semester exams</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63]">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Excel in Your Exams?</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our Semester Batch and achieve the grades you deserve with expert guidance and structured preparation.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-[#0F5A7A] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-colors duration-200">
                  Enroll Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SemesterBatch;
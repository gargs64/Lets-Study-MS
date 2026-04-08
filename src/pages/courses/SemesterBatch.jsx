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
        <title>Semester Batch | Mathematics Exam Coaching for West Bengal University Students | Let's Study</title>
        <meta name="description" content="Semester Batch at Let's Study — specialized maths coaching for West Bengal university students. Targeted preparation for Jadavpur, Calcutta, St. Xavier's and Presidency University semester examinations by expert faculty." />
        <meta name="keywords" content="semester maths coaching west bengal, university mathematics tutor kolkata, jadavpur university semester coaching, calcutta university maths preparation" />
        <link rel="canonical" href="https://letsstudyms.com/courses/semester-batch" />
        <meta property="og:title" content="Semester Batch | University Exam Coaching West Bengal | Let's Study" />
        <meta property="og:description" content="Semester exam coaching for Jadavpur, Calcutta, St. Xavier's and Presidency University students. Targeted preparation by expert faculty." />
        <meta property="og:url" content="https://letsstudyms.com/courses/semester-batch" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Mini-Hero Banner */}
        <div className="relative bg-[#091C25] py-24 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5A7A] via-[#103D51] to-[#091C25] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4D9] rounded-full blur-[120px] opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 dark:bg-white/5 w-20 h-20 rounded-2xl backdrop-blur-md flex items-center justify-center mx-auto mb-6 ring-1 ring-white/20 shadow-2xl">
                <GraduationCap size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Semester Batch
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Unlock university excellence with our targeted, semester-aligned mathematical preparation.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-8 tracking-tight">Course Overview</h2>
                <div className="space-y-6 text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p className="text-justify hyphens-auto">
                    Our Semester Batch is specially designed for college students who want to score high in their
                    semester examinations. We provide focused preparation that aligns perfectly with your university syllabus.
                  </p>
                  <p className="text-justify hyphens-auto">
                    With regular practice sessions, mock tests, and expert guidance, we ensure that you're fully
                    prepared to tackle your semester exams with confidence and achieve excellent results.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5A7A] to-[#2FA4D9] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://i.postimg.cc/rpb1yX5v/pexels_karola_g_6256066.jpg"
                  alt="Semester Batch Preparation"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50/50 dark:bg-[#020817]/50 text-center transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-6 tracking-tight">University Track Selection</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Tailor your preparation by choosing your university track for specific syllabus alignment.
              </p>

              {/* Selector */}
              <div className="flex justify-center mt-12">
                <div className="relative group min-w-[300px]">
                  <label className="block text-xs font-bold text-[#0F5A7A]/50 uppercase tracking-widest mb-2 ml-1 text-left">Academic Track</label>
                  <div className="relative">
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-[#0F5A7A]/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-[#0F5A7A]/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      <option value="ju">Jadavpur University</option>
                      <option value="cu">Calcutta University</option>
                      <option value="sxu">St. Xavier's College</option>
                      <option value="pu">Presidency University</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
              >
                {/* Track Details Card */}
                <div className="bg-[#0F5A7A] rounded-[2.5rem] p-10 mb-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 ring-1 ring-white/20">
                      Active Curriculum
                    </div>
                    <h3 className="text-4xl font-black mb-2 tracking-tight">
                      {CURRICULA[selectedTrack].name}
                    </h3>
                    <p className="text-blue-100/80 dark:text-blue-200/80 font-light text-xl italic leading-relaxed max-w-xl">{CURRICULA[selectedTrack].description}</p>
                  </div>
                  <div className="relative z-10 text-center md:text-right">
                    <span className="text-blue-200 text-xs font-bold tracking-widest uppercase opacity-70">Enrolling for</span>
                    <div className="text-5xl font-black mt-1">2026-27</div>
                  </div>
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
                          <h5 className="text-[#0F5A7A] font-semibold flex items-center mb-4">
                            <BookOpen size={18} className="mr-2" /> Curriculum Details
                          </h5>
                          <div className="space-y-3 cursor-default">
                            {sem.topics.map((topic, i) => (
                              <details key={i} className="group bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 overflow-hidden open:shadow-sm transition-all duration-300">
                                <summary className="flex items-center justify-between p-3.5 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                  <div className="flex items-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#0F5A7A] dark:bg-blue-400 mr-3"></div>
                                    <span className="text-[#0F5A7A] dark:text-blue-300 text-sm font-medium">{topic}</span>
                                  </div>
                                  <ChevronDown size={14} className="transition-transform duration-300 group-open:rotate-180 text-[#0F5A7A] dark:text-blue-400" />
                                </summary>
                                <div className="px-8 pb-4 pt-2 text-xs text-gray-600 dark:text-slate-400 bg-white dark:bg-slate-800 border-t border-gray-50 dark:border-white/5 leading-relaxed">
                                  Detailed study of <span className="font-semibold">{topic}</span> including fundamental theorems, practical applications, and intensive problem-solving sessions designed for university excellence.
                                </div>
                              </details>
                            ))}
                          </div>
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
        <section className="py-16 bg-white dark:bg-[#020817] transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] dark:text-blue-400 mb-4">What You'll Get</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg">Everything you need to ace your semester exams</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white dark:bg-slate-900/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <CheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 dark:text-slate-200">{feature}</span>
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
                <Button className="group bg-white text-[#0F5A7A] hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1">
                  Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
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
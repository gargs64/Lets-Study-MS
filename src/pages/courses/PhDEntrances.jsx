import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, Clock, Users, CheckCircle, ArrowRight,
  ChevronDown, BookOpen, Library, GraduationCap,
  Sparkles, Rocket, Book, Award, Layers, ScrollText,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CURRICULA = {
  rank_booster: {
    name: "Rank Booster Batch for NET & GATE",
    description: "An intensive program focused on mastering core subjects for high-rank performance in NET and GATE examinations.",
    icon: Rocket,
    subOptions: [
      {
        id: "rb_module_1",
        name: "Module 1: Real Analysis & Topology",
        description: "Fundamental analysis and spatial structures.",
        topics: ["Real Analysis", "Metric Space", "General Topology"],
        refs: ["Standard Reference Textbooks", "Rudin", "Munkres", "Kumaresan"]
      },
      {
        id: "rb_module_2",
        name: "Module 2: Algebra",
        description: "Core algebraic structures and linear systems.",
        topics: ["Linear Algebra", "Group Theory", "Ring Theory"],
        refs: ["Standard Reference Textbooks", "Hoffman-Kunze", "Hungerford", "Artin"]
      },
      {
        id: "rb_module_3",
        name: "Module 3: Complex Analysis",
        description: "Study of functions of complex variables.",
        topics: ["Complex Analysis"],
        refs: ["Standard Reference Textbooks", "Rudin", "Conway", "Stein-Shakarchi"]
      },
      {
        id: "rb_module_4",
        name: "Module 4: Applied Mathematics",
        description: "Differential equations and numerical methods.",
        topics: [
          "ODE - PDE",
          "Multivariate Calculus",
          "Calculus Of Variations",
          "Integral Equation",
          "Numerical Analysis",
          "Linear Programming"
        ],
        refs: ["Standard Reference Textbooks"]
      }
    ]
  },
  pioneer: {
    name: "Pioneer Batch for PhD",
    description: "Advanced research-oriented batch with a focus on classical texts and rigorous conceptual depth for PhD interviews.",
    icon: Sparkles,
    subOptions: [
      {
        id: "p_module_1",
        name: "Module 1: Analysis & Topology",
        description: "Rigorous foundations in analysis.",
        topics: ["Real Analysis", "Functions of Several Variables", "Metric Space", "General Topology"],
        refs: ["Rudin (Analysis)", "Munkres (Topology)", "Munkres (Analysis on Manifolds)"]
      },
      {
        id: "p_module_2",
        name: "Module 2: Advanced Algebra",
        description: "Deep dive into linear and abstract structures.",
        topics: ["Linear Algebra", "Group Theory", "Ring Theory", "Module Theory"],
        refs: ["Hoffmann Kunze", "Hungerford", "Artin"]
      },
      {
        id: "p_module_3",
        name: "Module 3: Differential Equations",
        description: "Analytical study of ODEs and PDEs.",
        topics: ["Differential Equations"],
        refs: ["S.L. Ross", "Coddington-Levinson"]
      },
      {
        id: "p_module_4",
        name: "Module 4: Complex Analysis",
        description: "Higher level complex function theory.",
        topics: ["Complex Analysis"],
        refs: ["Conway", "Rudin", "Stein-Shakachi"]
      },
      {
        id: "p_module_5",
        name: "Module 5: Modern Mathematics",
        description: "Research level topics and field theories.",
        topics: ["Measure Theory", "Functional Analysis", "Field Extension and Galois Theory"],
        refs: ["Hungerford (Galois Theory)", "Folland", "IK Rana", "Rudin"]
      }
    ]
  }
};

const PhDEntrances = () => {
  const [selectedBatch, setSelectedBatch] = useState('rank_booster');
  const [selectedModule, setSelectedModule] = useState(CURRICULA.rank_booster.subOptions[0].id);

  const handleBatchChange = (e) => {
    const newVal = e.target.value;
    setSelectedBatch(newVal);
    setSelectedModule(CURRICULA[newVal].subOptions[0].id);
  };

  const targetExams = [
    'CSIR NET Mathematics (JRF)',
    'GATE Mathematics',
    'NBHM PhD Entrance',
    'TIFR GS Mathematics',
    'ISI JRF Selection',
    'CMI PhD Entrance'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const currentBatchData = CURRICULA[selectedBatch];
  const currentModuleData = currentBatchData.subOptions.find(o => o.id === selectedModule);

  return (
    <>
      <Helmet>
        <title>PhD Mathematics Entrance Coaching West Bengal | TIFR IIT IISc HRI | Let's Study</title>
        <meta name="description" content="PhD Mathematics entrance coaching at one of West Bengal's top mathematical institutes for higher education. Prepare for TIFR, IIT, IISc, HRI and international PhD programs. Faculty who have cracked TIFR Mumbai, IIT Madras, IIT Bombay and University of Tokyo PhD programmes." />
        <meta name="keywords" content="phd mathematics coaching west bengal, TIFR coaching kolkata, CSIR NET mathematics coaching, GATE mathematics west bengal, doctoral entrance preparation india" />
        <link rel="canonical" href="https://letsstudyms.com/courses/phd-entrances" />
        <meta property="og:title" content="PhD Mathematics Entrance Coaching | TIFR IIT IISc HRI | Let's Study" />
        <meta property="og:description" content="PhD Mathematics entrance coaching. Prepare for TIFR, IIT, IISc, HRI and international PhD programs with expert faculty." />
        <meta property="og:url" content="https://letsstudyms.com/courses/phd-entrances" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhD Mathematics Entrance Coaching | TIFR IIT IISc HRI" />
        <meta name="twitter:description" content="PhD Mathematics entrance coaching. Prepare for TIFR, IIT, IISc, HRI and international PhD programs." />
        <meta name="twitter:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen mesh-bg noise-overlay">
        <Header />
        <main>

        {/* Mini-Hero Banner */}
        <div className="relative bg-[#091C25] pt-32 pb-24 md:pt-40 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-[#103D51] to-[#091C25] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4D9] rounded-full blur-[120px] opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 dark:bg-white/5 w-20 h-20 rounded-2xl backdrop-blur-md flex items-center justify-center mx-auto mb-6 ring-1 ring-white/20 shadow-2xl">
                <Target size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                PhD Entrances
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Master advanced mathematics with our specialized NET, GATE, and Doctoral research modules.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-8 tracking-tight text-left">Course Overview</h2>
                <div className="space-y-6 text-justify text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p>
                    Our PhD Entrance preparation programs are tailored for aspiring researchers.
                    Whether you need a high rank in competitive exams like NET & GATE via our Rank Booster batch
                    or deep conceptual mastery with our Pioneer batch, we provide the rigorous training required.
                  </p>
                  <p>
                    We focus on developing a research-oriented mindset, where candidates learn not just to solve problems, 
                    but to understand the underlying mathematical structures. This dual approach is essential for both 
                    cracking top-tier exams and succeeding in rigorous doctoral interviews.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="sticky top-24 lg:ml-8 hidden lg:block">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-[#2FA4D9] rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img
                    className="w-full h-[500px] rounded-[2rem] shadow-2xl object-cover relative z-10 ring-1 ring-black/5 dark:ring-white/10"
                    alt="Research Environment"
                    src="https://i.postimg.cc/kMk7Qjvc/pexels_mart_production_8472919.jpg"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* ===== HORIZONTALLY DISTRIBUTED CONTENT ===== */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-16 space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:ring-white/5 border-l-8 border-brand-teal dark:border-blue-500 transition-all duration-300">
                  <h3 className="text-2xl font-black text-brand-teal dark:text-blue-400 mb-6 flex items-center">
                    <Layers className="mr-3 text-[#2FA4D9]" size={24} /> PURE PORTION DEEP-DIVE
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "Metric Spaces & Topology", classes: "30+ classes" },
                      { name: "Functional Analysis", classes: "25+ classes" },
                      { name: "Complex Analysis", classes: "25+ classes" },
                      { name: "Rings & Modules", classes: "30 classes" },
                      { name: "Multivariable Calculus", classes: "10 classes" },
                      { name: "Field & Galois Theory", classes: "20 classes" },
                      { name: "Group Theory", classes: "30 classes" },
                      { name: "Linear Algebra", classes: "40 classes" },
                      { name: "Real Analysis", classes: "40 classes" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-white/5 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all group ring-1 ring-transparent hover:ring-brand-teal/10 dark:hover:ring-blue-500/20">
                        <span className="text-sm font-bold text-gray-700 dark:text-slate-300 group-hover:text-brand-teal dark:group-hover:text-blue-400 transition-colors">{item.name}</span>
                        <span className="text-[10px] font-black uppercase text-brand-teal/40 dark:text-blue-400/40 bg-brand-teal/5 dark:bg-blue-400/5 px-2 py-1 rounded-md transition-colors">{item.classes}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:ring-white/5 border-l-8 border-brand-teal dark:border-blue-500 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-2xl font-black text-brand-teal dark:text-blue-400 mb-6 flex items-center">
                    <Rocket className="mr-3 text-[#2FA4D9]" size={24} /> APPLIED PORTION FOCUS
                  </h3>
                  <div className="grid grid-cols-1 gap-4 flex-1">
                    {[
                      { name: "ODE & PDE", classes: "30 classes" },
                      { name: "Calculus of Variations", classes: "5 classes" },
                      { name: "Numerical Analysis", classes: "6 classes" },
                      { name: "Integral Equations", classes: "3 classes" },
                      { name: "LPP", classes: "3 classes" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-white/5 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all group ring-1 ring-transparent hover:ring-brand-teal/10 dark:hover:ring-blue-500/20">
                        <span className="text-base font-bold text-gray-700 dark:text-slate-300 group-hover:text-brand-teal dark:group-hover:text-blue-400 transition-colors">{item.name}</span>
                        <span className="text-xs font-black uppercase text-brand-teal/40 dark:text-blue-400/40 bg-brand-teal/5 dark:bg-blue-400/5 px-3 py-1.5 rounded-md mb-0 transition-colors">{item.classes}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-[2rem] text-brand-teal dark:text-blue-100 flex flex-col md:flex-row items-center justify-between shadow-xl ring-1 ring-brand-teal/20 dark:ring-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-[#2FA4D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center relative z-10 mb-6 md:mb-0">
                  <div className="bg-gradient-to-br from-brand-teal to-[#1a6e94] p-4 rounded-2xl mr-6 shadow-lg shadow-brand-teal/20">
                    <Award className="text-white" size={40} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal/60 dark:text-blue-400/60 mb-1">Expert Excellence</p>
                    <p className="text-2xl font-black tracking-tight">Dedicated Research Mentorship</p>
                    <p className="text-sm font-medium opacity-70">270+ Targeted Classes & Weekly Mock Assessments</p>
                  </div>
                </div>
                <div className="hidden lg:block h-16 w-px bg-brand-teal/10 dark:bg-white/10 mx-8 relative z-10"></div>
                <div className="relative z-10 text-center md:text-right">
                  <p className="text-lg font-black text-brand-teal dark:text-blue-300">Interview Success Focus</p>
                  <p className="text-xs font-medium opacity-60">Complete Support for Doctoral Defense</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-teal dark:text-blue-400 mb-4 tracking-tight">Curriculum Explorer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                <div className="relative text-left flex-1">
                  <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1">Select Program</label>
                  <div className="relative">
                    <select value={selectedBatch} onChange={handleBatchChange} className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer outline-none">
                      <option value="rank_booster">Rank Booster Batch (NET & GATE)</option>
                      <option value="pioneer">Pioneer Batch (PhD Research)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-teal dark:text-blue-400"><ChevronDown size={20} /></div>
                  </div>
                </div>
                <div className="relative text-left flex-1">
                  <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1">Select Module</label>
                  <div className="relative">
                    <select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)} className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer outline-none">
                      {currentBatchData.subOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-teal dark:text-blue-400"><ChevronDown size={20} /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={`${selectedBatch}-${selectedModule}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl shadow-xl border-t-8 border-brand-teal dark:border-blue-500 mb-8 transition-colors">
                  <div className="flex items-center mb-4 text-left">
                    <div className="bg-brand-teal/10 dark:bg-white/5 p-3 rounded-full mr-4"><currentBatchData.icon className="text-brand-teal dark:text-blue-400" size={32} /></div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold text-brand-teal dark:text-blue-300">{currentBatchData.name}</h3>
                      <span className="inline-block bg-brand-teal dark:bg-blue-600 text-white text-xs px-2 py-1 rounded mt-1">{currentModuleData.name}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-lg italic border-l-4 border-brand-teal dark:border-blue-500 pl-4 text-left">{currentBatchData.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden text-left transition-colors">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                      <h4 className="text-xl font-bold text-brand-teal dark:text-blue-400 flex items-center">
                        <BookOpen size={24} className="mr-3" /> Syllabus Topics
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4 cursor-default">
                        {currentModuleData.topics.map((topic, idx) => (
                          <details key={idx} className="group bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden open:shadow-md transition-all duration-300">
                            <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                              <div className="flex items-center">
                                <CheckCircle size={20} className="text-brand-teal dark:text-blue-400 mr-4 flex-shrink-0" />
                                <span className="text-brand-teal dark:text-blue-300 text-lg tracking-wide">{topic}</span>
                              </div>
                              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-teal dark:text-blue-400 flex-shrink-0 ml-4">
                                <ChevronDown size={20} />
                              </span>
                            </summary>
                            <div className="px-14 pb-5 pt-3 text-sm text-gray-600 dark:text-slate-400 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-white/5 leading-relaxed">
                                Our comprehensive modules cover essential theoretical frameworks, diverse problem-solving methodologies, and extensive previous year derivations for <span className="font-semibold tracking-wide text-gray-800 dark:text-slate-200">{topic}</span> to ensure research excellence.
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden text-left transition-colors">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                      <h4 className="text-xl font-bold text-brand-teal dark:text-blue-400 flex items-center">
                        <Library size={24} className="mr-3" /> References
                      </h4>
                    </div>
                    <div className="p-6">
                      {currentModuleData.refs.map((ref, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 mb-3 hover:bg-white dark:hover:bg-slate-800 transition-colors group">
                          <Book size={18} className="text-brand-teal dark:text-blue-400 mr-3 opacity-50 group-hover:opacity-100" />
                          <span className="text-gray-700 dark:text-slate-300 font-medium">{ref}</span>
                        </div>
                      ))}
                      <div className="mt-6 p-4 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200/50 dark:border-yellow-900/30 text-sm text-yellow-800 dark:text-yellow-200 transition-colors">
                        <p className="font-bold flex items-center mb-1"><GraduationCap size={16} className="mr-2" /> Research Note:</p>
                        "Focus on these specific authors to build the depth required for PhD interviews."
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-20 bg-transparent transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-12 tracking-tight">Target Examinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {targetExams.map((exam, index) => (
                <div key={index} className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-8 border-brand-teal dark:border-blue-500 text-left font-bold text-gray-800 dark:text-slate-200 hover:shadow-xl hover:shadow-brand-teal/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
                  <span className="group-hover:text-brand-teal dark:group-hover:text-blue-400 transition-colors font-black tracking-tight text-lg">{exam}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-brand-teal to-[#0d4a63] text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Research Career</h2>
          <Link to="/contact">
            <Button className="group bg-white text-brand-teal hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1">
              Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </Button>
          </Link>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default PhDEntrances;

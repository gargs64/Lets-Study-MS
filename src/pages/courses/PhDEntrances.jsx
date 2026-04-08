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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#020817] dark:to-[#0A1A23]">
        <Header />

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
                <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-8 tracking-tight text-left">Course Overview</h2>
                <p className="text-justify text-gray-700 dark:text-slate-300 text-lg mb-12 leading-relaxed">
                  Our PhD Entrance preparation programs are tailored for aspiring researchers.
                  Whether you need a high rank in competitive exams like NET & GATE via our Rank Booster batch
                  or deep conceptual mastery with our Pioneer batch, we provide the rigorous training required.
                </p>

                {/* ===== PREMIUM ADDITIONAL NOTE ===== */}
                <div className="space-y-8">
                  <div className="bg-white dark:bg-slate-900/60 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#0F5A7A]/10 dark:ring-white/5 border-l-8 border-[#0F5A7A] dark:border-blue-500 transition-colors">
                    <h3 className="text-2xl font-black text-[#0F5A7A] dark:text-blue-400 mb-6 flex items-center">
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
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-white/5 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all group">
                          <span className="text-sm font-bold text-gray-700 dark:text-slate-300 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400">{item.name}</span>
                          <span className="text-[10px] font-black uppercase text-[#0F5A7A]/40 dark:text-blue-400/40 bg-[#0F5A7A]/5 dark:bg-blue-400/5 px-2 py-1 rounded-md">{item.classes}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900/60 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#0F5A7A]/10 dark:ring-white/5 border-l-8 border-[#2FA4D9] dark:border-blue-400 transition-colors">
                    <h3 className="text-2xl font-black text-[#0F5A7A] dark:text-blue-400 mb-6 flex items-center">
                      <Rocket className="mr-3 text-[#2FA4D9]" size={24} /> APPLIED PORTION FOCUS
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { name: "ODE & PDE", classes: "30 classes" },
                        { name: "Calculus of Variations", classes: "5 classes" },
                        { name: "Numerical Analysis", classes: "6 classes" },
                        { name: "Integral Equations", classes: "3 classes" },
                        { name: "LPP", classes: "3 classes" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-white/5 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all group">
                          <span className="text-sm font-bold text-gray-700 dark:text-slate-300 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400">{item.name}</span>
                          <span className="text-[10px] font-black uppercase text-[#2FA4D9]/60 dark:text-blue-400/60 bg-[#2FA4D9]/5 dark:bg-blue-400/5 px-2 py-1 rounded-md mb-0">{item.classes}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0F5A7A] to-[#1a6e94] p-6 rounded-[2rem] text-white flex items-center justify-between shadow-xl">
                    <div className="flex items-center">
                      <Award className="mr-4 text-blue-200" size={32} />
                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">Program Achievement</p>
                        <p className="text-xl font-black">270+ Recorded Classes</p>
                      </div>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-white/20 mx-6"></div>
                    <p className="hidden md:block text-sm font-medium text-blue-100">Including Mock Tests & <br />Interview Prep</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="sticky top-24 lg:ml-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5A7A] to-[#2FA4D9] rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img
                    className="w-full h-[700px] rounded-[2rem] shadow-2xl object-cover relative z-10"
                    alt="Research"
                    src="https://i.postimg.cc/kMk7Qjvc/pexels_mart_production_8472919.jpg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] dark:text-blue-400 mb-4 tracking-tight">Curriculum Explorer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                <div className="relative text-left">
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-2">Select Program</label>
                  <div className="relative">
                    <select value={selectedBatch} onChange={handleBatchChange} className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3 px-6 rounded-xl shadow-md cursor-pointer outline-none focus:ring-4 focus:ring-blue-500/10">
                      <option value="rank_booster">Rank Booster Batch (NET & GATE)</option>
                      <option value="pioneer">Pioneer Batch (PhD Research)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0F5A7A] dark:text-blue-400"><ChevronDown size={24} /></div>
                  </div>
                </div>
                <div className="relative text-left">
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-2">Select Module</label>
                  <div className="relative">
                    <select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)} className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3 px-6 rounded-xl shadow-md cursor-pointer outline-none focus:ring-4 focus:ring-blue-500/10">
                      {currentBatchData.subOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0F5A7A] dark:text-blue-400"><ChevronDown size={24} /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={`${selectedBatch}-${selectedModule}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] dark:border-blue-500 mb-8 transition-colors">
                  <div className="flex items-center mb-4 text-left">
                    <div className="bg-[#0F5A7A]/10 dark:bg-white/5 p-3 rounded-full mr-4"><currentBatchData.icon className="text-[#0F5A7A] dark:text-blue-400" size={32} /></div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold text-[#0F5A7A] dark:text-blue-300">{currentBatchData.name}</h3>
                      <span className="inline-block bg-[#0F5A7A] dark:bg-blue-600 text-white text-xs px-2 py-1 rounded mt-1">{currentModuleData.name}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-lg italic border-l-4 border-[#0F5A7A] dark:border-blue-500 pl-4 text-left">{currentBatchData.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden text-left transition-colors">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                      <h4 className="text-xl font-bold text-[#0F5A7A] dark:text-blue-400 flex items-center">
                        <BookOpen size={24} className="mr-3" /> Syllabus Topics
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4 cursor-default">
                        {currentModuleData.topics.map((topic, idx) => (
                          <details key={idx} className="group bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden open:shadow-md transition-all duration-300">
                            <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                              <div className="flex items-center">
                                <CheckCircle size={20} className="text-[#0F5A7A] dark:text-blue-400 mr-4 flex-shrink-0" />
                                <span className="text-[#0F5A7A] dark:text-blue-300 text-lg tracking-wide">{topic}</span>
                              </div>
                              <span className="transition-transform duration-300 group-open:rotate-180 text-[#0F5A7A] dark:text-blue-400 flex-shrink-0 ml-4">
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
                      <h4 className="text-xl font-bold text-[#0F5A7A] dark:text-blue-400 flex items-center">
                        <Library size={24} className="mr-3" /> References
                      </h4>
                    </div>
                    <div className="p-6">
                      {currentModuleData.refs.map((ref, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 mb-3">
                          <Book size={18} className="text-[#0F5A7A] mr-3" />
                          <span className="text-gray-800 font-medium">{ref}</span>
                        </div>
                      ))}
                      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800">
                        <p className="font-bold flex items-center"><GraduationCap size={16} className="mr-2" /> Note:</p>
                        "Focus on these specific authors to build the depth required for PhD interviews."
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-[#020817]/30 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-12 tracking-tight">Target Examinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {targetExams.map((exam, index) => (
                <div key={index} className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl shadow-sm border-l-8 border-[#0F5A7A] dark:border-blue-500 text-left font-bold text-gray-800 dark:text-slate-200 hover:shadow-md transition-all group">
                  <span className="group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400 transition-colors font-black tracking-tight">{exam}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Research Career</h2>
          <Link to="/contact">
            <Button className="group bg-white text-[#0F5A7A] hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1">
              Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </Button>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PhDEntrances;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, Clock, Users, CheckCircle, ArrowRight,
  ChevronDown, BookOpen, Library, GraduationCap,
  Sparkles, Rocket, Book
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
        <title>PhD Mathematics Entrance Coaching West Bengal | TIFR IIT IISc HRI | Let's Study MS</title>
        <meta name="description" content="PhD Mathematics entrance coaching at one of West Bengal's top mathematical institutes for higher education. Prepare for TIFR, IIT, IISc, HRI and international PhD programs. Faculty who have cracked TIFR Mumbai, IIT Madras, IIT Bombay and University of Tokyo PhD programmes." />
        <meta name="keywords" content="phd mathematics coaching west bengal, TIFR coaching kolkata, CSIR NET mathematics coaching, GATE mathematics west bengal, doctoral entrance preparation india" />
        <link rel="canonical" href="https://letsstudyms.com/courses/phd-entrances" />
        <meta property="og:title" content="PhD Mathematics Entrance Coaching | TIFR IIT IISc HRI | Let's Study MS" />
        <meta property="og:description" content="PhD Mathematics entrance coaching. Prepare for TIFR, IIT, IISc, HRI and international PhD programs with expert faculty." />
        <meta property="og:url" content="https://letsstudyms.com/courses/phd-entrances" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        <section className="bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Trophy size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">PhD Entrances</h1>
              <p className="text-xl">Advanced preparation for doctoral program admissions</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold text-[#0F5A7A] mb-6 text-left">Course Overview</h2>
                <p className="text-justify text-gray-700 text-lg mb-6">
                  Our PhD Entrance preparation programs are tailored for aspiring researchers.
                  Whether you need a high rank in competitive exams like NET & GATE via our Rank Booster batch
                  or deep conceptual mastery with our Pioneer batch, we provide the rigorous training required.
                </p>

                {/* ===== ADDITIONAL NOTE ===== */}
                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0F5A7A] rounded-xl text-left">
                  <h3 className="text-2xl font-bold text-[#0F5A7A] mb-4">Additional Note</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">PURE PORTION</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Aim:</strong> CSIR-NET · GATE · TIFR · NBHM · ISI · PhD Interviews
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Metric Spaces & Topology — 30+ classes</li>
                      <li>Functional Analysis — 25+ classes</li>
                      <li>Complex Analysis — 25+ classes</li>
                      <li>Rings & Modules — 30 classes</li>
                      <li>Multivariable Calculus — 10 classes</li>
                      <li>Field Extension & Galois Theory — 20 classes</li>
                      <li>Group Theory — 30 classes</li>
                      <li>Linear Algebra — 40 classes</li>
                      <li>Real Analysis — 40 classes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">APPLIED PORTION</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Aim:</strong> CSIR-NET & GATE (Applied Focus)
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Calculus of Variations — 5 classes</li>
                      <li>Numerical Analysis — 6 classes</li>
                      <li>Integral Equations — 3 classes</li>
                      <li>Linear Programming Problems (LPP) — 3 classes</li>
                      <li>ODE & PDE — 30 classes</li>
                    </ul>
                  </div>

                  <p className="mt-4 font-semibold text-gray-800">
                    Total 270+ Classes, Mock Tests and PhD Interviews
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="sticky top-24">
                <img
                  className="w-full h-[600px] rounded-xl shadow-2xl object-cover"
                  alt="Research"
                  src="https://i.postimg.cc/kMk7Qjvc/pexels_mart_production_8472919.jpg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">Curriculum Explorer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                <div className="relative text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Program</label>
                  <div className="relative">
                    <select value={selectedBatch} onChange={handleBatchChange} className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold py-3 px-6 rounded-xl shadow-md cursor-pointer">
                      <option value="rank_booster">Rank Booster Batch (NET & GATE)</option>
                      <option value="pioneer">Pioneer Batch (PhD Research)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0F5A7A]"><ChevronDown size={24} /></div>
                  </div>
                </div>
                <div className="relative text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Module</label>
                  <div className="relative">
                    <select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)} className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold py-3 px-6 rounded-xl shadow-md cursor-pointer">
                      {currentBatchData.subOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0F5A7A]"><ChevronDown size={24} /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={`${selectedBatch}-${selectedModule}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0F5A7A]/10 p-3 rounded-full mr-4"><currentBatchData.icon className="text-[#0F5A7A]" size={32} /></div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold text-[#0F5A7A]">{currentBatchData.name}</h3>
                      <span className="inline-block bg-[#0F5A7A] text-white text-xs px-2 py-1 rounded mt-1">{currentModuleData.name}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg italic border-l-4 pl-4 text-left">{currentBatchData.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-left">
                    <div className="bg-gray-50 p-6 border-b"><h4 className="text-xl font-bold text-[#0F5A7A] flex items-center"><BookOpen size={24} className="mr-3" /> Syllabus Topics</h4></div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {currentModuleData.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle size={18} className="text-[#0F5A7A] mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-left">
                    <div className="bg-gray-50 p-6 border-b"><h4 className="text-xl font-bold text-[#0F5A7A] flex items-center"><Library size={24} className="mr-3" /> References</h4></div>
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#0F5A7A] mb-12">Target Examinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {targetExams.map((exam, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4 border-[#0F5A7A] text-left font-medium">{exam}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Research Career</h2>
          <Link to="/contact">
            <Button className="bg-white text-[#0F5A7A] px-8 py-6 text-lg rounded-lg hover:bg-gray-100 transition-colors">
              Enroll Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PhDEntrances;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Clock, Users, CheckCircle, ArrowRight,
  ChevronDown, BookOpen, Book, ScrollText, Library,
  Layers, Calendar, ChevronRight, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// CURRICULUM DATA STRUCTURE BASED ON YOUR SPECIFIC SYLLABUS
const CURRICULA = {
  jam: {
    name: "IIT-JAM",
    universities: {
      ju: {
        name: "Jadavpur University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter", title: "Winter", topics: ["Real Analysis I - Sequences and Series of Real Numbers"] },
              { id: "sem4", title: "4th Semester", topics: ["Ordinary Differential Equation- Differential Equations", "Linear Algebra - Basic algebra"] },
              { id: "summer", title: "Summer", topics: ["Integral Analysis - Integral Calculus", "Real Analysis II - Functions of One Real Variable"] },
              { id: "sem5", title: "5th Semester", topics: ["Multivariable Calculus - Functions of Two or Three Real Variables", "Group Theory"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      },
      cu: {
        name: "Calcutta University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "sem3", title: "Semester 3", topics: ["Real Analysis I", "Ordinary Differential Equations I", "Group Theory I"] },
              { id: "sem4", title: "Semester 4", topics: ["Real Analysis II", "Multivariable Calculus I", "Group Theory I"] },
              { id: "sem5", title: "Semester 5", topics: ["Linear Algebra I", "Real Analysis III and Series of functions"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      },
      sxu: {
        name: "St. Xavier's College",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter_4", title: "Winter + Sem 4", topics: ["Real Analysis", "Group Theory: Revision", "Ring Theory", "ODE", "Numerical Analysis"] },
              { id: "summer", title: "Summer Break", topics: ["Real Analysis: Sequence and Series", "Group Theory: Problems & Revision", "Linear Algebra", "PYQs"] },
              { id: "sem5", title: "5th Semester", topics: ["Linear algebra problems", "Multivariable Calculus", "Metric Spaces (Generalising Real Analysis)", "Differential Geometry"] },
              { id: "winter_rev", title: "Winter Break", topics: ["Revision", "Applied Mathematics", "January: Mock Tests"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "winter_6", title: "Winter + Sem 6", topics: ["Vector Calculus", "ODE & PDE", "Linear Algebra"] },
              { id: "summer_7", title: "Summer + Sem 7", topics: ["Real Analysis (JAM Syllabus)", "Group Theory (JAM Syllabus)", "Ring Theory (JAM 2027 update check)"] },
              { id: "final", title: "Winter Break", topics: ["Final Revisions", "Mock Test Series"] }
            ]
          }
        }
      },
      pu: {
        name: "Presidency University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter", title: "Winter", topics: ["Differential Equations"] },
              { id: "sem4", title: "4th Semester", topics: ["Real Analysis I - Sequences and Series", "Linear Algebra - Basic algebra"] },
              { id: "summer", title: "Summer", topics: ["Integral Calculus", "Real Analysis II - Functions of One Real Variable"] },
              { id: "sem5", title: "5th Semester", topics: ["Multivariable Calculus", "Group Theory"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      },
      common: {
        name: "Common Track",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "sem3", title: "Semester 3", topics: ["Real Analysis I", "Ordinary Differential Equations I", "Group Theory I"] },
              { id: "sem4", title: "Semester 4", topics: ["Real Analysis II", "Multivariable Calculus I", "Group Theory I"] },
              { id: "sem5", title: "Semester 5", topics: ["Linear Algebra I", "Real Analysis III and Series of functions"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      }
    }
  },
  tifr: {
    name: "M.Math / TIFR",
    universities: {
      ju: {
        name: "Jadavpur University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter", title: "Winter", topics: ["Real Analysis I - Sequences and Series"] },
              { id: "sem4", title: "4th Semester", topics: ["Ordinary Differential Equation", "Linear Algebra - Basic algebra"] },
              { id: "summer", title: "Summer Break", topics: ["Integral Analysis - Integral Calculus", "Real Analysis II"] },
              { id: "sem5", title: "5th Semester", topics: ["Multivariable Calculus", "Group Theory"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      },
      cu: {
        name: "Calcutta University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "sem3", title: "Semester 3", topics: ["Real Analysis I", "Ordinary Differential Equations I ", "Group Theory I"] },
              { id: "sem4", title: "Semester 4", topics: ["Real Analysis II ", "Multivariable Calculus I", "Group Theory II", "Ring Theory I"] },
              { id: "sem5", title: "Semester 5", topics: ["Linear Algebra I", "Real Analysis III", "Series of Functions", "Ring Theory II"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["TBA"] },
              { id: "sem7", title: "Semester 7", topics: ["TBA"] }
            ]
          }
        }
      },
      sxu: {
        name: "St. Xavier's College",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter_4", title: "Winter + Sem 4", topics: ["Real Analysis", "Group Theory (Revision)", "Ring Theory", "ODE", "Numerical Analysis"] },
              { id: "summer", title: "Summer Break", topics: ["Real Analysis: Sequence & Series", "Group Theory Problems", "Linear Algebra", "PYQs"] },
              { id: "sem5", title: "5th Semester", topics: ["Linear algebra problems", "Multivariable Calculus", "Metric Spaces", "Differential Geometry"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year & Advance",
            sections: [
              { id: "winter_6", title: "Winter + Sem 6", topics: ["Vector Calculus", "ODE PDE", "Linear Algebra"] },
              { id: "summer_7", title: "Summer + Sem 7", topics: ["JAM Level Real Analysis", "JAM Level Group Theory", "Ring Theory"] },
              { id: "mmath", title: "M.Math/ IISER Special", topics: ["Ring Theory (Advanced)", "Metric Spaces", "Group actions & Sylow Theorems"] }
            ]
          }
        }
      },
      pu: {
        name: "Presidency University",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "winter", title: "Winter Break", topics: ["Differential Equations"] },
              { id: "sem4", title: "4th Semester", topics: ["Real Analysis I", "Linear Algebra"] },
              { id: "summer", title: "Summer Break", topics: ["Integral Calculus", "Real Analysis II"] },
              { id: "sem5", title: "5th Semester", topics: ["Multivariable Calculus", "Group Theory"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      },
      common: {
        name: "Common Track",
        years: {
          year2: {
            title: "Undergrad 2nd Year",
            sections: [
              { id: "sem3", title: "Semester 3", topics: ["Real Analysis I", "ODE I", "Group Theory I"] },
              { id: "sem4", title: "Semester 4", topics: ["Real Analysis II", "Multivariable Calculus I", "Group Theory II", "Ring Theory I"] },
              { id: "sem5", title: "Semester 5", topics: ["Linear Algebra I", "Real Analysis III", "Ring Theory II"] }
            ]
          },
          year3: {
            title: "Undergrad 3rd Year",
            sections: [
              { id: "sem6", title: "Semester 6", topics: ["To be announced"] },
              { id: "sem7", title: "Semester 7", topics: ["To be announced"] }
            ]
          }
        }
      }
    }
  }
};

const MScMathematics = () => {
  const [selectedComponent, setSelectedComponent] = useState('jam');
  const [selectedUni, setSelectedUni] = useState('common');

  const features = [
    'IIT JAM comprehensive preparation',
    'University-specific entrance exam coaching',
    'Advanced problem-solving techniques',
    'Regular full-length mock tests',
    'Previous year paper analysis (10+ years)',
    'M.Sc / Integrated PhD Interview preparation and guidance'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const currentData = CURRICULA[selectedComponent].universities[selectedUni];

  return (
    <>
      <Helmet>
        <title>MSc Mathematics Entrance Coaching West Bengal | IIT JAM, TIFR, ISI, NBHM | Let's Study</title>
        <meta name="description" content="Top MSc Mathematics entrance coaching at one of West Bengal's leading mathematical institutes for higher education. Prepare for IIT JAM, TIFR, ISI MMath, NBHM and CMI with expert faculty from IIT Kanpur and ISI Kolkata. Students have secured JAM AIR 37, CSIR NET AIR 6 and joined IITs, TIFR, HRI and international universities." />
        <meta name="keywords" content="MSc mathematics coaching west bengal, IIT JAM coaching kolkata, TIFR preparation west bengal, ISI MMath coaching, NBHM coaching india, msc entrance mathematics india" />
        <link rel="canonical" href="https://letsstudyms.com/courses/msc-mathematics" />
        <meta property="og:title" content="MSc Mathematics Entrance Coaching | IIT JAM, TIFR, ISI | Let's Study West Bengal" />
        <meta property="og:description" content="Top MSc Mathematics entrance coaching in West Bengal. Prepare for IIT JAM, TIFR, ISI MMath, NBHM and CMI with expert faculty from IIT and ISI." />
        <meta property="og:url" content="https://letsstudyms.com/courses/msc-mathematics" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSc Mathematics Entrance Coaching | IIT JAM, TIFR, ISI" />
        <meta name="twitter:description" content="Top MSc Mathematics entrance coaching in West Bengal with expert faculty." />
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
                <Brain size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                M.Sc Mathematics Entrances
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Master entrance exams for India's top mathematics programs with our elite preparation modules.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold text-brand-teal dark:text-blue-400 mb-6">Course Overview</h2>
                <p className="text-justify hyphens-auto text-gray-700 dark:text-slate-300 text-lg mb-6">
                  Our M.Sc Mathematics Entrance preparation program is designed to help you crack the most competitive
                  entrance exams in India. We provide comprehensive coverage of all topics with special emphasis on
                  problem-solving skills and exam strategies.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 dark:text-slate-300 text-lg mb-6">
                  With our proven track record and expert faculty who are alumni of premier institutions, we ensure
                  that you're fully prepared to secure admission in top universities and research institutes.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="Students preparing for M.Sc Mathematics entrance exams" src="https://i.postimg.cc/rmDD3mmr/pexels_ian_panelo_3729557.jpg" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-transparent transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-6 tracking-tight">Integrated Curriculum</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Explore specialized tracks tailored for premier institutions like IITs, ISI, and CMI.
              </p>

              {/* Selectors */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <div className="relative group">
                  <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1 text-left">Specialization</label>
                  <div className="relative">
                    <select
                      value={selectedComponent}
                      onChange={(e) => setSelectedComponent(e.target.value)}
                      className="appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      <option value="jam">IIT JAM / GATE</option>
                      <option value="tifr">TIFR / NBHM</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1 text-left">University Track</label>
                  <div className="relative">
                    <select
                      value={selectedUni}
                      onChange={(e) => setSelectedUni(e.target.value)}
                      className="appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      <option value="common">Common Track</option>
                      <option value="ju">Jadavpur University</option>
                      <option value="cu">Calcutta University</option>
                      <option value="sxu">St. Xavier's College</option>
                      <option value="pu">Presidency University</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedComponent}-${selectedUni}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
              >
                {/* Track Details Card */}
                <div className="bg-brand-teal rounded-[2.5rem] p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden group gap-8">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left flex-1">
                    <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 ring-1 ring-white/20">
                      Active Curriculum
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
                      {selectedUni === 'common' ? 'Common Track' : 
                       selectedUni === 'ju' ? 'Jadavpur University' : 
                       selectedUni === 'cu' ? 'Calcutta University' : 
                       selectedUni === 'sxu' ? "St. Xavier's College" : 
                       'Presidency University'}
                    </h3>
                    <p className="text-blue-100/80 dark:text-blue-200/80 font-light text-lg md:text-xl italic max-w-2xl">{CURRICULA[selectedComponent].name} Track</p>
                  </div>
                  <div className="relative z-10 text-center md:text-right flex-shrink-0">
                    <span className="text-blue-200 text-xs font-bold tracking-widest uppercase opacity-70">Enrolling for</span>
                    <div className="text-4xl md:text-5xl font-black mt-1 whitespace-nowrap">2025-26</div>
                  </div>
                </div>

                {/* Render Years */}
                {Object.keys(currentData.years).map((yearKey) => (
                  <div key={yearKey} className="mb-20">
                    <div className="flex items-center mb-10 ml-2">
                      <div className="bg-brand-teal/10 dark:bg-white/5 p-4 rounded-2xl mr-5 ring-1 ring-brand-teal/20 dark:ring-white/10">
                        {yearKey === 'year2' ? <Layers size={32} className="text-brand-teal dark:text-blue-400" /> : <GraduationCap size={32} className="text-brand-teal dark:text-blue-400" />}
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-gray-800 dark:text-slate-100 tracking-tight">{currentData.years[yearKey].title}</h3>
                        <div className="h-1 w-12 bg-brand-teal mt-2 rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {currentData.years[yearKey].sections.map((section, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900/60 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:ring-white/[0.05] overflow-hidden hover:shadow-2xl hover:shadow-brand-teal/10 dark:hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group/item-card">
                          <div className="bg-gray-50/50 dark:bg-white/5 p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between group-hover/item-card:bg-brand-teal/5 dark:group-hover/item-card:bg-brand-teal/10 transition-colors">
                            <h4 className="font-extrabold text-brand-teal dark:text-blue-400 flex items-center text-xs tracking-[0.1em] uppercase">
                              <Calendar size={16} className="mr-2" /> {section.title}
                            </h4>
                          </div>
                          <div className="p-8">
                            <ul className="space-y-5">
                              {section.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="text-sm font-medium text-gray-600 dark:text-slate-400 flex items-start group/topic">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal/20 dark:bg-blue-400/20 mt-1.5 mr-3 group-hover/topic:bg-brand-teal dark:group-hover/topic:bg-blue-400 group-hover/topic:scale-150 transition-all duration-300"></div> 
                                  <span className="group-hover/topic:text-brand-teal dark:group-hover/topic:text-blue-300 transition-colors leading-relaxed">
                                    {topic}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-transparent dark:bg-[#020817] transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-4 tracking-tight">What You'll Get</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg font-light tracking-wide">Complete preparation package for entrance exam success</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-5 bg-gray-50/50 dark:bg-slate-900/50 p-6 rounded-[2rem] ring-1 ring-gray-100 dark:ring-white/5 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 group"
                >
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                    <CheckCircle className="text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <span className="text-gray-800 dark:text-slate-200 font-semibold tracking-tight">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-teal to-[#0d4a63]">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey to Top Institutions</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our M.Sc Mathematics entrance preparation program and take the first step towards your dream university.
              </p>
              <Link to="/contact">
                <Button className="group bg-white text-brand-teal hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1">
                  Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default MScMathematics;

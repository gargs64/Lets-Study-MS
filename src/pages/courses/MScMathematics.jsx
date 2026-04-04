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
        <title>MSc Mathematics Entrance Coaching West Bengal | IIT JAM, TIFR, ISI, NBHM | Let's Study MS</title>
        <meta name="description" content="Top MSc Mathematics entrance coaching at one of West Bengal's leading mathematical institutes for higher education. Prepare for IIT JAM, TIFR, ISI MMath, NBHM and CMI with expert faculty from IIT Kanpur and ISI Kolkata. Students have secured JAM AIR 37, CSIR NET AIR 6 and joined IITs, TIFR, HRI and international universities." />
        <meta name="keywords" content="MSc mathematics coaching west bengal, IIT JAM coaching kolkata, TIFR preparation west bengal, ISI MMath coaching, NBHM coaching india, msc entrance mathematics india" />
        <link rel="canonical" href="https://letsstudyms.com/courses/msc-mathematics" />
        <meta property="og:title" content="MSc Mathematics Entrance Coaching | IIT JAM, TIFR, ISI | Let's Study MS West Bengal" />
        <meta property="og:url" content="https://letsstudyms.com/courses/msc-mathematics" />
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
              <Brain size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">M.Sc Mathematics Entrances</h1>
              <p className="text-xl">Master entrance exams for top mathematics programs</p>
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
                  Our M.Sc Mathematics Entrance preparation program is designed to help you crack the most competitive
                  entrance exams in India. We provide comprehensive coverage of all topics with special emphasis on
                  problem-solving skills and exam strategies.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  With our proven track record and expert faculty who are alumni of premier institutions, we ensure
                  that you're fully prepared to secure admission in top universities and research institutes.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="Students preparing for M.Sc Mathematics entrance exams" src="https://i.postimg.cc/rmDD3mmr/pexels_ian_panelo_3729557.jpg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">Entrance Preparation Roadmap</h2>
              <p className="text-gray-600 text-lg mb-8">Select your target exam component and university to view the detailed timeline</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {/* Component Selector */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Exam</label>
                  <div className="relative">
                    <select
                      value={selectedComponent}
                      onChange={(e) => setSelectedComponent(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                    >
                      <option value="jam">IIT-JAM</option>
                      <option value="tifr">M.Math / TIFR</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                      <ChevronDown size={24} />
                    </div>
                  </div>
                </div>

                {/* University Selector */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select University</label>
                  <div className="relative">
                    <select
                      value={selectedUni}
                      onChange={(e) => setSelectedUni(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                    >
                      <option value="common">Common Track</option>
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
              </div>
            </motion.div>

            {/* Curriculum Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedComponent}-${selectedUni}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-8">
                  <h3 className="text-2xl font-bold text-[#0F5A7A] flex items-center">
                    <Library className="mr-3" /> {CURRICULA[selectedComponent].name} <ChevronRight className="mx-2 text-gray-400" size={20} /> {currentData.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    * Syllabus updated for 2026-2027 academic session.
                  </p>
                </div>

                {/* Render Years */}
                {Object.keys(currentData.years).map((yearKey) => (
                  <div key={yearKey} className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#0F5A7A] text-white p-3 rounded-lg mr-4">
                        {yearKey === 'year2' ? <Layers size={24} /> : <GraduationCap size={24} />}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{currentData.years[yearKey].title}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {currentData.years[yearKey].sections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="bg-gray-50 p-3 border-b border-gray-100">
                            <h4 className="font-bold text-[#0F5A7A] flex items-center">
                              <Calendar size={16} className="mr-2" /> {section.title}
                            </h4>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2">
                              {section.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="text-sm text-gray-600 flex items-start">
                                  <span className="mr-2 text-[#0F5A7A]">•</span> {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {selectedComponent === 'tifr' && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                    <p className="text-blue-800 text-sm italic">
                      Note: For M.Math and IISER entrance preparation, we additionally cover Ring Theory, Metric Spaces, and Group Actions (Sylow's Theorems).
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">What You'll Get</h2>
              <p className="text-gray-600 text-lg">Complete preparation package for entrance exam success</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey to Top Institutions</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our M.Sc Mathematics entrance preparation program and take the first step towards your dream university.
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

export default MScMathematics;
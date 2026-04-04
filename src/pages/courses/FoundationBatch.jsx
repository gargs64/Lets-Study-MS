import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, CheckCircle, ArrowRight, ChevronDown, Book, ScrollText, Library, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Curriculum Data
const CURRICULA = {
  common: {
    name: "Common Track",
    description: "A unified rigorous curriculum designed to overlap with major competitive exams (IIT JAM, NBHM, TIFR) while building a solid undergraduate foundation.",
    specialNote: "We aim to complete the full curriculum of ISI B.Math course in your 4 year BS so that you don't face any difficulties while Pursuing your M.Sc no matter where it is from. The course pace will be according to your conveniences. Don't worry if you think the pace is too fast or slow.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Real Analysis 0", "Abstract Algebra 0"],
      refs: ["Bartle & Sherbert", "Artin", "Hungerford"],
      pyqs: "Standard University PYQs (2018-2023)"
    }, {
      id: 2,
      title: "Winter Break + Semester 2",
      topics: ["Real Analysis I", "Group I", "Rings I (Introduction)"],
      refs: ["Rudin", "Bartle–Sherbert", "Artin", "Hungerford"],
      pyqs: "ISI, CMI, TIFR, NBHM, JAM"
    }, {
      id: 3,
      title: "Summer Break + Semester 3",
      topics: ["Real Analysis II", "Rings I (continued)", "Linear Algebra I"],
      refs: ["Hoffman–Kunze", "Rudin", "Hungerford"],
      pyqs: "ISI, CMI, TIFR, NBHM, JAM"
    }, {
      id: 4,
      title: "Winter Break + Semester 4",
      topics: ["Real Analysis III", "Metric Spaces + Basic Topology", "Linear Algebra II"],
      refs: ["Hoffman–Kunze", "Rudin"],
      pyqs: "Standard Semester 4 Papers"
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Multivariate Calculus", "Rings and Modules II", "Topology (Basic)", "Quotient Topology"],
      refs: ["Spivak", "Munkres", "Armstrong", "Hungerford",],
      pyqs: "Previous 5 Years Honors Papers"
    }, {
      id: 6,
      title: "Winter Break + Semester 6",
      topics: ["Complex Analysis I", "Linear Algebra III", "Field Theory (Introduction)"],
      refs: ["Rudin", "Hoffman–Kunze", "Conway", "Hungerford", "Ridl"],
      pyqs: "All exams"
    }, {
      id: 7,
      title: "Summer Break + Semester 7",
      topics: ["Measure Theory", "Functional Analysis (Introduction)", "Complex Analysis II"],
      refs: ["Royden - Real Analysis", "Rudin", "IK Rana", "Halmos", "Folland"],
      pyqs: "All exams"
    }, {
      id: 8,
      title: "Winter Break + Semester 8 (Elective Specialisations)",
      topics: ["Differential Geometry", "Algebraic Topology", "Representation Theory", "Advanced Number Theory", "Advanced Algebra or Analysis"],
      refs: ["Spivak", "Hatcher", "Lee", "Lang", "Apostol", "Ireland & Rosen"],
      pyqs: "All Exams"
    }]
  },
  ju: {
    name: "Jadavpur University",
    description: "Tailored to the rigorous academic standards of Jadavpur University, focusing on deep analytical skills and applied mathematics.",
    // ADDED NOTE HERE SPECIFICALLY FOR JU
    specialNote: "(JU – 4th Year Target) During your final year, We aims to complete: Module over PID — Atiyah–Macdonald Chapter 2, Introduction to Algebraic Topology, Complex Analysis (advanced), Differential Geometry and Comprehensive PYQ training (ISI, TIFR, NBHM, CMI, JAM). This ensures you finish your UG degree with research-level foundations.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Linear Algebra I", "Real Analysis I"],
      refs: ["Hoffman–Kunze, Ch. 3", "Bartle–Sherbert", "Rudin"],
      pyqs: "JAM / ISI MMath / TIFR / NBHM / CMI"
    }, {
      id: 2,
      title: "Winter Break + Semester 2",
      topics: ["Group Theory I", "Real Analysis II", "Introduction to Ring Theory"],
      refs: ["Bartle–Sherbert", "Rudin, Ch. 4–5", "Dummit–Foote", "Hungerford"],
      pyqs: "JAM, ISI, TIFR, NBHM, CMI"
    }, {
      id: 3,
      title: "Summer Break + Semester 3",
      topics: ["Real Analysis (Brush-up)", "Group Theory (Brush-up)", "Ring Theory (continued)", "Real Analysis III"],
      refs: ["Bartle–Sherbert", "Rudin, Ch. 6–7", "Artin / Dummit–Foote", "Hungerford"],
      pyqs: "JAM, ISI, TIFR, NBHM, CMI"
    }, {
      id: 4,
      title: "Winter Break + Semester 4",
      topics: ["Metric Spaces (Introduction)", "Topology (Introduction)", "Linear Algebra II"],
      refs: ["Hoffman–Kunze (Ch. 6.2–6.4, 8)", "Rudin (Ch. 2)", "Hungerford", "Munkers", "Kumaresan", "G.F.Simmons", "Kelly", "Willard", "Dugunji", "Shirali"],
      pyqs: "JAM, ISI, TIFR, NBHM, CMI"
    }, {
      id: 5,
      title: "Summer Break + Semester 5",
      topics: ["General Topology (continued)", "Quotient Topology", "Multivariate Analysis", "Group Theory II"],
      refs: ["Armstrong", "Munkres", "Artin / Dummit–Foote", "Hungerford", "Spivak"],
      pyqs: "Intensive practice from JAM, ISI, TIFR,CMI"
    }, {
      id: 6,
      title: "Winter Break + Semester 6",
      topics: ["Complex Analysis I", "Field Theory", "Linear Algebra III"],
      refs: ["Conway", "Hoffman–Kunze", "Artin / Dummit–Foote", "Rudin", "Hungerford", "Stein-Shakarchi"],
      pyqs: "JAM, ISI, TIFR, NBHM, CMI"
    }, {
      id: 7,
      title: "Summer Break + Semester 7",
      topics: ["Complex Analysis — Problem Solving", "Measure Theory", "Functional Analysis"],
      refs: ["Conway", "Folland ", "Rudin", "IK-Rana", "Kesavan"],
      pyqs: "JAM, ISI, TIFR, NBHM, CMI"
    }, {
      id: 8,
      title: "Winter Break + Semester 8 - Elective Driven",
      topics: ["Algebraic Topology", "Field Theory", "Differential Geometry", "Measure Theory II", "Representation Theory", "Complex Analysis II"],
      refs: ["West - Graph Theory", "Conway - Functional Analysis", "Hatcher", "Hungerford", "Lee", "Thorpe", "Lang", "Montiel-Ros"],
      pyqs: "Research Track Papers"
    }]
  },
  cu: {
    name: "Calcutta University",
    description: "Ensuring broad coverage of both pure and applied mathematical concepts.",
    specialNote: `Since the ISI BMath syllabus is our bench mark, your cooperation in terms of willing to go beyond the semester syllabus is a necessary criteria to achieve our aim.  You may not have a proper semester break like some students from some other universities do. Here is how we plan to help you :-
    1. If you don't have a semester break or a very short semester break, it means that some of your previous semesters were way too long. We will use this to our advantage.
    2. We will start the syllabus for the next semester and start doing PYQs and exercises from Clasical Text books like Rudin, Hoffman, Artin.
    3. In this way you will always ahead of your syllabus and won't panick when the semester or entrance exams are coming thick and fast.`,
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Calculus I", "Coordinate Geometry", "Real Analysis 0 (Foundations)"],
      refs: ["Bartle–Sherbert", "Shifrin", "Velleman"],
      pyqs: "CU Previous Year Papers & ISI B.Math (Basic Level)"
    }, {
      id: 2,
      title: "Semester 2",
      topics: ["Abstract Algebra 0 (Foundations)", "Calculus II", "Algebra I", "Series & Convergence Tests"],
      refs: ["Bartle–Sherbert", "Shifrin", "Velleman", "Mafa"],
      pyqs: "CU Previous Year Papers & ISI B.Math (Basic Level)"
    }, {
      id: 3,
      title: "Semester 3",
      topics: ["Real Analysis I", "Group Theory I"],
      refs: ["Bartle & Sherbert", "Rudin", "Artin", "Dummit-Foote", "Hungerford"],
      pyqs: "JAM, ISI B.Math, CMI, NBHM, TIFR"
    }, {
      id: 4,
      title: "Semester 4",
      topics: ["Multivariate Calculus I", "Real Analysis II", "Group Theory II", "Rings I"],
      refs: ["Bartle–Sherbert", "Artin", "Hungerford"],
      pyqs: "JAM, ISI B.Math, CMI, NBHM, TIFR"
    }, {
      id: 5,
      title: "Semester 5",
      topics: ["Real Analysis III", "Ring Theory II", "Linear Algebra I"],
      refs: ["Bartle–Sherbert", "Dummit–Foote", "Hoffman–Kunze", "Hungerford"],
      pyqs: "JAM, ISI B.Math, CMI, NBHM Algebra, TIFR Algebra"
    }, {
      id: 6,
      title: "Semester 6",
      topics: ["Metric Spaces + Introduction to Topology", "Complex Analysis I", "Multivariable Calculus II"],
      refs: ["Conway", "Rudin", "Spivak", "Munkers"],
      pyqs: "JAM, ISI M.Math, TIFR, NBHM, CMI"
    }, {
      id: 7,
      title: "Semester 7 (to be updated)",
      topics: ["Measure Theory I", "Functional Analysis I", "Advanced Topology I", "Algebraic Structures "],
      refs: ["Munkres", "Rudin", "Folland", "Hungerford", "Conway"],
      pyqs: "CU MSc Semester 1"
    }, {
      id: 8,
      title: "Semester 8 (to be updated)",
      topics: ["Advanced Measure Theory", "Functional Analysis II", "Manifolds (Introduction)", "Module Theory", "Advanced Algebra IV"],
      refs: ["Artin", "Dummit–Foote", "Folland", "Hungerford", "Lee", "Conway"],
      pyqs: "ISI/ TIFR/ NBHM/ CMI & Research-oriented problem solving"
    }]
  },
  sxu: {
    name: "St. Xavier's College",
    description: "Focused on the autonomous curriculum of St. Xavier's, blending classical rigour with modern mathematical applications.",
    specialNote: "Since the ISI BMath syllabus is our bench mark, your cooperation in terms of willing to go beyond the semester syllabus is a necessary criteria to achieve our aim. We will have to utilize the 1 month winter breaks and the 2 month summer breaks you have.",
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Abstract Algebra 0", "Real Analysis 0 (if possible)"],
      refs: ["Bartle & Sherbert", "Hungerford"],
      pyqs: "SXU Previous Semester 1 Papers"
    }, {
      id: 2,
      title: "Winter Break + Semester 2",
      topics: ["Real Analysis I ", "Added training-rigor"],
      refs: ["Bartle & Sherbert", "Rudin"],
      pyqs: "SXU Previous Semester 2 Papers"
    }, {
      id: 3,
      title: "Summer Break + Semester 3",
      topics: ["Linear Algebra I", "Real Analysis II ", "Group Theory (Continued)"],
      refs: ["Bartle & Sherbert", "Rudin", "Hoffman & Kunze", "Dummit & Foote", "Hungerford"],
      pyqs: "SXU Previous Semester 3 Papers"
    }, {
      id: 4,
      title: "Winter Break + Semester 4",
      topics: ["Real Analysis (Integration + Series of Functions)", "Algebra Expansion", "Additional Enrichment"],
      refs: ["Bartle & Sherbert", "Rudin", "Hoffman & Kunze", "Dummit & Foote", "Hungerford"],
      pyqs: "University + JAM + CMI + ISI level"
    }, {
      id: 5,
      title: "Summer Break + Semester 5",
      topics: ["Metric Spaces & Topology", "Quotient Topology", "Rings & Modules", "FSV (Functions of Several Variables)"],
      refs: ["Armstrong", "Atiyah & Macdonald", "Rudin", "Spivak", "Hungerford"],
      pyqs: "SXC Honors Papers"
    }, {
      id: 6,
      title: "Winter Break + Semester 6",
      topics: ["FSV (Continued)", "Linear Algebra Expansion", "Introduction to Manifolds"],
      refs: ["Hoffman & Kunze", "Lee", "Spivak", "Munkers"],
      pyqs: "University + JAM + TIFR + ISI M.Math + NBHM"
    }, {
      id: 7,
      title: "Summer Break + Semester 7 (to be updated)",
      topics: ["Topology", "Early Measure Theory", "Algebra"],
      refs: ["Lee", "Spivak", "Hungerford", "Folland", "Munkers"],
      pyqs: "University + JAM + TIFR + ISI M.Math + NBHM"
    }, {
      id: 8,
      title: "Winter Break + Semester 8 (to be updated)",
      topics: ["Advanced electives", "Early research project", "Stochastic Processes"],
      refs: ["To be updated"],
      pyqs: "Exam-oriented problem solving"
    }]
  },
  pu: {
    name: "Presidency University",
    description: "Designed for Presidency University students, emphasizing pure mathematics and research-oriented topics from the very first year.",
    specialNote: `Since the ISI BMath syllabus is our bench mark, your cooperation in terms of willing to go beyond the semester syllabus is a necessary criteria to achieve our aim. Your semester breaks can be a bit short at times.
    1. Your semester breaks are short because your semesters take longer to be concluded. We will have to use this to our advantage.
    2. We will not leave things out for your semester breaks. We will mostly do the Pyqs of JAM, MMath, TIFR when the semester is going on along with your day to day college assignments.
    3. We will have to find a suitable time to teach you Functional Analysis since it is not currently offered in your Syllabus.`,
    semesters: [{
      id: 1,
      title: "Semester 1",
      topics: ["Real Analysis 0", "Abstract Algebra 0"],
      refs: ["Bartle–Sherbert", "Artin", "Dummit–Foote", "Hungerford"],
      pyqs: "JAM, ISI B.Math/ M.Math, TIFR, NBHM, CMI"
    }, {
      id: 2,
      title: "Winter Break + Semester 2",
      topics: ["Real Analysis I", "Group Theory I", "Ring Theory I"],
      refs: ["Bartle–Sherbert", "Rudin", "Artin", "Dummit–Foote", "Hungerford"],
      pyqs: "JAM / ISI / TIFR / NBHM / CMI"
    }, {
      id: 3,
      title: "Summer Break + Semester 3",
      topics: ["Ring Theory (continued)", "Real Analysis II – Integration", "Linear Algebra (continued)"],
      refs: ["Hoffman-kunze", "Rudin", "Artin", "Hungerford"],
      pyqs: "JAM / ISI / TIFR / NBHM / CMI"
    }, {
      id: 4,
      title: "Winter Break + Semester 4",
      topics: ["Real Analysis III", "Metric Spaces"],
      refs: ["Bartle–Sherbert", "Rudin", "Shirali", "M.N. Mukherjee"],
      pyqs: "JAM / ISI / TIFR / NBHM / CMI"
    }, {
      id: 5,
      title: "Summer Break + Semester 5",
      topics: ["Multivariate Calculus", "Group Theory II", "Ring Theory II"],
      refs: ["Hungerford", "Spivak", "Artin / Dummit–Foote"],
      pyqs: "JAM / ISI / TIFR / NBHM / CMI"
    }, {
      id: 6,
      title: "Winter Break + Semester 6",
      topics: ["Complex Analysis I"],
      refs: [" Ahlfors or Brown–Churchill", "Ponnuswamy", "Stenin-Shakarchi"],
      pyqs: "ISI–TIFR–CMI targeted problem solving"
    }, {
      id: 7,
      title: "Semester 7",
      topics: ["General Topology", "Quotient Topology", "Algebraic Topology (Introduction)", "Elective Subject"],
      refs: ["Armstrong", "Munkres", "Hatcher", "Willard"],
      pyqs: "ISI–TIFR–CMI targeted problem solving"
    }, {
      id: 8,
      title: "Semester 8",
      topics: ["Multivariable Calculus (Revision)", "Introduction to Differential Geometry", "Elective Subject"],
      refs: ["Lee", "Munkers", "Spivak"],
      pyqs: "ISI–TIFR–CMI targeted problem solving"
    }]
  }
};

const FoundationBatch = () => {
  const [selectedTrack, setSelectedTrack] = useState('common');
  const features = ['Comprehensive coverage of basic mathematical concepts', 'Interactive problem-solving sessions', 'Regular assessments and progress tracking', 'Doubt clearing sessions with expert faculty', 'Study material and practice worksheets', 'Focus on building strong fundamentals'];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.6
    }
  };

  return (
    <>
      <Helmet>
        <title>Foundation Batch | Mathematics Coaching for BSc Students in West Bengal | Let's Study MS</title>
        <meta name="description" content="Foundation Batch at Let's Study MS — one of West Bengal's top mathematical institutes for higher education. University-specific curriculum for Jadavpur, Calcutta, St. Xavier's and Presidency University BSc students. Build a world-class mathematical foundation." />
        <meta name="keywords" content="foundation batch mathematics west bengal, BSc mathematics coaching kolkata, undergraduate mathematics coaching west bengal, jadavpur university maths coaching, calcutta university maths tutor" />
        <link rel="canonical" href="https://letsstudyms.com/courses/foundation-batch" />
        <meta property="og:title" content="Foundation Batch | BSc Mathematics Coaching West Bengal | Let's Study MS" />
        <meta property="og:description" content="University-specific curriculum for Jadavpur, Calcutta, St. Xavier's and Presidency University BSc students. Build a world-class mathematical foundation." />
        <meta property="og:url" content="https://letsstudyms.com/courses/foundation-batch" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="max-w-4xl mx-auto text-center">
              <BookOpen size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">Foundation Batch</h1>
              <p className="text-xl">Build strong mathematical fundamentals for undergraduate studies</p>
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
                  Our Foundation Batch is designed for students beginning their journey in higher mathematics.
                  This comprehensive program covers all essential topics required for undergraduate mathematics,
                  ensuring students develop a solid understanding of fundamental concepts.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  With our experienced faculty and structured curriculum, students gain the confidence and
                  skills needed to excel in their academic pursuits and competitive examinations.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="Students learning mathematics fundamentals in classroom" src="https://images.unsplash.com/photo-1561089489-f13d5e730d72" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dynamic Curriculum Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">University Curriculum Explorer</h2>
              <p className="text-gray-600 text-lg mb-8">Select your university to view the detailed semester-wise breakdown</p>

              {/* Dropdown Selector */}
              <div className="relative max-w-md mx-auto z-10">
                <div className="relative">
                  <select value={selectedTrack} onChange={e => setSelectedTrack(e.target.value)} className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-4 px-6 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all">
                    <option value="ju">Jadavpur University</option>
                    <option value="cu">Calcutta University</option>
                    <option value="sxu">St. Xavier's College</option>
                    <option value="pu">Presidency University</option>
                    <option value="common">Common Track (Competitive)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                    <ChevronDown size={24} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Curriculum Display */}
            <AnimatePresence mode="wait">
              <motion.div key={selectedTrack} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: 20
              }} transition={{
                duration: 0.3
              }} className="max-w-6xl mx-auto">

                {/* Curriculum Header Card */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-12">
                  <h3 className="text-3xl font-bold text-[#0F5A7A] mb-2 flex items-center">
                    <Library className="mr-3" /> {CURRICULA[selectedTrack].name}
                  </h3>
                  <p className="text-gray-600 text-lg italic mb-6">{CURRICULA[selectedTrack].description}</p>

                  {/* Additional Note */}
                  {CURRICULA[selectedTrack].specialNote && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Additional Note</h4>
                      <p className="text-justify hyphens-auto text-gray-700 leading-relaxed whitespace-pre-line">
                        {CURRICULA[selectedTrack].specialNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CURRICULA[selectedTrack].semesters.map((sem, index) => <motion.div key={sem.id} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: index * 0.05
                  }} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                    <div className="bg-[#0F5A7A] text-white p-4 flex justify-between items-center">
                      <h4 className="font-bold text-lg">{sem.title}</h4>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">Semester {sem.id}</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h5 className="text-[#0F5A7A] font-semibold flex items-center mb-2">
                          <BookOpen size={16} className="mr-2" /> Topics Covered
                        </h5>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-1">
                          {sem.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-[#0F5A7A] font-semibold flex items-center mb-2">
                          <Book size={16} className="mr-2" /> Key References
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {sem.refs.map((ref, i) => <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded border border-gray-200 italic">
                            {ref}
                          </span>)}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[#0F5A7A] font-semibold flex items-center mb-1">
                          <ScrollText size={16} className="mr-2" /> PYQs
                        </h5>
                        <p className="text-xs text-gray-600 border-l-2 border-yellow-400 pl-2 bg-yellow-50 p-2 rounded-r">
                          {sem.pyqs}
                        </p>
                      </div>
                    </div>
                  </motion.div>)}
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
              <p className="text-gray-600 text-lg">Everything you need to build a strong foundation in mathematics</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => <motion.div key={index} {...fadeInUp} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{feature}</span>
              </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63]">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our Foundation Batch and build the mathematical foundation that will support your entire academic career.
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

export default FoundationBatch;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, CheckCircle, ArrowRight, ChevronDown, Book, ScrollText, Library, Award, Layers, Calendar } from 'lucide-react';
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
        <title>Foundation Batch | Mathematics Coaching for BSc Students in West Bengal | Let's Study</title>
        <meta name="description" content="Foundation Batch at Let's Study — one of West Bengal's top mathematical institutes for higher education. University-specific curriculum for Jadavpur, Calcutta, St. Xavier's and Presidency University BSc students. Build a world-class mathematical foundation." />
        <meta name="keywords" content="foundation batch mathematics west bengal, BSc mathematics coaching kolkata, undergraduate mathematics coaching west bengal, jadavpur university maths coaching, calcutta university maths tutor" />
        <link rel="canonical" href="https://letsstudyms.com/courses/foundation-batch" />
        <meta property="og:title" content="Foundation Batch | BSc Mathematics Coaching West Bengal | Let's Study" />
        <meta property="og:description" content="University-specific curriculum for Jadavpur, Calcutta, St. Xavier's and Presidency University BSc students. Build a world-class mathematical foundation." />
        <meta property="og:url" content="https://letsstudyms.com/courses/foundation-batch" />
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
                <BookOpen size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Foundation Batch
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Build a world-class mathematical foundation with our university-specific undergraduate modules.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold text-[#0F5A7A] dark:text-blue-400 mb-6">Course Overview</h2>
                <p className="text-justify hyphens-auto text-gray-700 dark:text-slate-300 text-lg mb-6">
                  Our Foundation Batch is designed for students beginning their journey in higher mathematics.
                  This comprehensive program covers all essential topics required for undergraduate mathematics,
                  ensuring students develop a solid understanding of fundamental concepts.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 dark:text-slate-300 text-lg mb-6">
                  With our experienced faculty and structured curriculum, students gain the confidence and
                  skills needed to excel in their academic pursuits and competitive examinations.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5A7A] to-[#2FA4D9] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1000"
                  alt="Foundation Batch Mathematics"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-gray-50/50 dark:bg-[#020817]/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-6 tracking-tight">University Curriculum Explorer</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Select your university to view the detailed semester-wise breakdown designed for academic excellence.
              </p>

              {/* Selector */}
              <div className="flex justify-center mt-12">
                <div className="relative group min-w-[320px]">
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
                      <option value="common">Common Track (Competitive)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={20} />
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
                      Undergraduate Module
                    </div>
                    <h3 className="text-4xl font-black mb-2 tracking-tight">
                      {CURRICULA[selectedTrack].name}
                    </h3>
                    <p className="text-blue-100/80 dark:text-blue-200/80 font-light text-xl italic">{CURRICULA[selectedTrack].description}</p>
                  </div>
                  <div className="relative z-10 text-center md:text-right">
                    <span className="text-blue-200 text-xs font-bold tracking-widest uppercase opacity-70">Focus Era</span>
                    <div className="text-5xl font-black mt-1">2026-27</div>
                  </div>
                </div>

                {/* Additional Note */}
                {CURRICULA[selectedTrack].specialNote && (
                  <div className="bg-[#0F5A7A]/5 dark:bg-blue-500/5 border-l-4 border-[#0F5A7A] p-6 rounded-r-2xl mb-16 backdrop-blur-sm ring-1 ring-[#0F5A7A]/10 dark:ring-white/5">
                    <h4 className="text-lg font-black text-[#0F5A7A] dark:text-blue-400 mb-2 flex items-center">
                      <Award className="mr-3" size={20} /> Special Academic Note
                    </h4>
                    <p className="text-justify hyphens-auto text-gray-700 dark:text-slate-300 leading-relaxed text-sm font-medium">
                      {CURRICULA[selectedTrack].specialNote}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CURRICULA[selectedTrack].semesters.map((sem, index) => (
                    <motion.div
                      key={sem.id}
                      {...fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-slate-900/60 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] dark:ring-white/[0.05] overflow-hidden hover:shadow-2xl hover:shadow-[#0F5A7A]/10 dark:hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group/sem-card"
                    >
                      <div className="bg-gray-50/50 dark:bg-white/5 p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between group-hover/sem-card:bg-[#0F5A7A]/5 dark:group-hover/sem-card:bg-[#0F5A7A]/10 transition-colors">
                        <div className="flex items-center">
                          <div className="bg-[#0F5A7A] text-white p-2.5 rounded-xl mr-4 shadow-lg shadow-[#0F5A7A]/20">
                            <Layers size={20} />
                          </div>
                          <h4 className="text-xl font-extrabold text-gray-800 dark:text-slate-100 tracking-tight">{sem.title}</h4>
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#0F5A7A]/40 group-hover/sem-card:text-[#0F5A7A] transition-colors">Sem {sem.id}</span>
                      </div>
                      
                      <div className="p-8 space-y-8">
                        <div>
                          <h5 className="text-[#0F5A7A] dark:text-blue-400 font-extrabold flex items-center mb-5 text-xs uppercase tracking-widest">
                            <BookOpen size={18} className="mr-3" /> Core Topics
                          </h5>
                          <div className="space-y-3">
                            {sem.topics.map((topic, i) => (
                              <details key={i} className="group/item bg-gray-50/50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                  <div className="flex items-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#0F5A7A] dark:bg-blue-400 mr-3"></div>
                                    <span className="text-[#0F5A7A] dark:text-blue-300 text-sm font-semibold">{topic}</span>
                                  </div>
                                  <ChevronDown size={14} className="transition-transform duration-300 group-open/item:rotate-180 text-[#0F5A7A] dark:text-blue-400" />
                                </summary>
                                <div className="px-8 pb-5 pt-2 text-xs text-gray-600 bg-white border-t border-gray-50 leading-relaxed font-medium">
                                  In-depth study of <span className="text-[#0F5A7A] font-bold">{topic}</span> including theoretical frameworks and university examination patterns.
                                </div>
                              </details>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                          <h5 className="text-[#0F5A7A] font-extrabold flex items-center mb-4 text-xs uppercase tracking-widest">
                            <Book size={18} className="mr-3" /> References
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {sem.refs.map((ref, i) => (
                              <span key={i} className="text-[10px] uppercase font-bold bg-[#0F5A7A]/5 text-[#0F5A7A] px-3 py-1.5 rounded-lg border border-[#0F5A7A]/10 tracking-wider">
                                {ref}
                              </span>
                            ))}
                          </div>
                        </div>

                        {sem.pyqs && (
                          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start space-x-4">
                            <div className="bg-amber-100 p-2 rounded-lg">
                              <ScrollText size={18} className="text-amber-700" />
                            </div>
                            <div>
                              <span className="text-[10px] font-black uppercase text-amber-700/50 tracking-tighter">Exam Archive</span>
                              <p className="text-xs text-amber-800 font-bold leading-relaxed">{sem.pyqs}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white dark:bg-[#020817] transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-4 tracking-tight">What You'll Get</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg font-light tracking-wide">Everything you need to build a strong foundation in mathematics</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-5 bg-gray-50/50 dark:bg-slate-900/50 p-6 rounded-[2rem] ring-1 ring-gray-100 dark:ring-white/5 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-[#0F5A7A]/5 transition-all duration-300 group"
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
        <section className="py-16 bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63]">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our Foundation Batch and build the mathematical foundation that will support your entire academic career.
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

export default FoundationBatch;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, Clock, Users, CheckCircle, ArrowRight,
  ChevronDown, BookOpen, Library, GraduationCap,
  Calculator, Sigma, Book, ScrollText, Sparkles, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Curriculum Data Updated with accurate content
const CURRICULA = {
  gate: {
    name: "Mathematics for GATE",
    description: "Engineering Mathematics for GATE (CSE/ IT/ Electrical/ Mechanical/ Civil/ Electronics and Instrumentation/ Architecture).",
    type: "nested_topics",
    subOptions: [
      {
        id: "linear_algebra",
        name: "1. Linear Algebra",
        description: "Required for all branches; CSE/ IT needs deeper theory",
        topics: [
          "Matrices and Vectors", "Matrix Algebra", "Systems of Linear Equations",
          "Rank of a Matrix", "Determinants", "Eigenvalues & Eigenvectors",
          "Characteristic Polynomial", "Diagonalization", "Cayley–Hamilton Theorem",
          "Vector Spaces & Subspaces", "Basis & Dimension", "Linear Transformations"
        ]
      },
      {
        id: "calculus",
        name: "2. Calculus",
        description: "Very important for ECE/ EE/ ME and Civil (CSE uses only small parts)",
        topics: [
          "Limits & Continuity", "Mean Value Theorems", "Maxima & Minima (Single-variable)",
          "Taylor series", "Partial & Total derivatives", "Jacobians, Hessians",
          "Lagrange multipliers", "Indefinite & Definite integrals", "Improper integrals",
          "Area & Volume", "Gradient, Divergence, Curl", "Directional derivatives", "Line, Surface & Volume integrals",
          "Green’s, Stokes’ & Gauss Divergence Theorem"
        ]
      },
      {
        id: "differential_eq",
        name: "3. Differential Equations",
        description: "Civil/ Mechanical require PDEs heavily",
        topics: [
          "First-order ODEs", "Second-order ODEs (Constant Coefficients)",
          "Homogeneous & Non-homogeneous equations", "Cauchy–Euler equations",
          "Laplace transforms", "Formation of PDEs", "Linear PDEs",
          "Heat, Wave and Laplace Equations"
        ]
      },
      {
        id: "complex_analysis",
        name: "4. Complex Analysis",
        description: "Needed for ECE/ EE/ ME/ CIVIL, not for CSE",
        topics: [
          "Analytic functions", "Cauchy–Riemann equations", "Line integrals",
          "Cauchy Integral Formula", "Taylor & Laurent series", "Residue theorem",
          "Evaluation of real integrals using residues"
        ]
      },
      {
        id: "probability",
        name: "5. Probability & Statistics",
        description: "CSE/ IT require probability for algorithms/ ML; ECE/ EE heavily for signals; CE/ ME moderate",
        topics: [
          "Random variables (Discrete & Continuous)", "PDF & CDF",
          "Expectation, Variance, Moments", "Joint distributions",
          "Covariance & Correlation", "Law of Large Numbers &  Central Limit Theorem",
          "Distributions (Bernoulli, Binomial, Poisson, Geometric, Exponential, Normal)",
          "Hypothesis testing (Basic)", "Conditional probability", "Bayes' theorem"
        ]
      },
      {
        id: "numerical_methods",
        name: "6. Numerical Methods",
        description: "Important across all engineering branches",
        topics: [
          "Solution of Nonlinear equations (Newton–Raphson, Bisection, etc.)",
          "Numerical integration (Trapezoidal, Simpson)",
          "Interpolation (Lagrange, Newton)", "Numerical differentiation",
          "Solution of ODEs (Euler, Runge-Kutta)", "Error analysis"
        ]
      },
      {
        id: "vector_calculus",
        name: "7. Vector Calculus",
        description: "Heavily used in EE, ECE, Mechanical, Civil",
        topics: [
          "Vector operations", "Dot & Cross product", "Scalar & Vector triple product",
          "Gradient, divergence, curl", "Line & surface integrals",
          "Orthogonal curvilinear coordinates", "Green's theorem", "Stokes theorem"
        ]
      },
      {
        id: "fourier_series",
        name: "8. Fourier Series & Transforms",
        description: "Essential in ECE/ EE/ ME",
        topics: [
          "Fourier series", "Even/ Odd Functions", "Half-range expansions", "Fourier transform basics", "Applications in PDEs & signals"
        ]
      },
      {
        id: "laplace_transform",
        name: "9. Laplace Transform",
        description: "Essential in ECE/ EE/ ME",
        topics: [
          "Laplace Definition & properties", "Inverse Laplace", "Convolution",
          "Solving ODEs using Laplace"
        ]
      },
      {
        id: "discrete_math",
        name: "10. Discrete Mathematics",
        description: "CSE/ IT only, but included since you want combined",
        topics: [
          "Sets, relations, functions", "Propositional & predicate logic", "Satisfiability", "Quantifiers",
          "Combinatorics (Permutation, Combination, Pigeonhole  principle, Inclusion-Exclusion)",
          "Graph Theory (Trees, Connectivity, Coloring)", "Eulerian & Hamiltonian graphs", "Spanning trees", "Planarity", "Adjacency & incidence matrices",
          "Algebraic Structures (Groups, Rings, Fields (Basic))", "Equivalence relations", "Partial orders"
        ]
      }
    ]
  },
  semester: {
    name: "Semester Support",
    description: "Semester-wise batches available for various universities including JU, MAKAUT, and more.",
    type: "university_semester",
    subOptions: [
      {
        id: "ju_makaut",
        name: "University Curriculum",
        description: "Focusing on university-specific marking patterns and previous year questions.",
        semesters: [
          { title: "Calculus", topics: ["Limits", "Differentiation", "Integration", "Multivariable Calculus"] },
          { title: "Linear Algebra", topics: ["Matrices", "Determinants", "Vector Spaces", "Eigenvalues"] },
          { title: "Differential Equations", topics: ["First & Second Order ODEs", "Formation of PDEs"] },
          { title: "Probability & Statistics", topics: ["Random Variables", "Distributions", "Hypothesis Testing"] },
          { title: "Complex Analysis", topics: ["Complex Numbers", "Analytic Functions (Basic)"] },
          { title: "Numerical Methods", topics: ["Root Finding", "Interpolation", "Numerical Integration"] },
          { title: "Discrete Mathematics", topics: ["Logic & Proofs", "Sets & Relations", "Graphs (mainly for CS)"] }
        ]
      }
    ]
  }
};

const EngineeringMathematics = () => {
  const [selectedComponent, setSelectedComponent] = useState('gate');
  const [selectedSubOption, setSelectedSubOption] = useState('linear_algebra');
  const [selectedUni, setSelectedUni] = useState('ju_makaut');

  const handleComponentChange = (e) => {
    const newVal = e.target.value;
    setSelectedComponent(newVal);
    if (newVal === 'gate') {
      setSelectedSubOption(CURRICULA.gate.subOptions[0].id);
    } else {
      setSelectedUni(CURRICULA.semester.subOptions[0].id);
    }
  };

  const features = [
    'Comprehensive coverage for all engineering branches',
    'Application-oriented problem solving',
    'GATE Mathematics preparation (Core Theory + Shortcuts)',
    'University exam-focused teaching (JU, MAKAUT, etc.)',
    'Branch-specific depth (CSE Theory vs ECE Signals)',
    'Doubt clearing and revision sessions'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const currentData = CURRICULA[selectedComponent];

  return (
    <>
      <Helmet>
        <title>Engineering Mathematics Coaching West Bengal | GATE Preparation | Let's Study</title>
        <meta name="description" content="Engineering Mathematics coaching for college students in West Bengal. GATE mathematics preparation, semester coaching and competitive exam training by expert faculty. Students have secured GATE AIR 25, AIR 250 and AIR 450." />
        <meta name="keywords" content="engineering mathematics coaching West Bengal, GATE maths preparation Kolkata, engineering maths tutor West Bengal, B.Tech mathematics coaching" />
        <link rel="canonical" href="https://letsstudyms.com/courses/engineering-mathematics" />
        <meta property="og:title" content="Engineering Mathematics Coaching West Bengal | GATE Prep" />
        <meta property="og:url" content="https://letsstudyms.com/courses/engineering-mathematics" />
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
                <Calculator size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Engineering Mathematics
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Excel in GATE and University Semesters with our application-focused mathematical training.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-8 tracking-tight">Technical Mastery</h2>
                <div className="space-y-6 text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p className="text-justify hyphens-auto">
                    Our Engineering Mathematics program is designed to help students excel in GATE as well as semester examinations
                    of universities such as Jadavpur University (JU), MAKAUT, and other leading engineering institutions. The course
                    focuses on building strong conceptual foundations while training students to solve problems with speed, accuracy,
                    and clarity.
                  </p>
                  <p className="text-justify hyphens-auto">
                    With structured coverage of core topics—Linear Algebra, Calculus, Differential Equations, Probability, and Complex Analysis—combined
                    with rigorous problem practice and exam-oriented strategies, this program ensures you are fully prepared for both competitive exams
                    and academic assessments.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5A7A] to-[#2FA4D9] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://i.postimg.cc/8chj7RsB/pexels-jeswin-3380743.jpg"
                  alt="Engineering Mathematics Preparation"
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
              <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-6 tracking-tight">Technical Curriculum Roadmap</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Choose your track to access specialized modules tailored for GATE rank expansion and university semester success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16">
                <div className="relative group text-left">
                  <label className="block text-xs font-bold text-[#0F5A7A]/50 uppercase tracking-widest mb-2 ml-1">Academic Track</label>
                  <div className="relative">
                    <select
                      value={selectedComponent}
                      onChange={handleComponentChange}
                      className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-[#0F5A7A]/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-[#0F5A7A]/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      <option value="gate">Mathematics for GATE</option>
                      <option value="semester">Semester Support</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {currentData.type === 'nested_topics' && (
                  <div className="relative group text-left">
                    <label className="block text-xs font-bold text-[#0F5A7A]/50 uppercase tracking-widest mb-2 ml-1">Syllabus Module</label>
                    <div className="relative">
                      <select
                        value={selectedSubOption}
                        onChange={(e) => setSelectedSubOption(e.target.value)}
                        className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-[#0F5A7A]/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-[#0F5A7A]/10 transition-all cursor-pointer pr-12 outline-none"
                      >
                        {currentData.subOptions.map(option => (
                          <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedComponent}-${selectedSubOption}-${selectedUni}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                {currentData.type === 'nested_topics' && (() => {
                  const topicData = currentData.subOptions.find(o => o.id === selectedSubOption);
                  return (
                    <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] dark:border-blue-400 overflow-hidden ring-1 ring-black/5 dark:ring-white/5 transition-colors">
                      <div className="p-8 border-b border-gray-100 dark:border-white/5">
                        <h3 className="text-3xl font-bold text-[#0F5A7A] dark:text-blue-400 flex items-center mb-2">
                          <Calculator className="mr-3" /> {topicData.name}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 italic">{topicData.description}</p>
                      </div>
                      <div className="p-8 bg-gray-50 dark:bg-white/5 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {topicData.topics.map((t, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-gray-200 dark:border-white/5 flex items-start group">
                              <Sigma size={16} className="text-[#0F5A7A] dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-slate-300 font-medium">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {currentData.type === 'university_semester' && (() => {
                  const uniData = currentData.subOptions.find(o => o.id === selectedUni);
                  return (
                    <div>
                      <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl shadow-lg border-t-8 border-[#0F5A7A] dark:border-blue-500 mb-8 ring-1 ring-black/5 dark:ring-white/5 transition-colors">
                        <h3 className="text-3xl font-bold text-[#0F5A7A] dark:text-blue-300 flex items-center mb-2">
                          <Library className="mr-3" /> {uniData.name}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 italic">{uniData.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {uniData.semesters.map((sem, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-white dark:bg-slate-900/60 rounded-xl shadow-md border border-gray-100 dark:border-white/5 overflow-hidden transition-colors"
                          >
                            <div className="bg-[#0F5A7A] dark:bg-[#0F5A7A]/80 text-white p-4">
                              <h4 className="font-bold text-lg">{sem.title}</h4>
                            </div>
                            <div className="p-6">
                              <h5 className="text-[#0F5A7A] dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">Syllabus:</h5>
                              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-slate-300 space-y-2">
                                {sem.topics.map((t, i) => <li key={i}>{t}</li>)}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EngineeringMathematics;
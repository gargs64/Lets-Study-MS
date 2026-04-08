import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, CheckCircle, ChevronDown, BookOpen,
  Library, Sigma, BarChart, Book, ArrowRight,
  GraduationCap, Award, Layers, ScrollText, Sparkles, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// === 1. UPDATED DATA STRUCTURE ===
const CURRICULA = {
  ds: {
    name: "Data Science",
    type: "nested",
    subOptions: [
      {
        id: "cmi_rkmveri",
        name: "M.Sc - CMI / RKMVERI",
        description: "Focus on School Mathematics, Discrete Mathematics, Probability, and Programming basics.",
        topics: [
          {
            title: "School Mathematics",
            items: [
              "Arithmetic and geometric progressions",
              "Arithmetic, geometric, and harmonic means",
              "Polynomials",
              "Matrices: operations, inverse, transpose",
              "Determinants and solving linear equations",
              "Prime numbers, divisibility, GCD, LCM",
              "Modular arithmetic",
              "Logarithms",
              "Functions: domain, range, injective, surjective",
              "Basic calculus: differentiation, maxima–minima, integration"
            ]
          },
          {
            title: "Discrete Mathematics",
            items: [
              "Sets and relations",
              "Permutations and combinations",
              "Counting techniques",
              "Pigeonhole principle",
              "Binomial theorem",
              "Mathematical induction",
              "Boolean logic and truth tables"
            ]
          },
          {
            title: "Probability",
            items: [
              "Basic probability concepts",
              "Conditional probability and Bayes theorem",
              "Random variables",
              "PDFs and CDFs",
              "Common distributions (Gaussian etc.)",
              "Expectation and variance",
              "Summary statistics and basic data interpretation"
            ]
          },
          {
            title: "Programming",
            items: [
              "Reading simple pseudocode",
              "Understanding variables",
              "Conditionals and loops"
            ]
          }
        ],
        // === ADDED REFERENCES HERE ===
        refs: [
          "C. L. Liu – Elements of Discrete Mathematics",
          "Norman Biggs – Discrete Mathematics",
          "Sheldon Ross – A First Course in Probability",
          "Henk Tijms – Understanding Probability",
          "R. G. Dromey – How to Solve it by Computer"
        ]
      },
      {
        id: "gate",
        name: "GATE - Data Science & AI",
        description: "Comprehensive coverage of GATE Data Science & AI syllabus.",
        topics: [
          {
            title: "Probability & Statistics",
            items: [
              "Permutations, combinations",
              "Probability axioms, sample space, events",
              "Independence, mutual exclusivity",
              "Marginal, joint, conditional probability; Bayes",
              "Mean, median, mode, variance, SD; covariance, correlation",
              "Random variables: discrete/continuous",
              "Distributions: Uniform, Bernoulli, Binomial, Poisson, Exponential, Normal, Standard Normal, t, Chi-square",
              "PMF, PDF, CDF, conditional PDF",
              "CLT, Confidence intervals",
              "z-test, t-test, chi-square test"
            ]
          },
          {
            title: "Linear Algebra",
            items: [
              "Vector spaces, subspaces",
              "Linear dependence/independence",
              "Matrices: projection, orthogonal, idempotent, partition",
              "Quadratic forms",
              "Systems of linear equations; Gaussian elimination",
              "Determinant, rank, nullity",
              "Eigenvalues/eigenvectors",
              "LU decomposition, SVD"
            ]
          },
          {
            title: "Calculus & Optimization",
            items: [
              "Limit, continuity, differentiability",
              "Taylor series",
              "Maxima/minima of single-variable functions",
              "Single-variable optimization basics"
            ]
          },
          {
            title: "Programming, DS & Algorithms",
            items: [
              "Python basics",
              "Stacks, queues, linked lists, trees, hash tables",
              "Linear/binary search",
              "Sorting: selection, bubble, insertion, mergesort, quicksort",
              "Graph basics: BFS, DFS, shortest path"
            ]
          },
          {
            title: "DBMS & Data Warehousing",
            items: [
              "ER model, relational model",
              "Relational algebra, tuple calculus, SQL",
              "Constraints, normal forms",
              "File organization, indexing",
              "Data preprocessing: normalization, discretization, sampling, compression",
              "Data warehouse: schemas, hierarchies, measures"
            ]
          },
          {
            title: "Machine Learning",
            items: [
              "Supervised: Regression, Classification (logistic, k-NN, Naive Bayes, LDA), SVM, Decision trees",
              "Bias–variance trade-off",
              "Cross-validation: LOO, k-fold",
              "Neural nets: MLP, feed-forward",
              "Unsupervised: Clustering (k-means, k-medoid, hierarchical), PCA"
            ]
          },
          {
            title: "Artificial Intelligence",
            items: [
              "Search: informed, uninformed, adversarial",
              "Logic: propositional, predicate",
              "Probabilistic reasoning: conditional independence, variable elimination, sampling-based inference"
            ]
          }
        ]
      }
    ]
  },
  isi_mtech: {
    name: "ISI M.Tech (CS, CRS, QROR)",
    type: "nested",
    subOptions: [
      {
        id: "pca",
        name: "PCA",
        description: "Analytical reasoning and fundamental mathematical concepts.",
        topics: [
          {
            title: "General Mathematics",
            items: [
              "Analytical Reasoning",
              "Elementary Number Theory: Divisibility, Congruence, Primality",
              "Elementary Algebra: AP/GP/HP, Inequalities, Binomial/Multinomial Theorem, Polynomials"
            ]
          },
          {
            title: "Linear Algebra",
            items: [
              "Matrices, Determinants, Rank and Inverse",
              "Properties of Symmetric and Idempotent Matrices",
              "Vectors, Eigenvalues and Eigenvectors",
              "Quadratic Forms, System of Linear Equations"
            ]
          },
          {
            title: "Calculus & Geometry",
            items: [
              "Euclidean and Coordinate Geometry: Straight Lines, Circle, Triangles",
              "Calculus: Sequences, Series (Power, Taylor, Maclaurin)",
              "Convergence, Limits, Continuity",
              "Differentiation and Integration, Rolle’s Theorem, MVT, Maxima/Minima"
            ]
          },
          {
            title: "Discrete Math & Logic",
            items: [
              "Elementary Set Theory, Permutations and Combinations",
              "Functions and Relations, Recurrences",
              "Basic Graph Theory: Paths, Cycles, Connected Components, Trees, Digraphs",
              "Mathematical Logic: Boolean Algebra, Propositional Logic, Predicate Logic"
            ]
          },
          {
            title: "Probability & CS Basics",
            items: [
              "Combinatorial Probability, Conditional Probability, Bayes Theorem",
              "Basic Automata Theory: Strings, Languages, Finite State Automata, Regular Expressions",
              "Basic Algorithmic Concepts: Interpreting Simple Pseudocodes"
            ]
          }
        ]
      },
      {
        id: "pcb_non_cs",
        name: "PCB (Non-CS Group)",
        description: "Advanced mathematics and engineering sciences.",
        topics: [
          {
            title: "Topics in Mathematics",
            items: [
              "Logical Reasoning, Functions, Divisibility, Congruences, Primality",
              "Permutations, Combinations, Binomial/Multinomial, Recurrences",
              "Algorithms: Asymptotic Notation, Searching, Sorting, Graph Traversal, MST",
              "Linear Algebra: Systems, Rank, Vector Space, Eigenvalues, Symmetric/Idempotent Matrices",
              "Polynomials (Single and Multiple Variables)",
              "Probability: Combinatorial, Conditional, Bayes, Discrete Random Variables",
              "Graph Theory: Adjacency Matrix/List, Paths, Cycles, Trees, Connectivity, Planar Graphs",
              "Calculus: Sequences, Series, Convergence, Limits, Continuity, Diff/Integration, Max/Min, Several Variables",
              "Automata: Finite Automata, Regular Expressions, Pumping Lemma, PDA, CFG, Turing Machine, Undecidability"
            ]
          },
          {
            title: "Topics in Engineering Sciences",
            items: [
              "Elementary Circuit Theory: Node/Mesh Analysis, KVL/KCL, Superposition, Thevenin’s/Norton’s, Max Power Transfer",
              "Switching Theory & Logic: Boolean min, K-Maps, Quine-McCluskey, Adders, Mux/Demux, ROM, Flip-Flops, Counters, Registers, FSM",
              "Mechanics: Gravitation, Moments of Inertia, Particle Dynamics, Laws of Motion, Elasticity, Friction, Strength of Materials",
              "Thermodynamics: Laws (1st, 2nd, 3rd), Heat Engines, Efficiency, Carnot Cycle"
            ]
          }
        ]
      },
      {
        id: "mma",
        name: "MMA",
        description: "Objective-style higher mathematics.",
        topics: [
          {
            title: "Algebra & Number Theory",
            items: [
              "AP, GP, HP, Continued fractions",
              "Permutations and Combinations, Binomial theorem",
              "Theory of equations, Inequalities (AM-GM, Cauchy-Schwarz)",
              "Complex numbers and De Moivre’s theorem",
              "Elementary Set Theory, Functions and relations",
              "Elementary Number Theory: divisibility, congruence, primality",
              "Group properties, Principle of mathematical induction",
              "Polynomials: remainder theorem, factor theorem"
            ]
          },
          {
            title: "Linear Algebra",
            items: [
              "Matrices: determinant, rank, inverse",
              "Symmetric and idempotent matrices",
              "Eigenvalues and eigenvectors, quadratic forms",
              "System of linear equations"
            ]
          },
          {
            title: "Calculus & Geometry",
            items: [
              "Coordinate geometry: Straight line, Circle, Parabola, Ellipse, Hyperbola",
              "Sequences, Series (Power, Taylor, Maclaurin), convergence",
              "Limits, continuity, differentiation, integration (one variable)",
              "Rolle’s theorem, Mean value theorem, Definite integrals, Maxima/minima",
              "Functions of several variables: limits, continuity, differentiability",
              "Double integrals, Ordinary linear differential equations"
            ]
          },
          {
            title: "Probability & Trig",
            items: [
              "Combinatorial probability, Conditional probability, Bayes theorem",
              "Trigonometric functions and identities"
            ]
          }
        ]
      },
      {
        id: "pqb",
        name: "PQB",
        description: "Part I (Math) and Part II (Statistics or Engineering).",
        topics: [
          {
            title: "PART I: MATHEMATICS",
            items: [
              "Quadratic equation, Roots of polynomial, AP, GP, HP",
              "Divisibility, Prime numbers, Binomial theorem, Inequalities",
              "Permutation and combination, Complex numbers, De Moivre’s",
              "Set theory, Functions, Relations",
              "Matrices: determinant, rank, inverse, symmetric, Eigenvalues",
              "Trigonometry: multiple angles, inverse circular, properties of triangles",
              "Coordinate geometry (2D), Plane geometry, Mensuration",
              "Calculus: Sequences, Series, Limits, Continuity, Diff (max/min), Integration (area)",
              "Ordinary and partial differential equations (up to 2nd order)"
            ]
          },
          {
            title: "PART II (SEC S): STATISTICS",
            items: [
              "Descriptive statistics (univariate, bivariate, multivariate)",
              "Standard univariate probability distributions (Binomial, Poisson, Normal)",
              "Sampling distributions, Estimation, Tests of hypotheses",
              "Simple/Multiple linear regression, ANOVA",
              "Experimental designs (CRD, RBD, LSD)",
              "Non-parametric inference, Categorical data analysis",
              "Sample surveys (simple random, stratified, cluster)"
            ]
          },
          {
            title: "PART II (SEC S): PROBABILITY",
            items: [
              "Classical probability, conditional, independence",
              "Discrete Distributions: Bernoulli, Binomial, Multinomial, Hypergeometric, Poisson, Geometric, Negative Binomial",
              "Continuous Distributions: Uniform, Exponential, Normal, Gamma, Beta",
              "Bivariate distributions (Normal), Marginal/conditional distributions, Correlation/Regression",
              "Multivariate distributions, Order statistics",
              "Weak law of large numbers, Central limit theorem",
              "Basics of Markov chains and Poisson processes"
            ]
          },
          {
            title: "PART II (SEC E): ENGINEERING",
            items: [
              "Mechanics: Forces, trusses, friction, work-energy, moment of inertia, rigid bodies, strength of materials",
              "Thermodynamics: Laws, enthalpy, entropy, free energy, internal combustion engines",
              "Electrical: DC/AC circuits, machines, control theory, network analysis",
              "Electronics: Amplifiers, transistors, op-amps, analog/digital circuits, computer architecture",
              "Engineering Drawing: Projections (point, line, object), sectional views, isometric views"
            ]
          }
        ]
      }
    ]
  },
  isi_msqms: {
    name: "ISI MSQMS",
    type: "flat",
    description: "Master of Science in Quality Management Science entrance preparation.",
    topics: [
      {
        title: "Mathematics",
        items: [
          "Algebra",
          "Calculus",
          "Trigonometry",
          "Coordinate Geometry",
          "Elementary Complex Numbers"
        ]
      },
      {
        title: "Statistics & Reasoning",
        items: [
          "Descriptive Statistics",
          "Probability and Distributions",
          "Analytical Reasoning"
        ]
      }
    ]
  },
  msc_eco: {
    name: "M.Sc. Economics Entrances",
    type: "nested",
    subOptions: [
      {
        id: "full_syllabus",
        name: "Full Syllabus",
        description: "For ISI MSQE / CUET PG / IIT JAM / GATE Economics / MSE / IIFT",
        topics: [
          {
            title: "Mathematics",
            items: [
              "Algebra",
              "Linear Algebra",
              "Calculus"
            ]
          },
          {
            title: "Statistics",
            items: [
              "Elementary probability theory",
              "Measures of central tendency, Dispersion",
              "Correlation and regression",
              "Probability distributions",
              "Standard distributions: Binomial and Normal"
            ]
          },
          {
            title: "Microeconomics",
            items: [
              "Theory of consumer behaviour, Theory of production",
              "Market structure (Perfect competition, Monopoly)",
              "Price discrimination",
              "Duopoly (Cournot and Bertrand)",
              "Elementary strategic interaction",
              "Public goods, Externalities",
              "General equilibrium, Welfare economics"
            ]
          },
          {
            title: "Macroeconomics",
            items: [
              "National income accounting",
              "Simple Keynesian Model of income determination and multiplier",
              "IS-LM Model",
              "Models of aggregate demand and aggregate supply",
              "Money, banking and inflation",
              "Phillips curve",
              "Elementary open economy macroeconomics",
              "Harrod-Domar Model, Solow Model"
            ]
          }
        ]
      }
    ]
  }
};

const MTechDataScience = () => {
  const [selectedComponent, setSelectedComponent] = useState('ds');
  const [selectedSubOption, setSelectedSubOption] = useState('cmi_rkmveri');

  const handleComponentChange = (e) => {
    const newVal = e.target.value;
    setSelectedComponent(newVal);
    if (CURRICULA[newVal].type === 'nested') {
      setSelectedSubOption(CURRICULA[newVal].subOptions[0].id);
    }
  };

  const features = [
    'Quantitative aptitude for GATE preparation',
    'Mathematics for data science programs',
    'Statistics and probability for economics',
    'Linear algebra and optimization techniques',
    'Mock tests modeled on actual exams',
    'Job Interview preparation and case studies'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const getCurrentData = () => {
    const main = CURRICULA[selectedComponent];
    if (main.type === 'nested' && main.subOptions) {
      return main.subOptions.find(o => o.id === selectedSubOption) || main.subOptions[0];
    }
    return main;
  };

  const currentComponentData = getCurrentData();

  return (
    <>
      <Helmet>
        <title>MTech Data Science MSc Economics Entrance Coaching West Bengal | Let's Study</title>
        <meta name="description" content="Expert coaching for MTech, Data Science and MSc Economics entrance exams in West Bengal. Strong mathematics foundation for interdisciplinary programs. Coaching by faculty with ISI MTech and IIT backgrounds." />
        <link rel="canonical" href="https://letsstudyms.com/courses/mtech-datascience" />
        <meta property="og:title" content="MTech Data Science MSc Economics Entrance Coaching | Let's Study" />
        <meta property="og:description" content="Expert coaching for MTech, Data Science and MSc Economics entrance exams. Strong mathematics foundation for interdisciplinary programs." />
        <meta property="og:url" content="https://letsstudyms.com/courses/mtech-datascience" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MTech Data Science MSc Economics Entrance Coaching" />
        <meta name="twitter:description" content="Expert coaching for MTech, Data Science and MSc Economics entrance exams." />
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
                <BarChart size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF] leading-[1.1]">
                M.Tech · Data Science · Economics
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Master the intersection of mathematics, data, and economics with our specialized preparation modules.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-8 tracking-tight">Interdisciplinary Excellence</h2>
                <div className="space-y-6 text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p className="text-justify hyphens-auto">
                    This specialized program caters to students aiming for interdisciplinary fields that combine
                    mathematics with technology, economics, or data science. We provide focused preparation for the
                    quantitative and mathematical components of various entrance examinations.
                  </p>
                  <p className="text-justify hyphens-auto">
                    Our curriculum is designed by experts who understand the unique requirements of these programs,
                    ensuring you're well-prepared for both entrance exams and the rigorous coursework that follows.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-[#2FA4D9] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://i.postimg.cc/BQVQVS3C/pexels_cottonbro_6153354.jpg"
                  alt="Data Science Preparation"
                  loading="lazy"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-transparent text-center transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl font-extrabold text-brand-teal dark:text-blue-400 mb-6 tracking-tight">Entrance Preparation Roadmap</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Select your target track to view the detailed curriculum and specialized module breakdown.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16">
                <div className="relative group text-left">
                  <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1">Program Track</label>
                  <div className="relative">
                    <select
                      value={selectedComponent}
                      onChange={handleComponentChange}
                      className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      {Object.entries(CURRICULA).map(([key, val]) => (
                        <option key={key} value={key}>{val.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {CURRICULA[selectedComponent].type === 'nested' ? (
                  <div className="relative group text-left">
                    <label className="block text-xs font-bold text-brand-teal/50 uppercase tracking-widest mb-2 ml-1">Specialization / Paper</label>
                    <div className="relative">
                      <select
                        value={selectedSubOption}
                        onChange={(e) => setSelectedSubOption(e.target.value)}
                        className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-brand-teal/10 dark:border-white/10 text-brand-teal dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-brand-teal/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-brand-teal/10 transition-all cursor-pointer pr-12 outline-none"
                      >
                        {CURRICULA[selectedComponent].subOptions.map(option => (
                          <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal dark:text-blue-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedComponent}-${selectedSubOption}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                {/* Header Card */}
                <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl border-t-8 border-brand-teal dark:border-blue-500 mb-10 transition-colors ring-1 ring-black/[0.03] dark:ring-white/5">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-teal/10 dark:bg-white/5 p-3 rounded-full mr-4 shadow-sm ring-1 ring-brand-teal/10">
                      <Library className="text-brand-teal dark:text-blue-400" size={32} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold text-brand-teal dark:text-blue-300">
                        {currentComponentData.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-lg italic border-l-4 border-gray-200 dark:border-white/5 pl-4 text-left">
                    {currentComponentData.description}
                  </p>
                </div>

                {/* Topics Card */}
                <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden h-full transition-colors">
                  <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                    <h4 className="text-xl font-bold text-brand-teal dark:text-blue-400 flex items-center">
                      <BookOpen size={24} className="mr-3" /> Syllabus Breakdown
                    </h4>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentComponentData.topics && currentComponentData.topics.map((category, idx) => (
                        <details
                          key={idx}
                          className="group flex flex-col bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden open:shadow-md open:bg-white dark:open:bg-slate-800 transition-all h-max"
                        >
                          <summary className="flex items-center p-5 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <div className="bg-white dark:bg-slate-900 p-2 rounded-full shadow-sm text-brand-teal dark:text-blue-400 mr-4 flex-shrink-0">
                              {idx % 2 === 0 ? <Sigma size={18} /> : <BarChart size={18} />}
                            </div>
                            <span className="font-bold text-brand-teal dark:text-blue-300 text-lg flex-1">{category.title}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 text-brand-teal dark:text-blue-400 flex-shrink-0 ml-4">
                              <ChevronDown size={20} />
                            </span>
                          </summary>

                          <ul className="space-y-3 px-16 pb-6 pt-2 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-white/5">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start text-sm text-gray-700">
                                <div className="h-1.5 w-1.5 rounded-full bg-brand-teal mt-2 mr-3 flex-shrink-0"></div>
                                <span className="leading-relaxed font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. ADDED SUGGESTED BOOKS CARD */}
                {currentComponentData.refs && currentComponentData.refs.length > 0 && (
                  <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden mt-8 transition-colors ring-1 ring-black/[0.03] dark:ring-white/5">
                    <div className="bg-gray-50/50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5 text-left">
                      <h4 className="text-xl font-bold text-brand-teal dark:text-blue-400 flex items-center">
                        <BookOpen size={24} className="mr-3" /> Suggested Books
                      </h4>
                    </div>
                    <div className="p-8">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentComponentData.refs.map((book, idx) => (
                          <li key={idx} className="flex items-start p-3 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all group ring-1 ring-transparent hover:ring-brand-teal/10">
                            <Book size={18} className="text-brand-teal dark:text-blue-400 mr-3 mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100" />
                            <span className="text-gray-700 dark:text-slate-300 font-medium text-sm text-left">{book}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-transparent dark:bg-[#020817] transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-teal dark:text-blue-400 mb-4">What You'll Get</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg">Specialized training for interdisciplinary success</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white dark:bg-slate-900/50 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all border border-transparent dark:border-white/5"
                >
                  <CheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 dark:text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-teal to-[#0d4a63]">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-6">Launch Your Interdisciplinary Career</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our specialized program and prepare for the exciting world of data science, technology, and economics.
              </p>
              <Link to="/contact">
                <Button className="group bg-white text-brand-teal hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1">
                  Get Started Today <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
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

export default MTechDataScience;

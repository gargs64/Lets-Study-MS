import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, CheckCircle, ChevronDown, BookOpen,
  Library, Sigma, BarChart, Book, ArrowRight // Added Book icon
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
        <title>MTech Data Science MSc Economics Entrance Coaching West Bengal | Let's Study MS</title>
        <meta name="description" content="Expert coaching for MTech, Data Science and MSc Economics entrance exams in West Bengal. Strong mathematics foundation for interdisciplinary programs. Coaching by faculty with ISI MTech and IIT backgrounds." />
        <link rel="canonical" href="https://letsstudyms.com/courses/mtech-datascience" />
        <meta property="og:title" content="MTech Data Science MSc Economics Entrance Coaching | Let's Study MS" />
        <meta property="og:description" content="Expert coaching for MTech, Data Science and MSc Economics entrance exams. Strong mathematics foundation for interdisciplinary programs." />
        <meta property="og:url" content="https://letsstudyms.com/courses/mtech-datascience" />
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
              <TrendingUp size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">M.Tech / Data Science / M.Sc.Economics Entrances</h1>
              <p className="text-xl">Specialized preparation for interdisciplinary entrance exams</p>
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
                  This specialized program caters to students aiming for interdisciplinary fields that combine
                  mathematics with technology, economics, or data science. We provide focused preparation for the
                  quantitative and mathematical components of various entrance examinations.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  Our curriculum is designed by experts who understand the unique requirements of these programs,
                  ensuring you're well-prepared for both entrance exams and the rigorous coursework that follows.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="Data science and economics students studying" src="https://i.postimg.cc/BQVQVS3C/pexels_cottonbro_6153354.jpg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">Entrance Preparation Roadmap</h2>
              <p className="text-gray-600 text-lg mb-8">Select your target track to view the detailed curriculum</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Program Track</label>
                  <div className="relative">
                    <select
                      value={selectedComponent}
                      onChange={handleComponentChange}
                      className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                    >
                      {Object.entries(CURRICULA).map(([key, val]) => (
                        <option key={key} value={key}>{val.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                      <ChevronDown size={24} />
                    </div>
                  </div>
                </div>

                {CURRICULA[selectedComponent].type === 'nested' ? (
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Specialization / Paper</label>
                    <div className="relative">
                      <select
                        value={selectedSubOption}
                        onChange={(e) => setSelectedSubOption(e.target.value)}
                        className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                      >
                        {CURRICULA[selectedComponent].subOptions.map(option => (
                          <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                        <ChevronDown size={24} />
                      </div>
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
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-8">
                  <div className="flex items-center mb-2">
                    <Library className="text-[#0F5A7A] mr-3" size={32} />
                    <h3 className="text-3xl font-bold text-[#0F5A7A]">
                      {currentComponentData.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg italic ml-11">
                    {currentComponentData.description}
                  </p>
                </div>

                {/* Topics Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <h4 className="text-xl font-bold text-[#0F5A7A] flex items-center">
                      <BookOpen size={24} className="mr-3" /> Syllabus Breakdown
                    </h4>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentComponentData.topics && currentComponentData.topics.map((category, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#0F5A7A]/30 hover:bg-[#0F5A7A]/5 transition-all h-full"
                        >
                          <div className="flex items-center mb-3">
                            <div className="bg-white p-2 rounded-full shadow-sm text-[#0F5A7A] mr-3 flex-shrink-0">
                              {idx % 2 === 0 ? <Sigma size={16} /> : <BarChart size={16} />}
                            </div>
                            <span className="font-bold text-[#0F5A7A] text-lg">{category.title}</span>
                          </div>

                          <ul className="space-y-2 ml-11">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start text-sm text-gray-700">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#0F5A7A] mt-1.5 mr-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. ADDED SUGGESTED BOOKS CARD */}
                {currentComponentData.refs && currentComponentData.refs.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mt-8">
                    <div className="bg-gray-50 p-6 border-b border-gray-200">
                      <h4 className="text-xl font-bold text-[#0F5A7A] flex items-center">
                        <BookOpen size={24} className="mr-3" /> Suggested Books
                      </h4>
                    </div>
                    <div className="p-8">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentComponentData.refs.map((book, idx) => (
                          <li key={idx} className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <Book size={18} className="text-[#0F5A7A] mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium text-sm">{book}</span>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">What You'll Get</h2>
              <p className="text-gray-600 text-lg">Specialized training for interdisciplinary success</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Launch Your Interdisciplinary Career</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our specialized program and prepare for the exciting world of data science, technology, and economics.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-[#0F5A7A] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-colors">
                  Get Started Today <ArrowRight className="ml-2" size={20} />
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

export default MTechDataScience;
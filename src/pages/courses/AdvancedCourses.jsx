import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, CheckCircle, ChevronDown, BookOpen,
  Library, GraduationCap, Sigma, Binary, Box, Layers, Book,
  Award, ScrollText, ArrowRight, Sparkles
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// === CDN LOADER ===
const Latex = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadKatex = () => {
      if (window.katex) {
        setIsLoaded(true);
        return;
      }
      if (!document.getElementById('katex-css')) {
        const link = document.createElement('link');
        link.id = 'katex-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
        document.head.appendChild(link);
      }
      if (!document.getElementById('katex-js')) {
        const script = document.createElement('script');
        script.id = 'katex-js';
        script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
      } else {
        const check = setInterval(() => {
          if (window.katex) {
            setIsLoaded(true);
            clearInterval(check);
          }
        }, 100);
      }
    };
    loadKatex();
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && window.katex) {
      const text = children || "";
      const parts = text.split(/(\\\[.*?\\\]|\\\(.*?\\\))/);

      const html = parts.map(part => {
        if (part.startsWith('\\(') || part.startsWith('\\[')) {
          const math = part.replace(/^\\\(|\\\)$|^\\\[|\\\]$/g, "");
          const displayMode = part.startsWith('\\[');
          try {
            return window.katex.renderToString(math, { displayMode, throwOnError: false });
          } catch (e) {
            return part;
          }
        }
        return part;
      }).join("");

      containerRef.current.innerHTML = html;
    } else if (containerRef.current) {
      containerRef.current.innerText = children;
    }
  }, [children, isLoaded]);

  return <span ref={containerRef} />;
};

// This function strips ALL LaTeX syntax for the dropdown menu
const cleanText = (text) => {
  if (!text) return "";
  return text
    // 1. Replace specific symbols manually if needed
    .replace(/\\wp/g, "P")
    // 2. Remove Math wrappers
    .replace(/\\\(|\\\)|\\\[|\\\]/g, "")
    // 3. Remove commands like \mathfrak, \mathbb, \text but keep the content inside { }
    // Example: \mathfrak{sl} becomes {sl}, which lets step 4 clean it to "sl"
    .replace(/\\[a-zA-Z]+/g, "")
    // 4. Remove all syntax characters: _, ^, {, }
    .replace(/[_^{}]/g, "")
    // 5. Collapse multiple spaces into one
    .replace(/\s+/g, " ")
    .trim();
};

// === CURRICULUM DATA ===
const CURRICULA = {
  commutative_algebra: {
    name: "Commutative Algebra",
    description: "Advanced study of rings, ideals, and modules.",
    icon: Binary,
    subOptions: [
      {
        id: "ca_1",
        name: "Commutative Algebra I",
        topics: [
          "Rings and Ideals and modules",
          "Localization",
          "Primary Decomposition"
        ],
        refs: ["M.F. Atiyah, I.G. MacDonald, 1969, Introduction to Commutative Algebra", "Matsumara Hideyuki, Commutative Ring Theory"]
      },
      {
        id: "ca_2",
        name: "Commutative Algebra II",
        topics: [
          "Noetherian and Artinian Rings",
          "Discrete Valuation Rings and Dedekind Domains",
          "Completions",
          "Dimension Theory"
        ],
        refs: ["M.F. Atiyah, I.G. MacDonald, 1969, Introduction to Commutative Algebra", "Matsumara Hideyuki, Commutative Ring Theory", "Zariski & Samuel, Commutative Algebra I & II"]
      },
      {
        id: "ca_3",
        name: "Homological Methods",
        topics: [
          "Grade of an Ideal",
          "Regular Sequences and Depth",
          "Depth and Homological Algebra",
          "Cohen–Macaulay Modules and Rings",
          "Characterizations and Properties"
        ],
        refs: ["M.F. Atiyah, I.G. MacDonald, 1969, Introduction to Commutative Algebra", "Matsumara Hideyuki, Commutative Ring Theory", "Bruns-Herzog, Cohen-Macaulay Rings"]
      }
    ]
  },
  algebraic_topology: {
    name: "Algebraic Topology",
    description: "Study of topological spaces using algebraic methods.",
    icon: Box,
    subOptions: [
      {
        id: "at_foundations",
        name: "Foundations",
        topics: [
          "Quotient Topology",
          "Identification Spaces",
          "Topological Groups",
          "Groups acting on topological spaces"
        ],
        refs: ["Edwin H. Spanier, 1966, Algebraic Topology", "Allen Hatcher, Algebraic Topology, 2003", "M.A. Armstrong, Basic Topology"]
      },
      {
        id: "at_1",
        name: "Algebraic Topology I",
        topics: [
          "Homotopy and the Fundamental Group",
          "Covering Spaces and Fibrations",
          "Polyhedra and Simplicial Theory"
        ],
        refs: ["Edwin H. Spanier, 1966, Algebraic Topology", "Allen Hatcher, Algebraic Topology, 2003"]
      },
      {
        id: "at_2",
        name: "Algebraic Topology II",
        topics: [
          "Homology",
          "Products",
          "General Cohomology Theory and Duality"
        ],
        refs: ["Edwin H. Spanier, 1966, Algebraic Topology", "Allen Hatcher, Algebraic Topology, 2003"]
      }
    ]
  },
  algebraic_geometry: {
    name: "Algebraic Geometry",
    description: "The study of zeros of multivariate polynomials.",
    icon: Layers,
    subOptions: [
      {
        id: "ag_1",
        name: "Course 1 - Varieties",
        topics: [
          "Affine Varieties",
          "Projective Varieties",
          "Morphisms",
          "Rational Map",
          "Nonsingular Varieties",
          "Nonsingular Curves",
          "Intersections in Projective Space",
          "What Is Algebraic Geometry?"
        ],
        refs: ["Robin Hartshorne, Algebraic Geometry", "Joe Harris, Algebraic Geometry", "Igor R. Shafarevich, Basic Algebraic Geometry I"]
      },
      {
        id: "ag_2",
        name: "Course 2 - Schemes",
        topics: [
          "Sheaves",
          "Schemes",
          "First Properties of Schemes",
          "Separated and proper Morphisms",
          "Sheaves of Modules",
          "Divisors",
          "Projective Morphisms",
          "Differentials",
          "Formal Schemes"
        ],
        refs: ["Robin Hartshorne, Algebraic Geometry", "Igor R. Shafarevich, Basic Algebraic Geometry II"]
      }
    ]
  },
  representation_theory: {
    name: "Representation Theory",
    description: "Study of abstract algebraic structures by representing their elements as linear transformations.",
    icon: Sigma,
    subOptions: [
      {
        id: "week_1",
        name: "Week 1 — Foundations",
        topics: [
          "Groups, algebras, modules",
          "Representations over \\(\\mathbb{C}\\)",
          "Subrepresentations, quotient representations",
          "Homomorphisms, irreducibility",
          "Core Results: Maschke’s theorem, Schur’s lemma"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_2",
        name: "Week 2 — Complete Reducibility",
        topics: [
          "Semisimple modules",
          "Isotypic components",
          "Projection onto irreducible summands",
          "Endomorphism rings of simple modules",
          "Core Result: Every finite group representation over \\(\\mathbb{C}\\) is semisimple"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_3",
        name: "Week 3 — Characters I",
        topics: [
          "Character of a representation",
          "Class functions",
          "Conjugacy classes",
          "Orthogonality relations (1)",
          "Regular representation",
          "Core Results: Number of irreducibles = number of conjugacy classes"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_4",
        name: "Week 4 — Characters II",
        topics: [
          "Matrix coefficients",
          "Orthogonality relations (full set)",
          "Decomposition of tensor products, symmetric/exterior powers",
          "Induced representations (definition)",
          "Core Method: Using characters to compute multiplicities"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_5",
        name: "Week 5 — Induced & Restricted Representations",
        topics: [
          "Frobenius reciprocity",
          "Mackey decomposition (statement)",
          "Examples: Representations of \\( D_n, S_3, S_4, Q_8, A_5 \\) via induction",
          "Regular representation of subgroups"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_6",
        name: "Week 6 — Representation Theory of \\( S_n \\)",
        topics: [
          "Young diagrams, partitions",
          "Young symmetrizers",
          "Specht modules",
          "Hook-length formula",
          "Branching rules",
          "Frobenius character formula (outline)"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_7",
        name: "Week 7 — Rep. Theory of \\( SO(2), O(2), SU(2) \\)",
        topics: [
          "Motivation for Lie groups",
          "Continuous representations",
          "Characters of compact groups",
          "Peter–Weyl theorem (statement)",
          "Example: Irreducible representation of \\( SU(2) \\) = symmetric powers of the standard 2-d representation"
        ],
        refs: ["Fulton & Harris — Representation Theory", "Serre — Linear Representations of Finite Groups"]
      },
      {
        id: "week_8",
        name: "Week 8 — Introduction to Lie Algebra Representations",
        topics: [
          "Lie algebras, homomorphisms",
          "Universal enveloping algebra",
          "Representations as modules over \\( U(\\mathfrak{g}) \\)",
          "\\( \\mathfrak{sl}_2(\\mathbb{C}) \\): structure, basis, commutation"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_9",
        name: "Week 9 — \\( \\mathfrak{sl}_2(\\mathbb{C}) \\) Representation Theory",
        topics: [
          "Weight spaces",
          "Highest weight theory (\\( \\mathfrak{sl}_2 \\) version)",
          "Classification of finite-dimensional irreps",
          "Clebsch–Gordan decomposition"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_10",
        name: "Week 10 — Root Systems & Semisimple Lie Algebras",
        topics: [
          "Cartan subalgebra",
          "Roots, weights",
          "Weyl group (definition and examples)",
          "\\( \\mathfrak{sl}_n, \\mathfrak{so}_n, \\mathfrak{sp}_n \\)",
          "Goal: Enough theory to motivate highest weights"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_11",
        name: "Week 11 — Highest Weight Theory (General Case)",
        topics: [
          "Dominant integral weights",
          "Construction of highest weight modules",
          "Weyl character formula (statement, simple proofs in low rank)"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_12",
        name: "Week 12 — Representations of Algebras",
        topics: [
          "Associative algebras",
          "Group algebra \\( \\mathbb{C}[G] \\) as semisimple algebra (Wedderburn)",
          "Jacobson radical",
          "Simple modules and matrix blocks",
          "Artin–Wedderburn for finite-dimensional semisimple algebras"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_13",
        name: "Week 13 — Fourier Analysis on Finite Groups",
        topics: [
          "Regular representation revisited",
          "Plancherel formula for finite groups",
          "Convolution algebras",
          "Applications: random walks, expanders via representation theory"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      },
      {
        id: "week_14",
        name: "Week 14 — Applications + Consolidation",
        topics: [
          "Representations in number theory (characters mod n, Dirichlet characters)",
          "Representations of quivers",
          "Compact group representation theory (\\( SO(n), SU(n) \\))",
          "Quantum groups (very light intro)",
          "Representations in physics (angular momentum)",
          "Wrap-up: How all the results fit into Maschke → characters → induction → Lie groups → semisimple algebras"
        ],
        refs: ["Fulton & Harris — Representation Theory"]
      }
    ]
  },
  differential_geometry: {
    name: "Differential Geometry",
    description: "Application of calculus to geometric problems.",
    icon: Layers,
    subOptions: [
      {
        id: "diff_geo_1",
        name: "Smooth Manifolds",
        topics: [
          "Smooth Manifolds",
          "Smooth Maps",
          "Tangent Vectors",
          "Submersions, Immersion, and Embeddings",
          "Submanifolds"
        ],
        refs: ["John M. Lee, Introduction to Smooth Manifolds, second edition"]
      }
    ]
  },
  advanced_functional: {
    name: "Advanced Functional Analysis",
    description: "Advanced topics in infinite-dimensional vector spaces.",
    icon: Sigma,
    subOptions: [
      {
        id: "afa_1",
        name: "1. Banach Algebras & \\( C^*- \\)Algebras",
        topics: [
          "Banach algebras: Basic theory",
          "Gelfand transform",
          "Characters & maximal ideal space",
          "Continuous functional calculus",
          "Examples: \\( C(X), L^1(G) \\)",
          "\\( C^*- \\)algebras:  \\( C^*- \\)identity, Representations, States",
          "GNS construction"
        ],
        refs: ["John B. Conway, A course in Functional Analysis", "John B. Conway, A course in Operator Theory", "Walter Rudin, Functional Analysis", "Jerard J.Murphy, \\( C^* - \\)Algebra and Operator Thoery"]
      },
      {
        id: "afa_2",
        name: "2. Advanced Spectral Theory",
        topics: [
          "Normal, self-adjoint, unitary operators",
          "Spectral theorem in Hilbert spaces",
          "Countable spectral measure version",
          "Borel functional calculus",
          "Applications to PDE/ODE"
        ],
        refs: ["Jerard J.Murphy, \\( C^* - \\)Algebra and Operator Thoery", "John B. Conway, A course in Functional Analysis", "Walter Rudin, Functional Analysis"]
      },
      {
        id: "afa_3",
        name: "3. Unbounded Operators",
        topics: [
          "Domains and graphs",
          "Symmetric vs self-adjoint",
          "Closed operators",
          "Stone’s theorem",
          "Examples: Differential operators, Momentum/position operators"
        ],
        refs: ["Jerard J.Murphy, \\( C^* - \\)Algebra and Operator Thoery", "John B. Conway, A course in Functional Analysis", "Walter Rudin, Functional Analysis"]
      },
      {
        id: "afa_4",
        name: "4. Semigroups of Operators",
        topics: [
          "\\( C_0 -\\)semigroups",
          "Hille–Yosida theorem",
          "Applications: Heat equation, Markov processes, Evolution equations"
        ],
        refs: ["John B. Conway, A course in Functional Analysis", "Walter Rudin, Functional Analysis"]
      },
      {
        id: "afa_5",
        name: "5. Distribution Theory (Weak Version)",
        topics: [
          "Test functions and distributions",
          "Convolution",
          "Fourier transform on \\( S^1 \\)",
          "Sobolev spaces \\( H_s \\)",
          "Weak derivatives"
        ],
        refs: ["Walter Rudin, Functional Analysis", "Loukas Grafakos, Modern Fourier Analysis"]
      },
      {
        id: "afa_6",
        name: "6. Advanced Banach Space Theory",
        topics: [
          "Basis in Banach spaces",
          "Uniform convexity & Clarkson inequalities",
          "James theorem",
          "Reflexivity criteria",
          "Weak compactness"
        ],
        refs: ["John B. Conway, A course in Funtional Analysis", "Walter Rudin, Funtional Analysis", "Joseph Diestel, Sequences adn Serier in Banach Space", "Marian Fabian et al, Banach Space Thoery", "___, Funtional Analysis and Infinite-Dimensional Geometry"]
      },
      {
        id: "afa_7",
        name: "7. Applications & Special Topics",
        topics: [
          "Fredholm operators & index",
          "Krein–Milman theorem",
          "Riesz–Markov–Kakutani representation",
          "Duality of \\( L^p \\) spaces",
          "Ergodic theorems (Mean, Pointwise)",
          "Nonlinear functional analysis"
        ],
        refs: ["John B. Conway, A course in Funtional Analysis", "Walter Rudin, Funtional Analysis"]
      }
    ]
  },
  riemann_surfaces: {
    name: "Riemann Surfaces",
    description: "Complex analysis on manifolds.",
    icon: Box,
    subOptions: [
      {
        id: "rs_1",
        name: "Riemann Surfaces",
        topics: [
          "Covering Spaces",
          "Compact Riemann Surfaces"
        ],
        refs: ["Otto Forster, 1937, Lectures On Riemann Surfaces", "H. M. Farkas, I. Kra, Riemann Surfaces"]
      }
    ]
  },
  advanced_complex: {
    name: "Advanced Complex Analysis",
    description: "Deeper dive into holomorphic functions.",
    icon: Sigma,
    subOptions: [
      {
        id: "aca_1",
        name: "1. Advanced Topics in Entire Functions",
        topics: [
          "Order & type of entire functions",
          "Hadamard factorization theorem",
          "Canonical products",
          "Jensen’s formula",
          "Poisson–Jensen"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis"]
      },
      {
        id: "aca_2",
        name: "2. Analytic Continuation",
        topics: [
          "Germs of holomorphic functions",
          "Uniqueness",
          "Monodromy theorem",
          "Schwarz reflection principle",
          "Natural boundaries"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis"]
      },
      {
        id: "aca_3",
        name: "3. Harmonic & Subharmonic Functions",
        topics: [
          "Poisson kernel",
          "Dirichlet problem on disk",
          "Harnack’s inequality",
          "Maximum principle (subharmonic case)"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis"]
      },
      {
        id: "aca_4",
        name: "4. Normal Families",
        topics: [
          "Montel’s theorem",
          "Bloch’s theorem",
          "Normal convergence",
          "Vitali & Weierstrass theorems",
          "Marty’s criterion"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis"]
      },
      {
        id: "aca_5",
        name: "5. Conformal Mapping (Advanced)",
        topics: [
          "Riemann Mapping Theorem",
          "Proof via normal families",
          "Applications to PDEs",
          "Extremal problems (Koebe distortion theorem)"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis"]
      },
      {
        id: "aca_6",
        name: "6. Elliptic Functions",
        topics: [
          "Lattices",
          "Weierstrass \\( \\wp \\)-function",
          "Doubly periodic functions",
          "Modular invariants (j-invariant intro)"
        ],
        refs: ["Elias M. Stein & Rami Shakarchi, Complex Analysis", "Walter Rudin, Real and Complex Analysis", "Otto Forster, Lectures on Riemann Surfaces"]
      },
      {
        id: "aca_7",
        name: "7. Riemann Surfaces (Light Introduction)",
        topics: [
          "Algebraic functions as branched covers",
          "Topology of Riemann surfaces (genus, cuts)",
          "Holomorphic maps between surfaces",
          "Universal covering (statement)"
        ],
        refs: ["John B. Conway, Functions of one complex variable I", "Otto Forster, Lectures on Riemann Surfaces"]
      },
      {
        id: "aca_8",
        name: "8. Geometric Function Theory",
        topics: [
          "Schwarz–Pick theorem",
          "Univalent functions",
          "Bieberbach conjecture (statement)",
          "Loewner chains (very brief)"
        ],
        refs: ["John B. Conway, Functions of one complex variable I & II", "Stein-Shakarchi, Complex Analysis"]
      },
      {
        id: "aca_9",
        name: "9. Additional Special Topics",
        topics: [
          "Hardy spaces \\( H^p \\)",
          "Bergman spaces",
          "Zeta function and analytic continuation",
          "Mittag-Leffler theorem",
          "Runge’s theorem",
          "Approximation theorems (Mergelyan)"
        ],
        refs: ["Stein-Shakarchi, Complex Analysis", "John B. Conway, Functions of one complex variable I", "Walter Rudin, Real and Complex Analysis"]
      }
    ]
  }
};

const AdvancedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState('commutative_algebra');
  const [selectedModule, setSelectedModule] = useState(CURRICULA.commutative_algebra.subOptions[0].id);

  const handleCourseChange = (e) => {
    const newVal = e.target.value;
    setSelectedCourse(newVal);
    setSelectedModule(CURRICULA[newVal].subOptions[0].id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const currentCourse = CURRICULA[selectedCourse];
  const currentModuleData = currentCourse.subOptions.find(m => m.id === selectedModule) || currentCourse.subOptions[0];

  return (
    <>
      <Helmet>
        <title>Advanced Mathematics Courses West Bengal | Research Level Coaching | Let's Study</title>
        <meta name="description" content="Advanced and research-level mathematics courses in West Bengal. Specialized topics including Algebraic Topology, Differential Geometry, Functional Analysis, Measure Theory and Representation Theory. For serious mathematics students targeting top institutes." />
        <link rel="canonical" href="https://letsstudyms.com/courses/advanced-courses" />
        <meta property="og:title" content="Advanced Mathematics Courses | Research Level | Let's Study" />
        <meta property="og:description" content="Advanced and research-level mathematics courses including Algebraic Topology, Differential Geometry, Functional Analysis, and Representation Theory." />
        <meta property="og:url" content="https://letsstudyms.com/courses/advanced-courses" />
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
                <Sigma size={40} className="text-[#78E2FF]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Advanced Courses
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Specialized research-grade mathematics for aspirants targeting the highest echelons of academia.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-8 tracking-tight">Advanced Mastery</h2>
                <div className="space-y-6 text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p className="text-justify hyphens-auto">
                    Our Advanced Courses program is designed for mathematics enthusiasts who want to delve deeper
                    into specialized research topics. We provide the mathematical rigor required for doctoral
                    academic excellence and competitive research positions.
                  </p>
                  <p className="text-justify hyphens-auto">
                    From Algebraic Topology to Representation Theory, our curriculum bridges the gap between 
                    postgraduate study and independent research, guided by expert faculty mentors.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5A7A] to-[#2FA4D9] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1509228468518-180dd4821811?auto=format&fit=crop&q=80&w=1000"
                  alt="Advanced Mathematics Research"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50/50 dark:bg-[#020817]/50 text-center transition-colors">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-6 tracking-tight">Advanced Research Tracks</h2>
              <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Explore our deep-dive modules across core research domains in pure and applied mathematics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16">
                {/* Course Selector */}
                <div className="relative group text-left">
                  <label className="block text-xs font-bold text-[#0F5A7A]/50 uppercase tracking-widest mb-2 ml-1">Specialization</label>
                  <div className="relative">
                    <select
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-[#0F5A7A]/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-[#0F5A7A]/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      {Object.entries(CURRICULA).map(([key, data]) => (
                        <option key={key} value={key}>{data.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Module Selector */}
                <div className="relative group text-left">
                  <label className="block text-xs font-bold text-[#0F5A7A]/50 uppercase tracking-widest mb-2 ml-1">Advanced Module</label>
                  <div className="relative">
                    <select
                      value={selectedModule}
                      onChange={(e) => setSelectedModule(e.target.value)}
                      className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-[#0F5A7A]/10 dark:border-white/10 text-[#0F5A7A] dark:text-blue-300 font-bold py-3.5 px-8 rounded-2xl shadow-sm hover:border-[#0F5A7A]/30 dark:hover:border-blue-500/30 focus:ring-4 focus:ring-[#0F5A7A]/10 transition-all cursor-pointer pr-12 outline-none"
                    >
                      {currentCourse.subOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {cleanText(option.name)}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F5A7A] dark:text-blue-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCourse}-${selectedModule}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                {/* Header Card */}
                <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] dark:border-blue-500 mb-8 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0F5A7A]/10 dark:bg-white/5 p-3 rounded-full mr-4">
                      <currentCourse.icon className="text-[#0F5A7A] dark:text-blue-400" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#0F5A7A] dark:text-blue-300">
                        <Latex>{currentCourse.name}</Latex>
                      </h3>
                      <span className="inline-block bg-[#0F5A7A] dark:bg-blue-600 text-white text-xs px-2 py-1 rounded mt-1">
                        <Latex>{currentModuleData.name}</Latex>
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-lg italic border-l-4 border-gray-200 dark:border-white/5 pl-4">
                    {currentCourse.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Topics Card */}
                  <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden h-full transition-colors">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                      <h4 className="text-xl font-bold text-[#0F5A7A] dark:text-blue-400 flex items-center">
                        <BookOpen size={24} className="mr-3" /> Syllabus & Topics
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4 cursor-default">
                        {currentModuleData.topics.map((topic, idx) => (
                          <details key={idx} className="group bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden open:shadow-md transition-all duration-300">
                            <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-800 dark:text-slate-200 list-none shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                              <div className="flex items-center">
                                <CheckCircle size={20} className="text-[#0F5A7A] dark:text-blue-400 mr-4 flex-shrink-0" />
                                <span className="text-[#0F5A7A] dark:text-blue-300 text-lg tracking-wide"><Latex>{topic}</Latex></span>
                              </div>
                              <span className="transition-transform duration-300 group-open:rotate-180 text-[#0F5A7A] dark:text-blue-400 flex-shrink-0 ml-4">
                                <ChevronDown size={20} />
                              </span>
                            </summary>
                            <div className="px-14 pb-5 pt-3 text-sm text-gray-600 dark:text-slate-400 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-white/5 leading-relaxed">
                                Modules cover the essential theoretical frameworks, diverse problem-solving methodologies, and extensive previous year question analysis for <span className="font-semibold tracking-wide text-gray-800 dark:text-slate-200"><Latex>{topic}</Latex></span>. Designed to ensure complete conceptual clarity and examination readiness.
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* References Card */}
                  <div className="bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden h-full transition-colors">
                    <div className="bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-200 dark:border-white/5">
                      <h4 className="text-xl font-bold text-[#0F5A7A] dark:text-blue-400 flex items-center">
                        <Library size={24} className="mr-3" /> Recommended Readings
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-3">
                        {currentModuleData.refs.map((ref, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 transition-colors">
                            <Book size={18} className="text-[#0F5A7A] dark:text-blue-400 mr-3" />
                            <span className="text-gray-800 dark:text-slate-300 font-medium"><Latex>{ref}</Latex></span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800/30 text-sm text-yellow-800 dark:text-yellow-200 transition-colors">
                        <p className="font-bold mb-1 flex items-center"><GraduationCap size={16} className="mr-2" /> Research Tip:</p>
                        "Reading original texts and working through proofs is essential for mastering these advanced topics."
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AdvancedCourses;
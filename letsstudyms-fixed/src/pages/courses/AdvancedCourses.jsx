import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, CheckCircle, ChevronDown, BookOpen,
  Library, GraduationCap, Sigma, Binary, Box, Layers, Book
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
        <title>Advanced Mathematics Courses West Bengal | Research Level Coaching | Let's Study MS</title>
        <meta name="description" content="Advanced and research-level mathematics courses in West Bengal. Specialized topics including Algebraic Topology, Differential Geometry, Functional Analysis, Measure Theory and Representation Theory. For serious mathematics students targeting top institutes." />
        <link rel="canonical" href="https://letsstudyms.com/courses/advanced-courses" />
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
              <Target size={64} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">Advanced Courses</h1>
              <p className="text-xl">Specialized topics for research and competitive excellence</p>
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
                  Our Advanced Courses program is designed for mathematics enthusiasts who want to delve deeper
                  into specialized topics. These courses are perfect for students preparing for research careers,
                  competitive examinations, or those simply passionate about advanced mathematics.
                </p>
                <p className="text-justify hyphens-auto text-gray-700 text-lg mb-6">
                  Led by faculty with active research interests, these courses provide exposure to cutting-edge
                  mathematical concepts and methodologies, preparing you for the highest levels of mathematical inquiry.
                </p>
              </motion.div>
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img className="w-full h-96 rounded-xl shadow-2xl object-cover" alt="Advanced mathematics students" src="https://images.unsplash.com/photo-1581090124321-d19ad6d7cd5a" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Explorer */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5A7A] mb-4">Advanced Curriculum Explorer</h2>
              <p className="text-gray-600 text-lg mb-8">Select a specialized topic to view detailed modules and references</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {/* Course Selector */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Specialization</label>
                  <div className="relative">
                    <select
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                    >
                      {Object.entries(CURRICULA).map(([key, data]) => (
                        <option key={key} value={key}>{data.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                      <ChevronDown size={24} />
                    </div>
                  </div>
                </div>

                {/* Module Selector */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Module</label>
                  <div className="relative">
                    <select
                      value={selectedModule}
                      onChange={(e) => setSelectedModule(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-[#0F5A7A] text-[#0F5A7A] font-bold text-lg py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F5A7A]/20 cursor-pointer transition-all"
                    >
                      {currentCourse.subOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {/* We clean the text for dropdowns so it shows "sl2(C)" instead of math code */}
                          {cleanText(option.name)}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0F5A7A]">
                      <ChevronDown size={24} />
                    </div>
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
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0F5A7A] mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0F5A7A]/10 p-3 rounded-full mr-4">
                      <currentCourse.icon className="text-[#0F5A7A]" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#0F5A7A]">
                        <Latex>{currentCourse.name}</Latex>
                      </h3>
                      <span className="inline-block bg-[#0F5A7A] text-white text-xs px-2 py-1 rounded mt-1">
                        <Latex>{currentModuleData.name}</Latex>
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg italic border-l-4 border-gray-200 pl-4">
                    {currentCourse.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Topics Card */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                    <div className="bg-gray-50 p-6 border-b border-gray-200">
                      <h4 className="text-xl font-bold text-[#0F5A7A] flex items-center">
                        <BookOpen size={24} className="mr-3" /> Syllabus & Topics
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {currentModuleData.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle size={18} className="text-[#0F5A7A] mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">
                              <Latex>{topic}</Latex>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* References Card */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                    <div className="bg-gray-50 p-6 border-b border-gray-200">
                      <h4 className="text-xl font-bold text-[#0F5A7A] flex items-center">
                        <Library size={24} className="mr-3" /> Recommended Readings
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-3">
                        {currentModuleData.refs.map((ref, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <Book size={18} className="text-[#0F5A7A] mr-3" />
                            <span className="text-gray-800 font-medium"><Latex>{ref}</Latex></span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800">
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
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, TrendingUp,
  GraduationCap, Brain, Trophy, Target, Quote, ExternalLink, ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const { hash } = useLocation();

  // FIX INTERNAL ANCHOR SCROLLING
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [hash]);

  // UPDATED: Added 'link' and 'isExternal' properties
  const whyJoinUsItems = [
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from experienced mathematicians and educators with proven track records in competitive exam preparation.',
      link: '#team', // Scroll to Team section
      isExternal: false
    },
    {
      icon: Target,
      title: 'Comprehensive Curriculum',
      description: 'Our structured courses cover all topics systematically, ensuring no stone is left unturned in your preparation.',
      link: '/courses/foundation-batch', // Link to Foundation Page
      isExternal: false
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Join Hundreds of successful students who have achieved their academic goals through our guidance.',
      link: '/testimonials',  // Study Mterial
      isExternal: false  
    },
    {
      icon: Users,
      title: 'Mock Interview',
      description: 'Helping students practice and refine their interviewing skills in a realistic, low-pressure environment.',
      link: 'https://www.youtube.com/playlist?list=PLsXv7MTc8v3ZKulf2ng-4jwVEkxvPOjYu', 
      isExternal: true
    }
  ];

  const courses = [
    {
      title: 'Foundation Batch',
      description: 'Build strong mathematical fundamentals for undergraduate studies',
      icon: BookOpen,
      color: '#3B82F6', // Vibrant Blue
      path: '/courses/foundation-batch'
    },
    {
      title: 'Semester Batch',
      description: 'Excel in your semester exams with targeted preparation',
      icon: GraduationCap,
      color: '#10B981', // Vibrant Green
      path: '/courses/semester-batch'
    },
    {
      title: 'M.Sc Mathematics Entrances',
      description: 'Master entrance exams for top mathematics programs',
      icon: Brain,
      color: '#8B5CF6', // Vibrant Purple
      path: '/courses/msc-mathematics'
    },
    {
      title: 'M.Tech/Data Science/M.Sc Economics',
      description: 'Specialized preparation for interdisciplinary programs',
      icon: TrendingUp,
      color: '#F59E0B', // Vibrant Orange
      path: '/courses/mtech-datascience'
    },
    {
      title: 'Engineering Mathematics',
      description: 'Comprehensive engineering mathematics for all branches',
      icon: Award,
      color: '#EF4444', // Vibrant Red
      path: '/courses/engineering-mathematics'
    },
    {
      title: 'PhD Entrances',
      description: 'Advanced preparation for doctoral program admissions',
      icon: Trophy,
      color: '#14B8A6', // Vibrant Teal
      path: '/courses/phd-entrances'
    },
    {
      title: 'Advanced Courses',
      description: 'Specialized topics for research and competitive excellence',
      icon: Target,
      color: '#EAB308', // Vibrant Yellow/Gold
      path: '/courses/advanced-courses'
    },
    {
      title: 'Personalized Coaching',
      description: 'One-on-one mentorship tailored to your specific needs',
      icon: Users,
      color: '#6366F1', // Vibrant Indigo
      path: '/contact'
    }

  ];

  const testimonials = [
    {
      name: 'Sourajyoti Maiti',
      achievement: "B.Sc St.Xavier's Kolkata, Cracked M.Sc RKMVERI",
      current: 'Currently in University of Connecticut (PhD)',
      quote: 'The rigorous training and conceptual clarity I gained here were instrumental in my journey to a PhD program in the USA.',
      image: 'https://i.postimg.cc/HxZcnMJS/Suryajyoti_maiti.jpg'
    },
    {
      name: 'Divesh Bhalotia',
      achievement: 'IOMA, ISI M.Math (2025), JAM (2025) AIR 37, HRI (2025)',
      current: 'Currently in HRI',
      quote: 'Securing AIR 37 in JAM was possible only due to the deep analytical approach taught here.',
      image: 'https://i.postimg.cc/VNtkmXfN/Divesh_Bhalotia.jpg'
    },
    {
      name: 'Samiul Islam',
      achievement: 'M.Sc Calcutta University, Cracked: ISI M.Tech (2022)',
      current: 'GenAI Engineer at BizAcuity Solution Pvt.Ltd.',
      quote: 'Strong mathematical foundations helped me transition into High-End AI Engineering effortlessly.',
      image: 'https://i.postimg.cc/T34sv5Kh/Samuel-islam.jpg'
    },
    {
      name: 'Chandreyee Banerjee',
      achievement: "B.Sc St. Xavier's Kolkata, Cracked: IISER Kolkata (2025)",
      current: 'Currently in ISI Bangalore',
      quote: 'The exposure to higher-level mathematics prepared me for the most prestigious institutes in India.',
      image: 'https://i.postimg.cc/90m9DLz5/chandreyee_banerjee.jpg'
    }
  ];

  const teamMembers = [
    {
      name: 'Debabrata Krishna',
      highlight: 'IIT Kanpur | JAM AIR: 104',
      details: [
        'Graduation: University of Gour Banga (Malda College)',
        'Post Graduation: IIT Kanpur',
        'JAM AIR: 104 (2021)',
        'CSIR-NET AIR: 35 (2024)'
      ]
    },
    {
      name: 'Sourish',
      highlight: 'ISI Kolkata | CSIR-NET AIR: 33',
      details: [
        'Graduation: Jadavpur University',
        'Post Graduation: ISI Kolkata (M.MATH)',
        'CSIR-NET AIR: 33 (June 2024)',
        'Cracked PhD: TIFR Mumbai, HRI, IIT Madras, University of Tokyo'
      ]
    },
    {
      name: 'Urmi Daniella',
      highlight: 'IISC Bangalore | CSIR-NET AIR: 6',
      details: [
        'Graduation: IISC Bangalore',
        'Post Graduation: IISC Bangalore',
        'CSIR-NET AIR: 20 (2018), 6 (2022), 15 (2024)'
      ]
    },
    {
      name: 'Jeet',
      highlight: 'ISI Kolkata | JAM AIR: 597',
      details: [
        "Graduation: St. Xavier's College (Autonomous), Kolkata",
        'Post Graduation: ISI Kolkata (M.Math)',
        'JAM AIR: 597 (2023)'
      ]
    },
    {
      name: 'Deepta',
      highlight: 'IISER KOLKATA | GATE AIR: 250',
      details: [
        'Graduation: Jadavpur University',
        'Post Graduation: IISER KOLKATA',
        'JAM AIR: 300 (2023)',
        'GATE AIR: 250 (2025)'
      ]
    },
    {
      name: 'Shleena',
      highlight: 'MSc Jadavpur University | IISER Bhopal',
      details: [
        "Graduation: BSc St Xavier's College Kolkata",
        'Post Graduation: MSc Jadavpur University',
        'Cracked IISER Bhopal IPhD'
      ]
    },
    {
      name: 'Avik',
      highlight: 'PhD: IIT Bombay',
      details: [
        'Graduation: Scottish Church College',
        'Post Graduation: Jadavpur University',
        'PhD: IIT Bombay'
      ]
    },
    {
      name: 'Aritra',
      highlight: 'Data Science (RKMVERI)',
      details: [
        'Graduation: RKM Narendrapur',
        'Post Graduation: (Data Science) RKMVERI',
        'Currently: Assistant Manager - Analytics at EXL Services'
      ]
    },
    {
      name: 'Samiul',
      highlight: 'ISI MTech (2022)',
      details: [
        'MSC: Calcutta University',
        'Post Graduation: ISI MTech (2022)',
        'Currently: GenAI Engineer at BizAcuity Solutions Pvt. Ltd.'
      ]
    },
    {
      name: 'Rahul',
      highlight: 'CSIR-NET AIR: 184',
      details: [
        'Graduation: IISER Kolkata',
        'Post Graduation: IISER Kolkata',
        'CSIR-NET AIR: 184 (June, 2024)'
      ]
    },
    {
      name: 'Arijit',
      highlight: 'IISER Mohali',
      details: [
        'Graduation: Ramakrishna Mission Vidyamandir',
        'IPhD, IISER Mohali',
        'JAM AIR: 78 (2023)',
        'NBHM Doctoral Fellowship (2025)'
      ]
    },
    {
      name: 'Abir Rangan',
      highlight: 'ISI Kolkata | GATE AIR: 25',
      details: [
        'Graduation: Ramakrishna mission residential college, Narendrapur',
        'Post Graduation: ISI Kolkata (M.Math)',
        'GATE AIR: 25 (2024)',
        'CSIR-NET AIR: 95 (2024)'
      ]
    }

  ];

  // Logic for the New Layout
  const leftSideMembers = teamMembers.slice(0, 3);
  const rightSideMembers = teamMembers.slice(3, 6);
  const bottomSideMembers = teamMembers.slice(6);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const MemberCard = ({ member }) => (
    <div className="group bg-white dark:bg-slate-900/60 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 ring-1 ring-black/[0.03] dark:ring-white/[0.05] cursor-default relative overflow-hidden">
      {/* Subtle hover background decoration */}
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-[#0F5A7A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

      <div className="flex items-center space-x-5 relative z-10">
        <div className="bg-gradient-to-br from-[#0F5A7A]/10 to-[#0F5A7A]/5 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0F5A7A] transition-all duration-300 ring-1 ring-[#0F5A7A]/10 group-hover:ring-[#0F5A7A]">
          <Users className="text-[#0F5A7A] group-hover:text-white transition-colors duration-300" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 dark:text-slate-100 text-lg group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
          <p className="text-[#0F5A7A] dark:text-blue-300/80 text-xs font-semibold uppercase tracking-wide mt-1">{member.highlight}</p>
        </div>
      </div>
      <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out relative z-10">
        <div className="pt-5 mt-5 border-t border-gray-100 dark:border-white/5 text-sm text-gray-600 dark:text-gray-400 space-y-3 font-medium">
          {member.details.map((line, i) => (
            <div key={i} className="flex items-start">
              <span className="text-[#0F5A7A]/50 dark:text-blue-400/50 mr-3 mt-0.5">•</span>
              <p className="leading-snug">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Let's Study | Top Mathematical Institute in West Bengal for Higher Education</title>
        <meta name="description" content="Let's Study is one of the top mathematical institutes in West Bengal for higher education. Coaching for IIT JAM, MSc Entrances, TIFR, NBHM, ISI MMath and PhD entrances. Faculty from IIT Kanpur, ISI Kolkata, IISc Bangalore. Join hundreds of successful students." />
        <meta name="keywords" content="mathematical institutes in west bengal, mathematics institute west bengal higher education, mathematics coaching West Bengal, college maths tutor Kolkata, IIT JAM coaching, BSc mathematics coaching, MSc entrance preparation West Bengal, higher education maths West Bengal, best maths coaching kolkata" />
        <link rel="canonical" href="https://letsstudyms.com/" />
        <meta property="og:title" content="Let's Study | Top Mathematical Institute in West Bengal for Higher Education" />
        <meta property="og:description" content="One of West Bengal's top mathematical institutes for higher education. Expert faculty, proven results, 100s of successful students at IITs, ISI, TIFR, HRI and global universities." />
        <meta property="og:url" content="https://letsstudyms.com/" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://letsstudyms.com/"},{"@type":"ListItem","position":2,"name":"Courses","item":"https://letsstudyms.com/#courses"},{"@type":"ListItem","position":3,"name":"Contact","item":"https://letsstudyms.com/contact"}]})}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#020817] dark:to-[#0A1A23]">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-[#091C25] dark:bg-black text-white py-24 md:py-32 overflow-hidden">
          {/* Animated Mesh Gradient Background equivalent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5A7A] via-[#103D51] to-[#091C25] z-0"></div>
          
          {/* Subtly blurred glowing orb in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2FA4D9] rounded-full blur-[150px] opacity-20 z-0"></div>

          {/* Floating Math Symbols */}
          <motion.div animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute top-20 left-10 text-6xl text-white/10 font-serif select-none z-0">∫</motion.div>
          <motion.div animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute bottom-20 right-20 text-8xl text-white/10 font-serif select-none z-0">∑</motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-40 right-1/4 text-7xl text-white/10 font-serif select-none z-0">∞</motion.div>
          <motion.div animate={{ x: [-30, 30, -30], y: [-10, 10, -10] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-40 left-1/4 text-5xl text-white/10 font-serif select-none z-0">π</motion.div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
              <img src="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" alt="Logo" className="h-32 w-auto mx-auto mb-8 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 transition-transform duration-500" />
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                  Let's Study
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-blue-50/90">School of Mathematics</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="max-w-3xl mx-auto"
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Quote className="text-blue-300/40 w-12 h-12 mb-6 mx-auto" />
                <p className="text-xl md:text-2xl italic leading-relaxed text-blue-50">
                  "Mathematics is not about numbers, equations, or algorithms: <br className="hidden md:block" />
                  it is about understanding."
                </p>
                <div className="mt-8 flex items-center justify-center space-x-4">
                  <div className="h-px w-12 bg-blue-300/30"></div>
                  <span className="text-sm font-bold tracking-widest uppercase text-blue-300">William Paul Thurston</span>
                  <div className="h-px w-12 bg-blue-300/30"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-gray-50 dark:bg-[#020817]/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#0F5A7A] dark:text-blue-400 mb-12">Why Join Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {whyJoinUsItems.map((item, index) => (
        <motion.div
          key={index}
          {...fadeInUp}
          className="bg-gradient-to-br from-[#0F5A7A] to-[#103D51] rounded-3xl shadow-[0_8px_30px_rgba(15,90,122,0.15)] overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,90,122,0.3)] ring-1 ring-white/10 group relative"
        >
          {/* Subtle light sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          
          {/* LOGIC: Check if it has a link, then check if external or internal */}
          {item.link ? (
            item.isExternal ? (
              // 1. External Link (YouTube) - Whole Card Clickable
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-8 h-full text-white cursor-pointer relative z-10"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors duration-300 ring-1 ring-white/10">
                    <item.icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <ExternalLink size={20} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{item.title}</h3>
                <p className="text-blue-50/80 leading-relaxed text-sm font-medium">{item.description}</p>
              </a>
            ) : (
              // 2. Internal Link (Foundation/Team) - Whole Card Clickable
              <Link 
                to={item.link} 
                onClick={() => {
                  if(item.link.startsWith('#')) {
                    const id = item.link.replace('#', '');
                    const el = document.getElementById(id);
                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
                className="block p-8 h-full text-white cursor-pointer relative z-10"
              >
                <div className="bg-white/10 p-4 inline-block rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-300 ring-1 ring-white/10">
                  <item.icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{item.title}</h3>
                <p className="text-blue-50/80 leading-relaxed text-sm font-medium">{item.description}</p>
              </Link>
            )
          ) : (
            // 3. No Link (Proven Results) - Just a div
            <div className="block p-8 h-full text-white cursor-default relative z-10">
                <div className="bg-white/10 p-4 inline-block rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-300 ring-1 ring-white/10">
                  <item.icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
              <h3 className="text-xl font-bold mb-3 tracking-wide">{item.title}</h3>
              <p className="text-blue-50/80 leading-relaxed text-sm font-medium">{item.description}</p>
            </div>
          )}
        </motion.div>
                ))}
              </div>
            </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-white dark:bg-[#020817] scroll-mt-20 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#0F5A7A] dark:text-blue-400 mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <motion.div key={index} {...fadeInUp}>
                  <Link to={course.path} onClick={() => window.scrollTo(0, 0)} className="block h-full group">
                    <div className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ring-1 ring-black/[0.03] dark:ring-white/[0.05] h-full relative overflow-hidden group/card">
                      {/* Vibrant background glow on hover */}
                      <div 
                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl"
                        style={{ backgroundColor: course.color }}
                      ></div>
                      
                      <div 
                        className="inline-flex items-center justify-center p-4 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm ring-1 ring-black/5" 
                        style={{ backgroundColor: course.color + '15', color: course.color }}
                      >
                        <course.icon size={32} strokeWidth={2.5} />
                      </div>
                      
                      <h3 className="text-xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400 transition-colors tracking-tight">
                        {course.title}
                      </h3>
                      <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                        {course.description}
                      </p>
                      
                      {/* Arrow link indicator */}
                      <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" style={{ color: course.color }}>
                        Explore Course <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="py-20 bg-white dark:bg-[#020817] scroll-mt-20 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center text-[#0F5A7A] dark:text-blue-400 mb-16">Success Stories</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((student, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                >
                  <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)} className="block h-full">
                    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 flex flex-col items-center text-center group hover:border-[#0F5A7A] dark:hover:border-blue-400 transition-all h-full">
                      <div className="relative -mt-16 mb-4">
                        <img src={student.image} alt={student.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">{student.name}</h3>
                      <p className="text-[#0F5A7A] dark:text-blue-300/80 text-[11px] font-bold uppercase tracking-tight mt-1">{student.achievement}</p>
                      <p className="text-gray-400 dark:text-slate-500 text-[10px] mb-4">{student.current}</p>
                      <div className="relative italic text-gray-600 dark:text-slate-400 text-sm">
                        <Quote size={12} className="inline mr-1 opacity-20" /> {student.quote}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="mt-12 text-center">
              <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0F5A7A] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#0d4a63] transition-colors"
                >
                  Read Success Stories
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-20 bg-gray-50 dark:bg-[#020817]/50 scroll-mt-20 overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">

            <motion.h2
              {...fadeInUp}
              className="text-4xl font-bold text-center text-[#0F5A7A] dark:text-blue-400 mb-16 drop-shadow-sm"
            >
              Our Team of Mentors
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
              <div className="space-y-6">
                {leftSideMembers.map((member, index) => (
                  <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MemberCard member={member} />
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center items-center py-6 lg:py-0">
                <img
                  src="https://i.postimg.cc/8C37fr0X/undraw-educator-6dgp-Photoroom-(1).png"
                  alt="Expert Faculty Illustration"
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>

              <div className="space-y-6">
                {rightSideMembers.map((member, index) => (
                  <motion.div
                    key={`right-${index}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MemberCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bottomSideMembers.map((member, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MemberCard member={member} />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Final Year Target Badge */}
        <div className="mt-12 mb-24 bg-gradient-to-r from-[#0d4a63] to-[#0F5A7A] dark:from-slate-900 dark:to-[#0F5A7A]/50 p-8 text-white text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <Award size={40} className="text-yellow-400" />
          </div>
          <p className="text-white/90 dark:text-blue-100 px-4 md:px-12 leading-relaxed">
            You will never prepare alone - at every step, an exam expert stands with you, <br />
            guiding, correcting, and strengthening your journey until success.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
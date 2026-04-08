import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Library,
  GraduationCap,
  TrendingUp,
  Settings,
  Scroll,
  Zap,
  Download,
  Lock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const { toast } = useToast();

  const handlePlaceholderClick = (sectionName) => {
    toast({
      title: `📂 ${sectionName}`,
      description: "Material is currently being compiled and will be uploaded shortly!",
      variant: "default",
    });
  };

  const materialSections = [
    {
      id: 1,
      title: 'Foundation Batch',
      description: 'Core concepts, basic algebra, and fundamental calculus notes.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: 'Semester Batch',
      description: 'University specific modules, previous year papers, and semester notes.',
      icon: Library,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 3,
      title: 'M.Sc Mathematics Entrances',
      description: 'Study kits for JAM, TIFR, NBHM, and ISI entrances.',
      icon: GraduationCap,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 4,
      title: 'M.Tech / Data Science / Economics',
      description: 'Statistics, probability, and econometrics resources.',
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 5,
      title: 'Engineering Mathematics',
      description: 'GATE syllabus coverage and engineering specific math topics.',
      icon: Settings,
      color: 'bg-red-100 text-red-600',
    },
    {
      id: 6,
      title: 'PhD Entrances',
      description: 'Advanced research topics, interview prep materials, and thesis guides.',
      icon: Scroll,
      color: 'bg-teal-100 text-teal-600',
    },
    {
      id: 7,
      title: 'Advance Courses',
      description: 'Specialized topics for research scholars and competitive excellence.',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Study Material - Let's Study School of Mathematics</title>
        <meta name="description" content="Access free study materials, notes, and previous year questions for JEE, JAM, NET, and University Exams." />
        <link rel="canonical" href="https://letsstudyms.com/login" />
        <meta property="og:title" content="Free Study Material | Let's Study - School of Mathematics" />
        <meta property="og:description" content="Access free study materials, notes, and previous year questions for JAM, NET, GATE and University Exams." />
        <meta property="og:url" content="https://letsstudyms.com/login" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      {/* Header */}
      <Header />

      <div className="min-h-screen bg-[#f8fcfd] dark:bg-[#020817] pb-24 transition-colors duration-300">
        
        {/* Mini-Hero Banner */}
        <div className="relative bg-[#091C25] py-20 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5A7A] via-[#103D51] to-[#091C25] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4D9] rounded-full blur-[120px] opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Study Repository
              </h1>
              <p className="text-blue-50/80 dark:text-blue-100/90 max-w-2xl mx-auto text-lg font-light">
                Curated notes, assignments, and problem sets to help you excel in your exams. Select your category below to unlock resources.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="container mx-auto px-4 relative z-10 -mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {materialSections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white dark:border-white/5 hover:border-[#0F5A7A] dark:hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => handlePlaceholderClick(section.title)}
              >
                {/* Subtle blurred active indicator */}
                <div className={`absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl ${section.color.split(' ')[0]}`}></div>
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`p-4 rounded-2xl ${section.color.replace('bg-', 'bg-').replace('100', '50')} dark:bg-slate-800/80 shadow-sm ring-1 ring-black/5 dark:ring-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon size={28} className={`${section.color.split(' ')[1]} dark:text-blue-300`} />
                  </div>
                  
                  {/* Glass Lock Icon */}
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-2 rounded-full border border-gray-100 dark:border-white/10 shadow-sm flex items-center justify-center text-gray-400 dark:text-slate-400 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400 transition-colors">
                    <Lock size={16} />
                  </div>
                </div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-3 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-400 transition-colors tracking-tight">{section.title}</h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{section.description}</p>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-gray-100/50 dark:border-white/5">
                  <div className="flex items-center text-sm font-bold text-[#0F5A7A] dark:text-blue-400 group-hover:text-[#0d4a63] dark:group-hover:text-blue-300 transition-colors">
                    <Download size={16} className="mr-2" />
                    Unlock Material
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F5A7A] to-[#103D51] z-0"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-bold text-white mb-3">Can't find what you're looking for?</h3>
                <p className="text-blue-50/80 text-lg">Join our student forum to request specific notes or solutions.</p>
              </div>
              <button
                onClick={() => handlePlaceholderClick("Student Forum")}
                className="group shrink-0 inline-flex items-center justify-center bg-white text-[#0F5A7A] hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)] hover:-translate-y-1"
              >
                Request Notes
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Login;
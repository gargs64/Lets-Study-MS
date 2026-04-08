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
      </Helmet>

      {/* Header */}
      <Header />

      <div className="min-h-screen bg-gray-50 py-12">

        {/* Page Header */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-[#0F5A7A] mb-4">Study Repository</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Curated notes, assignments, and problem sets to help you excel in your exams.
              Select your category below to access resources.
            </p>
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {materialSections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      <section.icon size={24} />
                    </div>
                    {/* Placeholder Lock Icon */}
                    <Lock size={16} className="text-gray-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                  <button
                    onClick={() => handlePlaceholderClick(section.title)}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-[#0F5A7A] text-[#0F5A7A] hover:bg-[#0F5A7A] hover:text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm"
                  >
                    <Download size={16} />
                    Access Material
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center bg-[#0F5A7A]/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-[#0F5A7A] mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-600 mb-6">Join our student forum to request specific notes or solutions.</p>
            <button
              onClick={() => handlePlaceholderClick("Student Forum")}
              className="bg-[#0F5A7A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0d4a63] transition-colors"
            >
              Request Notes
            </button>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Login;
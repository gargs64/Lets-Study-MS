import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';

const Testimonials = () => {
  const studentSuccess = [
    {
      name: 'Aritra Raut',
      achievement: 'B.Sc RKM Narendrapur | M.Sc.(Data Science) RKMVERI',
      current: 'Currently in EXL Services, Assistent Manager Analytics',
      image: 'https://i.postimg.cc/yY8kqJwN/Aritra_Raut.jpg'
    },
    {
      name: 'Avik Ghosh',
      achievement: "M.Sc Jadavpur University | Cracked: CSIR NET",
      current: 'Currently in IIT Bombay (PhD)',
      image: 'https://i.postimg.cc/fTjvf3H4/Avik_Gosh.jpg'
    },
    {
      name: 'Sagnik Saha',
      achievement: 'Bsc Jadavpur University | Cracked: IMSc. (2025), IISER Pune (2025), JAM (2025) AIR 69, IISC Bangalore (2025)',
      current: 'Currently in IISc Bangalore',
      image: 'https://i.postimg.cc/7PS1qGr8/Sagnik_Saha.jpg'
    },
    {
      name: 'Sreetama Bhattachara',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: IISER Kolkata (2025)",
      current: 'Currently in IISER Kolkata',
      image: 'https://i.postimg.cc/L4Cm1xbs/Sreetama_Bhattacharya.jpg'
    },
    {
      name: 'Ananda Mukherjee',
      achievement: 'Bsc RKM Rahara | Cracked: Msc IISER TVM',
      current: 'Currently in Kansas State University (PhD)',
      image: 'https://i.postimg.cc/sgpFwmwg/Ananda_Mukherjee.jpg'
    },
    {
      name: 'Ritobrata Mukherjee',
      achievement: "Bsc St. Xavier's College, Kolkata | Cracked: JAM (2023) AIR 891, GATE (2024) AIR 704",
      current: 'Currently in IIT Patna',
      image: 'https://i.postimg.cc/wMvyk7z8/Ritobrata_Mukherjee.jpg'
    },
    {
      name: 'Ayon Gangopadhyay',
      achievement: 'Bsc. RKM Narendrapur | Msc. (Data Science) RKMVERI',
      current: 'Currently in Netomi, Data Science',
      image: 'https://i.postimg.cc/1z3QX6rg/Ayon_Gangopadhyay.jpg'
    },
    {
      name: 'Ishan Chakraborty',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: ISI Mmath (2025), JAM (2025) AIR 137, IISC Bangalore (2025)",
      current: 'Currently in IISC Bangalore',
      image: 'https://i.postimg.cc/XvFq958V/Ishan-Chakraborty.jpg'
    },
    {
      name: 'Debolina Ghosh',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: JAM (2023) AIR 127",
      current: 'Currently in IIT Delhi (PhD)',
      image: 'https://i.postimg.cc/tgfd4Fgd/Debolina_Ghosh.jpg'
    },
    {
      name: 'Aryadeb Sengupta',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: M.Sc RKMVERI (2024)",
      current: 'Currently in RKMVERI',
      image: 'https://i.postimg.cc/k4N68cVG/Aryadeb-Sengupta.jpg'
    },
    {
      name: 'Atim Kumar Sasmal',
      achievement: "M.Sc Ramkrishna Mission, Rahara | Cracked: ISI M.Tech (2025)",
      current: 'Currently in ISI Kolkata (2025)',
      image: 'https://i.postimg.cc/9Qf3ZFkQ/Atim-Kumar-Sasmal.jpg'
    },
    {
      name: 'Avikesh Ghosh',
      achievement: "BscMaharaja Manindra Chandra College | Cracked: IISER (2025)",
      current: 'Currently in IISER Bhopal',
      image: 'https://i.postimg.cc/htZkrRFr/Avikesh-Ghosh.jpg'
    },
    {
      name: 'Javed Akhtar',
      achievement: "Bsc Ramkrishna Mission, Narendrapur",
      current: 'Currently in IISER, Kolkata (2022)',
      image: 'https://i.postimg.cc/Qxhg6Bh8/Javed-Akhtar.jpg'
    },
    {
      name: 'Ripan Das',
      achievement: "B.Sc Jadavpur University | Cracked: ISI M.Math (2024)",
      current: 'Currently in ISI Kolkata',
      image: 'https://i.postimg.cc/8P04Xp5D/Ripan_Das.jpg'
    },
    {
      name: 'Silvia Hazari',
      achievement: "M.Sc Central University of Hariyana | Cracked: GATE (2025) AIR 401",
      current: '',
      image: 'https://i.postimg.cc/2SLwPsb2/Silvia-Hazari.jpg'
    },
    {
      name: 'Nikhil Chand',
      achievement: "Bsc Ramanada College, Bishnupur| M.Sc Vidyasagar University | Cracked: GATE (2025) AIR 1280",
      current: 'Currently in IISER Bhopal (Project Assistant)',
      image: 'https://i.postimg.cc/jq84Cxyn/Nikhil-Chand.jpg'
    },
    {
      name: 'Jeet Dhar',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: IISER Bhopal (2024), Kolkata (2023), ISI M.Math (2024)",
      current: 'Currently in ISI Kolkata',
      image: 'https://i.postimg.cc/BvdRr5nK/Jeet_Dhar.jpg'
    },
    {
      name: 'Ayan Chawdhary',
      achievement: "Bsc St. Xavier's Kolkata | Cracked: IISC Banglore (2024)",
      current: 'Currently in IISC Banglore',
      image: 'https://i.postimg.cc/T1k06GJb/Ayan_Chodhury.jpg'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Student Success Stories | IIT JAM AIR 37, CSIR NET AIR 6, ISI, TIFR | Let's Study</title>
        <meta name="description" content="Real success stories from Let's Study students in West Bengal. Alumni have secured IIT JAM AIR 37, CSIR NET AIR 6, AIR 25 GATE, joined ISI Kolkata, TIFR, IIT Bombay, HRI, IISER, and even PhD programmes at University of Connecticut USA." />
        <link rel="canonical" href="https://letsstudyms.com/testimonials" />
        <meta property="og:title" content="Student Success Stories | IIT JAM AIR 37, CSIR NET AIR 6, ISI, TIFR | Let's Study" />
        <meta property="og:description" content="Real success stories from Let's Study students. Alumni at ISI Kolkata, TIFR, IIT Bombay, IISc Bangalore, HRI and international universities." />
        <meta property="og:url" content="https://letsstudyms.com/testimonials" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Success Stories | Let's Study" />
        <meta name="twitter:description" content="Real success stories from Let's Study students. Alumni at ISI, TIFR, IIT Bombay, IISc and international universities." />
        <meta name="twitter:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen mesh-bg noise-overlay transition-colors duration-300">
        <AmbientBackground />
        <Header />
        <main>

        {/* Mini-Hero Banner */}
        <section className="relative bg-[#091C25] pt-32 pb-24 md:pt-40 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-[#103D51] to-[#091C25] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4D9] rounded-full blur-[120px] opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Hall of Fame
              </h1>
              <p className="text-blue-50/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Celebrating the exceptional achievements of our students in the world's most prestigious mathematical institutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievement Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {studentSuccess.map((student, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card float-shadow rounded-2xl overflow-hidden group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt={student.name}
                      src={student.image}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-2">{student.name}</h3>

                    <div className="flex items-start space-x-2 mb-4">
                      <GraduationCap className="text-brand-teal dark:text-blue-400 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                        {student.achievement}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center text-brand-teal dark:text-blue-400 font-semibold text-sm">
                      <MapPin size={16} className="mr-2" />
                      {student.current}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-transparent dark:bg-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand-teal dark:text-blue-400 mb-4 tracking-tight">Want to be our next success story?</h2>
            <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">Join our specialized batches and start your journey towards excellence in mathematics.</p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="group inline-flex items-center justify-center bg-brand-teal text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(15,90,122,0.4)] hover:shadow-[0_8px_25px_rgba(15,90,122,0.6)] hover:-translate-y-1 hover:bg-[#0d4a63]"
            >
              Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </button>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;

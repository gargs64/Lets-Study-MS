import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      name: 'Umme Joinab',
      achievement: "M.Sc Calcutta University | Cracked: CSIR NET",
      current: 'Currently in TCG Crest (PhD)',
      image: 'https://i.postimg.cc/jjVXKMPm/Umme-Joinab.jpg'
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
        <title>Student Success Stories | IIT JAM AIR 37, CSIR NET AIR 6, ISI, TIFR | Let's Study MS</title>
        <meta name="description" content="Real success stories from Let's Study MS students in West Bengal. Alumni have secured IIT JAM AIR 37, CSIR NET AIR 6, AIR 25 GATE, joined ISI Kolkata, TIFR, IIT Bombay, HRI, IISER, and even PhD programmes at University of Connecticut USA." />
        <link rel="canonical" href="https://letsstudyms.com/testimonials" />
        <meta property="og:title" content="Student Success Stories | IIT JAM AIR 37, CSIR NET AIR 6, ISI, TIFR | Let's Study MS" />
        <meta property="og:description" content="Real success stories from Let's Study MS students. Alumni at ISI Kolkata, TIFR, IIT Bombay, IISc Bangalore, HRI and international universities." />
        <meta property="og:url" content="https://letsstudyms.com/testimonials" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-[#0F5A7A] text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-4">Hall of Fame</h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto font-light">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt={student.name}
                      src={student.image}
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{student.name}</h3>

                    <div className="flex items-start space-x-2 mb-4">
                      <GraduationCap className="text-[#0F5A7A] mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {student.achievement}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center text-[#0F5A7A] font-semibold text-sm">
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
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0F5A7A] mb-4">Want to be our next success story?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join our specialized batches and start your journey towards excellence in mathematics.</p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-[#0F5A7A] text-white px-10 py-3 rounded-full font-bold hover:bg-[#0d4a63] transition-colors"
            >
              Enroll Now
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
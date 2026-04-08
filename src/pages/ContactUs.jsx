import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPqQRzSOVM1ZaG18WxQn9VyZTOiGliJ5-qOFhK3bP7jpNfA3Q9xtOj_yBjY9R8n0zMEA/exec";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // --- FIX START: This ensures the page starts at the top ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // --- FIX END ---

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    otherUniversity: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // CHANGED: We use 'text/plain' to prevent the browser from blocking the request
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(formData)
      });

      // Because of 'no-cors', we can't check data.status. We assume success.
      toast({
        title: 'Message sent successfully',
        description: 'We will contact you within 24 hours.'
      });

      setFormData({
        name: '', email: '', phone: '', university: '', otherUniversity: '', course: '', message: ''
      });

    } catch (err) {
      toast({
        variant: "destructive",
        title: 'Submission failed',
        description: 'Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Contact Let's Study | Mathematics Coaching Enquiry West Bengal</title>
        <meta name="description" content="Contact Let's Study for mathematics coaching enquiries in West Bengal. Enroll for BSc foundation, semester batch, MSc entrance, PhD entrance or advanced mathematics courses. Expert faculty ready to guide you." />
        <link rel="canonical" href="https://letsstudyms.com/contact" />
        <meta property="og:title" content="Contact Let's Study | Mathematics Coaching Enquiry West Bengal" />
        <meta property="og:description" content="Contact Let's Study for mathematics coaching enquiries. Enroll for BSc, MSc entrance, PhD entrance or advanced courses. Expert faculty ready to guide you." />
        <meta property="og:url" content="https://letsstudyms.com/contact" />
        <meta property="og:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Let's Study | Mathematics Coaching Enquiry" />
        <meta name="twitter:description" content="Contact Let's Study for mathematics coaching enquiries. Expert faculty ready to guide you." />
        <meta name="twitter:image" content="https://i.postimg.cc/SR35cFPJ/Lets_Study_Logo.jpg" />
      </Helmet>

      <div className="min-h-screen mesh-bg noise-overlay">
        <AmbientBackground />
        <Header />
        <main>

        {/* Mini-Hero Banner */}
        <div className="relative bg-[#091C25] pt-32 pb-24 md:pt-40 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-[#103D51] to-[#091C25] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4D9] rounded-full blur-[120px] opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#78E2FF]">
                Get In Touch
              </h1>
              <p className="text-blue-50/90 dark:text-blue-100/90 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Have questions? We're here to help you on your mathematics learning journey. Reach out to us today.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info - 3 separate animated cards matching form height */}
              <div className="flex flex-col h-full">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-extrabold text-brand-teal dark:text-blue-400 mb-8 px-2"
                >
                  Contact Information
                </motion.h2>

                <div className="flex-1 flex flex-col gap-6">
                  {/* Address Card */}
                  <motion.div 
                    {...fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 glass-card float-shadow p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
                  >
                    <a href="https://www.google.com/maps/search/?api=1&query=118/105,+Near+Maya+Apartment,+Rabindrapally,+Khardaha,+Kolkata+700117" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-brand-teal/5 dark:bg-blue-400/5 blur-xl pointer-events-none"></div>
                    <div className="flex items-center space-x-6 relative z-0">
                      <div className="bg-brand-teal/5 dark:bg-blue-400/10 p-5 rounded-2xl group-hover:bg-brand-teal/10 transition-all duration-300 ring-1 ring-brand-teal/5 flex-shrink-0">
                        <MapPin className="text-brand-teal dark:text-blue-400 transition-transform group-hover:scale-110" size={28} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-teal/70 dark:text-blue-400/70 mb-1">Our Address</h3>
                        <p className="text-gray-600 dark:text-slate-300 font-medium leading-tight text-sm">
                          118/105, Near Maya Apartment, Rabindrapally,<br />
                          Khardaha, Kolkata – 700 117
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone Card */}
                  <motion.div 
                    {...fadeInUp}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 glass-card float-shadow p-8 rounded-3xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-brand-teal/5 dark:bg-blue-400/5 blur-xl pointer-events-none"></div>
                    <div className="flex items-center space-x-6 relative z-0">
                      <div className="bg-brand-teal/5 dark:bg-blue-400/10 p-5 rounded-2xl group-hover:bg-brand-teal/10 transition-all duration-300 ring-1 ring-brand-teal/5 flex-shrink-0">
                        <Phone className="text-brand-teal dark:text-blue-400 transition-transform group-hover:scale-110" size={28} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-teal/70 dark:text-blue-400/70 mb-1">Call Us</h3>
                        <p className="text-gray-600 dark:text-slate-300 font-bold text-lg leading-tight">
                          <a href="tel:+918777484102" className="hover:text-brand-teal dark:hover:text-blue-300 transition-colors">+91 8777484102</a><br />
                          <a href="tel:+918481819726" className="hover:text-brand-teal dark:hover:text-blue-300 transition-colors">+91 8481819726</a>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email Card */}
                  <motion.div 
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 glass-card float-shadow p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
                  >
                    <a href="mailto:letsstudy2022bu@gmail.com" className="absolute inset-0 z-10"></a>
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-brand-teal/5 dark:bg-blue-400/5 blur-xl pointer-events-none"></div>
                    <div className="flex items-center space-x-6 relative z-0">
                      <div className="bg-brand-teal/5 dark:bg-blue-400/10 p-5 rounded-2xl group-hover:bg-brand-teal/10 transition-all duration-300 ring-1 ring-brand-teal/5 flex-shrink-0">
                        <Mail className="text-brand-teal dark:text-blue-400 transition-transform group-hover:scale-110" size={28} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-teal/70 dark:text-blue-400/70 mb-1">Email Us</h3>
                        <p className="text-gray-600 dark:text-slate-300 font-bold text-lg leading-tight">
                          letsstudy2022bu@gmail.com
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col h-full">
                <div className="glass-card p-10 rounded-3xl relative overflow-hidden transition-all flex-1 h-full">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-brand-teal/5 dark:bg-blue-400/5 blur-2xl pointer-events-none"></div>
                  
                  <h2 className="text-3xl font-extrabold text-brand-teal dark:text-blue-400 mb-8 relative z-10">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none" placeholder="Your name" />
                      <input name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none" placeholder="Email address" />
                    </div>
                    
                    <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none" placeholder="Phone Number" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <select name="course" value={formData.course} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer">
                        <option value="">Select a course</option>
                        <option value="Foundation Batch">Foundation Batch</option>
                        <option value="Semester Batch">Semester Batch</option>
                        <option value="M.Sc Mathematics Entrances">M.Sc Mathematics</option>
                        <option value="M.Tech/ Data Science/ M.Sc Economics">M.Tech / Data Science</option>
                        <option value="Engineering Mathematics">Engineering Math</option>
                        <option value="PhD Entrances">PhD Entrances</option>
                        <option value="Advanced Courses">Advanced Courses</option>
                        <option value="Personalised Coaching">Personalised Coaching</option>
                      </select>

                      <select name="university" value={formData.university} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer">
                        <option value="">Select University</option>
                        <option value="Jadavpur">Jadavpur University</option>
                        <option value="Calcutta">Calcutta University</option>
                        <option value="Xavier">Xaviers College</option>
                        <option value="Presidency">Presidency University</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {formData.university === 'other' && (
                      <motion.input
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        name="otherUniversity"
                        value={formData.otherUniversity}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none"
                        placeholder="Enter University Name"
                      />
                    )}

                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal dark:focus:border-blue-500 transition-all outline-none resize-none" placeholder="How can we help you?" />

                    <Button type="submit" disabled={loading} className="w-full bg-brand-teal hover:bg-[#0d4a63] text-white px-8 py-6 rounded-full font-bold text-lg shadow-[0_4px_15px_rgba(15,90,122,0.3)] hover:shadow-[0_8px_25px_rgba(15,90,122,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                      {loading ? "Sending..." : <> <Send className="mr-2" size={20} /> Send Message </>}
                    </Button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

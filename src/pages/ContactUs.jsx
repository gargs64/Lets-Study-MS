import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#020817] dark:to-[#0A1A23]">
        <Header />

        {/* Mini-Hero Banner */}
        <div className="relative bg-[#091C25] py-24 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5A7A] via-[#103D51] to-[#091C25] z-0"></div>
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

              {/* Contact Info */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold text-[#0F5A7A] dark:text-blue-400 mb-6">Contact Information</h2>
                  <div className="flex items-start space-x-5 p-6 bg-white dark:bg-slate-900/60 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group ring-1 ring-black/[0.03] dark:ring-white/5 hover:ring-[#0F5A7A]/10 cursor-pointer relative overflow-hidden">
                    <a href="https://www.google.com/maps/search/?api=1&query=118/105,+Near+Maya+Apartment,+Rabindrapally,+Khardaha,+Kolkata+700117" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Open location in Maps"></a>
                    <div className="bg-[#0F5A7A]/5 dark:bg-blue-400/10 p-4 rounded-2xl group-hover:bg-[#0F5A7A]/10 transition-colors duration-300 flex-shrink-0">
                      <MapPin className="text-[#0F5A7A] dark:text-blue-400 transition-transform group-hover:scale-110" size={24} />
                    </div>
                    <div className="text-gray-600 dark:text-slate-300 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-300 transition-colors whitespace-pre-line relative z-0 mt-2 font-medium">
                      118/105, Near Maya Apartment,{"\n"}
                      Rabindrapally, Khardaha,{"\n"}
                      Kolkata – 700 117, West Bengal, India{"\n"}
                      <span className="font-bold text-sm block mt-2 tracking-wide uppercase text-[#0F5A7A]/70 dark:text-blue-400/70">Landmark: Rabindrapally Kali Mandir</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 p-6 bg-white dark:bg-slate-900/60 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group ring-1 ring-black/[0.03] dark:ring-white/5 hover:ring-[#0F5A7A]/10 relative overflow-hidden">
                    <div className="bg-[#0F5A7A]/5 dark:bg-blue-400/10 p-4 rounded-2xl group-hover:bg-[#0F5A7A]/10 transition-colors duration-300 flex-shrink-0">
                      <Phone className="text-[#0F5A7A] dark:text-blue-400 transition-transform group-hover:scale-110" size={24} />
                    </div>
                    <div className="text-gray-600 dark:text-slate-300 relative z-10 mt-2 font-medium">
                      <a href="tel:+918777484102" className="group-hover:text-[#0F5A7A] dark:group-hover:text-blue-300 transition-colors hover:font-bold">+91 8777484102</a> / <br/>
                      <a href="tel:+918481819726" className="group-hover:text-[#0F5A7A] dark:group-hover:text-blue-300 transition-colors hover:font-bold">+91 8481819726</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 p-6 bg-white dark:bg-slate-900/60 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group ring-1 ring-black/[0.03] dark:ring-white/5 hover:ring-[#0F5A7A]/10 cursor-pointer relative overflow-hidden">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=letsstudy2022bu@gmail.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Send email"></a>
                    <div className="bg-[#0F5A7A]/5 dark:bg-blue-400/10 p-4 rounded-2xl group-hover:bg-[#0F5A7A]/10 transition-colors duration-300 flex-shrink-0">
                      <Mail className="text-[#0F5A7A] dark:text-blue-400 transition-transform group-hover:scale-110" size={24} />
                    </div>
                    <div className="text-gray-600 dark:text-slate-300 group-hover:text-[#0F5A7A] dark:group-hover:text-blue-300 transition-colors relative z-0 mt-3 font-medium">
                      letsstudy2022bu@gmail.com
                    </div>
                  </div>
              </motion.div>

              {/* Form */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <div className="bg-white dark:bg-slate-900/60 p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] ring-1 ring-black/[0.03] dark:ring-white/5 relative overflow-hidden transition-colors">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-[#0F5A7A]/5 dark:bg-blue-400/5 blur-2xl pointer-events-none"></div>
                  
                  <h2 className="text-3xl font-extrabold text-[#0F5A7A] dark:text-blue-400 mb-8 relative z-10">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none" placeholder="Your name" />
                      <input name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none" placeholder="Email address" />
                    </div>
                    
                    <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none" placeholder="Phone Number" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <select name="course" value={formData.course} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer">
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

                      <select name="university" value={formData.university} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer">
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
                        className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none"
                        placeholder="Enter University Name"
                      />
                    )}

                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-5 py-4 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-[#0F5A7A]/20 focus:border-[#0F5A7A] dark:focus:border-blue-500 transition-all outline-none resize-none" placeholder="How can we help you?" />

                    <Button type="submit" disabled={loading} className="w-full bg-[#0F5A7A] hover:bg-[#0d4a63] text-white px-8 py-6 rounded-full font-bold text-lg shadow-[0_4px_15px_rgba(15,90,122,0.3)] hover:shadow-[0_8px_25px_rgba(15,90,122,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                      {loading ? "Sending..." : <> <Send className="mr-2" size={20} /> Send Message </>}
                    </Button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
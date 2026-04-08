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
        <title>Contact Let's Study MS | Mathematics Coaching Enquiry West Bengal</title>
        <meta name="description" content="Contact Let's Study MS for mathematics coaching enquiries in West Bengal. Enroll for BSc foundation, semester batch, MSc entrance, PhD entrance or advanced mathematics courses. Expert faculty ready to guide you." />
        <link rel="canonical" href="https://letsstudyms.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        <section className="bg-gradient-to-r from-[#0F5A7A] to-[#0d4a63] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Have questions? We're here to help you on your mathematics learning journey
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold text-[#0F5A7A] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <MapPin className="text-[#0F5A7A]" size={24} />
                    <p className="text-gray-600">Kolkata, West Bengal, India</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <Phone className="text-[#0F5A7A]" size={24} />
                    <p className="text-gray-600">+91 8777415940 / 8481819726</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <Mail className="text-[#0F5A7A]" size={24} />
                    <p className="text-gray-600">letsstudy2022bu@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold text-[#0F5A7A] mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Your name" />
                    <input name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Email" />
                    <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Phone No." />

                    <select name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                      <option value="">Select a course</option>
                      <option value="Foundation Batch">Foundation Batch</option>
                      <option value="Semester Batch">Semester Batch</option>
                      <option value="M.Sc Mathematics Entrances">M.Sc Mathematics Entrances</option>
                      <option value="M.Tech/ Data Science/ M.Sc Economics">M.Tech/ Data Science/ M.Sc Economics</option>
                      <option value="Engineering Mathematics">Engineering Mathematics</option>
                      <option value="PhD Entrances">PhD Entrances</option>
                      <option value="Advanced Courses">Advanced Courses</option>
                      <option value="Personalised Coaching">Personalised Coaching</option>
                    </select>

                    <select name="university" value={formData.university} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                      <option value="">Select University</option>
                      <option value="Jadavpur">Jadavpur University</option>
                      <option value="Calcutta">Calcutta University</option>
                      <option value="Xavier">Xaviers College</option>
                      <option value="Presidency">Presidency University</option>
                      <option value="other">Other</option>
                    </select>

                    {formData.university === 'other' && (
                      <input
                        name="otherUniversity"
                        value={formData.otherUniversity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                        placeholder="Enter University Name"
                      />
                    )}

                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border rounded-lg" placeholder="Type your message here." />

                    <Button type="submit" disabled={loading} className="w-full bg-[#0F5A7A] text-white">
                      {loading ? "Sending..." : <> <Send className="mr-2" /> Send Message </>}
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
// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaCommentDots,
  FaGithub,
  FaLinkedinIn 
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import emailjs from 'emailjs-com';
import Redirect from './Redirect';

const Contact = () => {
  const [redirectState, setRedirectState] = useState({
    show: false,
    url: '',
    platform: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = {
    github: {
      url: 'https://github.com/yourusername',
      platform: 'GitHub'
    },
    linkedin: {
      url: 'https://linkedin.com/in/yourusername',
      platform: 'LinkedIn'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialClick = (platform) => {
    setRedirectState({
      show: true,
      url: socialLinks[platform].url,
      platform: socialLinks[platform].platform
    });
  };

  const handleRedirectCancel = () => {
    setRedirectState({
      show: false,
      url: '',
      platform: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    

    // Validate environment variables
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set');
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service not configured. Please try again later.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Map form values to EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Rayen',
        reply_to: formData.email
      };

      

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      

      // Check if email was sent successfully
      if (response.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.' 
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response status from EmailJS');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: `Failed to send message: ${error.text || 'Please try again or email me directly.'}` 
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 4 seconds
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <>
      {/* Redirect Modal */}
      {redirectState.show && (
        <Redirect
          url={redirectState.url}
          platform={redirectState.platform}
          onCancel={handleRedirectCancel}
        />
      )}

      <section className="relative px-4 py-20 overflow-hidden bg-gray-900">
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="relative inline-block">
              <h2 className="absolute inset-0 text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 filter blur-md animate-pulse">
                Get In Touch
              </h2>
              <h2 className="relative text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 neon-glow animate-glitch">
                Get In Touch
              </h2>
            </div>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 md:text-xl neon-glow">
              Have a project in mind? Let's build something amazing together.
            </p>
          </motion.div>

          <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-12">

            {/* Left Column - Contact Info */}
            <div className="space-y-8 lg:col-span-4 lg:col-start-1">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 transition-all border cursor-pointer group bg-gray-800/60 backdrop-blur-sm border-cyan-500/30 rounded-2xl hover:border-cyan-400"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 transition rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:scale-110">
                    <MdEmail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-cyan-300">Email</h3>
                    <span className="text-sm text-gray-300 break-all transition hover:text-cyan-300 neon-glow md:text-base">
                      rayenchaaben0704@gmail.com
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 transition-all border cursor-pointer group bg-gray-800/60 backdrop-blur-sm border-pink-500/30 rounded-2xl hover:border-pink-400"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 transition rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 group-hover:scale-110">
                    <MdPhone className="w-8 h-8 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-pink-300">Phone</h3>
                    <span className="text-sm text-gray-300 neon-glow md:text-base">+216 53410040</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 border bg-gray-800/60 backdrop-blur-sm border-purple-500/30 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-bold text-purple-300">Follow Me</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleSocialClick('github')}
                    className="p-3 transition-all bg-gray-700 border rounded-full hover:bg-purple-600/30 border-purple-500/40 hover:border-purple-400 group hover:scale-110"
                  >
                    <FaGithub className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                  </button>
                  <button
                    onClick={() => handleSocialClick('linkedin')}
                    className="p-3 transition-all bg-gray-700 border rounded-full hover:bg-purple-600/30 border-purple-500/40 hover:border-purple-400 group hover:scale-110"
                  >
                    <FaLinkedinIn className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <form
                className="p-8 space-y-6 border shadow-2xl bg-gray-800/70 backdrop-blur-md border-cyan-500/30 rounded-2xl md:p-10 neon-glow"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="relative">
                    <FaUser className="absolute w-5 h-5 left-4 top-5 text-cyan-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition border rounded-lg bg-gray-900/80 border-cyan-500/40 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute w-5 h-5 left-4 top-5 text-cyan-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition border rounded-lg bg-gray-900/80 border-cyan-500/40 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FaCommentDots className="absolute w-5 h-5 left-4 top-5 text-cyan-400" />
                  <textarea
                    rows="7"
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition border rounded-lg resize-none bg-gray-900/80 border-cyan-500/40 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 border rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'text-green-400 border-green-500/30 bg-green-500/10' 
                        : 'text-red-400 border-red-500/30 bg-red-500/10'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full gap-3 py-5 mx-auto text-lg font-bold text-white transition-all rounded-full md:w-auto px-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/50 group ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="transition group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
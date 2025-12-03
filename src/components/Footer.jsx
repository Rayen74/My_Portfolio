import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Redirect from './Redirect';

const Footer = () => {
  const [redirect, setRedirect] = useState({ show: false, url: '', platform: '' });

  const socialLinks = {
    github: 'https://github.com/Rayen74',
    linkedin: 'https://www.linkedin.com/in/rayen-chaaben-562581301/',
    facebook: 'https://www.facebook.com/rayen.chaabene',
    instagram: 'https://www.instagram.com/rayene.chaaben?igsh=MTY1dXI3OGVhcWlhag=='
  };

  const handleSocialClick = (platform) => {
    setRedirect({
      show: true,
      url: socialLinks[platform],
      platform: platform
    });
  };

  const handleRedirectClose = () => {
    setRedirect({ show: false, url: '', platform: '' });
  };

  return (
    <footer className="relative py-10 overflow-hidden text-white bg-gray-900">
      <AnimatePresence>
        {redirect.show && (
          <Redirect
            url={redirect.url}
            platform={redirect.platform}
            onCancel={handleRedirectClose}
          />
        )}
      </AnimatePresence>

      {/* Subtle cyberpunk background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="max-w-4xl px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block mb-6"
        >
          <h2 className="absolute inset-0 text-3xl font-bold text-cyan-400 filter blur-md animate-pulse">
            Get in touch
          </h2>
          <h2 className="relative text-3xl font-bold text-cyan-400 neon-glow animate-glitch">
            Get in touch
          </h2>
        </motion.div>
        <p className="mb-6 text-gray-200 neon-glow">
          What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col items-center mb-6 space-y-3">
          <div className="flex items-center gap-3 text-sm font-medium md:text-base group">
            <MdEmail className="w-6 h-6 text-cyan-500 group-hover:animate-pulse" />
            <a href="mailto:rayenchaaben0704@gmail.com" className="neon-glow text-cyan-300 group-hover:text-cyan-100">
              rayenchaaben0704@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium md:text-base group">
            <MdPhone className="w-6 h-6 text-pink-500 group-hover:animate-pulse" />
            <span className="text-gray-200 neon-glow group-hover:text-pink-300">+216 53410040</span>
          </div>
        </div>
        <p className="mb-4 text-gray-200 neon-glow">You may also find me on these platforms!</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleSocialClick('github')}
            className="text-cyan-400 hover:text-cyan-300 neon-glow group"
          >
            <FaGithub className="w-6 h-6 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('linkedin')}
            className="text-cyan-400 hover:text-cyan-300 neon-glow group"
          >
            <FaLinkedinIn className="w-6 h-6 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('instagram')}
            className="text-cyan-400 hover:text-cyan-300 neon-glow group"
          >
            <FaInstagram className="w-6 h-6 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('facebook')}
            className="text-cyan-400 hover:text-cyan-300 neon-glow group"
          >
            <FaFacebook className="w-6 h-6 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
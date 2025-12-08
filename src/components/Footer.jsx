// src/components/Footer.jsx
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
      platform
    });
  };

  const handleRedirectClose = () => {
    setRedirect({ show: false, url: '', platform: '' });
  };

  return (
    <footer className="relative py-12 overflow-hidden text-white bg-gray-900 md:py-16">
      <AnimatePresence>
        {redirect.show && (
          <Redirect
            url={redirect.url}
            platform={redirect.platform}
            onCancel={handleRedirectClose}
          />
        )}
      </AnimatePresence>

      {/* Subtle cyberpunk grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          <h2 className="absolute inset-0 text-3xl font-bold sm:text-4xl text-cyan-400 filter blur-md animate-pulse">
            Get in touch
          </h2>
          <h2 className="relative text-3xl font-bold sm:text-4xl text-cyan-400 neon-glow animate-glitch">
            Get in touch
          </h2>
        </motion.div>

        <p className="max-w-2xl mx-auto mb-10 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg neon-glow">
          What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Email */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <MdEmail className="w-7 h-7 text-cyan-500" />
            <a
              href="mailto:rayenchaaben0704@gmail.com"
              className="text-sm break-all text-cyan-300 neon-glow hover:text-cyan-100 sm:text-base"
            >
              rayenchaaben0704@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <MdPhone className="text-pink-500 w-7 h-7" />
            <span className="text-sm text-gray-200 neon-glow hover:text-pink-300 sm:text-base">
              +216 53410040
            </span>
          </div>
        </div>

        {/* Social Platforms Text */}
        <p className="mb-6 text-sm text-gray-300 sm:text-base neon-glow">
          You may also find me on these platforms!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <button
            onClick={() => handleSocialClick('github')}
            aria-label="Visit GitHub profile"
            className="transition-transform text-cyan-400 hover:text-cyan-300 hover:scale-110 neon-glow group"
          >
            <FaGithub className="w-8 h-8 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('linkedin')}
            aria-label="Visit LinkedIn profile"
            className="transition-transform text-cyan-400 hover:text-cyan-300 hover:scale-110 neon-glow group"
          >
            <FaLinkedinIn className="w-8 h-8 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('instagram')}
            aria-label="Visit Instagram profile"
            className="transition-transform text-cyan-400 hover:text-cyan-300 hover:scale-110 neon-glow group"
          >
            <FaInstagram className="w-8 h-8 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleSocialClick('facebook')}
            aria-label="Visit Facebook profile"
            className="transition-transform text-cyan-400 hover:text-cyan-300 hover:scale-110 neon-glow group"
          >
            <FaFacebook className="w-8 h-8 group-hover:animate-pulse" />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 sm:text-sm">
          © {new Date().getFullYear()} Rayen Chaaben. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
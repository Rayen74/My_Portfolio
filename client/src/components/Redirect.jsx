// src/components/Redirect.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaSpinner, FaGithub, FaLinkedinIn, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';

const Redirect = ({ url, platform, onCancel }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect when countdown reaches 0
          window.open(url, '_blank');
          setTimeout(() => onCancel(), 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [url, onCancel]);

  const handleManualRedirect = () => {
    window.open(url, '_blank');
    onCancel();
  };

  const getPlatformIcon = () => {
    switch (platform.toLowerCase()) {
      case 'github': return <FaGithub className="w-16 h-16" />;
      case 'linkedin': return <FaLinkedinIn className="w-16 h-16" />;
      case 'facebook': return <FaFacebook className="w-16 h-16" />;
      case 'instagram': return <FaInstagram className="w-16 h-16" />;
      default: return <FaExternalLinkAlt className="w-16 h-16" />;
    }
  };

  const getPlatformColor = () => {
    switch (platform.toLowerCase()) {
      case 'github': return 'text-gray-300';
      case 'linkedin': return 'text-blue-400';
      case 'facebook': return 'text-blue-500';
      case 'instagram': return 'text-pink-500';
      default: return 'text-cyan-400';
    }
  };

  const getPlatformName = () => {
    switch (platform.toLowerCase()) {
      case 'github': return 'GitHub';
      case 'linkedin': return 'LinkedIn';
      case 'facebook': return 'Facebook';
      case 'instagram': return 'Instagram';
      default: return platform;
    }
  };

  const getPlatformGradient = () => {
    switch (platform.toLowerCase()) {
      case 'github': return 'from-gray-600 to-gray-800';
      case 'linkedin': return 'from-blue-600 to-blue-800';
      case 'facebook': return 'from-blue-500 to-blue-700';
      case 'instagram': return 'from-pink-500 to-purple-600';
      default: return 'from-cyan-500 to-purple-600';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.8, rotateY: 90 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.8, rotateY: -90 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative max-w-md mx-4 p-8 bg-gray-900 border-4 border-[#FF00FF] rounded-2xl shadow-2xl neon-pink-glow"
        >
          <style>
            {`
              .neon-pink-glow {
                animation: neon-pink-glow 2s infinite;
              }
              @keyframes neon-pink-glow {
                0%, 100% {
                  box-shadow: 0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 60px #FF00FF;
                }
                50% {
                  box-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF;
                }
              }
            `}
          </style>

          {/* Close Button */}
          <button
            onClick={onCancel}
            className="absolute p-2 text-gray-400 transition-all rounded-full top-4 right-4 hover:text-white hover:bg-gray-800"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Platform Icon with Pulse Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className={`p-6 rounded-full bg-gradient-to-br ${getPlatformGradient()} border-4 border-white/20 shadow-2xl`}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={getPlatformColor()}
                >
                  {getPlatformIcon()}
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-cyan-400 neon-glow"
            >
              {countdown === 0 ? 'Redirected!' : `Redirecting to ${getPlatformName()}`}
            </motion.h3>

            {/* Countdown Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-lg text-gray-300"
            >
              {countdown === 0 ? (
                "You've been redirected to the external site!"
              ) : (
                <>
                  You're being redirected in{' '}
                  <span className="text-[#FF00FF] font-bold text-2xl">{countdown}</span> seconds
                </>
              )}
            </motion.p>

            {/* Countdown Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Outer Circle */}
                <motion.div
                  className="w-32 h-32 border-4 rounded-full border-cyan-400/30"
                  animate={{
                    rotate: countdown > 0 ? 360 : 0,
                  }}
                  transition={{
                    rotate: {
                      duration: 2,
                      repeat: countdown > 0 ? Infinity : 0,
                      ease: "linear"
                    }
                  }}
                />
                
                {/* Progress Circle */}
                {countdown > 0 && (
                  <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="377"
                      strokeDashoffset={377 - (377 * (5 - countdown)) / 5}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFFF" />
                        <stop offset="100%" stopColor="#FF00FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {countdown === 0 ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-400"
                    >
                      <FaExternalLinkAlt className="w-8 h-8" />
                    </motion.div>
                  ) : (
                    <span className="text-2xl font-bold text-white">{countdown}</span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Action Buttons - Only show if countdown hasn't finished */}
            {countdown > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col space-y-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleManualRedirect}
                  className={`px-8 py-4 font-bold text-white transition-all duration-300 rounded-xl bg-gradient-to-r ${getPlatformGradient()} hover:shadow-2xl hover:brightness-110`}
                >
                  Continue to {getPlatformName()}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onCancel}
                  className="px-8 py-4 font-bold text-gray-300 transition-all duration-300 border-2 border-gray-600 rounded-xl hover:bg-gray-800 hover:text-white hover:border-gray-400"
                >
                  Stay Here
                </motion.button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={onCancel}
                className="px-8 py-4 font-bold text-gray-300 transition-all duration-300 border-2 border-gray-600 rounded-xl hover:bg-gray-800 hover:text-white hover:border-gray-400"
              >
                Close
              </motion.button>
            )}

            {/* Safety Notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-sm text-gray-400"
            >
              🔒 You're being redirected to an external site
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Redirect;
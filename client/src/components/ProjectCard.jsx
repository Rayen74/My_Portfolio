import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

const ProjectCard = ({ videoSrc, title, description, technologies }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Restart video after 25 seconds
      const restartVideo = () => {
        video.currentTime = 0;
        if (isPlaying) {
          video.play().catch((error) => console.log('Video autoplay failed:', error));
        }
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= 25) {
          restartVideo();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      // Start playing the video automatically
      if (isPlaying) {
        video.play().catch((error) => console.log('Video autoplay failed:', error));
      }

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch((error) => console.log('Video autoplay failed:', error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full overflow-hidden bg-gray-900 border-4 border-[#FF00FF] rounded-xl shadow-2xl neon-pink-glow hover:scale-105 transition-transform duration-300"
    >
      <style>
        {`
          /* Custom neon pink glow for border */
          .neon-pink-glow {
            animation: neon-pink-glow 2s infinite;
          }

          @keyframes neon-pink-glow {
            0%, 100% {
              box-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF;
            }
            50% {
              box-shadow: 0 0 6px #FF00FF, 0 0 12px #FF00FF, 0 0 20px #FF00FF;
            }
          }
        `}
      </style>
      
      {/* Video Section - Slightly smaller to make room for description */}
      <div className="relative h-56 group">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop={false}
          className="object-cover w-full h-full holo-effect"
          style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}
        />
        <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:opacity-100" />
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute p-3 text-[#FF00FF] transition-all duration-200 border-2 border-[#FF00FF] rounded-full bottom-4 right-4 bg-gray-800/80 hover:bg-[#FF00FF]/30 hover:text-[#FF69B4] neon-glow hover:scale-110"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
        </button>
      </div>

      {/* Content Section - Maximum space for description */}
      <div className="flex flex-col flex-grow p-8">
        {/* Project Title - Compact */}
        <div className="relative inline-block mb-4">
          <h3 className="absolute inset-0 text-xl font-bold text-cyan-400 filter blur-md animate-pulse">
            {title}
          </h3>
          <h3 className="relative text-xl font-bold text-cyan-400 neon-glow animate-glitch">
            {title}
          </h3>
        </div>

        {/* Description - Maximum height and lines */}
        <p className="flex-grow mb-6 text-base leading-relaxed text-gray-200 neon-glow line-clamp-9">
          {description}
        </p>

        {/* Technology Labels - Compact at bottom */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium transition-all duration-200 bg-gray-800 border rounded-full text-cyan-300 border-[#FF00FF]/30 hover:bg-[#FF00FF]/20 hover:text-[#FF69B4] neon-glow hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaPause, 
  FaImages, 
  FaTimes, 
  FaExpandAlt, 
  FaCompressAlt, 
  FaArrowLeft, 
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus 
} from 'react-icons/fa';

const ProjectCard = ({ 
  mediaSrc, 
  mediaType = 'video', 
  title, 
  description, 
  technologies = [],
  galleryImages = [] 
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Video restart every 25 seconds
  useEffect(() => {
    if (mediaType !== 'video' || !videoRef.current) return;

    const video = videoRef.current;
    const restart = () => {
      video.currentTime = 0;
      if (isPlaying) video.play().catch(() => {});
    };

    const handleTime = () => {
      if (video.currentTime >= 25) restart();
    };

    video.addEventListener('timeupdate', handleTime);
    if (isPlaying) video.play().catch(() => {});

    return () => video.removeEventListener('timeupdate', handleTime);
  }, [isPlaying, mediaType]);

  // Reset zoom and position when changing images
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (isPlaying) video.pause();
    else video.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

  const openGallery = () => {
    if (galleryImages.length > 0) {
      setCurrentIndex(0);
      setShowGallery(true);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const next = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  const zoomIn = () => setZoom(z => Math.min(z + 0.5, 3));
  const zoomOut = () => {
    setZoom(z => {
      const newZoom = Math.max(z - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border-4 border-[#FF00FF] rounded-3xl shadow-2xl neon-pink-glow hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] hover:scale-105 transition-all duration-500"
    >
      <style>
        {`
          .neon-pink-glow { animation: neon-pink-glow 2s infinite; }
          @keyframes neon-pink-glow {
            0%, 100% { box-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF; }
            50% { box-shadow: 0 0 6px #FF00FF, 0 0 12px #FF00FF, 0 0 20px #FF00FF; }
          }
        `}
      </style>

      {/* Media Preview */}
      <div className="relative h-56 group">
        {mediaType === 'video' ? (
          <video 
            ref={videoRef} 
            src={mediaSrc} 
            muted 
            loop={false}
            className="object-cover w-full h-full rounded-t-3xl"
            style={{ transform: 'scale(0.85)', transformOrigin: 'center' }} 
          />
        ) : (
          <img 
            src={mediaSrc} 
            alt={title} 
            style={{ transform: 'scale(0.9)', transformOrigin: 'center' }} 
            className="object-cover w-full h-full rounded-t-3xl" 
          />
        )}

        <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-gray-900/80 to-transparent rounded-t-3xl" />

        {/* Play/Pause Button */}
        {mediaType === 'video' && (
          <button
            onClick={togglePlay}
            className="absolute z-10 p-3 text-[#FF00FF] transition-all duration-200 border-2 border-[#FF00FF] rounded-full bottom-4 right-4 bg-gray-800/80 hover:bg-[#FF00FF]/30 hover:text-[#FF69B4] backdrop-blur-sm"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
          </button>
        )}

        {/* Gallery Icon Only - Hover to enlarge */}
        {galleryImages.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={openGallery}
            className="absolute z-20 p-4 transition-all duration-300 border-2 rounded-full text-cyan-400 bg-gray-900/70 border-cyan-500/50 bottom-6 left-6 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/50"
            aria-label="View gallery"
          >
            <FaImages className="w-7 h-7 drop-shadow-lg" />
            <span className="absolute text-xs font-bold transition-opacity -translate-x-1/2 opacity-0 -top-8 left-1/2 text-cyan-300 group-hover:opacity-100">
              {galleryImages.length} images
            </span>
          </motion.button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        <div className="relative inline-block mb-4">
          <h3 className="absolute inset-0 text-xl font-bold text-cyan-400 filter blur-md animate-pulse">
            {title}
          </h3>
          <h3 className="relative text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text animate-glitch">
            {title}
          </h3>
        </div>

        <p className="flex-1 mb-6 text-base leading-relaxed text-gray-200 line-clamp-9">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium transition-all duration-200 bg-gray-800/70 border rounded-full text-cyan-300 border-[#FF00FF]/30 hover:bg-[#FF00FF]/20 hover:text-[#FF69B4] hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY MODAL - With Zoom In Animation */}
      <AnimatePresence>
        {showGallery && galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative w-full max-w-7xl max-h-[95vh] bg-gray-900 rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-2xl ${fullscreen ? 'fixed inset-0 rounded-none' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-gray-800 to-gray-900 border-cyan-500/30">
                <div className="flex items-center gap-4">
                  <FaImages className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
                      {title}
                    </h3>
                    <p className="text-gray-400">
                      Image {currentIndex + 1} / {galleryImages.length}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {/* Zoom Controls */}
                  <button 
                    onClick={zoomOut}
                    disabled={zoom <= 1}
                    className={`p-3 transition rounded-xl ${zoom <= 1 ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed' : 'bg-gray-700/80 hover:bg-gray-600 text-white'}`}
                    aria-label="Zoom out"
                  >
                    <FaSearchMinus className="w-5 h-5" />
                  </button>
                  <div className="flex items-center px-4 text-white bg-gray-700/80 rounded-xl">
                    <span className="font-mono text-sm">{Math.round(zoom * 100)}%</span>
                  </div>
                  <button 
                    onClick={zoomIn}
                    disabled={zoom >= 3}
                    className={`p-3 transition rounded-xl ${zoom >= 3 ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed' : 'bg-gray-700/80 hover:bg-gray-600 text-white'}`}
                    aria-label="Zoom in"
                  >
                    <FaSearchPlus className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setFullscreen(!fullscreen)} 
                    className="p-3 transition bg-gray-700/80 rounded-xl hover:bg-gray-600"
                    aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {fullscreen ? <FaCompressAlt className="w-5 h-5 text-white" /> : <FaExpandAlt className="w-5 h-5 text-white" />}
                  </button>
                  <button 
                    onClick={() => setShowGallery(false)} 
                    className="p-3 transition bg-red-600/80 rounded-xl hover:bg-red-600"
                    aria-label="Close gallery"
                  >
                    <FaTimes className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Image Viewer */}
              <div 
                className="relative h-[70vh] md:h-[80vh] bg-black flex items-center justify-center overflow-hidden"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              >
                <motion.img
                  key={currentIndex}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: zoom, 
                    opacity: 1,
                    x: position.x,
                    y: position.y
                  }}
                  transition={{ duration: 0.3 }}
                  src={galleryImages[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  className="object-contain max-w-full max-h-full select-none"
                  draggable={false}
                />

                {/* Navigation */}
                {galleryImages.length > 1 && (
                  <>
                    <button onClick={prev} className="absolute z-10 p-4 transition -translate-y-1/2 rounded-full left-6 top-1/2 bg-black/60 backdrop-blur hover:bg-black/80">
                      <FaArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <button onClick={next} className="absolute z-10 p-4 transition -translate-y-1/2 rounded-full right-6 top-1/2 bg-black/60 backdrop-blur hover:bg-black/80">
                      <FaArrowRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}

                {/* Dots */}
                {galleryImages.length > 1 && (
                  <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-6 left-1/2">
                    {galleryImages.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${i === currentIndex ? 'w-10 bg-cyan-400' : 'w-2 bg-gray-600'}`}
                      />
                    ))}
                  </div>
                )}

                {/* Zoom Instructions */}
                {zoom === 1 && (
                  <div className="absolute px-4 py-2 text-sm text-gray-400 transition-opacity -translate-x-1/2 rounded-lg bg-black/70 top-6 left-1/2 backdrop-blur">
                    Use mouse wheel or +/- buttons to zoom • Drag to pan when zoomed
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
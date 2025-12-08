import React, { useState } from 'react';
import ProfilePhoto from '../assets/Profile.jpg';
import JCI from '../assets/JCI.mp4';
import Yaj from '../assets/Yaj.mp4';
import Cancer from '../assets/Cancer.png';
import ProjectCard from './ProjectCard';
import Redirect from './Redirect';
import { HiLocationMarker } from 'react-icons/hi';
import { FaSuitcase, FaHandsHelping, FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import ReactIcon from '../assets/react.png';
import TailwindIcon from '../assets/cssTailwind.png';
import NodejsIcon from '../assets/nodejs.png';
import ExpressIcon from '../assets/expressjs.png';
import JavaIcon from '../assets/java.png';
import PythonIcon from '../assets/python.png';
import PostgreSQLIcon from '../assets/pg.png';
import PrismaIcon from '../assets/prisma.png';
import HTML5Icon from '../assets/HTML5.png';
import CSS3Icon from '../assets/CSS3.png';
import MongoDBIcon from '../assets/mongodb.png';

import CV from '../assets/CV.pdf';

const Welcome = () => {
  const [redirect, setRedirect] = useState({ show: false, url: '', platform: '' });

  const socialLinks = {
    github: 'https://github.com/Rayen74',
    linkedin: 'https://www.linkedin.com/in/rayen-chaaben-562581301/',
    facebook: 'https://www.facebook.com/rayen.chaabene',
    instagram: 'https://www.instagram.com/rayene.chaaben?igsh=MTY1dXI3OGVhcWlhag=='
  };

  const techStack = [
    { name: 'HTML', icon: HTML5Icon },
    { name: 'CSS', icon: CSS3Icon },
    { name: 'React', icon: ReactIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'Prisma', icon: PrismaIcon },
  ];

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
    <div className="relative overflow-hidden bg-gray-900">
      <AnimatePresence>
        {redirect.show && (
          <Redirect
            url={redirect.url}
            platform={redirect.platform}
            onCancel={handleRedirectClose}
          />
        )}
      </AnimatePresence>

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* HERO SECTION */}
      <section className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 md:px-8">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row md:justify-around">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mb-8 md:w-1/2 md:mb-0 md:pr-8"
          >
            <div className="relative inline-block">
              <h1 className="absolute inset-0 text-2xl font-bold text-cyan-400 filter blur-md animate-pulse sm:text-3xl md:text-4xl lg:text-5xl">
                Hello, I'm Rayen Chaaben
              </h1>
              <h1 className="relative text-2xl font-bold text-cyan-400 sm:text-3xl md:text-4xl lg:text-5xl neon-glow animate-glitch">
                Hello, I'm Rayen Chaaben
              </h1>
            </div>

            <p className="mt-4 text-base font-semibold text-cyan-300 sm:text-lg md:text-xl lg:text-2xl">
              Full Stack Developer & Machine Learning Enthusiast
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:mt-6 sm:text-base md:text-lg neon-glow">
              I'm a dynamic engineer student at the Higher Institute of Computer Science and Multimedia of Sfax, now thriving as a passionate freelancer specializing in innovative web and mobile applications. Fueled by a drive to deliver cutting-edge solutions, I'm excited to collaborate with visionary teams and transform bold ideas into game-changing digital realities that captivate and inspire!
            </p>

            <div className="mt-6 space-y-3 text-gray-300 sm:mt-8 sm:space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm md:text-base group">
                <HiLocationMarker className="flex-shrink-0 w-5 h-5 text-pink-500 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-pink-300">Sfax, Tunisia</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm md:text-base group">
                <FaSuitcase className="flex-shrink-0 w-4 h-4 text-cyan-500 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-cyan-300">Available for new projects</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm md:text-base group">
                <FaHandsHelping className="flex-shrink-0 w-5 h-5 text-green-500 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-green-300">Active member of JCI Sakiet Ezzit for 3 years</span>
              </div>
            </div>

            {/* Social Icons + Download CV Button */}
            <div className="flex flex-wrap items-center gap-3 mt-8 sm:gap-4 md:gap-6 sm:mt-10">
              <button
                onClick={() => handleSocialClick('github')}
                className="p-3 transition-all duration-300 bg-gray-800 border rounded-full sm:p-4 border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 group"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400 group-hover:text-cyan-300" />
              </button>
              <button
                onClick={() => handleSocialClick('linkedin')}
                className="p-3 transition-all duration-300 bg-gray-800 border rounded-full sm:p-4 border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 group"
              >
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400 group-hover:text-cyan-300" />
              </button>

              <a
                href={CV}
                download="Rayen_Chaaben_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold transition-all duration-300 border rounded-full sm:gap-3 sm:px-6 sm:py-3 md:px-8 md:py-4 sm:text-sm md:text-base text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-500/50 hover:from-cyan-500/40 hover:to-purple-600/40 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <FaDownload className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center w-full md:w-1/2"
          >
            <img
              src={ProfilePhoto}
              alt="Rayen Chaaben"
              className="object-cover border-4 rounded-full shadow-2xl w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 border-cyan-400 holo-effect"
              style={{ transform: 'scale(0.9)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-4 py-12 sm:px-6 md:px-8 sm:py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center sm:mb-12"
          >
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-cyan-400 neon-glow animate-glitch">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-gray-200 sm:text-base md:text-lg neon-glow">
              Explore my latest work in web and mobile app development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            <ProjectCard
              mediaSrc={JCI}
              mediaType="video"
              title="JCI Sakiet Ezzit Website"
              description="A dynamic web platform built for JCI Sakiet Ezzit, showcasing community initiatives with a modern, responsive design and seamless user experience."
              technologies={["React", "Tailwind CSS", "Node.js"]}
            />
            
            <ProjectCard
              mediaSrc={Yaj}
              mediaType="video"
              title="Yajoura - Advanced Project Management Tool"
              description="A robust web application inspired by Jira, designed for efficient project and task management. Features customizable Kanban boards, time tracking, performance analysis with KPIs, and seamless team collaboration to streamline workflows and boost productivity."
              technologies={["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "TanStack Query"]}
            />
            
            <ProjectCard
              mediaSrc={Cancer}
              mediaType="image"
              title="Cancer Classification using K-Means Clustering"
              description="A Python project for loading, preprocessing, and analyzing CSV datasets. It allows users to normalize data, generate correlation matrices, perform Principal Component Analysis (PCA), and apply clustering methods such as K-Means and Hierarchical Clustering, with interactive visualizations for deeper insights."
              technologies={["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]}
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="px-4 py-12 sm:px-6 md:px-8 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-cyan-400 neon-glow">
              Technologies I Work With
            </h2>
            <p className="mt-2 text-sm text-gray-300 sm:mt-3 sm:text-base md:text-lg">
              Tools & frameworks that power my projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center justify-center w-full p-4 transition-all border sm:p-6 bg-gray-800/80 border-cyan-500/30 rounded-xl hover:border-cyan-400 group"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="object-contain w-12 h-12 mb-2 transition sm:w-14 sm:h-14 md:w-16 md:h-16 sm:mb-3 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  style={{ transform: 'scale(0.9)' }}
                />
                <p className="text-xs font-bold text-center sm:text-sm md:text-base text-cyan-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
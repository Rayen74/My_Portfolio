import React, { useState } from 'react';
import ProfilePhoto from '../assets/Profile.jpg';
import JCI from '../assets/JCI.mp4';
import Yaj from '../assets/Yaj.mp4';
import FakeNewsPNG from '../assets/FakeNews.png';
import Cancer from '../assets/Cancer.png';
import TicketPriceJPG from '../assets/TicketPrice.jpg';
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
import PHPIcon from '../assets/PHP.png';
import LaravelIcon from '../assets/laravel.png';
import MongoDBIcon from '../assets/mongodb.png';

// ADDED: Import CV
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
      <section className="flex items-center justify-center min-h-screen">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row md:justify-around">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:w-1/2 md:mb-0"
          >
            <div className="relative inline-block">
              <h1 className="absolute inset-0 text-4xl font-bold text-cyan-400 filter blur-md animate-pulse md:text-5xl">
                Hello, I'm Rayen Chaaben
              </h1>
              <h1 className="relative text-4xl font-bold text-cyan-400 md:text-5xl neon-glow animate-glitch">
                Hello, I'm Rayen Chaaben
              </h1>
            </div>

            {/* ADDED: Title under name */}
            <p className="mt-4 text-xl font-semibold text-cyan-300 md:text-2xl">
              Full Stack Developer & Machine Learning Enthusiast
            </p>

            <p className="mt-6 text-base leading-relaxed text-gray-200 md:text-lg neon-glow">
              I'm a dynamic engineer student at  the Higher Institute of Computer Science and Multimedia of Sfax, now thriving as a passionate freelancer specializing in innovative web and mobile applications. Fueled by a drive to deliver cutting-edge solutions, I'm excited to collaborate with visionary teams and transform bold ideas into game-changing digital realities that captivate and inspire!
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <div className="flex items-center gap-3 text-sm font-medium md:text-base group">
                <HiLocationMarker className="w-6 h-6 text-pink-500 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-pink-300">Sfax, Tunisia</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium md:text-base group">
                <FaSuitcase className="w-5 h-5 text-cyan-500 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-cyan-300">Available for new projects</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium md:text-base group">
                <FaHandsHelping className="w-6 h-6 text-green-500 group-hover:animate-pulse" />
                <span className="neon-glow group-hover:text-green-300">Active member of JCI Sakiet Ezzit for 3 years</span>
              </div>
            </div>

            {/* Social Icons + Download CV Button */}
            <div className="flex items-center gap-6 mt-10">
              <button
                onClick={() => handleSocialClick('github')}
                className="p-4 transition-all duration-300 bg-gray-800 border rounded-full border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 group"
              >
                <FaGithub className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
              </button>
              <button
                onClick={() => handleSocialClick('linkedin')}
                className="p-4 transition-all duration-300 bg-gray-800 border rounded-full border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 group"
              >
                <FaLinkedinIn className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
              </button>

              {/* ADDED: Auto Download CV */}
              <a
                href={CV}
                download="Rayen_Chaaben_CV.pdf"
                className="flex items-center gap-3 px-8 py-4 font-bold transition-all duration-300 border rounded-full text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-500/50 hover:from-cyan-500/40 hover:to-purple-600/40 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:w-1/2"
          >
            <img
              src={ProfilePhoto}
              alt="Rayen Chaaben"
              className="object-cover w-64 h-64 border-4 rounded-full shadow-2xl border-cyan-400 md:w-80 md:h-80 holo-effect"
              style={{ transform: 'scale(0.9)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl text-cyan-400 neon-glow animate-glitch">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-gray-200 md:text-lg neon-glow">
              Explore my latest work in web and mobile app development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="px-4 py-20 bg-gray-900/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl text-cyan-400 neon-glow">
              Technologies I Work With
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Tools & frameworks that power my projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center justify-center w-full p-6 transition-all border bg-gray-800/80 border-cyan-500/30 rounded-xl hover:border-cyan-400 group"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="object-contain w-16 h-16 mb-3 transition filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  style={{ transform: 'scale(0.9)' }}
                />
                <p className="text-sm font-bold text-center md:text-base text-cyan-300">
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
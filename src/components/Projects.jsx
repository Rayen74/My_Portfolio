// src/components/Projects.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

import JCI from "../assets/JCI.mp4";
import Yaj from "../assets/Yaj.mp4";
import FakeNewsPNG from "../assets/FakeNews.png";
import Cancer from "../assets/Cancer.png";
import TicketPriceJPG from "../assets/TicketPrice.jpg";

import loadGallery from "../services/projectGallery";

// Load galleries by exact folder name
const cancerGallery = loadGallery('CancerClassification');
const fakeNewsGallery = loadGallery('FakeNewsCategory');

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = [
    {
      mediaSrc: JCI,
      mediaType: "video",
      title: "JCI Sakiet Ezzit Website",
      description: "A dynamic web platform built for JCI Sakiet Ezzit, showcasing community initiatives with a modern, responsive design and seamless user experience.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
    },
    {
      mediaSrc: Yaj,
      mediaType: "video",
      title: "Yajoura - Advanced Project Management Tool",
      description: "A robust web application inspired by Jira, designed for efficient project and task management. Features customizable Kanban boards, time tracking, performance analysis with KPIs, and seamless team collaboration to streamline workflows and boost productivity.",
      technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "TanStack Query"],
    },
    {
      mediaSrc: Cancer,
      mediaType: "image",
      title: "Cancer Classification using K-Means Clustering",
      description: "A desktop GUI application built with Python and Tkinter for loading, preprocessing, and analyzing CSV datasets. It enables users to normalize data, generate correlation matrices, perform Principal Component Analysis (PCA), and apply clustering methods like K-Means and Hierarchical Clustering, with interactive visualizations for insights.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      galleryImages: cancerGallery,
    },
    {
      mediaSrc: FakeNewsPNG,
      mediaType: "image",
      title: "Fake News Categorisation",
      description: "A machine learning project that classifies news articles as Fake or Factual using NLP techniques and classification models. Features advanced text preprocessing, TF-IDF vectorization, and multiple classifier comparisons for optimal performance.",
      technologies: ["Python", "TF-IDF", "Sklearn", "NLP", "Pandas"],
      galleryImages: fakeNewsGallery,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return allProjects;
    const q = searchQuery.toLowerCase();
    return allProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="relative inline-block">
              <h2 className="absolute inset-0 text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 filter blur-md animate-pulse">
               Featured Projects
              </h2>
              <h2 className="relative text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 neon-glow animate-glitch">
                Featured Projects
              </h2>
            </div>
            <p className="mt-3 text-lg text-gray-300">Search and explore my latest work</p>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <FaSearch className="absolute w-6 h-6 left-5 top-5 text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAll(false);
                }}
                placeholder="Search by name, tech, or description..."
                className="w-full py-5 text-lg font-medium text-gray-200 placeholder-gray-500 transition border rounded-full px-14 bg-gray-800/70 border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-3 px-8 py-4 font-bold transition border rounded-full text-cyan-300 bg-gray-800/70 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400"
              >
                {showAll ? "Show Less" : `Show More (${filteredProjects.length - 3})`}
                {showAll ? <FaChevronUp /> : <FaChevronDown />}
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
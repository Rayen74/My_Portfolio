// src/components/Projects.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

import JCI from "../assets/JCI.mp4";
import Yaj from "../assets/Yaj.mp4";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = [
    {
      videoSrc: JCI,
      title: "JCI Sakiet Ezzit Website",
      description: "A dynamic web platform built for JCI Sakiet Ezzit, showcasing community initiatives with a modern, responsive design and seamless user experience.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
    },
    {
      videoSrc: Yaj,
      title: "Yajoura - Advanced Project Management Tool",
      description: "A robust web application inspired by Jira, designed for efficient project and task management. Features customizable Kanban boards, time tracking, performance analysis with KPIs, and seamless team collaboration to streamline workflows and boost productivity.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "TanStack Query",
      ],
    },
    {
      videoSrc: Yaj,
      title: "Cancer Classification using K-Means Clustering",
      description: "A desktop GUI application built with Python and Tkinter for loading, preprocessing, and analyzing CSV datasets. It enables users to normalize data, generate correlation matrices, perform Principal Component Analysis (PCA), and apply clustering methods like K-Means and Hierarchical Clustering, with interactive visualizations for insights.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      videoSrc: Yaj,
      title: "Fake News Categorisation",
      description: "A machine learning project that classifies news articles as Fake or Factual using NLP techniques and classification models.",
      technologies: ["Python", "TF-IDF", "Sklearn", "NLP"],
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
  }, [searchQuery, allProjects]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <section className="px-4 py-20">
        <div className="container mx-auto">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="relative inline-block">
              <h2 className="absolute inset-0 text-3xl font-bold text-cyan-400 filter blur-md animate-pulse md:text-4xl">
                Featured Projects
              </h2>
              <h2 className="relative text-3xl font-bold text-cyan-400 neon-glow animate-glitch md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <p className="mt-2 text-base text-gray-200 md:text-lg neon-glow">
              Search and explore my latest work
            </p>
          </motion.div>

          {/* SEARCH BAR */}
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
                placeholder="Search by project name, description, or technology..."
                className="w-full py-5 text-lg font-medium text-gray-200 placeholder-gray-500 transition-all duration-300 border rounded-full px-14 bg-gray-800/70 border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* PROJECTS GRID */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.length > 0 ? (
              visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full">
                    <ProjectCard {...project} />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center col-span-full"
              >
                <p className="text-2xl text-gray-400 neon-glow">
                  No projects found matching "{searchQuery}"
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* SHOW MORE / SHOW LESS BUTTON */}
          {filteredProjects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-3 px-8 py-4 font-bold transition-all duration-300 border rounded-full border-cyan-500/50 bg-gray-800/70 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll
                  ? "Show Less"
                  : `Show More (${filteredProjects.length - 3} more)`}
                {showAll ? (
                  <FaChevronUp className="w-4 h-4 group-hover:animate-pulse" />
                ) : (
                  <FaChevronDown className="w-4 h-4 group-hover:animate-pulse" />
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
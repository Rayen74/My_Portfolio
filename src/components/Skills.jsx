// src/components/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import your certificate images
import DataManipulation from '../assets/DataManipulation.png';
import FinanceBeginnerPython from '../assets/FinanceBeginnerPython.png';
import MachineLearning from '../assets/MachineLearning.png';
import ReactNativeCertif from '../assets/ReactNativeCertif.png';
import NLPCertif from '../assets/NLPCertification.png';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    { name: "Data Manipulation with Pandas", issuer: "DataCamp", date: "15/07/2025", image: DataManipulation },
    { name: "Finance for Beginners with Python", issuer: "DataCamp", date: "15/11/2025", image: FinanceBeginnerPython },
    { name: "Introduction to Machine Learning", issuer: "365 DataScience", date: "21/11/2024", image: MachineLearning },
    { name: "React Native Mobile Development", issuer: "Udemy", date: "30/09/2025", image: ReactNativeCertif },
    { name: "Natural Language Processing (NLP)", issuer: "DataCamp", date: "23/11/2025", image: NLPCertif },
  ];

  const visibleCerts = showAll ? certifications : certifications.slice(0, 3);

  const skillCategories = [
    { 
      title: "Frontend", 
      color: "text-cyan-400", 
      border: "border-cyan-500/40",
      glow: "hover:shadow-cyan-500/20",
      skills: ["React.js", "React Native", "Tailwind CSS", "Framer Motion"] 
    },
    { 
      title: "Backend", 
      color: "text-green-400", 
      border: "border-green-500/40",
      glow: "hover:shadow-green-500/20",
      skills: ["Node.js", "Express.js", "Python", "JAVA"] 
    },
    { 
      title: "Databases & Tools", 
      color: "text-purple-400", 
      border: "border-purple-500/40",
      glow: "hover:shadow-purple-500/20",
      skills: ["PostgreSQL", "MongoDB", "GitHub", "Postman"] 
    },
    { 
      title: "Data Science", 
      color: "text-yellow-400", 
      border: "border-yellow-500/40",
      glow: "hover:shadow-yellow-500/20",
      skills: ["Pandas", "NumPy", "Machine Learning", "Data Analysis"] 
    }
  ];

  return (
    <>
      <section className="relative px-4 py-20 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: `radial-gradient(#00FFAA 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
        />

        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="relative inline-block">
              <h2 className="absolute inset-0 text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 filter blur-md animate-pulse">
                Skills & Certifications
              </h2>
              <h2 className="relative text-4xl font-extrabold sm:text-5xl md:text-6xl text-cyan-400 neon-glow animate-glitch">
                Skills & Certifications
              </h2>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-3xl font-bold md:text-4xl text-cyan-400 neon-glow"
            >
              Certifications
            </motion.h3>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCerts.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden transition-all duration-300 border bg-gray-800/70 backdrop-blur-sm border-yellow-500/30 rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  {/* Certificate Preview */}
                  <div className="relative h-48 p-4 bg-gray-900/50">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="object-contain w-full h-full border rounded-lg shadow-lg border-cyan-500/20"
                    />
                    <FaCertificate className="absolute w-8 h-8 text-yellow-400 top-6 left-6 opacity-70" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-cyan-300 neon-glow">
                      {cert.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-400">{cert.issuer}</p>
                    <span className="inline-block px-3 py-1 mt-4 text-xs font-medium text-pink-400 transition-all duration-300 border rounded-full bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20 hover:shadow-pink-500/20 hover:shadow-lg">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {certifications.length > 3 && (
              <div className="flex justify-center mt-12">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setShowAll(!showAll)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 font-bold transition-all duration-300 border rounded-full text-cyan-300 bg-gray-800/70 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
                >
                  {showAll ? "Show Less" : `Show More (${certifications.length - 3} hidden)`}
                  {showAll ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </motion.button>
              </div>
            )}
          </div>

          {/* Technical Skills Section */}
          <div className="mt-20">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-3xl font-bold md:text-4xl text-cyan-400 neon-glow"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  className={`p-8 transition-all duration-300 bg-gray-800/70 backdrop-blur-sm border ${category.border} rounded-2xl shadow-lg ${category.glow} hover:shadow-2xl`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full bg-current ${category.color} animate-pulse`} />
                    <h4 className={`text-2xl font-bold ${category.color} neon-glow`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center gap-4 p-3 text-gray-300 transition-all duration-200 rounded-lg hover:bg-gray-700/50 hover:scale-105 group"
                      >
                        <span className={`w-2 h-2 rounded-full bg-current ${category.color} group-hover:scale-150 transition-transform duration-200`} />
                        <span className="font-medium transition-colors duration-200 group-hover:text-white">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 mt-16 border border-cyan-500/30 rounded-2xl bg-gray-800/50 backdrop-blur-sm"
          >
            <h4 className="mb-4 text-2xl font-bold text-center text-cyan-400 neon-glow">
              Additional Expertise
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Public Speaking", "Team Collaboration", "Agile Methodology", , "API Development", "Mobile Development"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 border rounded-full bg-gray-700/50 border-gray-600/50 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-cyan-500/10 hover:shadow-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
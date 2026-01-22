import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJava, FaBootstrap, FaCodeBranch, FaChevronDown, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiJsonwebtokens,
  SiTestinglibrary,
} from "react-icons/si";
import { Sparkles, GitBranch, Code2, ExternalLink, Github, Calendar, Users, Award } from "lucide-react";

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  "Java Spring Boot": <FaJava className="text-red-500" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Karate: <SiTestinglibrary className="text-pink-500" />,
  Next: <SiNextdotjs className="text-white" />,
  JWT: <SiJsonwebtokens className="text-yellow-400" />,
  "REST API": <span className="text-blue-300 font-bold">API</span>,
};

const projects = [
  {
    id: 1,
    title: "Jalat",
    description: "A web application built with React and Spring Boot for managing tasks and projects, featuring authentication, RESTful APIs, and responsive design.",
    tech: ["Next", "Spring Boot", "JWT", "REST API"],
    link: "https://www.figma.com/proto/SBKMqWNzkzhpvEMe8yBu2n/...",
    github: "https://github.com/limveayor",
    category: "Full Stack",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    year: "2024",
    status: "Completed",
    features: [
      "Task Management System",
      "User Authentication & Authorization",
      "RESTful API Integration",
      "Real-time Updates",
      "Responsive Design"
    ],
    challenges: [
      "Implemented secure JWT authentication",
      "Optimized API performance by 40%",
      "Built scalable backend architecture"
    ],
    achievements: [
      "30% performance improvement",
      "Zero security vulnerabilities",
      "100% test coverage"
    ]
  },
  {
    id: 2,
    title: "Movie Store",
    description: "An eCommerce platform with a Java backend and React frontend, featuring product browsing, shopping cart, and secure payment integration.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/limveayor",
    category: "Frontend",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    year: "2023",
    status: "Completed",
    features: [
      "Product Catalog & Search",
      "Shopping Cart Management",
      "Secure Payment Processing",
      "User Reviews & Ratings",
      "Admin Dashboard"
    ],
    challenges: [
      "Integrated payment gateway",
      "Optimized for mobile devices",
      "Implemented state management"
    ],
    achievements: [
      "50% increase in user engagement",
      "Fast page load times",
      "Mobile-first design"
    ]
  },
  {
    id: 3,
    title: "Portal Testing API",
    description: "An API testing tool with real-time chat and analytics features, developed using WebSocket, React, and Tailwind CSS.",
    tech: ["Java Spring Boot", "Bootstrap", "Karate"],
    link: "#",
    github: "https://github.com/limveayor",
    category: "Backend & QA",
    icon: GitBranch,
    color: "from-green-500 to-emerald-500",
    year: "2024",
    status: "In Progress",
    features: [
      "API Testing & Validation",
      "Real-time Test Execution",
      "Test Report Generation",
      "CI/CD Integration",
      "Analytics Dashboard"
    ],
    challenges: [
      "Built comprehensive test framework",
      "Integrated with multiple CI/CD tools",
      "Created real-time monitoring system"
    ],
    achievements: [
      "80% test automation coverage",
      "Reduced testing time by 60%",
      "Improved code quality"
    ]
  },
];

export default function ProjectSection() {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (id) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <main>
      <section id="projects" className="relative min-h-screen py-16 sm:py-20 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my skills and experience
            </p>
          </motion.div>

          {/* Tree Structure Container */}
          <div className="relative">
            {/* Central Root/Trunk */}
            <motion.div
              className="relative mx-auto w-2 h-32 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originY: 1 }}
            >
              {/* Root glow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
            </motion.div>

            {/* Projects Tree Layout */}
            <div className="relative">
              {/* Branch Lines - SVG for smooth curves */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ height: '100%', minHeight: '600px' }}>
                {projects.map((project, index) => {
                  const isLeft = index % 2 === 0;
                  const branchY = 100 + index * 180;
                  const branchX = isLeft ? 25 : 75;
                  const projectX = isLeft ? 15 : 85;
                  
                  return (
                    <motion.path
                      key={`branch-${project.id}`}
                      d={`M 50 100 Q ${branchX} ${branchY - 50} ${projectX} ${branchY}`}
                      stroke="url(#branchGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Projects as Tree Nodes */}
              <div className="space-y-8 sm:space-y-12 lg:space-y-20">
                {projects.map((project, index) => {
                  const isLeft = index % 2 === 0;
                  const ProjectIcon = project.icon;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        delay: 0.8 + index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className={`relative flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${
                        isLeft ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Project Card */}
                      <motion.div
                        className={`group relative w-full lg:w-[45%] p-6 sm:p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                          isLeft ? "lg:ml-auto" : "lg:mr-auto"
                        }`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        style={{ zIndex: 10 }}
                      >
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        
                        {/* Branch connection point */}
                        <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 ${isLeft ? '-translate-x-1/2' : 'translate-x-1/2'} w-4 h-4 bg-gradient-to-br ${project.color} rounded-full border-4 border-slate-900 shadow-lg hidden lg:block`}></div>

                        <div className="relative z-10">
                          {/* Category Badge */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} shadow-lg`}>
                              <ProjectIcon size={20} className="text-white" />
                            </div>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                              {project.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="mb-6 text-gray-300 leading-relaxed text-sm">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-6">
                            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((item, i) => (
                                <motion.span
                                  key={i}
                                  className="flex items-center gap-1.5 text-xs bg-slate-700/50 text-gray-300 px-3 py-1.5 rounded-full font-medium border border-slate-600 hover:border-blue-500/50 transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span className="text-base">{techIcons[item] || "🔧"}</span>
                                  {item}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* View Project Button */}
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Project
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </motion.svg>
                          </motion.a>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute ${isLeft ? 'right-4' : 'left-4'} top-4 w-16 h-16 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-xl`}></div>
                      </motion.div>

                      {/* Branch Node Indicator (for mobile) */}
                      <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

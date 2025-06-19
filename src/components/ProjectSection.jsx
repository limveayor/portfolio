import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaBootstrap } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiJsonwebtokens,
  SiTestinglibrary,
} from "react-icons/si";

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
    title: "Jalat",
    description: "A web application built with React and Spring Boot for managing tasks and projects, featuring authentication, RESTful APIs, and responsive design.",
    tech: ["Next", "Spring Boot", "JWT", "REST API"],
    link: "https://www.figma.com/proto/SBKMqWNzkzhpvEMe8yBu2n/...",
  },
  {
    title: "Movie Store",
    description: "An eCommerce platform with a Java backend and React frontend, featuring product browsing, shopping cart, and secure payment integration.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portal Testing API",
    description: "An API testing tool with real-time chat and analytics features, developed using WebSocket, React, and Tailwind CSS.",
    tech: ["Java Spring Boot", "Bootstrap", "Karate"],
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <main>
      <section id="projects" className="min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 bg-gradient-to-br from-blue-900 to-purple-900">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 mt-5">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tech, link }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              className="p-6 bg-white/5 border border-white/10 text-white rounded-xl shadow-md hover:shadow-2xl transition-all transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="mb-4 text-sm text-white/90">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs bg-white/10 text-white px-2 py-1 rounded-full font-medium">
                    {techIcons[item] || "🔧"} {item}
                  </span>
                ))}
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm font-semibold text-blue-300 hover:text-white transition">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

import React from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql } from "react-icons/si";

export default function SkillSection() {
  const skills = [
    {
      name: "React.js",
      icon: <FaReact className="text-4xl text-cyan-400" />,
      percent: 85,
      color: "bg-cyan-400",
    },
    {
      name: "Java",
      icon: <FaJava className="text-4xl text-orange-400" />,
      percent: 90,
      color: "bg-orange-400",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-4xl text-green-500" />,
      percent: 80,
      color: "bg-green-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-sky-400" />,
      percent: 75,
      color: "bg-sky-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-4xl text-yellow-300" />,
      percent: 70,
      color: "bg-yellow-300",
    },
    {
      name: "Git & GitHub",
      icon: (
        <div className="flex justify-center gap-2">
          <FaGitAlt className="text-3xl text-orange-500" />
          <FaGithub className="text-3xl text-white" />
        </div>
      ),
      percent: 80,
      color: "bg-orange-500",
    },
  ];

  return (
    <main>
      <section
        id="skills"
        className="relative min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ name, icon, percent, color }, index) => (
              <div
                key={name}
                className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-blue-500/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color.replace('bg-', 'from-')} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {icon}
                  </div>
                  <p className="text-center text-xl font-semibold mb-4 text-white">{name}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className={`font-bold ${color.replace('bg-', 'text-')}`}>{percent}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${percent}%` }}
                      >
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

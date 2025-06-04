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
        className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-slate-900"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-blue-400">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ name, icon, percent, color }) => (
            <div
              key={name}
              className="p-6 border border-blue-500 rounded-xl shadow-md text-white font-medium bg-slate-800 hover:bg-blue-600 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="mb-3 flex justify-center">{icon}</div>
              <p className="text-center text-lg mb-2">{name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`${color} h-2.5 rounded-full`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-right">{percent}%</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

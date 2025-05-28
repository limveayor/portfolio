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
    { name: "React.js", icon: <FaReact className="text-4xl text-cyan-400" /> },
    { name: "Java", icon: <FaJava className="text-4xl text-orange-400" /> },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-4xl text-green-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-sky-400" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-yellow-300" /> },
    {
      name: "Git & GitHub",
      icon: (
        <div className="flex justify-center gap-2">
          <FaGitAlt className="text-3xl text-orange-500" />
          <FaGithub className="text-3xl text-white" />
        </div>
      ),
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="p-4 sm:p-5 lg:p-6 border border-blue-500 rounded-xl shadow-md text-center text-white font-medium bg-slate-800 hover:bg-blue-600 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="mb-3 flex justify-center">{icon}</div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

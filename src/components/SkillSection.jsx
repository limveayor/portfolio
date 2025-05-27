import React from "react";

export default function SkillSection() {
  return (
    <main>
      <section id="skills" className=" h-screen max-w-8xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-5">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "React.js",
            "Java",
            "Spring Boot",
            "Tailwind CSS",
            "MySQL",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border rounded-lg shadow-md text-center text-white font-medium hover:bg-blue-50 hover:shadow-lg transition-all transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

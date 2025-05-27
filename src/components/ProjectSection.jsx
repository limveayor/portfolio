import React from "react";

export default function ProjectSection() {
  return (
    <main>
      <section id="projects" className="h-screen py-16 px-4 bg-gradient-to-br from-blue-500 to-purple-600 ">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-5">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Project 1",
              description:
                "A web application built with React and Spring Boot for managing tasks and projects.",
            },
            {
              title: "Project 2",
              description:
                "An ecommerce platform built with full stack Java backend and React frontend.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white border rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

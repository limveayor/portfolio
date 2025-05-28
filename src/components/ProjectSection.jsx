import React from "react";

export default function ProjectSection() {
  return (
    <main>
      <section
        id="projects"
        className="min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 bg-gradient-to-br from-blue-500 to-purple-600"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-white mt-5">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Jalat",
              description:
                "A web application built with React and Spring Boot for managing tasks and projects.",
            },
            {
              title: "Movie",
              description:
                "An ecommerce platform built with full stack Java backend and React frontend.",
            },
            {
              title: "Portal Testing API ",
              description:
                "A real-time chat application using WebSocket and React with Tailwind styling.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 md:p-8 bg-white text-black border rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

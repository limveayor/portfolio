import React from "react";

const projects = [
  {
    title: "Jalat",
    description:
      "A web application built with React and Spring Boot for managing tasks and projects, featuring authentication, RESTful APIs, and responsive design.",
    tech: ["React", "Spring Boot", "JWT", "REST API"],
    link: "#", // Replace with actual URL if available
  },
  {
    title: "Movie Store",
    description:
      "An eCommerce platform with a Java backend and React frontend, featuring product browsing, shopping cart, and secure payment integration.",
    tech: ["Java", "Spring MVC", "React", "MySQL"],
    link: "#",
  },
  {
    title: "Portal Testing API",
    description:
      "An API testing tool with real-time chat and analytics features, developed using WebSocket, React, and Tailwind CSS.",
    tech: ["WebSocket", "React", "Tailwind CSS", "Karate"],
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <main>
      <section
        id="projects"
        className="min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 bg-gradient-to-br from-blue-900 to-purple-900"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 mt-5">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tech, link }, index) => (
            <div
              key={index}
              className="p-6 bg-white text-black border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

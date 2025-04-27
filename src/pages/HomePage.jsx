import React from "react";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans px-4 md:px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Hi, I'm <span className="text-blue-700">Lim Veayor</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">
              Full Stack Developer | Quality Assurance
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Hire Me
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2104230363/photo/portrait-of-successful-mature-asian-businessman-experienced-boss-in-business-suit-smiling-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfE3X3xnWH9VPrgzyG45EqX0Z0FQK_vsGAsX_9uX9Ms="
              alt="Lim Veayor"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto mt-16 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-5">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          I am a professional full stack developer with experience building
          high-quality websites and applications. Skilled in React.js for
          frontend development and Java Spring Boot for backend services. I love
          creating efficient, scalable, and user-friendly web experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-5">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["React.js", "Java", "Spring Boot", "Tailwind CSS", "MySQL", "Git & GitHub"].map((skill) => (
            <div
              key={skill}
              className="p-4 border rounded-lg shadow-md text-center text-gray-700 font-medium hover:bg-blue-50 hover:shadow-lg transition-all transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
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
              className="p-6 bg-white border rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-5xl mx-auto py-16 px-4 text-center bg-gradient-to-br from-blue-50 to-yellow-50"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 mt-5">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Let's build something great together!
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}

export default App;
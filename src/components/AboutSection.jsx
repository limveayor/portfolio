import React from "react";
import myImage1 from "../assets/images/picture1.JPG";

export default function AboutSection() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 gap-12">
      
      {/* Profile Image */}
      <section className="flex justify-center">
        <img
          src={myImage1}
          alt="Lim Veayor, Full Stack Developer"
          className="rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl transform hover:scale-105 transition duration-300"
        />
      </section>

      {/* About Text */}
      <section className="text-center md:text-left max-w-2xl space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold">About Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-white/90">
          Hello! I'm <strong>Lim Veayor</strong>, a passionate <strong>Full Stack Developer</strong> who loves building dynamic and performant web applications. My core stack includes <strong>React.js</strong> for intuitive, responsive UIs and <strong>Spring Boot</strong> for powerful, scalable backends.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-white/90">  
          I’m highly driven by clean code, usability, and delivering results that make a real impact. Whether collaborating with teams or working independently, I aim to create experiences that are fast, functional, and visually engaging.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-white/90">
          In my free time, I explore new technologies, contribute to open-source, and sharpen my problem-solving skills through coding challenges and software architecture design.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf" // Replace with actual resume path
            download
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-block bg-transparent border border-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Let's Connect
          </a>
        </div>
      </section>
    </main>
  );
}
  
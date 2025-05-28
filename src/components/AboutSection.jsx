import React from "react";
import myImage1 from "../assets/images/picture1.JPG";

export default function AboutSection() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-12 gap-10">
      
      {/* Profile Image with Animation */}
      <section className="flex justify-center animate-zoom-in">
        <img
          src={myImage1}
          alt="Lim Veayor"
          className="rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-xl transform hover:scale-105 transition duration-300"
        />
      </section>

      {/* About Text with Animation */}
      <section className="text-center md:text-left max-w-2xl animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
          About Me
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
          Hi! I'm a passionate and results-driven <strong>Full Stack Developer</strong> with a deep interest in crafting powerful, responsive, and scalable web applications. I specialize in building modern frontends using <strong>React.js</strong> and robust backends with <strong>Spring Boot</strong>.
        </p>
        <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
          I enjoy transforming complex problems into elegant, efficient solutions. With a keen eye for design and performance, I deliver projects that not only work flawlessly but also delight users. Let's build something amazing together!
        </p>
      </section>
    </main>
  );
}

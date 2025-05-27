import React from "react";
import myImage1 from "../assets/images/picture1.JPG";

export default function AboutSection() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white gap-5">
      <section className="flex justify-center">
        <img
          src={myImage1}
          alt="Lim Veayor"
          className="rounded-full w-96 h-96 md:w-80 md:h-80 object-cover shadow-xl transform hover:scale-105 transition-all"
        />
      </section>
      <section className="max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-white/90">
          Hi! I'm a passionate and results-driven{" "}
          <strong>Full Stack Developer</strong> with a deep interest in crafting
          powerful, responsive, and scalable web applications. I specialize in
          building modern frontends using <strong>React.js</strong> and robust
          backends with <strong>Spring Boot</strong>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90">
          I enjoy transforming complex problems into elegant, efficient
          solutions. With a keen eye for design and performance, I deliver
          projects that not only work flawlessly but also delight users. Let's
          build something amazing together!
        </p>
      </section>
    </main>
  );
}

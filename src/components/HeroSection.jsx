import React, { useEffect, useState } from "react";
import myImage from "../assets/images/picture.JPG"; // Your image path
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Font Awesome React Icons
import { FaReact, FaJava, FaTools } from "react-icons/fa";
import { SiSpringboot, SiApachejmeter } from "react-icons/si";

const jobTitles = [
  "Full Stack Developer",
  "Quality Assurance Engineer",
  "React.js & Spring Boot Specialist",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 120;

  useEffect(() => {
    const current = jobTitles[index % jobTitles.length];
    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <main>
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Hi, I'm <span className="text-blue-700">Lim Veayor</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-4 font-light text-white h-8">
              <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
                {text}
              </span>
            </p>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
              I'm a results-driven developer with a strong foundation in both
              frontend and backend technologies. I specialize in building
              responsive web applications using <strong>React.js</strong> and{" "}
              <strong>Spring Boot</strong>. I’m passionate about delivering
              high-quality code and ensuring excellent user experience.
            </p>

            {/* Tech Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-6 text-2xl text-blue-300">
              <FaReact title="React.js" />
              <SiSpringboot title="Spring Boot" />
              <FaTools title="Karate" />
              <SiApachejmeter title="JMeter" />
            </div>

            {/* Download CV Button */}
            <a
              href="/assets/Lim_Veayor_CV.pdf"
              download
              className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:you@example.com"
                className="hover:text-blue-400"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center animate-zoom-in">
            <img
              src={myImage}
              alt="Portrait of Lim Veayor"
              aria-label="Lim Veayor profile image"
              className="rounded-full w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 object-cover shadow-xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

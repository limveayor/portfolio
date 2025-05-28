import React, { useEffect, useState } from "react";
import myImage from "../assets/images/picture.JPG";

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
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
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
            <p className="text-base sm:text-lg md:text-xl mb-6 font-light text-white h-8">
              <span className="border-r-2 border-blue-400 pr-1 animate-pulse">{text}</span>
            </p>
            <a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center animate-zoom-in">
            <img
              src={myImage}
              alt="Lim Veayor"
              className="rounded-full w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 object-cover shadow-xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

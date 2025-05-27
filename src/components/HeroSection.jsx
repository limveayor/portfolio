import React from "react";
import myImage from "../assets/images/picture.JPG";

export default function HeroSection() {
  return (
    <main>
      <section className=" max-w-8xl mx-auto h-screen flex flex-col justify-center items-center text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Hi, I'm <span className="text-blue-700">Lim Veayor</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 font-light">
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
              src={myImage}
              alt="Lim Veayor"
              className="rounded-full w-96 h-96 md:w-80 md:h-80 object-cover shadow-xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

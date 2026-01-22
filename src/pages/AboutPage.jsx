import React, { useEffect } from 'react'
import AOS from 'aos';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 md:px-6 py-12">
      <div data-aos="fade-up" className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        <p className="text-lg text-gray-300 mb-6">
          I am Lim Veayor, a passionate Full Stack Developer and Quality Assurance Engineer with a commitment to building robust and user-friendly applications.
        </p>
        <p className="text-lg text-gray-300">
          With expertise in both frontend and backend technologies, I strive to create seamless experiences and maintain high code quality standards.
        </p>
      </div>
    </div>
  )
}

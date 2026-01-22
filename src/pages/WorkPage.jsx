import React, { useEffect } from 'react'
import AOS from 'aos';

export default function WorkPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">My Work</h1>
        <p className="text-lg text-gray-300">
          Explore my professional portfolio and recent projects showcasing my skills in full-stack development and quality assurance.
        </p>
      </div>
    </div>
  )
}

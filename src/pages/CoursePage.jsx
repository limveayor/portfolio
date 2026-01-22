import React, { useEffect } from 'react'
import AOS from 'aos';

export default function CoursePage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Courses & Learning</h1>
        <p className="text-lg text-gray-300">
          Throughout my career, I have continuously expanded my knowledge through various courses and certifications to stay current with industry best practices.
        </p>
      </div>
    </div>
  )
}

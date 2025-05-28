import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // only animate once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 font-sans px-4 md:px-6">
      <section data-aos="fade-up">
        <HeroSection />
      </section>
      <section data-aos="fade-up">
        <AboutSection />
      </section>
      <section data-aos="fade-up">
        <SkillSection />
      </section>
      <section data-aos="fade-up">
        <ProjectSection />
      </section>
      <section data-aos="fade-up">
        <ContactSection />
      </section>
    </main>
  );
}

export default App;

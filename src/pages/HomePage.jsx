import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

function App() {
  return (
    <main className="min-h-screen bg-blue-500 font-sans px-4 md:px-6 ">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Skills Section */}
      <SkillSection />
      {/* Projects Section */}
      <ProjectSection />
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

export default App;
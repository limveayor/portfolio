import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} <span className="text-blue-400 font-semibold">Lim Veayor</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/limveayor"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110 hover:rotate-6"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/lim-veayor-346a97245/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110 hover:rotate-6"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:you@example.com"
              className="group w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110 hover:rotate-6"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

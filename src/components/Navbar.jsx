import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="max-w-8xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 shadow-md bg-slate-900 text-white">
        <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Lim Veayor</div>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-base sm:text-lg md:text-xl">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

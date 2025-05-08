import React from "react";

export default function Footer() {
  return (
    <main className=" mt-5">
      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:jane.doe@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
    </main>
  );
}

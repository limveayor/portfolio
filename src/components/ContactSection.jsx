import React from "react";

export default function ContactSection() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
          <a
            href="mailto:jane.doe@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}

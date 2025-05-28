import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("ERROR"));
  };

  return (
    <main>
      <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-6 sm:px-8 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Contact
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-slate-800 to-slate-700 p-10 rounded-2xl shadow-xl max-w-2xl mx-auto text-left"
          >
            <label className="block mb-6">
              <span className="text-white font-semibold mb-2 block text-lg">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </label>

            <label className="block mb-6">
              <span className="text-white font-semibold mb-2 block text-lg">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </label>

            <label className="block mb-8">
              <span className="text-white font-semibold mb-2 block text-lg">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
                className="w-full rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>

            {status === "SUCCESS" && (
              <p className="mt-6 text-green-400 font-medium text-center">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {status === "ERROR" && (
              <p className="mt-6 text-red-500 font-medium text-center">
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

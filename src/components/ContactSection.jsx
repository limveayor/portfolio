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
      <section id="contact" className="relative min-h-screen py-16 sm:py-20 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Have a project in mind or want to collaborate? I'd love to hear from you! 👋
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700/50 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block text-sm uppercase tracking-wide">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-600 bg-slate-900/50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500"
                />
              </label>

              <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block text-sm uppercase tracking-wide">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-600 bg-slate-900/50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-300 font-semibold mb-2 block text-sm uppercase tracking-wide">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or just say hello..."
                className="w-full rounded-xl border border-slate-600 bg-slate-900/50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500"
              ></textarea>
            </label>

            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {status === "SUCCESS" && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 font-medium text-center text-sm sm:text-base animate-fade-in">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              </div>
            )}
            {status === "ERROR" && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 font-medium text-center text-sm sm:text-base animate-fade-in">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Oops! Something went wrong. Please try again later.
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import {
  Briefcase,
  Code,
  Smartphone,
  Server,
  LayoutDashboard,
  UserCheck,
  CalendarCheck,
  Bug,
  FileCode2,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16">
      <section className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12"> Professional Experience</h2>

        {/* Experience Card */}
        <div className="bg-white/10 hover:bg-white/20 transition duration-300 rounded-2xl shadow-xl p-6 space-y-4 group hover:shadow-2xl transform hover:scale-[1.02]">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase size={24} /> Front-end Developer & QA – CMED Construction
          </h3>
          <p className="italic text-white/80">Mar 2025 – Present</p>
          <ul className="list-disc list-inside text-white/90 text-lg space-y-1 pl-2">
            <li>Developed web apps using <strong>React.js</strong> & <strong>Spring Boot</strong>.</li>
            <li>Improved performance by 30% via API optimization and lazy-loading.</li>
            <li>
              Built a <strong>Test Automation Portal</strong>:
              <ul className="ml-6 list-disc">
                <li><Server size={18} className="inline mb-1 mr-1" /> Karate for API testing and reporting</li>
                <li><LayoutDashboard size={18} className="inline mb-1 mr-1" /> JMeter for load testing</li>
                <li><Smartphone size={18} className="inline mb-1 mr-1" /> Katalon Recorder for UI automation</li>
              </ul>
            </li>
            <li>Built a UI dashboard for test triggers and result visualizations.</li>
            <li>Connected tests to CI/CD with Jenkins and GitLab pipelines.</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-white/10 hover:bg-white/20 transition duration-300 rounded-2xl shadow-xl p-6 space-y-4 group hover:shadow-2xl transform hover:scale-[1.02]">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <UserCheck size={24} /> Intern – University of Cambodia (OAA Office)
          </h3>
          <p className="italic text-white/80">Jan 2020 – May 2020</p>
          <ul className="list-disc list-inside text-white/90 text-lg space-y-1 pl-2">
            <li>Registered students and updated university database.</li>
            <li><CalendarCheck size={18} className="inline mb-1 mr-1" /> Monitored teacher attendance.</li>
            <li>Provided tech solutions for academic/system problems.</li>
            <li>Improved administrative workflows through collaboration with staff.</li>
            <li>Assisted with backend development and API integration.</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-white/10 hover:bg-white/20 transition duration-300 rounded-2xl shadow-xl p-6 space-y-4 group hover:shadow-2xl transform hover:scale-[1.02]">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Code size={24} /> Intern Tester & Backend Dev – Amret Microfinance
          </h3>
          <p className="italic text-white/80">Jun 2023 – Dec 2024</p>
          <ul className="list-disc list-inside text-white/90 text-lg space-y-1 pl-2">
            <li>Automated mobile tests using <strong>Katalon Studio</strong> & <strong>Appium</strong>.</li>
            <li>Wrote UI and E2E test cases for Android apps.</li>
            <li><Bug size={18} className="inline mb-1 mr-1" /> Tracked bugs and collaborated with devs.</li>
            <li><FileCode2 size={18} className="inline mb-1 mr-1" /> Built a calculator app using <strong>C# WinForms</strong>.</li>
            <li>Enhanced UI/UX using <strong>React</strong> & <strong>Tailwind CSS</strong>.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { motion } from "framer-motion";
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
  Rocket,
  Zap,
  TrendingUp,
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Front-end Developer & QA",
    company: "CMED Construction",
    period: "Mar 2025 – Present",
    icon: Briefcase,
    iconColor: "from-blue-500 to-cyan-500",
    badge: "Current",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
    achievements: [
      {
        text: "Developed web apps using React.js & Spring Boot",
        icon: Rocket,
        highlight: true,
      },
      {
        text: "Improved performance by 30% via API optimization and lazy-loading",
        icon: TrendingUp,
        highlight: true,
      },
      {
        text: "Built a Test Automation Portal with multiple testing tools",
        icon: LayoutDashboard,
        subItems: [
          { text: "Karate for API testing and reporting", icon: Server },
          { text: "JMeter for load testing", icon: Zap },
          { text: "Katalon Recorder for UI automation", icon: Smartphone },
        ],
      },
      {
        text: "Built a UI dashboard for test triggers and result visualizations",
        icon: LayoutDashboard,
      },
      {
        text: "Connected tests to CI/CD with Jenkins and GitLab pipelines",
        icon: GitBranch,
      },
    ],
    technologies: ["React.js", "Spring Boot", "Karate", "JMeter", "Jenkins", "GitLab"],
  },
  {
    id: 2,
    title: "Intern Tester & Backend Dev",
    company: "Amret Microfinance",
    period: "Jun 2023 – Dec 2024",
    icon: Code,
    iconColor: "from-purple-500 to-pink-500",
    badge: "1.5 Years",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    achievements: [
      {
        text: "Automated mobile tests using Katalon Studio & Appium",
        icon: Smartphone,
        highlight: true,
      },
      {
        text: "Wrote UI and E2E test cases for Android apps",
        icon: FileCode2,
      },
      {
        text: "Tracked bugs and collaborated with developers",
        icon: Bug,
      },
      {
        text: "Built a calculator app using C# WinForms",
        icon: Code,
      },
      {
        text: "Enhanced UI/UX using React & Tailwind CSS",
        icon: Rocket,
        highlight: true,
      },
    ],
    technologies: ["Katalon Studio", "Appium", "C#", "React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Intern",
    company: "University of Cambodia (OAA Office)",
    period: "Jan 2020 – May 2020",
    icon: UserCheck,
    iconColor: "from-orange-500 to-red-500",
    badge: "5 Months",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    achievements: [
      {
        text: "Registered students and updated university database",
        icon: UserCheck,
      },
      {
        text: "Monitored teacher attendance",
        icon: CalendarCheck,
      },
      {
        text: "Provided tech solutions for academic/system problems",
        icon: Code,
      },
      {
        text: "Improved administrative workflows through collaboration",
        icon: TrendingUp,
      },
      {
        text: "Assisted with backend development and API integration",
        icon: Server,
      },
    ],
    technologies: ["Database Management", "Backend Development", "API Integration"],
  },
];

export default function AboutSection() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <section id="about" className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Professional Experience
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
              My journey in software development and quality assurance
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 z-10 shadow-lg shadow-blue-500/50"></div>

                  {/* Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] overflow-hidden">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.iconColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="relative p-6 sm:p-8 space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.iconColor} shadow-lg`}>
                              <IconComponent size={28} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                              <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.badgeColor} whitespace-nowrap`}>
                            {exp.badge}
                          </span>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-gray-400">
                          <CalendarCheck size={18} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, idx) => {
                            const AchievementIcon = achievement.icon;
                            return (
                              <div key={idx} className="space-y-2">
                                <div className={`flex items-start gap-3 p-3 rounded-lg ${
                                  achievement.highlight 
                                    ? "bg-blue-500/10 border border-blue-500/30" 
                                    : "bg-slate-700/30"
                                }`}>
                                  <AchievementIcon 
                                    size={20} 
                                    className={`mt-0.5 flex-shrink-0 ${
                                      achievement.highlight ? "text-blue-400" : "text-gray-400"
                                    }`} 
                                  />
                                  <p className={`text-sm leading-relaxed ${
                                    achievement.highlight ? "text-white font-medium" : "text-gray-300"
                                  }`}>
                                    {achievement.text}
                                  </p>
                                </div>
                                
                                {/* Sub-items */}
                                {achievement.subItems && (
                                  <div className="ml-8 space-y-2">
                                    {achievement.subItems.map((subItem, subIdx) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <div key={subIdx} className="flex items-center gap-2 text-gray-400 text-sm">
                                          <SubIcon size={16} className="text-blue-400" />
                                          <span>{subItem.text}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Technologies */}
                        <div className="pt-4 border-t border-slate-700/50">
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Technologies Used</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-3 py-1.5 bg-slate-700/50 text-gray-300 text-xs font-medium rounded-full border border-slate-600 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

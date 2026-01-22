import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/picture.JPG"; // Your image path
import cvFile from "../assets/images/CV-Lim Veayor.pdf"; // CV file
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { FaReact, FaJava, FaTools } from "react-icons/fa";
import { SiSpringboot, SiApachejmeter } from "react-icons/si";

const jobTitles = [
  "Full Stack Developer",
  "Quality Assurance Engineer",
  "React.js & Spring Boot Specialist",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 120;

  useEffect(() => {
    const current = jobTitles[index % jobTitles.length];
    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  // Floating particles animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 py-16 sm:py-20 md:py-32 overflow-hidden">
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10 px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Section */}
          <motion.div
            className="text-center md:text-left space-y-6"
            variants={itemVariants}
          >
            {/* Welcome Badge */}
            <motion.div
              className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 rounded-full text-sm font-semibold text-blue-300 mb-4 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="inline-block animate-bounce mr-2">👋</span>
              Welcome to my Portfolio
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 block mb-2"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Lim Veayor
              </motion.span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              className="h-12 sm:h-14 flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
                I'm a{" "}
                <span className="text-blue-400 border-r-2 border-blue-400 pr-1 inline-block min-w-[2px] font-bold">
                  {text}
                  {!isDeleting && (
                    <motion.span
                      className="inline-block"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I'm a results-driven developer with a strong foundation in both
              frontend and backend technologies. I specialize in building
              responsive web applications using{" "}
              <span className="text-blue-400 font-semibold relative group">
                React.js
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span>{" "}
              and{" "}
              <span className="text-green-400 font-semibold relative group">
                Spring Boot
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </span>
              . I'm passionate about delivering high-quality code and ensuring
              excellent user experience.
            </motion.p>

            {/* Floating Tech Icons */}
            <motion.div
              className="relative w-full overflow-hidden h-16 sm:h-20 my-6 sm:my-8 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-blue-500/30 shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute flex whitespace-nowrap animate-slide-left gap-6 sm:gap-10 text-3xl sm:text-4xl">
                {[...Array(2)].flatMap((_, i) => [
                  <FaReact
                    key={`react-${i}`}
                    title="React.js"
                    className="text-cyan-400 hover:scale-125 transition-transform drop-shadow-lg"
                  />,
                  <SiSpringboot
                    key={`spring-${i}`}
                    title="Spring Boot"
                    className="text-green-500 hover:scale-125 transition-transform drop-shadow-lg"
                  />,
                  <FaTools
                    key={`karate-${i}`}
                    title="Karate"
                    className="text-blue-400 hover:scale-125 transition-transform drop-shadow-lg"
                  />,
                  <SiApachejmeter
                    key={`jmeter-${i}`}
                    title="JMeter"
                    className="text-orange-400 hover:scale-125 transition-transform drop-shadow-lg"
                  />,
                  <FaJava
                    key={`java-${i}`}
                    title="Java"
                    className="text-red-400 hover:scale-125 transition-transform drop-shadow-lg"
                  />,
                ])}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href={cvFile}
                download="CV-Lim-Veayor.pdf"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-2xl overflow-hidden w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(59, 130, 246, 0.4)",
                    "0 15px 40px rgba(59, 130, 246, 0.6)",
                    "0 10px 30px rgba(59, 130, 246, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download CV
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-blue-400 text-blue-400 rounded-full font-semibold backdrop-blur-sm bg-blue-400/10 hover:bg-blue-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-start gap-4 sm:gap-6 pt-4 flex-wrap"
              variants={itemVariants}
            >
              {[
                {
                  href: "https://github.com/limveayor",
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/lim-veayor-346a97245/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:you@example.com",
                  icon: FaEnvelope,
                  label: "Email",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-500 transition-all"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <Icon className="text-lg sm:text-xl text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center relative"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Animated glow rings */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Floating tech badges around image */}
              {[
                { icon: FaReact, color: "text-cyan-400", pos: "top-0 left-0" },
                { icon: SiSpringboot, color: "text-green-500", pos: "top-1/4 right-0" },
                { icon: FaJava, color: "text-red-400", pos: "bottom-1/4 left-0" },
                { icon: FaTools, color: "text-blue-400", pos: "bottom-0 right-1/4" },
              ].map((tech, idx) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div
                    key={idx}
                    className={`hidden lg:flex absolute ${tech.pos} w-16 h-16 items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 shadow-xl`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <TechIcon className={`text-2xl ${tech.color}`} />
                  </motion.div>
                );
              })}

              {/* Image container with rotating border */}
              <motion.div
                className="relative rounded-full p-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }}
              >
                <div className="rounded-full bg-slate-900 p-2">
                  <motion.img
                    src={myImage}
                    alt="Portrait of Lim Veayor"
                    className="rounded-full w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 object-cover shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <FaArrowDown className="text-xl" />
        </motion.div>
      </section>
    </main>
  );
}

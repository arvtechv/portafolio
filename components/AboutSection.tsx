"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Server, Gamepad2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutSection() {
  const skills = [
    {
      icon: Smartphone,
      title: "Apps Móviles",
      tech: "Flutter, React Native & Swift",
      color: "bg-red-500",
    },
    {
      icon: Globe,
      title: "Web Apps",
      tech: "Next.js & React",
      color: "bg-orange-500",
    },
    {
      icon: Server,
      title: "Backend",
      tech: "Node.js & Firebase",
      color: "bg-gray-800",
    },
    {
      icon: Gamepad2,
      title: "Game Dev",
      tech: "Unity 3D & Unreal Engine",
      color: "bg-purple-600",
    },
  ];

  const recentProjects = [
    {
      title: "Carreras K-POP",
      image: "/ckpop.png",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Nomad Manager",
      image: "/nomadmanager_real.png",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Calculadora Flutter",
      image: "/calculadora.png",
      color: "from-red-600 to-orange-600"
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % recentProjects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [recentProjects.length, isPaused]);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % recentProjects.length);
    setIsPaused(true); // Pause interacting manually
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + recentProjects.length) % recentProjects.length);
    setIsPaused(true);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section id="sobremí" className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: UI/UX Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main UI/UX Container */}
              <div className="relative w-full max-w-5xl h-96 bg-gray-900 rounded-2xl border-2 border-red-500 p-6 shadow-2xl overflow-hidden">
                {/* UI/UX Elements inside - Animated Carousel */}
                <div className="absolute inset-0 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProjectIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full flex flex-col"
                    >
                      {/* Project Image Background/Container */}
                      <div className="relative flex-1 w-full overflow-hidden">
                        <Image
                          src={recentProjects[currentProjectIndex].image}
                          alt={recentProjects[currentProjectIndex].title}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent`} />
                        

                      </div>

                      {/* Bottom Section with Text */}
                      <div className="p-6 mt-auto bg-gray-900/80 backdrop-blur-sm border-t border-white/10">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1">
                            <div className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">
                              Proyecto Reciente
                            </div>
                            <div className="text-white font-bold text-sm truncate">
                              {recentProjects[currentProjectIndex].title}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="bg-green-500/20 px-3 py-1.5 rounded-full text-green-400 text-[10px] font-bold border border-green-500/30 whitespace-nowrap animate-pulse">
                              ultimos proyectos , en desarrollo
                            </div>
                            <div className="text-xl">🚀</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Small icons below - Interactive Controls */}
              <div className="flex gap-3 mt-4 justify-center">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all active:scale-95"
                  aria-label="Anterior proyecto"
                >
                  <span className="text-white text-xl font-bold">←</span>
                </button>
                
                <button
                  onClick={togglePause}
                  className={`w-12 h-12 ${isPaused ? 'bg-green-500' : 'bg-orange-500'} rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all active:scale-95`}
                  aria-label={isPaused ? "Reanudar" : "Pausar"}
                >
                  <span className="text-white text-xl font-bold">{isPaused ? "▶" : "II"}</span>
                </button>

                <button
                  onClick={nextProject}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all active:scale-95"
                  aria-label="Siguiente proyecto"
                >
                  <span className="text-white text-xl font-bold">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Small accent rectangle */}
              <div className="w-10 h-2 bg-blue-600 dark:bg-blue-400 rounded mb-2" />
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Ingeniero en Sistemas</span>
                <br />
                <span className="text-blue-600 dark:text-blue-400">con Pasión por la Innovación</span>
              </h2>
              
              {/* First Paragraph */}
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Soy un desarrollador Full Stack especializado en crear experiencias digitales completas. 
                Con más de 10 años de experiencia, transformo ideas complejas en aplicaciones intuitivas y escalables.
              </p>
              
              {/* Second Paragraph */}
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Mi experiencia abarca desde el desarrollo móvil multiplataforma con{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span>, aplicaciones web modernas con{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span> y{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>, hasta arquitecturas backend robustas con{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Node.js</span> y{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Firebase</span>. 
                También me apasiona el diseño 3D con{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Blender</span> y el análisis de datos.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
                    >
                      <div className={`${skill.color} p-3 rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{skill.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Call to Action */}
              <motion.a
                href="#portafolio"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg mt-8 hover:gap-4 transition-all"
              >
                Conoce Más Sobre Mí →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


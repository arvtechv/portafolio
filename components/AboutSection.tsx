"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Server, Box } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      icon: Smartphone,
      title: "Apps Móviles",
      tech: "Flutter & React Native",
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
      icon: Box,
      title: "Diseño 3D",
      tech: "Blender",
      color: "bg-gray-800",
    },
  ];

  return (
    <section id="sobremí" className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: UI/UX Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main UI/UX Container */}
              <div className="relative w-full max-w-md h-96 bg-gray-900 rounded-2xl border-2 border-red-500 p-6 shadow-2xl overflow-hidden">
                {/* UI/UX Elements inside */}
                <div className="absolute inset-6 flex flex-col gap-3">
                  {/* Search bar */}
                  <div className="bg-blue-600/40 rounded-lg px-4 py-2.5 text-white/90 text-sm border border-blue-500/30">
                    Search...
                  </div>
                  
                  {/* UI/UX Labels */}
                  <div className="flex gap-2 mt-1">
                    <div className="bg-blue-600 px-4 py-1.5 rounded text-white text-sm font-bold">
                      UI
                    </div>
                    <div className="bg-gray-600 px-4 py-1.5 rounded text-white text-sm font-bold">
                      UX
                    </div>
                  </div>
                  
                  {/* Icons and elements */}
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    <div className="bg-blue-500/30 rounded-lg p-2.5 flex items-center justify-center border border-blue-400/20">
                      <div className="w-7 h-7 bg-blue-500 rounded" />
                    </div>
                    <div className="bg-blue-500/30 rounded-lg p-2.5 flex items-center justify-center border border-blue-400/20">
                      <div className="w-7 h-7 bg-blue-400 rounded-full" />
                    </div>
                    <div className="bg-blue-500/30 rounded-lg p-2.5 flex items-center justify-center border border-blue-400/20">
                      <div className="w-6 h-6 border-2 border-blue-400 rounded" />
                    </div>
                    <div className="bg-blue-500/30 rounded-lg p-2.5 flex items-center justify-center border border-blue-400/20">
                      <div className="w-8 h-4 bg-blue-500 rounded" />
                    </div>
                  </div>
                  
                  {/* Chart elements */}
                  <div className="mt-3 flex gap-2">
                    <div className="flex-1 bg-blue-500/20 rounded-lg p-3 border border-blue-400/20">
                      <div className="flex gap-1.5 items-end h-14">
                        <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '50%' }} />
                        <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '75%' }} />
                        <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '35%' }} />
                        <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '90%' }} />
                        <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '60%' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button and other elements */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-8 h-8 bg-blue-500/40 rounded-full flex items-center justify-center border border-blue-400/30">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                    </div>
                    <div className="flex-1 h-1 bg-gray-700 rounded-full" />
                  </div>
                  
                  {/* Confirm button with hand */}
                  <div className="mt-auto flex items-center gap-2">
                    <div className="bg-green-500/40 px-4 py-2 rounded-lg text-white text-sm border border-green-400/30">
                      Confirm
                    </div>
                    <div className="text-white/60 text-xl">👋</div>
                  </div>
                </div>
              </div>
              
              {/* Small icons below */}
              <div className="flex gap-3 mt-4 justify-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-bold">←</span>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-lg">⚙</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-lg font-bold">S</span>
                </div>
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


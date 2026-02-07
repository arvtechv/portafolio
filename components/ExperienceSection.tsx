"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
  id: 1,
  title: "Full Stack Developer",
  company: "Freelance / Proyectos Propios",
  period: "2023 - Presente",
  description: [
    "Desarrollo de aplicaciones web y móviles a medida para negocios y emprendedores.",
    "Implementación de soluciones full stack usando Flutter, Next.js, React y APIs REST.",
    "Desarrollo y mantenimiento de productos propios como Nomad Manager (Android, Windows y Web) y Calculadora AR.",
    "Optimización de rendimiento, experiencia de usuario y despliegue en producción.",
  ],
},
{
  id: 2,
  title: "Flutter Developer",
  company: "Proyectos Personales",
  period: "2022 - 2025",
  description: [
    "Desarrollo completo de aplicaciones móviles con Flutter (Material 3).",
    "Publicación en Google Play Store de Calculadora AR y Nomad Manager.",
    "Implementación de arquitectura modular, buenas prácticas y mantenimiento continuo.",
    "Integración de almacenamiento local, lógica de negocio y experiencia de usuario optimizada.",
  ],
},
{
  id: 3,
  title: "Modelador 3D / Artista Técnico",
  company: "Videojuegos y Publicidad",
  period: "2023 - 2024",
  description: [
    "Modelado 3D de assets para videojuegos utilizando Blender y Unreal Engine.",
    "Optimización y limpieza de mallas para uso en tiempo real.",
    "Creación de animaciones 3D y efectos visuales para anuncios y material promocional.",
    "Integración de modelos y animaciones dentro del motor Unreal Engine.",
  ],
},
{
  id: 4,
  title: "Instructor de Modelado 3D",
  company: "Clases Particulares",
  period: "2024 - 2025",
  description: [
    "Impartición de clases personalizadas de modelado 3D en Blender.",
    "Formación enfocada en la creación de modelos destinados a fabricación de juguetes.",
    "Enseñanza de flujos completos: modelado, limpieza de malla, escalado y exportación.",
    "Asesoría técnica para optimización de modelos para producción e impresión 3D.",
  ],
},
{
  id: 5,
  title: "Ingeniería en Sistemas Computacionales",
  company: "Instituto Tecnológico",
  period: "2012 - 2018",
  description: [
    "Formación sólida en desarrollo de software, bases de datos y análisis de sistemas.",
    "Proyecto académico enfocado en sistemas de control y gestión de calidad.",
    "Fundamentos en algoritmos, estructuras de datos, programación orientada a objetos y patrones de diseño.",
  ],
},

];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria profesional y académica en el mundo del desarrollo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-800 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10 mt-1.5" />

              {/* Content */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div
                  className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>

                  <div
                    className={`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <ul
                    className={`space-y-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside ${
                      index % 2 === 0 ? "" : "md:list-none" /* list-none for right aligned usually looks better without bullets or custom bullets */
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i} className={index % 2 !== 0 ? "md:text-right" : ""}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

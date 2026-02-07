"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Calculadora Flutter",
    description: "Aplicación móvil de calculadora avanzada desarrollada en Flutter con un diseño elegante inspirado en iOS. Implementa operaciones matemáticas básicas (suma, resta, multiplicación, división), historial completo de operaciones con funcionalidades de edición y eliminación, asignación de títulos personalizados a operaciones guardadas, exportación de datos a dispositivos USB, y almacenamiento local eficiente utilizando Hive como base de datos NoSQL.",
    image: "/calculadora.png", // Cambia "🧮" por la ruta de tu imagen: "/calculadora.jpg"
    tags: ["Flutter", "Dart", "Hive"],
    demo: "",
    github: "https://github.com/carlosdelangel/calculadora-flutter",
    playstore: "https://play.google.com/store/apps/details?id=com.ar.calculadora&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Portafolio Web",
    description: "Portafolio profesional de alto rendimiento desarrollado con Next.js 14 y TypeScript, utilizando TailwindCSS para un diseño moderno y responsivo. Implementa modo oscuro/claro con persistencia de preferencias, animaciones fluidas mediante Framer Motion, navegación suave entre secciones, carousel interactivo para proyectos, y optimización SEO para mejor visibilidad en motores de búsqueda.",
    image: "💼",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    demo: "",
    github: "https://github.com/arvtechv/portafolio",
  },
  {
    id: 3,
    title: "Snake Classic Revival",
    description: "Recreación moderna del clásico juego Snake desarrollada completamente en Flutter y Dart. Combina la nostalgia de los teléfonos móviles de los años 90 con mejoras contemporáneas en gráficos, controles táctiles optimizados, sistema de puntuación mejorado y una experiencia de juego fluida y adictiva que respeta la esencia del juego original.",
    image: "🐍",
    tags: ["Flutter", "Dart", "Games"],
    demo: "",
    github: "https://github.com/arvtechv/portafolio",
  },
  {
    id: 4,
    title: "Comparador de Mercados",
    description: "Aplicación móvil multiplataforma desarrollada en Flutter diseñada para ayudar a consumidores a comparar precios de productos entre diferentes establecimientos comerciales. Permite a comerciantes locales publicar productos con información detallada (texto descriptivo, imágenes de alta calidad), organización por categorías, y ofrece a los usuarios finales una interfaz intuitiva y limpia para encontrar las mejores ofertas en su área.",
    image: "🛒",
    tags: ["Flutter", "Firebase", "Mobile"],
    demo: "",
    github: "https://github.com/arvtechv/portafolio",
  },
  {
    id: 5,
    title: "Nomad Manager",
    description: "Sistema completo de punto de venta (POS) desarrollado en Flutter con arquitectura multiplataforma. Diseñado para funcionar de manera nativa tanto en dispositivos móviles Android como en equipos de escritorio Windows y Linux. Enfocado en escalabilidad empresarial, rendimiento offline con sincronización automática, gestión de inventario, facturación electrónica y una experiencia de usuario intuitiva para operadores.",
    image: "/nomadmanager.png",
    tags: ["Flutter", "Desktop", "Android"],
    demo: "",
    github: "https://github.com/carlosdelangel/punto-venta",
    playstore: "https://play.google.com/store/apps/details?id=com.ar.punto_venta&pcampaignid=web_share",
  },
  {
    id: 6,
    title: "Login Flutter",
    description: "Módulo de autenticación robusto desarrollado en Flutter integrado con Firebase Authentication. Implementa una pantalla de inicio de sesión con diseño moderno, validación de formularios en tiempo real, manejo seguro de credenciales, recuperación de contraseña, y una arquitectura modular que facilita el mantenimiento, escalabilidad y reutilización en múltiples proyectos.",
    image: "/login.webp",
    tags: ["Flutter", "Firebase Auth", "UI/UX"],
    demo: "",
    github: "https://github.com/arvtechv/portafolio",
  },
  {
    id: 7,
    title: "Spa Serenity",
    description: "Embudo de conversión web completo desarrollado para un centro de bienestar y spa, enfocado en el agendamiento automático de citas. Construido con tecnologías web tradicionales (HTML5, CSS3, PHP y MySQL) que guían estratégicamente al usuario desde el interés inicial hasta la conversión final. Ofrece una experiencia de usuario responsiva, optimizada para dispositivos móviles, con diseño centrado en la acción y maximización de tasas de conversión.",
    image: "/spa.jpg",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    demo: "",
    github: "https://github.com/arvtechv/portafolio",
  },
  {
    id: 8,
    title: "Niddo App",
    description: "Aplicación móvil educativa en desarrollo para gestión y control de estudiantes de nivel preescolar y primaria. Desarrollada en Flutter y Dart, similar a LiveKid, permite a instituciones educativas gestionar asistencia, comunicaciones con padres de familia, reportes académicos, actividades diarias y seguimiento del progreso estudiantil. Incluye perfiles diferenciados para directores, maestros y padres, con notificaciones en tiempo real y almacenamiento seguro de datos.",
    image: "/niddo.webp",
    tags: ["Flutter", "Dart", "Firebase"],
    demo: "",
    github: "https://github.com/carvtechv/portafolio",
  },
    {
    id: 9,
    title: "Nomad Manager Desk",
    description: "Version de escritorio de Nomad Manager, manejo de inventario y mas ",
    image: "/nmDesk.png",
    tags: ["Flutter", "Dart", "Firebase"],
    demo: "",
    github: "https://github.com/carvtechv/portafolio",
  },
  {
  id: 10,
  title: "Carreras K-POP",
  description: "Videojuego de carreras estilo endless runner desarrollado en Unity, ambientado en un universo visual inspirado en el K-POP. El jugador controla a un personaje idol que corre a gran velocidad por escenarios dinámicos con obstáculos, rampas y coleccionables. El juego implementa generación procedural de pistas, sistema de carriles (izquierda, centro y derecha), físicas optimizadas para dispositivos móviles, animaciones integradas mediante Mixamo, sistema de puntuación y monedas, aumento progresivo de dificultad y una estética colorida con efectos visuales sincronizados al ritmo musical. Proyecto enfocado en optimización, gameplay fluido y experiencia arcade.",
  image: "/ckpop.png", 
  tags: ["Unity", "C#", "Game Development", "Endless Runner", "Mobile Game"],
  demo: "", // puedes poner un video de YouTube o itch.io
  github: "https://github.com/carlosdelangel/carreras-kpop-unity",
  playstore: "", // cuando lo publiques
}
];

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="portafolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Algunos de mis trabajos recientes que demuestran mi experiencia en desarrollo web y móvil.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {projects.length > projectsPerPage && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Proyectos anteriores"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Siguientes proyectos"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${currentPage}-${project.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                    {project.image.startsWith("/") ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        {project.image}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                      {project.playstore && (
                        <a
                          href={project.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                        >
                          <Smartphone size={18} />
                          <span className="text-sm">Play Store</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <Github size={18} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-blue-600 dark:bg-blue-400 w-8"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Project Counter */}
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            Mostrando {startIndex + 1}-{Math.min(endIndex, projects.length)} de {projects.length} proyectos
          </div>
        </div>
      </div>
    </section>
  );
}


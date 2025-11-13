// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background subtle radial glows */}
      <div className="absolute -left-28 -top-24 w-72 h-72 rounded-full bg-[#2b0b0b] opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-72 rounded-full bg-[#2b1208] opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: text */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block text-sm px-4 py-1 rounded-full border border-[#3a2a2a] text-[#f2b6a6] bg-[rgba(255,255,255,0.02)]">
              Full Stack Developer
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Desarrollo <br />
              <span className="text-[#e94e3c]">Soluciones Digitales</span>{" "}
              <span className="text-white">Completas</span>
            </h1>

            {/* animated underline under "Soluciones Digitales" */}
            <div className="mt-[-12px]">
              <span className="inline-block w-36 h-1 bg-[#f89f3c] rounded-sm transform origin-left scale-x-100" />
            </div>

            <p className="mt-6 text-gray-300 max-w-md">
              Desde el diseño visual hasta la arquitectura del backend. Transformo
              ideas en aplicaciones multiplataforma funcionales con Flutter, Next.js
              y tecnologías modernas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#portfolio"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#e94e3c] text-white rounded-lg shadow-lg"
              >
                Ver Proyectos →
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-3 px-5 py-3 border border-[#3b3b3b] text-gray-200 rounded-lg bg-[rgba(255,255,255,0.02)]"
              >
                Contáctame ✉️
              </motion.a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f89f3c]" /> Apps Multiplataforma
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e94e3c]" /> Diseño UI/UX Moderno
              </li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT: image with floating badges */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-[520px] max-w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Replace /hero.png with your image in public/hero.png */}
            <Image
              src="/hero.png"
              alt="UI UX mockup"
              width={520}
              height={320}
              className="object-cover w-full h-auto block"
            />

            {/* bottom-left badge */}
            <div className="absolute -left-4 -bottom-6 bg-[#f89f3c] text-black px-4 py-3 rounded-lg shadow-lg">
              <div className="font-bold text-lg">100+</div>
              <div className="text-xs">Proyectos Completados</div>
            </div>

            {/* top-right badge */}
            <div className="absolute -right-4 -top-6 bg-[#e94e3c] text-white px-4 py-3 rounded-lg shadow-lg">
              <div className="font-bold text-lg">10+</div>
              <div className="text-xs">Años de Experiencia</div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* small down chevron */}
      <div className="w-full flex justify-center">
        <div className="text-gray-300 animate-bounce">⌄</div>
      </div>
    </section>
  );
}

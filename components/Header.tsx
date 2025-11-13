"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-black/30 backdrop-blur-md fixed w-full z-50">
      <div className="flex items-center space-x-2">
        <span className="text-3xl text-orange-500">&lt;/&gt;</span>
        <span className="text-xl font-bold text-white">Portafolio</span>
      </div>

      <nav className="flex space-x-8 text-gray-300">
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-orange-400"
        >
          Sobre Mí
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-orange-400"
        >
          Portafolio
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-orange-400"
        >
          Habilidades
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-orange-400"
        >
          Contacto
        </ScrollLink>
      </nav>

      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
        Consulta Gratis
      </button>
    </header>
  );
}

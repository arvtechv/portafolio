"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/carlosdelangel",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/carlosdelangel",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/carlosdelangel",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contacto@carlosdelangel.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-blue-400">&lt;/&gt;</span>
              <span>Carlos del Ángel</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ingeniero en sistemas y desarrollador Full Stack apasionado por crear
              experiencias digitales excepcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Sobre Mí", "Portafolio", "Habilidades", "Contacto"].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase().replace(" ", "")}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer transition text-sm"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociales</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition text-gray-400 hover:text-white"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Carlos del Ángel Ramírez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}






"use client";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 text-xl md:text-2xl font-bold cursor-pointer"
        >
          <span className="text-blue-600 dark:text-blue-400">&lt;/&gt;</span>
          <span className="text-gray-900 dark:text-gray-100">Carlos del Angel</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          {["Sobre Mí", "Portafolio", "Habilidades", "Contacto"].map((item) => {
            const id = item === "Sobre Mí" ? "sobremí" : item.toLowerCase().replace(" ", "");
            return (
              <ScrollLink
                key={item}
                to={id}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </ScrollLink>
            );
          })}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 text-center py-6">
          {["Sobre Mí", "Portafolio", "Habilidades", "Contacto"].map((item) => {
            const id = item === "Sobre Mí" ? "sobremí" : item.toLowerCase().replace(" ", "");
            return (
              <ScrollLink
                key={item}
                to={id}
                smooth={true}
                duration={500}
                className="block py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </ScrollLink>
            );
          })}
        </div>
      )}
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Database,
  Palette,
  Server,
  Globe,
  Box,
  Terminal,
} from "lucide-react";

const skills = [
  {
    name: "Next.js",
    icon: Globe,
    category: "Frontend",
    color: "bg-black dark:bg-white text-white dark:text-black",
  },
  {
    name: "React",
    icon: Code,
    category: "Frontend",
    color: "bg-blue-500 text-white",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    category: "Mobile",
    color: "bg-blue-400 text-white",
  },
  {
    name: "Firebase",
    icon: Database,
    category: "Backend",
    color: "bg-orange-500 text-white",
  },
  {
    name: "Node.js",
    icon: Server,
    category: "Backend",
    color: "bg-green-600 text-white",
  },
  {
    name: "Blender",
    icon: Box,
    category: "3D Design",
    color: "bg-orange-400 text-white",
  },
  {
    name: "Linux",
    icon: Terminal,
    category: "DevOps",
    color: "bg-yellow-500 text-white",
  },
  {
    name: "UI/UX",
    icon: Palette,
    category: "Design",
    color: "bg-purple-500 text-white",
  },
];

export default function SkillsSection() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                  <div
                    className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






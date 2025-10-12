"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tecnologías y herramientas",
      description: "A modern web application showcasing various technologies",
      image: "/api/placeholder/300/200",
      tags: ["React", "Node.js", "MongoDB"],
      type: "Web Development",
    },
    {
      title: "LINKS Social Media",
      description: "Social media platform with real-time features",
      image: "/api/placeholder/300/200",
      tags: ["LinkedIn", "Facebook", "Dribbble"],
      type: "Social Platform",
    },
    {
      title: "LAST PRODUCT IN PORTFOLIO",
      description: "Latest project showcasing cutting-edge technologies",
      image: "/api/placeholder/300/200",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      type: "Portfolio",
    },
    {
      title: "ABOUT ME My Story",
      description: "Personal story and journey as a developer",
      image: "/api/placeholder/300/200",
      tags: ["Biography", "Experience"],
      type: "Personal",
    },
    {
      title: "FORMA Download Portfolio",
      description: "Downloadable portfolio in various formats",
      image: "/api/placeholder/300/200",
      tags: ["PDF", "Portfolio"],
      type: "Download",
    },
    {
      title: "Projects and Products Lista de productos",
      description: "Comprehensive list of all products and projects",
      image: "/api/placeholder/300/200",
      tags: ["Products", "Showcase"],
      type: "Collection",
    },
    {
      title: "A Visual Journey Through Stories from Around the World",
      description: "Interactive storytelling platform",
      image: "/api/placeholder/300/200",
      tags: ["Stories", "Interactive"],
      type: "Storytelling",
    },
    {
      title: "App Web de Aprendizaje para todos los edades.",
      description: "Educational platform for all ages",
      image: "/api/placeholder/300/200",
      tags: ["Education", "Learning"],
      type: "Education",
    },
    {
      title: "Últimos lanzamientos Hola Últimos lanzamientos",
      description: "Latest product releases and updates",
      image: "/api/placeholder/300/200",
      tags: ["Releases", "Updates"],
      type: "Latest",
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1220 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Projects and Products
          </h2>
          <p className="text-gray-400 text-lg">Lista de productos</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-red-500"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300">
                    View
                  </button>
                  <button className="flex-1 border border-gray-600 hover:border-white text-gray-300 hover:text-white py-2 px-4 rounded transition-colors duration-300">
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Ver más
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";

import React from "react";
import { motion } from "framer-motion";

const FrameworksSection = () => {
  const technologies = [
    {
      name: "React.js",
      description:
        "Modern web development library for building interactive user interfaces.",
      icon: "⚛️",
      category: "Frontend",
    },
    {
      name: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
      icon: "📗",
      category: "Backend",
    },
    {
      name: "Database",
      description:
        "Experience with various database systems including SQL and NoSQL solutions.",
      icon: "🗄️",
      category: "Database",
    },
    {
      name: "Components",
      description:
        "Building reusable and scalable component libraries for efficient development.",
      icon: "🧩",
      category: "Architecture",
    },
    {
      name: "Authentication",
      description:
        "Implementing secure authentication and authorization systems.",
      icon: "🔐",
      category: "Security",
    },
    {
      name: "Subscriptions",
      description: "Payment integration and subscription management systems.",
      icon: "💳",
      category: "Payment",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "📗" },
    { name: "TypeScript", icon: "🔷" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
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
            Frameworks & Tech
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            These are the tools and frameworks I work with. I have been
            contributing while working based on my expertise and knowledge
            gained over the years on these.
          </p>
        </motion.div>

        {/* Main Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {tech.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{tech.description}</p>
              <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 pt-12"
        >
          <h3 className="text-white text-2xl font-semibold text-center mb-8">
            Technology Stack
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworksSection;

"use client";

import React from "react";
import { motion } from "framer-motion";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Frontend Developer Nanodegree",
      subtitle: "Google Developer",
      icon: "🏆",
    },
    {
      title: "React Development Certificate",
      subtitle: "Meta Blueprint",
      icon: "🏆",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Amazon Web Services",
      icon: "🏆",
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
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 text-center max-w-sm border border-gray-700 hover:border-red-500 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

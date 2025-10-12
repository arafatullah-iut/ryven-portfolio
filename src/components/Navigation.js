"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-1/3">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-2 py-2 shadow-lg"
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo - positioned almost at left edge */}
          <div className="flex items-center pl-1">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation Menu - centered */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#experiences"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
            >
              Experiences
            </a>
            <a
              href="#works"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
            >
              Works
            </a>
          </div>

          {/* LinkedIn Button - positioned almost at right edge */}
          <div className="flex items-center pr-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;

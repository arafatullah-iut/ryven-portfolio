"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
      </div>

      {/* Content Container with proper spacing from navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          {/* Main Content - Centered */}
          <div className="w-full max-w-4xl">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 relative"
            >
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">
                CREATIVE
                <br />
                <div className="flex items-center justify-center gap-4">
                  <span>DEVELOPER</span>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="inline-block"
                  >
                    <div className="bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300 cursor-pointer text-sm font-semibold">
                      <svg
                        className="w-3 h-3 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                      </svg>
                      <span>Akash Tank</span>
                    </div>
                  </motion.div>
                </div>
                <br />
                SINCE
                <br />
                <span className="text-red-500">2020</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white text-xl lg:text-2xl font-medium mb-6"
            >
              Over the last 5y, I&apos;ve empowered +9 companies
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-12"
            >
              Developing user-centric interfaces that captivate and engage
              audiences and make a real impact.
            </motion.p>
          </div>
        </div>

        {/* Certifications Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-white text-lg font-semibold mb-8 text-center">
            CERTIFICATIONS
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* Company Logos */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">G</span>
              </div>
              <span className="text-white text-sm">Google</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <span className="text-white text-sm">Meta</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">O</span>
              </div>
              <span className="text-white text-sm">Oracle</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <span className="text-white text-sm">Microsoft</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white text-sm">AWS</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">D</span>
              </div>
              <span className="text-white text-sm">Database</span>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              View All
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

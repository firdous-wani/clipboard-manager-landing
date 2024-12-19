"use client";
import React from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

const LandingPage = () => {
  const features = [
    {
      title: "Native Integration",
      description:
        "Seamlessly works with macOS system controls and shortcuts for a native experience.",
    },
    {
      title: "Beautiful Design",
      description:
        "Stunning translucent interface with vibrancy effects that adapt to your environment.",
    },
    {
      title: "Instant Access",
      description:
        "Access your clipboard history instantly with customizable global shortcuts.",
    },
    {
      title: "Smart History",
      description:
        "Intelligent clipboard monitoring that tracks everything you copy automatically.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-blue-500/90 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full border-b border-[#eaeaea] dark:border-[#333] bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <span className="text-sm font-medium dark:text-white text-black">
              Clipboard Manager
            </span>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
              >
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-7xl font-bold tracking-tight text-black dark:text-white"
            >
              Your Clipboard,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Supercharged
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              A lightweight and professional clipboard manager that streamlines
              your workflow with powerful features and beautiful design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <a
                href="https://github.com/firdous-wani/clipboard-manager/releases/download/v1.0.0/Clipboard.Manager-1.0.0-arm64.dmg"
                className="px-8 h-12 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
              >
                Download for macOS
              </a>
              <a
                href="https://github.com/firdous-wani/clipboard-manager"
                className="px-8 h-12 flex items-center justify-center rounded-full border border-[#eaeaea] dark:border-[#333] text-sm font-medium hover:border-gray-300 dark:hover:border-gray-700 transition-colors dark:text-white"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-t border-[#eaeaea] dark:border-[#333]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-lg border border-[#eaeaea] dark:border-[#333] hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

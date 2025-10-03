// components/faq.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Code,
  Zap,
  Shield,
  Sparkles,
  Heart,
  Palette,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is RadientUI?",
      answer:
        "RadientUI is a modern UI component library built with Tailwind CSS and designed for React & Next.js applications. It provides beautifully crafted components, templates, and tools to help developers build stunning interfaces faster.",
      icon: Sparkles,
      category: "General",
    },
    {
      question: "How do I get started with RadientUI?",
      answer:
        "Getting started is easy! Simply install the package via npm, import the components you need, and start building. We have comprehensive documentation and quick start guides to help you begin your journey in minutes.",
      icon: Zap,
      category: "Getting Started",
    },
    {
      question: "Is RadientUI free to use?",
      answer:
        "Yes! RadientUI is open-source and completely free to use for both personal and commercial projects. We believe in providing high-quality tools to the developer community without any barriers.",
      icon: Heart,
      category: "Pricing",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Absolutely! All components are fully customizable. You can easily modify colors, spacing, typography, and behavior to match your brand. We use CSS variables and utility classes for maximum flexibility.",
      icon: Palette,
      category: "Customization",
    },
    {
      question: "What frameworks does RadientUI support?",
      answer:
        "RadientUI is primarily built for React and Next.js, but the components can be adapted for other frameworks. We're actively working on support for more frameworks based on community demand.",
      icon: Code,
      category: "Technical",
    },
    {
      question: "Is TypeScript supported?",
      answer:
        "Yes! RadientUI is built with TypeScript from the ground up. All components come with full type definitions, providing excellent IntelliSense and type safety for your development experience.",
      icon: Code2,
      category: "Technical",
    },
    {
      question: "How is the performance?",
      answer:
        "Performance is a top priority. RadientUI components are optimized for minimal bundle size, tree-shaking support, and runtime performance. We use modern CSS techniques and avoid unnecessary JavaScript overhead.",
      icon: Zap,
      category: "Performance",
    },
    {
      question: "Is RadientUI accessible?",
      answer:
        "Yes, accessibility is at the core of our design principles. All components follow WCAG 2.1 guidelines, include proper ARIA labels, support keyboard navigation, and work well with screen readers.",
      icon: Shield,
      category: "Accessibility",
    },
  ];

  const categories = [
    "All",
    "General",
    "Getting Started",
    "Pricing",
    "Customization",
    "Technical",
    "Performance",
    "Accessibility",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="h-6 w-6 text-purple-400" />
            <span className="text-purple-400 font-semibold">
              Got Questions?
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about RadientUI
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFAQs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <motion.div
                key={`faq-${index}-${faq.category}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => toggleFAQ(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <motion.div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            activeIndex === index
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-white/10 group-hover:bg-white/20"
                          } transition-all duration-300`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white">
                              {faq.question}
                            </h3>
                            <motion.div
                              initial={false}
                              animate={{
                                rotate: activeIndex === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 ml-4"
                            >
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </motion.div>
                          </div>
                          <span className="text-xs text-purple-400 font-medium">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-16">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/20">
            <CardContent className="p-8">
              <MessageSquare className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-400 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our team is
                here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium border border-white/20 hover:bg-white/20"
                >
                  Visit Documentation
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

// components/templates.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Star, ArrowRight } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      title: "SaaS Dashboard",
      category: "Dashboard",
      image: "/api/placeholder/400/250",
      rating: 4.9,
      downloads: "2.3k",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Store",
      category: "E-Commerce",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      downloads: "1.8k",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Landing",
      category: "Portfolio",
      image: "/api/placeholder/400/250",
      rating: 4.7,
      downloads: "3.1k",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Blog Platform",
      category: "Blog",
      image: "/api/placeholder/400/250",
      rating: 4.9,
      downloads: "1.5k",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Admin Panel",
      category: "Admin",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      downloads: "2.7k",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Landing Page",
      category: "Marketing",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      downloads: "4.2k",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Premium Templates
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start your project faster with our professionally designed templates
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative">
                  {/* Template Preview */}
                  <div
                    className={`h-48 bg-gradient-to-br ${template.gradient} opacity-20`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm" />
                  </div>

                  {/* Overlay Actions - Fixed */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      initial={false}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </motion.button>
                    <motion.button
                      initial={false}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <Download className="h-5 w-5 text-white" />
                    </motion.button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-gray-300"
                    >
                      {template.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">
                        {template.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {template.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {template.downloads} downloads
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500"
                    >
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            initial={false}
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg group"
            >
              Explore All Templates
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;

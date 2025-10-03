// components/showcase.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Eye,
  Code,
  Copy,
  Check,
  Sparkles,
  Palette,
  Code2,
  Layers,
  Zap,
  ArrowRight,
  Play,
  Settings,
  Download,
  Heart,
  Star,
  Terminal,
  Box,
  Grid3X3,
  MousePointer,
  Type,
  Image,
  Volume2,
} from "lucide-react";

const ShowCase = () => {
  const [activeTab, setActiveTab] = useState("buttons");
  const [copied, setCopied] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    notifications: false,
    progress: 75,
  });

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const componentCategories = [
    {
      id: "buttons",
      name: "Buttons",
      icon: <MousePointer className="h-4 w-4" />,
      description: "Interactive button components",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "cards",
      name: "Cards",
      icon: <Box className="h-4 w-4" />,
      description: "Beautiful card layouts",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "forms",
      name: "Forms",
      icon: <Terminal className="h-4 w-4" />,
      description: "Form input components",
      color: "from-green-500 to-teal-500",
    },
    {
      id: "layout",
      name: "Layout",
      icon: <Grid3X3 className="h-4 w-4" />,
      description: "Layout and grid components",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "typography",
      name: "Typography",
      icon: <Type className="h-4 w-4" />,
      description: "Text and heading styles",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "media",
      name: "Media",
      icon: <Image className="h-4 w-4" />,
      description: "Image and media components",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const componentExamples = {
    buttons: (
      <div className="space-y-8">
        <div className="text-center">
          <h4 className="text-white font-semibold mb-4">Button Variants</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              {
                variant: "default",
                label: "Primary",
                class: "bg-white text-black hover:bg-gray-200",
              },
              {
                variant: "secondary",
                label: "Secondary",
                class:
                  "bg-white/10 text-white border-white/20 hover:bg-white/20",
              },
              {
                variant: "outline",
                label: "Outline",
                class: "border-white/20 text-white hover:bg-white/10",
              },
              {
                variant: "ghost",
                label: "Ghost",
                class: "text-white hover:bg-white/10 hover:text-purple-400",
              },
              {
                variant: "gradient",
                label: "Gradient",
                class:
                  "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
              },
            ].map((btn, index) => (
              <motion.div
                key={index}
                initial={false}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setSelectedComponent(btn.label)}
                onHoverEnd={() => setSelectedComponent(null)}
              >
                <Button className={btn.class}>
                  {btn.label}
                  {selectedComponent === btn.label && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2"
                    >
                      <Sparkles className="h-4 w-4" />
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    cards: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Glass Card",
            description: "Modern glassmorphism design",
            icon: <Sparkles className="h-8 w-8 text-purple-400" />,
            gradient: "from-purple-500/20 to-pink-500/20",
            badge: "Popular",
          },
          {
            title: "Gradient Card",
            description: "Beautiful gradient backgrounds",
            icon: <Palette className="h-8 w-8 text-blue-400" />,
            gradient: "from-blue-500/20 to-cyan-500/20",
            badge: "New",
          },
          {
            title: "Interactive Card",
            description: "With hover animations",
            icon: <Zap className="h-8 w-8 text-yellow-400" />,
            gradient: "from-green-500/20 to-teal-500/20",
            badge: "Pro",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={false}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full group`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {card.icon}
                  </div>
                  <Badge className="bg-white/10 text-white border-white/20">
                    {card.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-purple-400"
                  >
                    Preview <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    ),
    forms: (
      <div className="max-w-md mx-auto space-y-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="text-sm font-medium text-gray-300 block mb-2">
            Email Address
          </label>
          <Input
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 focus:ring-2"
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <Switch
              checked={formData.notifications}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, notifications: checked })
              }
              className="data-[state=checked]:bg-purple-500"
            />
            <label className="text-sm text-gray-300">
              Enable notifications
            </label>
          </div>
          <Badge
            className={
              formData.notifications
                ? "bg-green-500/20 text-green-300 border-green-500/30"
                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
            }
          >
            {formData.notifications ? "Active" : "Inactive"}
          </Badge>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Profile Completion</span>
            <span className="text-gray-400">{formData.progress}%</span>
          </div>
          <Progress
            value={formData.progress}
            className="bg-white/10 h-3 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30">
            Submit Form
          </Button>
        </motion.div>
      </div>
    ),
    layout: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10 flex items-center justify-center"
          >
            <Grid3X3 className="h-8 w-8 text-white/50" />
          </motion.div>
        ))}
      </div>
    ),
    typography: (
      <div className="space-y-6 text-center">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          Heading One
        </motion.h1>
        <motion.h2
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-semibold text-white"
        >
          Heading Two
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Beautiful typography for your applications
        </motion.p>
      </div>
    ),
    media: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={false}
          whileHover={{ scale: 1.02 }}
          className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10 flex items-center justify-center"
        >
          <Image className="h-16 w-16 text-white/30" />
        </motion.div>
        <motion.div
          initial={false}
          whileHover={{ scale: 1.02 }}
          className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-white/10 flex items-center justify-center"
        >
          <Volume2 className="h-16 w-16 text-white/30" />
        </motion.div>
      </div>
    ),
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fixed Background - Removed scroll transform */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/10 to-black" />

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={false}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 font-medium">
              Component Library
            </span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Beautiful Components
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive collection of beautifully crafted
            components with interactive previews
          </p>
        </motion.div>

        {/* Component Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {componentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={false}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(category.id)}
              className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-white/10 border-white/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 mx-auto`}
              >
                {category.icon}
              </div>
              <h3 className="text-white font-medium text-sm text-center">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Component Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {componentCategories.find((c) => c.id === activeTab)?.name}{" "}
                  Components
                </h3>
                <p className="text-gray-400">
                  {
                    componentCategories.find((c) => c.id === activeTab)
                      ?.description
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Settings className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {isPlaying ? "Edit" : "Preview"}
                </motion.button>
                <motion.button
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyCode}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </motion.button>
                <motion.button
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm"
                >
                  <Download className="h-4 w-4" />
                  Export
                </motion.button>
              </div>
            </div>

            <div className="min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {
                    componentExamples[
                      activeTab as keyof typeof componentExamples
                    ]
                  }
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "50+", label: "Components", icon: Box },
            { value: "20+", label: "Templates", icon: Layers },
            { value: "1000+", label: "Icons", icon: Sparkles },
            { value: "99.9%", label: "Uptime", icon: Zap },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={`stat-${index}-${stat.label}`}
                initial={false}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="flex justify-center mb-2 text-purple-400">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

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
              Explore All Components
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowCase;

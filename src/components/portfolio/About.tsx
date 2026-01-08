"use client";

import { Download, TrendingUp, Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  { icon: TrendingUp, label: "GMV Growth", value: "Maximized" },
  { icon: Target, label: "ROAS", value: "Optimized" },
  { icon: BarChart3, label: "Campaigns", value: "100+" },
];

/* ------------------ MOTION VARIANTS ------------------ */

// Container with smooth stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // slightly slower for smooth flow
      delayChildren: 0.2,
    },
  },
};

// Smooth fade-up animation
const item = {
  hidden: { opacity: 0, y: 25 }, // smaller y offset
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // slower fade
      ease: "easeInOut",
    },
  },
};

// Smooth floating for decorative elements
const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* -------- Image Section -------- */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={container}
          >
            <div className="relative glass-card p-3 rounded-2xl inline-block">
              <motion.img
                src={profilePhoto}
                alt="Adan Khattak"
                className="w-full max-w-md h-auto rounded-xl object-cover aspect-[3/4]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Decorative Border */}
              <motion.div
                className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10"
                {...float}
              />
            </div>
          </motion.div>

          {/* -------- Content Section -------- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={container}
          >
            <motion.p variants={item} className="section-title">
              About Me
            </motion.p>

            <motion.h2 variants={item} className="section-heading glow-text">
              Who Am I
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I am a results-driven Shopee Ads Expert with hands-on experience
              managing and scaling Shopee Ads and TikTok Shop GMV Max campaigns
              for the Malaysia market. I specialize in driving sustainable
              growth through data-driven ad strategies, high-search-volume
              keyword optimization, and continuous listing improvement.
            </motion.p>

            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              I enjoy working with analytics to maximize GMV, ROAS, and ROI
              while minimizing wasted ad spend. I adapt quickly to platform
              changes and align advertising strategies with real business goals.
              With a Bachelor's degree in Software Engineering, I combine
              technical expertise with marketing acumen.
            </motion.p>

            {/* -------- Highlight Stats -------- */}
            <motion.div
              variants={container}
              className="grid grid-cols-3 gap-4 mb-10 "
            >
              {highlights.map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  whileHover={{ y: -2, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="glass-card-hover p-2 sm:p-4 text-center cursor-pointer"
                >
                  <itemData.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm sm:text-lg font-bold text-foreground ">
                    {itemData.value}
                  </p>
                  <p className="text-xs text-muted-foreground ">
                    {itemData.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

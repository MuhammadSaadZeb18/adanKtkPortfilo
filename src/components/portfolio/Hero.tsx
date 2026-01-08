"use client";

import { ArrowDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

/* ------------------ Variants ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const float = {
  animate: {
    y: [0, -14, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowPulse = {
  animate: {
    scale: [0.9, 1.05, 0.9],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const name = ["A", "D", "A", "N", "-", "K", "H", "A", "T", "T", "A", "K"];

/* ------------------ Component ------------------ */

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden bg-glow-top"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        {...float}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        {...float}
        transition={{ delay: 1.5 }}
      />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-2 items-center">
          {/* -------- Text Content -------- */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4  "
            >
              Hello, My Name Is
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start"
            >
              {name.map((n) => (
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight hover:glow-text duration-300 hover:text-primary">
                  {n}
                </motion.h1>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="w-8 h-0.5 bg-primary" />

              <p className="text-sm md:text-xl text-muted-foreground flex overflow-hidden">
                {"Shopee Ads Expert & Software Engineer"
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      animate={{
                        x: [0, 8, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8"
            >
              <MapPin size={18} className="text-primary" />
              <span>Peshawar, Pakistan</span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Results-driven Shopee Ads Expert with hands-on experience managing
              and scaling Shopee Ads and TikTok Shop GMV Max campaigns.
              Specializing in data-driven strategies that maximize GMV, ROAS,
              and ROI.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#about">Know More</a>
              </Button>

              <Button variant="glass" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* -------- Profile Image -------- */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.4,
            }}
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl scale-90"
                {...glowPulse}
              />

              {/* Image */}
              <motion.div
                className="relative glass-card p-2 rounded-2xl"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={profilePhoto}
                  alt="Adan Khattak - Shopee Ads Expert"
                  className="w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] object-cover rounded-xl"
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 glass-card px-6 py-3"
                  {...float}
                >
                  <p className="text-sm font-medium text-muted-foreground">
                    Experience
                  </p>
                  <p className="text-2xl font-bold text-primary">4+ Years</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* -------- Scroll Indicator -------- */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer">
          {/* Wrap everything in a clickable link */}
          <a href="#about" className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Scroll
            </span>

            {/* Fading dots sequence */}
            <div className="flex flex-col gap-1">
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-primary"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay }}
                />
              ))}
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

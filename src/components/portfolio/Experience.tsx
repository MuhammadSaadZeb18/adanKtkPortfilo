import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Shopee Ads Expert",
    company: "ICUP",
    date: "Nov 2021 – July 2025",
    location: "Peshawar, Pakistan",
    responsibilities: [
      "Conducted end-to-end product and market research using Data Compass to identify winning and high-performing products",
      "Created, optimized, and scaled product listings using high search volume keywords, content strategy, pricing strategy, discounts, bundles, and vouchers",
      "Planned, executed, and optimized Shopee advertising campaigns including Keyword Ads, Product Ads, Shop Ads, and Live Ads",
      "Managed advanced ad performance using Exact, Broad, Auto Bidding, and Custom ROAS strategies",
      "Led TikTok Shop GMV Max campaigns using Creative Boost and Spark Ads with audience targeting and retargeting",
      "Performed A/B testing on creatives and campaign structures to improve performance",
      "Conducted account audits, analyzed data, calculated profit margins, and ensured account health",
      "Automated affiliate targeting, reaching 5,000+ affiliates with one-click tools",
      "Ensured compliance with platform rules and improved customer experience",
    ],
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 relative bg-background-secondary/10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p className="section-title" variants={fadeUp}>
            Professional Experience
          </motion.p>
          <motion.h2 className="section-heading glow-text" variants={fadeUp}>
            Work History
          </motion.h2>
        </motion.div>

        {/* Sliding Cards */}
        <div className="flex flex-col md:flex-row md:gap-8 gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 md:p-10 rounded-2xl shadow-xl flex-1 relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {exp.date}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{exp.location}</span>
              </div>

              {/* Responsibilities */}
              <motion.div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Key Responsibilities & Achievements
                </h4>

                <motion.ul className="space-y-3">
                  {exp.responsibilities.map((res, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground hover:translate-x-2 transition-transform duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{res}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

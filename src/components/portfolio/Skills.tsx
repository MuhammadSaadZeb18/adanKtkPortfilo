import { ShoppingBag, Megaphone, Code } from "lucide-react";

const skillCategories = [
  {
    icon: ShoppingBag,
    title: "Marketplace & Growth",
    skills: [
      "Product & Market Research",
      "Winning Product Research",
      "Competitor & Category Analysis",
      "Listing Creation & Optimization",
      "Keyword Research & Ranking",
      "Pricing & Content Strategy",
      "Account Health Monitoring",
    ],
  },
  {
    icon: Megaphone,
    title: "Ads & Performance Marketing",
    skills: [
      "Shopee Ads (Keyword, Product, Shop, Live)",
      "TikTok Shop GMV Max",
      "Creative Boost & Spark Ads",
      "Audience Targeting & Retargeting",
      "ROAS / ROI Optimization",
      "A/B Testing",
      "Bidding Strategies & Margins",
      "Platform Algorithm Understanding",
    ],
  },
  {
    icon: Code,
    title: "Technical Background",
    skills: [
      "Software Engineering",
      "Data Analysis & Reporting",
      "Automation Tools",
      "Analytics Platforms",
      "Technical Problem Solving",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-title">My Expertise</p>
          <h2 className="section-heading glow-text">Skills & Competencies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card-hover p-8 rounded-2xl group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

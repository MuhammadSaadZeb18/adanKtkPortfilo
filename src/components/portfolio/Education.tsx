import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const certifications = [
  {
    title: "Shopee Seller Centre & TikTok Shop GMV Max",
    issuer: "Quantum Web Innovations",
  },
  {
    title: "B2B Marketing",
    issuer: "Webdo Solutions",
  },
  {
    title: "Amazon Dropshipping",
    issuer: "Axis Skills Training",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-background-secondary/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-title">Education & Certifications</p>
          <h2 className="section-heading glow-text">Academic Background</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Card */}
          <div className="glass-card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Bachelor of Software Engineering
            </h3>
            <p className="text-primary font-medium mb-4">(Computer Sciences)</p>

            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Islamia College University Peshawar, KPK, Pakistan
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                2021 – 2025
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass-card p-4 rounded-xl border-l-2 border-primary"
                >
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

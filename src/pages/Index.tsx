import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackgroundLightRays from "@/components/ui/BackgroundLightRays";
import BackgroundParticles from "../components/ui/BackgroundParticles";
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background always behind everything */}
      <BackgroundLightRays />
      <BackgroundParticles />

      {/* Header & content */}
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

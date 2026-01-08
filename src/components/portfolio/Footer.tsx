import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#home"
            className="text-xl font-display font-bold text-primary"
          >
            Adan<span className="text-foreground">.</span>
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Adan Khattak. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> All rights
            reserved.
          </p>

          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

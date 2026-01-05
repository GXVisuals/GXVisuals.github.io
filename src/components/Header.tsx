import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold text-foreground tracking-tight">
          GX<span className="text-primary">VISUALS</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Contact
          </button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex"
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;

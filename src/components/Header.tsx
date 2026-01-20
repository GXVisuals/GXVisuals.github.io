import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Music2 } from "lucide-react"; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // We keep the smooth scroll function, but we trigger it differently
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Updates the URL hash without jumping, good for SEO
      window.history.pushState(null, "", `#${id}`);
    }
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
        {/* LOGO SECTION - Using h1 or strong here is good for brand SEO */}
        <a href="/" className="flex items-center gap-2" aria-label="GXVISUALS Home">
          <img src="/logo.png" alt="GXVISUALS Logo" className="h-8 w-auto" /> 
          <span className="font-display text-2xl font-semibold text-foreground tracking-tight hidden sm:inline-block">
            GX<span className="text-primary">VISUALS</span>
          </span>
        </a>
        
        {/* NAVIGATION - Changed buttons to <a> tags for SEO crawling */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a 
            href="#portfolio" 
            onClick={(e) => handleScrollTo(e, "portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Featured Portfolio
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScrollTo(e, "services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2">
            {/* Social Links - Added aria-labels for SEO */}
            <a href="https://www.instagram.com/gxvisuals.3drendering/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>

            <a href="https://www.tiktok.com/@gxvisuals.3drendering" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
              <Music2 size={20} />
            </a>

            <a href="https://www.facebook.com/people/GX-Visuals/61586672549590/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>

            <a href="https://wa.me/35795115014" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2Z"></path></svg>
            </a>
          </div>

          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

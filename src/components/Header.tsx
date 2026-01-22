import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// Added Facebook to the imports
import { Instagram, Music2, Facebook } from "lucide-react"; 
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
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
        {/* LOGO SECTION */}
        <a href="/" className="flex items-center gap-2" aria-label="GXVISUALS Home">
          <img src="/logo.png" alt="GXVISUALS Logo" className="h-8 w-auto" /> 
          <span className="font-display text-2xl font-semibold text-foreground tracking-tight hidden sm:inline-block">
            GX<span className="text-primary">VISUALS</span>
          </span>
        </a>
        
        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a 
            href="#portfolio" 
            onClick={(e) => handleScrollTo(e, "portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            {t('nav_portfolio', 'Featured Portfolio')}
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScrollTo(e, "services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            {t('nav_services', 'Our Services')}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            {t('nav_contact', 'Contact Us')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center gap-2 px-3 border-x border-border/50">
            <button
              onClick={() => changeLanguage('en')}
              className={`text-[10px] font-bold tracking-tighter transition-colors ${
                i18n.language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <span className="text-muted-foreground/30 text-[10px]">|</span>
            <button
              onClick={() => changeLanguage('el')}
              className={`text-[10px] font-bold tracking-tighter transition-colors ${
                i18n.language.startsWith('el') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EL
            </button>
          </div>

          {/* SOCIAL ICONS SECTION */}
          <div className="flex items-center gap-3 mr-2">
            {/* Added Facebook Link */}
            <a href="https://www.facebook.com/people/GX-Visuals/61586672549590/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>

            <a href="https://www.instagram.com/gxvisuals.3drendering/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>

            <a href="https://www.tiktok.com/@gxvisuals.3drendering" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
              <Music2 size={18} />
            </a>

            <a href="https://wa.me/35795115014" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2Z"></path></svg>
            </a>
          </div>

          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>
              {t('nav_quote', 'Get a Quote')}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

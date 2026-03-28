import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Music2, Facebook, Phone } from "lucide-react"; 
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "./ui/NavLink"; // Χρησιμοποιούμε το component που έφτιαξες

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Ενημέρωση του URL χωρίς να κάνει reload
        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      // Αν είμαστε σε άλλη σελίδα (π.χ. Portfolio), πήγαινέ μας στην αρχική στο σωστό section
      navigate(`/#${id}`);
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
        <Link to="/" className="flex items-center gap-2" aria-label="GXVISUALS Home">
          <img src="/logo.png" alt="GXVISUALS Logo" className="h-8 w-auto" /> 
          <span className="font-display text-2xl font-semibold text-foreground tracking-tight hidden sm:inline-block">
            GX<span className="text-primary">VISUALS</span>
          </span>
        </Link>
        
        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          
          {/* Portfolio Link - Χρησιμοποιούμε το NavLink για το Active state */}
          <NavLink 
            to="/portfolio" 
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
            activeClassName="text-primary font-bold"
          >
            {t('nav_portfolio', 'Featured Portfolio')}
          </NavLink>

          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, "services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            {t('nav_services', 'Our Services')}
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
          >
            {t('nav_contact', 'Contact Us')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          
          {/* PHONE NUMBER */}
          <a 
            href="tel:+35795115014" 
            className="hidden xl:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm font-medium mr-2"
          >
            <Phone size={14} className="text-primary" />
            <span>+357 95 115014</span>
          </a>

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

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 mr-2">
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

          {/* CTA BUTTON */}
          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              {t('nav_quote', 'Get a Quote')}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Music2, Facebook, Phone } from "lucide-react"; 
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/ui/NavLink";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> 
          <span className="font-display text-2xl font-semibold text-foreground tracking-tight hidden sm:inline-block">
            GX<span className="text-primary">VISUALS</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide" activeClassName="text-primary font-bold">
            {t('nav_portfolio', 'Featured Portfolio')}
          </NavLink>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide">
            {t('nav_services', 'Our Services')}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide">
            {t('nav_contact', 'Contact Us')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+35795115014" className="hidden xl:flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium mr-2">
            <Phone size={14} className="text-primary" />
            <span>+357 95 115014</span>
          </a>

          <div className="flex items-center gap-2 px-3 border-x border-border/50">
            {['en', 'el'].map((lng) => (
              <button key={lng} onClick={() => changeLanguage(lng)} className={`text-[10px] font-bold uppercase ${i18n.language.startsWith(lng) ? 'text-primary' : 'text-muted-foreground'}`}>
                {lng}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com/gxvisuals.3drendering/" target="_blank" className="text-muted-foreground hover:text-primary"><Instagram size={18} /></a>
            <a href="https://wa.me/35795115014" target="_blank" className="text-muted-foreground hover:text-primary">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2Z"></path></svg>
            </a>
          </div>

          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>{t('nav_quote', 'Get a Quote')}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

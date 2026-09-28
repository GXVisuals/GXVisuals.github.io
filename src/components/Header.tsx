import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { isMobileViewport, openMobileContactPrompt } from "@/lib/contactPrompt";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileOpen(false);

    if (id === "contact" && isMobileViewport()) {
      e.preventDefault();
      openMobileContactPrompt();
      return;
    }

    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* Logo / Brand */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <img src="/mobile-logo.webp" alt="GX Visuals Logo" className="h-9 w-9 object-contain sm:hidden" />
            <img src="/logo.png" alt="GX Visuals Logo" className="hidden h-8 w-auto sm:block" />
            <span className="font-display text-2xl font-semibold text-foreground tracking-tight hidden sm:inline-block">
              GX<span className="text-primary">VISUALS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
              activeClassName="text-primary font-bold"
            >
              {t('nav_portfolio', 'Portfolio')}
            </NavLink>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
            >
              {t('nav_about', 'About Us')}
            </a>
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

          {/* Controls & Social Links */}
          <div className="flex items-center gap-4">
            {/* Phone Numbers Container */}
            <div className="hidden xl:flex flex-col gap-0.5 mr-2">
              <a
                href="tel:+35795115014"
                className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                <Phone size={12} className="text-primary" />
                <span>+357 95 115014</span>
              </a>
              <a
                href="tel:+447423544725"
                className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                <Phone size={12} className="text-primary" />
                <span>+44 7423 544725</span>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 border-x border-border/50">
              {['en', 'el'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`text-[10px] font-bold uppercase ${i18n.language.startsWith(lng) ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {lng}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://instagram.com/gxvisuals.3drendering/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/35795115014"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2Z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                {t('nav_quote', 'Get a Free Quote Today')}
              </a>
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors p-1"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          <Link
            to="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="font-display text-3xl text-foreground hover:text-primary transition-colors"
          >
            {t('nav_portfolio', 'Portfolio')}
          </Link>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="font-display text-3xl text-foreground hover:text-primary transition-colors"
          >
            {t('nav_about', 'About Us')}
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="font-display text-3xl text-foreground hover:text-primary transition-colors"
          >
            {t('nav_services', 'Our Services')}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="font-display text-3xl text-foreground hover:text-primary transition-colors"
          >
            {t('nav_contact', 'Contact Us')}
          </a>

          {/* Mobile Phone Numbers */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <a href="tel:+35795115014" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <Phone size={16} className="text-primary" />
              <span>+357 95 115014</span>
            </a>
            <a href="tel:+447423544725" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <Phone size={16} className="text-primary" />
              <span>+44 7423 544725</span>
            </a>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <a href="https://instagram.com/gxvisuals.3drendering/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://wa.me/35795115014" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2Z" />
              </svg>
            </a>
          </div>

          <Button asChild variant="outline" size="sm" className="mt-2">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              {t('nav_quote', 'Get a Free Quote Today')}
            </a>
          </Button>
        </div>
      )}
    </>
  );
};

export default Header;

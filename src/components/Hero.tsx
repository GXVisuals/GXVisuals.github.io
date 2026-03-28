import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/portfolio-8.webp"; // Αλλαγή σε .webp αν το μετέτρεψες για ταχύτητα
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom"; // Προσθήκη για το navigation

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Λειτουργία για το scroll indicator (βέλος κάτω) 
  // Θα το στείλουμε στα Services ή στα Testimonials αφού το Portfolio έφυγε
  const scrollToContent = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GXVISUALS - Luxury architectural rendering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center">
        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          {t('hero_eyebrow', '3D Visualization Studio')}
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-up">
          <span className="sr-only">{t('hero_seo_keywords')}</span>
          {t('hero_title_part1', 'Bring Your Vision')}
          <br />
          <span className="text-gradient">{t('hero_title_part2', 'To Life')}</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up">
          {t('hero_description', 'Fast, photorealistic 3D rendering and technical kitchen sketches with exact dimensions.')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          {/* ΤΟ ΔΙΟΡΘΩΜΕΝΟ ΚΟΥΜΠΙ: Τώρα χρησιμοποιεί Link για να αλλάξει σελίδα */}
          <Button
            asChild
            variant="hero"
            size="xl"
          >
            <Link to="/portfolio">
              {t('hero_btn_portfolio', 'View Portfolio')}
            </Link>
          </Button>
          
          <Button
            variant="hero" 
            size="xl"
            onClick={scrollToContact}
          >
            {t('hero_btn_start', 'Contact us')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;

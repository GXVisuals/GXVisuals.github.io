import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/portfolio-8.webp"; 
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToContent = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GXVISUALS"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 py-32 text-center">
        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          {t('hero_eyebrow', '3D Visualization Studio')}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-up">
          {t('hero_title_part1', 'Bring Your Vision')}
          <br />
          <span className="text-gradient">{t('hero_title_part2', 'To Life')}</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up">
          {t('hero_description', 'Fast, photorealistic 3D rendering.')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button asChild variant="hero" size="xl" className="shadow-glow">
            <Link to="/portfolio">{t('hero_btn_portfolio', 'View Portfolio')}</Link>
          </Button>
          <Button variant="hero" size="xl" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="glass-morphism">
            {t('hero_btn_start', 'Get a free Quote')}
          </Button>
        </div>
      </div>

      <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce p-2">
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroMobile from "@/assets/portfolio-8.webp"; 
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 z-0">
        <img
          src={heroMobile}
          alt="GXVISUALS - 3D Visualization"
          /* Σημαντικό: Δώσε πλάτος/ύψος για το PageSpeed */
          width={800} 
          height={1200}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          fetchPriority="high" 
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 py-32 text-center">
        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
          {t('hero_eyebrow', '3D Visualization Studio')}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6">
          {t('hero_title_part1', 'Bring Your Vision')}
          <br />
          <span className="text-gradient">{t('hero_title_part2', 'To Life')}</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t('hero_description', 'Fast, photorealistic 3D rendering.')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="xl" className="shadow-glow">
            <Link to="/portfolio">{t('hero_btn_portfolio', 'View Portfolio')}</Link>
          </Button>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="glass-morphism">
            {t('hero_btn_start', 'Contact us')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

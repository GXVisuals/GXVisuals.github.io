import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hero1 from "@/assets/portfolio-8.webp";
import hero2 from "@/assets/portfolio-29.webp";
import hero3 from "@/assets/portfolio-24.webp";
import hero4 from "@/assets/portfolio-7.webp";
import hero5 from "@/assets/portfolio-36.webp";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoaded(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[currentImageIndex]}
          alt="GXVISUALS portfolio render"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center">

        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          {t('hero_eyebrow', '3D Visualization Studio · Cyprus & Greece')}
        </span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-up">
          {t('hero_title_part1', 'See Your Home')}
          <br />
          <span className="text-gradient">{t('hero_title_part2', 'Before It\'s Built')}</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up">
          {t('hero_description', 'Photorealistic 3D renders that help you make the right decisions — before construction begins.')}
        </p>

        {/* Trust line */}
        <p className="font-body text-sm text-primary/80 tracking-wide mb-10 animate-fade-up">
          {t('hero_trust', '✦ 19 Projects Completed · Cyprus & Greece · Fast Delivery')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button asChild variant="hero" size="xl" className="shadow-glow">
            <Link to="/portfolio">
              {t('hero_btn_portfolio', 'View Our Work')}
            </Link>
          </Button>
          <Button
            variant="hero"
            size="xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-morphism"
          >
            {t('hero_btn_start', 'Get a Free Quote Today')}
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

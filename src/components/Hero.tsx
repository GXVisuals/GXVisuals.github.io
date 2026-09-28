import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { openContactFromCta } from "@/lib/contactPrompt";
import hero1 from "@/assets/portfolio-8.webp";
import hero2 from "@/assets/portfolio-29.webp";
import hero3 from "@/assets/portfolio-24.webp";
import hero4 from "@/assets/portfolio-7.webp";
import hero5 from "@/assets/portfolio-36.webp";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="GXVISUALS portfolio render"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "1800ms" }}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center">

        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          {t('hero_eyebrow', '3D Visualization Studio · C')}
        </span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-up">
          {t('hero_title_part1', 'See Your Home')}
          <br />
          <span className="text-gradient">{t('hero_title_part2', 'Before It\'s Built')}</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up">
          {t('hero_description', 'Photorealistic 3D renders that help you make the right decisions before construction begins.')}
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
            onClick={openContactFromCta}
            className="glass-morphism"
          >
            {t('hero_btn_start', 'Get a Free Quote Today')}
          </Button>
        </div>

        {/* Trust line */}
        <div className="mx-auto mt-6 inline-flex max-w-full items-center justify-center rounded-lg border border-white/15 bg-black/35 px-5 py-3 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.22)] animate-fade-up">
          <p className="font-body text-xs sm:text-sm text-primary tracking-wide">
            {t('hero_trust', '✦ 35 Projects Completed · Worldwide · Fast Delivery')}
          </p>
        </div>

      </div>

      <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce p-2">
        <ArrowDown size={24} />
      </button>

    </section>
  );
};

export default Hero;

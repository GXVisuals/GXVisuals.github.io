import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/portfolio-1.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury architectural rendering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center">
        <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
          Architectural Visualization
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-up opacity-0 [animation-delay:400ms]">
          Bring Your Vision
          <br />
          <span className="text-gradient">To Life</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 [animation-delay:600ms]">
          Premium 3D rendering services for architects, developers, and real estate professionals. 
          Transform concepts into stunning photorealistic visuals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 [animation-delay:800ms]">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToPortfolio}
          >
            View Portfolio
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;

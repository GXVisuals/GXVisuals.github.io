import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PortfolioPage = () => {
  // Πάντα στην κορυφή όταν ανοίγει η σελίδα
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Navigation Back */}
          <div className="mb-12 animate-fade-in">
            <Button asChild variant="ghost" className="hover:text-primary -ml-4">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* Header Section */}
          <div className="max-w-3xl mb-16 animate-fade-up">
            <span className="text-primary font-body text-sm tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-6 italic">
              Featured <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed">
              Explore our latest 3D visualizations, architectural renderings, and interior design concepts. 
              Each project is crafted with precision to bring architectural visions to life.
            </p>
          </div>

          {/* Το Grid του Portfolio */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <Portfolio />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

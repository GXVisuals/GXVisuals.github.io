import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PortfolioPage = () => {
  // Πάντα στην κορυφή όταν αλλάζει η σελίδα
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="font-display text-5xl md:text-7xl mb-4 italic text-center">Our Work</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto font-body">
            High-end architectural visualizations and interior design concepts.
          </p>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;

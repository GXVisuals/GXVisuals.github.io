import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials"; // Σιγουρέψου ότι το Τ είναι κεφαλαίο στο αρχείο!
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="portfolio">
        <Portfolio />
      </div>
      
      {/* Εδώ εμφανίζονται τα Testimonials */}
      <Testimonials />
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

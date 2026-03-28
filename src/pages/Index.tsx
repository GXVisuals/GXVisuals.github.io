import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Κεντρικό μήνυμα και Renders */}
        <Hero />
        
        {/* Ενότητα Portfolio με ID για το Menu */}
        <section id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </section>

        {/* Case Studies - Αναλυτική παρουσίαση έργων */}
        <CaseStudies />

        {/* Testimonials - Κοινωνική απόδειξη (Social Proof) */}
        <Testimonials />

        {/* Υπηρεσίες - Τι προσφέρεις σε Architects/Developers */}
        <Services />

        {/* Επικοινωνία */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

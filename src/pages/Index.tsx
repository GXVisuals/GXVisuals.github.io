import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials"; // Το import είναι ήδη εδώ σωστά
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Ενότητα Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* --- ΠΡΟΣΘΗΚΗ TESTIMONIALS ΕΔΩ --- */}
      <Testimonials /> 
      {/* ---------------------------------- */}

      {/* Ενότητα Υπηρεσιών */}
      <Services />

      {/* Φόρμα Επικοινωνίας */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default Index;

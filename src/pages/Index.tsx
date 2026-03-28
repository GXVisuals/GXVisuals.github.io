import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats"; // 1. Κάνε το import
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <Testimonials />

        {/* 2. Πρόσθεσε τα Stats εδώ */}
        <Stats />
        
        <Services />

        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process"; // 1. Κάνε το import
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="portfolio"><Portfolio /></section>
        <Testimonials />
        <Stats />
        
        <section id="services">
          <Services />
        </section>

        {/* 2. Πρόσθεσε το Process εδώ */}
        <Process />
        
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

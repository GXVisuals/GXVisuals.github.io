import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* LIGHTWEIGHT PORTFOLIO PREVIEW */}
        <section className="py-24 bg-muted/20 border-y border-border/50">
          <div className="container mx-auto px-6 text-center">
            <span className="text-primary font-body text-xs tracking-[0.3em] uppercase block mb-4">OUR PROJECTS</span>
            <h2 className="font-display text-4xl md:text-5xl mb-8 italic">Exceptional Visualizations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
              Explore our full gallery of 3D interior and exterior renders.
            </p>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full hover:shadow-glow transition-all transform hover:-translate-y-1"
            >
              VIEW FULL GALLERY <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <Testimonials />
        <Stats />
        
        <section id="services">
          <Services />
        </section>

        <Process />

        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

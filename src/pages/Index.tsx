import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// 1. CRITICAL: Αυτά φορτώνουν αμέσως γιατί είναι "above the fold"
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// 2. LAZY LOAD: Αυτά φορτώνουν στο παρασκήνιο (μειώνει το μέγεθος της αρχικής JS)
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Stats = lazy(() => import("@/components/Stats"));
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Το Hero πρέπει να είναι πάντα ορατό αμέσως */}
        <Hero />
        
        {/* Χρησιμοποιούμε Suspense για τα lazy components */}
        <Suspense fallback={<div className="h-32 bg-background" />}>
          
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
          
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;

import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Social proof badge imports — these are small so we import directly
import portfolio1 from "@/assets/portfolio-69.webp";
import portfolio2 from "@/assets/portfolio-23.webp";
import portfolio3 from "@/assets/portfolio-55.webp";

const About = lazy(() => import("@/components/About"));
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
        <Hero />

        <Suspense fallback={<div className="h-32 bg-background" />}>

          {/* SOCIAL PROOF TRUST BAR — right after hero */}
          <section className="py-10 bg-[#0e0e0e] border-b border-white/5">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                <div className="text-center">
                  <p className="text-3xl font-display font-semibold text-primary">19+</p>
                  <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mt-1">Projects Completed</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-display font-semibold text-primary">2</p>
                  <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mt-1">Countries Served</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-display font-semibold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mt-1">Client Satisfaction</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                {/* Top testimonial quote */}
                <div className="max-w-xs text-center md:text-left">
                  <p className="text-white/70 font-body text-sm italic leading-relaxed">
                    "Their 3D walkthroughs were the key to selling out our project in Paphos off-plan."
                  </p>
                  <p className="text-primary text-xs font-body tracking-wider uppercase mt-2">
                    — Maria Constantinou, Property Developer
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PORTFOLIO PREVIEW with thumbnails */}
          <section className="py-24 bg-muted/20 border-y border-border/50">
            <div className="container mx-auto px-6 text-center">
              <span className="text-primary font-body text-xs tracking-[0.3em] uppercase block mb-4">OUR PROJECTS</span>
              <h2 className="font-display text-4xl md:text-5xl mb-4 italic">Exceptional Visualizations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
                Explore our full gallery of 3D interior and exterior renders.
              </p>

              {/* 3 Thumbnail Previews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
                {[portfolio1, portfolio2, portfolio3].map((img, i) => (
                  <Link
                    key={i}
                    to="/portfolio"
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl block"
                  >
                    <img
                      src={img}
                      alt={`GX Visuals project preview ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-body text-xs tracking-widest uppercase">View Project</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full hover:shadow-glow transition-all transform hover:-translate-y-1 font-body text-sm tracking-widest uppercase"
              >
                VIEW FULL GALLERY <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <About />

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

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/35795115014"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
};

export default Index;

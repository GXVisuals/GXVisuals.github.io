import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react"; // Αν χρησιμοποιείς lucide-react για εικονίδια
import portfolio1 from "@/assets/portfolio-1.webp";
import portfolio32 from "@/assets/portfolio-32.webp";

const CaseStudies = () => {
  const { t } = useTranslation();

  const studies = [
    {
      id: 1,
      title: "Japandi Kitchen Concept in Limassol",
      location: "Limassol, Cyprus",
      image: "/assets/portfolio-32.webp", 
      challenge: "The client wanted a serene, minimalist kitchen that maximizes natural light. The challenge was to balance warm wood textures with functional modern surfaces in a compact space.",
      solution: "We applied Japandi design principles, using high-fidelity 3D visualization to test various oak finishes and ambient lighting scenarios before the construction phase.",
      keywords: ["Interior Design", "3D Rendering Limassol", "Kitchen Visualization"]
    },
    {
      id: 2,
      title: "Luxury Modern Villa Exterior",
      location: "Paphos, Cyprus",
      image: "/assets/portfolio-1.webp", 
      challenge: "A high-end architectural project required realistic environmental rendering to showcase how the villa interacts with the Mediterranean landscape and sunlight.",
      solution: "Using advanced sunlight simulation, we created a series of renders that highlight the villa's geometric lines and the integration of indoor-outdoor living spaces.",
      keywords: ["Architectural Visualization", "Exterior Rendering", "Luxury Real Estate"]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-body text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
            {t("case_studies_eyebrow", "From Vision to Reality")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Selected Case Studies
          </h2>
        </div>

        <div className="space-y-32">
          {studies.map((study, index) => (
            <div 
              key={study.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="overflow-hidden rounded-2xl shadow-2xl bg-black">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                    {study.location}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">
                    {study.title}
                  </h3>
                </div>
                
                <div className="space-y-6 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                  <p>
                    <strong className="text-foreground border-b border-primary/30 pb-1">The Challenge:</strong> <br/>
                    <span className="block mt-2">{study.challenge}</span>
                  </p>
                  <p>
                    <strong className="text-foreground border-b border-primary/30 pb-1">Our Solution:</strong> <br/>
                    <span className="block mt-2">{study.solution}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.keywords.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-background/50 border border-border/50 text-[9px] font-bold tracking-widest uppercase rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 p-12 rounded-3xl bg-foreground text-background text-center space-y-8">
          <h3 className="font-display text-3xl md:text-4xl">Ready to visualize your next project?</h3>
          <p className="font-body text-muted max-w-xl mx-auto opacity-80">
            Let's transform your architectural concepts into photorealistic experiences that captivate your clients.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Start a Project <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

import { Building2, Home, Layers, Video } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Visualization",
    description: "Stunning exterior and interior renders for homes, villas, and apartments that captivate buyers.",
  },
  {
    icon: Building2,
    title: "Commercial Renders",
    description: "Professional visualizations for offices, retail spaces, and mixed-use developments.",
  },
  {
    icon: Layers,
    title: "Interior Design",
    description: "Detailed interior renders showcasing materials, lighting, and furniture layouts.",
  },
  {
    icon: Video,
    title: "Animation & Walkthroughs",
    description: "Immersive 3D animations that bring architectural projects to life with movement.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive rendering solutions tailored to elevate your architectural projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card-gradient border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

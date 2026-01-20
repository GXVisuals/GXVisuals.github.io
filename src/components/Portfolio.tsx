import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"; // Ensure these components exist in your shadcn folder

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";

const projects = [
  { id: 1, image: portfolio1, title: "Modern Villa", category: "Residential Exterior" },
  { id: 2, image: portfolio2, title: "Sleek Country Home", category: "Home Facade Design" },
  { id: 3, image: portfolio3, title: "Luxury Eco‑Villa", category: "House Exterior Styling" },
  { id: 4, image: portfolio4, title: "Contemporary Modern Kitchen", category: "Interior Design" },
  { id: 5, image: portfolio5, title: "Modern Living Room", category: "Residential Interior" },
  { id: 6, image: portfolio6, title: "Minimalist Bedroom", category: "Interior Design" },
  { id: 7, image: portfolio7, title: "Skyline Terrace Apartments", category: "Urban Residential" },
  { id: 8, image: portfolio8, title: "Rustic Stone Villa", category: "Luxury Exterior" },
  { id: 9, image: portfolio9, title: "Midnight Navy Kitchen", category: "Interior Visualization" },
  { id: 10, image: portfolio10, title: "Contemporary Open Living", category: "Residential Interior" },
  { id: 11, image: portfolio11, title: "Oak & Ambient Suite", category: "Bedroom Design" },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
              {/* The Trigger is the clickable card */}
              <DialogTrigger asChild>
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-card"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`} />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}>
                    <span className="text-primary text-xs font-body tracking-wider uppercase">{project.category}</span>
                    <h3 className="font-display text-xl text-white mt-1">{project.title}</h3>
                  </div>
                </div>
              </DialogTrigger>

              {/* The "Bigger" View Pop-up */}
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-md"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

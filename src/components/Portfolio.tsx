import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { id: 1, image: portfolio1, title: "Villa Azure", category: "Residential Exterior" },
  { id: 2, image: portfolio2, title: "Skyline Penthouse", category: "Interior Design" },
  { id: 3, image: portfolio3, title: "Luminary Tower", category: "Commercial" },
  { id: 4, image: portfolio4, title: "Oak & Marble Kitchen", category: "Interior Design" },
  { id: 5, image: portfolio5, title: "Coastal Retreat", category: "Residential Interior" },
  { id: 6, image: portfolio6, title: "Cultural Arts Center", category: "Public Architecture" },
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
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of our finest architectural visualizations, showcasing the breadth of our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
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
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              />
              
              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-primary text-xs font-body tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

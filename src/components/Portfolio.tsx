import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";
import portfolio16 from "@/assets/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio-17.jpg";
import portfolio18 from "@/assets/portfolio-18.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio20 from "@/assets/portfolio-20.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    { id: 1, image: portfolio1, title: "Modern Villa", category: t("cat_res_ext") },
    { id: 2, image: portfolio2, title: "Sleek Country Home", category: t("cat_facade") },
    { id: 3, image: portfolio3, title: "Luxury Eco‑Villa", category: t("cat_styling") },
    { id: 4, image: portfolio4, title: "Contemporary Modern Kitchen", category: t("cat_interior") },
    { id: 5, image: portfolio5, title: "Modern Living Room", category: t("cat_res_int") },
    { id: 6, image: portfolio6, title: "Minimalist Bedroom", category: t("cat_interior") },
    { id: 7, image: portfolio7, title: "Skyline Terrace Apartments", category: t("cat_urban") },
    { id: 8, image: portfolio8, title: "Rustic Stone Villa", category: t("cat_luxury") },
    { id: 9, image: portfolio9, title: "Midnight Navy Kitchen", category: t("cat_vis") },
    { id: 10, image: portfolio10, title: "Contemporary Open Living", category: t("cat_res_int") },
    { id: 11, image: portfolio11, title: "Oak & Ambient Suite", category: t("cat_bedroom") },
    { id: 12, image: portfolio12, title: "Minimalist Bathroom", category: t("cat_interior") },
    { id: 13, image: portfolio13, title: "Modern Dining Room", category: t("cat_res_int") },
    { id: 14, image: portfolio14, title: "Transitional Kitchen", category: t("cat_interior") },
    { id: 15, image: portfolio15, title: "Minimalist Dining Room and Living Room", category: t("cat_res_int") },
    { id: 16, image: portfolio16, title: "Minimalist Living Room", category: t("cat_res_int") },
    { id: 17, image: portfolio17, title: "Modern Living Suite", category: t("cat_res_int") },
    { id: 18, image: portfolio18, title: "Minimalist Workspace", category: t("cat_interior") },
    { id: 19, image: portfolio19, title: "Contemporary Exterior", category: t("cat_res_ext") },
    { id: 20, image: portfolio20, title: "Luxury Marble Bath", category: t("cat_interior") },
    { id: 21, image: portfolio21, title: "Cozy Urban Lounge", category: t("cat_interior") },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            {t("portfolio_eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            {t("portfolio_header")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
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
                  
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`} />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}>
                    <span className="text-primary text-xs font-body tracking-wider uppercase">
                        {project.category}
                    </span>
                    <h3 className="font-display text-xl text-white mt-1">{project.title}</h3>
                  </div>
                </div>
              </DialogTrigger>

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

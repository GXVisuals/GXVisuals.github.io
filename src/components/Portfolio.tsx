import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Keep all your portfolio image imports here...
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
import portfolio28 from "@/assets/portfolio-28.mp4";

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    // EXTERIOR
    { id: 1, image: portfolio1, title: "Modern Villa", category: "exterior", label: t("cat_res_ext") },
    { id: 2, image: portfolio2, title: "Sleek Country Home", category: "exterior", label: t("cat_facade") },
    { id: 3, image: portfolio3, title: "Luxury Eco‑Villa", category: "exterior", label: t("cat_styling") },
    { id: 7, image: portfolio7, title: "Skyline Terrace Apartments", category: "exterior", label: t("cat_urban") },
    { id: 8, image: portfolio8, title: "Rustic Stone Villa", category: "exterior", label: t("cat_luxury") },
    { id: 19, image: portfolio19, title: "Contemporary Exterior", category: "exterior", label: t("cat_res_ext") },
    
    // INTERIOR
    { id: 4, image: portfolio4, title: "Contemporary Modern Kitchen", category: "interior", label: t("cat_interior") },
    { id: 5, image: portfolio5, title: "Modern Living Room", category: "interior", label: t("cat_res_int") },
    { id: 6, image: portfolio6, title: "Minimalist Bedroom", category: "interior", label: t("cat_interior") },
    { id: 9, image: portfolio9, title: "Midnight Navy Kitchen", category: "interior", label: t("cat_vis") },
    { id: 10, image: portfolio10, title: "Contemporary Open Living", category: "interior", label: t("cat_res_int") },
    { id: 11, image: portfolio11, title: "Oak & Ambient Suite", category: "interior", label: t("cat_bedroom") },
    { id: 12, image: portfolio12, title: "Minimalist Bathroom", category: "interior", label: t("cat_interior") },
    { id: 13, image: portfolio13, title: "Modern Dining Room", category: "interior", label: t("cat_res_int") },
    { id: 14, image: portfolio14, title: "Transitional Kitchen", category: "interior", label: t("cat_interior") },
    { id: 15, image: portfolio15, title: "Minimalist Dining & Living", category: "interior", label: t("cat_res_int") },
    { id: 16, image: portfolio16, title: "Minimalist Living Room", category: "interior", label: t("cat_res_int") },
    { id: 17, image: portfolio17, title: "Modern Living Suite", category: "interior", label: t("cat_res_int") },
    { id: 18, image: portfolio18, title: "Minimalist Workspace", category: "interior", label: t("cat_interior") },
    { id: 20, image: portfolio20, title: "Luxury Marble Bath", category: "interior", label: t("cat_interior") },
    { id: 21, image: portfolio21, title: "Cozy Urban Lounge", category: "interior", label: t("cat_interior") },

    // ANIMATIONS (Example: Replace 'videoUrl' with your YouTube/Vimeo link)
    { id: 28, image: portfolio28, // Thumbnail title: "Modern Kitchen", category: "animation", label: "3D Animation" }, 
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example link
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const tabs = [
    { id: "all", label: t("ALL") },
    { id: "exterior", label: t("EXTERIOR") },
    { id: "interior", label: t("INTERIOR") },
    { id: "animation", label: t("ANIMATION") },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            {t("portfolio_eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            {t("portfolio_header")}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-2.5 rounded-full text-xs font-body tracking-widest uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-transparent text-muted-foreground border-muted-foreground/20 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-card bg-muted"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`} />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
                    hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}>
                    <span className="text-primary text-xs font-body tracking-[0.2em] uppercase mb-2 block">
                      {project.label}
                    </span>
                    <h3 className="font-display text-2xl text-white font-light">{project.title}</h3>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black/90 flex items-center justify-center overflow-hidden">
                {project.videoUrl ? (
                  <iframe
                    className="w-full aspect-video max-h-[85vh]"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

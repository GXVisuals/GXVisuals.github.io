import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

// Imports για όλες τις εικόνες
import portfolio1 from "@/assets/portfolio-1.webp";
import portfolio2 from "@/assets/portfolio-2.webp";
import portfolio3 from "@/assets/portfolio-3.webp";
import portfolio4 from "@/assets/portfolio-4.webp";
import portfolio5 from "@/assets/portfolio-5.webp";
import portfolio6 from "@/assets/portfolio-6.webp";
import portfolio7 from "@/assets/portfolio-7.webp";
import portfolio8 from "@/assets/portfolio-8.webp";
import portfolio9 from "@/assets/portfolio-9.webp";
import portfolio10 from "@/assets/portfolio-10.webp";
import portfolio11 from "@/assets/portfolio-11.webp";
import portfolio12 from "@/assets/portfolio-12.webp";
import portfolio13 from "@/assets/portfolio-13.webp";
import portfolio14 from "@/assets/portfolio-14.webp";
import portfolio15 from "@/assets/portfolio-15.webp";
import portfolio16 from "@/assets/portfolio-16.webp";
import portfolio17 from "@/assets/portfolio-17.webp";
import portfolio18 from "@/assets/portfolio-18.webp";
import portfolio19 from "@/assets/portfolio-19.webp";
import portfolio20 from "@/assets/portfolio-20.webp";
import portfolio21 from "@/assets/portfolio-21.webp";
import portfolio22 from "@/assets/portfolio-22.webp";
import portfolio23 from "@/assets/portfolio-23.webp";
import portfolio24 from "@/assets/portfolio-24.webp";
import portfolio25 from "@/assets/portfolio-25.webp";
import portfolio26 from "@/assets/portfolio-26.webp";
import portfolio27 from "@/assets/portfolio-27.webp";
import portfolio28 from "@/assets/portfolio-28.webp";
import portfolio29 from "@/assets/portfolio-29.webp";
import portfolio30 from "@/assets/portfolio-30.webp";
import portfolio31 from "@/assets/portfolio-31.webp"; 
import portfolio32 from "@/assets/portfolio-32.webp"; 
import portfolio33 from "@/assets/portfolio-33.webp"; 
import portfolio34 from "@/assets/portfolio-34.webp"; 
import portfolio35 from "@/assets/portfolio-35.webp"; 
import portfolio36 from "@/assets/portfolio-36.webp"; 

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    // EXTERIOR
    { id: 1, image: portfolio1, title: "Modern Villa", category: "exterior", label: t("cat_res_ext"), altText: "Photorealistic 3D exterior render of a modern luxury villa in Cyprus" },
    { id: 2, image: portfolio2, title: "Sleek Country Home", category: "exterior", label: t("cat_facade"), altText: "Modern country house facade design 3D visualization" },
    { id: 3, image: portfolio3, title: "Luxury Eco-Villa", category: "exterior", label: t("cat_styling"), altText: "Eco-friendly luxury villa exterior architectural render" },
    { id: 7, image: portfolio7, title: "Skyline Terrace Apartments", category: "exterior", label: t("cat_urban"), altText: "Urban apartment building 3D rendering skyline view" },
    { id: 8, image: portfolio8, title: "Rustic Stone Villa", category: "exterior", label: t("cat_luxury"), altText: "Traditional stone villa exterior architectural visualization" },
    { id: 19, image: portfolio19, title: "Contemporary Exterior", category: "exterior", label: t("cat_res_ext"), altText: "Contemporary residential architecture 3D render" },
    { id: 22, image: portfolio22, title: "The Arch House", category: "exterior", label: t("cat_res_ext"), altText: "Modern arch-style house exterior visualization" },
    { id: 23, image: portfolio23, title: "Isometric View with Section", category: "exterior", label: t("cat_res_ext"), altText: "3D isometric section view of a residential building" },
    { id: 24, image: portfolio24, title: "Minimalist Villa", category: "exterior", label: t("cat_res_ext"), altText: "Minimalist luxury villa architectural visualization" },
    { id: 26, image: portfolio26, title: "Isometric View", category: "exterior", label: t("cat_res_ext"), altText: "3D isometric house plan visualization" },
    { id: 27, image: portfolio27, title: "3D Floor Plan", category: "exterior", label: t("cat_res_ext"), altText: "Detailed 3D floor plan for interior and exterior layout" },
    { id: 28, image: portfolio28, title: "Modern Facade Villa", category: "exterior", label: t("cat_res_ext"), altText: "Luxury villa facade design 3D rendering" },
    { id: 29, image: portfolio29, title: "Aerial Perspective", category: "exterior", label: t("cat_res_ext"), altText: "Aerial 3D view of architectural site development" },
    { id: 30, image: portfolio30, title: "3D Plan View", category: "exterior", label: t("cat_res_ext"), altText: "Master plan 3D architectural visualization" },
    { id: 35, image: portfolio35, title: "Urban Skyscraper Plaza", category: "exterior", label: t("cat_urban"), altText: "Architectural visualization of luxury urban residential skyscrapers" },
    { id: 36, image: portfolio36, title: "Modern Mixed-Use Complex", category: "exterior", label: t("cat_res_ext"), altText: "Photorealistic 3D exterior render of modern mixed-use architecture" },

    // INTERIOR
    { id: 4, image: portfolio4, title: "Contemporary Modern Kitchen", category: "interior", label: t("cat_interior"), altText: "Modern kitchen design with photorealistic 3D rendering" },
    { id: 5, image: portfolio5, title: "Modern Living Room", category: "interior", label: t("cat_res_int"), altText: "Luxury interior design 3D visualization for living room" },
    { id: 6, image: portfolio6, title: "Minimalist Bedroom", category: "interior", label: t("cat_interior"), altText: "Minimalist bedroom interior render with realistic lighting" },
    { id: 9, image: portfolio9, title: "Midnight Navy Kitchen", category: "interior", label: t("cat_vis"), altText: "High-end kitchen 3D visualization navy blue cabinets" },
    { id: 10, image: portfolio10, title: "Contemporary Open Living", category: "interior", label: t("cat_res_int"), altText: "Open plan living room and dining interior visualization" },
    { id: 11, image: portfolio11, title: "Oak & Ambient Suite", category: "interior", label: t("cat_bedroom"), altText: "Master bedroom 3D render with oak materials" },
    { id: 12, image: portfolio12, title: "Minimalist Bathroom", category: "interior", label: t("cat_interior"), altText: "Modern bathroom 3D visualization with luxury fixtures" },
    { id: 13, image: portfolio13, title: "Modern Dining Room", category: "interior", label: t("cat_res_int"), altText: "Luxury dining room interior photorealistic render" },
    { id: 14, image: portfolio14, title: "Transitional Kitchen", category: "interior", label: t("cat_interior"), altText: "Technical kitchen design and 3D visualization" },
    { id: 15, image: portfolio15, title: "Minimalist Dining & Living", category: "interior", label: t("cat_res_int"), altText: "Minimalist apartment interior 3D rendering" },
    { id: 16, image: portfolio16, title: "Minimalist Living Room", category: "interior", label: t("cat_res_int"), altText: "Bright minimalist living room interior visualization" },
    { id: 17, image: portfolio17, title: "Modern Living Suite", category: "interior", label: t("cat_res_int"), altText: "High-end hotel suite interior design 3D render" },
    { id: 18, image: portfolio18, title: "Minimalist Workspace", category: "interior", label: t("cat_interior"), altText: "Modern home office workspace 3D interior render" },
    { id: 20, image: portfolio20, title: "Luxury Marble Bath", category: "interior", label: t("cat_interior"), altText: "Luxury marble bathroom interior visualization" },
    { id: 21, image: portfolio21, title: "Cozy Urban Lounge", category: "interior", label: t("cat_interior"), altText: "Urban lounge interior design photorealistic rendering" },
    { id: 25, image: portfolio25, title: "Workspace Interior", category: "interior", label: t("cat_interior"), altText: "Professional office interior 3D visualization" },
    { id: 31, image: portfolio31, title: "Japandi Kitchen Concept", category: "interior", label: t("cat_interior"), altText: "Minimalist Japandi kitchen design 3D visualization" },
    { id: 32, image: portfolio32, title: "Luxury Sectional Living", category: "interior", label: t("cat_res_int"), altText: "High-end living room interior design with large sectional sofa" },
    { id: 33, image: portfolio33, title: "Boho-Luxe Master Bedroom", category: "interior", label: t("cat_bedroom"), altText: "Luxury Boho-style bedroom visualization with rattan bed" },
    { id: 34, image: portfolio34, title: "Contemporary Media Lounge", category: "interior", label: t("cat_res_int"), altText: "Modern media room 3D render with large TV" },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const tabs = [
    { id: "all", label: t("ALL") },
    { id: "exterior", label: t("EXTERIOR") },
    { id: "interior", label: t("INTERIOR") },
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

        {/* Filter Tabs */}
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

        {/* Project Grid */}
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
                    alt={project.altText}
                    loading="lazy"
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

              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* --- CONTACT US BUTTON AT THE BOTTOM --- */}
        <div className="mt-20 text-center">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-body text-xs tracking-[0.3em] uppercase transition-all duration-500 bg-primary text-white rounded-full hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,186,211,0.4)] transform hover:-translate-y-1"
          >
            <span className="relative z-10 font-bold">{t("CONTACT US", "CONTACT US")}</span>
            <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
        {/* ---------------------------------------- */}
      </div>
    </section>
  );
};

export default Portfolio;

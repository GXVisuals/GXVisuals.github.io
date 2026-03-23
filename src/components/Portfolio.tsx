import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// ... (Κράτησε όλα τα imports των εικόνων σου όπως είναι)

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    // EXTERIOR - Προσθήκη SEO Alt Texts
    { id: 1, image: portfolio1, title: "Modern Villa", category: "exterior", label: t("cat_res_ext"), altText: "Photorealistic 3D exterior render of a modern luxury villa" },
    { id: 2, image: portfolio2, title: "Sleek Country Home", category: "exterior", label: t("cat_facade"), altText: "Modern country house facade design 3D visualization" },
    { id: 3, image: portfolio3, title: "Luxury Eco‑Villa", category: "exterior", label: t("cat_styling"), altText: "Eco-friendly luxury villa exterior styling architectural render" },
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

    // INTERIOR - Προσθήκη SEO Alt Texts
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
  ];

  // ... (Κράτησε το filteredProjects και τα tabs όπως είναι)

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* ... Header και Tabs ... */}

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
                    alt={project.altText} // Χρήση του SEO Alt Text εδώ
                    loading="lazy" // Βοηθάει στην ταχύτητα φόρτωσης (SEO)
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  {/* ... Υπόλοιπος κώδικας (Overlays κλπ) ... */}
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.altText} // Επανάληψη και στο Modal
                    className="w-full h-auto max-h-[85vh] object-contain"
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

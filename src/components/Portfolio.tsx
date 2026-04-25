import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
import portfolio36 from "@/assets/portfolio-37.webp";
import portfolio36 from "@/assets/portfolio-38.webp";
import portfolio36 from "@/assets/portfolio-39.webp";
import portfolio36 from "@/assets/portfolio-40.webp";
import portfolio36 from "@/assets/portfolio-41.webp";
import portfolio36 from "@/assets/portfolio-42.webp";
import portfolio36 from "@/assets/portfolio-43.webp";
import portfolio36 from "@/assets/portfolio-44.webp";
import portfolio36 from "@/assets/portfolio-45.webp";
import portfolio36 from "@/assets/portfolio-46.webp";
import portfolio36 from "@/assets/portfolio-47.webp";
import portfolio36 from "@/assets/portfolio-48.webp";
import portfolio36 from "@/assets/portfolio-49.webp";
import portfolio36 from "@/assets/portfolio-50.webp";

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [activeSubTab, setActiveSubTab] = useState("all");

  const projects = [
    // EXTERIOR
    { id: 1, image: portfolio1, title: "Modern Villa", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Photorealistic 3D exterior render" },
    { id: 2, image: portfolio2, title: "Sleek Country Home", category: "exterior", subCategory: "all", label: t("cat_facade"), altText: "Modern country house facade" },
    { id: 3, image: portfolio3, title: "Luxury Eco-Villa", category: "exterior", subCategory: "all", label: t("cat_styling"), altText: "Eco-friendly luxury villa" },
    { id: 7, image: portfolio7, title: "Skyline Terrace Apartments", category: "exterior", subCategory: "all", label: t("cat_urban"), altText: "Urban apartment building 3D" },
    { id: 8, image: portfolio8, title: "Rustic Stone Villa", category: "exterior", subCategory: "all", label: t("cat_luxury"), altText: "Traditional stone villa" },
    { id: 19, image: portfolio19, title: "Contemporary Exterior", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Contemporary residential architecture" },
    { id: 22, image: portfolio22, title: "The Arch House", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Modern arch-style house" },
    { id: 23, image: portfolio23, title: "Isometric View with Section", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "3D isometric section view" },
    { id: 24, image: portfolio24, title: "Minimalist Villa", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Minimalist luxury villa" },
    { id: 26, image: portfolio26, title: "Isometric View", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "3D isometric house plan" },
    { id: 27, image: portfolio27, title: "3D Floor Plan", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Detailed 3D floor plan" },
    { id: 28, image: portfolio28, title: "Modern Facade Villa", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Luxury villa facade design" },
    { id: 29, image: portfolio29, title: "Aerial Perspective", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Aerial 3D view" },
    { id: 30, image: portfolio30, title: "3D Plan View", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Master plan 3D visualization" },
    { id: 35, image: portfolio35, title: "Urban Skyscraper Plaza", category: "exterior", subCategory: "all", label: t("cat_urban"), altText: "Architectural visualization of skyscrapers" },
    { id: 36, image: portfolio36, title: "Modern Mixed-Use Complex", category: "exterior", subCategory: "all", label: t("cat_res_ext"), altText: "Photorealistic 3D exterior render" },

    // INTERIOR (Με Subcategories)
    { id: 4, image: portfolio4, title: "Contemporary Modern Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "Modern kitchen design" },
    { id: 9, image: portfolio9, title: "Midnight Navy Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_vis"), altText: "High-end kitchen 3D visualization" },
    { id: 14, image: portfolio14, title: "Transitional Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "Technical kitchen design" },
    { id: 31, image: portfolio31, title: "Japandi Kitchen Concept", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "Minimalist Japandi kitchen" },
    { id: 39, image: portfolio39, title: "Modern Gray Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "Minimalist gray kitchen with island" },
    { id: 40, image: portfolio40, title: "Marble & Wood Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "White marble kitchen with wood accents" },
    { id: 44, image: portfolio44, title: "Contemporary Open Kitchen", category: "interior", subCategory: "kitchen", label: t("cat_interior"), altText: "Large kitchen with dark stone island" },
    { id: 12, image: portfolio12, title: "Minimalist Bathroom", category: "interior", subCategory: "bathroom", label: t("cat_interior"), altText: "Modern bathroom 3D visualization" },
    { id: 20, image: portfolio20, title: "Luxury Marble Bath", category: "interior", subCategory: "bathroom", label: t("cat_interior"), altText: "Luxury marble bathroom" },
    { id: 42, image: portfolio42, title: "Mood Lighting Bathroom", category: "interior", subCategory: "bathroom", label: t("cat_interior"), altText: "Dark wood bathroom with round mirror" },
    { id: 43, image: portfolio43, title: "Cream Stone Bathroom", category: "interior", subCategory: "bathroom", label: t("cat_interior"), altText: "Bright cream tiled luxury bathroom" },
    
    { id: 5, image: portfolio5, title: "Modern Living Room", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Luxury interior design living room" },
    { id: 10, image: portfolio10, title: "Contemporary Open Living", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Open plan living room interior" },
    { id: 13, image: portfolio13, title: "Modern Dining Room", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Luxury dining room interior" },
    { id: 15, image: portfolio15, title: "Minimalist Dining & Living", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Minimalist apartment interior" },
    { id: 16, image: portfolio16, title: "Minimalist Living Room", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Bright minimalist living room" },
    { id: 17, image: portfolio17, title: "Modern Living Suite", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "High-end hotel suite interior" },
    { id: 21, image: portfolio21, title: "Cozy Urban Lounge", category: "interior", subCategory: "living room", label: t("cat_interior"), altText: "Urban lounge interior design" },
    { id: 32, image: portfolio32, title: "Luxury Sectional Living", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "High-end living room design" },
    { id: 34, image: portfolio34, title: "Contemporary Media Lounge", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Modern media room 3D" },
    { id: 41, image: portfolio41, title: "Slatted Wood Dining", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Dining area with vertical wood slats" },
    { id: 47, image: portfolio47, title: "Artisan Wood Dining", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Modern dining room with dark wood table and designer lighting" },
    { id: 48, image: portfolio48, title: "Luminous Urban Living", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Spacious white living room with QLED TV and corner fireplace" },
    { id: 49, image: portfolio49, title: "Panoramic Lounge View", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Large open plan living area with floor to ceiling windows" },
    { id: 50, image: portfolio50, title: "Modernist Timber Dining", category: "interior", subCategory: "living room", label: t("cat_res_int"), altText: "Luxury dining space with geometric wall art and timber paneling" },
    
    { id: 6, image: portfolio6, title: "Minimalist Bedroom", category: "interior", subCategory: "bedroom", label: t("cat_interior"), altText: "Minimalist bedroom interior" },
    { id: 11, image: portfolio11, title: "Oak & Ambient Suite", category: "interior", subCategory: "bedroom", label: t("cat_bedroom"), altText: "Master bedroom 3D render" },
    { id: 33, image: portfolio33, title: "Boho-Luxe Master Bedroom", category: "interior", subCategory: "bedroom", label: t("cat_bedroom"), altText: "Luxury Boho-style bedroom" },
    { id: 38, image: portfolio38, title: "Emerald Accent Suite", category: "interior", subCategory: "bedroom", label: t("cat_bedroom"), altText: "Master bedroom with dark green wall" },
    { id: 45, image: portfolio45, title: "Sage Green Master", category: "interior", subCategory: "bedroom", label: t("cat_bedroom"), altText: "Modern sage green bedroom" },
    { id: 46, image: portfolio46, title: "Forest Green Detail", category: "interior", subCategory: "bedroom", label: t("cat_bedroom"), altText: "Close up of forest green paneled headboard" },
    
    { id: 18, image: portfolio18, title: "Minimalist Workspace", category: "interior", subCategory: "office", label: t("cat_interior"), altText: "Modern home office" },
    { id: 25, image: portfolio25, title: "Workspace Interior", category: "interior", subCategory: "office", label: t("cat_interior"), altText: "Professional office interior" },
    { id: 37, image: portfolio37, title: "Executive Home Office", category: "interior", subCategory: "office", label: t("cat_interior"), altText: "Minimalist office" },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesMain = activeTab === "all" || p.category === activeTab;
    const matchesSub = activeTab !== "interior" || activeSubTab === "all" || p.subCategory === activeSubTab;
    return matchesMain && matchesSub;
  });

  const tabs = [
    { id: "all", label: t("ALL") },
    { id: "exterior", label: t("EXTERIOR") },
    { id: "interior", label: t("INTERIOR") },
  ];

  const subTabs = [
    { id: "all", label: t("ALL") },
    { id: "kitchen", label: t("KITCHEN") },
    { id: "bathroom", label: t("BATHROOM") },
    { id: "living room", label: t("LIVING ROOM") },
    { id: "bedroom", label: t("BEDROOM") },
    { id: "office", label: t("OFFICE") },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            {t("portfolio_eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 italic">
            {t("portfolio_header")}
          </h2>
        </div>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveSubTab("all");
              }}
              className={`px-8 py-2.5 rounded-full text-xs font-body tracking-widest uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(0,186,211,0.3)]"
                  : "bg-transparent text-muted-foreground border-muted-foreground/20 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub Tabs (Only for Interior) */}
        <AnimatePresence>
          {activeTab === "interior" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {subTabs.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubTab(sub.id)}
                  className={`px-5 py-1.5 rounded-full text-[10px] font-body tracking-[0.15em] uppercase transition-all border ${
                    activeSubTab === sub.id
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Dialog>
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
                      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
                        hoveredId === project.id ? "opacity-100" : "opacity-0"
                      }`} />
                      <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
                        hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}>
                        <span className="text-primary text-[10px] font-body tracking-[0.2em] uppercase mb-2 block">
                          {project.label}
                        </span>
                        <h3 className="font-display text-xl text-white font-light italic">{project.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/90 flex items-center justify-center overflow-hidden backdrop-blur-xl">
                    <img
                      src={project.image}
                      alt={project.altText}
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- CONTACT US BUTTON --- */}
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
      </div>
    </section>
  );
};

export default Portfolio;

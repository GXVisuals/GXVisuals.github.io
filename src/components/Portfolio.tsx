import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMAGE IMPORTS ---
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
import portfolio37 from "@/assets/portfolio-37.webp";
import portfolio38 from "@/assets/portfolio-38.webp";
import portfolio39 from "@/assets/portfolio-39.webp";
import portfolio40 from "@/assets/portfolio-40.webp";
import portfolio41 from "@/assets/portfolio-41.webp";
import portfolio42 from "@/assets/portfolio-42.webp";
import portfolio43 from "@/assets/portfolio-43.webp";
import portfolio44 from "@/assets/portfolio-44.webp";
import portfolio45 from "@/assets/portfolio-45.webp";
import portfolio46 from "@/assets/portfolio-46.webp";
import portfolio47 from "@/assets/portfolio-47.webp";
import portfolio48 from "@/assets/portfolio-48.webp";
import portfolio49 from "@/assets/portfolio-49.webp";
import portfolio50 from "@/assets/portfolio-50.webp";
import portfolio51 from "@/assets/portfolio-51.webp";
import portfolio52 from "@/assets/portfolio-52.webp";
import portfolio53 from "@/assets/portfolio-53.webp";
import portfolio54 from "@/assets/portfolio-54.webp";
import portfolio55 from "@/assets/portfolio-55.webp";
import portfolio56 from "@/assets/portfolio-56.webp";
import portfolio57 from "@/assets/portfolio-57.webp";
import portfolio58 from "@/assets/portfolio-58.webp";
import portfolio59 from "@/assets/portfolio-59.webp";
import portfolio60 from "@/assets/portfolio-60.webp";
import portfolio61 from "@/assets/portfolio-61.webp";

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [activeSubTab, setActiveSubTab] = useState("all");
  const [selectedFolderImg, setSelectedFolderImg] = useState(0);

  // --- PROJECTS DATA ---
  const projects = [
    {
      id: 1,
      title: "Modern Villa on Akrounta, Limassol",
      category: "all",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room", "kitchen", "bedroom", "exterior"],
      coverImage: portfolio61,
      gallery: [
        { src: portfolio61, alt: "Exterior View 1", label: t("cat_res_ext") },
        { src: portfolio55, alt: "Aerial Exterior Perspective", label: t("cat_res_ext") },
        { src: portfolio56, alt: "Living Room Space", label: t("cat_res_int") },
        { src: portfolio57, alt: "Modern Kitchen Layout", label: t("cat_interior") },
        { src: portfolio58, alt: "Minimalist Master Bedroom", label: t("cat_bedroom") },
      ],
    },
    {
      id: 2,
      title: "Modern Villa",
      category: "exterior",
      hasExterior: true,
      hasInterior: false,
      subCategories: [],
      coverImage: portfolio1,
      gallery: [
        { src: portfolio1, alt: "Photorealistic 3D exterior render", label: t("cat_res_ext") },
        { src: portfolio2, alt: "Modern country house facade", label: t("cat_facade") },
        { src: portfolio3, alt: "Eco-friendly luxury villa", label: t("cat_styling") },
        { src: portfolio28, alt: "Luxury villa facade design", label: t("cat_res_ext") },
      ],
    },
    {
      id: 3,
      title: "Skyline Terrace Apartments",
      category: "exterior",
      hasExterior: true,
      hasInterior: false,
      subCategories: [],
      coverImage: portfolio7,
      gallery: [
        { src: portfolio7, alt: "Urban apartment building 3D", label: t("cat_urban") },
        { src: portfolio35, alt: "Architectural visualization of skyscrapers", label: t("cat_urban") },
        { src: portfolio36, alt: "Modern Mixed-Use Complex exterior", label: t("cat_res_ext") },
      ],
    },
    {
      id: 4,
      title: "Contemporary Modern Kitchen Collection",
      category: "interior",
      hasExterior: false,
      hasInterior: true,
      subCategories: ["kitchen"],
      coverImage: portfolio4,
      gallery: [
        { src: portfolio4, alt: "Modern kitchen design", label: t("cat_interior") },
        { src: portfolio9, alt: "High-end kitchen 3D visualization", label: t("cat_vis") },
        { src: portfolio14, alt: "Technical kitchen design layout", label: t("cat_interior") },
        { src: portfolio31, alt: "Minimalist Japandi kitchen", label: t("cat_interior") },
        { src: portfolio39, alt: "Minimalist gray kitchen with island", label: t("cat_interior") },
        { src: portfolio40, alt: "White marble kitchen with wood accents", label: t("cat_interior") },
        { src: portfolio44, alt: "Large kitchen with dark stone island", label: t("cat_interior") },
        { src: portfolio60, alt: "Luxury Modern Kitchen", label: t("cat_interior") },
      ],
    },
    {
      id: 5,
      title: "Luxury Residential Living Rooms",
      category: "interior",
      hasExterior: false,
      hasInterior: true,
      subCategories: ["living room"],
      coverImage: portfolio5,
      gallery: [
        { src: portfolio5, alt: "Luxury interior design living room", label: t("cat_res_int") },
        { src: portfolio10, alt: "Open plan living room interior", label: t("cat_res_int") },
        { src: portfolio13, alt: "Luxury dining room interior", label: t("cat_res_int") },
        { src: portfolio15, alt: "Minimalist apartment interior architecture", label: t("cat_res_int") },
        { src: portfolio16, alt: "Bright minimalist living room structure", label: t("cat_res_int") },
        { src: portfolio17, alt: "High-end hotel suite interior design", label: t("cat_res_int") },
        { src: portfolio21, alt: "Urban lounge interior design setup", label: t("cat_interior") },
        { src: portfolio32, alt: "High-end living room modular sectional", label: t("cat_res_int") },
        { src: portfolio34, alt: "Modern media lounge room 3D", label: t("cat_res_int") },
        { src: portfolio41, alt: "Dining area with vertical wood slats", label: t("cat_res_int") },
        { src: portfolio47, alt: "Modern dining room with dark wood table", label: t("cat_res_int") },
        { src: portfolio48, alt: "Spacious layout white living room", label: t("cat_res_int") },
        { src: portfolio49, alt: "Large panoramic open plan living area", label: t("cat_res_int") },
        { src: portfolio50, alt: "Luxury dining space with timber paneling", label: t("cat_res_int") },
        { src: portfolio51, alt: "Large Modernist open plan living area", label: t("cat_res_int") },
        { src: portfolio53, alt: "Modernist Living Room layout", label: t("cat_res_int") },
        { src: portfolio54, alt: "Large Modernist open plan Dining area", label: t("cat_res_int") },
      ],
    },
    {
      id: 6,
      title: "Luxury Bathroom Suites",
      category: "interior",
      hasExterior: false,
      hasInterior: true,
      subCategories: ["bathroom"],
      coverImage: portfolio12,
      gallery: [
        { src: portfolio12, alt: "Modern bathroom 3D visualization", label: t("cat_interior") },
        { src: portfolio20, alt: "Luxury marble bathroom suite", label: t("cat_interior") },
        { src: portfolio42, alt: "Dark wood bathroom with round mirror", label: t("cat_interior") },
        { src: portfolio43, alt: "Bright cream tiled luxury bathroom", label: t("cat_interior") },
      ],
    },
    {
      id: 7,
      title: "Premium Master Bedrooms",
      category: "interior",
      hasExterior: false,
      hasInterior: true,
      subCategories: ["bedroom"],
      coverImage: portfolio6,
      gallery: [
        { src: portfolio6, alt: "Minimalist bedroom interior render", label: t("cat_interior") },
        { src: portfolio11, alt: "Master bedroom 3D render with ambient lights", label: t("cat_bedroom") },
        { src: portfolio33, alt: "Luxury Boho-style master bedroom layout", label: t("cat_bedroom") },
        { src: portfolio38, alt: "Master bedroom with dark green accent wall", label: t("cat_bedroom") },
        { src: portfolio45, alt: "Modern sage green master suite", label: t("cat_bedroom") },
        { src: portfolio46, alt: "Forest green paneled headboard detail", label: t("cat_bedroom") },
      ],
    },
    {
      id: 8,
      title: "Corporate & Home Workspaces",
      category: "interior",
      hasExterior: false,
      hasInterior: true,
      subCategories: ["office"],
      coverImage: portfolio18,
      gallery: [
        { src: portfolio18, alt: "Modern minimalist home office setup", label: t("cat_interior") },
        { src: portfolio25, alt: "Professional commercial office interior", label: t("cat_interior") },
        { src: portfolio37, alt: "Executive workspace environment", label: t("cat_interior") },
        { src: portfolio52, alt: "Minimalist Modern Home Office design", label: t("cat_interior") },
        { src: portfolio59, alt: "Architectural Workspace Interior project", label: t("cat_interior") },
      ],
    },
    {
      id: 9,
      title: "Architectural 3D Plans & Concepts",
      category: "exterior",
      hasExterior: true,
      hasInterior: false,
      subCategories: [],
      coverImage: portfolio27,
      gallery: [
        { src: portfolio23, alt: "3D isometric section view detail", label: t("cat_res_ext") },
        { src: portfolio24, alt: "Minimalist architecture luxury villa", label: t("cat_res_ext") },
        { src: portfolio26, alt: "3D isometric house plan view", label: t("cat_res_ext") },
        { src: portfolio27, alt: "Detailed 3D floor plan layout", label: t("cat_res_ext") },
        { src: portfolio29, alt: "Aerial 3D architectural perspective", label: t("cat_res_ext") },
        { src: portfolio30, alt: "Master architectural plan 3D visualization", label: t("cat_res_ext") },
        { src: portfolio8, alt: "Traditional stone rustic villa architecture", label: t("cat_luxury") },
        { src: portfolio19, alt: "Contemporary residential exterior visualization", label: t("cat_res_ext") },
        { src: portfolio22, alt: "Modern arch-style structural house design", label: t("cat_res_ext") },
      ],
    }
  ];

  // --- FILTERING LOGIC ---
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesMain = activeTab === "all" || p.category === activeTab || (activeTab === "exterior" && p.hasExterior) || (activeTab === "interior" && p.hasInterior);
      if (!matchesMain) return false;
      
      if (activeTab === "interior" && activeSubTab !== "all") {
        return p.subCategories.includes(activeSubTab);
      }
      return true;
    });
  }, [activeTab, activeSubTab]);

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

        {/* Main Category Tabs */}
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

        {/* Interior Spaces Sub Tabs */}
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

        {/* Portfolio Cards Grid */}
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
                <Dialog onOpenChange={(open) => !open && setSelectedFolderImg(0)}>
                  <DialogTrigger asChild>
                    <div
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-card bg-muted"
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
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
                          {project.hasExterior && project.hasInterior ? t("Full Project") : project.hasExterior ? t("Exterior Collection") : t("Interior Collection")}
                        </span>
                        <h3 className="font-display text-xl text-white font-light italic">{project.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* ENLARGED FULL-WIDTH FOLDER VIEW MODAL */}
                  <DialogContent className="max-w-[95vw] w-full md:max-w-6xl h-[92vh] p-6 border-none bg-black/95 flex flex-col justify-between overflow-hidden backdrop-blur-xl">
                    
                    {/* Top Header Section */}
                    <div className="w-full flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <h4 className="text-white font-display text-xl font-medium">{project.title}</h4>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                          {project.gallery.length} {t("Renders Available")}
                        </p>
                      </div>
                    </div>

                    {/* Central Area: High-Impact Large Render Frame */}
                    <div className="flex-1 w-full flex items-center justify-center p-2 my-4 relative overflow-hidden">
                      <img
                        src={project.gallery[selectedFolderImg]?.src}
                        alt={project.gallery[selectedFolderImg]?.alt}
                        className="max-w-full max-h-[52vh] md:max-h-[58vh] w-auto h-auto object-contain rounded-md shadow-2xl transition-all duration-300"
                      />
                    </div>

                    {/* Info & Navigation Bottom Footer Strip */}
                    <div className="w-full bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                      
                      {/* Selected Image Title/Tags */}
                      <div className="text-center md:text-left min-w-[200px]">
                        <span className="text-primary text-[10px] font-body tracking-[0.2em] uppercase block mb-0.5">
                          {project.gallery[selectedFolderImg]?.label}
                        </span>
                        <p className="text-white font-display italic text-sm font-light">
                          {project.gallery[selectedFolderImg]?.alt}
                        </p>
                      </div>

                      {/* Folder Thumbnails Row Selector */}
                      <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2 custom-scrollbar">
                        {project.gallery.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedFolderImg(index)}
                            className={`relative w-20 md:w-24 aspect-[4/3] rounded-md overflow-hidden bg-muted flex-shrink-0 transition-all duration-300 border-2 ${
                              selectedFolderImg === index 
                                ? "border-primary scale-95 shadow-[0_0_12px_rgba(0,186,211,0.6)] opacity-100" 
                                : "border-transparent opacity-40 hover:opacity-90"
                            }`}
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full h-full object-cover" 
                            />
                          </button>
                        ))}
                      </div>

                    </div>

                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

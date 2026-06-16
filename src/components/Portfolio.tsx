import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  // --- MAPPED GROUPED PROJECTS ---
  const projects = [
    {
      id: 1,
      title: "The Monagroulli Monolith, Monagroulli, Limassol, Cyprus",
      description: "Striking contemporary architecture framed by dramatic rock faces, offering total privacy and panoramic views just minutes outside Limassol.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "living room"],
      coverImage: portfolio1,
      gallery: [
        { src: portfolio1, alt: "Exterior View", label: t("cat_res_ext") },
        { src: portfolio6, alt: "Minimalist Bedroom", label: t("cat_interior") },
        { src: portfolio10, alt: "Contemporary Open Living", label: t("cat_res_int") },
        { src: portfolio4, alt: "Contemporary Modern Kitchen", label: t("cat_interior") }
      ]
    },
    {
      id: 2,
      title: "The Platres Retreat, Pano Platres, Troodos, Cyprus",
      description: "A modern timber cabin tucked into the dense Troodos pine forests, offering a serene, high-altitude alpine escape from the coastal heat.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room", "living room"],
      coverImage: portfolio2,
      gallery: [
        { src: portfolio2, alt: "Sleek Country Home", label: t("cat_facade") },
        { src: portfolio5, alt: "Modern Living Room", label: t("cat_res_int") },
        { src: portfolio21, alt: "Cozy Urban Lounge", label: t("cat_interior") }
      ]
    },
    {
      id: 3,
      title: "The West Coast Frontier, Neo Chorio, Paphos, Cyprus",
      description: "An elevated contemporary residence framing Cyprus’s most rugged, untouched western peninsula with sweeping sea views.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "living room"],
      coverImage: portfolio3,
      gallery: [
        { src: portfolio3, alt: "Luxury Eco-Villa", label: t("cat_styling") },
        { src: portfolio14, alt: "Transitional Kitchen", label: t("cat_interior") },
        { src: portfolio15, alt: "Minimalist Dining & Living", label: t("cat_res_int") },
        { src: portfolio16, alt: "Minimalist Living Room", label: t("cat_res_int") },
        { src: portfolio20, alt: "Luxury Marble Bath", label: t("cat_interior") }
      ]
    },
    {
      id: 4,
      title: "Modern Residential Complex, Latsia, Nicosia, Cyprus",
      description: "A contemporary multi-family residential development featuring sleek glass balconies and warm brick accents, perfectly integrated into the expanding hillsides of Nicosia.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room", "bedroom"],
      coverImage: portfolio7,
      gallery: [
        { src: portfolio7, alt: "Skyline Terrace Apartments", label: t("cat_urban") },
        { src: portfolio51, alt: "Modernist Living Room", label: t("cat_res_int") },
        { src: portfolio53, alt: "Modernist Living Room", label: t("cat_res_int") },
        { src: portfolio54, alt: "Modernist Dining Room", label: t("cat_res_int") },
        { src: portfolio11, alt: "Oak & Ambient Suite", label: t("cat_bedroom") }
      ]
    },
    {
      id: 5,
      title: "The Omodos Stone Villa, Omodos, Limassol, Cyprus",
      description: "A beautiful traditional fieldstone residence combining classic Cypriot masonry with modern elevated terraces, overlooking the rolling vineyard valleys of Limassol.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "living room", "office"],
      coverImage: portfolio8,
      gallery: [
        { src: portfolio8, alt: "Rustic Stone Villa", label: t("cat_luxury") },
        { src: portfolio13, alt: "Modern Dining Room", label: t("cat_res_int") },
        { src: portfolio18, alt: "Minimalist Workspace", label: t("cat_interior") },
        { src: portfolio31, alt: "Japandi Kitchen Concept", label: t("cat_interior") }
      ]
    },
    {
      id: 6,
      title: "The Kifisia Horizon House, Kifisia, Athens, Greece",
      description: "A low-profile modern pavilion tucked away into the mature, leafy green landscapes of northern Athens, pairing minimalist architecture with total privacy.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room"],
      coverImage: portfolio19,
      gallery: [
        { src: portfolio19, alt: "Contemporary Exterior", label: t("cat_res_ext") },
        { src: portfolio48, alt: "Luminous Urban Living", label: t("cat_res_int") },
        { src: portfolio49, alt: "Panoramic Lounge View", label: t("cat_res_int") },
        { src: portfolio59, alt: "Workspace Interior", label: t("cat_interior") }
      ]
    },
    {
      id: 7,
      title: "The Ekali Arched Villa, Ekali, Athens, Greece",
      description: "Striking brutalist architecture nestled within the elite, densely wooded northern suburbs of Athens, blending geometric concrete forms with soaring glass facades.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room", "bedroom"],
      coverImage: portfolio22,
      gallery: [
        { src: portfolio22, alt: "The Arch House", label: t("cat_res_ext") },
        { src: portfolio17, alt: "Modern Living Suite", label: t("cat_res_int") },
        { src: portfolio38, alt: "Emerald Accent Suite", label: t("cat_bedroom") },
        { src: portfolio46, alt: "Forest Green Detail", label: t("cat_bedroom") }
      ]
    },
    {
      id: 8,
      title: "The Palodeia Smart Residence, Palodeia, Limassol, Cyprus",
      description: "A masterfully planned smart home showcasing an L-shaped architectural footprint, private interior courtyards, and clean minimalist zoning tailored for modern Mediterranean lifestyles.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "living room"],
      coverImage: portfolio23,
      gallery: [
        { src: portfolio23, alt: "Isometric View with Section", label: t("cat_res_ext") },
        { src: portfolio26, alt: "Isometric View", label: t("cat_res_ext") },
        { src: portfolio27, alt: "3D Floor Plan", label: t("cat_res_ext") },
        { src: portfolio32, alt: "Luxury Sectional Living", label: t("cat_res_int") },
        { src: portfolio39, alt: "Modern Gray Kitchen", label: t("cat_interior") }
      ]
    },
    {
      id: 9,
      title: "The Pelion Woodland Manor, Tsagarada, Mount Pelion, Greece",
      description: "A sophisticated sanctuary merging minimalist architecture with the dense, world-famous forest landscapes of the Pelion peninsula.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["living room", "office"],
      coverImage: portfolio24,
      gallery: [
        { src: portfolio24, alt: "Minimalist Villa", label: t("cat_res_ext") },
        { src: portfolio9, alt: "Midnight Navy Kitchen", label: t("cat_vis") },
        { src: portfolio47, alt: "Artisan Wood Dining", label: t("cat_res_int") },
        { src: portfolio50, alt: "Modernist Timber Dining", label: t("cat_res_int") },
        { src: portfolio25, alt: "Workspace Interior", label: t("cat_interior") }
      ]
    },
    {
      id: 10,
      title: "The Protaras Palm Dunes, Protaras Coast, Famagusta, Cyprus",
      description: "A massive, master-planned holiday development showcasing uniform minimalist design, private plunge pools, and lush tropical landscaping tailored for elite Mediterranean resort living.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "bathroom", "bedroom", "office"],
      coverImage: portfolio28,
      gallery: [
        { src: portfolio28, alt: "Modern Facade Villa", label: t("cat_res_ext") },
        { src: portfolio29, alt: "Aerial Perspective", label: t("cat_res_ext") },
        { src: portfolio30, alt: "3D Plan View", label: t("cat_res_ext") },
        { src: portfolio41, alt: "Slatted Wood Dining", label: t("cat_res_int") },
        { src: portfolio42, alt: "Mood Lighting Bathroom", label: t("cat_interior") },
        { src: portfolio44, alt: "Contemporary Open Kitchen", label: t("cat_interior") },
        { src: portfolio45, alt: "Sage Green Master", label: t("cat_bedroom") },
        { src: portfolio52, alt: "Minimalist Workspace", label: t("cat_interior") }
      ]
    },
    {
      id: 11,
      title: "The Ellinikon Plaza Towers, The Ellinikon, Athens, Greece",
      description: "An iconic metropolitan high-rise complex anchoring the premier urban coastal development area, showcasing sleek glass grids, grand plazas, and mixed-use luxury commercial spaces.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "bathroom", "office"],
      coverImage: portfolio35,
      gallery: [
        { src: portfolio35, alt: "Urban Skyscraper Plaza", label: t("cat_urban") },
        { src: portfolio12, alt: "Minimalist Bathroom", label: t("cat_interior") },
        { src: portfolio37, alt: "Executive Home Office", label: t("cat_interior") },
        { src: portfolio40, alt: "Marble & Wood Kitchen", label: t("cat_interior") }
      ]
    },
    {
      id: 12,
      title: "The Strovolos Design Pavilion, Strovolos, Nicosia, Cyprus",
      description: "A striking commercial showroom featuring a raw concrete facade and bold timber framing, designed as an ultra-premium flagship office or high-end retail headquarters.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "bathroom", "bedroom", "living room"],
      coverImage: portfolio36,
      gallery: [
        { src: portfolio36, alt: "Modern Mixed-Use Complex", label: t("cat_res_ext") },
        { src: portfolio33, alt: "Boho-Luxe Master Bedroom", label: t("cat_bedroom") },
        { src: portfolio34, alt: "Contemporary Media Lounge", label: t("cat_res_int") },
        { src: portfolio43, alt: "Cream Stone Bathroom", label: t("cat_interior") },
        { src: portfolio60, alt: "Modern Kitchen", label: t("cat_interior") }
      ]
    },
    {
      id: 13,
      title: "Aspithea, Akrounta, Limassol",
      description: "An exclusive cluster of contemporary eco-villas blending crisp architectural geometries with the rugged, pine-dappled mountainous landscapes.",
      hasExterior: true,
      hasInterior: true,
      subCategories: ["kitchen", "bedroom", "living room"],
      coverImage: portfolio55,
      gallery: [
        { src: portfolio55, alt: "Modern Villa - Aerial View", label: t("cat_res_ext") },
        { src: portfolio61, alt: "Modern Villa - Ground View", label: t("cat_res_ext") },
        { src: portfolio56, alt: "Modernist Living Room", label: t("cat_res_int") },
        { src: portfolio57, alt: "Kitchen Layout", label: t("cat_interior") },
        { src: portfolio58, alt: "Minimalist Bedroom", label: t("cat_bedroom") }
      ]
    }
  ];

  // --- FILTER NAVIGATION CONTROLS ---
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeTab === "all") return true;
      if (activeTab === "exterior") return p.hasExterior;
      if (activeTab === "interior") {
        if (activeSubTab === "all") return p.hasInterior;
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
                <Dialog onOpenChange={(open) => !open && setCurrentSliderIndex(0)}>
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
                          {project.hasExterior && project.hasInterior ? t("Full Project") : project.hasExterior ? t("Exterior") : t("Interior")}
                        </span>
                        <h3 className="font-display text-lg text-white font-light italic leading-tight">{project.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-[95vw] w-full md:max-w-4xl max-h-[95vh] p-0 border-none bg-black/95 flex flex-col items-center justify-center overflow-hidden backdrop-blur-xl">
                    <div className="relative w-full flex items-center justify-center p-4 select-none">
                      <img
                        src={project.gallery[currentSliderIndex]?.src}
                        alt={project.gallery[currentSliderIndex]?.alt}
                        className="max-h-[65vh] md:max-h-[75vh] w-auto object-contain rounded shadow-2xl"
                      />

                      {project.gallery.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSliderIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
                            }}
                            className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors duration-200 z-50"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSliderIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors duration-200 z-50"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Meta details footer inside layout modal */}
                    <div className="w-full bg-black/40 py-4 px-6 border-t border-white/10 flex flex-col items-center text-center">
                      <span className="text-primary text-[10px] font-body tracking-[0.2em] uppercase mb-1">
                        {project.gallery[currentSliderIndex]?.label}
                      </span>
                      <h4 className="text-white font-display italic text-sm mb-1 px-4">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-xs max-w-2xl line-clamp-2 px-4 hidden md:block">
                        {project.description}
                      </p>
                      <span className="text-white/40 text-[10px] font-body mt-2">
                        {currentSliderIndex + 1} / {project.gallery.length}
                      </span>
                    </div>
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

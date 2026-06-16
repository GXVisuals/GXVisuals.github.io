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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Filtering states for the main gallery grid
  const [activeTab, setActiveTab] = useState("all"); // "all" | "exterior" | "interior"
  const [activeSubTab, setActiveSubTab] = useState("all"); // "all" | "kitchen" | "bathroom" | "living room" | "bedroom" | "office"

  // Lightbox dynamic presentation states
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // --- RAW DATABASE MATRIX MAPPED BY PHOTO DESTINATION ---
  const projectsData = [
    {
      id: 1,
      title: "The Monagroulli Monolith, Monagroulli, Limassol, Cyprus",
      description: "Striking contemporary architecture framed by dramatic rock faces, offering total privacy and panoramic views just minutes outside Limassol.",
      gallery: [
        { src: portfolio1, alt: "The Monagroulli Monolith - Dramatic Exterior", type: "exterior", room: "" },
        { src: portfolio6, alt: "The Monagroulli Monolith - Contemporary Pavilion Living", type: "interior", room: "living room" },
        { src: portfolio10, alt: "The Monagroulli Monolith - Panoramic Lounge", type: "interior", room: "living room" },
        { src: portfolio4, alt: "The Monagroulli Monolith - Minimalist Living Architecture", type: "interior", room: "living room" },
      ],
    },
    {
      id: 2,
      title: "The Platres Retreat, Pano Platres, Troodos, Cyprus",
      description: "A modern timber cabin tucked into the dense Troodos pine forests, offering a serene, high-altitude alpine escape from the coastal heat.",
      gallery: [
        { src: portfolio2, alt: "The Platres Retreat - Timber Cabin Exterior", type: "exterior", room: "" },
        { src: portfolio5, alt: "The Platres Retreat - Serene Alpine Living Room", type: "interior", room: "living room" },
        { src: portfolio21, alt: "The Platres Retreat - High-Altitude Lounge Space", type: "interior", room: "living room" },
      ],
    },
    {
      id: 3,
      title: "The West Coast Frontier, Neo Chorio, Paphos, Cyprus",
      description: "An elevated contemporary residence framing Cyprus’s most rugged, untouched western peninsula with sweeping sea views.",
      gallery: [
        { src: portfolio3, alt: "The West Coast Frontier - Peninsula Sea Views", type: "exterior", room: "" },
        { src: portfolio14, alt: "The West Coast Frontier - Premium Integrated Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio15, alt: "The West Coast Frontier - Open Plan Living Environment", type: "interior", room: "living room" },
        { src: portfolio16, alt: "The West Coast Frontier - Coastal Facing Lounge", type: "interior", room: "living room" },
        { src: portfolio20, alt: "The West Coast Frontier - Luxury Monolithic Bathroom", type: "interior", room: "bathroom" },
      ],
    },
    {
      id: 4,
      title: "Modern Residential Complex, Latsia, Nicosia, Cyprus",
      description: "A contemporary multi-family residential development featuring sleek glass balconies and warm brick accents, perfectly integrated into the expanding hillsides of Nicosia.",
      gallery: [
        { src: portfolio7, alt: "Modern Residential Complex - Urban Exterior", type: "exterior", room: "" },
        { src: portfolio51, alt: "Modern Residential Complex - Sleek Living Spaces", type: "interior", room: "living room" },
        { src: portfolio53, alt: "Modern Residential Complex - Modernist Lounge", type: "interior", room: "living room" },
        { src: portfolio54, alt: "Modern Residential Complex - Geometric Dining Area", type: "interior", room: "living room" },
        { src: portfolio11, alt: "Modern Residential Complex - Master Bedroom Suite", type: "interior", room: "bedroom" },
      ],
    },
    {
      id: 5,
      title: "The Omodos Stone Villa, Omodos, Limassol, Cyprus",
      description: "A beautiful traditional fieldstone residence combining classic Cypriot masonry with modern elevated terraces, overlooking the rolling vineyard valleys of Limassol.",
      gallery: [
        { src: portfolio8, alt: "The Omodos Stone Villa - Classic Fieldstone Architecture", type: "exterior", room: "" },
        { src: portfolio13, alt: "The Omodos Stone Villa - Traditional Textures Living Room", type: "interior", room: "living room" },
        { src: portfolio18, alt: "The Omodos Stone Villa - Creative Focus Home Office", type: "interior", room: "office" },
        { src: portfolio31, alt: "The Omodos Stone Villa - Japandi Vineyard Kitchen", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 6,
      title: "The Kifisia Horizon House, Kifisia, Athens, Greece",
      description: "A low-profile modern pavilion tucked away into the mature, leafy green landscapes of northern Athens, pairing minimalist architecture with total privacy.",
      gallery: [
        { src: portfolio19, alt: "The Kifisia Horizon House - Modern Pavilion Facade", type: "exterior", room: "" },
        { src: portfolio48, alt: "The Kifisia Horizon House - Minimalist White Living Room", type: "interior", room: "living room" },
        { src: portfolio49, alt: "The Kifisia Horizon House - Light-Filled Lounge", type: "interior", room: "living room" },
        { src: portfolio59, alt: "The Kifisia Horizon House - Architectural Office Study", type: "interior", room: "office" },
      ],
    },
    {
      id: 7,
      title: "The Ekali Arched Villa, Ekali, Athens, Greece",
      description: "Striking brutalist architecture nestled within the elite, densely wooded northern suburbs of Athens, blending geometric concrete forms with soaring glass facades.",
      gallery: [
        { src: portfolio22, alt: "The Ekali Arched Villa - Geometric Brutalist Concrete", type: "exterior", room: "" },
        { src: portfolio17, alt: "The Ekali Arched Villa - High-End Luxury Interior Lounge", type: "interior", room: "living room" },
        { src: portfolio38, alt: "The Ekali Arched Villa - Deep Forest Accent Bedroom", type: "interior", room: "bedroom" },
        { src: portfolio46, alt: "The Ekali Arched Villa - Minimalist Bedding Architecture", type: "interior", room: "bedroom" },
      ],
    },
    {
      id: 8,
      title: "The Palodeia Smart Residence, Palodeia, Limassol, Cyprus",
      description: "A masterfully planned smart home showcasing an L-shaped architectural footprint, private interior courtyards, and clean minimalist zoning tailored for modern Mediterranean lifestyles.",
      gallery: [
        { src: portfolio23, alt: "The Palodeia Smart Residence - Architectural Footprint Overview", type: "exterior", room: "" },
        { src: portfolio26, alt: "The Palodeia Smart Residence - Courtyard Axis View", type: "exterior", room: "" },
        { src: portfolio27, alt: "The Palodeia Smart Residence - Clean Structural Render", type: "exterior", room: "" },
        { src: portfolio32, alt: "The Palodeia Smart Residence - Minimalist Living Zone", type: "interior", room: "living room" },
        { src: portfolio39, alt: "The Palodeia Smart Residence - Modular Kitchen Concept", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 9,
      title: "The Pelion Woodland Manor, Tsagarada, Mount Pelion, Greece",
      description: "A sophisticated sanctuary merging minimalist architecture with the dense, world-famous forest landscapes of the Pelion peninsula.",
      gallery: [
        { src: portfolio24, alt: "The Pelion Woodland Manor - Woodland Integration Facade", type: "exterior", room: "" },
        { src: portfolio9, alt: "The Pelion Woodland Manor - Premium Slate Kitchen Layout", type: "interior", room: "kitchen" },
        { src: portfolio47, alt: "The Pelion Woodland Manor - Dark Wood Dining Hall", type: "interior", room: "living room" },
        { src: portfolio50, alt: "The Pelion Woodland Manor - Timber Paneled Lounge", type: "interior", room: "living room" },
        { src: portfolio25, alt: "The Pelion Woodland Manor - Executive Forest View Office", type: "interior", room: "office" },
      ],
    },
    {
      id: 10,
      title: "The Protaras Palm Dunes, Protaras Coast, Famagusta, Cyprus",
      description: "A massive, master-planned holiday development showcasing uniform minimalist design, private plunge pools, and lush tropical landscaping tailored for elite Mediterranean resort living.",
      gallery: [
        { src: portfolio28, alt: "The Protaras Palm Dunes - Resort Minimalist Frontage", type: "exterior", room: "" },
        { src: portfolio29, alt: "The Protaras Palm Dunes - Tropical Master Plan Aerial View", type: "exterior", room: "" },
        { src: portfolio30, alt: "The Protaras Palm Dunes - Pool Deck Elevation", type: "exterior", room: "" },
        { src: portfolio41, alt: "The Protaras Palm Dunes - Slatted Timber Dining Space", type: "interior", room: "living room" },
        { src: portfolio42, alt: "The Protaras Palm Dunes - Contemporary Warm Tone Bathroom", type: "interior", room: "bathroom" },
        { src: portfolio44, alt: "The Protaras Palm Dunes - Luxury Stone Chef Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio45, alt: "The Protaras Palm Dunes - Sage Green Vacation Suite", type: "interior", room: "bedroom" },
        { src: portfolio52, alt: "The Protaras Palm Dunes - High-End Private Work Suite", type: "interior", room: "office" },
      ],
    },
    {
      id: 11,
      title: "The Ellinikon Plaza Towers, The Ellinikon, Athens, Greece",
      description: "An iconic metropolitan high-rise complex anchoring the premier urban coastal development area, showcasing sleek glass grids, grand plazas, and mixed-use luxury commercial spaces.",
      gallery: [
        { src: portfolio12, alt: "The Ellinikon Plaza Towers - Polished Marble Master Bath", type: "interior", room: "bathroom" },
        { src: portfolio35, alt: "The Ellinikon Plaza Towers - Structural Glass Grid Elevation", type: "exterior", room: "" },
        { src: portfolio37, alt: "The Ellinikon Plaza Towers - Corporate Penthouse Office Suite", type: "interior", room: "office" },
        { src: portfolio40, alt: "The Ellinikon Plaza Towers - Architectural Linear Kitchen", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 12,
      title: "The Strovolos Design Pavilion, Strovolos, Nicosia, Cyprus",
      description: "A striking commercial showroom featuring a raw concrete facade and bold timber framing, designed as an ultra-premium flagship office or high-end retail headquarters.",
      gallery: [
        { src: portfolio33, alt: "The Strovolos Design Pavilion - Organic Texture Bedroom", type: "interior", room: "bedroom" },
        { src: portfolio34, alt: "The Strovolos Design Pavilion - Integrated Media Living Room", type: "interior", room: "living room" },
        { src: portfolio36, alt: "The Strovolos Design Pavilion - Raw Concrete Flagship Facade", type: "exterior", room: "" },
        { src: portfolio43, alt: "The Strovolos Design Pavilion - Sculptural Concrete Bathroom", type: "interior", room: "bathroom" },
        { src: portfolio60, alt: "The Strovolos Design Pavilion - Premium Matte Kitchen Concept", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 13,
      title: "Aspithea, Akrounta, Limassol",
      description: "An exclusive cluster of contemporary eco-villas blending crisp architectural geometries with the rugged, pine-dappled mountainous landscapes.",
      gallery: [
        { src: portfolio55, alt: "Aspithea - Mountain Cluster Aerial Perspective", type: "exterior", room: "" },
        { src: portfolio56, alt: "Aspithea - Sunken Mountain View Living Room", type: "interior", room: "living room" },
        { src: portfolio57, alt: "Aspithea - Integrated Minimal Eco-Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio58, alt: "Aspithea - Panoramic Timber Master Bedroom", type: "interior", room: "bedroom" },
        { src: portfolio61, alt: "Aspithea - Clean Geometric Geometry Entrance", type: "exterior", room: "" },
      ],
    }
  ];

  // --- FLATTEN DATAMODEL TO PHOTO LEVEL FOR DIRECT FILTERING ---
  const allPhotos = useMemo(() => {
    let flattened: any[] = [];
    projectsData.forEach((project) => {
      project.gallery.forEach((photo) => {
        flattened.push({
          ...photo,
          projectParent: {
            id: project.id,
            title: project.title,
            description: project.description,
            gallery: project.gallery
          }
        });
      });
    });
    return flattened;
  }, []);

  // --- FILTER SYSTEM APPLIED TO INDIVIDUAL PHOTOS ---
  const filteredPhotos = useMemo(() => {
    return allPhotos.filter((photo) => {
      // Step 1: Base Tier Filter (All vs Exterior vs Interior)
      const matchesMainTab = activeTab === "all" || photo.type === activeTab;
      if (!matchesMainTab) return false;

      // Step 2: Interior Room Tag Filtering (Kitchen, Bathroom, etc.)
      if (activeTab === "interior" && activeSubTab !== "all") {
        return photo.room === activeSubTab;
      }

      return true;
    });
  }, [allPhotos, activeTab, activeSubTab]);

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

  const handleOpenLightbox = (photoItem: any) => {
    setSelectedProject(photoItem.projectParent);
    // Find index of clicked photo inside its own project array
    const lookUpIndex = photoItem.projectParent.gallery.findIndex((g: any) => g.src === photoItem.src);
    setSelectedImgIndex(lookUpIndex >= 0 ? lookUpIndex : 0);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121212] min-h-screen text-white">
      <div className="container mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase block text-[#00bad3]">
            {t("portfolio_eyebrow", "OUR PORTFOLIO")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mt-4 italic">
            {t("portfolio_header", "Architectural Masterpieces")}
          </h2>
        </div>

        {/* Level 1: Category Filter Strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveSubTab("all");
              }}
              className={`px-8 py-2.5 rounded-full text-xs font-body tracking-widest uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-[#00bad3] text-white border-[#00bad3] shadow-[0_0_20px_rgba(0,186,211,0.3)]"
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-[#00bad3] hover:text-[#00bad3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Level 2: Interior Room Types Row */}
        <div className="h-14 mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "interior" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {subTabs.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubTab(sub.id)}
                    className={`px-5 py-1.5 rounded-full text-[10px] font-body tracking-[0.15em] uppercase transition-all border ${
                      activeSubTab === sub.id
                        ? "bg-[#00bad3]/10 border-[#00bad3] text-[#00bad3]"
                        : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Granular Photo Feed Display Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photoItem, index) => (
              <motion.div
                key={`${photoItem.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Dialog onOpenChange={(open) => !open && setSelectedProject(null)}>
                  <DialogTrigger asChild>
                    <div
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-neutral-900 shadow-xl"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleOpenLightbox(photoItem)}
                    >
                      <img
                        src={photoItem.src}
                        alt={photoItem.alt}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-750 ease-out ${
                          hoveredIndex === index ? "scale-105" : "scale-100"
                        }`}
                      />
                      
                      {/* Hover Interaction Overlay Mask */}
                      <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}>
                        <span className="text-[#00bad3] text-[9px] font-body tracking-[0.25em] uppercase mb-1 block">
                          {photoItem.type === "exterior" ? t("EXTERIOR") : photoItem.room}
                        </span>
                        <h3 className="font-display text-base text-white font-light italic line-clamp-1">
                          {photoItem.projectParent.title}
                        </h3>
                        <p className="text-gray-400 text-[11px] line-clamp-1 mt-1 font-body font-light">
                          {photoItem.alt}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* HIGH-IMPACT COMPREHENSIVE FOLDER VIEWPORT OVERLAY */}
                  {selectedProject && (
                    <DialogContent className="max-w-[95vw] w-full md:max-w-5xl h-[88vh] p-6 border-none bg-black/95 flex flex-col justify-between overflow-hidden backdrop-blur-2xl text-white">
                      
                      {/* Context Metadata Track */}
                      <div className="w-full border-b border-white/10 pb-4">
                        <h4 className="text-white font-display text-lg font-medium tracking-wide leading-snug">
                          {selectedProject.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-body mt-1.5 font-light leading-relaxed max-w-2xl hidden md:block">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Display Viewport Showcase */}
                      <div className="flex-1 w-full flex items-center justify-center p-2 my-2 relative overflow-hidden">
                        <img
                          src={selectedProject.gallery[selectedImgIndex]?.src}
                          alt={selectedProject.gallery[selectedImgIndex]?.alt}
                          className="max-w-full max-h-[46vh] md:max-h-[50vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                      </div>

                      {/* Media Strip Folder Control Bar */}
                      <div className="w-full bg-white/[0.02] p-4 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                        
                        {/* Currently Highlighted Item Title */}
                        <div className="text-center md:text-left min-w-[200px] max-w-xs">
                          <span className="text-[#00bad3] text-[9px] font-body tracking-[0.2em] uppercase block mb-0.5">
                            {selectedProject.gallery[selectedImgIndex]?.type === "exterior" 
                              ? t("EXTERIOR ARCHITECTURE") 
                              : `${t("INTERIOR")} - ${selectedProject.gallery[selectedImgIndex]?.room}`}
                          </span>
                          <p className="text-white font-display italic text-xs font-light truncate">
                            {selectedProject.gallery[selectedImgIndex]?.alt}
                          </p>
                        </div>

                        {/* Interactive Horizontal Media Scroller */}
                        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2 custom-scrollbar">
                          {selectedProject.gallery.map((img: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedImgIndex(idx)}
                              className={`relative w-16 md:w-20 aspect-[4/3] rounded-md overflow-hidden bg-neutral-900 flex-shrink-0 transition-all duration-200 border-2 ${
                                selectedImgIndex === idx 
                                  ? "border-[#00bad3] scale-95 shadow-[0_0_12px_rgba(0,186,211,0.5)] opacity-100" 
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
                  )}
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-body text-xs tracking-[0.3em] uppercase transition-all duration-500 bg-[#00bad3] text-white rounded-full hover:bg-[#00bad3]/90 hover:shadow-[0_0_30px_rgba(0,186,211,0.4)] transform hover:-translate-y-1"
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

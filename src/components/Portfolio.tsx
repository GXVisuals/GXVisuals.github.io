import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openContactFromCta } from "@/lib/contactPrompt";

import { projectsData } from "@/data/portfolioProjects";

const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState("all");
  const [activeSubTab, setActiveSubTab] = useState("all");

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const currentFeedItems = useMemo(() => {
    if (activeTab === "all") {
      return projectsData.map((project) => ({
        isGroupedFolder: true,
        id: project.id,
        title: project.title,
        description: project.description,
        displayImage: project.coverImage,
        initialIndexInGallery: project.kind ? Math.max(0, project.gallery.findIndex((photo) => photo.src === project.coverImage)) : 0,
        associatedProject: project,
        tagLabel: project.kind === "concept" ? "Concept" : t("Full Project Portfolio"),
        hoverSubtitle: project.title,
      }));
    }

    let itemsList: any[] = [];
    projectsData.forEach((project) => {
      project.gallery.forEach((photo) => {
        const matchesCategory = photo.type === activeTab;
        const matchesSubRoom = activeTab === "interior" && (activeSubTab === "all" || photo.room === activeSubTab);

        if (matchesCategory && (activeTab !== "interior" || matchesSubRoom)) {
          const matchingIndex = project.gallery.findIndex((g) => g.src === photo.src);

          itemsList.push({
            isGroupedFolder: false,
            id: `${project.id}-${photo.src}`,
            title: project.title,
            description: project.description,
            displayImage: photo.src,
            initialIndexInGallery: matchingIndex >= 0 ? matchingIndex : 0,
            associatedProject: project,
            tagLabel: photo.type === "exterior" ? t("EXTERIOR") : photo.room,
            hoverSubtitle: photo.alt,
          });
        }
      });
    });
    return itemsList;
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
    { id: "gym", label: t("GYM") },
    { id: "dining room", label: t("DINING ROOM", { defaultValue: "Dining room" }) },
    { id: "lobby area", label: t("LOBBY AREA", { defaultValue: "Lobby area" }) },
    { id: "sitting area", label: t("SITTING AREA", { defaultValue: "Sitting area" }) },
  ];

  const handleOpenFolder = (feedItem: any) => {
    setSelectedProject(feedItem.associatedProject);
    setSelectedImgIndex(feedItem.initialIndexInGallery);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121212] min-h-screen text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#00bad3] font-body text-sm tracking-[0.3em] uppercase block">
            {t("portfolio_eyebrow", "OUR PORTFOLIO")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mt-4 italic">
            {t("portfolio_header", "Architectural Masterpieces")}
          </h2>
        </div>

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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {currentFeedItems.map((item, index) => (
              <motion.div
                key={item.id}
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
                      onClick={() => handleOpenFolder(item)}
                    >
                      <img
                        src={item.displayImage}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-750 ease-out ${
                          hoveredIndex === index ? "scale-105" : "scale-100"
                        }`}
                      />

                      <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}>
                        <span className="text-[#00bad3] text-[9px] font-body tracking-[0.25em] uppercase mb-1 block">
                          {item.tagLabel}
                        </span>
                        <h3 className="font-display text-base text-white font-light italic line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-[11px] line-clamp-1 mt-1 font-body font-light">
                          {item.hoverSubtitle}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>

                  {selectedProject && (
                    <DialogContent className="max-w-[95vw] w-full md:max-w-5xl h-[88vh] p-6 border-none bg-black/95 flex flex-col justify-between overflow-hidden backdrop-blur-2xl text-white">

                      <div className="w-full border-b border-white/10 pb-4">
                        <h4 className="text-white font-display text-lg font-medium tracking-wide leading-snug">
                          {selectedProject.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-body mt-1.5 font-light leading-relaxed max-w-2xl hidden md:block">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="flex-1 w-full flex items-center justify-center p-2 my-2 relative overflow-hidden">
                        <img
                          src={selectedProject.gallery[selectedImgIndex]?.src}
                          alt={selectedProject.gallery[selectedImgIndex]?.alt}
                          className="max-w-full max-h-[46vh] md:max-h-[50vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                      </div>

                      <div className="w-full bg-white/[0.02] p-4 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

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

        <div className="mt-16 text-center">
          <button
            onClick={openContactFromCta}
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

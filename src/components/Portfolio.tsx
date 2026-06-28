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
import portfolio62 from "@/assets/portfolio-62.webp";
import portfolio63 from "@/assets/portfolio-63.webp";
import portfolio64 from "@/assets/portfolio-64.webp";
import portfolio65 from "@/assets/portfolio-65.webp";
import portfolio66 from "@/assets/portfolio-66.webp";
import portfolio67 from "@/assets/portfolio-67.webp";
import portfolio68 from "@/assets/portfolio-68.webp";
import portfolio69 from "@/assets/portfolio-69.webp";
import portfolio70 from "@/assets/portfolio-70.webp";
import portfolio71 from "@/assets/portfolio-71.webp";
import portfolio72 from "@/assets/portfolio-72.webp";
import portfolio73 from "@/assets/portfolio-73.webp";
import portfolio74 from "@/assets/portfolio-74.webp";
import portfolio75 from "@/assets/portfolio-75.webp";
import portfolio76 from "@/assets/portfolio-76.webp";
import portfolio77 from "@/assets/portfolio-77.webp";
import portfolio78 from "@/assets/portfolio-78.webp";
import portfolio79 from "@/assets/portfolio-79.webp";
import portfolio80 from "@/assets/portfolio-80.webp";
import portfolio81 from "@/assets/portfolio-81.webp";
import portfolio82 from "@/assets/portfolio-82.webp";
import portfolio83 from "@/assets/portfolio-83.webp";
import portfolio84 from "@/assets/portfolio-84.webp";
import portfolio85 from "@/assets/portfolio-85.webp";
import portfolio86 from "@/assets/portfolio-86.webp";
import portfolio87 from "@/assets/portfolio-87.webp";
import portfolio88 from "@/assets/portfolio-88.webp";
import portfolio89 from "@/assets/portfolio-89.webp";
import portfolio90 from "@/assets/portfolio-90.webp";
import portfolio91 from "@/assets/portfolio-91.webp";
import portfolio92 from "@/assets/portfolio-92.webp";
import portfolio93 from "@/assets/portfolio-93.webp";
import portfolio94 from "@/assets/portfolio-94.webp";
import portfolio95 from "@/assets/portfolio-95.webp";
import portfolio96 from "@/assets/portfolio-96.webp";
import portfolio97 from "@/assets/portfolio-97.webp";
import portfolio98 from "@/assets/portfolio-98.webp";
import portfolio99 from "@/assets/portfolio-99.webp";
import portfolio100 from "@/assets/portfolio-100.webp";
import portfolio101 from "@/assets/portfolio-101.webp";
import portfolio102 from "@/assets/portfolio-102.webp";
import portfolio103 from "@/assets/portfolio-103.webp";
import portfolio104 from "@/assets/portfolio-104.webp";
import portfolio105 from "@/assets/portfolio-105.webp";
import portfolio106 from "@/assets/portfolio-106.webp";
import portfolio107 from "@/assets/portfolio-107.webp";
import portfolio108 from "@/assets/portfolio-108.webp";
import portfolio109 from "@/assets/portfolio-109.webp";
import portfolio110 from "@/assets/portfolio-110.webp";
import portfolio111 from "@/assets/portfolio-111.webp";
import portfolio112 from "@/assets/portfolio-112.webp";
import portfolio113 from "@/assets/portfolio-113.webp";
import portfolio114 from "@/assets/portfolio-114.webp";


const Portfolio = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState("all");
  const [activeSubTab, setActiveSubTab] = useState("all");

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "The Monagroulli Monolith, Monagroulli, Limassol, Cyprus",
      description: "Striking contemporary architecture framed by dramatic rock faces, offering total privacy and panoramic views just minutes outside Limassol.",
      coverImage: portfolio1,
      gallery: [
        { src: portfolio1, alt: "The Monagroulli Monolith - Exterior View", type: "exterior", room: "" },
        { src: portfolio6, alt: "The Monagroulli Monolith - Contemporary Bedroom", type: "interior", room: "bedroom" },
        { src: portfolio10, alt: "The Monagroulli Monolith - Living Room Space", type: "interior", room: "living room" },
        { src: portfolio4, alt: "The Monagroulli Monolith - Modern Minimal Lounge", type: "interior", room: "living room" },
      ],
    },
    {
      id: 2,
      title: "The Platres Retreat, Pano Platres, Troodos, Cyprus",
      description: "A modern timber cabin tucked into the dense Troodos pine forests, offering a serene, high-altitude alpine escape from the coastal heat.",
      coverImage: portfolio2,
      gallery: [
        { src: portfolio2, alt: "The Platres Retreat - Timber Cabin Exterior", type: "exterior", room: "" },
        { src: portfolio5, alt: "The Platres Retreat - Cozy Interior Living Architecture", type: "interior", room: "living room" },
        { src: portfolio21, alt: "The Platres Retreat - High-Altitude Lounge Space", type: "interior", room: "living room" },
      ],
    },
    {
      id: 3,
      title: "The West Coast Frontier, Neo Chorio, Paphos, Cyprus",
      description: "An elevated contemporary residence framing Cyprus's most rugged, untouched western peninsula with sweeping sea views.",
      coverImage: portfolio3,
      gallery: [
        { src: portfolio3, alt: "The West Coast Frontier - Coastal Frontage View", type: "exterior", room: "" },
        { src: portfolio14, alt: "The West Coast Frontier - Integrated Kitchen Concept", type: "interior", room: "kitchen" },
        { src: portfolio15, alt: "The West Coast Frontier - Panoramic Living Environment", type: "interior", room: "living room" },
        { src: portfolio16, alt: "The West Coast Frontier - Minimalist Light Lounge", type: "interior", room: "living room" },
        { src: portfolio20, alt: "The West Coast Frontier - Luxury Marble Bathroom", type: "interior", room: "bathroom" },
      ],
    },
    {
      id: 4,
      title: "Modern Residential Complex, Latsia, Nicosia, Cyprus",
      description: "A contemporary multi-family residential development featuring sleek glass balconies and warm brick accents, perfectly integrated into the expanding hillsides of Nicosia.",
      coverImage: portfolio7,
      gallery: [
        { src: portfolio7, alt: "Modern Residential Complex - Multi-Family Exterior", type: "exterior", room: "" },
        { src: portfolio51, alt: "Modern Residential Complex - Open Floor Layout", type: "interior", room: "living room" },
        { src: portfolio53, alt: "Modern Residential Complex - Modernist Lounge Architecture", type: "interior", room: "living room" },
        { src: portfolio54, alt: "Modern Residential Complex - Premium Dining Area", type: "interior", room: "living room" },
        { src: portfolio11, alt: "Modern Residential Complex - Master Bedroom Suite", type: "interior", room: "bedroom" },
      ],
    },
    {
      id: 5,
      title: "The Omodos Stone Villa, Omodos, Limassol, Cyprus",
      description: "A beautiful traditional fieldstone residence combining classic Cypriot masonry with modern elevated terraces, overlooking the rolling vineyard valleys of Limassol.",
      coverImage: portfolio8,
      gallery: [
        { src: portfolio8, alt: "The Omodos Stone Villa - Rustic Fieldstone Facade", type: "exterior", room: "" },
        { src: portfolio13, alt: "The Omodos Stone Villa - Timber Accent Living Space", type: "interior", room: "living room" },
        { src: portfolio18, alt: "The Omodos Stone Villa - Focused Work Environment", type: "interior", room: "office" },
        { src: portfolio31, alt: "The Omodos Stone Villa - Minimalist Japandi Kitchen", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 6,
      title: "The Kifisia Horizon House, Kifisia, Athens, Greece",
      description: "A low-profile modern pavilion tucked away into the mature, leafy green landscapes of northern Athens, pairing minimalist architecture with total privacy.",
      coverImage: portfolio19,
      gallery: [
        { src: portfolio19, alt: "The Kifisia Horizon House - Minimal Pavilion Architecture", type: "exterior", room: "" },
        { src: portfolio48, alt: "The Kifisia Horizon House - Bright Open Plan Living Room", type: "interior", room: "living room" },
        { src: portfolio49, alt: "The Kifisia Horizon House - Structural Framed Lounge", type: "interior", room: "living room" },
        { src: portfolio59, alt: "The Kifisia Horizon House - Creative Studio Space", type: "interior", room: "office" },
      ],
    },
    {
      id: 7,
      title: "The Ekali Arched Villa, Ekali, Athens, Greece",
      description: "Striking brutalist architecture nestled within the elite, densely wooded northern suburbs of Athens, blending geometric concrete forms with soaring glass facades.",
      coverImage: portfolio22,
      gallery: [
        { src: portfolio22, alt: "The Ekali Arched Villa - Geometric Concrete Footprint", type: "exterior", room: "" },
        { src: portfolio17, alt: "The Ekali Arched Villa - Premium Architectural Lounge", type: "interior", room: "living room" },
        { src: portfolio38, alt: "The Ekali Arched Villa - Forest Green Highlight Bedroom", type: "interior", room: "bedroom" },
        { src: portfolio46, alt: "The Ekali Arched Villa - Linear Bedding Architecture", type: "interior", room: "bedroom" },
      ],
    },
    {
      id: 8,
      title: "The Palodeia Smart Residence, Palodeia, Limassol, Cyprus",
      description: "A masterfully planned smart home showcasing an L-shaped architectural footprint, private interior courtyards, and clean minimalist zoning tailored for modern Mediterranean lifestyles.",
      coverImage: portfolio23,
      gallery: [
        { src: portfolio23, alt: "The Palodeia Smart Residence - L-Shaped Footprint View", type: "exterior", room: "" },
        { src: portfolio26, alt: "The Palodeia Smart Residence - Courtyard Architecture Plan", type: "exterior", room: "" },
        { src: portfolio27, alt: "The Palodeia Smart Residence - Modern Layout Render", type: "exterior", room: "" },
        { src: portfolio32, alt: "The Palodeia Smart Residence - Monolithic Living Zone", type: "interior", room: "living room" },
        { src: portfolio39, alt: "The Palodeia Smart Residence - Sleek Gray Kitchen Island", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 9,
      title: "The Pelion Woodland Manor, Tsagarada, Mount Pelion, Greece",
      description: "A sophisticated sanctuary merging minimalist architecture with the dense, world-famous forest landscapes of the Pelion peninsula.",
      coverImage: portfolio24,
      gallery: [
        { src: portfolio24, alt: "The Pelion Woodland Manor - Forest Facing Elevation", type: "exterior", room: "" },
        { src: portfolio9, alt: "The Pelion Woodland Manor - Premium Slate Kitchen Layout", type: "interior", room: "kitchen" },
        { src: portfolio47, alt: "The Pelion Woodland Manor - Dark Wood Architectural Dining", type: "interior", room: "living room" },
        { src: portfolio50, alt: "The Pelion Woodland Manor - Integrated Timber Lounge", type: "interior", room: "living room" },
        { src: portfolio25, alt: "The Pelion Woodland Manor - Executive Woodland Office Study", type: "interior", room: "office" },
      ],
    },
    {
      id: 10,
      title: "The Protaras Palm Dunes, Protaras Coast, Famagusta, Cyprus",
      description: "A massive, master-planned holiday development showcasing uniform minimalist design, private plunge pools, and lush tropical landscaping tailored for elite Mediterranean resort living.",
      coverImage: portfolio28,
      gallery: [
        { src: portfolio28, alt: "The Protaras Palm Dunes - Mediterranean Resort Facade", type: "exterior", room: "" },
        { src: portfolio29, alt: "The Protaras Palm Dunes - Aerial Layout View", type: "exterior", room: "" },
        { src: portfolio30, alt: "The Protaras Palm Dunes - Minimalist Pool Deck Render", type: "exterior", room: "" },
        { src: portfolio41, alt: "The Protaras Palm Dunes - Slatted Wood Lounge Space", type: "interior", room: "living room" },
        { src: portfolio42, alt: "The Protaras Palm Dunes - Warm Contemporary Bathroom", type: "interior", room: "bathroom" },
        { src: portfolio44, alt: "The Protaras Palm Dunes - Matte Charcoal Chef Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio45, alt: "The Protaras Palm Dunes - Minimalist Master Bed Suite", type: "interior", room: "bedroom" },
        { src: portfolio52, alt: "The Protaras Palm Dunes - Premium Quiet Working Office", type: "interior", room: "office" },
      ],
    },
    {
      id: 11,
      title: "The Ellinikon Plaza Towers, The Ellinikon, Athens, Greece",
      description: "An iconic metropolitan high-rise complex anchoring the premier urban coastal development area, showcasing sleek glass grids, grand plazas, and mixed-use luxury commercial spaces.",
      coverImage: portfolio35,
      gallery: [
        { src: portfolio12, alt: "The Ellinikon Plaza Towers - Luxury Calacatta Marble Bath", type: "interior", room: "bathroom" },
        { src: portfolio35, alt: "The Ellinikon Plaza Towers - Glass Grid Highrise Facade", type: "exterior", room: "" },
        { src: portfolio37, alt: "The Ellinikon Plaza Towers - Sky Lounge Office Lounge", type: "interior", room: "office" },
        { src: portfolio40, alt: "The Ellinikon Plaza Towers - Streamlined Minimal Kitchen", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 12,
      title: "The Strovolos Design Pavilion, Strovolos, Nicosia, Cyprus",
      description: "A striking commercial showroom featuring a raw concrete facade and bold timber framing, designed as an ultra-premium flagship office or high-end retail headquarters.",
      coverImage: portfolio36,
      gallery: [
        { src: portfolio33, alt: "The Strovolos Design Pavilion - Textural Bedroom Scheme", type: "interior", room: "bedroom" },
        { src: portfolio34, alt: "The Strovolos Design Pavilion - Integrated Media Living Space", type: "interior", room: "living room" },
        { src: portfolio36, alt: "The Strovolos Design Pavilion - Raw Concrete Modern Facade", type: "exterior", room: "" },
        { src: portfolio43, alt: "The Strovolos Design Pavilion - Contemporary Organic Bathroom", type: "interior", room: "bathroom" },
        { src: portfolio60, alt: "The Strovolos Design Pavilion - High-End Premium Kitchen Visual", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 13,
      title: "Aspithea, Akrounta, Limassol",
      description: "An exclusive cluster of contemporary eco-villas blending crisp architectural geometries with the rugged, pine-dappled mountainous landscapes.",
      coverImage: portfolio55,
      gallery: [
        { src: portfolio55, alt: "Aspithea - Alpine Mountain Drone Overview", type: "exterior", room: "" },
        { src: portfolio56, alt: "Aspithea - Sunken Mountain View Living Room", type: "interior", room: "living room" },
        { src: portfolio57, alt: "Aspithea - Integrated Minimalist Eco-Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio58, alt: "Aspithea - Structural Wood Framing Master Bed", type: "interior", room: "bedroom" },
        { src: portfolio61, alt: "Aspithea - Primary Geometric Entrance Real Estate", type: "exterior", room: "" },
      ],
    },
    {
      id: 14,
      title: "Kids Library, Kyperounta, Limassol",
      description: "An innovative, custom-built children's library and interactive lounge featuring bespoke house-shaped reading pods, integrated chalkboard graphics, and playful tree-themed shelving to foster collaborative learning and creativity.",
      coverImage: portfolio62,
      gallery: [
        { src: portfolio62, alt: "Kids Library - Interactive House Reading Nook", type: "interior", room: "reading room" },
        { src: portfolio63, alt: "Kids Library - Collaborative Learning Zone with Modular Seating", type: "interior", room: "collaborative area" },
        { src: portfolio64, alt: "Kids Library - Modular Lounge & Multi-Use Zone", type: "interior", room: "lounge" },
        { src: portfolio65, alt: "Kids Library - House-Shaped Reading Nook Detail", type: "interior", room: "reading room" },
        { src: portfolio66, alt: "Kids Library - Integrated Tree-Themed Feature Shelving", type: "interior", room: "feature wall" },
        { src: portfolio67, alt: "Kids Library - Playful Modular Study & Activity Pods", type: "interior", room: "study area" },
        { src: portfolio68, alt: "Kids Library - Tree-Shelving and Creative Graphic Wall", type: "interior", room: "activity area" },
      ],
    },
    {
      id: 15,
      title: "Hills Panorama, Villa 1, Pegeia, Pafos",
      description: "A masterful modern residence commanding unobstructed sea panoramas, showcasing an infinity pool, local stone masonry, and ultra-premium open-plan interiors that seamlessly flow onto sprawling sun terraces.",
      coverImage: portfolio69,
      gallery: [
        { src: portfolio69, alt: "Hills Panorama Villa 1 - Infinity Pool at Dusk", type: "exterior", room: "pool deck" },
        { src: portfolio70, alt: "Hills Panorama Villa 1 - Modern Hillside Architecture", type: "exterior", room: "facade" },
        { src: portfolio71, alt: "Hills Panorama Villa 1 - Luxury Panoramic Salon and Dining Area", type: "interior", room: "living room" },
        { src: portfolio72, alt: "Hills Panorama Villa 1 - Ultra-Premium Chef's Kitchen", type: "interior", room: "kitchen" },
        { src: portfolio73, alt: "Hills Panorama Villa 1 - Sea-Facing Master Suite", type: "interior", room: "bedroom" },
        { src: portfolio74, alt: "Hills Panorama Villa 1 - High-End Marble Master Bath", type: "interior", room: "bathroom" },
        { src: portfolio75, alt: "Hills Panorama Villa 1 - Grand Double-Height Lounge and Staircase", type: "interior", room: "living room" },
        { src: portfolio76, alt: "Hills Panorama Villa 1 - Elegant Guest Bedroom with Garden Views", type: "interior", room: "bedroom" },
        { src: portfolio77, alt: "Hills Panorama Villa 1 - Secondary Preparation Kitchen and Scullery", type: "interior", room: "kitchen" },
        { src: portfolio78, alt: "Hills Panorama Villa 1 - Modern Guest Shower Room", type: "interior", room: "bathroom" },
        { src: portfolio79, alt: "Hills Panorama Villa 1 - Sunset Outdoor Living & Pool Terrace", type: "exterior", room: "patio" },
      ],
    },
    {
      id: 16,
      title: "Hills Panorama, Villa 2, Pegeia, Pafos",
      description: "An architectural masterpiece defining upscale Mediterranean living, featuring premium walnut-paneled kitchens, minimalist floor-to-ceiling glass, and majestic outdoor entertainment areas.",
      coverImage: portfolio80,
      gallery: [
        { src: portfolio80, alt: "Hills Panorama Villa 2 - Modern Two-Story Facade and Pool Deck", type: "exterior", room: "pool deck" },
        { src: portfolio81, alt: "Hills Panorama Villa 2 - Elevated Infinity Pool and Panoramic Sea Views", type: "exterior", room: "pool deck" },
        { src: portfolio82, alt: "Hills Panorama Villa 2 - Luxury Local Stone Entrance and Carport", type: "exterior", room: "entrance" },
        { src: portfolio83, alt: "Hills Panorama Villa 2 - Sophisticated Open-Plan Salon and Lounge Room", type: "interior", room: "living room" },
        { src: portfolio84, alt: "Hills Panorama Villa 2 - Bright Multi-Zone Dining Area and Kitchen Island", type: "interior", room: "dining room" },
        { src: portfolio85, alt: "Hills Panorama Villa 2 - Modern Dining Space with Feature Walnut Staircase", type: "interior", room: "dining room" },
        { src: portfolio86, alt: "Hills Panorama Villa 2 - Premium Kitchen with Integrated Breakfast Bar and Patio Access", type: "interior", room: "kitchen" },
        { src: portfolio87, alt: "Hills Panorama Villa 2 - Seamless Indoor-Outdoor Flow from Kitchen Island to Terrace", type: "interior", room: "kitchen" },
        { src: portfolio88, alt: "Hills Panorama Villa 2 - Elegant Dining Room and Open Kitchen Layout", type: "interior", room: "dining room" },
      ],
    },
    {
      id: 17,
      title: "Hills Panorama, Villa 3, Pegeia, Pafos",
      description: "A multi-level hillside sanctuary blending crisp white geometric facades with traditional textured stone walls, complete with custom interior dining galleries facing the coastline.",
      coverImage: portfolio89,
      gallery: [
        { src: portfolio89, alt: "Hills Panorama Villa 3 - Multi-Level Facade View", type: "exterior", room: "" },
        { src: portfolio90, alt: "Hills Panorama Villa 3 - Multi-Level Facade and Deck View", type: "exterior", room: "pool deck" },
        { src: portfolio91, alt: "Hills Panorama Villa 3 - Entrance Facade and Stone Wall Accent", type: "exterior", room: "entrance" },
        { src: portfolio92, alt: "Hills Panorama Villa 3 - Closed Facade and Landscaped Driveway", type: "exterior", room: "entrance" },
        { src: portfolio93, alt: "Hills Panorama Villa 3 - Infinity Pool and Elevated Side Profile", type: "exterior", room: "pool deck" },
        { src: portfolio94, alt: "Hills Panorama Villa 3 - Panoramic View of the L-Shaped Villa and Pool", type: "exterior", room: "pool deck" },
        { src: portfolio95, alt: "Hills Panorama Villa 3 - Side Elevation and Pool Terrace View", type: "exterior", room: "pool deck" },
        { src: portfolio96, alt: "Hills Panorama Villa 3 - Architectural Monolithic Kitchen and Open Dining Area", type: "interior", room: "kitchen" },
        { src: portfolio97, alt: "Hills Panorama Villa 3 - Custom Interior Dining Gallery and Sofa Lounge", type: "interior", room: "living room" },
        { src: portfolio98, alt: "Hills Panorama Villa 3 - Recessed Light Living Room and Open Layout Lounge", type: "interior", room: "living room" },
      ],
    },
    {
      id: 18,
      title: "Hills Panorama, Villa 4, Pegeia, Pafos",
      description: "An architectural masterpiece defining upscale Mediterranean living, featuring premium walnut-paneled kitchens, minimalist floor-to-ceiling glass, and majestic outdoor entertainment areas.",
      coverImage: portfolio101,
      gallery: [
        { src: portfolio101, alt: "Hills Panorama Villa 4 - Modern Two-Story Facade and Pool Deck", type: "exterior", room: "pool deck" },
        { src: portfolio102, alt: "Hills Panorama Villa 4 - Elevated Infinity Pool and Panoramic Sea Views", type: "exterior", room: "pool deck" },
        { src: portfolio103, alt: "Hills Panorama Villa 4 - Luxury Local Stone Entrance and Carport", type: "exterior", room: "entrance" },
        { src: portfolio104, alt: "Hills Panorama Villa 4 - Sophisticated Open-Plan Salon and Lounge Room", type: "interior", room: "living room" },
        { src: portfolio105, alt: "Hills Panorama Villa 4 - Architectural Monolithic Kitchen and Open Dining Area", type: "interior", room: "kitchen" },
      ],
    },
    {
      id: 19,
      title: "Hills Panorama, Villa 5, Pegeia, Pafos",
      description: "A multi-level hillside sanctuary blending crisp white geometric facades with traditional textured stone walls, complete with custom interior dining galleries facing the coastline.",
      coverImage: portfolio106,
      gallery: [
        { src: portfolio106, alt: "Hills Panorama Villa 5 - Multi-Level Facade View", type: "exterior", room: "" },
        { src: portfolio107, alt: "Hills Panorama Villa 5 - Multi-Level Facade and Deck View", type: "exterior", room: "pool deck" },
        { src: portfolio108, alt: "Hills Panorama Villa 5 - Entrance Facade and Stone Wall Accent", type: "exterior", room: "entrance" },
        { src: portfolio109, alt: "Hills Panorama Villa 5 - Closed Facade and Landscaped Driveway", type: "exterior", room: "entrance" },
        { src: portfolio110, alt: "Hills Panorama Villa 5 - Infinity Pool and Elevated Side Profile", type: "exterior", room: "pool deck" },
        { src: portfolio111, alt: "Hills Panorama Villa 5 - Sophisticated Open-Plan Salon and Lounge Room", type: "interior", room: "living room" },
        { src: portfolio112, alt: "Hills Panorama Villa 5 - Luxury Panoramic Salon and Dining Area", type: "interior", room: "living room" },
        { src: portfolio113, alt: "Hills Panorama Villa 5 - Elegant Dining Room and Open Kitchen Layout", type: "interior", room: "dining room" },
        { src: portfolio114, alt: "Hills Panorama Villa 5 - Architectural Monolithic Kitchen and Open Dining Area", type: "interior", room: "kitchen" },
      ],
    },
  ];

  const currentFeedItems = useMemo(() => {
    if (activeTab === "all") {
      return projectsData.map((project) => ({
        isGroupedFolder: true,
        id: project.id,
        title: project.title,
        description: project.description,
        displayImage: project.coverImage,
        initialIndexInGallery: 0,
        associatedProject: project,
        tagLabel: t("Full Project Portfolio"),
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

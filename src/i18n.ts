import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "nav_portfolio": "Featured Portfolio",
          "nav_services": "Our Services",
          "nav_contact": "Contact Us",
          "nav_quote": "Get a Quote",
          "hero_eyebrow": "3D Architectural Visualization Cyprus",
          "hero_seo_keywords": "GXVISUALS: Photorealistic 3D Rendering and Kitchen Design in Cyprus.",
          "hero_title_part1": "Bring Your Vision",
          "hero_title_part2": "To Life",
          "hero_description": "Fast, photorealistic 3D rendering and technical kitchen sketches with exact dimensions. Transforming architectural concepts across Cyprus into stunning visuals.",
          "hero_btn_portfolio": "View Portfolio",
          "hero_btn_start": "Start a Project",
          // Services Section
          "services_title": "Our Expertise",
          "services_subtitle": "Specialized visualization services tailored for architects, developers, and interior designers.",
          "service_1_title": "3D Architectural Visualization",
          "service_1_desc": "Photorealistic exterior and interior renders that showcase every detail of your architectural project.",
          "service_2_title": "Technical Kitchen Design",
          "service_2_desc": "Precise kitchen sketches with exact dimensions, perfect for manufacturing and installation planning.",
          "service_3_title": "Interior Concept Renders",
          "service_3_desc": "High-end interior visualizations that help clients experience the atmosphere of their future home."
        }
      },
      el: {
        translation: {
          "nav_portfolio": "Έργα",
          "nav_services": "Υπηρεσίες",
          "nav_contact": "Επικοινωνία",
          "nav_quote": "Προσφορά",
          "hero_eyebrow": "3D ΑΡΧΙΤΕΚΤΟΝΙΚΟΣ ΦΩΤΟΡΕΑΛΙΣΜΟΣ ΚΥΠΡΟΣ",
          "hero_seo_keywords": "GXVISUALS: Φωτορεαλιστικά 3D Renders και Σχεδιασμός Κουζίνας στην Κύπρο.",
          "hero_title_part1": "Δώστε Ζωή στο",
          "hero_title_part2": "Όραμά σας",
          "hero_description": "Γρήγορος, φωτορεαλιστικός τρισδιάστατος σχεδιασμός και τεχνικά σχέδια κουζίνας με ακριβείς διαστάσεις. Μετατρέπουμε αρχιτεκτονικές ιδέες σε όλη την Κύπρο σε εντυπωσιακά αποτελέσματα.",
          "hero_btn_portfolio": "Δείτε το Portfolio",
          "hero_btn_start": "Ξεκινήστε Έργο",
          // Services Section
          "services_title": "Η Εξειδίκευσή μας",
          "services_subtitle": "Εξειδικευμένες υπηρεσίες φωτορεαλισμού για αρχιτέκτονες, κατασκευαστές και διακοσμητές.",
          "service_1_title": "Αρχιτεκτονικός Φωτορεαλισμός",
          "service_1_desc": "Φωτορεαλιστικές εξωτερικές και εσωτερικές απεικονίσεις που αναδεικνύουν κάθε λεπτομέρεια του έργου σας.",
          "service_2_title": "Τεχνικός Σχεδιασμός Κουζίνας",
          "service_2_desc": "Ακριβή τεχνικά σχέδια κουζίνας με πλήρεις διαστάσεις, ιδανικά για κατασκευή και προγραμματισμό εγκατάστασης.",
          "service_3_title": "Φωτορεαλισμός Εσωτερικών Χώρων",
          "service_3_desc": "Υψηλής ποιότητας εσωτερικές απεικονίσεις που βοηθούν τους πελάτες να νιώσουν την ατμόσφαιρα του μελλοντικού τους σπιτιού."
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

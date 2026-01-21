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
          // Navigation
          "nav_portfolio": "Featured Portfolio",
          "nav_services": "Our Services",
          "nav_contact": "Contact Us",
          "nav_quote": "Get a Quote",
          
          // Hero Section
          "hero_eyebrow": "3D Architectural Visualization Cyprus",
          "hero_seo_keywords": "GXVISUALS: Photorealistic 3D Rendering and Kitchen Design in Cyprus.",
          "hero_title_part1": "Bring Your Vision",
          "hero_title_part2": "To Life",
          "hero_description": "Fast, photorealistic 3D rendering and technical kitchen sketches with exact dimensions. Transforming architectural concepts across Cyprus into stunning visuals.",
          "hero_btn_portfolio": "View Portfolio",
          "hero_btn_start": "Start a Project",
        }
      },
      el: {
        translation: {
          // Navigation
          "nav_portfolio": "Έργα",
          "nav_services": "Υπηρεσίες",
          "nav_contact": "Επικοινωνία",
          "nav_quote": "Προσφορά",
          
          // Hero Section
          "hero_eyebrow": "3D ΑΡΧΙΤΕΚΤΟΝΙΚΟΣ ΦΩΤΟΡΕΑΛΙΣΜΟΣ ΚΥΠΡΟΣ",
          "hero_seo_keywords": "GXVISUALS: Φωτορεαλιστικά 3D Renders και Σχεδιασμός Κουζίνας στην Κύπρο.",
          "hero_title_part1": "Δώστε Ζωή στο",
          "hero_title_part2": "Όραμά σας",
          "hero_description": "Γρήγορος, φωτορεαλιστικός τρισδιάστατος σχεδιασμός και τεχνικά σχέδια κουζίνας με ακριβείς διαστάσεις. Μετατρέπουμε αρχιτεκτονικές ιδέες σε όλη την Κύπρο σε εντυπωσιακά αποτελέσματα.",
          "hero_btn_portfolio": "Δείτε το Portfolio",
          "hero_btn_start": "Ξεκινήστε Έργο",
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

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
          "hero_title": "Bring Your Vision To Life",
          "hero_subtitle": "Premium 3D architectural visualization and technical design."
        }
      },
      el: {
        translation: {
          "nav_portfolio": "Έργα",
          "nav_services": "Υπηρεσίες",
          "nav_contact": "Επικοινωνία",
          "nav_quote": "Προσφορά",
          "hero_title": "Δώστε Ζωή στο Όραμά σας",
          "hero_subtitle": "Κορυφαίος αρχιτεκτονικός φωτορεαλισμός και τεχνικός σχεδιασμός."
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

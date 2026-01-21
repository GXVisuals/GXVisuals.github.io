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
          "hero_title_part1": "Bring Your Vision",
          "hero_title_part2": "To Life",
          "services_eyebrow": "What We Offer",
          "services_header": "Our Services",
          "services_sub": "Comprehensive rendering solutions tailored to elevate your architectural projects.",
          "s_res_title": "Residential Visualization",
          "s_res_desc": "Stunning exterior and interior renders for homes, villas, and apartments that captivate buyers.",
          "s_com_title": "Commercial Renders",
          "s_com_desc": "Professional visualizations for offices, retail spaces, and mixed-use developments.",
          "s_int_title": "Interior Design",
          "s_int_desc": "Detailed interior renders showcasing materials, lighting, and furniture layouts.",
          "s_kit_title": "Kitchen Design & Technical Sketches",
          "s_kit_desc": "Precise kitchen layouts and detailed sketches with exact dimensions for accurate manufacturing and installation.",
          // Contact Section
          "contact_eyebrow": "Get In Touch",
          "contact_header": "Start Your Project",
          "contact_sub": "Ready to transform your architectural vision? Send us a message for a custom quote.",
          "form_name": "Full Name",
          "form_email": "Email Address",
          "form_subject": "Subject",
          "form_message": "Your Message",
          "form_submit": "Send Message"
        }
      },
      el: {
        translation: {
          "nav_portfolio": "Έργα",
          "nav_services": "Υπηρεσίες",
          "nav_contact": "Επικοινωνία",
          "nav_quote": "Προσφορά",
          "hero_title_part1": "Δώστε Ζωή στο",
          "hero_title_part2": "Όραμά σας",
          "services_eyebrow": "Τι Προσφέρουμε",
          "services_header": "Οι Υπηρεσίες μας",
          "services_sub": "Ολοκληρωμένες λύσεις φωτορεαλισμού προσαρμοσμένες για να αναδείξουν τα αρχιτεκτονικά σας έργα.",
          "s_res_title": "Οικιστικός Φωτορεαλισμός",
          "s_res_desc": "Εντυπωσιακές εξωτερικές και εσωτερικές απεικονίσεις για σπίτια, επαύλεις και διαμερίσματα.",
          "s_com_title": "Εμπορικά Έργα",
          "s_com_desc": "Επαγγελματικός φωτορεαλισμός για γραφεία, καταστήματα και κτίρια μικτής χρήσης.",
          "s_int_title": "Εσωτερική Διακόσμηση",
          "s_int_desc": "Λεπτομερείς εσωτερικές απεικονίσεις που αναδεικνύουν υλικά, φωτισμό και διάταξη επίπλων.",
          "s_kit_title": "Σχεδιασμός Κουζίνας & Τεχνικά Σχέδια",
          "s_kit_desc": "Ακριβείς διατάξεις κουζίνας και λεπτομερή σχέδια με ακριβείς διαστάσεις για σωστή κατασκευή.",
          // Contact Section
          "contact_eyebrow": "Επικοινωνία",
          "contact_header": "Ξεκινήστε το Έργο σας",
          "contact_sub": "Είστε έτοιμοι να μεταμορφώσετε το αρχιτεκτονικό σας όραμα; Στείλτε μας μήνυμα για μια προσφορά.",
          "form_name": "Ονοματεπώνυμο",
          "form_email": "Διεύθυνση Email",
          "form_subject": "Θέμα",
          "form_message": "Το Μήνυμά σας",
          "form_submit": "Αποστολή Μηνύματος"
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

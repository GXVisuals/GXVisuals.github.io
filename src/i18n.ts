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
          "s_kit_desc": "Precise kitchen layouts and detailed sketches with exact dimensions for accurate manufacturing and installation.","contact_phone": "Phone",
          "contact_details": "Project Details *",
          "contact_details_placeholder": "Tell us about your project...",
          "contact_location": "Limassol, Cyprus",
          "toast_captcha_title": "Captcha Required",
          "toast_captcha_desc": "Please complete the captcha challenge.",
          "toast_success_title": "Message sent!",
          "toast_success_desc": "We'll get back to you within 24 hours.",
          "toast_error_title": "Something went wrong",
          "toast_error_desc": "Please try again later.",
          "sending": "Sending...","footer_bio": "Leading architectural visualization studio in Cyprus. Specializing in photorealistic 3D rendering and technical kitchen design for developers and homeowners.",
          "footer_location": "Location: Cyprus, Nationwide Service",
          "footer_tagline": "Speed. Precision. Photorealism.",
          "footer_back_to_top": "Back to Top",
          "footer_projects": "Featured Projects",
          "footer_gallery": "3D Gallery",
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
          "contact_phone": "Τηλέφωνο",
          "contact_details": "Λεπτομέρειες Έργου *",
          "contact_details_placeholder": "Πείτε μας για το έργο σας...",
          "contact_location": "Λεμεσός, Κύπρος",
          "toast_captcha_title": "Απαιτείται Captcha",
          "toast_captcha_desc": "Παρακαλώ συμπληρώστε την πρόκληση captcha.",
          "toast_success_title": "Το μήνυμα στάλθηκε!",
          "toast_success_desc": "Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.",
          "toast_error_title": "Κάτι πήγε στραβά",
          "toast_error_desc": "Παρακαλώ δοκιμάστε ξανά αργότερα.",
          "sending": "Αποστολή...",
          "footer_bio": "Κορυφαίο γραφείο αρχιτεκτονικού φωτορεαλισμού στην Κύπρο. Ειδικευόμαστε σε φωτορεαλιστικά 3D renders και τεχνικό σχεδιασμό κουζίνας για κατασκευαστές και ιδιώτες.",
          "footer_location": "Τοποθεσία: Κύπρος, Παγκύπρια Εξυπηρέτηση",
          "footer_tagline": "Ταχύτητα. Ακρίβεια. Φωτορεαλισμός.",
          "footer_back_to_top": "Επιστροφή στην Κορυφή",
          "footer_projects": "Επιλεγμένα Έργα",
          "footer_gallery": "3D Γκαλερί",
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

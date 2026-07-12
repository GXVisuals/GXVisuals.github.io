import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-[#0e0e0e] text-white">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#00bad3] font-body text-sm tracking-[0.3em] uppercase block">
            {t("about_eyebrow", "WHO WE ARE")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mt-4 italic">
            {t("about_header", "About GX Visuals")}
          </h2>
        </div>

        {/* Main Two-Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left — Placeholder Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-800 flex items-center justify-center"
          >
            <span className="text-gray-600 font-body text-sm tracking-widest uppercase">
              Studio Photo Coming Soon
            </span>
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00bad3] rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00bad3] rounded-br-2xl" />
          </motion.div>

          {/* Right — Story + Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Our Story */}
            <div>
              <span className="text-[#00bad3] font-body text-xs tracking-[0.25em] uppercase block mb-3">
                {t("about_story_eyebrow", "Our Story")}
              </span>
              <h3 className="font-display text-2xl text-white italic font-light mb-4">
                {t("about_story_title", "Born from a passion for precision")}
              </h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                {t(
                  "about_story_text",
                  "GX Visuals was founded in 2025 with a single purpose: to help people see their future home before a single brick is laid. We believe that a clear, photorealistic visualization can save clients from costly mistakes and give them the confidence to make the right decisions — before construction even begins. Beyond residential projects, we work closely with real estate agents and developers to create compelling visuals that help sell properties faster and more effectively."
                )}
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#00bad3]/40" />

            {/* Our Mission */}
            <div>
              <span className="text-[#00bad3] font-body text-xs tracking-[0.25em] uppercase block mb-3">
                {t("about_mission_eyebrow", "Our Mission")}
              </span>
              <h3 className="font-display text-2xl text-white italic font-light mb-4">
                {t("about_mission_title", "Turning visions into reality")}
              </h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                {t(
                  "about_mission_text",
                  "Our mission is to serve architects, homeowners, interior designers, real estate agents, and property developers across Cyprus and Greece with studio-quality 3D architectural renderings and CGI. We are committed to delivering every project with the highest level of detail, on time, and in close collaboration with our clients — so that every visual we produce not only informs, but truly inspires."
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/[0.02]"
        >
          <div>
            <h4 className="font-display text-2xl text-white italic font-light mb-2">
              {t("about_cta_title", "Ready to visualize your project?")}
            </h4>
            <p className="text-gray-400 font-body text-sm">
              {t("about_cta_sub", "Let's bring your ideas to life before construction begins.")}
            </p>
          </div>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-body text-xs tracking-[0.3em] uppercase transition-all duration-500 bg-[#00bad3] text-white rounded-full hover:bg-[#00bad3]/90 hover:shadow-[0_0_30px_rgba(0,186,211,0.4)] transform hover:-translate-y-1 whitespace-nowrap"
          >
            <span className="relative z-10 font-bold">{t("CONTACT US", "CONTACT US")}</span>
            <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

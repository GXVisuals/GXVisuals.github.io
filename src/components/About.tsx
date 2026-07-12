import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "Photorealistic Quality",
    desc: "Studio-grade renders using SketchUp & D5 Render — every image is crafted to impress buyers and clients instantly.",
  },
  {
    title: "3 Rounds of Revisions",
    desc: "We refine until the result matches your vision. You get up to 3 revision rounds included in every project.",
  },
  {
    title: "Tailored Delivery Timeline",
    desc: "Every project is different. We agree on a realistic deadline upfront and always deliver on time.",
  },
  {
    title: "Direct Communication",
    desc: "You work directly with the artist — no account managers, no delays. Fast responses and full transparency.",
  },
  {
    title: "Cyprus & Greece Specialists",
    desc: "We understand the local architecture, climate, and real estate market. That knowledge shows in every render.",
  },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left — Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <span className="text-[#00bad3] font-body text-xs tracking-[0.25em] uppercase block mb-1">
              {t("about_why_eyebrow", "Why Choose Us")}
            </span>
            <h3 className="font-display text-2xl text-white italic font-light mb-4">
              {t("about_why_title", "What makes GX Visuals different")}
            </h3>

            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#00bad3]/30 transition-colors duration-300"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#00bad3] mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-body text-sm font-semibold mb-1">
                    {t(`about_point_${i}_title`, point.title)}
                  </p>
                  <p className="text-gray-400 font-body text-xs leading-relaxed">
                    {t(`about_point_${i}_desc`, point.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
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

            {/* Decorative Quote */}
            <div className="border-l-2 border-[#00bad3] pl-5 mt-2">
              <p className="text-white font-display italic text-lg font-light leading-relaxed">
                {t(
                  "about_quote",
                  "\"We don't just create images — we help you make better decisions before construction begins.\""
                )}
              </p>
              <span className="text-[#00bad3] font-body text-xs tracking-widest uppercase mt-3 block">
                {t("about_quote_author", "— GX Visuals Studio")}
              </span>
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

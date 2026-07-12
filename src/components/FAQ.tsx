import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a 3D render take?",
    answer: "It depends on the complexity of the project. A single interior or exterior render typically takes 3–5 business days. Larger projects with multiple views or animations are discussed and agreed upon upfront so you always know what to expect.",
  },
  {
    question: "How much does a 3D render cost?",
    answer: "Every project is unique, so we provide a custom quote based on your specific needs — number of views, complexity, and timeline. Contact us for a free, no-obligation quote and we'll get back to you within 24 hours.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "We work with whatever you have — architectural plans, sketches, reference images, or even a rough idea. The more detail you can share, the better. We'll guide you through the process from day one.",
  },
  {
    question: "How many revisions are included?",
    answer: "Every project includes up to 3 rounds of revisions. We work closely with you throughout the process to make sure the final result matches your vision perfectly.",
  },
  {
    question: "Do you work with clients outside Cyprus?",
    answer: "Yes — we serve clients across Cyprus and Greece, and we work remotely with ease. All communication, file sharing, and approvals happen online so location is never a barrier.",
  },
  {
    question: "What software do you use?",
    answer: "We use SketchUp for 3D modeling and D5 Render for photorealistic rendering. This combination allows us to produce high-quality, realistic images efficiently and with great attention to detail.",
  },
  {
    question: "Can you help sell a property that hasn't been built yet?",
    answer: "Absolutely — this is one of our most popular services. Photorealistic renders allow real estate developers and agents to market and sell off-plan properties before construction begins, giving buyers a clear and compelling vision of the finished project.",
  },
];

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e0e0e] text-white">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#00bad3] font-body text-sm tracking-[0.3em] uppercase block">
            {t("faq_eyebrow", "GOT QUESTIONS?")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mt-4 italic">
            {t("faq_header", "Frequently Asked Questions")}
          </h2>
          <p className="text-gray-400 font-body text-sm mt-4 max-w-xl mx-auto">
            {t("faq_sub", "Everything you need to know before getting started. Can't find your answer? Just contact us.")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === index
                  ? "border-[#00bad3]/40 bg-white/[0.03]"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-body text-sm md:text-base text-white font-medium pr-4">
                  {t(`faq_q_${index}`, faq.question)}
                </span>
                <span className="flex-shrink-0 text-[#00bad3]">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-400 font-body text-sm leading-relaxed">
                      {t(`faq_a_${index}`, faq.answer)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 font-body text-sm mb-4">
            {t("faq_cta_text", "Still have questions? We're happy to help.")}
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#00bad3] text-white px-8 py-3 rounded-full font-body text-xs tracking-widest uppercase hover:bg-[#00bad3]/90 hover:shadow-[0_0_30px_rgba(0,186,211,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

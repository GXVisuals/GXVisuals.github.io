import { useState } from "react"; // Προσθήκη για το state
import { Building2, Home, Layers, Ruler, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: t("s_res_title"),
      description: t("s_res_desc"),
      more: t("s_res_more"), // Νέο κλειδί μετάφρασης
    },
    {
      icon: Building2,
      title: t("s_com_title"),
      description: t("s_com_desc"),
      more: t("s_com_more"),
    },
    {
      icon: Layers,
      title: t("s_int_title"),
      description: t("s_int_desc"),
      more: t("s_int_more"),
    },
    {
      icon: Ruler,
      title: t("s_kit_title"),
      description: t("s_kit_desc"),
      more: t("s_kit_more"),
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            {t("services_eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            {t("services_header")}
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            {t("services_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-lg bg-card-gradient border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow flex flex-col h-full ${
                expandedIndex === index ? "ring-1 ring-primary/30" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Read More Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-border/50 font-body text-sm text-muted-foreground/80 italic leading-relaxed">
                  {service.more}
                </div>
              </div>

              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
              >
                {expandedIndex === index ? (
                  <> {t("read_less", "Read Less")} <ChevronUp className="ml-1 w-4 h-4" /> </>
                ) : (
                  <> {t("read_more", "Read More")} <ChevronDown className="ml-1 w-4 h-4" /> </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

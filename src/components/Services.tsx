import { Building2, Home, Layers, Ruler } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      title: t("s_res_title"),
      description: t("s_res_desc"),
    },
    {
      icon: Building2,
      title: t("s_com_title"),
      description: t("s_com_desc"),
    },
    {
      icon: Layers,
      title: t("s_int_title"),
      description: t("s_int_desc"),
    },
    {
      icon: Ruler,
      title: t("s_kit_title"),
      description: t("s_kit_desc"),
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
              className="group p-8 rounded-lg bg-card-gradient border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

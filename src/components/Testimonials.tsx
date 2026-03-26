import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Andreas Papadopoulos",
      role: "Lead Architect, AP Studios",
      text: "GX Visuals transformed our blueprints into a living experience. The attention to material detail and lighting is world-class. It helped us secure our biggest contract this year.",
    },
    {
      name: "Maria Constantinou",
      role: "Property Developer",
      text: "Speed and quality are hard to find together, but GX Visuals delivers both. Their 3D walkthroughs were the key to selling out our project in Paphos off-plan.",
    },
    {
      name: "John Smith",
      role: "Interior Designer",
      text: "Working with GX Visuals is seamless. They understand the nuances of interior textures and provide renders that look better than the real thing.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            {t("trust_eyebrow", "CLIENT TRUST")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4">
            {t("testimonials_header", "What Industry Leaders Say")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="text-primary/20 absolute top-6 right-8" size={40} />
              
              <div className="flex flex-col h-full">
                <p className="text-muted-foreground italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-primary text-xs font-body tracking-wider uppercase mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

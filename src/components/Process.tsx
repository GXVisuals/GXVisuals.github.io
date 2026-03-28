const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Briefing",
      description: "Share your vision, dimensions, and style preferences with us.",
    },
    {
      number: "2",
      title: "Design",
      description: "We create initial concepts and layout proposals for your review.",
    },
    {
      number: "3",
      title: "3D Render",
      description: "Photorealistic visualization with materials, lighting and details.",
    },
    {
      number: "4",
      title: "Delivery",
      description: "Final high-resolution files delivered within 48 hours.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary text-xs tracking-[0.3em] font-body uppercase mb-4 block">
          HOW IT WORKS
        </span>
        <h2 className="text-4xl md:text-5xl font-display mb-16 italic">Our Process</h2>

        <div className="relative">
          {/* Η συνδετική γραμμή (μόνο για desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Ο κύκλος με τον αριθμό */}
                <div className="w-20 h-20 rounded-full border border-primary/40 bg-[#0A0A0A] flex items-center justify-center mb-8 group hover:border-primary transition-colors duration-500">
                  <span className="text-primary font-display text-xl group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-display mb-4 italic">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

const Stats = () => {
  const stats = [
    { label: "PROJECTS DELIVERED", value: "150+" },
    { label: "CLIENT SATISFACTION", value: "98%" },
    { label: "AVERAGE TURNAROUND", value: "48h" },
    { label: "YEARS OF EXPERIENCE", value: "5+" },
  ];

  return (
    <section className="bg-background py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-display font-medium text-primary mb-2">
                {stat.value}
              </span>
              <div className="h-px w-8 bg-primary/30 mb-4" />
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground font-body uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

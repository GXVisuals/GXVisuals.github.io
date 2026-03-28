import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Αφαίρεση του + ή % για να γίνει ο υπολογισμός
  const numericValue = parseInt(value.replace(/\D/g, ""));
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
      {value.includes("h") && "h"}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { label: "PROJECTS DELIVERED", value: "150+" },
    { label: "CLIENT SATISFACTION", value: "98%" },
    { label: "AVERAGE TURNAROUND", value: "48h" },
    { label: "YEARS OF EXPERIENCE", value: "5+" },
  ];

  return (
    <section className="bg-background py-20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-medium text-primary mb-3">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="h-px w-8 bg-primary/30 mb-4" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground font-body uppercase leading-loose">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

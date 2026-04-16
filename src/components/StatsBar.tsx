import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "13", suffix: "+", label: "Years Experience" },
  { number: "4", suffix: "", label: "Industries" },
  { number: "4", suffix: "", label: "Products Shipped" },
  { number: "700M", suffix: "+", label: "Data Points Processed" },
];

const StatsBar = () => (
  <section className="bg-ink py-14">
    <div className="container mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-cream">
                {s.number}
                {s.suffix && <span className="text-gold">{s.suffix}</span>}
              </p>
              <p className="font-body text-sm text-cream/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StatsBar;

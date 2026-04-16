import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    icon: "🎯",
    title: "Outcome over Output",
    desc: "Roadmap decisions anchored to business KPIs, not feature velocity.",
  },
  {
    icon: "🔍",
    title: "Discovery before Build",
    desc: "Validate problems through research and lean experiments before committing engineering.",
  },
  {
    icon: "🤝",
    title: "Cross-functional Ownership",
    desc: "Connective layer across engineering, design, data science, and business.",
  },
  {
    icon: "🤖",
    title: "AI with Intentionality",
    desc: "AI/ML features designed with transparency and user trust as core constraints.",
  },
  {
    icon: "🔄",
    title: "Continuous Iteration",
    desc: "Every launch is a hypothesis. Metrics defined upfront. Evidence-based improvement.",
  },
  {
    icon: "🗣️",
    title: "Stakeholder Fluency",
    desc: "Translating technical complexity to business strategy for engineers and executives alike.",
  },
];

const ApproachSection = () => (
  <section className="bg-warm-white py-24">
    <div className="container mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink text-center mb-16">
          How I Think About Product
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="text-center">
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="font-heading text-lg font-bold text-ink mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;

import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    period: "2023–Present",
    role: "Product Manager",
    company: "Mindgraph Technologies",
    desc: "Led GenAI and SaaS platform development; owned full product lifecycle for Customer360.ai, Diffen, and the Cybersecurity AI Platform across Airlines, Telecom, and Healthcare clients.",
  },
  {
    period: "2021–2023",
    role: "Product Manager",
    company: "Mayagreens Pvt. Ltd.",
    desc: "Discovery, UX design, and end-to-end delivery of an IoT-integrated agri automation mobile app for iOS and Android.",
  },
  {
    period: "2016–2019",
    role: "Software Engineer → PM",
    company: "VDATA Technologies",
    desc: "Built and co-defined a multi-tenant SaaS CRM; transitioned from engineering into product ownership.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="bg-warm-white py-24">
    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink text-center mb-16">
          Experience
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative pl-10">
                {/* Gold dot */}
                <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full border-2 border-gold bg-background" />
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1">
                  {t.period}
                </p>
                <h3 className="font-heading text-lg font-bold text-ink">
                  {t.role}
                </h3>
                <p className="font-body text-sm font-medium text-muted-foreground mb-2">
                  {t.company}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

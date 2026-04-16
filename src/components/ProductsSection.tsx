import ScrollReveal from "./ScrollReveal";

const products = [
  {
    num: "01",
    icon: "🧠",
    category: "GenAI · No-Code · Data SaaS",
    name: "Customer360.ai + Diffen",
    company: "Mindgraph Technologies · 2023–Present",
    description:
      "A unified GenAI-powered, No-Code customer data platform with an integrated high-performance ETL/ELT engine. Enables CX teams and analysts to go from raw data to AI-driven customer intelligence — without raising an engineering ticket.",
    outcomes: [
      "40% faster support resolution",
      "60% faster data processing",
      "30% lower operational cost",
      "70% platform adoption",
      "700M+ data points processed",
    ],
    tech: ["Azure OpenAI", "AWS Bedrock", "Apache Spark", "ClickHouse", "B2B SaaS"],
  },
  {
    num: "02",
    icon: "🔒",
    category: "SecOps · Threat Intelligence · GenAI",
    name: "Cybersecurity AI Platform",
    company: "Mindgraph Technologies · 2023–Present",
    description:
      "An AI-driven threat hunting and intelligence platform for SOC analysts. GenAI triages alert clusters, suggests threat vectors, and recommends response playbooks — with full explainability and analyst-in-the-loop design to earn trust in high-stakes environments.",
    outcomes: [
      "Reduced MTTD & MTTR",
      "35% less analyst documentation time",
      "Foundation of Ziplo AI security partnership",
    ],
    tech: ["Generative AI", "SIEM", "Alert Automation", "SecOps", "Threat Intelligence"],
  },
  {
    num: "03",
    icon: "🌾",
    category: "AgriTech · IoT · Mobile Product",
    name: "Agri Automation Mobile App",
    company: "Mayagreens Pvt. Ltd. · 2021–2023",
    description:
      "An IoT-integrated mobile app for precision farm management — designed field-first for low-literacy field workers. Covers real-time sensor monitoring, remote irrigation control, and yield reporting across iOS and Android.",
    outcomes: [
      "Zero formal training needed for adoption",
      "Proactive farm management replacing manual workflows",
      "Extended to 6 additional IoT use cases",
    ],
    tech: ["React Native", "AWS", "IoT", "UX Design", "iOS", "Android"],
  },
  {
    num: "04",
    icon: "🗂️",
    category: "B2B SaaS · CRM · Multi-Tenant",
    name: "SaaS CRM Platform",
    company: "VDATA Technologies · 2016–2019",
    description:
      "A configurable, multi-tenant enterprise CRM for startups and SMEs. Built with strict tenant-level data isolation, modular reporting dashboards, REST API integrations with email and marketing platforms, and usage-based billing.",
    outcomes: [
      "Zero cross-tenant incidents in production",
      "API integrations delivered time-to-value in days",
      "Foundation for PM career path",
    ],
    tech: ["Python Django", "MySQL", "Docker", "AWS EC2", "REST APIs"],
  },
];

const ProductsSection = () => (
  <section id="products" className="bg-background py-24">
    <div className="container mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
          Products I've Built
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
          End-to-end product ownership across GenAI, SaaS, IoT, and CRM platforms.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group relative bg-background border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Faded number */}
              <span className="absolute top-4 right-6 font-heading text-7xl font-bold text-foreground/[0.04] select-none">
                {p.num}
              </span>

              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {p.category}
                </p>
                <h3 className="font-heading text-xl font-bold text-ink mb-1">{p.name}</h3>
                <p className="font-body text-xs text-muted-foreground mb-4">{p.company}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.outcomes.map((o, j) => (
                    <span
                      key={j}
                      className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-warm-white text-foreground/70"
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="font-body text-[10px] font-medium px-2 py-0.5 rounded border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

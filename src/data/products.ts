export interface Product {
  slug: string;
  num: string;
  icon: string;
  category: string;
  name: string;
  company: string;
  period: string;
  description: string;
  longDescription: string[];
  outcomes: string[];
  tech: string[];
  role: string;
  challenges: string[];
  impact: string[];
}

export const products: Product[] = [
  {
    slug: "customer360-ai",
    num: "01",
    icon: "🧠",
    category: "GenAI · No-Code · Data SaaS",
    name: "Customer360.ai + Diffen",
    company: "Mindgraph Technologies",
    period: "2023–Present",
    description:
      "A unified GenAI-powered, No-Code customer data platform with an integrated high-performance ETL/ELT engine. Enables CX teams and analysts to go from raw data to AI-driven customer intelligence — without raising an engineering ticket.",
    longDescription: [
      "Customer360.ai is a GenAI-powered customer data platform designed for CX teams and business analysts who need actionable intelligence without engineering dependencies. The platform unifies customer data from multiple touchpoints — support tickets, CRM records, transactional data, and behavioral signals — into a single, queryable intelligence layer.",
      "Diffen, the integrated ETL/ELT engine, was built to handle high-volume data ingestion and transformation at scale. Using Apache Spark and ClickHouse as the backbone, it processes 700M+ data points with 60% faster throughput than the legacy pipeline it replaced.",
      "The No-Code interface empowers non-technical users to build custom dashboards, set up automated alerts, and generate AI-powered customer insights using natural language queries powered by Azure OpenAI and AWS Bedrock.",
    ],
    outcomes: [
      "40% faster support resolution",
      "60% faster data processing",
      "30% lower operational cost",
      "70% platform adoption",
      "700M+ data points processed",
    ],
    tech: ["Azure OpenAI", "AWS Bedrock", "Apache Spark", "ClickHouse", "B2B SaaS"],
    role: "Product Manager — End-to-end ownership of product strategy, roadmap, and delivery. Led a cross-functional team of 12 across engineering, data science, and design.",
    challenges: [
      "Migrating enterprise clients from legacy data pipelines without downtime or data loss",
      "Designing a No-Code interface intuitive enough for non-technical CX teams while powerful enough for data analysts",
      "Balancing GenAI capabilities with data privacy and compliance requirements across Airlines, Healthcare, and Telecom verticals",
    ],
    impact: [
      "Became the flagship product for Mindgraph's enterprise AI portfolio",
      "Drove 70% platform adoption within the first 6 months of launch",
      "Enabled the company to expand into 3 new industry verticals",
    ],
  },
  {
    slug: "cybersecurity-ai",
    num: "02",
    icon: "🔒",
    category: "SecOps · Threat Intelligence · GenAI",
    name: "Cybersecurity AI Platform",
    company: "Mindgraph Technologies",
    period: "2023–Present",
    description:
      "An AI-driven threat hunting and intelligence platform for SOC analysts. GenAI triages alert clusters, suggests threat vectors, and recommends response playbooks — with full explainability and analyst-in-the-loop design to earn trust in high-stakes environments.",
    longDescription: [
      "The Cybersecurity AI Platform was conceived to address a critical pain point in Security Operations Centers: alert fatigue. SOC analysts were spending 60%+ of their time on manual triage of low-priority alerts, leaving sophisticated threats undetected.",
      "The platform uses GenAI to automatically cluster related alerts, identify threat patterns, and suggest response playbooks. Every AI recommendation comes with full explainability — showing the evidence chain, confidence scores, and reasoning — because trust is non-negotiable in security.",
      "The analyst-in-the-loop design ensures humans remain the final decision-makers. The AI augments their capabilities rather than replacing their judgment, which was critical for adoption in high-stakes security environments.",
    ],
    outcomes: [
      "Reduced MTTD & MTTR",
      "35% less analyst documentation time",
      "Foundation of Ziplo AI security partnership",
    ],
    tech: ["Generative AI", "SIEM", "Alert Automation", "SecOps", "Threat Intelligence"],
    role: "Product Manager — Owned product vision, stakeholder alignment, and go-to-market strategy. Collaborated closely with security domain experts and ML engineers.",
    challenges: [
      "Building trust with SOC analysts who were skeptical of AI-driven security recommendations",
      "Ensuring explainability in AI outputs to meet compliance and audit requirements",
      "Designing for high-stakes environments where false negatives have severe consequences",
    ],
    impact: [
      "Established Mindgraph as a credible player in AI-driven cybersecurity",
      "Formed the foundation for the strategic Ziplo AI security partnership",
      "Reduced analyst burnout by automating routine triage workflows",
    ],
  },
  {
    slug: "agri-automation",
    num: "03",
    icon: "🌾",
    category: "AgriTech · IoT · Mobile Product",
    name: "Agri Automation Mobile App",
    company: "Mayagreens Pvt. Ltd.",
    period: "2021–2023",
    description:
      "An IoT-integrated mobile app for precision farm management — designed field-first for low-literacy field workers. Covers real-time sensor monitoring, remote irrigation control, and yield reporting across iOS and Android.",
    longDescription: [
      "The Agri Automation app was designed from the ground up for a unique user base: field workers with limited literacy and no prior experience with digital tools. Every design decision was driven by field research, contextual inquiry, and iterative testing with actual farm workers.",
      "The app connects to IoT sensors deployed across farmland to provide real-time monitoring of soil moisture, temperature, humidity, and other environmental parameters. Workers can remotely control irrigation systems and receive proactive alerts when conditions require intervention.",
      "The visual-first interface uses icons, color coding, and minimal text to communicate complex agricultural data. The onboarding flow was designed to require zero formal training — workers could start using the app after a single walkthrough.",
    ],
    outcomes: [
      "Zero formal training needed for adoption",
      "Proactive farm management replacing manual workflows",
      "Extended to 6 additional IoT use cases",
    ],
    tech: ["React Native", "AWS", "IoT", "UX Design", "iOS", "Android"],
    role: "Product Manager — Led discovery, UX design, and end-to-end delivery. Conducted field research with farm workers and stakeholders to inform product decisions.",
    challenges: [
      "Designing for low-literacy users with no prior experience with mobile apps",
      "Ensuring reliable performance in areas with intermittent network connectivity",
      "Integrating with diverse IoT hardware from multiple sensor manufacturers",
    ],
    impact: [
      "Transformed manual farming workflows into proactive, data-driven operations",
      "Platform expanded from irrigation to 6 additional IoT use cases",
      "Became a reference product for IoT-enabled agriculture in the region",
    ],
  },
  {
    slug: "saas-crm",
    num: "04",
    icon: "🗂️",
    category: "B2B SaaS · CRM · Multi-Tenant",
    name: "SaaS CRM Platform",
    company: "VDATA Technologies",
    period: "2016–2019",
    description:
      "A configurable, multi-tenant enterprise CRM for startups and SMEs. Built with strict tenant-level data isolation, modular reporting dashboards, REST API integrations with email and marketing platforms, and usage-based billing.",
    longDescription: [
      "The SaaS CRM Platform was built to serve startups and SMEs that needed enterprise-grade CRM capabilities without the complexity and cost of solutions like Salesforce. The platform was designed as a configurable, multi-tenant system from day one.",
      "Strict tenant-level data isolation was a core architectural decision. Every query, report, and API call was scoped to the tenant context, ensuring zero data leakage between customers — a critical requirement for building trust with B2B clients.",
      "The platform featured modular reporting dashboards, REST API integrations with popular email and marketing platforms, and a usage-based billing system that aligned pricing with customer value. This approach reduced barriers to adoption for small teams.",
    ],
    outcomes: [
      "Zero cross-tenant incidents in production",
      "API integrations delivered time-to-value in days",
      "Foundation for PM career path",
    ],
    tech: ["Python Django", "MySQL", "Docker", "AWS EC2", "REST APIs"],
    role: "Software Engineer → Product Manager — Started as the lead engineer, then transitioned into product ownership as the product scaled and needed dedicated product leadership.",
    challenges: [
      "Ensuring strict data isolation in a multi-tenant architecture at scale",
      "Designing a configuration system flexible enough for diverse SME workflows",
      "Transitioning from an engineering role to product management while maintaining technical credibility",
    ],
    impact: [
      "Zero cross-tenant data incidents throughout the product's lifetime",
      "Catalyzed the transition from engineering to product management career",
      "Proved the viability of configurable SaaS for the SME market segment",
    ],
  },
];

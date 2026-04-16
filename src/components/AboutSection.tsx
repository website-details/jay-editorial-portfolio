import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Product Strategy & Roadmapping", pct: 95 },
  { name: "AI/GenAI Product Development", pct: 92 },
  { name: "Data Engineering & Pipelines", pct: 88 },
  { name: "Stakeholder & Program Management", pct: 90 },
  { name: "Mobile & IoT Product Management", pct: 82 },
];

const tags = [
  "GenAI", "Azure OpenAI", "AWS Bedrock", "Apache Spark", "ClickHouse",
  "React Native", "Python Django", "No-Code Platforms", "IoT", "B2B SaaS",
  "SecOps", "Roadmapping",
];

const AboutSection = () => (
  <section id="about" className="bg-warm-white py-24">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-8">
            Where Strategy Meets Execution
          </h2>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              I'm a Technical Product Manager who bridges deep technical execution with business outcomes — across GenAI, SaaS, IoT, and CRM platforms. I've owned products end-to-end in Airlines, Healthcare, Telecom, and AgriTech.
            </p>
            <p>
              My approach is discovery-first and outcome-anchored. I thrive in cross-functional ownership — connecting engineering, design, data science, and business stakeholders to ship products that create measurable impact.
            </p>
            <p>
              Currently open to Senior PM, TPM, and Program Manager roles at AI/GenAI startups and enterprise SaaS companies. Based in Hyderabad, India — open to remote, hybrid, or relocation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((t) => (
              <span
                key={t}
                className="font-body text-xs font-medium px-3 py-1.5 rounded-full border border-border text-foreground/60 bg-background"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Right — Skill bars */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-6 pt-2">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-ink font-medium">{s.name}</span>
                  <span className="text-gold font-semibold">{s.pct}%</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gold-gradient"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;

import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="bg-ink py-24">
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
          Let's Build Something{" "}
          <span className="italic text-gold">Great</span>
        </h2>
        <p className="font-body text-sm text-cream/60 max-w-lg mx-auto mb-10 leading-relaxed">
          Open to Senior PM, TPM, and Program Manager roles at AI/GenAI startups and enterprise SaaS companies. Based in Hyderabad, India — open to remote, hybrid, or relocation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jayyrrm@gmail.com"
            className="px-7 py-3 bg-gold text-ink font-body text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Email Jay
          </a>
          <a
            href="https://linkedin.com/in/jayyrrm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-cream/30 text-cream font-body text-sm font-medium rounded-sm hover:border-cream/60 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="tel:+919944595850"
            className="px-7 py-3 border border-cream/30 text-cream font-body text-sm font-medium rounded-sm hover:border-cream/60 transition-colors"
          >
            Call +91 9944595850
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;

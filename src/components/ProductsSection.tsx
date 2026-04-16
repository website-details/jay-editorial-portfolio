import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/data/products";

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
            <Link to={`/product/${p.slug}`} className="block">
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
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    {p.company} · {p.period}
                  </p>
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

                  <p className="font-body text-xs font-medium text-gold mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Case Study →
                  </p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

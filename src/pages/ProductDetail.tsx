import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const productIndex = products.findIndex((p) => p.slug === slug);
  const product = products[productIndex];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-ink mb-4">Product Not Found</h1>
          <Link to="/" className="font-body text-gold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const prevProduct = productIndex > 0 ? products[productIndex - 1] : null;
  const nextProduct = productIndex < products.length - 1 ? products[productIndex + 1] : null;

  return (
    <>
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-ink">
            Jay<span className="text-gold">.</span>
          </Link>
          <Link
            to="/#products"
            className="font-body text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[16rem] lg:text-[22rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none">
          {product.num}
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{product.icon}</span>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
                {product.category}
              </p>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4 max-w-3xl">
              {product.name}
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-2">
              {product.company} · {product.period}
            </p>
            <p className="font-body text-sm text-muted-foreground italic">{product.role}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-ink mb-10">Overview</h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-6">
            {product.longDescription.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Tech */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-ink mb-8">Key Outcomes</h2>
              <div className="space-y-4">
                {product.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-base text-foreground/80">{outcome}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-3xl font-bold text-ink mb-8">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {product.tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-body text-sm font-medium px-4 py-2 rounded border border-border text-foreground/70 bg-warm-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenges & Impact */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-ink mb-8">Challenges</h2>
              <div className="space-y-4">
                {product.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-heading text-lg font-bold text-gold/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-3xl font-bold text-ink mb-8">Impact</h2>
              <div className="space-y-4">
                {product.impact.map((imp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <p className="font-body text-base text-foreground/80">{imp}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation between products */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevProduct ? (
              <Link
                to={`/product/${prevProduct.slug}`}
                className="group flex items-center gap-3 text-foreground/70 hover:text-ink transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Previous</p>
                  <p className="font-heading text-lg font-bold">{prevProduct.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProduct ? (
              <Link
                to={`/product/${nextProduct.slug}`}
                className="group flex items-center gap-3 text-right text-foreground/70 hover:text-ink transition-colors"
              >
                <div>
                  <p className="font-body text-xs text-muted-foreground">Next</p>
                  <p className="font-heading text-lg font-bold">{nextProduct.name}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;

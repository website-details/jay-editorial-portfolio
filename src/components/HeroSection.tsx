import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
    {/* Background watermark */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[20rem] lg:text-[28rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none">
      PM
    </div>

    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-body text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Technical Product Manager · AI/ML &amp; SaaS Platforms
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-ink mb-6">
            Building AI-driven Products That Scale
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
            13+ years leading GenAI, SaaS, IoT, and Data Engineering products across Airlines, Healthcare, Telecom &amp; Logistics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-7 py-3 bg-ink text-cream font-body text-sm font-medium rounded-sm hover:bg-ink/90 transition-colors"
            >
              View Products
            </a>
            <a
              href="#about"
              className="px-7 py-3 font-body text-sm font-medium text-ink hover:text-gold transition-colors"
            >
              About Me →
            </a>
          </div>
        </motion.div>

        {/* Right — Avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-80 sm:w-72 sm:h-96 bg-warm-white rounded-tl-md rounded-tr-[4rem] rounded-bl-md rounded-br-md border border-border flex items-center justify-center shadow-lg">
              <span className="font-heading text-7xl sm:text-8xl font-bold text-ink/10">
                JVR
              </span>
            </div>
            {/* Pulsing badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-body text-xs font-medium text-foreground/70">
                  Open to Opportunities · Remote / Hybrid / Relocation
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

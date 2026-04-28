import heroImage from "@/assets/project-plaza-living.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Latorre Interiors signature residence — double-height living room with crystal chandelier and travertine wall"
        className="absolute inset-0 h-full w-full object-contain"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/55" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 md:pb-24 text-warmWhite">
        <div className="max-w-4xl">
          <p className="eyebrow text-warmWhite/80 mb-6">Latorre Interiors LLC · United States</p>
          <h1 className="display-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] text-warmWhite">
            Interior Architecture<br />&amp; Design
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-warmWhite/85 font-light leading-relaxed">
            Refined interiors designed with precision, discretion, and intent.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-warmWhite text-charcoal text-[11px] uppercase tracking-[0.28em] px-7 py-4 hover:bg-warmWhite/90 transition-colors duration-500"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-warmWhite/60 text-warmWhite text-[11px] uppercase tracking-[0.28em] px-7 py-4 hover:bg-warmWhite hover:text-charcoal transition-colors duration-500"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-10 text-warmWhite/70 text-[10px] uppercase tracking-[0.32em] hidden sm:block">
        Est. Studio Practice
      </div>
    </section>
  );
};

export default Hero;

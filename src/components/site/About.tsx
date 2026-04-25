import { useReveal } from "@/hooks/use-reveal";
import portrait from "@/assets/project-rrg-living.jpg";

const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div ref={ref} className="reveal container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="img-zoom aspect-[4/5] w-full">
            <img
              src={portrait}
              alt="Editorial interior — a living room composition by Latorre Interiors"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground tracking-wider">— Residence RRG, Living</p>
        </div>

        <div className="lg:col-span-7 lg:pt-8">
          <p className="eyebrow mb-6">The Studio</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-2xl">
            A boutique practice devoted to interiors of quiet conviction.
          </h2>
          <span className="rule mt-10 mb-10" />
          <div className="space-y-6 text-foreground/80 font-light leading-relaxed max-w-xl text-[15px] md:text-base">
            <p>
              Latorre Interiors is a boutique design firm specializing in high-end
              residential interiors and contemporary villas. We accept a limited
              number of commissions each year, allowing the practice to direct
              every project with the discretion and rigor it deserves.
            </p>
            <p>
              Our work is built around proportion, material, and the unhurried
              decisions that define a considered home. We design private residences
              that endure — composed rather than decorated, tailored to the way
              each client actually lives.
            </p>
            <p className="font-serif italic text-foreground text-[17px] md:text-[19px] leading-snug pt-2">
              &ldquo;Extensive experience designing residences within some of São
              Paulo&rsquo;s most exclusive gated communities.&rdquo;
            </p>
          </div>

          <div className="mt-16 border-t border-border pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="display-serif text-4xl">15<span className="text-taupe">+</span></p>
              <p className="eyebrow mt-2">Years of Experience</p>
            </div>
            <div>
              <p className="display-serif text-4xl">3</p>
              <p className="eyebrow mt-2">Featured Projects</p>
            </div>
            <div>
              <p className="display-serif text-4xl">1:1</p>
              <p className="eyebrow mt-2">Principal-Led</p>
            </div>
          </div>

          <div className="mt-16">
            <p className="eyebrow mb-3">Founder &amp; Principal</p>
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              Debora Mussi Bonito Latorre
            </p>
            <p className="mt-4 max-w-xl text-foreground/75 font-light leading-relaxed text-[15px]">
              Founder &amp; Principal with extensive experience in designing refined
              residential environments. Trained in architecture at Centro
              Universitário Belas Artes de São Paulo, with over fifteen years of
              project leadership at Studio Denise Reis directing high-end residences
              within São Paulo&rsquo;s most prominent gated communities. A practice
              built on a sustained focus on detail, proportion and the considered
              selection of materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

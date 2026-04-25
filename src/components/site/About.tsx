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
              Latorre Interiors is a boutique design firm working at the intersection
              of interior architecture and full-service design. We accept a limited
              number of residential and boutique commercial commissions each year,
              allowing us to direct every project with the discretion and rigor it
              deserves.
            </p>
            <p>
              Our work is built around proportion, material, and the unhurried
              decisions that define a considered home. We design spaces that endure
              — composed rather than decorated, tailored to the way a client
              actually lives.
            </p>
          </div>

          <div className="mt-16 border-t border-border pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="display-serif text-4xl">20<span className="text-taupe">+</span></p>
              <p className="eyebrow mt-2">Years of Practice</p>
            </div>
            <div>
              <p className="display-serif text-4xl">10</p>
              <p className="eyebrow mt-2">Selected Works</p>
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
              Architect and interior designer. Trained at Centro Universitário Belas
              Artes de São Paulo, with sixteen years of project leadership at Studio
              Denise Reis directing residences within São Paulo&rsquo;s most prominent
              gated communities. Today she leads Latorre Interiors from the United
              States, bringing that same hand-tailored discipline to every commission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

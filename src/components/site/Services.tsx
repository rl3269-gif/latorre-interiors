import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    n: "I",
    title: "Interior Architecture",
    body: "Spatial planning, structural reconfiguration and architectural detailing — the underlying composition of a project, resolved with precision before any surface is selected.",
  },
  {
    n: "II",
    title: "Full-Service Interior Design",
    body: "End-to-end direction of residences and boutique commercial interiors, from concept through procurement, installation and final styling.",
  },
  {
    n: "III",
    title: "Renovation & Transformation",
    body: "Considered intervention into existing properties — recomposing layout, light and material to elevate a home without erasing its character.",
  },
  {
    n: "IV",
    title: "Space Planning",
    body: "Layouts engineered for the way our clients actually live and host. Proportion, circulation and discretion treated as the foundation of every design.",
  },
  {
    n: "V",
    title: "Custom Furniture & Styling",
    body: "Bespoke joinery, custom case goods and curated objects — assembled in collaboration with trusted ateliers and editions.",
  },
];

const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-28 md:py-40 bg-secondary/40">
      <div ref={ref} className="reveal container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Services</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl">
              Premium offerings, delivered as one practice.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-foreground/75 font-light leading-relaxed text-[15px] md:text-base self-end">
            We operate as a single point of accountability across architecture,
            interiors and styling — engaged from feasibility through final
            install, with the same studio carrying the project end-to-end.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-border group"
            >
              <div className="col-span-2 md:col-span-1 font-serif text-xl md:text-2xl text-taupe">
                {s.n}
              </div>
              <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-[32px] leading-tight">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-foreground/75 font-light leading-relaxed text-[15px] md:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

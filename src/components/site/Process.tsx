import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "A private conversation to understand the property, the brief, and the way the home is intended to live. We assess fit before either party commits.",
  },
  {
    n: "02",
    title: "Concept Development",
    body: "Architectural intent, spatial composition and material direction presented as a single, coherent vision before any documentation begins.",
  },
  {
    n: "03",
    title: "Design Documentation",
    body: "Plans, elevations, joinery details and finish schedules drawn to construction standard — the documentation a precise contractor expects.",
  },
  {
    n: "04",
    title: "Project Coordination",
    body: "Direct coordination with builders, trades and vendors throughout execution. Decisions reviewed on site and resolved without delay.",
  },
  {
    n: "05",
    title: "Final Styling",
    body: "Furniture install, art placement, soft goods and the last unseen details — the moment the home becomes itself.",
  },
];

const Process = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="py-28 md:py-40 bg-background">
      <div ref={ref} className="reveal container-editorial">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-6">The Process</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl">
            A structured path, quietly executed.
          </h2>
          <p className="mt-8 text-foreground/75 font-light leading-relaxed text-[15px]">
            Five disciplined phases — the same regardless of project scale — designed
            to deliver clarity at every milestone.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8 md:p-10 flex flex-col">
              <span className="font-serif text-3xl text-taupe">{s.n}</span>
              <h3 className="mt-6 font-serif text-xl md:text-2xl leading-tight">{s.title}</h3>
              <p className="mt-4 text-[14px] text-foreground/70 font-light leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;

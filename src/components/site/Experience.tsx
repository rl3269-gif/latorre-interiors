import { useReveal } from "@/hooks/use-reveal";
import experienceImage from "@/assets/project-cj-outdoor.jpg";

const points = [
  {
    title: "Personalized Service",
    body: "Every commission is led personally by the principal designer. Communication is direct, considered, and confidential.",
  },
  {
    title: "A Limited Roster",
    body: "We accept only a small number of projects each year — the practice is sized to the work, not the other way around.",
  },
  {
    title: "Detail as Discipline",
    body: "From joinery reveals to lighting temperature, the details are not delegated. They are drawn, specified and verified.",
  },
  {
    title: "Seamless Execution",
    body: "Coordinated procurement, vendor management and on-site direction — delivered as one continuous experience.",
  },
];

const Experience = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-40 bg-charcoal text-warmWhite">
      <div ref={ref} className="reveal container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="img-zoom aspect-[4/5]">
            <img
              src={experienceImage}
              alt="Latorre Interiors residential pavilion — interior design integrated with landscape"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow text-warmWhite/70 mb-6">Client Experience</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-warmWhite">
            Designed for clients who value discretion as much as design.
          </h2>
          <span className="block h-px w-12 bg-warmWhite/40 mt-10 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {points.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-xl md:text-2xl">{p.title}</h3>
                <p className="mt-3 text-warmWhite/75 font-light leading-relaxed text-[14.5px]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

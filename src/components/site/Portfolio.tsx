import { useReveal } from "@/hooks/use-reveal";

import plazaPool from "@/assets/project-plaza-pool.jpg";
import plazaExterior from "@/assets/project-plaza-exterior.jpg";
import plazaLiving from "@/assets/project-plaza-living.jpg";
import plazaKitchen from "@/assets/project-plaza-kitchen-1.jpg";
import terras1Patio from "@/assets/project-terras-1-patio.jpg";
import terras1Entrance from "@/assets/project-terras-1-entrance.jpg";
import terras1Exterior from "@/assets/project-terras-1-exterior.jpg";
import terras2Pool from "@/assets/project-tsj2-pool.jpg";
import terras2Entrance from "@/assets/project-tsj2-entrance.jpg";
import rrgLiving from "@/assets/project-rrg-living.jpg";
import rrDining from "@/assets/project-rr-dining.jpg";
import liviaBedroom from "@/assets/project-livia-bedroom.jpg";
import cjDining from "@/assets/project-cj-dining.jpg";
import cjOutdoor from "@/assets/project-cj-outdoor.jpg";
import staircase from "@/assets/project-living-staircase.jpg";

type Project = {
  index: string;
  name: string;
  location: string;
  scope: string;
  description: string;
  image: string;
  span: "wide" | "tall" | "square";
};

const projects: Project[] = [
  {
    index: "01",
    name: "Plaza Athénée Residence",
    location: "Itu, São Paulo",
    scope: "Architecture & Interiors",
    description:
      "A composition of glass, white volumes, and water — designed as a quiet counterpoint to its tropical surroundings.",
    image: plazaPool,
    span: "wide",
  },
  {
    index: "02",
    name: "Residence RRG",
    location: "Terras de São José, Itu",
    scope: "Interior Design",
    description:
      "Warm timber, soft palette, and tailored millwork composed around the family&rsquo;s daily rituals.",
    image: rrgLiving,
    span: "tall",
  },
  {
    index: "03",
    name: "Casa TSJ II",
    location: "Terras de São José II, Itu",
    scope: "Architecture",
    description:
      "Stone, concrete and pergola lines drawn into the slope — an architecture of restraint and weight.",
    image: terras2Entrance,
    span: "square",
  },
  {
    index: "04",
    name: "Residence RR",
    location: "Terras de São José II, Itu",
    scope: "Interior Design",
    description:
      "A long table, sculptural lighting, and mirrored verticals — a dining room conceived as the centerpiece of the home.",
    image: rrDining,
    span: "wide",
  },
  {
    index: "05",
    name: "Plaza Athénée Interior",
    location: "Itu, São Paulo",
    scope: "Interior Design",
    description:
      "Double-height living space anchored by joinery, layered tones, and unhurried proportion.",
    image: plazaLiving,
    span: "tall",
  },
  {
    index: "06",
    name: "Residence AR Kitchen",
    location: "Plaza Athénée, Itu",
    scope: "Interior Architecture",
    description:
      "A working kitchen detailed with the calm of a living space — sand-toned cabinetry, integrated appliances, concealed hardware.",
    image: plazaKitchen,
    span: "square",
  },
  {
    index: "07",
    name: "Suite Lívia",
    location: "Residence AR, Itu",
    scope: "Interior Design",
    description:
      "A young occupant&rsquo;s suite resolved as a refined, lasting room — built-in shelving, a window seat, soft tonal layering.",
    image: liviaBedroom,
    span: "tall",
  },
  {
    index: "08",
    name: "Residence CJ",
    location: "Terras de São José II, Itu",
    scope: "Interior Design",
    description:
      "Floor-to-ceiling glazing dissolves the threshold between the dining room and garden — an architecture of light.",
    image: cjDining,
    span: "wide",
  },
  {
    index: "09",
    name: "Casa TSJ I",
    location: "Terras de São José, Itu",
    scope: "Architecture",
    description:
      "An entrance sequence of stone walls and timber, opening onto a garden patio composed for slow living.",
    image: terras1Entrance,
    span: "square",
  },
  {
    index: "10",
    name: "Residence CJ Pavilion",
    location: "Terras de São José II, Itu",
    scope: "Architecture",
    description:
      "A garden pavilion conceived for outdoor entertaining — modern furniture set against full-height glazing.",
    image: cjOutdoor,
    span: "square",
  },
  {
    index: "11",
    name: "Casa TSJ I — Patio",
    location: "Terras de São José, Itu",
    scope: "Architecture",
    description:
      "A sheltered terrace with fire pit and lounge composition — the architecture extending into the landscape.",
    image: terras1Patio,
    span: "wide",
  },
  {
    index: "12",
    name: "Residence — Atrium",
    location: "São Paulo",
    scope: "Interior Design",
    description:
      "A staircase rendered as sculpture — bright, weightless, anchored by a single statement work.",
    image: staircase,
    span: "tall",
  },
  {
    index: "13",
    name: "Plaza Athénée Façade",
    location: "Itu, São Paulo",
    scope: "Architecture",
    description:
      "A street presence of clean white volumes, framed entry, and disciplined landscaping.",
    image: plazaExterior,
    span: "square",
  },
  {
    index: "14",
    name: "Casa TSJ II — Pool",
    location: "Terras de São José II, Itu",
    scope: "Architecture",
    description:
      "Stone paving, water and a low pavilion — composed to read as a single horizontal gesture.",
    image: terras2Pool,
    span: "wide",
  },
  {
    index: "15",
    name: "Casa TSJ I — Volume",
    location: "Terras de São José, Itu",
    scope: "Architecture",
    description:
      "A residence drawn against the topography in concrete, timber and stone retaining walls.",
    image: terras1Exterior,
    span: "tall",
  },
];

const Project = ({ p, i }: { p: Project; i: number }) => {
  const ref = useReveal<HTMLElement>();
  const colSpan =
    p.span === "wide"
      ? "md:col-span-8"
      : p.span === "tall"
        ? "md:col-span-5"
        : "md:col-span-6";
  const aspect =
    p.span === "wide"
      ? "aspect-[16/10]"
      : p.span === "tall"
        ? "aspect-[3/4]"
        : "aspect-[4/3]";

  // alternate row offsets to create editorial rhythm
  const offset = i % 4 === 1 ? "md:mt-24" : i % 4 === 3 ? "md:mt-16" : "";

  return (
    <article ref={ref} className={`reveal group ${colSpan} ${offset}`}>
      <div className={`img-zoom ${aspect} w-full bg-muted`}>
        <img
          src={p.image}
          alt={`${p.name} — ${p.scope.toLowerCase()} by Latorre Interiors`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow">{p.index} · {p.scope}</p>
          <h3 className="font-serif text-2xl md:text-[28px] mt-2 leading-tight">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
        </div>
      </div>
      <p
        className="mt-4 text-foreground/75 font-light leading-relaxed max-w-md text-[14.5px]"
        dangerouslySetInnerHTML={{ __html: p.description }}
      />
    </article>
  );
};

const Portfolio = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-background">
      <div ref={ref} className="reveal container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div>
            <p className="eyebrow mb-6">Selected Works</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              A curated record of residences and interiors.
            </h2>
          </div>
          <p className="md:max-w-sm text-foreground/70 font-light leading-relaxed text-[15px]">
            Each commission is approached as a singular composition — drawn,
            detailed and styled in-house from first sketch to final installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-24 md:gap-y-32">
          {projects.map((p, i) => (
            <Project p={p} i={i} key={p.index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

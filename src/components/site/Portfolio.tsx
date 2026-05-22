import { useReveal } from "@/hooks/use-reveal";

import f01Main from "@/assets/portfolio-22.jpg";
import f01a from "@/assets/portfolio-11.jpg";
import f01b from "@/assets/portfolio-13.jpg";
import f01c from "@/assets/portfolio-29.jpg";

import f02Main from "@/assets/portfolio-17.jpg";
import f02a from "@/assets/portfolio-19.jpg";
import f02b from "@/assets/portfolio-12.jpg";

import f03Main from "@/assets/portfolio-27.jpg";
import f03a from "@/assets/portfolio-09.jpg";

import sel1 from "@/assets/portfolio-28.jpg";
import sel2 from "@/assets/portfolio-21.jpg";
import sel3 from "@/assets/portfolio-15.jpg";
import sel4 from "@/assets/portfolio-25.jpg";

type Featured = {
  index: string;
  name: string;
  location: string;
  category: string;
  concept: string;
  images: string[];
};

const featured: Featured[] = [
  {
    index: "Featured 01",
    name: "Villa Athénée",
    location: "São Paulo, Brazil",
    category: "Contemporary Villa · Architecture & Interiors",
    concept:
      "Conceived as a single horizontal gesture, the residence opens entirely toward the garden through a measured rhythm of glass and white volumes. Inside, oak millwork, travertine and warm linen are layered to soften the architecture — a calm, sunlit home shaped around an entertaining family that lives between the pool, the kitchen and the open living room.",
    images: [f01Main, f01a, f01b, f01c],
  },
  {
    index: "Featured 02",
    name: "Residence RR",
    location: "São Paulo, Brazil",
    category: "Private Residence · Interior Design",
    concept:
      "An interior tuned to slow evenings and long dinners. A sculptural bar anchors the home beneath warm pendants, framed by joinery that lengthens the room. Smoked timber, brushed metal and tonal upholstery hold the composition — refined, residential, quietly theatrical.",
    images: [f02Main, f02a, f02b],
  },
  {
    index: "Featured 03",
    name: "Residence CJ",
    location: "São Paulo, Brazil",
    category: "Private Residence · Interior Architecture",
    concept:
      "Floor-to-ceiling glazing dissolves the boundary between the pavilion and the garden, treating landscape as the principal material. Warm timber, soft light and a restrained neutral palette compose an interior built for unhurried hosting — a home where every threshold has been considered.",
    images: [f03Main, f03a],
  },
];

type Selected = {
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

const selected: Selected[] = [
  {
    name: "Hillside Pavilion",
    location: "São Paulo, Brazil",
    category: "Contemporary Villa",
    description:
      "Stone, water and a low pavilion drawn into the topography — a quiet architecture of horizontal lines and soft transitions.",
    image: sel1,
  },
  {
    name: "Garden Terrace Residence",
    location: "São Paulo, Brazil",
    category: "Private Residence",
    description:
      "A refined vanity composition in muted sage — marble, brass and considered joinery brought into close conversation.",
    image: sel2,
  },
  {
    name: "Suite Lívia",
    location: "São Paulo, Brazil",
    category: "Interior Design · Private Suite",
    description:
      "A young occupant&rsquo;s suite resolved as a refined, lasting room — built-in joinery, layered lighting and a soft tonal palette.",
    image: sel3,
  },
  {
    name: "Atrium Residence",
    location: "São Paulo, Brazil",
    category: "Interior Architecture",
    description:
      "A serene powder room ordered by warm stone, soft timber and a measured composition of light and surface.",
    image: sel4,
  },
];

const FeaturedBlock = ({ p, i }: { p: Featured; i: number }) => {
  const ref = useReveal<HTMLElement>();
  const reverse = i % 2 === 1;
  return (
    <article
      ref={ref}
      className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <div className="img-zoom aspect-[4/3] w-full bg-muted">
          <img
            src={p.images[0]}
            alt={`${p.name} — ${p.category}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        {p.images.length > 1 && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {p.images.slice(1, 4).map((src, idx) => (
              <div key={idx} className="img-zoom aspect-[4/3] bg-muted">
                <img
                  src={src}
                  alt={`${p.name} — detail ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-12" : "lg:pl-8"}`}>
        <p className="eyebrow mb-6">{p.index}</p>
        <h3 className="display-serif text-3xl md:text-4xl lg:text-5xl">{p.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{p.location}</p>
        <p className="mt-1 text-sm text-muted-foreground italic">{p.category}</p>
        <span className="rule mt-8 mb-8" />
        <p className="text-foreground/80 font-light leading-relaxed text-[15px] md:text-[15.5px]">
          {p.concept}
        </p>
      </div>
    </article>
  );
};

const SelectedCard = ({ p }: { p: Selected }) => {
  const ref = useReveal<HTMLElement>();
  return (
    <article ref={ref} className="reveal group">
      <div className="img-zoom aspect-[4/5] w-full bg-muted">
        <img
          src={p.image}
          alt={`${p.name} — ${p.category}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-5">
        <p className="eyebrow">{p.category}</p>
        <h4 className="font-serif text-xl md:text-2xl mt-2 leading-tight">{p.name}</h4>
        <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
        <p
          className="mt-3 text-foreground/70 font-light leading-relaxed text-[14px]"
          dangerouslySetInnerHTML={{ __html: p.description }}
        />
      </div>
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
            <p className="eyebrow mb-6">Featured Projects</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Private residences, contemporary villas, luxury interiors.
            </h2>
          </div>
          <p className="md:max-w-sm text-foreground/70 font-light leading-relaxed text-[15px]">
            A curated selection drawn from our practice in São Paulo&rsquo;s most
            exclusive gated communities — each project led personally from first
            sketch to final styling.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {featured.map((p, i) => (
            <FeaturedBlock p={p} i={i} key={p.index} />
          ))}
        </div>

        <div className="mt-32 md:mt-44 pt-20 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Selected Works</p>
              <h3 className="display-serif text-3xl md:text-4xl lg:text-5xl max-w-xl">
                A continuing portfolio of refined residential environments.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {selected.map((p) => (
              <SelectedCard p={p} key={p.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

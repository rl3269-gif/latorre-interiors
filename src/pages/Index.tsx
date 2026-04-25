import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Portfolio from "@/components/site/Portfolio";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Experience from "@/components/site/Experience";
import Inquiry from "@/components/site/Inquiry";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Latorre Interiors LLC — Luxury Interior Architecture & Design, USA";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Latorre Interiors LLC — a boutique luxury interior architecture and design firm in the USA. High-end residential interiors led by Debora Mussi Bonito Latorre."
    );
    setMeta(
      "keywords",
      "Luxury Interior Designer USA, Interior Architecture Firm, High-end Residential Interiors, boutique design firm, Debora Latorre"
    );
    setMeta("og:title", "Latorre Interiors LLC — Interior Architecture & Design", "property");
    setMeta(
      "og:description",
      "Refined interiors designed with precision, discretion, and intent.",
      "property"
    );
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";

    // JSON-LD
    const ldId = "ld-organization";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Latorre Interiors LLC",
      description:
        "Boutique luxury interior architecture and design firm based in the United States.",
      areaServed: "United States",
      founder: { "@type": "Person", name: "Debora Mussi Bonito Latorre" },
      url: typeof window !== "undefined" ? window.location.origin : undefined,
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Process />
      <Experience />
      <Inquiry />
      <Footer />
    </main>
  );
};

export default Index;

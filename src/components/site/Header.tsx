import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Studio" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Inquiry" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-lg md:text-xl tracking-[0.18em] uppercase">
            Latorre
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
            Interiors
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[12px] uppercase tracking-[0.24em] text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.28em] border border-foreground/40 px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-500"
        >
          Start a Project
        </a>

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-background border-t border-border transition-[max-height] duration-500 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-editorial flex flex-col gap-6 py-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.28em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

const Footer = () => {
  return (
    <footer className="bg-ink text-warmWhite/80">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-[0.18em] uppercase text-warmWhite">Latorre</p>
            <p className="mt-3 text-sm tracking-[0.24em] uppercase text-warmWhite/60">Interiors LLC</p>
            <p className="mt-8 max-w-sm text-[14px] font-light leading-relaxed">
              A boutique interior architecture and design firm based in the United
              States, working on a limited number of residential and boutique
              commercial projects each year.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-warmWhite/60 mb-5">Studio</p>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#about" className="link-underline">About</a></li>
              <li><a href="#portfolio" className="link-underline">Portfolio</a></li>
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#process" className="link-underline">Process</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-warmWhite/60 mb-5">Contact</p>
            <p className="text-[14px]">
              <a href="mailto:studio@latorreinteriors.com" className="link-underline">
                studio@latorreinteriors.com
              </a>
            </p>
            <p className="mt-2 text-[14px]">United States</p>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-warmWhite/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[11px] tracking-[0.24em] uppercase text-warmWhite/50">
            © {new Date().getFullYear()} Latorre Interiors LLC. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.24em] uppercase text-warmWhite/50">
            Interior Architecture &amp; Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

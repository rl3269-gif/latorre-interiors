import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { toast } from "sonner";

const Inquiry = () => {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Inquiry received. We will respond personally within two business days.");
    }, 700);
  };

  const inputCls =
    "w-full bg-transparent border-b border-foreground/30 py-4 text-[15px] placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <section id="contact" className="py-28 md:py-40 bg-background">
      <div ref={ref} className="reveal container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Project Inquiry</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl">
            Begin a conversation.
          </h2>
          <p className="mt-8 text-foreground/75 font-light leading-relaxed text-[15px] max-w-md">
            We are currently accepting a limited number of new commissions. Share
            a few details and the principal will respond personally.
          </p>

          <div className="mt-16 space-y-8">
            <div>
              <p className="eyebrow mb-2">Studio</p>
              <p className="font-serif text-lg">Latorre Interiors LLC</p>
              <p className="text-sm text-muted-foreground mt-1">United States</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Direct</p>
              <a href="mailto:studio@latorreinteriors.com" className="link-underline font-serif text-lg">
                studio@latorreinteriors.com
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <label className="eyebrow block mb-3" htmlFor="name">Full Name</label>
              <input id="name" name="name" required className={inputCls} placeholder="" />
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required className={inputCls} />
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="phone">Phone</label>
              <input id="phone" type="tel" name="phone" className={inputCls} />
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="city">Project Location</label>
              <input id="city" name="city" required className={inputCls} placeholder="City, State" />
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="type">Project Type</label>
              <select id="type" name="type" required className={`${inputCls} appearance-none`}>
                <option value="">Select</option>
                <option>Private Residence</option>
                <option>Apartment / Pied-à-terre</option>
                <option>Renovation</option>
                <option>New Construction</option>
                <option>Boutique Commercial</option>
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="budget">Investment Range (USD)</label>
              <select id="budget" name="budget" required className={`${inputCls} appearance-none`}>
                <option value="">Select</option>
                <option>$250K – $500K</option>
                <option>$500K – $1M</option>
                <option>$1M – $3M</option>
                <option>$3M+</option>
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="timeline">Anticipated Start</label>
              <select id="timeline" name="timeline" className={`${inputCls} appearance-none`}>
                <option value="">Select</option>
                <option>Within 3 months</option>
                <option>3 – 6 months</option>
                <option>6 – 12 months</option>
                <option>Exploring</option>
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-3" htmlFor="referral">How You Found Us</label>
              <input id="referral" name="referral" className={inputCls} />
            </div>
          </div>

          <div>
            <label className="eyebrow block mb-3" htmlFor="message">Tell us about the project</label>
            <textarea id="message" name="message" rows={5} className={`${inputCls} resize-none`} />
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-xs text-muted-foreground max-w-xs">
              All inquiries are received in confidence.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 bg-charcoal text-warmWhite text-[11px] uppercase tracking-[0.28em] px-8 py-4 hover:bg-ink transition-colors duration-500 disabled:opacity-60"
            >
              {submitting ? "Sending" : "Submit Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Inquiry;

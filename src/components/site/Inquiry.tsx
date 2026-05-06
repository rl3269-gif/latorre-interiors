import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  city: z.string().trim().min(1, "Project location is required").max(150),
  type: z.string().trim().min(1, "Project type is required").max(100),
  budget: z.string().trim().min(1, "Investment range is required").max(100),
  timeline: z.string().trim().max(100).optional().or(z.literal("")),
  referral: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const Inquiry = () => {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;

    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    const data = parsed.data;

    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase.from("inquiries").insert({
        id,
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        city: data.city || null,
        project_type: data.type || null,
        budget: data.budget || null,
        timeline: data.timeline || null,
        referral: data.referral || null,
        message: data.message || null,
      });
      if (insertError) throw insertError;

      // Notify the studio
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "inquiry-notification",
          recipientEmail: "studio@latorreinteriors.com",
          idempotencyKey: `inquiry-notify-${id}`,
          templateData: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            projectType: data.type,
            budget: data.budget,
            timeline: data.timeline,
            referral: data.referral,
            message: data.message,
          },
        },
      });

      // Confirmation to the client
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "inquiry-confirmation",
          recipientEmail: data.email,
          idempotencyKey: `inquiry-confirm-${id}`,
          templateData: { name: data.name },
        },
      });

      form.reset();
      toast.success("Inquiry received. We will respond personally within two business days.");
    } catch (err) {
      console.error(err);
      toast.error("We could not submit your inquiry. Please try again or email studio@latorreinteriors.com.");
    } finally {
      setSubmitting(false);
    }
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

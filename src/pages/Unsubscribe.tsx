import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "done" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    (async () => {
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
          headers: { apikey: SUPABASE_ANON_KEY },
        });
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    setSubmitting(false);
    if (error) setState("error");
    else if ((data as any)?.success) setState("done");
    else if ((data as any)?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <p className="eyebrow mb-6">Latorre Interiors</p>
        {state === "loading" && <p className="font-serif text-xl">Verifying…</p>}
        {state === "valid" && (
          <>
            <h1 className="display-serif text-3xl mb-6">Unsubscribe</h1>
            <p className="text-foreground/75 mb-10 leading-relaxed">
              Confirm to stop receiving emails from Latorre Interiors.
            </p>
            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="bg-charcoal text-warmWhite text-[11px] uppercase tracking-[0.28em] px-8 py-4 hover:bg-ink transition-colors duration-500 disabled:opacity-60"
            >
              {submitting ? "Processing" : "Confirm Unsubscribe"}
            </button>
          </>
        )}
        {state === "already" && <p className="font-serif text-xl">You are already unsubscribed.</p>}
        {state === "done" && <p className="font-serif text-xl">You have been unsubscribed.</p>}
        {state === "invalid" && <p className="font-serif text-xl">Invalid or expired link.</p>}
        {state === "error" && <p className="font-serif text-xl">Something went wrong. Please try again later.</p>}
      </div>
    </main>
  );
};

export default Unsubscribe;

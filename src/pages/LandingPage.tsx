import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Send, Star, ArrowDown } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { z } from "zod";
import { Link } from "react-router-dom";

import hero1 from "@/assets/portfolio-1.webp";
import hero2 from "@/assets/portfolio-2.webp";
import hero3 from "@/assets/portfolio-3.webp";
import hero4 from "@/assets/portfolio-7.webp";
import hero5 from "@/assets/portfolio-8.webp";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const LandingPage = () => {
  const { toast } = useToast();
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("Invalid email"),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1, "Please describe your project"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!captchaToken) {
      toast({ title: "Please complete the captcha", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "dad3212c-5a89-4f2c-9d9c-ca8234e156f5",
          ...formData,
          "h-captcha-response": captchaToken,
          subject: "New Lead from Landing Page",
        }),
      });

      if (response.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-17899630675/vebnCKHztusbENPgmtdC",
            value: 1.0,
            currency: "EUR",
          });
        }
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-semibold">
            GX<span className="text-[#00bad3]">VISUALS</span>
          </Link>
          <a
            href="tel:+35795115014"
            className="text-[#00bad3] font-body text-sm font-semibold tracking-wide hover:text-white transition-colors"
          >
            📞 +357 95 115014
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <span className="text-[#00bad3] font-body text-xs tracking-[0.3em] uppercase block mb-4">
                3D Renders Cyprus & Greece
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
                See Your Home<br />
                <span className="text-[#00bad3]">Before It's Built</span>
              </h1>
              <p className="text-gray-400 font-body text-base leading-relaxed mb-6">
                Photorealistic 3D renders that help homeowners and developers make the right decisions — before construction begins. Used by architects and developers across Cyprus and Greece.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "35+ Projects Completed",
                  "Free Quote in 24h",
                  "Up to 3 Revisions",
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <CheckCircle2 size={14} className="text-[#00bad3]" />
                    <span className="font-body text-xs text-white">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Pricing hint */}
              <div className="bg-[#00bad3]/10 border border-[#00bad3]/20 rounded-xl px-5 py-4 mb-8">
                <p className="text-[#00bad3] font-body text-sm font-semibold mb-1">💡 How much does it cost?</p>
                <p className="text-gray-400 font-body text-sm">Projects start from €150. Your quote is free, personalised, and arrives within 24 hours — no commitment required.</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 font-body text-xs lg:hidden">
                <ArrowDown size={14} />
                <span>Fill the form below to get your free quote</span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <p className="font-display text-xl italic text-white mb-1">Get a Free Quote Today</p>
              <p className="text-gray-400 font-body text-xs mb-6">Fill in 3 fields — we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-body text-gray-400 mb-2">Full Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body text-gray-400 mb-2">Email Address *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body text-gray-400 mb-2">Tell us about your project *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="e.g. I need exterior renders for a 3-bedroom villa in Limassol..." rows={3} className="bg-white/5 border-white/10 text-white placeholder:text-gray-600" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body text-gray-400 mb-2">Phone <span className="text-gray-600">(optional)</span></label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+357 99 123456" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600" />
                </div>

                <div className="flex justify-center py-1">
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    ref={captchaRef}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#00bad3] hover:bg-[#00bad3]/90 text-white py-6 text-sm tracking-widest uppercase font-bold flex items-center gap-2">
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Get My Free Quote"}
                </Button>

                <p className="text-center text-gray-500 font-body text-xs">
                  No spam. No commitment. Just a free, personalised quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-400 font-body text-xs tracking-widest uppercase mb-6">Recent Projects</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[hero1, hero2, hero3, hero4, hero5].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img} alt={`GX Visuals project ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "GX Visuals transformed our blueprints into a living experience. It helped us secure our biggest contract this year.",
                name: "Andreas Papadopoulos",
                role: "Lead Architect, AP Studios",
              },
              {
                text: "Their 3D walkthroughs were the key to selling out our project in Paphos off-plan.",
                name: "Maria Constantinou",
                role: "Property Developer",
              },
            ].map((review, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#00bad3] fill-[#00bad3]" />
                  ))}
                </div>
                <p className="text-gray-400 font-body text-sm italic leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-white font-body text-sm font-semibold">{review.name}</p>
                <p className="text-[#00bad3] font-body text-xs uppercase tracking-wide">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-gray-400 font-body text-sm mb-2">Still browsing? View our full portfolio first.</p>
        <Link to="/portfolio" className="text-[#00bad3] font-body text-sm underline hover:text-white transition-colors">
          View Full Portfolio →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t border-white/5 text-center">
        <p className="text-gray-600 font-body text-xs">© 2026 GXVisuals. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;

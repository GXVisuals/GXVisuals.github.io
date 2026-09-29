import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

type ContactFormProps = {
  market?: "cyprus" | "uk" | "general";
  heading?: string;
  subheading?: string;
  pricingText?: string;
  phonePlaceholder?: string;
  phoneHref?: string;
  phoneDisplay?: string;
  locationText?: string;
  subject?: string;
  currency?: "EUR" | "GBP";
};

const ContactForm = ({
  market = "general",
  heading,
  subheading,
  pricingText,
  phonePlaceholder,
  phoneHref = "tel:+35795115014",
  phoneDisplay = "+357 95115014",
  locationText,
  subject,
  currency = "EUR",
}: ContactFormProps) => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const contactSchema = z.object({
    name: z.string().trim().min(1, t("form_name") + " is required"),
    email: z.string().trim().email("Invalid email"),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1, t("form_message") + " is required"),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!captchaToken) {
      toast({
        title: t("toast_captcha_title"),
        description: t("toast_captcha_desc"),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dad3212c-5a89-4f2c-9d9c-ca8234e156f5",
          ...formData,
          market,
          page_url: window.location.href,
          subject: subject || `New GX Visuals enquiry - ${market}`,
          "h-captcha-response": captchaToken,
        }),
      });

      if (response.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            market,
            lead_source: "website_contact_form",
          });
          window.gtag("event", "conversion", {
            send_to: "AW-17899630675/vebnCKHztusbENPgmtdC",
            value: 1.0,
            currency,
          });
        }

        toast({
          title: t("toast_success_title"),
          description: t("toast_success_desc"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast({
        title: t("toast_error_title"),
        description: t("toast_error_desc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resolvedPricingText = pricingText || t(
    "contact_pricing_desc",
    "Projects typically start from €150. Every quote is free, personalised, and sent within 24 hours — no commitment required."
  );

  return (
    <section id="contact" className="scroll-mt-32 py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">{t("contact_eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-4">
              {heading || t("contact_header")}
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-md">
              {subheading || t("contact_sub")}
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 mb-8">
              <p className="text-primary font-body text-sm font-semibold mb-1">💡 {t("contact_pricing_title", "How much does it cost?")}</p>
              <p className="text-muted-foreground font-body text-sm">{resolvedPricingText}</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                t("contact_trust_1", "Free quote — no commitment"),
                t("contact_trust_2", "Reply within 24 hours"),
                t("contact_trust_3", "Up to 3 revision rounds included"),
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <p className="text-foreground font-body text-sm">{point}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <a href="mailto:info@gxvisuals.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <p className="font-body">info@gxvisuals.com</p>
              </a>
              <a href={phoneHref} className="flex items-center gap-4 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <p className="font-body">{phoneDisplay}</p>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-foreground font-body">{locationText || t("contact_location")}</p>
              </div>
            </div>
          </div>

          <div className="min-w-0 bg-card rounded-xl p-4 sm:p-8 border border-border">
            <p className="font-display text-lg text-foreground italic mb-1">
              {t("contact_form_title", "Get your free quote")}
            </p>
            <p className="text-muted-foreground font-body text-xs mb-6">
              {t("contact_form_sub", "Fill in 3 fields — we'll do the rest.")}
            </p>

            {market !== "general" && (
              <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-semibold text-foreground">What happens next</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                  <li><span className="font-medium text-foreground">Send drawings.</span> Include a link to your CAD/PDF plans, the views you need and your deadline in the message, or email drawings to info@gxvisuals.com.</li>
                  <li><span className="font-medium text-foreground">Quote within 24h.</span> We’ll confirm scope, price and timing.</li>
                  <li><span className="font-medium text-foreground">Production starts after approval.</span> Review and approve your quote before work begins.</li>
                </ol>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">{t("form_name")} *</label>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">{t("form_email")} *</label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  {t("contact_details", "Tell us about your project")} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact_details_placeholder", "e.g. I need exterior renders for a 3-bedroom villa...")}
                  rows={4}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  {t("contact_phone", "Phone")} <span className="text-muted-foreground/50 text-xs">{t("contact_phone_optional", "(optional)")}</span>
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={phonePlaceholder || "+357 99 123456"}
                />
              </div>

              <div className="flex justify-center py-1">
                <HCaptcha
                  size={market === "general" ? "normal" : "compact"}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  ref={captchaRef}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken(null)}
                  language={i18n.language.startsWith("el") ? "el" : "en"}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full flex items-center gap-2 py-6 text-sm tracking-widest uppercase font-bold">
                <Send className="w-4 h-4" />
                {isSubmitting ? t("sending") : t("contact_form_submit", "Get My Free Quote")}
              </Button>

              <p className="text-center text-muted-foreground font-body text-xs">
                {t("contact_form_note", "No spam. No commitment. Just a free, personalised quote.")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

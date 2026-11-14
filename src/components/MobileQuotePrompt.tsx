import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_PROMPT_EVENT } from "@/lib/contactPrompt";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const MobileQuotePrompt = () => {
  const [open, setOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const captchaRef = useRef<HCaptcha>(null);
  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  const schema = z.object({
    name: z.string().trim().min(1, `${t("form_name")} ${t("form_required")}`),
    email: z.string().trim().email(t("form_invalid_email")),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1, `${t("form_message")} ${t("form_required")}`),
  });

  useEffect(() => {
    const handleOpen = () => setOpen(true);

    window.addEventListener(CONTACT_PROMPT_EVENT, handleOpen);
    return () => window.removeEventListener(CONTACT_PROMPT_EVENT, handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!captchaToken) {
      toast({
        title: t("toast_captcha_title", "Please complete the captcha"),
        description: t("toast_captcha_desc", "This helps us prevent spam."),
        variant: "destructive",
      });
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
          subject: "New Mobile Quote Lead",
        }),
      });

      const submission = await response.json();
      if (!response.ok || submission.success !== true) {
        throw new Error("Failed");
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17899630675/vebnCKHztusbENPgmtdC",
          value: 1.0,
          currency: "EUR",
        });
      }

      toast({
        title: t("toast_success_title", "Message sent!"),
        description: t("toast_success_desc", "We'll get back to you within 24 hours."),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
      setOpen(false);
    } catch {
      toast({
        title: t("toast_error_title", "Something went wrong"),
        description: t("toast_error_desc", "Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-lg border-white/10 bg-[#0e0e0e] p-5 text-white shadow-2xl sm:hidden">
        <div className="pr-6">
          <DialogTitle className="font-display text-2xl font-medium italic text-white">
            {t("contact_form_title", "Get your free quote")}
          </DialogTitle>
          <DialogDescription className="mt-2 font-body text-xs leading-relaxed text-gray-400">
            {t("contact_form_sub")}
          </DialogDescription>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-body text-gray-400">{t("form_name")} *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-body text-gray-400">{t("form_email")} *</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-body text-gray-400">
              {t("contact_details")}
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t(
                "contact_details_placeholder",
                "e.g. I need exterior renders for a 3-bedroom villa in Limassol..."
              )}
              rows={3}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-body text-gray-400">
              {t("contact_phone", "Phone")}{" "}
              <span className="text-gray-600">{t("contact_phone_optional", "(optional)")}</span>
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+357 99 123456"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
            />
          </div>

          <div className="flex justify-center py-1">
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              ref={captchaRef}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              languageOverride={i18n.language.startsWith("el") ? "el" : "en"}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 bg-[#00bad3] py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#00bad3]/90"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? t("sending") : t("contact_form_submit", "Get My Free Quote")}
          </Button>

          <p className="text-center font-body text-xs text-gray-500">
            {t("contact_form_note", "No spam. No commitment. Just a free, personalised quote.")}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MobileQuotePrompt;

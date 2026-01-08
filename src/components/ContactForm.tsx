import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    // 1. Validate with Zod
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
      // 2. Prepare Data for Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "dad3212c-5a89-4f2c-9d9c-ca8234e156f5", // Your Web3Forms Key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const json = await response.json();

      if (response.ok) {
        // 3. Success Notification
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (error) {
      // 4. Error Notification
      toast({
        title: "Something went wrong",
        description: "Please check your internet or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">Start Your Project</h2>
            <p className="font-body text-muted-foreground mb-10 max-w-md">Ready to transform your architectural vision into reality?</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-foreground font-body">giorgoscharitonos@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-foreground font-body">+357 95115014</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-foreground font-body">Limassol, Cyprus</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Email *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">Phone</label>
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+357 99 123456" />
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">Project Details *</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full flex items-center gap-2">
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

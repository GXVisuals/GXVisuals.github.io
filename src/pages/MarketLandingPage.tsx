import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/portfolio-1.webp";
import hero2 from "@/assets/portfolio-23.webp";
import hero3 from "@/assets/portfolio-55.webp";
import hero4 from "@/assets/portfolio-7.webp";
import hero5 from "@/assets/portfolio-8.webp";

declare global { interface Window { gtag?: (...args: any[]) => void; } }
type Market = "cyprus" | "uk";

const marketConfig = {
  cyprus: {
    eyebrow: "Architectural Visualisation Cyprus",
    title: "Photorealistic 3D Renders for Cyprus Projects",
    description: "Interior and exterior architectural visualisation for architects, property developers, interior designers and homeowners across Cyprus.",
    locationLine: "Serving Limassol, Nicosia, Paphos, Larnaca and projects across Cyprus.",
    canonical: "https://www.gxvisuals.com/cyprus",
    metaTitle: "3D Rendering Cyprus | Architectural Visualisation | GX Visuals",
    metaDescription: "Photorealistic 3D rendering and architectural visualisation in Cyprus for architects, developers, interior designers and homeowners.",
    pricing: "Interior and exterior renders from €150. Final pricing depends on project scope and complexity.",
    alternateHref: "/uk",
    alternateLabel: "UK projects",
    contactHeading: "Request a Cyprus project quote",
    contactSubheading: "Send your plans, project location and required views. We’ll reply with scope, timing and a personalised quote.",
    contactLocation: "Cyprus · Remote projects welcome",
    phonePlaceholder: "+357 99 123456",
    subject: "New Cyprus architectural visualisation enquiry",
    currency: "EUR" as const,
  },
  uk: {
    eyebrow: "Architectural Visualisation UK",
    title: "Architectural Visualisation & Property CGI for UK Projects",
    description: "Photorealistic interior and exterior CGI for architects, property developers and interior designers across the UK.",
    locationLine: "Remote collaboration for projects across England, Scotland, Wales and Northern Ireland.",
    canonical: "https://www.gxvisuals.com/uk",
    metaTitle: "Architectural Visualisation UK | Property CGI | GX Visuals",
    metaDescription: "Architectural visualisation and property CGI for UK architects, developers and interior designers. Interior CGI, exterior CGI and 3D walkthroughs.",
    pricing: "UK projects receive a fixed GBP quote based on scope, number of views and required turnaround.",
    alternateHref: "/cyprus",
    alternateLabel: "Cyprus projects",
    contactHeading: "Request a UK architectural visualisation quote",
    contactSubheading: "Send your drawings, number of views and deadline. We’ll reply with a fixed GBP quote and production timeline.",
    contactLocation: "United Kingdom · Remote collaboration",
    phonePlaceholder: "+44 7...",
    subject: "New UK architectural visualisation enquiry",
    currency: "GBP" as const,
  },
} as const;

const services = [
  ["Exterior CGI", "Photorealistic exterior views for design review, planning presentations, property marketing and off-plan sales."],
  ["Interior CGI", "High-detail interior visualisation showing materials, lighting, furniture and atmosphere."],
  ["3D Modelling", "Accurate 3D models built from architectural drawings, CAD files, sketches or reference material."],
  ["3D Walkthroughs", "Animated visualisations that help clients, buyers and stakeholders understand the complete space."],
];

const process = [
  ["01", "Send your project", "Share plans, elevations, CAD/PDF drawings, references and the views you need."],
  ["02", "Receive a fixed quote", "We confirm scope, deliverables and turnaround before production starts."],
  ["03", "Review previews", "You receive draft views and provide consolidated feedback for revisions."],
  ["04", "Receive final visuals", "Approved images are delivered in high resolution for presentations, marketing or client approval."],
];

const MarketLandingPage = ({ market }: { market: Market }) => {
  const config = marketConfig[market];

  useEffect(() => {
    document.title = config.metaTitle;
    document.documentElement.lang = "en";
    document.querySelector("meta[name='description']")?.setAttribute("content", config.metaDescription);
    document.querySelector("link[rel='canonical']")?.setAttribute("href", config.canonical);
    document.querySelector("meta[property='og:title']")?.setAttribute("content", config.metaTitle);
    document.querySelector("meta[property='og:description']")?.setAttribute("content", config.metaDescription);
    document.querySelector("meta[property='og:url']")?.setAttribute("content", config.canonical);
    document.querySelector("meta[name='twitter:title']")?.setAttribute("content", config.metaTitle);
    document.querySelector("meta[name='twitter:description']")?.setAttribute("content", config.metaDescription);
  }, [config]);

  const track = (event: string) => {
    if (typeof window.gtag === "function") window.gtag("event", event, { market });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0e0e0e]/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold">GX<span className="text-[#00bad3]">VISUALS</span></Link>
          <div className="flex items-center gap-4">
            <Link to={config.alternateHref} className="hidden text-xs text-gray-400 hover:text-white sm:block">{config.alternateLabel}</Link>
            <a href="tel:+35795115014" onClick={() => track("phone_click")} className="inline-flex items-center gap-2 text-sm font-semibold text-[#00bad3] hover:text-white"><Phone size={15} /> +357 95 115014</a>
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 pb-16 pt-16 md:pt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-[#00bad3]">{config.eyebrow}</span>
                <h1 className="mb-5 font-display text-4xl font-medium leading-tight md:text-6xl">{config.title}</h1>
                <p className="mb-4 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">{config.description}</p>
                <p className="mb-8 text-sm text-gray-500">{config.locationLine}</p>
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {["Quote response within 24 hours", "Up to 3 revision rounds", "High-resolution final files", "Remote collaboration available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"><CheckCircle2 size={16} className="text-[#00bad3]" /><span className="text-sm text-gray-200">{item}</span></div>
                  ))}
                </div>
                <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00bad3]">Pricing</p><p className="text-sm leading-relaxed text-gray-300">{config.pricing}</p></div>
                <div className="flex flex-wrap gap-3">
                  <a href="#contact" onClick={() => track("quote_click")} className="inline-flex items-center gap-2 rounded-full bg-[#00bad3] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white">Get a project quote <ArrowRight size={16} /></a>
                  <Link to="/portfolio" onClick={() => track("portfolio_click")} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white hover:bg-white/5">View portfolio</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[hero1, hero2, hero3, hero4].map((img, index) => (
                  <Link key={index} to="/portfolio" className={`overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}><img src={img} alt={`Architectural visualisation project ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20"><div className="container mx-auto max-w-6xl"><div className="mb-10 max-w-2xl"><span className="text-xs uppercase tracking-[0.3em] text-[#00bad3]">Services</span><h2 className="mt-3 font-display text-3xl md:text-4xl">Visuals built for design decisions and property marketing</h2></div><div className="grid gap-4 md:grid-cols-2">{services.map(([title, text]) => <div key={title} className="rounded-2xl border border-white/10 bg-black/10 p-6"><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p></div>)}</div></div></section>

        <section className="px-6 py-20"><div className="container mx-auto max-w-6xl"><div className="mb-10 text-center"><span className="text-xs uppercase tracking-[0.3em] text-[#00bad3]">How it works</span><h2 className="mt-3 font-display text-3xl md:text-4xl">A simple remote workflow</h2></div><div className="grid gap-4 md:grid-cols-4">{process.map(([number, title, text]) => <div key={number} className="rounded-2xl border border-white/10 p-5"><span className="text-sm font-semibold text-[#00bad3]">{number}</span><h3 className="mt-3 font-display text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p></div>)}</div></div></section>

        <section className="border-y border-white/5 bg-black/20 px-6 py-14"><div className="container mx-auto max-w-6xl"><p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-gray-500">More recent work</p><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{[hero1, hero2, hero3, hero4, hero5].map((img, index) => <Link key={index} to="/portfolio" className="aspect-[4/3] overflow-hidden rounded-xl"><img src={img} alt={`GX Visuals project ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></Link>)}</div></div></section>

        <ContactForm market={market} heading={config.contactHeading} subheading={config.contactSubheading} pricingText={config.pricing} locationText={config.contactLocation} phonePlaceholder={config.phonePlaceholder} subject={config.subject} currency={config.currency} />

        <section className="px-6 py-16"><div className="container mx-auto max-w-4xl text-center"><h2 className="font-display text-3xl md:text-4xl">Prefer WhatsApp?</h2><p className="mx-auto mt-4 max-w-2xl text-gray-400">Send a short message with your project type and we can tell you what files to prepare for a quote.</p><a href="https://wa.me/35795115014" target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click")} className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold"><MessageCircle size={16} /> WhatsApp GX Visuals</a></div></section>
      </main>
      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} GX Visuals · Architectural visualisation and 3D rendering</footer>
    </div>
  );
};

export default MarketLandingPage;

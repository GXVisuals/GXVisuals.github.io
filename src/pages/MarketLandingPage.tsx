import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import residence from "@/assets/portfolio-23.webp";
import complex from "@/assets/portfolio-7.webp";
import villa from "@/assets/portfolio-8.webp";

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
    contactHeading: "Request a Cyprus project quote",
    contactSubheading: "Send your plans, project location and required views. We’ll reply with scope, timing and a personalised quote.",
    contactLocation: "Cyprus · Remote projects welcome",
    phonePlaceholder: "+357 99 123456",
    phoneHref: "tel:+35795115014",
    phoneDisplay: "+357 95 115014",
    whatsappHref: "https://wa.me/35795115014",
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
    contactHeading: "Request a UK architectural visualisation quote",
    contactSubheading: "Send your drawings, number of views and deadline. We’ll reply with a fixed GBP quote and production timeline.",
    contactLocation: "United Kingdom · Remote collaboration",
    phonePlaceholder: "+44 7423 544725",
    phoneHref: "tel:+447423544725",
    phoneDisplay: "+44 7423 544725",
    whatsappHref: "https://wa.me/447423544725",
    subject: "New UK architectural visualisation enquiry",
    currency: "GBP" as const,
  },
} as const;

// Project names, locations and visual details come from components/Portfolio.tsx.
// These Cyprus examples are shared across both markets; they are not UK projects.
const selectedProjects = [
  { image: residence, title: "The Palodeia Smart Residence", location: "Palodeia, Limassol, Cyprus", type: "Residential exterior CGI", description: "An L-shaped home with private interior courtyards and clean minimalist zoning.", alt: "The Palodeia Smart Residence - L-Shaped Footprint View" },
  { image: complex, title: "Modern Residential Complex", location: "Latsia, Nicosia, Cyprus", type: "Multi-family exterior CGI", description: "A multi-family development featuring glass balconies and warm brick accents.", alt: "Modern Residential Complex - Multi-Family Exterior" },
  { image: villa, title: "The Omodos Stone Villa", location: "Omodos, Limassol, Cyprus", type: "Residential exterior CGI", description: "A traditional fieldstone residence with modern elevated terraces overlooking vineyard valleys.", alt: "The Omodos Stone Villa - Rustic Fieldstone Facade" },
];

const services = [
  ["Exterior CGI", "Photorealistic exterior views for design review, planning presentations, property marketing and off-plan sales."],
  ["Interior CGI", "High-detail interior visualisation showing materials, lighting, furniture and atmosphere."],
  ["3D Modelling", "Accurate 3D models built from architectural drawings, CAD files, sketches or reference material."],
  ["3D Walkthroughs", "Animated visualisations that help clients, buyers and stakeholders understand the complete space."],
];

const process = [
  ["01", "Send drawings", "Share plans, elevations, CAD/PDF drawings, references and the views you need."],
  ["02", "Quote within 24h", "Receive your quote with scope, deliverables and timing. Production starts only after you approve the quote."],
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
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
          <Link to="/" className="font-display text-xl font-semibold">GX<span className="text-[#00bad3]">VISUALS</span></Link>
          <nav aria-label="Main site" className="order-3 flex w-full items-center gap-5 text-sm text-gray-300 sm:order-none sm:w-auto sm:ml-auto">
            <Link to="/portfolio" onClick={() => track("portfolio_click")} className="py-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00bad3]">Portfolio</Link>
            <a href="/#about" onClick={() => track("about_click")} className="py-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00bad3]">About</a>
          </nav>
          <a href={config.phoneHref} onClick={() => track("phone_click")} className="inline-flex items-center gap-2 text-sm font-semibold text-[#00bad3] hover:text-white"><Phone size={15} /> {config.phoneDisplay}</a>
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
                <p className="mt-5 text-sm leading-relaxed text-gray-300">Send drawings → Quote within 24h → Production starts after approval.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {selectedProjects.map((project, index) => (
                  <a key={project.title} href="#selected-projects" className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00bad3] ${index === 0 ? "col-span-2" : ""}`}>
                    <img src={project.image} alt={project.alt} loading={index === 0 ? "eager" : "lazy"} className={`w-full object-cover ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`} />
                    <p className="px-3 py-3 text-xs leading-relaxed text-gray-300 group-hover:text-white">{project.title}<span className="mt-1 block text-gray-400">{project.location}</span></p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20"><div className="container mx-auto max-w-6xl"><div className="mb-10 max-w-2xl"><span className="text-xs uppercase tracking-[0.3em] text-[#00bad3]">Services</span><h2 className="mt-3 font-display text-3xl md:text-4xl">Visuals built for design decisions and property marketing</h2></div><div className="grid gap-4 md:grid-cols-2">{services.map(([title, text]) => <div key={title} className="rounded-2xl border border-white/10 bg-black/10 p-6"><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p></div>)}</div></div></section>

        <section className="px-6 py-20"><div className="container mx-auto max-w-6xl"><div className="mb-10 text-center"><span className="text-xs uppercase tracking-[0.3em] text-[#00bad3]">How it works</span><h2 className="mt-3 font-display text-3xl md:text-4xl">A simple remote workflow</h2></div><div className="grid gap-4 md:grid-cols-4">{process.map(([number, title, text]) => <div key={number} className="rounded-2xl border border-white/10 p-5"><span className="text-sm font-semibold text-[#00bad3]">{number}</span><h3 className="mt-3 font-display text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p></div>)}</div></div></section>

        <section id="selected-projects" aria-labelledby="selected-projects-heading" className="scroll-mt-32 border-y border-white/5 bg-black/20 px-6 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#00bad3]">Selected portfolio work</span>
              <h2 id="selected-projects-heading" className="mt-3 font-display text-3xl md:text-4xl">A closer look at the projects</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">Explore these Cyprus projects from our portfolio, from individual homes to multi-family residential architecture.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {selectedProjects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img src={project.image} alt={project.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[#00bad3]">{project.type}</p>
                    <h3 className="mt-2 font-display text-xl">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{project.location}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/portfolio" onClick={() => track("portfolio_click")} className="mt-8 inline-flex items-center gap-2 py-3 text-sm font-semibold text-[#00bad3] hover:text-white">Explore the full portfolio <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>

        <ContactForm market={market} heading={config.contactHeading} subheading={config.contactSubheading} pricingText={config.pricing} locationText={config.contactLocation} phonePlaceholder={config.phonePlaceholder} phoneHref={config.phoneHref} phoneDisplay={config.phoneDisplay} subject={config.subject} currency={config.currency} />

        <section className="px-6 py-16"><div className="container mx-auto max-w-4xl text-center"><h2 className="font-display text-3xl md:text-4xl">Prefer WhatsApp?</h2><p className="mx-auto mt-4 max-w-2xl text-gray-400">Send a short message with your project type and we can tell you what files to prepare for a quote.</p><a href={config.whatsappHref} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click")} className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold"><MessageCircle size={16} /> WhatsApp GX Visuals</a></div></section>
      </main>
      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} GX Visuals · Architectural visualisation and 3D rendering</footer>
    </div>
  );
};

export default MarketLandingPage;

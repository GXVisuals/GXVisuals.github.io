import { Instagram, Facebook, Phone, Music2, ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="py-16 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-semibold text-foreground">
              GX<span className="text-primary">VISUALS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading architectural visualization studio in Cyprus. Specializing in photorealistic 3D rendering and technical kitchen design for developers and homeowners.
            </p>
          </div>

          {/* Column 2: Services Sitemap (Internal Links) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Residential Visualization</a>
              <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Commercial Renders</a>
              <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Interior Design</a>
              <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Kitchen Technical Sketches</a>
            </nav>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#portfolio" onClick={(e) => handleScrollTo(e, "portfolio")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Featured Projects</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Request a Quote</a>
              <a href="#portfolio" onClick={(e) => handleScrollTo(e, "portfolio")} className="text-sm text-muted-foreground hover:text-primary transition-colors">3D Gallery</a>
            </nav>
          </div>

          {/* Column 4: Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gxvisuals.3drendering/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@gxvisuals.3drendering" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <Music2 size={20} />
              </a>
              <a href="https://www.facebook.com/people/GX-Visuals/61586672549590/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/35795115014" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Location: Cyprus, Nationwide Service</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground italic">
            Speed. Precision. Photorealism.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 GXVisuals. All rights reserved.
          </p>
          <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
            Back to Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

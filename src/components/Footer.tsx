import { Instagram, Phone, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-semibold text-foreground">
              GX<span className="text-primary">VISUALS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium 3D architectural visualization and technical kitchen design services across Cyprus.
            </p>
          </div>

          {/* Column 2: Quick Links (Internal Links) */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Featured Portfolio</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Design Services</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Request a Quote</a>
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gxvisuals.3drendering/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/GX-Visuals/61586672549590/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/35795115014" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Based in Cyprus • Available Nationwide</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 GXVisuals. All rights reserved.
          </p>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

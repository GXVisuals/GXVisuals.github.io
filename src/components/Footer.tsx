const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-semibold text-foreground">
            GX<span className="text-primary">VISUALS</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 GXVisuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

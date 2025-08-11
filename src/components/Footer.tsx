const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-playfair text-2xl">Book Your Date</h3>
            <p className="text-muted-foreground mt-2">
              Limited slots available during the wedding season across Tamil Nadu.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 md:justify-end">
            <a className="underline-offset-4 hover:underline" href="/#services">Services</a>
            <a className="underline-offset-4 hover:underline" href="/#portfolio">Portfolio</a>
            <a className="underline-offset-4 hover:underline" href="/#testimonials">Testimonials</a>
            <a className="underline-offset-4 hover:underline" href="/contact">Contact</a>
            <a className="underline-offset-4 hover:underline" href="mailto:booking@example.com">Email</a>
            <a className="underline-offset-4 hover:underline" href="tel:+919000000000">Call</a>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} Tamil Nadu Bridal Makeup Artist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

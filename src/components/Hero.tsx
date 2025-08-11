import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-makeup.jpg";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <section className="relative pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-subtle" aria-hidden="true" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs tracking-wide">
              South Indian Bridal Specialist
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl leading-tight mt-4">
            Shifa Fathima Glow Artistry — Bridal Makeup Tamil Nadu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 md:mt-6 max-w-prose">
              Timeless Tamil bridal looks blending classic elegance with modern finesse — flawless skin, refined eyes, and signature Shifa accents.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" className="px-6 py-3">
                <a href="mailto:booking@example.com?subject=Bridal%20Makeup%20Consultation">Book Consultation</a>
              </Button>
              <Button asChild variant="outline" className="px-6 py-3">
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 md:-inset-8 rounded-2xl blur-2xl opacity-40 bg-gradient-primary -z-10" aria-hidden="true" />
            <img
              src={heroImg}
              alt="South Indian bridal makeup artist styling a bride with Shifa and temple jewelry"
              loading="eager"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;

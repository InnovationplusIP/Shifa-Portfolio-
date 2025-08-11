const testimonials = [
  {
    quote:
      "The muhurtham look was flawless and lasted the entire ceremony. Truly understood the South Indian aesthetic!",
    name: "Priya S.",
    location: "Chennai",
  },
  {
    quote:
      "From trial to reception, everything felt personalized and elegant. Photographs turned out amazing!",
    name: "Meera R.",
    location: "Coimbatore",
  },
  {
    quote:
      "Professional, punctual, and so talented. The jasmine hair styling was a beautiful touch.",
    name: "Ananya D.",
    location: "Madurai",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl">Testimonials</h2>
          <p className="text-muted-foreground mt-3">
            Words from brides who trusted us with their big day.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-card border rounded-xl p-6">
              <p className="text-base">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">{t.name} • {t.location}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

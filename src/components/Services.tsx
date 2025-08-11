import { Sparkles, Camera, Users, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Muhurtham Look",
    desc: "Classic Tamil bridal makeup with temple jewelry styling and jasmine hair adornment.",
  },
  {
    icon: Camera,
    title: "Reception & Sangeet",
    desc: "Glamorous evening looks with refined smokey eyes and long-wear finish.",
  },
  {
    icon: Users,
    title: "Bridesmaids & Family",
    desc: "Coordinated, photo-ready makeup for the bridal party and family members.",
  },
  {
    icon: CalendarCheck,
    title: "Trial & Consultation",
    desc: "Personalized trials to craft your signature bridal look with care.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl">Services</h2>
          <p className="text-muted-foreground mt-3">
            Thoughtfully curated offerings for every event across your wedding journey.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group bg-card border rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import img1 from "@/assets/portfolio-01.jpg";
import img2 from "@/assets/portfolio-02.jpg";
import img3 from "@/assets/portfolio-03.jpg";
import img4 from "@/assets/portfolio-04.jpg";
import img5 from "@/assets/portfolio-05.jpg";
import img6 from "@/assets/portfolio-06.jpg";

const items = [
  { src: img1, alt: "Tamil bridal muhurtham look with temple jewelry and Shifa Fathima" },
  { src: img2, alt: "Reception glam with bronze smokey eye and glossy lips" },
  { src: img3, alt: "Daytime haldi/mehndi dewy natural makeup" },
  { src: img4, alt: "Bold evening look with plum lipstick and defined eyeliner" },
  { src: img5, alt: "Bridesmaid glam with coral tones and Shifa accents" },
  { src: img6, alt: "Classic Tamil bridal profile with temple jewelry and Shifa braid" },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl">Portfolio</h2>
          <p className="text-muted-foreground mt-3">
            A selection of signature looks crafted for brides across Tamil Nadu.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border bg-card">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="sr-only">{it.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

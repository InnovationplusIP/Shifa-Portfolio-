import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jasmine Glow Artistry',
    jobTitle: 'Makeup Artist',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    areaServed: 'Tamil Nadu',
    email: 'booking@example.com',
    url: '/',
    image: '/og-artist.jpg'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Index;

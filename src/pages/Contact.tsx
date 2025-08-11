import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const title = "Contact Makeup Artist in Tamil Nadu | Book Consultation";
    const desc = "Get in touch with a premium South Indian bridal makeup artist in Tamil Nadu. Enquire about dates, services, and trials.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const ld = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Tamil Nadu Bridal Makeup Artist',
    url: '/contact',
    about: {
      '@type': 'Person',
      name: 'Tamil Nadu Bridal Makeup Artist',
      areaServed: 'Tamil Nadu',
      address: { '@type': 'PostalAddress', addressRegion: 'Tamil Nadu', addressCountry: 'IN' }
    },
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'Customer Service', email: 'booking@example.com', telephone: '+919000000000' }]
  }), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AEvent Date: ${eventDate}%0D%0ALocation: ${location}%0D%0AMessage: ${encodeURIComponent(message)}`;
    const mail = `mailto:booking@example.com?subject=Bridal%20Makeup%20Enquiry&body=${body}`;
    window.location.href = mail;
    toast({ title: "Thank you!", description: "Your email client will open to send the enquiry." });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <header className="max-w-2xl mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl">Contact Makeup Artist in Tamil Nadu</h1>
          <p className="text-muted-foreground mt-3">Share your wedding date and preferences — we’ll get back to you promptly.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-4">
            <div className="bg-card border rounded-xl p-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a className="underline-offset-4 hover:underline" href="mailto:booking@example.com">booking@example.com</a>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Phone className="h-5 w-5" />
                <a className="underline-offset-4 hover:underline" href="tel:+919000000000">+91 90000 00000</a>
              </div>
              <div className="flex items-center gap-3 mt-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </aside>

          <article className="md:col-span-2 bg-card border rounded-xl p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Full Name</label>
                <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className="h-11 rounded-md border bg-background px-3" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 rounded-md border bg-background px-3" placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="h-11 rounded-md border bg-background px-3" placeholder="+91…" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date">Event Date</label>
                <input id="date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="h-11 rounded-md border bg-background px-3" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="location">Event Location</label>
                <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="h-11 rounded-md border bg-background px-3" placeholder="City / Venue" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="message">Tell us more</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-28 rounded-md border bg-background px-3 py-2" placeholder="Share your preferred looks, timings, etc." />
              </div>
              <div className="md:col-span-2 mt-2 flex items-center gap-3">
                <Button type="submit" variant="hero">Send Enquiry</Button>
                <a className="underline-offset-4 hover:underline" href="mailto:booking@example.com">Or email directly</a>
              </div>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Contact;

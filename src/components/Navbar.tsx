import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavItems = () => (
  <nav className="hidden md:flex items-center gap-6">
    <a className="text-sm hover:underline underline-offset-4" href="/#services">Services</a>
    <a className="text-sm hover:underline underline-offset-4" href="/#portfolio">Portfolio</a>
    <a className="text-sm hover:underline underline-offset-4" href="/#testimonials">Testimonials</a>
    <Link className="text-sm hover:underline underline-offset-4" to="/contact">Contact</Link>
  </nav>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" aria-label="Open menu">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="flex flex-col gap-4">
      <SheetClose asChild>
        <a className="text-base" href="/#services">Services</a>
      </SheetClose>
      <SheetClose asChild>
        <a className="text-base" href="/#portfolio">Portfolio</a>
      </SheetClose>
      <SheetClose asChild>
        <a className="text-base" href="/#testimonials">Testimonials</a>
      </SheetClose>
      <SheetClose asChild>
        <Link className="text-base" to="/contact">Contact</Link>
      </SheetClose>
      <a className="mt-4" href="mailto:booking@example.com?subject=Bridal%20Makeup%20Consultation">
        <Button variant="hero" className="w-full">Book Consultation</Button>
      </a>
    </SheetContent>
  </Sheet>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-playfair text-xl">Jasmine Glow Artistry</Link>
        <div className="flex items-center gap-4">
          <NavItems />
          <a className="hidden md:inline-block" href="mailto:booking@example.com?subject=Bridal%20Makeup%20Consultation">
            <Button variant="hero">Book</Button>
          </a>
          <div className="md:hidden"><MobileMenu /></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

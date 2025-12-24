import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Corsi", id: "corsi" },
    { name: "Insegnanti", id: "insegnanti" },
    { name: "Orari", id: "orari" },
    { name: "Eventi", id: "eventi" },
    { name: "Contatti", id: "contatti" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollToSection("home")}
        >
          {/* Use standard img tag for simplicity, fallback to text if broken */}
          <img 
            src={assets.logo} 
            alt="Beyond Asana Logo" 
            className={`h-10 w-10 md:h-12 md:w-12 rounded-full object-cover transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={`text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white'}`}>
            Beyond Asana
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-foreground" : "text-foreground md:text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-soft-lg p-4 flex flex-col gap-4 md:hidden border-t h-screen"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0"
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
    
    {/* Mobile Sticky Horizontal Menu (visible only when scrolled down a bit) */}
    {isScrolled && (
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-[56px] left-0 right-0 z-40 bg-white/95 backdrop-blur shadow-soft md:hidden overflow-x-auto"
      >
        <div className="flex px-4 py-2 gap-4 min-w-max">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium whitespace-nowrap text-foreground/80 hover:text-primary transition-colors py-1 px-2 rounded-full hover:bg-secondary/50"
            >
              {link.name}
            </button>
          ))}
        </div>
      </motion.div>
    )}
    </>
  );
}

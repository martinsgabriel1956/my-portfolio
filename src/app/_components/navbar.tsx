"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Experiência", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#"
            className="text-xl font-bold gradient-text"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            GM
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://linkedin.com/in/martins-gab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/martinsgabriel1956"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="py-3 px-4 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex gap-3 px-4 pt-4 border-t border-border mt-2">
                <a
                  href="https://linkedin.com/in/martins-gab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/martinsgabriel1956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50"
                >
                  <Github className="h-5 w-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

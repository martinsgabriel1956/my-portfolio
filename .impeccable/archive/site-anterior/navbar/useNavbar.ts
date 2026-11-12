import { useEffect, useState } from "react";
import { navItems } from "./utils";

export function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) setActiveSection(id);
          else setActiveSection((current) => (current === id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const { href } of navItems) {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return {
    isOpen,
    setIsOpen,
    isScrolled,
    activeSection,
  };
}

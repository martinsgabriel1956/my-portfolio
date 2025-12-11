"use client";

import { Github, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNavbar } from "./useNavbar";
import { navItems } from "./utils";

export function Navbar() {
  const { isScrolled, scrollToSection, isOpen, setIsOpen, handleScrollToTop } =
    useNavbar();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
      )}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-6">
        <header className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#"
            className="text-xl font-bold gradient-text"
            onClick={handleScrollToTop}
            aria-label="Voltar ao topo"
          >
            GM
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  variant="link"
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>

          <aside
            className="hidden md:flex items-center gap-3"
            aria-label="Links de redes sociais"
          >
            <Link
              href="https://linkedin.com/in/martins-gab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/martinsgabriel1956"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </aside>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
              <SheetHeader className="animate-fade-in delay-100">
                <SheetTitle className="text-left text-xl font-bold">
                  Menu de Navegação
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-1 overflow-y-auto px-6 pb-6">
                <ul className="flex flex-col gap-2 list-none mt-2">
                  {navItems.map((item, index) => (
                    <li
                      key={item.href}
                      className="animate-slide-up opacity-0"
                      style={{
                        animationDelay: `${150 + index * 50}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.href)}
                        className="w-full justify-start py-4 px-4 text-left text-base text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all hover:translate-x-1 group"
                      >
                        <span className="font-medium group-hover:gradient-text transition-all">
                          {item.label}
                        </span>
                      </Button>
                    </li>
                  ))}
                </ul>
                <footer className="flex gap-4 pt-6 mt-6 border-t border-border/50 animate-fade-in opacity-0 delay-500">
                  <Link
                    href="https://linkedin.com/in/martins-gab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all hover:scale-105 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href="https://github.com/martinsgabriel1956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all hover:scale-105 group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </footer>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </nav>
  );
}

"use client";

import { FileText, Github, Linkedin, Mail, Menu } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";
import { cn } from "@/lib/utils";
import { useNavbar } from "./useNavbar";
import { navItems } from "./utils";

const socialLinks = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
  { href: GITHUB_URL, label: "GitHub", Icon: Github },
];

const sheetContactLinks = [
  { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail, external: false },
  { href: CV_URL, label: "Currículo (PDF)", Icon: FileText, external: true },
];

export function Navbar() {
  const { isScrolled, isOpen, setIsOpen, activeSection } = useNavbar();
  // Closing via a section link should leave focus at the section, not the trigger.
  const navigatedRef = useRef(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border bg-background/85 backdrop-blur-lg"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:h-20">
        <a
          href="#content"
          className="-mx-2 px-2 py-3 text-xl font-bold tracking-tight"
          aria-label="Gabriel Martins, voltar ao topo"
        >
          GM
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={
                    activeSection === item.href ? "location" : undefined
                  }
                  className="py-2 font-medium text-muted-foreground underline-offset-8 transition-colors hover:text-foreground aria-[current]:text-foreground aria-[current]:underline aria-[current]:decoration-primary aria-[current]:decoration-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden items-center gap-1 md:flex">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (abre em nova aba)`}
                className="grid size-11 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="-mr-2 size-11 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px]"
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              if (navigatedRef.current) event.preventDefault();
              navigatedRef.current = false;
            }}
          >
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">
                Gabriel Martins
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Menu" className="flex-1 overflow-y-auto px-4 pb-6">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <a
                        href={item.href}
                        aria-current={
                          activeSection === item.href ? "location" : undefined
                        }
                        onClick={() => {
                          navigatedRef.current = true;
                        }}
                        className="block rounded-md px-3 py-3 text-lg font-medium transition-colors hover:bg-muted aria-[current]:text-primary"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 border-t border-border pt-4">
                {sheetContactLinks.map(({ href, label, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="flex items-center gap-3 rounded-md px-3 py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      {label}
                      {external && (
                        <span className="sr-only"> (abre em nova aba)</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

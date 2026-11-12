import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectDomain } from "@/db/schema";
import { DOMAINS } from "@/lib/domains";
import { CV_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

function DomainLink({
  domain,
  children,
}: {
  domain: ProjectDomain;
  children: string;
}) {
  const { id, text } = DOMAINS[domain];
  return (
    <a
      href={`#${id}`}
      className={cn(
        "underline decoration-current/40 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-current",
        text,
      )}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-5xl px-6 pt-36 pb-16 md:pt-52 md:pb-24"
    >
      <h1
        id="hero-heading"
        className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
      >
        Gabriel Martins
      </h1>
      <p className="mt-8 max-w-3xl text-xl leading-snug text-foreground/85 md:text-3xl">
        Desenvolvedor Fullstack Pleno. Construo{" "}
        <DomainLink domain="ecommerce">e-commerces</DomainLink>,{" "}
        <DomainLink domain="admin">painéis administrativos</DomainLink> e{" "}
        <DomainLink domain="health">sistemas de saúde</DomainLink> com React,
        Next.js, Node.js e TypeScript.
      </p>
      <p className="mt-6 text-muted-foreground md:text-lg">
        Rio de Janeiro, RJ · Remoto · Aberto a novas oportunidades e projetos
      </p>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#contact">
            <ArrowDown aria-hidden="true" />
            Entre em contato
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer">
            <FileText aria-hidden="true" />
            Currículo (PDF)
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </Button>
      </div>
    </section>
  );
}

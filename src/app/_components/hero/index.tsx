import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_URL } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="painel flex flex-col"
    >
      <a
        href="#inicio"
        className="self-start py-2 text-lg font-semibold"
        aria-label="Gabriel Martins, início"
      >
        GM
      </a>
      <div className="palco">
        <div className="sol" aria-hidden="true" />
        <div className="horizonte" aria-hidden="true" />
        <h1
          id="hero-heading"
          className="m-0 text-center text-[clamp(3.4rem,8vw,8rem)] leading-[0.84] font-extralight tracking-[-0.04em] text-tabua lowercase"
        >
          Gabriel
          <br />
          Martins
        </h1>
        <div className="sob flex flex-col items-center justify-center gap-4 px-2 text-center">
          <p className="max-w-[44ch] text-[clamp(18px,1.6vw,22px)] leading-snug font-light">
            Desenvolvedor Fullstack Pleno. Construo e-commerces, painéis
            administrativos e sistemas de saúde com React, Next.js, Node.js e
            TypeScript.
          </p>
          <p className="text-sm text-linho-gasto md:text-base">
            Rio de Janeiro, RJ · Remoto · Aberto a novas oportunidades e
            projetos
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Button asChild>
              <a href="#contato">
                <ArrowRight aria-hidden="true" />
                Entre em contato
              </a>
            </Button>
            <Button variant="fio" asChild>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden="true" />
                Currículo (PDF)
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="absolute right-12 bottom-4 flex items-center gap-1.5 text-sm text-linho-gasto max-[900px]:hidden"
      >
        role para o lado
        <ArrowRight className="size-4" aria-hidden="true" />
      </p>
    </section>
  );
}

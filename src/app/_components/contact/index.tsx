import { BookOpen, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_URL, CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";
import { ArteColisao } from "../colisao";
import type { Faixa } from "../projects";
import { CopyEmailButton } from "./copy-email-button";

// A decisão: email, currículo e LinkedIn, na mesma ordem da capa. GitHub e blog ficam numa linha quieta embaixo.
const links = [
  { href: CV_URL, label: "Currículo (PDF)", Icon: FileText },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
];
const extras = [
  { href: GITHUB_URL, label: "GitHub", Icon: Github },
  { href: BLOG_URL, label: "Blog", Icon: BookOpen },
];

/** Fecha o disco: o contato, e no canto a contracapa com a mesma colisão. */
export function Contact({ faixas }: { faixas: Faixa[] }) {
  return (
    <section
      id="contato"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="painel flex flex-col"
    >
      <h2 id="contact-heading" className="mb-7 text-headline">
        contato
      </h2>
      <p className="mb-5 max-w-[46ch] text-lg text-pretty text-linho-gasto">
        Aberto a novas oportunidades como desenvolvedor fullstack e a projetos
        freelance. O caminho mais rápido é o email.
      </p>
      {/* Desktop: a coluna para antes da contracapa, para o texto ampliado não correr por cima dela. */}
      <address className="relative z-10 not-italic min-[901px]:mr-[calc(min(28vw,400px)+48px)]">
        <a
          href={`mailto:${EMAIL}`}
          className="mb-6 inline-block min-h-11 text-item [overflow-wrap:anywhere] underline decoration-ferrugem decoration-2 underline-offset-[0.14em]"
        >
          {/* Se não couber, quebra antes do @, nunca no meio do nome. */}
          {EMAIL.split("@")[0]}
          <wbr />@{EMAIL.split("@")[1]}
        </a>
        <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <li>
            <CopyEmailButton />
          </li>
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              {/* O PDF abre numa aba: no celular, o download jogava no gerenciador de arquivos. */}
              <Button variant="fio" className="w-full sm:w-auto" asChild>
                <a href={href} target="_blank" rel="noopener">
                  <Icon aria-hidden="true" />
                  {label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-x-6 text-sm text-linho-gasto">
          {extras.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center gap-2 underline decoration-1 underline-offset-4 hover:text-linho hover:decoration-2"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </address>
      <p className="relative z-10 mt-auto pt-10 text-sm text-linho-gasto">
        {/* Sem ano: a página é gerada no build, e o ano congelaria até o próximo deploy. */}
        © Gabriel Martins.
      </p>
      <div
        // No celular a contracapa vira uma faixa no pé do painel: a página fecha como o disco, não no "©".
        // Margens em px, iguais ao padding do painel: em rem, com o texto ampliado, ela vazava pela direita.
        className="contracapa right-12 bottom-0 aspect-square w-[min(28vw,400px)] max-[900px]:relative max-[900px]:right-auto max-[900px]:-mx-[20px] max-[900px]:-mb-[56px] max-[900px]:mt-8 max-[900px]:aspect-auto max-[900px]:h-36 max-[900px]:w-auto"
        aria-hidden="true"
      >
        <ArteColisao
          rastros={faixas}
          className="absolute top-full left-0 w-[200%] -translate-x-1/2 -translate-y-1/2"
        />
        <p className="absolute top-4 left-5 text-sm font-medium">
          fim do lado a
        </p>
      </div>
    </section>
  );
}

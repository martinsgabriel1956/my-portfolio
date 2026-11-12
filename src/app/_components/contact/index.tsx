import { FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";
import { CopyEmailButton } from "./copy-email-button";

const links = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
  { href: GITHUB_URL, label: "GitHub", Icon: Github },
  { href: CV_URL, label: "Currículo (PDF)", Icon: FileText },
];

export function Contact() {
  return (
    <section
      id="contato"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="painel flex flex-col"
    >
      <h2
        id="contact-heading"
        className="mb-7 text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] font-extralight tracking-[-0.04em]"
      >
        contato
      </h2>
      <p className="mb-5 max-w-[46ch] text-lg text-linho-gasto">
        Aberto a novas oportunidades como desenvolvedor fullstack e a projetos
        freelance. O caminho mais rápido é o email.
      </p>
      <address className="relative z-10 not-italic">
        <a
          href={`mailto:${EMAIL}`}
          className="mb-6 inline-block text-[clamp(2rem,4.6vw,4.6rem)] leading-[1.05] font-extralight tracking-[-0.035em] [overflow-wrap:anywhere] underline decoration-ferrugem decoration-2 underline-offset-[0.14em]"
        >
          {EMAIL}
        </a>
        <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <li>
            <CopyEmailButton />
          </li>
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <Button variant="fio" className="w-full sm:w-auto" asChild>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" />
                  {label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </address>
      <p className="relative z-10 mt-auto pt-10 text-sm text-linho-gasto">
        © {new Date().getFullYear()} Gabriel Martins.
      </p>
      <div
        className="sol right-12 bottom-0 w-[min(30vw,440px)] max-[900px]:relative max-[900px]:right-auto max-[900px]:mt-9 max-[900px]:block max-[900px]:w-full"
        aria-hidden="true"
      />
    </section>
  );
}

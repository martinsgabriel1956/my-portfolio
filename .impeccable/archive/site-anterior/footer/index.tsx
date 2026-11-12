import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Gabriel Martins.
        </p>
        <a
          href="#content"
          className="-mr-3 inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Voltar ao topo
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

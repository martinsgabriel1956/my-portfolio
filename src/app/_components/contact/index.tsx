import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
              <Send className="h-4 w-4 text-secondary" />
              <span className="font-mono text-sm text-muted-foreground">
                Vamos conversar?
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Entre em <span className="gradient-text">contato</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estou disponível para novos projetos e oportunidades. Vamos
              construir algo incrível juntos!
            </p>
          </header>

          <address className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto not-italic">
            <a
              href="mailto:martinsgabrieldev@gmail.com"
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">
                martinsgabrieldev@gmail.com
              </p>
            </a>

            <a
              href="tel:+5521984144211"
              className="card-gradient border border-border rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
              <p className="text-sm text-muted-foreground">(21) 98414-4211</p>
            </a>
          </address>

          <article className="text-center card-gradient border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar um projeto?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou
              oportunidades para fazer parte da sua visão.
            </p>

            <nav className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-primary text-primary-foreground font-semibold"
                asChild
              >
                <a href="mailto:martinsgabrieldev@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 hover:border-primary/50"
                asChild
              >
                <a
                  href="https://linkedin.com/in/martins-gab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 hover:border-primary/50"
                asChild
              >
                <a
                  href="https://github.com/martinsgabriel1956"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
}

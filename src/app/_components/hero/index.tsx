"use client";

import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useHero } from "./useHero";

export function Hero() {
  const { nameText, roleText, showCursor, scrollToExperience, fullRole } =
    useHero();

  return (
    <section className="min-h-screen hero-gradient relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[1.2em]">
            <span className="text-foreground">{nameText.split(" ")[0]}</span>
            {nameText.includes(" ") && (
              <>
                {" "}
                <span className="gradient-text">{nameText.split(" ")[1]}</span>
              </>
            )}
            {roleText.length === 0 && (
              <span
                className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 min-h-[1.5em]">
            {roleText}
            {roleText.length > 0 && roleText.length < fullRole.length && (
              <span
                className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up delay-200">
            {["React", "Next.js", "Node.js", "TypeScript", "Fastify"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono bg-muted/50 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-primary text-primary-foreground font-semibold"
              asChild
            >
              <Link href="mailto:martinsgabrieldev@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Entre em contato
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 hover:border-primary/50 transition-all"
              asChild
            >
              <Link
                href="https://github.com/martinsgabriel1956"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in delay-400">
            <Link
              href="https://linkedin.com/in/martins-gab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/martinsgabriel1956"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="mailto:martinsgabrieldev@gmail.com"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            </Link>
          </div>
        </div>

        <Button
          variant="link"
          size="icon"
          onClick={scrollToExperience}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 animate-float cursor-pointer underline-offset-0"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
}

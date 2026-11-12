import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Martins | Desenvolvedor Fullstack",
    template: "%s | Gabriel Martins",
  },
  description:
    "Portfólio profissional de Gabriel Martins, Desenvolvedor Fullstack especializado em React, Next.js, Node.js, TypeScript e Fastify. Conheça minhas experiências, projetos e habilidades técnicas.",
  keywords: [
    "Gabriel Martins",
    "Desenvolvedor Fullstack",
    "Desenvolvedor",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Fastify",
    "Portfólio",
    "Desenvolvedor Web",
    "Frontend",
    "Backend",
    "JavaScript",
    "Programador",
  ],
  authors: [
    {
      name: "Gabriel Martins",
      url: "https://github.com/martinsgabriel1956",
    },
  ],
  creator: "Gabriel Martins",
  publisher: "Gabriel Martins",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.martinsgabrieldev.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.martinsgabrieldev.com.br",
    title: "Gabriel Martins | Desenvolvedor Fullstack",
    description:
      "Portfólio profissional de Gabriel Martins, Desenvolvedor Fullstack especializado em React, Next.js, Node.js, TypeScript e Fastify.",
    siteName: "Gabriel Martins - Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Martins | Desenvolvedor Fullstack",
    description:
      "Portfólio profissional de Gabriel Martins, Desenvolvedor Fullstack especializado em React, Next.js, Node.js, TypeScript e Fastify.",
    creator: "@martinsbiel99",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${albertSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

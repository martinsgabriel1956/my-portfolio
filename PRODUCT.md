# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers** screening a fullstack developer in a short scan (often under a minute, often on mobile). Their job: confirm seniority, stack, recent work and location/modality, then grab a CV or a contact.
- **Secondary: freelance clients** looking for someone to build an e-commerce, admin panel or dashboard. Their job: see comparable delivered work and reach out.

Recruiter-first: when the two audiences pull in different directions, the hiring reading wins and freelance stays as a clear secondary line.

## Product Purpose

Personal portfolio of Gabriel Martins, Desenvolvedor Fullstack Pleno, in Brazilian Portuguese. Success is a visitor leaving with a clear picture of what he builds and taking one action: email, LinkedIn, or downloading the CV.

## Positioning

Fullstack work concentrated in a few concrete domains: e-commerce (precious-metals store with Mercado Pago, live Metal Price API quotes and shipping calculation), admin panels and dashboards (auctions, energy data, store management) and health systems (scheduling, electronic medical records). Inferred from the real project content; confirm or sharpen with the owner.

## Operating Context

- Single page at `/`, sections: hero, experience, skills, education/certifications, contact.
- Content for experience, skills, education and certifications lives in Neon Postgres via Drizzle and is read at build time; the page is prerendered, so database edits ship on the next deploy.
- Deployed on Vercel. Canonical domain `https://www.martinsgabrieldev.com.br`.

## Capabilities and Constraints

- Location/modality to show: Rio de Janeiro, RJ · Remoto.
- Contact channels: email `martinsgabrieldev@gmail.com`, LinkedIn `linkedin.com/in/martins-gab`, GitHub `github.com/martinsgabriel1956`. The phone number is deliberately not published.
- CV: PDF served at `/curriculo-gabriel-martins.pdf` (file provided by the owner in `public/`).
- Experience projects carry name, description, techs and an optional `domain` (`ecommerce` | `admin` | `health`) that groups the proof under the three domains the hero promises; set via `drizzle/set_project_domains_manual.sql`. There are no project links or images in the data yet.

## Brand Commitments

- Name: Gabriel Martins; monogram "GM".
- Language: pt-BR, first person, direct.

## Evidence on Hand

- Real roles: Eternno (current, Fullstack Pleno), Dadoteca (Front-End), Luby Software (Fullstack), with named client projects (GTech Solutions, Website Leiloeiro Bruno Francesco, DadoHealth, IMI Hydronic Engineering, Lumi, In House Market).
- Education: Curso Técnico de Programador Web (Senac); courses from Rocketseat, Branas.io, JStack, FrontPush, EW Academy and others.
- Absent, do not fabricate: testimonials, metrics/outcomes with numbers, project screenshots, live/repo links, years-of-experience claims.

## Product Principles

1. Facts before effects: the first second shows who, what and where, never an animation.
2. The work is the proof: projects and roles carry the page; decoration never competes with them.
3. One clear next step at every decision point; no duplicated actions.
4. Nothing on the page depends on the visitor waiting for or tolerating a broken data source.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast ≥4.5:1, full keyboard path with visible focus, named controls, `prefers-reduced-motion` respected, touch targets ≥44px.

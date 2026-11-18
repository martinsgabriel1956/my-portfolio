-- Script manual: adiciona os projetos novos da Eternno (currículo 11/2026) em experiences.projects.
-- Entram no início do array para aparecerem antes de GTech e Website Leiloeiro.
-- Também reescreve experiences.technologies da Eternno (tirava duplicatas e faltava o stack atual).
-- Idempotente: não roda de novo se "LancesBr" já estiver lá.
-- Rode no Neon e faça um novo deploy (a página é gerada no build).

UPDATE experiences
SET projects = '[
  {
    "name": "Sistema Interno",
    "description": "ERP da joalheria: ledger de estoque, conciliação de scrap, contas a pagar e a receber com baixa automática por webhooks do Asaas e do Mercado Livre.",
    "techs": ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Redis", "BullMQ"],
    "domain": "admin"
  },
  {
    "name": "LancesBr",
    "description": "Leilões online com pregão em tempo real via WebSocket, painel do leiloeiro e observabilidade com Prometheus, Grafana e Loki.",
    "techs": ["Next.js", "Fastify", "TypeScript", "Redis", "BullMQ"],
    "domain": "admin"
  }
]'::jsonb || COALESCE(projects, '[]'::jsonb),
    technologies = '["Node.js", "TypeScript", "Express", "Fastify", "Next.js", "React", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "TanStack Query", "Zod", "Tailwind CSS", "Shadcn/UI", "CASL", "Clean Architecture", "DDD", "Vitest", "Playwright", "Testcontainers", "Docker", "Prometheus", "Grafana"]'::jsonb,
    updated_at = now()
WHERE company ILIKE 'eternno%'
  AND NOT COALESCE(projects, '[]'::jsonb) @> '[{"name": "LancesBr"}]'
RETURNING id, company, jsonb_path_query_array(projects, '$[*].name') AS projetos;

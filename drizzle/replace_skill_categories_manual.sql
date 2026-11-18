-- Script manual: troca as categorias de habilidades pelas do currículo (11/2026).
-- Apaga e recria tudo numa transação; a seção lê title + skills e ordena por "order".
-- icon/color são NOT NULL mas não aparecem mais na tela.
-- Rode no Neon e faça um novo deploy (a página é gerada no build).

BEGIN;

DELETE FROM skill_categories;

INSERT INTO skill_categories (title, icon, color, skills, "order") VALUES
  ('Linguagens',               'Code2',      'primary', '["TypeScript", "JavaScript"]', 1),
  ('Backend',                  'Server',     'primary', '["Node.js", "Fastify", "Express", "AdonisJS", "Prisma ORM", "Zod", "APIs REST", "WebSocket"]', 2),
  ('Arquitetura',              'Layers',     'primary', '["Clean Architecture", "DDD", "SOLID", "Design Patterns", "Unit of Work", "Controle de concorrência otimista"]', 3),
  ('Frontend',                 'Monitor',    'primary', '["React", "Next.js (App Router, Server Actions)", "Tailwind CSS", "Shadcn/UI", "Zustand", "Redux", "TanStack Query", "TanStack Table", "React Hook Form", "Styled-Components"]', 4),
  ('Testes',                   'FlaskConical','primary', '["Vitest", "Jest", "Testing Library", "Supertest", "Playwright", "Testcontainers", "TDD"]', 5),
  ('Banco de dados',           'Database',   'primary', '["PostgreSQL", "MySQL", "Redis"]', 6),
  ('Filas e eventos',          'Workflow',   'primary', '["BullMQ", "WebSocket", "Webhooks"]', 7),
  ('Pagamentos e integrações', 'CreditCard', 'primary', '["Mercado Pago", "Asaas", "Mercado Livre", "Correios", "Metal Price API"]', 8),
  ('Autenticação e segurança', 'Shield',     'primary', '["JWT", "Clerk", "OAuth", "RBAC (CASL)"]', 9),
  ('Observabilidade',          'Activity',   'primary', '["Prometheus", "Grafana", "Loki"]', 10),
  ('DevOps e ferramentas',     'Wrench',     'primary', '["Docker", "Git", "GitHub", "Linux", "CI/CD"]', 11),
  ('Mobile',                   'Smartphone', 'primary', '["React Native", "Expo"]', 12);

SELECT "order", title, jsonb_array_length(skills) AS qtd FROM skill_categories ORDER BY "order";

COMMIT;

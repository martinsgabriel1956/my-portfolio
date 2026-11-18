-- Script manual: sincroniza os cursos (tabela certifications) com o currículo (11/2026).
-- Casa pela instituição (ignora maiúsculas, espaços e pontuação: "EW Academy" = "EWAcademy"):
--   existe → atualiza título, descrição, ano e ordem (credential_url é mantido);
--   não existe → insere.
-- Cursos no banco que não estão no currículo ficam intactos; o SELECT final mostra tudo.
-- Ordem: mais recente primeiro. A tela mostra um ano só quando início = fim.
-- Rode no Neon e faça um novo deploy (a página é gerada no build).

BEGIN;

WITH cv(title, institution, yr, description, ord) AS (
  VALUES
    ('Desenvolvimento Java',            'Giuliana Silva Bezerra', 2026, 'OOP, JVM, Streams, Threads Virtuais, Generics e Maven.', 1),
    ('JS Expert',                       'EW Academy',             2025, 'TDD, Design Patterns, Node Streams, Performance, BDD e Segurança em JavaScript.', 2),
    ('FrontPush',                       'FrontPush',              2023, 'Fundamentos de front-end, UI design, animações e tipografia.', 3),
    ('JStack',                          'JStack',                 2023, 'Formação em JavaScript com React, Node.js e React Native.', 4),
    ('Ignite React',                    'Rocketseat',             2022, 'Aplicações web com React e seu ecossistema.', 5),
    ('Clean Code e Clean Architecture', 'Branas.io',              2022, 'TDD, Ports & Adapters, SOLID e Refatoração.', 6)
),
upd AS (
  UPDATE certifications c
  SET title       = cv.title,
      institution = cv.institution,
      description = cv.description,
      start_date  = make_date(cv.yr, 1, 1),
      end_date    = make_date(cv.yr, 1, 1),
      issue_date  = make_date(cv.yr, 1, 1),
      "order"     = cv.ord
  FROM cv
  WHERE lower(regexp_replace(c.institution, '\W', '', 'g'))
      = lower(regexp_replace(cv.institution, '\W', '', 'g'))
  RETURNING cv.institution
)
INSERT INTO certifications (title, institution, description, start_date, end_date, issue_date, "order")
SELECT title, institution, description, make_date(yr, 1, 1), make_date(yr, 1, 1), make_date(yr, 1, 1), ord
FROM cv
WHERE institution NOT IN (SELECT institution FROM upd);

SELECT id, "order", title, institution, extract(year FROM end_date) AS ano, credential_url
FROM certifications ORDER BY "order", id;

COMMIT;

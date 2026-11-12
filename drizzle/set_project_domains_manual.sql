-- Script manual: adiciona o domínio a cada projeto (campo "domain" dentro do JSON de experiences.projects)
-- Valores aceitos: ecommerce | admin | health. Projeto sem domain aparece em "Outros projetos".
-- Rode no Neon e faça um novo deploy (a página é gerada no build).

UPDATE experiences
SET projects = (
  SELECT jsonb_agg(
    CASE
      WHEN p->>'name' LIKE 'GTech Solutions%' THEN p || '{"domain": "ecommerce"}'
      WHEN p->>'name' LIKE 'IMI Hydronic%' THEN p || '{"domain": "ecommerce"}'
      WHEN p->>'name' LIKE 'Website Leiloeiro%' THEN p || '{"domain": "admin"}'
      WHEN p->>'name' = 'Lumi' THEN p || '{"domain": "admin"}'
      WHEN p->>'name' = 'In House Market' THEN p || '{"domain": "admin"}'
      WHEN p->>'name' = 'DadoHealth' THEN p || '{"domain": "health"}'
      ELSE p
    END
    ORDER BY ord
  )
  FROM jsonb_array_elements(projects) WITH ORDINALITY AS t(p, ord)
)
WHERE jsonb_typeof(projects) = 'array' AND jsonb_array_length(projects) > 0;

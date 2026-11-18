-- Script manual: tira o nível ("Pleno") do cargo atual na Eternno, para o portfólio não limitar oportunidades.
-- Só altera a linha cujo título ainda é exatamente "Desenvolvedor Fullstack Pleno"; rodar de novo não faz nada.
-- Rode no Neon e faça um novo deploy (a página é gerada no build).

UPDATE experiences
SET title = 'Desenvolvedor Fullstack'
WHERE company = 'Eternno'
  AND title = 'Desenvolvedor Fullstack Pleno';

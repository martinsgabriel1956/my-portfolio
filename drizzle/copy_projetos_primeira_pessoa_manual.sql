-- Script manual: textos dos projetos em primeira pessoa (critique de 2026-11-19).
-- Renomeia "Sistema Interno" (nome genérico) e reescreve as descrições numa voz só: "Desenvolvi…",
-- curtas o bastante para o cartão do carrossel. Também troca o hífen de "Ignite - React JS".
-- Revise os textos antes: eles afirmam autoria. Rode no Neon e faça um novo deploy (a página é gerada no build).

UPDATE experiences
SET projects = (
  SELECT jsonb_agg(
    CASE p->>'name'
      WHEN 'Sistema Interno' THEN p || '{"name": "ERP de joalheria", "description": "Desenvolvi o ERP da joalheria: ledger de estoque, conciliação de scrap e contas a pagar e a receber com baixa automática por webhooks do Asaas e do Mercado Livre."}'
      WHEN 'LancesBr' THEN p || '{"description": "Desenvolvi a plataforma de leilões online, com pregão em tempo real via WebSocket, painel do leiloeiro e observabilidade com Prometheus, Grafana e Loki."}'
      WHEN 'GTech Solutions' THEN p || '{"description": "Desenvolvi o e-commerce completo, com integração ao Mercado Pago, cotação em tempo real via Metal Price API e cálculo automático de frete."}'
      WHEN 'Website Leiloeiro Bruno Francesco' THEN p || '{"description": "Desenvolvi o site portfólio do leiloeiro, com painel administrativo para gerenciar leilões, histórico completo e SEO otimizado."}'
      WHEN 'DadoHealth' THEN p || '{"description": "Desenvolvi o sistema de gestão médica: remarcação de agendamentos, controle de horários bloqueados, prontuário eletrônico e análise de exames."}'
      WHEN 'IMI Hydronic Engineering' THEN p || '{"description": "Refatorei o ecossistema digital da empresa: site institucional, e-commerce e dashboard administrativa, com login e cadastro, edição de perfil, gestão de produtos, reCAPTCHA e mapas customizados."}'
      WHEN 'Lumi' THEN p || '{"description": "Construí a dashboard de visualização de dados energéticos: gráficos de consumo de energia, layout responsivo e autenticação completa."}'
      WHEN 'In House Market' THEN p || '{"description": "Desenvolvi a dashboard fullstack com relatórios, criação de lojas e cadastro de produtos. No fim do projeto, assumi o mobile: login social (Google, Facebook e Apple), comprovante de compra e novo fluxo de compra."}'
      ELSE p
    END
    ORDER BY ord
  )
  FROM jsonb_array_elements(projects) WITH ORDINALITY AS t(p, ord)
),
    updated_at = now()
WHERE jsonb_typeof(projects) = 'array' AND jsonb_array_length(projects) > 0
RETURNING id, company, jsonb_path_query_array(projects, '$[*].name') AS projetos;

UPDATE certifications
SET title = 'Ignite – React JS'
WHERE title = 'Ignite - React JS';

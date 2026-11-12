# Dores solucionáveis com software no Brasil (MEIs, pequenas empresas, profissionais), 2024-2026

Data da pesquisa: 09/10/2026. Método: WebSearch (cerca de 23 chamadas). Limitação importante: o Reddit não pôde ser acessado (WebFetch bloqueado em reddit.com, e buscas com `site:reddit.com` não retornaram threads). **Não há depoimentos de r/brdev, r/empreendedorismo etc. nestas notas.** As evidências vêm de imprensa, Sebrae, Serasa, Fenacon, Receita/BC (via imprensa), páginas do Reclame Aqui e blogs de fornecedores (sinalizados como fontes com viés comercial).

## Catálogo de dores (objetivo principal: 16 dores concretas)

### Takeaway
As dores mais fortes e mais bem documentadas em 2025-2026 vêm de mudanças regulatórias (NFS-e nacional obrigatória desde jan/2026, Receita Saúde desde jan/2025, testes de IBS/CBS desde ago/2026, escolha Simples "puro x híbrido" para 2027, Pix Automático) somadas a uma inadimplência recorde (9,1 mi de CNPJs negativados) e a uma operação comercial que roda quase toda no WhatsApp sem CRM.

### Cited Findings

#### D1. Emissão de NFS-e no padrão nacional: instabilidade, códigos e prefeituras não configuradas
- **Descrição:** a NFS-e padrão nacional virou obrigatória para todos os municípios em 01/01/2026 (emissor próprio integrado ou o emissor nacional gratuito); prefeituras que não aderirem arriscam perder transferências voluntárias (LC 214/2024, art. 62 §7º) — [Fenacon](https://fenacon.org.br/reforma-tributaria/nota-fiscal-de-servico-eletronica-nfs-e-sera-obrigatoria-a-partir-de-janeiro-de-2026/); [Jornal Contábil](https://jornalcontabil.com.br/noticia/nfs-e-padrao-nacional-passa-a-ser-uma-obrigacao-em-2026/)
- **Evidência:** no início de jan/2026 contadores relataram instabilidade, mensagens de "cadastro não encontrado" e divergência de códigos de serviço; a Receita disse que a maior parte das falhas vinha de municípios recém-conveniados sem configuração concluída e mandou o contribuinte procurar a prefeitura — [Fenacon](https://fenacon.org.br/reforma-tributaria/contadores-relatam-instabilidade-para-emissao-de-nfs-e-nacional-receita-orienta-buscar-os-municipios/)
- Blog de fornecedor relata falhas recorrentes desde janeiro/2026 (não recupera dados do contribuinte, não carrega emitente, trava ao finalizar), e que prefeituras dizem não ter autonomia técnica para corrigir — [Nota Gateway](https://notagateway.com.br/blog/instabilidades-no-emissor-nacional-da-nfs-e-geram-dificuldades-para-contribuintes-em-todo-o-pais/) (viés comercial)
- Adesão: em dez/2025 só 1.843 de 5.571 prefeituras estavam ativas (painel da Receita, segundo reportagem); 501 municípios ainda não tinham aderido em dez/2025 — [Contadores CNT](https://contadores.cnt.br/projetos/25/noticias/tecnicas/2025/12/17/501-municipios-ainda-nao-aderiram-a-nfs-e-prazo-e-ate-janeiro.html); 106 municípios pequenos ainda fora em jan/2026 — [CNB-SP](https://cnbsp.org.br/?p=57416); em ago/2025, de 1.472 conveniados só 291 emitiam de fato — [Reforma Tributária](https://www.reformatributaria.com/tecnologia/governo-informa-adesao-de-1-472-municipios-a-nfs-e-nacional/)
- **MEI (antecedente, 2023, flag de antiguidade):** quando a obrigatoriedade para MEI começou (01/09/2023), houve falhas de login/emissão; relatos de que só se conseguia emitir de madrugada — [JC Concursos](https://jcconcursos.com.br/noticia/brasil/meis-enfrentam-instabilidade-no-novo-sistema-de-emissao-de-nfs-e-saiba-o-que-fazer-116527); [InfoMoney](https://www.infomoney.com.br/?p=2234057). O portal nacional usa lista de serviços diferente da lista de CNAE, o que confunde MEIs que atendem empresas — [Jornal do Comércio (2023)](https://www.jornaldocomercio.com/cadernos/jc-contabilidade/2023/09/1124194-mudancas-para-o-mei-e-as-reflexoes-sobre-a-importancia-do-contador.html)
- **Quem sofre:** MEIs e prestadores de serviço do Simples; escritórios contábeis que emitem por clientes; empresas com clientes em vários municípios.
- **Frequência/intensidade:** mensal a cada emissão; alta em picos (virada de ano, mudança de layout).
- **Soluções existentes:** emissor nacional (gratuito, web + app NFS-e Mobile), Conta Azul, Omie, Bling, NFE.io, eNotas, Nota Gateway. **Lacuna:** no Reclame Aqui da Conta Azul, cliente relata que o suporte mandou emitir no site da prefeitura e importar, mas a importação falhou por layout incompatível, terminando em digitação manual — [Reclame Aqui Conta Azul](https://www.reclameaqui.com.br/contaazul/falhas-de-integracao-bancaria-e-emissao-importacao-de-notas-fiscais-alem-de-pessimo-atendimento_lmb4X8VI5tV1AyPe/); outro relata certificado A3 deixar de ser reconhecido e bloquear emissão (via resumo da página de reclamações) — [Reclame Aqui Conta Azul](https://www.reclameaqui.com.br/empresa/contaazul/lista-reclamacoes/)
- **Ideia de software:** "emissor resiliente" via WhatsApp/PWA: o MEI manda "nota 500 reais pro CNPJ X, serviço Y" e o sistema (a) mapeia CNAE→código de tributação nacional automaticamente, (b) faz fila/retry quando o ADN está instável e avisa quando emitiu, (c) consulta se o município do tomador/prestador está ativo e configurado antes de tentar, (d) guarda log de tentativas como prova de indisponibilidade.

#### D2. MEI: DAS em atraso, DASN-SIMEI esquecida e risco de exclusão
- **Evidência:** cerca de 6,2 mi de MEIs irregulares em 2025 (~40% dos ativos), segundo reportagens que citam a Receita — [meutudo](https://meutudo.com.br/blog/?p=194723); 41,2% inadimplentes (~6,5 mi) em abril, segundo maior número da série — [Diário do Comércio](https://diariodocomercio.com.br/em-minas-600-mil-meis-estao-inadimplentes/); Pernambuco com 53% de MEIs inadimplentes — [Folha PE](https://www.folhape.com.br/economia/meis-tem-ate-31-de-agosto-para-regularizar-dividas-em-pernambuco-ha/194559/). Números variam entre fontes; não encontrei o boletim oficial.
- DASN-SIMEI fora do prazo (31/05) gera multa de 2% ao mês, mínimo R$ 50, teto 20%; MEI segue irregular até entregar — [Jornal Contábil](https://jornalcontabil.com.br/noticia/mei-nao-enviou-a-dasn-simei-veja-como-fazer-a-declaracao-atrasada/); manchete de mai/2026 fala em ~10 milhões de MEIs sob risco de multa — [Portal Tela](https://www.portaltela.com/noticias/economia/2026/05/24/risco-de-multa-para-10-milhoes-de-meis-termina-em-uma-semana/)
- Inadimplência leva a exclusão do Simples, Cadin e impossibilidade de CND; parcelamento em até 60x (mínimo R$ 50) — [meutudo](https://meutudo.com.br/blog/?p=194723). Receita alerta para golpes de SMS/WhatsApp com falso cancelamento de CNPJ (mesma fonte).
- 35,83% dos MEIs nunca emitiram nota e 27,53% só emitem quando o cliente pede (pesquisa MaisMei, 5.640 usuários; viés comercial) — [Acionista](https://acionista.com.br/mais-de-60-dos-meis-nao-tem-o-habito-de-emitir-nota-fiscal-mostra-pesquisa/)
- **Quem sofre:** MEIs de baixa renda/baixa escolaridade digital.
- **Soluções existentes:** App MEI oficial, MaisMei, Contabilizei/Agilize (pagas), bancos digitais (Cora, InfinitePay) com lembretes de DAS. **Lacuna:** não achei avaliação independente de eficácia dessas soluções.
- **Ideia:** assistente "MEI em dia" por WhatsApp: lembrete do DAS com Pix copia-e-cola, entrega guiada da DASN com faturamento pré-calculado a partir das notas emitidas e dos Pix recebidos, detecção de débitos antigos e simulação de parcelamento, e canal "isso é golpe?" para validar mensagens suspeitas.

#### D3. Teto do MEI (R$ 81 mil, sem reajuste desde 2018) e desenquadramento por cruzamento de dados
- **Evidência:** teto segue R$ 81 mil em 2026; Ministério do Empreendedorismo descartou mudança em 2026 — [meutudo](https://meutudo.com.br/blog/noticias/2026/05/12/ministerio-confirma-que-limite-de-faturamento-do-mei-nao-muda-em-2026/); PLP 186/2026 (Executivo, jun/2026) propõe R$ 110 mil em 2027 e R$ 140 mil em 2028 e dois empregados; mais de 570 mil MEIs desenquadrados em 2024 por excesso de faturamento e 44.565 até jun/2026 só pelo novo cruzamento com rendimentos no CPF — [Meu Contador Online](https://www.meucontadoronline.com.br/blog/novo-teto-do-mei-reforma/) (blog de contabilidade; status de tramitação não confirmado). Outra fonte cita teto de R$ 130 mil — [AmdJus](https://amdjus.com.br/projeto-de-lei-eleva-teto-de-faturamento-do-mei-para-r-130-mil-anuais/) (divergência).
- **Quem sofre:** MEIs que crescem perto do teto e misturam Pix pessoal e do CNPJ.
- **Ideia:** "termômetro do teto": soma notas + Pix recebidos (CPF e CNPJ, via Open Finance) e projeta o mês em que o teto estoura; simula custo de virar ME no Simples (Anexo III/V, Fator R) e gera checklist de transição.

#### D4. Reforma Tributária: campos IBS/CBS (testes desde ago/2026) e emissores/ERPs não prontos
- **Evidência:** testes dos campos IBS/CBS em NF-e/NFC-e desde 03/08/2026, com alíquota de teste de 1% (0,9% CBS + 0,1% IBS), só informativa; obrigação em 2026 só para Lucro Real/Presumido; Simples não precisa preencher em 2026, mas o Sebrae recomenda verificar se o emissor estará pronto para 2027 — [Agência Sebrae](https://agenciasebrae.com.br/economia-e-politica/o-que-os-pequenos-negocios-precisam-saber-sobre-os-novos-impostos-na-nota-fiscal/)
- Divergência sobre penalidades: Receita fala em não aplicar multas imediatas em 2026 — [Band](https://www.band.com.br/economia/reforma-tributaria-empresas-devem-ajustar-notas-em-2026-para-evitar-multas); artigo jurídico afirma que notas fora do padrão podem ser rejeitadas desde agosto — [AmdJus](https://amdjus.com.br/?p=38941). Ato Conjunto 1/2025 suspendeu por 3 meses a multa de 1% por campos ausentes — [Fenacon](https://fenacon.org.br/reforma-tributaria/contadores-relatam-instabilidade-para-emissao-de-nfs-e-nacional-receita-orienta-buscar-os-municipios/)
- Na NFS-e só 3,78% seguiam o novo padrão (dado citado pelo CRCGO, data imprecisa) — via [Agência Sebrae / Fenacon](https://fenacon.org.br/reforma-tributaria/o-que-os-pequenos-negocios-precisam-saber-sobre-os-novos-impostos-na-nota-fiscal/)
- Transição de 2026 a 2033; ICMS/ISS migram para IBS a partir de 2029 — [Cora](https://www.cora.com.br/blog/reforma-tributaria-2026/)
- **Quem sofre:** pequenas empresas do Presumido; empresas do Simples que compram de fornecedores do regime regular; software houses pequenas de ERP/PDV regionais que precisam atualizar layouts.
- **Ideia:** "validador de XML pré-reforma": upload/integração do XML das notas emitidas e recebidas, aponta campos IBS/CBS ausentes ou inconsistentes (cClassTrib, CST), relatório por fornecedor e aviso ao contador. Público B2B: contadores e pequenos ERPs.

#### D5. Simples Nacional "puro x híbrido" em 2027: decisão semestral sem ferramenta de simulação
- **Evidência:** a partir de 2027 a empresa do Simples pode manter IBS/CBS no DAS ou apurá-los no regime regular (opção semestral); no modelo puro, o cliente PJ aproveita crédito limitado, o que pode tirar competitividade em cadeias B2B; o híbrido tende a encarecer para quem vende a consumidor final e aumenta o compliance — [Econet](https://blog.econeteditora.com.br/simples-nacional-puro-ou-hibrido/); [Meu Contador Online](https://www.meucontadoronline.com.br/blog/simples-nacional-hibrido-2027/). Fontes divergem sobre prazo (set/2026 ou 30/09/2026); não verifiquei prorrogação — [Foco Tributário](https://focotributario.com.br/o-fim-do-simples-como-voce-conhece-o-que-muda-com-ibs-e-cbs-em-2027/)
- **Quem sofre:** prestadores e indústrias do Simples que vendem para empresas; contadores que precisam simular para dezenas de clientes.
- **Ideia:** simulador "puro x híbrido" alimentado pelo XML de compras e vendas dos últimos 12 meses (perfil de clientes PJ/PF, créditos de entrada), com relatório para o contador apresentar ao cliente e recálculo a cada semestre.

#### D6. Contadores: cobrar documentos dos clientes, retrabalho e falta de integração
- **Evidência:** pesquisa IOB com CFC e Fenacon (393 profissionais): 34% apontam excesso de retrabalho manual, 20% falta de tempo para consultoria, 17% dificuldade de integração entre sistemas, 15% erros humanos em tarefas repetitivas (data do levantamento não clara) — [Jornal Contábil](https://jornalcontabil.com.br/noticia/contador-esta-sobrecarregado-os-desafios-que-estao-pesando-na-profissao/)
- Estudo acadêmico (2025) sobre percepção de contadores: obrigações acessórias crescem em volume e complexidade e consomem tempo que iria para consultoria — [Revista CAFI/PUC-SP](https://revistas.pucsp.br/index.php/CAFI/article/download/73631/49570/254415)
- Levantamento Potencialize (400+ empresas contábeis): retrabalho compromete até 25% da produtividade; maioria evitável com controles simples (citado por fornecedor) — [Jettax](https://www.jettax.com.br/blog/manual-para-reduzir-retrabalho-em-escritorios-contabeis-sobrecarregados/)
- Fórum Contábeis: tópico "clientes desorganizados"; contador sugere listar documentos por e-mail, cobrar com regularidade e documentar por escrito as consequências da falta de informação — [Contábeis fórum](https://www.contabeis.com.br/forum/contabilidade/333943/clientes-desorganizados/); [Contábeis artigo](https://www.contabeis.com.br/artigos/5338/o-que-fazer-quando-o-cliente-nao-encaminha-a-documentacao-mensal-correta/)
- Ciclo mensal do Simples descrito como 21 tarefas manuais, do pedido de documentos ao envio do DAS (estimativa de texto sem fonte independente) — [AmdJus](https://amdjus.com.br/empresas-de-contabilidade-que-adotam-o-simples-nacional-automatizaram-21-processos-anteriormente-manuais/)
- **Soluções existentes:** Domínio/Thomson, Questor, Alterdata, Nibo, Acessórias, Gestta, Onvio, Jettax, OHub. **Lacuna:** maioria são suítes caras; a cobrança de documentos ainda roda por e-mail/WhatsApp manual.
- **Ideia:** "régua de cobrança de documentos" via WhatsApp para escritórios contábeis: checklist por cliente/competência, lembretes escalonados, upload por link ou foto no WhatsApp, OCR e classificação, painel "quem está atrasando o fechamento", e captura automática de notas emitidas/recebidas pelo CNPJ (ADN NFS-e, SEFAZ) para pedir só o que falta.

#### D7. Vendas, pedidos e atendimento no WhatsApp sem CRM
- **Evidência:** 82% dos MEIs e MPEs usam WhatsApp como principal canal de comunicação e vendas (Pulso dos Pequenos Negócios, 12ª ed., 2026); Instagram 57%, Facebook 30% — [Agência Sebrae](https://agenciasebrae.com.br/dados/whatsapp-se-consolida-nas-vendas-on-line-enquanto-facebook-e-lojas-proprias-perdem-folego/)
- Mais de 80% dos pequenos prestadores de serviço falam com clientes pelo WhatsApp; só 6% apontam CRM como importante (2% no Sudeste) — Pesquisa Serviço 2025 (1.300+ negócios) — [Agência Sebrae](https://agenciasebrae.com.br/cultura-empreendedora/whatsapp-e-o-principal-meio-de-comunicacao-para-80-dos-negocios-de-servico/)
- Empreendedora entrevistada diz que muitas empresas crescem com atendimento improvisado e sem pós-venda estruturado — [Diário do Comércio](https://diariodocomercio.com.br/negocios/whatsapp-pequenos-negocios-sebrae/)
- Soluções multiatendimento também geram queixas: cliente da ChatGuru relata semanas de instabilidade e perda de negócios — [Reclame Aqui ChatGuru](https://www.reclameaqui.com.br/chatguru/instabilidade-do-sistema-chatguru-causando-perda-de-negocios_v9ONRCy693jdPOQs/)
- **Ideia:** "mini-CRM dentro do WhatsApp" para o micro: transforma conversas em pedidos (itens, valor, entrega), gera link Pix/cobrança, marca "aguardando pagamento", dispara pós-venda e recompra. Diferencial: zero configuração, preço de MEI, uso da API oficial (evitar banimento).

#### D8. Inadimplência recorde de empresas (e cobrança manual)
- **Evidência:** 9,1 mi de CNPJs inadimplentes em jun/2026 (recorde da série), dívidas de R$ 232,9 bi (+16,67% a/a); MPEs são 8,6 mi, com 6,9 contas inadimplidas em média e dívida média de R$ 23.181,56; Serviços = 55,7% dos negativados — [Serasa Experian](https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/recorde-inadimplencia-das-empresas-superou-9-milhoes-de-reais-em-junho-e-dividas-chegaram-a-232-bilhoes-de-reais-revela-serasa-experian/); abril/2026 foi a 1ª vez acima de 9 mi — [Serasa Experian](https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/recorde-historico-inadimplencia-alcancou-9-milhoes-de-empresas-brasileiras-em-abril-revela-serasa-experian)
- **Leitura:** a pequena empresa é ao mesmo tempo devedora e credora; quem não recebe do cliente atrasa fornecedor.
- **Soluções existentes:** Asaas, Iugu, Vindi, Cora, InfinitePay, Conta Azul (régua de cobrança). **Lacuna:** não achei reclamações específicas do Asaas sobre saldo retido (a busca trouxe homônimo "Asas") — [Reclame Aqui](https://www.reclameaqui.com.br/asas/sem-suporte-saldo-bloqueado_VUBT-EHMbDtlC1AT/); lacuna de evidência, não de produto.
- **Ideia:** régua de cobrança "humana" pelo WhatsApp com tom configurável, link Pix/boleto, proposta automática de parcelamento, e score simples de risco do cliente com base em histórico de pagamentos próprio.

#### D9. Pix: conciliação manual (quem pagou o quê?)
- **Evidência (fontes de fornecedores):** nome do pagador no extrato muitas vezes não bate com o cliente cadastrado (conta de terceiro, empresa do cliente); cada Pix precisa ser ligado à nota/pedido, senão a receita fica "solta" no extrato; com muitas vendas pequenas a conciliação manual fica inviável — [Mercado Pago](https://www.mercadopago.com.br/blog/conciliar-recebimentos-pix-fechamento-caixa); [Contabilidade Zen](https://www.contabilidadezen.com.br/blog/pix-empresarial-conciliacao-2026/)
- **Gap:** não encontrei pesquisa quantitativa independente sobre horas gastas em conciliação de Pix.
- **Ideia:** conciliador Pix via Open Finance/API Pix: QR dinâmico com txid por pedido; para Pix por chave estática, matching por valor+horário+nome com fila de "não identificados" para o dono confirmar com um toque; exportação para o contador.

#### D10. Pix Automático: recorrência nova, adesão lenta do lado recebedor
- **Evidência:** lançado em 16/06/2025 (Resolução BCB 402); não depende de convênio bilateral como o débito automático; pensado inclusive para MEIs, academias, escolas, condomínios — [Mercado & Consumo](https://mercadoeconsumo.com.br/22/07/2024/meios-de-pagamento/lancamento-do-pix-automatico-e-definido-para-junho-de-2025-pelo-bc/); [Itaú Empresas](https://blog.itau.com.br/empresas/pix-automatico)
- Recebedores passaram de ~1 mil (dez/2025) para ~14 mil (data não precisa); BC chama a fase de "teste" e cita desafios de adaptação via API Pix do lado recebedor — [Finsiders](https://finsidersbrasil.com.br/?p=372876)
- Restrições: recebedor precisa de CNPJ ativo há 6+ meses (Resolução BCB 482); pagador não paga tarifa, recebedor pode pagar — mesma fonte. Afirmação de "obrigatório a partir de 13/10/2025" (ozai.com.br) **não confirmada** em fonte oficial.
- **Quem sofre:** personal trainers, escolas pequenas, academias, psicólogos com pacote mensal, condomínios, SaaS pequenos — hoje cobram mensalidade "na mão" por Pix e lembrete.
- **Ideia:** "mensalidade com Pix Automático em 5 minutos" para quem não tem dev: página de adesão com QR de autorização, gestão de planos/turmas, retentativa, aviso de cancelamento, NFS-e automática no pagamento. Integra com PSPs que já expõem a API (Asaas, Efí, Inter etc.).

#### D11. Profissionais de saúde PF: Receita Saúde obrigatório + Carnê-Leão
- **Evidência:** desde 01/01/2025 médicos, dentistas, psicólogos, fisioterapeutas, fonos e TOs PF devem emitir recibo pelo Receita Saúde (app da Receita ou e-CAC, gov.br prata/ouro), um recibo por pagamento, com data do pagamento; prazo retroativo de 2025 acabou em 28/02/2026 (ADE Cofis 11/2025) — [Receita Federal Perguntas e Respostas](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude); [Legismap](https://legismap.com.br/conteudos/artigos-e-noticias/prazo-para-emissao-do-recibo-eletronico-receita-saude-ano-calendario-2025)
- 1.368.312 recibos no 1º mês — [COAD](https://coad.com.br/home/noticias-detalhe/130273/receita-saude-simplifica-a-vida-de-milhares-de-brasileiros-e-reduz-riscos-fiscais-afirma-a-rfb); portais dizem que muitos profissionais não se adequaram; multa de R$ 100/mês citada por blog, não confirmada oficialmente — [Agilize](https://agilize.com.br/artigos/?p=3736)
- **Soluções existentes:** iClinic, Doctoralia, Psicomanager, Amplimed (gestão de agenda/prontuário). **Lacuna:** não confirmei se emitem Receita Saúde automaticamente (não parece haver API pública de emissão; verificar).
- **Ideia:** agenda + cobrança + "lembrete de recibo" para psicólogo PF: quando o Pix da sessão cai, gera o rascunho do recibo (CPF, valor, descrição técnica, data do pagamento) e um atalho para emitir; ao fim do mês, soma para o Carnê-Leão.

#### D12. Faltas (no-show) em clínicas, consultórios e salões
- **Evidência:** rede pública de Goiás: ~26% dos pacientes faltam; o estado implantou confirmação por WhatsApp — [Mais Goiás](https://www.maisgoias.com.br/cidades/26-dos-pacientes-nao-comparecem-a-consultas-e-exames-agendados-em-goias-diz-governo/); material setorial diz que no-show pode comprometer até 32% da agenda de clínicas (sem fonte primária) — [Acontecendo Aqui](https://acontecendoaqui.com.br/empreendedorismo/alerta-falta-de-pacientes-pode-comprometer-ate-32-da-agenda-de-clinicas-no-pais/); Clínica Dimeg remanejou 3 mil horários em 4 meses com IA de confirmação — [Baguete](https://www.baguete.com.br/noticias/dimeg-confirma-consultas-com-nina-tecnologia)
- Fornecedor observa que lembretes resolvem esquecimento, mas não transporte/horário; cancelar só por telefone faz o paciente desistir de avisar — [Digisac](https://digisac.com.br/blog/como-reduzir-faltas-de-pacientes)
- **Soluções existentes:** Trinks, Avec (ex-Beauty Date), Belasis, iClinic, Doctoralia. Reclamação (2021, antiga) de agendamento confirmado pela Trinks em unidade que já tinha mudado de endereço — [Reclame Aqui](https://www.reclameaqui.com.br/esmalteria-nacional/a-trinks-arruinou-meu-fim-de-ano_tNps3umeOzXDohcv/)
- **Ideia:** "lista de espera inteligente": confirmação pelo WhatsApp com botão "não vou", que libera o horário e oferece automaticamente para a lista de espera; sinal via Pix para horários nobres; política de cancelamento aceita no agendamento.

#### D13. Condomínios: inadimplência e prestação de contas
- **Evidência:** inadimplência de 17% no 1º tri/2025 (metodologia não clara); protestos de dívidas condominiais em cartórios de SP mais que dobraram — [O Antagonista](https://oantagonista.com.br/ladooa/imoveis/inadimplencia-atinge-17-e-ameaca-funcionamento-de-condominios/); taxa condominial subiu 6,8% em 2025 vs IPCA 4,26%, média R$ 828 (Superlógica) — [Itatiaia](https://www.itatiaia.com.br/economia/negocios/condominio-sobe-acima-da-inflacao-e-inadimplencia-preocupa-moradores-e-sindicos/)
- Prestação de contas anual em assembleia é obrigatória; deve mostrar inadimplência sem expor nomes; balanço rejeitado leva a auditoria — [SíndicoNet](https://www.sindiconet.com.br/informese/como-apresentar-a-prestacao-de-contas-do-condominio-administracao-assembleias-de-condominio/amp)
- **Soluções existentes:** Superlógica, uCondo, TownSq, Condo Conta. **Lacuna:** foco em administradoras; condomínios pequenos com síndico morador ficam em planilha.
- **Ideia:** "condomínio pequeno" (até ~40 unidades): cobrança mensal por Pix Automático, régua de cobrança, prestação de contas mensal automática (extrato conciliado + comprovantes) visível aos moradores, e ata/assembleia digital.

#### D14. Aluguel direto entre proprietário e inquilino (sem imobiliária)
- **Evidência (fraca):** imobiliárias ainda usam processos manuais no repasse de aluguel, gerando atritos com proprietários — [Jetimob](https://jetimob.com/blog/gestao-alugueis-imoveis) (fornecedor); reajuste por IGP-M exige cálculo e negociação, muitas vezes por aditivo — [Serasa](https://www.serasa.com.br/blog/reajuste-do-aluguel-entenda-como-funciona/) (matéria antiga, 2020-2022).
- **Gap:** não encontrei dados confiáveis de 2024-2026 sobre inadimplência de aluguel direto nem depoimentos de pequenos proprietários.
- **Ideia:** "aluguel sem imobiliária": contrato modelo, cobrança via Pix Automático, cálculo automático de reajuste (IGP-M/IPCA), recibos e informe de aluguéis para IRPF/Carnê-Leão. Validar demanda antes.

#### D15. Freelancers/devs PJ recebendo do exterior: câmbio, nota de exportação e IOF
- **Evidência:** serviço exportado deve ter NFS-e como exportação (isenta de ISS/PIS/Cofins se o resultado ocorre no exterior e o pagador é não residente); invoice não substitui a NFS-e; sem contrato de câmbio a receita perde o enquadramento de exportação — [Agilize](https://agilize.com.br/artigos/?p=4340); [Contabilidade Zen](https://www.contabilidadezen.com.br/blog/como-receber-dolar-pj-brasil-tributacao-2026/)
- Fontes divergem sobre o IOF aplicável (0,38% vs 1,1%) — [Contabilidade Zen tabela 2026](https://www.contabilidadezen.com.br/blog/tabela-custos-remessa-internacional-2026/); Husky declara taxa de até 1% (US$ 10 até US$ 1.000) — [Nomad/Husky](https://www.nomadglobal.com/conteudos/abrir-conta-husky-by-nomad) (vendor)
- **Quem sofre:** devs PJ de r/brdev (não consegui acessar o Reddit para depoimentos), designers, tradutores.
- **Ideia:** "invoice→NFS-e de exportação": gera invoice em USD, acompanha o fechamento de câmbio (Husky/Wise/Remessa), converte pela taxa do dia, emite a NFS-e nacional como exportação com campos certos, e calcula Fator R/DAS. Comparador de custo efetivo (spread + tarifa + IOF) por plataforma.

#### D16. Suporte ruim e lock-in dos ERPs para PMEs (Conta Azul, Omie, Bling)
- **Evidência:** Conta Azul tem nota 8,4 no Reclame Aqui (fev-jul/2026), 478 reclamações no período, ~91% resolvidas, 1ª resposta ~8 dias; queixas sobre IA de atendimento que promete transferir para humano e não transfere, dificuldade para emitir NF-e de produto logo após contratar — [Reclame Aqui Conta Azul](https://www.reclameaqui.com.br/contaazul/suporte-prometido-nao-cumprido-e-dificuldade-para-emitir-nota-fiscal-de-produto_nw_hfuC7VQL7gOo7/); problemas de mudança de plano/renovação — [Reclame Aqui](https://www.reclameaqui.com.br/contaazul/conta-azul-falha-grave-de-atendimento-e-descaso-com-cliente-na-alteracao-de-plano-e-renovacao_l_KmX2tP5mWhi_se/); cobrança indevida após falha na reativação de licença — [Reclame Aqui](https://www.reclameaqui.com.br/contaazul/conta-azul-cobranca-indevida-e-paralisacao-de-servicos-apos-falha-na-reativacao-de-licenca_A6mYSxb_IBz8yRZI/)
- Omie: 1.018 reclamações (jan-jun/2026); relatos de dias sem retorno para cancelar e demora no estorno — [Reclame Aqui Omie](https://www.reclameaqui.com.br/omiexperience/tentativa-de-cancelamento-de-contratacao-omie-sem-retorno_6iGrbBNms2lX_gIW/); [lista](https://www.reclameaqui.com.br/empresa/omiexperience/lista-reclamacoes/)
- Bling: reputação "Ótima" mar-jul/2026; principais categorias "software" (~9,3%) e "cobrança indevida" (~5,5%) — [Reclame Aqui Bling](https://www.reclameaqui.com.br/empresa/bling/)
- **Ideia:** não é "mais um ERP", e sim produtos de nicho estreito (D1, D6, D9) com suporte humano no WhatsApp como diferencial, cancelamento em 1 clique e exportação total de dados.

### Inferences
- O padrão comum é a **transição regulatória empurrando trabalho para quem não tem equipe**: NFS-e nacional (2026), Receita Saúde (2025), IBS/CBS (2026-2027), Pix Automático (2025). Cada transição gera janela de 12-24 meses para ferramentas pequenas e focadas.
- **WhatsApp é a interface**: com 82% vendendo pelo WhatsApp e só 6% valorizando CRM, produtos que exigem que o MEI "entre num sistema" competem mal; produtos que operam dentro do WhatsApp têm vantagem.
- **Contadores são o canal B2B2C**: uma ferramenta que reduz retrabalho do escritório (D6, D4, D5) é vendida uma vez e alcança dezenas de PMEs.
- **Maior intensidade e evidência:** D1, D2, D6, D7, D8. **Mais nova/menos disputada:** D5, D10, D11. **Evidência mais fraca:** D14, D9 (só fontes de fornecedores).

### Gaps
- **Reddit inacessível**: sem depoimentos de r/brdev, r/empreendedorismo, r/investimentos. Recomenda-se coleta manual.
- Oficinas mecânicas e personal trainers: não pesquisados por limite de chamadas; nenhuma evidência coletada.
- Status atual (out/2026) do PLP 186/2026 e prazo/prorrogação da opção "Simples híbrido" não confirmados.
- Reclame Aqui do Asaas, Nuvemshop, Tiny, Nibo, Trinks e iClinic não verificados diretamente (buscas retornaram homônimos).
- LGPD: não pesquisado; nenhuma evidência de dor específica coletada.

## O que MEIs e pequenos empresários mais reclamam (tempo, burocracia, taxas)?

### Takeaway
Burocracia fiscal recorrente (DAS, DASN, nota fiscal) e fluxo de caixa (inadimplência de clientes) dominam; a dimensão "taxa" aparece principalmente em pagamentos/câmbio.

### Cited Findings
- ~40% dos MEIs inadimplentes com o DAS em 2025 — [meutudo](https://meutudo.com.br/blog/?p=194723)
- Mais de 60% dos MEIs não emitem nota habitualmente (MaisMei, viés comercial) — [Acionista](https://acionista.com.br/mais-de-60-dos-meis-nao-tem-o-habito-de-emitir-nota-fiscal-mostra-pesquisa/)
- Teto de R$ 81 mil sem correção desde 2018 e desenquadramentos em massa — [Meu Contador Online](https://www.meucontadoronline.com.br/blog/novo-teto-do-mei-reforma/)
- 8,6 mi de MPEs negativadas em jun/2026 — [Serasa Experian](https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/recorde-inadimplencia-das-empresas-superou-9-milhoes-de-reais-em-junho-e-dividas-chegaram-a-232-bilhoes-de-reais-revela-serasa-experian/)

### Inferences
- A inadimplência do DAS provavelmente mistura falta de caixa com esquecimento/desconhecimento; lembretes resolvem só a segunda parte.

### Gaps
- Sem pesquisa direta de "tempo gasto com burocracia" por MEI em 2025-2026 (o Doing Business antigo não foi consultado).

## O que o Reclame Aqui revela sobre software para PMEs?

### Takeaway
Os temas recorrentes são: emissão/importação de nota fiscal travada, atendimento por IA sem passagem para humano, demora de suporte e dificuldade para cancelar/estornar.

### Cited Findings
- Conta Azul: importação de NFS-e falha por layout; IA promete humano que não vem; problemas de renovação — [Reclame Aqui](https://www.reclameaqui.com.br/contaazul/falhas-de-integracao-bancaria-e-emissao-importacao-de-notas-fiscais-alem-de-pessimo-atendimento_lmb4X8VI5tV1AyPe/); [Reclame Aqui](https://www.reclameaqui.com.br/contaazul/suporte-prometido-nao-cumprido-e-dificuldade-para-emitir-nota-fiscal-de-produto_nw_hfuC7VQL7gOo7/)
- Omie: cancelamento sem retorno e demora de estorno — [Reclame Aqui](https://www.reclameaqui.com.br/omiexperience/tentativa-de-cancelamento-de-contratacao-omie-sem-retorno_6iGrbBNms2lX_gIW/)
- Bling: "software" e "cobrança indevida" como principais categorias — [Reclame Aqui](https://www.reclameaqui.com.br/empresa/bling/)
- ChatGuru: instabilidade por semanas e perda de vendas — [Reclame Aqui](https://www.reclameaqui.com.br/chatguru/instabilidade-do-sistema-chatguru-causando-perda-de-negocios_v9ONRCy693jdPOQs/)

### Inferences
- As grandes têm reputação agregada boa (Conta Azul 8,4; Bling "Ótima"), então a brecha não é qualidade geral, e sim **atendimento humano rápido e integrações fiscais municipais**.

### Gaps
- Sem amostragem sistemática (contagem por categoria) de reclamações; dados são de casos individuais e resumos das páginas.

## Que mudanças regulatórias de 2025-2026 criam demanda nova?

### Takeaway
NFS-e nacional obrigatória (jan/2026), Receita Saúde (jan/2025), testes IBS/CBS (ago/2026) com Simples híbrido em 2027, e Pix Automático (jun/2025).

### Cited Findings
- NFS-e nacional obrigatória para municípios em 2026 — [Fenacon](https://fenacon.org.br/reforma-tributaria/nota-fiscal-de-servico-eletronica-nfs-e-sera-obrigatoria-a-partir-de-janeiro-de-2026/)
- Testes IBS/CBS desde 03/08/2026 — [Agência Sebrae](https://agenciasebrae.com.br/economia-e-politica/o-que-os-pequenos-negocios-precisam-saber-sobre-os-novos-impostos-na-nota-fiscal/)
- Simples puro x híbrido em 2027 — [Econet](https://blog.econeteditora.com.br/simples-nacional-puro-ou-hibrido/)
- Receita Saúde obrigatório desde 2025 — [Receita Federal](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude)
- Pix Automático desde 16/06/2025; ~14 mil recebedores; Pix Automático em conta-salário a partir de jul/2027 — [Finsiders](https://finsidersbrasil.com.br/?p=372876)

### Inferences
- A pressão maior em 2027 (Simples com IBS/CBS no DAS, possível novo teto MEI) indica que a demanda por ferramentas de simulação e validação deve crescer no 1º semestre de 2027.

### Gaps
- LGPD não pesquisada. Não verifiquei se há API pública para emitir Receita Saúde.

## O que contadores dizem que desperdiça tempo?

### Takeaway
Retrabalho manual (34%), falta de tempo para consultoria (20%), integração entre sistemas (17%) e cobrança de documentos de clientes desorganizados.

### Cited Findings
- Pesquisa IOB/CFC/Fenacon com 393 profissionais — [Jornal Contábil](https://jornalcontabil.com.br/noticia/contador-esta-sobrecarregado-os-desafios-que-estao-pesando-na-profissao/)
- Obrigações acessórias crescentes tomam tempo de consultoria (estudo 2025) — [Revista CAFI](https://revistas.pucsp.br/index.php/CAFI/article/download/73631/49570/254415)
- Clientes desorganizados e cobrança por escrito — [Contábeis fórum](https://www.contabeis.com.br/forum/contabilidade/333943/clientes-desorganizados/)
- Instabilidade da NFS-e nacional inundou grupos de WhatsApp de contadores em jan/2026 — [Fenacon](https://fenacon.org.br/reforma-tributaria/contadores-relatam-instabilidade-para-emissao-de-nfs-e-nacional-receita-orienta-buscar-os-municipios/)

### Inferences
- Contadores querem menos "correr atrás" e mais consultoria; ferramentas que coletam dados automaticamente (via CNPJ/certificado) e só pedem o que falta atacam a raiz.

### Gaps
- Sem medida nacional de horas gastas por tarefa; dados de produtividade vêm de fornecedores (Jettax/Potencialize).

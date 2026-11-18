---
name: Gabriel Martins, portfólio
description: Panorama escuro de painéis lado a lado que abre numa capa de disco ferrugem impressa com a colisão de um detector, uma trajetória por projeto.
colors:
  tabua: "#120e0b"
  grafite: "#1f1a15"
  ferro: "#2e251c"
  tabua-acesa: "#2b221b"
  linho: "#e6dcc6"
  linho-gasto: "#ab9f86"
  linho-aceso: "#fff6e2"
  ferrugem: "#d8693f"
typography:
  display:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 7rem)"
    fontWeight: 200
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 7rem)"
    fontWeight: 200
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title-lg:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4vw, 56px)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  item:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 4.6rem)"
    fontWeight: 300
    lineHeight: 1.02
  body-lg:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "tnum"
  marca:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  none: "0px"
  pilula: "999px"
spacing:
  barra: "64px"
  painel-desktop: "36px 48px 32px"
  painel-celular: "28px 20px 56px"
  linha: "20px"
  coluna: "48px"
components:
  button-linho:
    backgroundColor: "{colors.linho}"
    textColor: "{colors.tabua}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-linho-hover:
    backgroundColor: "{colors.linho-aceso}"
  button-fio:
    backgroundColor: "transparent"
    textColor: "{colors.linho}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-tabua:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.linho}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-tabua-hover:
    backgroundColor: "{colors.tabua-acesa}"
  marca-gm:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.ferrugem}"
    typography: "{typography.marca}"
    rounded: "{rounded.pilula}"
    padding: "2px 12px 4px"
  capa:
    backgroundColor: "{colors.ferrugem}"
    textColor: "{colors.tabua}"
    padding: "{spacing.painel-desktop}"
  painel:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.linho}"
    padding: "{spacing.painel-desktop}"
    width: "86vw"
  trilho:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.linho-gasto}"
    typography: "{typography.label}"
    height: "{spacing.barra}"
  estacao:
    backgroundColor: "transparent"
    borderColor: "{colors.linho-gasto}"
    rounded: "{rounded.none}"
    size: "10px"
    rotate: "45deg"
  estacao-lida:
    backgroundColor: "{colors.linho-gasto}"
  estacao-atual:
    backgroundColor: "{colors.ferrugem}"
---

# Design System: Gabriel Martins, portfólio

## Overview

**Creative North Star: "A Capa Impressa"**

O site é um disco. A abertura inteira é uma capa chapada em ferrugem com grão de gráfica, e a arte dessa capa é a tela de evento de um detector de partículas impressa em tábua: camadas concêntricas, um calorímetro segmentado e uma trajetória por projeto real. O verso da capa lista as faixas ("lado a"), numeradas em dígitos tabulares. Depois da capa, o chão é tábua escura e as seções correm lado a lado num panorama horizontal, com um trilho fino embaixo que mostra quanto já foi lido.

Lidera a precisão técnica: traço fino, números tabulares, geometria calculada a partir de dados reais (curva pelo domínio do projeto, célula de energia pelo número de tecnologias). Os temperos são o cuidado de impressão (grão, cor chapada, recorte do calorímetro para não passar sobre o nome) e o calor da ferrugem sobre o escuro. A tipografia é uma só família, Albert Sans, fina e em minúsculas nos títulos.

Tema escuro apenas. Ferrugem é a única cor viva. Estado se expressa por forma de linha, não por cor nova.

**Key Characteristics:**
- Capa de disco ferrugem chapada como primeira tela, com grão de impressão por cima de tudo.
- Arte gerada por dados: uma trajetória por projeto, curvada pelo domínio, com célula de energia do tamanho da stack.
- Panorama horizontal de painéis de 86vw no desktop; slider empilhado no celular.
- Albert Sans extralight em minúsculas para títulos; peso sobe só para nome e rótulos.
- Cantos retos em quase tudo; a pílula é exclusiva da marca "gm.".

## Colors

Paleta de um tom quente só: tábua escura, linho claro e ferrugem como única voz viva.

### Primary
- **Ferrugem** (ferrugem): fundo chapado da capa, da contracapa e da imagem de compartilhamento; ponto da marca "gm."; estação atual do trilho; contorno de foco (em tábua sobre a capa e a contracapa); seleção de texto; sublinhado do email e dos certificados; "atual" na experiência; número da faixa atual no carrossel de projetos.

### Neutral
- **Tábua** (tabua): chão da página, tinta impressa sobre a capa (título, arte, lista), fundo do trilho e da pílula "gm.".
- **Grafite** (grafite): superfície tonal dos cartões de habilidades, um degrau acima da tábua.
- **Ferro** (ferro): toda borda e divisória; separa painéis e linhas de lista.
- **Tábua acesa** (tabua-acesa): hover do botão tábua.
- **Linho** (linho): texto principal fora da capa e trecho lido do trilho.
- **Linho gasto** (linho-gasto): texto secundário, metadados, estação lida e trecho tracejado por ler.
- **Linho aceso** (linho-aceso): hover do botão linho.

### Named Rules
**The Uma Voz Rule.** Ferrugem é a única cor saturada do sistema. Nenhuma segunda cor de destaque, nenhum gradiente de cor; o que precisa chamar atenção usa ferrugem ou forma.

**The Tinta Invertida Rule.** Sobre a capa ferrugem, tudo é impresso em tábua: texto, arte, bordas. Fora dela, a tinta é linho. A capa nunca recebe linho como texto, exceto o rótulo do botão tábua.

## Typography

**Display Font:** Albert Sans (com ui-sans-serif, system-ui, sans-serif)
**Body Font:** Albert Sans
**Label/Mono Font:** Albert Sans com dígitos tabulares (`tabular-nums`)

**Character:** Uma família só, levada aos extremos de peso: 200 nos títulos grandes, 300 nos subtítulos, 500/600 só em rótulos curtos e na marca. Minúsculas nos títulos dão o tom humano sem perder o rigor.

### Hierarchy
- **Display** (200, clamp(3.4rem, 7vw, 7rem), 0.92): o título da capa em duas batidas, "gabriel martins." / "desenvolvedor fullstack."; a primeira linha sobe para 400. No celular, clamp(2.6rem, 12vw, 3.4rem). Texto simples, sem animação de letras. Logo abaixo, em body-lg 500, a stack (as 4 tecnologias que mais se repetem nos projetos, separadas por " · ") e, em 400, "em e-commerce, painéis admin e saúde.": o primeiro filtro de quem contrata, sem dado novo.
- **Headline** (200, clamp(3.4rem, 7vw, 7rem), 0.95): título de cada painel ("projetos", "experiência", "habilidades", "formação", "contato").
- **Title-lg** (300, clamp(34px, 4vw, 56px), 1.05): nome da empresa na experiência, em minúsculas.
- **Title / Title-sm** (300, clamp(26px, 2.4vw, 34px) e clamp(22px, 2vw, 28px)): grupos de formação, domínios de projeto, categorias de habilidade.
- **Item** (300, clamp(2rem, 4.6vw, 4.6rem), 1.02): nome do projeto no cartão do carrossel.
- **Rótulo da faixa** (500, 24px): nome do projeto em foco no canto da capa, abaixo de "projeto NN · domínio".
- **Body / Body-lg** (400, 16px / 18px): descrições e texto de contato, até 46ch.
- **Label** (400–500, 14px, tabular): números de faixa, datas, tecnologias, trilho, "lado a · N faixas".
- **Marca** (600, 26px, -0.03em): "gm." na pílula.

### Named Rules
Headline, item, title-lg, title e title-sm são tokens do `@theme` (`text-headline`, `text-item`, `text-title-lg`, `text-title`, `text-title-sm`): tamanho, entrelinha, tracking e peso mudam num lugar só.

**The Fina e Minúscula Rule.** Títulos de seção e de capa usam peso 200–300 em minúsculas com tracking negativo (-0.02em a -0.04em). Peso alto é para nome, marca e rótulo curto, nunca para título de seção.

**The Dígito Tabular Rule.** Todo número que se alinha em coluna (faixas, datas) usa dígitos tabulares; o número da faixa é o mesmo na capa e no painel de projetos.

## Layout

**Desktop (≥ 901px):** o `main` é um panorama horizontal com altura `100svh - 64px`. Cada painel tem 86vw de largura (o último, 100vw), borda direita em ferro e padding 36px 48px 32px; o próximo painel espia à direita. A roda vertical, o gesto lateral e as setas movem o panorama na horizontal com perseguição suave (cada quadro anda 5% do que falta); um painel que rola por dentro rola primeiro. Os títulos dos painéis têm parallax leve (0.1 da distância até a borda). Não há CSS scroll-snap; depois de 160ms sem gesto, o panorama assenta no primeiro painel na direção do movimento (um toque de menos de 40px volta ao painel de onde saiu), então nunca para entre duas seções. Ctrl/⌘ + roda e a pinça ficam com o zoom do navegador. As setas pulam de painel em painel e levam o foco junto (o Tab seguinte continua no painel novo). A seção atual do trilho é a que ocupa o meio da tela. Um painel ou o cartão de projeto que rola por dentro (folga de 8px) rola antes do panorama.

**Celular (≤ 900px):** sem JS (ou antes dele), uma coluna comum de painéis que rola como qualquer página. Com JS, o Trilho marca `data-empilha` no `html` e o panorama fica fixo, com os painéis empilhados no mesmo lugar; os que não estão ativos ficam `visibility: hidden` (fora do leitor de tela); a rolagem da página troca o painel ativo (um terço da tela de rolagem entre painéis, `VAO` 0.35, para a rolagem nunca parecer travada, e cada painel menos a capa segura pelo menos meia tela, `PERMANENCIA` 0.5, para um flick a partir da capa parar nos projetos; entra com opacidade 0.5s e escala de 1.1 para 1 em 1s) e rola o conteúdo dele por dentro. Padding 28px 20px 56px. O título do painel que entra sobe de trás de uma máscara (750ms). No Tab, o fim de um painel leva ao próximo e Shift+Tab no começo leva ao fim do anterior, porque os escondidos não recebem foco.

**Trilho:** barra fixa de 64px no rodapé, uma estação por seção ligada por trechos; no celular só a estação atual mostra o rótulo (uma navegação só; o índice numérico do zip saiu) e os trechos encurtam para caber. Toda âncora para dentro de um painel (estações, "Entre em contato", os dois links de pular, para projetos e para contato, `#faixa-NN`, e abrir a página já com o hash) passa pelo Trilho: no desktop o panorama encosta o painel na borda e o foca; no celular a página rola até ele e o foco entra quando ele fica visível (o pulo nativo não alcança um painel `visibility: hidden`). Cada âncora empilha uma entrada no histórico, e Voltar/Avançar levam ao painel do hash (sem hash, a capa). No celular, quando a altura de um painel muda sem rolagem (troca de projeto, fonte), o Trilho remede a pilha e mantém o lugar dentro do painel ativo; quem toca ou rola no meio de um pulo assume o controle, e o pulo não foca nada depois. No celular o trecho tem 8px de respiro à esquerda, para o rótulo da atual não grudar nele. No desktop, quando o foco entra num painel (Tab), o panorama encosta esse painel na borda, para o trilho dizer a seção certa. O trilho vem depois do `main` no DOM: no Tab, "Entre em contato" chega logo depois do link de pular. Um painel focado pelo teclado ganha moldura de 2px ferrugem por dentro (tábua na capa).

**Ritmo:** linhas de lista com 20px de respiro vertical e borda superior em ferro; colunas a 48px; larguras de leitura limitadas (900–1400px conforme o painel).

## Elevation & Depth

Plano. Não há sombras. Profundidade vem da sobreposição de superfícies chapadas (a lista "lado a", o título, a linha da stack, "Currículo (PDF)" e "remoto · brasil" têm fundo ferrugem, a classe `tinta`, para que as linhas da arte parem neles, como o verso impresso de um disco; no título e na stack, uma caixa por linha, em bloco do tamanho da linha: o fundo de bloco é pintado antes de todo o texto, então não cobre as pernas das letras de cima; a arte é composta para quase não passar por elas, a tinta só segura os anéis), do degrau tonal grafite sobre tábua e do grão de impressão (ruído SVG em multiply a 0.10; até no pior pixel o texto de 14px passa de 4,5:1) sobre a capa e a contracapa.

### Named Rules
**The Chapado Rule.** Nada flutua. Superfícies são planas e se separam por cor chapada, borda ferro de 1px ou degrau tonal; sombra não faz parte do sistema.

## Shapes

Cantos retos (0px) em botões, cartões, painéis. Uma exceção com papel fixo: a pílula (999px) só na marca "gm.". A estação do trilho é um losango de cantos retos. Os círculos pertencem à arte do detector: camadas a 80, 170 e 275 (esta tracejada 5/9), calorímetro segmentado em 32 células a 430, com o setor aberto de 135° a 295° voltado para o título para que o anel nunca cruze o nome. Traços finos (1.2–1.6) para camadas e trajetórias, traço grosso (8) para células de energia.

## Components

### Buttons
Diretos e retos, com ícone de 18px à esquerda.
- **Shape:** canto reto (0px), altura mínima 48px, padding horizontal 20px, peso 500.
- **Linho (primário):** fundo linho, texto tábua; hover para linho aceso. Usado em "Copiar email".
- **Fio (secundário):** borda 1px linho gasto, texto linho; hover a borda acende para linho. LinkedIn, GitHub, Blog, Currículo. Links externos abrem em nova aba com `rel="noopener"` (sem `noreferrer`, para o blog saber que a visita veio do portfólio) e dizem isso ao leitor de tela.
- **Tábua (na capa):** fundo tábua, texto linho; hover tábua acesa. "Entre em contato" sobre ferrugem.
- **Focus:** contorno global de 2px ferrugem com 3px de afastamento; sobre a capa e a contracapa o contorno é tábua.

### Cards / Containers
- **Painel:** tábua, 86vw, borda direita ferro, rola por dentro quando o conteúdo passa da altura.
- **Créditos de habilidades:** como os créditos no verso de um disco, todas as categorias à vista, sem nada para escolher: uma lista de definição em 3 colunas (2 a partir de 640px, 1 no celular), cada entrada com borda superior ferro, a categoria em title-sm minúscula e as habilidades em linha, separadas por " · ". A habilidade usada em algum projeto acende em linho e leva, em label tabular, os números das faixas onde aparece (os mesmos da capa e do carrossel; nome comparado sem versão, "ORM", pontuação nem caixa, e pelo que vem entre parênteses); as sem projeto ficam em linho gasto. Sob o título, uma linha em label diz o que os números são.
- **Linha de lista (experiência, formação):** borda superior ferro, 20px de respiro, número tabular à esquerda.
- **Cargo na experiência:** empresa (title-lg), cargo e datas; embaixo a prova: a stack do cargo (as até 6 tecnologias mais repetidas nos projetos dele, label linho gasto separada por " · ") e as faixas do cargo como links (`NN Nome`, sublinhado ferrugem) que abrem o projeto no carrossel.

### Navigation
- **Trilho:** barra tábua de 64px no rodapé com borda superior ferro. Estação em losango de 10px (um quadrado girado 45°, a marca de impacto da arte; o quadrado de aro fino lia como checkbox): por ler só no aro linho gasto (1px) com trecho tracejado linho gasto (4px/5px); lida em linho gasto com trecho cheio em linho (preenchimento de 0.6s); atual em ferrugem. Alvo mínimo 44px, em px para caber com o texto ampliado; no celular o rótulo da atual corta com reticências. Rótulos em label linho gasto, linho ao passar ou quando lido/atual.
- **Lista "lado a":** no desktop, lista numerada ("lado a · N projetos", com a legenda da arte embaixo, "2 e-commerce · 5 painéis admin · 1 saúde" em label tabular, e itens em body 16px com alvo de 44px, 32px só em telas com menos de 620px de altura) no alto à direita da capa, fundo ferrugem; a faixa escolhida (hover ou foco) ganha peso 500 e sublinhado. Em repouso nenhuma fica sublinhada. A legenda só quebra entre domínios (espaço inseparável dentro de cada par). No teclado é uma parada só: ↑/↓, Home e End andam pelas faixas, e o título ganha "· use as setas" enquanto o foco está nela. Vem depois do título no DOM, para o nome ser lido primeiro. No celular some: a lista completa está no painel de projetos.

### Marca "gm."
Pílula tábua com "gm." em ferrugem (marca, 600, 26px) no canto superior esquerdo da capa; não é link (só levaria à própria capa) e fica fora da árvore de acessibilidade, porque o nome está no título. No favicon, os glifos e o ponto são tábua sobre ferrugem, como a capa da abertura; nos arquivos de marca em `public/brand`, linho sobre tábua com o ponto em ferrugem.

### Arte da Colisão (componente assinatura)
SVG gerado a partir das faixas, na cor do texto (tábua sobre a capa). Cada trajetória sai do centro como curva quadrática; o sinal da curva diz o domínio (ecommerce, admin, saúde curvam para lados diferentes) e uma marca de impacto cruza cada camada. No calorímetro, a célula de energia de cada projeto tem 18 + 5 por tecnologia (até 12), e só deposita fora do setor aberto.
- **Estado:** passar ou focar uma faixa (desktop) dobra a linha dela (traço 3 + uma linha gêmea a 8 de distância), baixa as outras para 0.3 de opacidade e sublinha a faixa na lista. Em repouso nenhuma linha é dupla e não há rótulo. No canto inferior direito da capa (desktop), o rótulo da faixa escolhida: "projeto NN · domínio" em label (a metáfora fica no desenho, não no texto), o nome do projeto em 24px 500 e as 3 primeiras tecnologias em label, sobre fundo ferrugem. Domínios em palavras: e-commerce, painéis admin, saúde. No celular, sem lista nem rótulo, a capa não dobra nenhuma linha. No pé da capa: o botão "Entre em contato", as ações secundárias "Currículo (PDF)" (label 500 sublinhado em tábua, com ícone, baixa o PDF) e "Blog" (mesmo estilo, abre em nova aba), e "remoto · brasil" em label 500. No celular a localização sobe para uma linha própria acima do botão (a lista "lado a" some ali; a linha da stack sob o título já diz os domínios), o currículo desce para outra linha abaixo, e a arte encolhe para 140vw com o centro a 43% para o calorímetro não encostar no pé. No desktop a arte é composta, não mascarada: centro a 52% da largura e 58% da altura do painel, largura min(112vh, 77vw), girada 35° (o setor aberto gira junto e continua voltado para o título). A posição foi medida de 1024 a 1920px para nenhuma trajetória passar mais de ~16% sob a lista, o rótulo ou o texto (no centro antigo, a 70%, a lista escondia até 100% de algumas e o hover não mostrava nada). O cartão do carrossel diz "empresa · domínio".
- **Chegada:** cada trajetória se traça do centro uma vez, 0.9s cubic-bezier(0.16, 1, 0.3, 1), a partir de 0.45s com 0.06s entre elas.
- **Setor aberto:** a trajetória cujo ângulo cai no setor aberto (na direção do título) tem metade do comprimento, para nunca passar sobre o nome (medido de 1024 a 1920px de largura e no celular).
- **Contracapa:** no fim do painel de contato, um quadrado ferrugem com grão mostra a mesma colisão cortada, com "fim do lado a". Só no desktop; no celular some.

### Abertura
Cortina tábua fixa sobre a página: a capa "gm." de 140px em ferrugem (marca, 26px) se imprime do meio (0.2s), dois anéis linho gasto se abrem em volta (0.4s, o externo tracejado), e a tábua se fecha no meio e se dissolve (0.4s, ease-in-out, a partir de 0.2s), toda fora em 0.6s, enquanto o título e o pé da capa sobem 16px sem nunca ficar invisíveis. Só CSS, nunca bloqueia cliques; com movimento reduzido não aparece.

### Projetos
Um carrossel, um projeto por vez, numerado (01, 02…) na ordem das experiências, sem agrupar por domínio (decisão do dono). Cada cartão é grafite com o número da faixa gigante em ferro no fundo, no lugar de uma imagem, e no canto superior esquerdo a mesma colisão da capa (linho gasto a 0.45), com o centro no canto e girada para a trajetória do projeto, de linha dupla, entrar na diagonal: o verso repete a frente. No desktop o cartão rola por dentro quando o conteúdo passa da altura (zoom), nunca corta; no celular ele fica no fluxo com a altura do conteúdo (os cartões da troca dividem a mesma célula de grade) e quem rola é a página. A descrição vem em body-lg linho (body no celular), as tecnologias em linha separadas por " · ". Na troca, o cartão atual gira 30°, encolhe a 25% e sai pela vertical (ease-in-out quint); 0,45s depois o próximo sobe recortado por um polígono que se abre até o cheio (ease-out quint), e o título nasce palavra por palavra de trás de máscaras, seguido do resto. Os tempos são os do zip de referência vezes `RITMO` (0,3, troca em ~0,7s). Navega por anterior/próximo, pela numeração (só números, o atual em ferrugem, e logo depois deles o nome inteiro do atual em linho, num lugar fixo para os números nunca andarem; o número sob o mouse ou o foco mostra o nome dele ali, em linho gasto; no teclado a numeração é uma parada só, ←/→, Home e End trocam o projeto; não há contador "01 / 08" no cartão) e pelos links da capa e da experiência (`#faixa-NN`); um clique durante a troca não se perde, espera ela acabar e segue; a roda não troca projeto, porque ela anda o panorama. Deslizar o cartão para o lado também troca. Cada número tem o nome acessível "01 Nome do projeto", começando pelo que se vê. Cliques rápidos contam a partir do último pedido. No celular a navegação some (não recebe foco) e o contador vira a linha "← deslize · 01 / 08 →", cujas setas (ícones que acenam três vezes e param) são os botões de anterior/próximo; deslizar o cartão também troca.

## Do's and Don'ts

### Do:
- **Do** imprimir tudo sobre a capa em tábua e tudo fora dela em linho / linho gasto.
- **Do** expressar estado da arte e do trilho por forma de linha: linha dupla = em foco, tracejado = por ler, cheio = lido.
- **Do** derivar a geometria da arte de dados reais (domínio para a curva, contagem de tecnologias para a energia).
- **Do** manter o setor aberto do calorímetro (135°–295°) voltado para o título em toda composição que use a colisão, inclusive a imagem de compartilhamento.
- **Do** usar Albert Sans 200–300 em minúsculas nos títulos e dígitos tabulares em todo número alinhado.
- **Do** respeitar `prefers-reduced-motion`: sem abertura, sem traçado, troca de projeto instantânea, rolagem instantânea, painel do celular trocando no lugar (sem o zoom de 1.1 nem o esmaecer).

### Don't:
- **Don't** introduzir uma segunda cor viva, nem tema claro.
- **Don't** mudar a cor de uma trajetória ou estação para dizer estado além da ferrugem da estação atual; estado é forma.
- **Don't** usar sombra, cartão arredondado ou pílula fora da marca "gm.".
- **Don't** animar as letras do título; o h1 é texto simples.
- **Don't** deixar o anel do calorímetro ou uma trajetória passar por cima do nome.
- **Don't** usar pesos 600+ em títulos de seção.

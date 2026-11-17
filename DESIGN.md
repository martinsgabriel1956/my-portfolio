---
name: Gabriel Martins, portfólio
description: Panorama escuro de painéis lado a lado que abre numa capa de disco ferrugem impressa com a colisão de um detector, uma trajetória por projeto.
colors:
  tabua: "#120e0b"
  grafite: "#1f1a15"
  ferro: "#2e251c"
  estacao-apagada: "#3a3029"
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
    fontSize: "clamp(20px, 1.7vw, 26px)"
    fontWeight: 300
    lineHeight: 1.15
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
  estacao: "3px"
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
  cartao-habilidade:
    backgroundColor: "{colors.grafite}"
    textColor: "{colors.linho}"
    rounded: "{rounded.none}"
    padding: "20px 22px"
  trilho:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.linho-gasto}"
    typography: "{typography.label}"
    height: "{spacing.barra}"
  estacao:
    backgroundColor: "{colors.estacao-apagada}"
    rounded: "{rounded.estacao}"
    size: "14px"
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
- **Ferrugem** (ferrugem): fundo chapado da capa, da contracapa e da imagem de compartilhamento; ponto da marca "gm."; estação atual do trilho; contorno de foco; seleção de texto; sublinhado do email e dos certificados; "atual" na experiência; número da faixa atual no carrossel de projetos.

### Neutral
- **Tábua** (tabua): chão da página, tinta impressa sobre a capa (título, arte, lista), fundo do trilho e da pílula "gm.".
- **Grafite** (grafite): superfície tonal dos cartões de habilidades, um degrau acima da tábua.
- **Ferro** (ferro): toda borda e divisória; separa painéis e linhas de lista.
- **Estação apagada** (estacao-apagada): estação do trilho ainda por ler.
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
- **Display** (200, clamp(3.4rem, 7vw, 7rem), 0.92): o título da capa em duas batidas; a primeira linha ("gabriel martins.") sobe para 400. No celular, clamp(2.6rem, 12vw, 3.4rem). Texto simples, sem animação de letras.
- **Headline** (200, clamp(3.4rem, 7vw, 7rem), 0.95): título de cada painel ("projetos", "experiência", "habilidades", "formação", "contato").
- **Title-lg** (300, clamp(34px, 4vw, 56px), 1.05): nome da empresa na experiência, em minúsculas.
- **Title / Title-sm** (300, clamp(26px, 2.4vw, 34px) e clamp(22px, 2vw, 28px)): grupos de formação, domínios de projeto, categorias de habilidade.
- **Item** (300, clamp(2rem, 4.6vw, 4.6rem), 1.02): nome do projeto no cartão do carrossel.
- **Rótulo da faixa** (500, 24px): nome do projeto em foco no canto da capa, abaixo de "trajetória NN · domínio".
- **Body / Body-lg** (400, 16px / 18px): descrições e texto de contato, até 46ch.
- **Label** (400–500, 14px, tabular): números de faixa, datas, tecnologias, trilho, "lado a · N faixas".
- **Marca** (600, 26px, -0.03em): "gm." na pílula.

### Named Rules
**The Fina e Minúscula Rule.** Títulos de seção e de capa usam peso 200–300 em minúsculas com tracking negativo (-0.02em a -0.04em). Peso alto é para nome, marca e rótulo curto, nunca para título de seção.

**The Dígito Tabular Rule.** Todo número que se alinha em coluna (faixas, datas) usa dígitos tabulares; o número da faixa é o mesmo na capa e no painel de projetos.

## Layout

**Desktop (≥ 901px):** o `main` é um panorama horizontal com altura `100svh - 64px`. Cada painel tem 86vw de largura (o último, 100vw), borda direita em ferro e padding 36px 48px 32px; o próximo painel espia à direita. A roda vertical, o gesto lateral e as setas movem o panorama na horizontal com perseguição suave (cada quadro anda 5% do que falta); um painel que rola por dentro rola primeiro. Os títulos dos painéis têm parallax leve (0.1 da distância até a borda). Não há CSS scroll-snap: a parada é feita pelo trilho e pelos atalhos.

**Celular (≤ 900px):** o panorama fica fixo e os painéis se empilham no mesmo lugar; a rolagem da página troca o painel ativo (entra com opacidade 0.5s e escala de 1.1 para 1 em 1s) e rola o conteúdo dele por dentro. Padding 28px 20px 56px. O título do painel que entra sobe de trás de uma máscara (750ms).

**Trilho:** barra fixa de 64px no rodapé, uma estação por seção ligada por trechos; no celular os rótulos somem e os trechos encurtam para caber seis estações em 375px.

**Ritmo:** linhas de lista com 20px de respiro vertical e borda superior em ferro; colunas a 48px; larguras de leitura limitadas (900–1400px conforme o painel).

## Elevation & Depth

Plano. Não há sombras. Profundidade vem da sobreposição de superfícies chapadas (a lista "lado a" tem fundo ferrugem para que as linhas da arte parem nela, como o verso impresso de um disco), do degrau tonal grafite sobre tábua e do grão de impressão (ruído SVG em multiply a 0.22) sobre a capa e a contracapa.

### Named Rules
**The Chapado Rule.** Nada flutua. Superfícies são planas e se separam por cor chapada, borda ferro de 1px ou degrau tonal; sombra não faz parte do sistema.

## Shapes

Cantos retos (0px) em botões, cartões, painéis e quadros do celular. Duas exceções com papel fixo: a pílula (999px) só na marca "gm.", e o raio de 3px na estação do trilho, que lê como um pad. Os círculos pertencem à arte do detector: camadas a 80, 170 e 275 (esta tracejada 5/9), calorímetro segmentado em 32 células a 430, com o setor aberto de 135° a 295° voltado para o título para que o anel nunca cruze o nome. Traços finos (1.2–1.6) para camadas e trajetórias, traço grosso (8) para células de energia.

## Components

### Buttons
Diretos e retos, com ícone de 18px à esquerda.
- **Shape:** canto reto (0px), altura mínima 48px, padding horizontal 20px, peso 500.
- **Linho (primário):** fundo linho, texto tábua; hover para linho aceso. Usado em "Copiar email".
- **Fio (secundário):** borda 1px linho gasto, texto linho; hover a borda acende para linho. LinkedIn, GitHub, Currículo.
- **Tábua (na capa):** fundo tábua, texto linho; hover tábua acesa. "Entre em contato" sobre ferrugem.
- **Focus:** contorno global de 2px ferrugem com 3px de afastamento.

### Cards / Containers
- **Painel:** tábua, 86vw, borda direita ferro, rola por dentro quando o conteúdo passa da altura.
- **Cartão de habilidade:** grafite, canto reto, padding 20px 22px, título title-sm em minúsculas e lista em body-lg linho gasto separada por " · ".
- **Linha de lista (experiência, formação):** borda superior ferro, 20px de respiro, número tabular à esquerda.

### Navigation
- **Trilho:** barra tábua de 64px no rodapé com borda superior ferro. Estação 14px, raio 3px: por ler em estação apagada com trecho tracejado linho gasto (4px/5px); lida em linho gasto com trecho cheio em linho (preenchimento de 0.6s); atual em ferrugem. Alvo mínimo 44px. Rótulos em label linho gasto, linho ao passar ou quando lido/atual.
- **Lista "lado a":** no desktop, lista numerada no alto à direita da capa, fundo ferrugem; a faixa em foco ganha peso 500 e sublinhado. No celular vira grade 4x2 só de números (alvos de 44px, borda tábua a 40%); a escolhida fica cheia em tábua com número ferrugem.

### Marca "gm."
Pílula tábua com "gm." em ferrugem (marca, 600, 26px) no canto superior esquerdo da capa. No favicon, os glifos e o ponto são tábua sobre ferrugem, como a capa da abertura; nos arquivos de marca em `public/brand`, linho sobre tábua com o ponto em ferrugem.

### Arte da Colisão (componente assinatura)
SVG gerado a partir das faixas, na cor do texto (tábua sobre a capa). Cada trajetória sai do centro como curva quadrática; o sinal da curva diz o domínio (ecommerce, admin, saúde curvam para lados diferentes) e uma marca de impacto cruza cada camada. No calorímetro, a célula de energia de cada projeto tem 18 + 5 por tecnologia (até 12), e só deposita fora do setor aberto.
- **Estado:** passar ou focar uma faixa (desktop) ou tocar um número (celular) dobra a linha dela (traço 3 + uma linha gêmea a 8 de distância), baixa as outras para 0.3 de opacidade e sublinha a faixa na lista. A capa não leva rótulo de trajetória nem linha de local: o dono tirou os dois.
- **Chegada:** cada trajetória se traça do centro uma vez, 0.9s cubic-bezier(0.16, 1, 0.3, 1), a partir de 1.5s com 0.08s entre elas.
- **Contracapa:** no fim do painel de contato, um quadrado ferrugem com grão mostra a mesma colisão cortada, com "fim do lado a".

### Abertura
Cortina tábua fixa sobre a página: a capa "gm." de 140px em ferrugem se imprime do meio (0.5s), dois anéis linho gasto se abrem em volta (o externo tracejado), e a tábua se fecha no meio e se dissolve (1.2s, ease-in-out, a partir de 1s) enquanto o título e o pé da capa sobem 24px. Só CSS, nunca bloqueia cliques; com movimento reduzido não aparece.

### Projetos
Um carrossel, um projeto por vez, numerado (01, 02…) na ordem das experiências, sem agrupar por domínio (decisão do dono). Cada cartão é grafite com o número da faixa gigante em ferro no fundo, no lugar de uma imagem. Na troca, o cartão atual gira 30°, encolhe a 25% e sai pela vertical (ease-in-out quint); 0,45s depois o próximo sobe recortado por um polígono que se abre até o cheio (ease-out quint), e o título nasce palavra por palavra de trás de máscaras, seguido do resto. Os tempos são os do zip de referência vezes `RITMO` (0,6, troca em ~1,4s). Navega por anterior/próximo, pela numeração e pelos links da capa (`#faixa-NN`); a roda não troca projeto, porque ela anda o panorama.

## Do's and Don'ts

### Do:
- **Do** imprimir tudo sobre a capa em tábua e tudo fora dela em linho / linho gasto.
- **Do** expressar estado da arte e do trilho por forma de linha: linha dupla = em foco, tracejado = por ler, cheio = lido.
- **Do** derivar a geometria da arte de dados reais (domínio para a curva, contagem de tecnologias para a energia).
- **Do** manter o setor aberto do calorímetro (135°–295°) voltado para o título em toda composição que use a colisão, inclusive a imagem de compartilhamento.
- **Do** usar Albert Sans 200–300 em minúsculas nos títulos e dígitos tabulares em todo número alinhado.
- **Do** respeitar `prefers-reduced-motion`: sem abertura, sem traçado, troca de projeto instantânea, rolagem instantânea.

### Don't:
- **Don't** introduzir uma segunda cor viva, nem tema claro.
- **Don't** mudar a cor de uma trajetória ou estação para dizer estado além da ferrugem da estação atual; estado é forma.
- **Don't** usar sombra, cartão arredondado ou pílula fora da marca "gm.".
- **Don't** animar as letras do título; o h1 é texto simples.
- **Don't** deixar o anel do calorímetro ou uma trajetória passar por cima do nome.
- **Don't** usar pesos 600+ em títulos de seção.

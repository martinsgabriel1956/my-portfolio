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
    letterSpacing: "-0.03em"
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
- Panorama horizontal de painéis de 86vw no desktop; coluna comum no celular.
- Albert Sans extralight em minúsculas para títulos; peso sobe só para nome e rótulos.
- Cantos retos em quase tudo; a pílula é exclusiva da marca "gm.".

## Colors

Paleta de um tom quente só: tábua escura, linho claro e ferrugem como única voz viva.

### Primary
- **Ferrugem** (ferrugem): fundo chapado da capa, da contracapa e da imagem de compartilhamento; ponto da marca "gm."; estação atual do trilho; contorno de foco (em tábua sobre a capa e a contracapa); seleção de texto; sublinhado do email e dos certificados; "atual" na experiência; número da faixa atual no carrossel de projetos.

### Neutral
- **Tábua** (tabua): chão da página, tinta impressa sobre a capa (título, arte, lista), fundo do trilho e da pílula "gm.".
- **Grafite** (grafite): superfície tonal do cartão de projeto, um degrau acima da tábua.
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
- **Display** (200, clamp(3.4rem, 7vw, 7rem), 0.92): o título da capa em duas batidas, "gabriel martins." / "desenvolvedor fullstack."; a primeira linha sobe para 400. No celular, clamp(2.6rem, 12vw, 3.4rem). Texto simples, sem animação de letras. Logo abaixo, em body-lg 500, a stack (as 4 tecnologias que mais se repetem nos projetos, separadas por " · "; a versão não conta como outra tecnologia, e um projeto Next.js conta também para React): o primeiro filtro de quem contrata, sem dado novo. Os domínios não entram nessa linha: sob a stack liam como limite ("só faço isso"), e ficam nos projetos como histórico. A empresa atual também não entra na capa: o histórico fica na seção de experiência e no currículo.
- **Headline** (200, clamp(3.4rem, 7vw, 7rem), 0.95): título de cada painel ("projetos", "experiência", "habilidades", "formação", "contato").
- **Title-lg** (300, clamp(34px, 4vw, 56px), 1.05): nome da empresa na experiência, com a caixa original (como na capa: em minúsculas lia como palavra comum).
- **Title / Title-sm** (300, clamp(26px, 2.4vw, 34px) e clamp(22px, 2vw, 28px)): grupos de formação, domínios de projeto, categorias de habilidade; title-sm também para cada curso da formação.
- **Item** (300, clamp(2rem, 4.6vw, 4.6rem), 1.02, -0.03em): nome do projeto no cartão do carrossel e o email do contato.
- **Rótulo da faixa** (500, 24px): nome do projeto em foco no canto da capa, abaixo de "projeto NN · domínio".
- **Body / Body-lg** (400, 16px / 18px): descrições e texto de contato, até 46ch.
- **Label** (400–500, 14px, tabular): números de faixa, datas, tecnologias, trilho, "lado a · N faixas".
- **Marca** (600, 26px, -0.03em; token `--text-marca`): "gm." na pílula e na abertura.

### Named Rules
Headline, item, title-lg, title e title-sm são tokens do `@theme` (`text-headline`, `text-item`, `text-title-lg`, `text-title`, `text-title-sm`): tamanho, entrelinha, tracking e peso mudam num lugar só.

**The Fina e Minúscula Rule.** Títulos de seção e de capa usam peso 200–300 em minúsculas com tracking negativo (-0.02em a -0.04em). Peso alto é para nome, marca e rótulo curto, nunca para título de seção.

**The Dígito Tabular Rule.** Todo número que se alinha em coluna (faixas, datas) usa dígitos tabulares; o número da faixa é o mesmo na capa e no painel de projetos.

## Layout

**Desktop (≥ 901px):** o `main` é um panorama horizontal com altura `100svh - 64px`. Cada painel tem 86vw de largura (o último, 100vw), borda direita em ferro e padding 36px 48px 32px; o próximo painel espia à direita. A roda vertical, o gesto lateral e as setas movem o panorama na horizontal com perseguição suave (cada quadro anda 12% do que falta); um painel que rola por dentro rola primeiro. Os títulos dos painéis têm parallax leve (0.1 da distância até a borda). Não há CSS scroll-snap nem assentamento automático: o panorama para onde o gesto parou, e o próximo painel espia. Ctrl/⌘ + roda e a pinça ficam com o zoom do navegador. As setas pulam de painel em painel e levam o foco junto (o Tab seguinte continua no painel novo). A seção atual do trilho é a que ocupa o meio da tela. Um painel ou o cartão de projeto que rola por dentro (folga de 8px) rola antes do panorama.

**Celular (≤ 900px):** uma coluna comum de painéis que rola como qualquer página, com ou sem JS: busca na página, gesto linear do leitor de tela e flick funcionam como o visitante espera. Padding 28px 20px 56px. O trilho só acompanha a rolagem (a seção atual é a que cruza o meio da tela).

**Trilho:** barra fixa de 64px no rodapé, uma estação por seção ligada por trechos; no celular só a estação atual mostra o rótulo (uma navegação só; o índice numérico do zip saiu) e os trechos encurtam para caber. Toda âncora para dentro de um painel (estações, "Entre em contato", os dois links de pular, para projetos e para contato, `#faixa-NN`, e abrir a página já com o hash) passa pelo Trilho: no desktop o panorama encosta o painel na borda e o foca; no celular a página rola até ele e o foca. Cada âncora empilha uma entrada no histórico, e Voltar/Avançar levam ao painel do hash (sem hash, a capa). No celular o trecho tem 4px de respiro à esquerda; a estação atual parte do tamanho do rótulo e é a única que encolhe, então o rótulo cabe inteiro a partir de 375px e só trunca com o texto ampliado. Abaixo de 360px nem a atual mostra o rótulo e os trechos ficam com 2px de cada lado: seis alvos de 44px cabem em 320px. O `html` tem `scroll-padding-bottom` da altura da barra, para o foco e as âncoras nunca pararem sob ela. No celular, Voltar/Avançar ficam com o navegador (ele restaura a rolagem). No desktop, quando o foco entra num painel (Tab), o panorama encosta esse painel na borda, para o trilho dizer a seção certa. O trilho vem depois do `main` no DOM: no Tab, "Entre em contato" chega logo depois do link de pular. Um painel focado pelo teclado ganha moldura de 2px ferrugem por dentro (tábua na capa).

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
- **Linho (primário):** fundo linho, texto tábua; hover para linho aceso. Hoje sem uso na página: no contato a ação principal é o próprio email (mailto), grande e sublinhado.
- **Fio (secundário):** borda 1px linho gasto, texto linho; hover a borda acende para linho. "Copiar email", Currículo e LinkedIn, na mesma ordem da capa. No contato, GitHub e Blog ficam numa linha quieta abaixo dos botões (label linho gasto sublinhado, com ícone): a decisão é email, LinkedIn ou currículo. Links externos abrem em nova aba com `rel="noopener"` (sem `noreferrer`, para o blog saber que a visita veio do portfólio) e dizem isso ao leitor de tela.
- **Tábua (na capa):** fundo tábua, texto linho; hover tábua acesa. "Entre em contato" sobre ferrugem.
- **Focus:** contorno global de 2px ferrugem com 3px de afastamento; sobre a capa e a contracapa o contorno é tábua.

### Cards / Containers
- **Painel:** tábua, 86vw, borda direita ferro, rola por dentro quando o conteúdo passa da altura.
- **Créditos de habilidades:** como os créditos no verso de um disco, todas as categorias à vista, sem nada para escolher: uma lista de definição em 3 colunas (2 a partir de 640px, 1 no celular), cada entrada com borda superior ferro, a categoria em title-sm minúscula e as habilidades em linha, separadas por " · ". A habilidade usada em algum projeto acende em linho e leva, em label tabular, em quantos projetos aparece ("React 8"; o leitor de tela ouve "em 8 projetos"), em texto (59 links pequenos falhavam o alvo de toque e o Tab; a experiência já liga cada projeto; os números das faixas exigiam lembrar qual projeto era o 03) (a mesma regra da stack da capa, então um projeto Next.js também acende React; nome comparado sem versão, "ORM", pontuação nem caixa, e pelo que vem entre parênteses; integrações como Asaas ou Mercado Pago também acendem quando a descrição do projeto as cita, em palavra inteira); as sem projeto ficam em linho gasto. Sob o título, uma linha em label diz o que o linho e o número são.
- **Linha de lista (experiência, formação):** borda superior ferro, 20px de respiro, número tabular à esquerda.
- **Cargo na experiência:** empresa (title-lg), cargo e datas; embaixo a prova: a stack do cargo (as até 6 tecnologias mais repetidas nos projetos dele, label linho gasto separada por " · ") e as faixas do cargo como links (`NN Nome`, sublinhado ferrugem) que abrem o projeto no carrossel.

### Navigation
- **Trilho:** barra tábua de 64px no rodapé com borda superior ferro. Estação em losango de 10px (um quadrado girado 45°, a marca de impacto da arte; o quadrado de aro fino lia como checkbox): por ler só no aro linho gasto (1px) com trecho tracejado linho gasto (4px/5px); lida em linho gasto com trecho cheio em linho (preenchimento de 0.6s); atual em ferrugem. Alvo mínimo 44px, em px para caber com o texto ampliado; no celular o rótulo da atual corta com reticências. Rótulos em label linho gasto, linho ao passar ou quando lido/atual.
- **Lista "lado a":** no desktop, lista numerada ("lado a · N projetos", com a legenda da arte embaixo, "2 e-commerce · 5 painéis admin · 1 saúde" em label tabular, e itens em body 16px com alvo de 44px, 32px só em telas com menos de 620px de altura) no alto à direita da capa, fundo ferrugem, com altura até 9rem antes do pé da capa: com o texto ampliado (175%+) ela rola por dentro, e a roda a rola antes do panorama, em vez de cobrir o LinkedIn; a faixa escolhida (hover ou foco) ganha peso 500 e sublinhado. Em repouso nenhuma fica sublinhada. A legenda só quebra entre domínios (espaço inseparável dentro de cada par). No teclado é uma parada só: ↑/↓, Home e End andam pelas faixas, e o título ganha "· use as setas" enquanto o foco está nela. Vem depois do título no DOM, para o nome ser lido primeiro. No celular some: a lista completa está no painel de projetos.

### Marca "gm."
Pílula tábua com "gm." em ferrugem (marca, 600, 26px) no canto superior esquerdo da capa; não é link (só levaria à própria capa) e fica fora da árvore de acessibilidade, porque o nome está no título. No favicon, os glifos e o ponto são tábua sobre ferrugem, como a capa da abertura; nos arquivos de marca em `public/brand`, linho sobre tábua com o ponto em ferrugem.

### Arte da Colisão (componente assinatura)
SVG gerado a partir das faixas, na cor do texto (tábua sobre a capa). Cada trajetória sai do centro como curva quadrática; o sinal da curva diz o domínio (ecommerce, admin, saúde curvam para lados diferentes) e uma marca de impacto cruza cada camada. No calorímetro, a célula de energia de cada projeto tem 18 + 5 por tecnologia (até 12), e só deposita fora do setor aberto.
- **Estado:** passar ou focar uma faixa (desktop) dobra a linha dela (traço 3 + uma linha gêmea a 8 de distância), baixa as outras para 0.3 de opacidade e sublinha a faixa na lista. Em repouso nenhuma linha é dupla e não há rótulo. No canto inferior direito da capa (desktop), o rótulo da faixa escolhida: "projeto NN · domínio" em label (a metáfora fica no desenho, não no texto), o nome do projeto em 24px 500 e as 3 primeiras tecnologias em label, sobre fundo ferrugem. Domínios em palavras: e-commerce, painéis admin, saúde. No celular, sem lista nem rótulo, a capa não dobra nenhuma linha. No pé da capa: o botão "Entre em contato", as ações secundárias "Currículo (PDF)" (body 16px 500 sublinhado em tábua, com ícone, abre o PDF em nova aba: no celular o download jogava no gerenciador de arquivos) e "LinkedIn" (mesmo estilo, abre em nova aba; o blog fica na linha quieta do contato), e "remoto · brasil" em label 500. No celular a localização sobe para uma linha própria acima do botão (a lista "lado a" some ali; os domínios ficam no painel de projetos), o currículo desce para outra linha abaixo, e a arte encolhe para 140vw com o centro a 43% para o calorímetro não encostar no pé. No desktop a arte é composta, não mascarada: centro a 52% da largura e 58% da altura do painel, largura min(112vh, 77vw), girada 35° (o setor aberto gira junto e continua voltado para o título). A posição foi medida de 1024 a 1920px para nenhuma trajetória passar mais de ~16% sob a lista, o rótulo ou o texto (no centro antigo, a 70%, a lista escondia até 100% de algumas e o hover não mostrava nada). O cartão do carrossel diz "empresa · domínio".
- **Chegada:** cada trajetória se traça do centro uma vez, 0.9s `--ease-chegar` (cubic-bezier(0.16, 1, 0.3, 1)), a partir de 0.45s com 0.06s entre elas.
- **Setor aberto:** a trajetória cujo ângulo cai no setor aberto (na direção do título) tem metade do comprimento, para nunca passar sobre o nome (medido de 1024 a 1920px de largura e no celular).
- **Contracapa:** no fim do painel de contato, um quadrado ferrugem com grão mostra a mesma colisão cortada, com "fim do lado a". No celular vira uma faixa de 144px no pé do painel, sangrando até as bordas, para a página fechar como o disco e não no "©". No desktop a coluna do contato para antes dela (margem da largura da contracapa + 48px), para o texto ampliado nunca correr por cima.

### Abertura
Cortina tábua fixa sobre a página: a capa "gm." de 140px em ferrugem (marca, 26px) se imprime do meio (0.2s), dois anéis linho gasto se abrem em volta (0.4s, o externo tracejado), e a tábua se fecha no meio e se dissolve (0.4s, ease-in-out, a partir de 0.2s), toda fora em 0.6s, enquanto o título e o pé da capa sobem 16px sem nunca ficar invisíveis. Só CSS, nunca bloqueia cliques; com movimento reduzido não aparece.

**Curvas:** todas são tokens em `:root` (`--ease-quint-out`, `--ease-quint-in-out`, `--ease-chegar`, `--ease-trilho`, `--ease-cortina`); o CSS usa `var()` e o carrossel lê os mesmos valores com `getComputedStyle`, porque a WAAPI não aceita `var()`.

### Projetos
Um cartão de detalhe ao lado da lista das faixas, numeradas (01, 02…) na ordem das experiências, sem agrupar por domínio (decisão do dono). Abre no 01 (abrir no meio fazia parecer que 01 e 02 tinham ficado para trás). Cada cartão é grafite com o número da faixa gigante em ferro no fundo, no lugar de uma imagem, e no canto superior esquerdo a mesma colisão da capa (linho gasto a 0.45), com o centro no canto e girada para a trajetória do projeto, de linha dupla, entrar na diagonal: o verso repete a frente. No desktop o cartão rola por dentro quando o conteúdo passa da altura (zoom), nunca corta; no celular ele fica no fluxo com a altura do conteúdo (os cartões da troca dividem a mesma célula de grade) e quem rola é a página. O bloco de texto do cartão é alinhado à esquerda. A descrição vem em body-lg linho (body no celular), as tecnologias em linha separadas por " · ". Na troca, o cartão atual gira 30°, encolhe a 25% e sai pela vertical (ease-in-out quint); 0,45s depois o próximo sobe recortado por um polígono que se abre até o cheio (ease-out quint), e o título nasce palavra por palavra de trás de máscaras, seguido do resto. Os tempos são os do zip de referência vezes `RITMO` (0,3, troca em ~0,7s). No desktop, à direita do cartão (coluna de 16–24rem), a lista das oito faixas à vista, como a contracapa de um disco: cada linha com borda ferro, o número tabular (o atual em ferrugem), o nome em body linho (o atual em 500 sublinhado, como na lista "lado a"), o domínio em label linho gasto e uma linha da descrição truncada. Quem tem menos de um minuto escaneia a lista; o cartão é o detalhe da escolhida (um projeto por vez escondia 7 das 8 descrições). No teclado a lista é uma parada só, ↑/↓ (e ←/→), Home e End trocam o projeto; quando passa da altura, rola por dentro antes do panorama. Navega pela lista e pelos links da capa e da experiência (`#faixa-NN`); um clique durante a troca não se perde, espera ela acabar e segue; a roda não troca projeto, porque ela anda o panorama. Deslizar o cartão para o lado também troca. Cliques rápidos contam a partir do último pedido. No celular a navegação some (não recebe foco) e o contador vira a linha "← deslize · 01 / 08 →", cujas setas (ícones que acenam três vezes e param) são os botões de anterior/próximo; deslizar o cartão também troca. Abaixo dela, "todos os projetos" é um índice que já vem aberto, com número, nome e domínio de cada um; escolher troca o cartão e leva a vista até ele, e o índice continua aberto.

## Do's and Don'ts

### Do:
- **Do** imprimir tudo sobre a capa em tábua e tudo fora dela em linho / linho gasto.
- **Do** expressar estado da arte e do trilho por forma de linha: linha dupla = em foco, tracejado = por ler, cheio = lido.
- **Do** derivar a geometria da arte de dados reais (domínio para a curva, contagem de tecnologias para a energia).
- **Do** manter o setor aberto do calorímetro (135°–295°) voltado para o título em toda composição que use a colisão, inclusive a imagem de compartilhamento.
- **Do** usar Albert Sans 200–300 em minúsculas nos títulos e dígitos tabulares em todo número alinhado.
- **Do** respeitar `prefers-reduced-motion`: sem abertura, sem traçado, troca de projeto instantânea, rolagem instantânea, no celular a coluna rola como página comum.

### Don't:
- **Don't** introduzir uma segunda cor viva, nem tema claro.
- **Don't** mudar a cor de uma trajetória ou estação para dizer estado além da ferrugem da estação atual; estado é forma.
- **Don't** usar sombra, cartão arredondado ou pílula fora da marca "gm.".
- **Don't** animar as letras do título; o h1 é texto simples.
- **Don't** deixar o anel do calorímetro ou uma trajetória passar por cima do nome.
- **Don't** usar pesos 600+ em títulos de seção.
- **Don't** pôr os domínios ("e-commerce, painéis admin e saúde") sob a stack na capa, nem sugerir isso em critique ou audit. Decisão de 19/11/2026: ali eles liam como limite ("só faço isso") e afastavam vagas de outros setores. Os domínios ficam nos projetos, como histórico (legenda da lista "lado a", rótulo da faixa, cartão do carrossel). No celular a capa não mostra domínio, e isso é intencional.
- **Don't** pôr a empresa atual na capa ("hoje: <Empresa>, desde <mês ano>"), nem sugerir isso em critique ou audit. Decisão de 19/11/2026: quem chega ao portfólio quase sempre veio do currículo ou do LinkedIn e já sabe; o nome só convence quando é uma marca conhecida; a data sozinha destaca um tempo curto; e a capa não precisa falar do emprego atual. O histórico fica na seção de experiência e no currículo.

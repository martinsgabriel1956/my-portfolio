---
name: Gabriel Martins, portfólio
description: Panorama escuro de painéis lado a lado, costurado por uma linha de linho que marca o quanto já foi lido.
colors:
  tabua: "#120e0b"
  grafite: "#1f1a15"
  pagina: "#2a221b"
  ferro: "#2e251c"
  furo: "#7a6a56"
  linho: "#e6dcc6"
  linho-gasto: "#ab9f86"
  ferrugem: "#d8693f"
  ferrugem-funda: "#c95e36"
  linho-aceso: "#fff6e2"
typography:
  display:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 8rem)"
    fontWeight: 200
    lineHeight: 0.9
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
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.7vw, 26px)"
    fontWeight: 300
    lineHeight: 1.15
  lead:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 22px)"
    fontWeight: 300
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
  button:
    fontFamily: "Albert Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
rounded:
  none: "0px"
  full: "999px"
spacing:
  junta: "8px"
  botoes: "10px"
  bloco: "20px"
  barra: "64px"
  painel-desktop: "36px 48px 32px"
  painel-mobile: "28px 20px 56px"
components:
  button-linho:
    backgroundColor: "{colors.linho}"
    textColor: "{colors.tabua}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-linho-hover:
    backgroundColor: "{colors.linho-aceso}"
  button-fio:
    backgroundColor: "transparent"
    textColor: "{colors.linho}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  caderno-aberto:
    backgroundColor: "{colors.grafite}"
    textColor: "{colors.linho}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  caderno-aberto-pagina-direita:
    backgroundColor: "{colors.pagina}"
  caderno-aberto-hover:
    backgroundColor: "{colors.ferrugem}"
    textColor: "{colors.tabua}"
  bloco-habilidade:
    backgroundColor: "{colors.grafite}"
    textColor: "{colors.linho}"
    rounded: "{rounded.none}"
    padding: "20px 22px"
  lombada:
    backgroundColor: "{colors.tabua}"
    textColor: "{colors.linho-gasto}"
    typography: "{typography.label}"
    height: "{spacing.barra}"
  lombada-furo:
    rounded: "{rounded.full}"
    size: "14px"
---

# Design System: Gabriel Martins, portfólio

## Overview

**Creative North Star: "O Caderno Costurado ao Sol"**

O site é um panorama: painéis de largura quase total (86vw) postos lado a lado sobre uma tábua escura, lidos da esquerda para a direita no desktop e empilhados em coluna no celular. Uma linha de linho em laçadas atravessa tudo: costura o horizonte da abertura, passa pelo vinco furado de cada projeto e corre deitada na lombada fixa no rodapé, onde vai se completando conforme a leitura avança. A linha é o único ornamento recorrente, e ela sempre significa alguma coisa (horizonte, encadernação, progresso).

A densidade é baixa e tipográfica. Títulos são Albert Sans extrafina em minúsculas, gigantes, com tracking negativo; o resto do texto fica em pesos leves e no linho gasto. A cor viva existe uma vez: ferrugem, no meio sol granulado da abertura e do contato, no estado atual da lombada, no "atual" das datas, no sublinhado de links e no hover dos cadernos. Superfícies são planas e retas; a profundidade vem de três tons de madeira escura, não de sombra.

O mundo recusa a página longa de seções empilhadas com hero centralizado e cartões iguais, e recusa o visual de template de dev.

**Key Characteristics:**
- Tema escuro único (`color-scheme: dark`), sem alternância clara.
- Painéis com scroll-snap horizontal no desktop; coluna vertical abaixo de 900px.
- Títulos extrafinos (200) em minúsculas, de 3.4rem a 8rem.
- Ferrugem como única cor viva; tudo o mais é tábua, grafite e linho.
- Linha de linho em laçadas e furos vazados como gramática de ligação.
- Cantos retos em tudo que é retângulo; o redondo fica para sol e furos.

## Colors

Uma paleta de madeira escura e linho cru, com um único acento queimado.

### Primary
- **Ferrugem** (`ferrugem`): o meio sol, o furo da estação atual na lombada, a palavra "atual" nas datas de experiência, o sublinhado de links (email, credenciais), o contorno de foco, a seleção de texto e o preenchimento do caderno aberto em hover.
- **Ferrugem Funda** (`ferrugem-funda`): só como segunda página do caderno em hover, para o vinco continuar legível sobre o ferrugem.

### Neutral
- **Tábua** (`tabua`): fundo do corpo, da lombada e da imagem de compartilhamento; também a tinta do nome sobre o sol e do texto sobre ferrugem.
- **Grafite** (`grafite`): blocos de habilidade e a página esquerda do caderno aberto.
- **Página** (`pagina`): a página direita do caderno, um passo mais clara que o grafite.
- **Ferro** (`ferro`): toda borda e divisor (cor padrão de `border-color`), entre painéis, no topo da lombada e entre itens de lista.
- **Furo** (`furo`): anel dos furos vazados e dos furos vazios da lombada, e os pontos da corrente ainda não costurada.
- **Linho** (`linho`): tinta principal, a linha das laçadas e o botão cheio.
- **Linho Gasto** (`linho-gasto`): texto secundário (empresa, cargo, descrição, techs, datas, rodapé) e o contorno do botão de fio.
- **Linho Aceso** (`linho-aceso`): só o hover do botão cheio.

### Named Rules
**A Regra do Sol Único.** Ferrugem é a única cor saturada do sistema. Não entra segundo acento, nem azul de link, nem verde de sucesso; um estado novo usa ferrugem, linho ou linho gasto.

**A Regra da Tinta Invertida.** Sobre ferrugem, o texto vira tábua (nome no sol, caderno em hover, seleção). Linho nunca vai em cima de ferrugem.

## Typography

**Display Font:** Albert Sans (com ui-sans-serif, system-ui, sans-serif), carregada por `next/font` nos pesos 200 a 600.
**Body Font:** Albert Sans, a mesma família.

**Character:** Uma sans geométrica e calorosa, usada fina e grande nos títulos e leve no texto corrido. A hierarquia vem do tamanho e do peso, não de troca de família.

### Hierarchy
- **Display** (200, clamp(3.4rem, 8vw, 8rem), 0.9; no celular clamp(2.6rem, 12vw, 3.4rem)): só o título da abertura, em minúsculas e duas batidas como um cartão de visita: "gabriel martins." em linho peso 400 e, na linha de baixo, "desenvolvedor fullstack." em linho gasto. Sem stack nem domínios no título: quem prova o resto são os painéis.
- **Headline** (200, clamp(3.4rem, 7vw, 7rem), 0.95): o título de cada painel ("projetos", "experiência", "habilidades", "formação", "contato"), escrito em minúsculas.
- **Title Large** (300, clamp(34px, 4vw, 56px), 1.05): nome de empresa na experiência, em minúsculas.
- **Title** (300, clamp(26px, 2.4vw, 34px)): títulos de grupo (domínios de projeto, "Acadêmica", "Cursos"); categorias de habilidade usam a variante 22 a 28px.
- **Title Small** (300, clamp(20px, 1.7vw, 26px), 1.15): nome do projeto no caderno.
- **Lead** (300, clamp(18px, 1.6vw, 22px)): texto de apoio em pesos leves; na abertura, a linha de fatos (nível · local · disponibilidade) usa 16 a 18px em linho gasto com o nível em linho, até 46ch.
- **Body** (400, 16px, 1.5): descrições; texto de apoio em 18px no contato e nas habilidades.
- **Label** (400, 14px): empresa, techs, local, rodapé e nomes da lombada, sempre em linho gasto. Sem caixa alta, sem tracking aberto.

### Named Rules
**A Regra da Minúscula Fina.** Títulos de painel e de empresa são minúsculos e em peso 200 ou 300. Negrito (600) aparece só no monograma "GM" e no link de pular conteúdo.

**A Regra do Ponto Médio.** Listas inline (stack, techs, local) se separam com " · ", nunca com chips ou badges.

## Layout

No desktop (acima de 900px), `main` é um trilho horizontal com altura `100svh - 64px`, `scroll-snap-type: x mandatory` e barra de rolagem oculta. Cada painel ocupa 86vw, para o próximo espiar pela borda direita; o último ocupa 100vw. Painéis rolam por dentro na vertical quando o conteúdo passa da altura, e a roda do mouse anda o trilho para o lado só depois que o painel chegou ao fim. Padding do painel: 36px 48px 32px; divisor vertical de 1px em ferro.

Abaixo de 900px o trilho vira coluna comum: painéis com altura automática, divisor horizontal, padding 28px 20px 56px, e o corpo ganha 64px de folga embaixo para a lombada fixa.

Ritmo: 8px entre cadernos e blocos (juntas finas, como cadernos empilhados), 10px entre botões, 20 a 22px de respiro interno nos blocos, 20 a 28px abaixo dos títulos de painel. Larguras de leitura são limitadas por painel (900px na experiência, 1000px nas habilidades, 1100px na formação, 44 a 46ch no texto corrido). Projetos usam uma coluna de 11rem para o domínio e duas colunas de cadernos a partir de `lg`.

Na abertura o título manda: fica no alto, alinhado à esquerda. Embaixo, o chão: horizonte costurado de ponta a ponta com altura clamp(150px, 26vh, 230px) abaixo dele, onde ficam a linha de fatos e os botões. O sol é pequeno (clamp(200px, 24vw, 380px); 44vw no celular) e nasce do horizonte a 4% da borda direita, do lado para onde se lê.

## Elevation & Depth

O sistema é plano. Não há `box-shadow` em lugar nenhum. A profundidade vem do empilhamento tonal tábua, grafite, página (cada um um passo mais claro), dos divisores de 1px em ferro e de dois efeitos de luz: o grão (ruído SVG com alfa por luminância, em `multiply` a 45%) dentro do sol, e um brilho radial ferrugem a 12% em volta do sol da abertura.

### Named Rules
**A Regra da Madeira Plana.** Nenhuma superfície flutua. Para destacar um bloco, suba um tom (grafite para página) ou troque para ferrugem no hover; não adicione sombra.

## Shapes

Retângulos de cantos retos (0px) em botões, cadernos, blocos e painéis. O redondo (999px) é reservado para o que é redondo no mundo: o meio sol (semicírculo com proporção 2:1, cantos de cima em 999px) e os furos de 14px da lombada. As laçadas são elipses SVG de 18 por 14px (deitadas) ou 14 por 18px (em pé, no vinco), sempre em linho, repetidas com `round` para fechar a conta sem cortar laçada. O furo vazado é um miolo quase preto dentro de um anel na cor furo.

## Components

### Buttons
Retângulos firmes, sem raio, com ícone SVG de 18px à esquerda.
- **Shape:** cantos retos (0px), altura mínima 48px, padding horizontal 20px, gap 8px.
- **Linho (primário):** fundo linho, texto tábua, peso 500. Uma ação primária por bloco ("Entre em contato", "Copiar email").
- **Fio (secundário):** fundo transparente, contorno 1px linho gasto, texto linho ("Currículo (PDF)", LinkedIn, GitHub).
- **Hover / Focus:** linho clareia para linho aceso; fio troca o contorno para linho. Foco é o contorno global de 2px ferrugem com 3px de afastamento. Transição só de cor.

### Caderno aberto (cartão de projeto)
O cartão de projeto é um caderno em duas páginas.
- **Estrutura:** grade de três colunas (0.85fr, 20px, 1.2fr): página esquerda em grafite com nome e empresa; vinco de 20px com furos vazados e a linha em pé passando por eles; página direita em página com descrição e techs.
- **Hover:** o caderno inteiro vira ferrugem (página direita em ferrugem funda) e todo o texto vira tábua, em 0.2s.
- **Celular:** o caderno abre em pé: as páginas se empilham e o vinco vira uma costura deitada de 14px entre elas.

### Bloco de habilidade
Retângulo grafite, padding 20px 22px, título de categoria em minúsculas e lista de habilidades separada por ponto médio em linho gasto. Juntas de 8px em duas colunas.

### Listas com régua
Experiência, formação e cursos são listas sem cartão: cada item tem uma borda de 1px ferro em cima e 16 a 20px de respiro vertical. Datas usam algarismos tabulares; o fim em aberto aparece como "atual" em ferrugem.

### Links de texto
Sublinhado ferrugem com afastamento (1px nos cursos, 2px no email gigante do contato); o hover engrossa o traço. Links externos levam seta diagonal de 16px e texto oculto "(abre em nova aba)".

### Navigation: a lombada
Barra fixa de 64px embaixo, fundo tábua, borda superior ferro. Cada estação é um furo de 14px (contorno 1.5px furo) seguido do nome em 14px linho gasto; entre estações corre uma corrente de pontos. Estados: vazio (só anel), lido (furo cheio de linho, e a corrente até a próxima estação se costura com laçadas em 0.6s, `cubic-bezier(0.22, 0.8, 0.26, 1)`), atual (furo ferrugem, `aria-current="location"`). No celular os nomes ficam só para leitores de tela e as laçadas encurtam para caber seis estações em 375px; alvos têm no mínimo 44px.

### Sol e horizonte (assinatura)
O meio sol ferrugem granulado nasce de um horizonte costurado (laçadas sobre furos vazados) que atravessa o painel de ponta a ponta. Aparece pequeno na abertura, nascendo à direita sob o título, e no canto do contato, fechando o percurso. A imagem de compartilhamento repete o par tábua mais meio sol ferrugem.

## Do's and Don'ts

### Do:
- **Do** manter um único acento: ferrugem (#d8693f) para estado atual, foco, sublinhado e o sol.
- **Do** escrever títulos de painel em minúsculas, Albert Sans 200, com tracking -0.04em.
- **Do** usar a linha de linho em laçadas e os furos vazados para ligar coisas (horizonte, vinco, lombada), sempre com significado.
- **Do** dar profundidade subindo de tábua para grafite e página, com divisores de 1px em ferro.
- **Do** separar listas inline com " · " e deixar techs em 14px linho gasto.
- **Do** respeitar `prefers-reduced-motion`: rolagem programática vira `auto` e transições caem para 0.01ms.

### Don't:
- **Don't** usar sombras, brilhos ou cartões flutuantes.
- **Don't** arredondar retângulos; raio total fica só para o sol e os furos.
- **Don't** introduzir uma segunda cor viva ou um tema claro.
- **Don't** usar chips, badges ou pílulas para techs e habilidades.
- **Don't** pôr texto linho sobre ferrugem; sobre ferrugem a tinta é tábua.
- **Don't** usar as laçadas como enfeite solto, sem estar costurando algo.

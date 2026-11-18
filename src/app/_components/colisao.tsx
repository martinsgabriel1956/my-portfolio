import type { ComponentProps } from "react";
import type { ProjectDomain } from "@/db/schema";

type Rastro = { domain?: ProjectDomain; techs?: string[] };
type Ponto = [number, number];

/** O sinal da curva diz o domínio, como a carga de uma partícula: cada domínio curva para um lado. */
const CURVA: Record<ProjectDomain, number> = {
  ecommerce: 1,
  admin: -1,
  health: 0.55,
};
/** Camadas internas do detector; o anel externo é o calorímetro, segmentado. */
const ANEIS = [80, 170, 275];
const CALORIMETRO = 430;
const SEGMENTOS = 32;
/**
 * Setor aberto do calorímetro (graus, 0 = direita, sentido horário): é para onde
 * o título fica na capa, no celular e na imagem de compartilhamento. Um corte do
 * detector, para o anel nunca passar por cima do nome.
 */
const SETOR_ABERTO: [number, number] = [135, 295];
const naoAberto = (graus: number) => {
  const g = ((graus % 360) + 360) % 360;
  return g < SETOR_ABERTO[0] || g > SETOR_ABERTO[1];
};

const f = (n: number) => n.toFixed(1);

/** Para onde a trajetória de uma faixa aponta (graus, 0 = direita, sentido horário). */
export const grausDe = (i: number, total: number) => -110 + (i * 360) / total;

/** Trajetória de uma faixa saindo do centro; determinística, então servidor e cliente desenham igual. */
function tracado(i: number, total: number, domain?: ProjectDomain) {
  const graus = grausDe(i, total);
  const angulo = (graus * Math.PI) / 180;
  // No setor aberto a trajetória vai na direção do nome: lá ela é mais curta, para nunca passar por cima dele.
  const raio = (300 + (i % 3) * 45) * (naoAberto(graus) ? 1 : 0.5);
  const [cos, sin] = [Math.cos(angulo), Math.sin(angulo)];
  const k = (domain ? CURVA[domain] : 0.25) * 0.4 * raio;
  const fim: Ponto = [cos * raio, sin * raio];
  const meio: Ponto = [fim[0] / 2 - sin * k, fim[1] / 2 + cos * k];
  // Curva de Bézier quadrática saindo da origem, e sua tangente.
  const em = (t: number): Ponto => [
    2 * t * (1 - t) * meio[0] + t * t * fim[0],
    2 * t * (1 - t) * meio[1] + t * t * fim[1],
  ];
  const tangente = (t: number): Ponto => [
    2 * (1 - t) * meio[0] + 2 * t * (fim[0] - meio[0]),
    2 * (1 - t) * meio[1] + 2 * t * (fim[1] - meio[1]),
  ];
  // Marca de impacto onde a trajetória cruza cada camada: um traço curto na perpendicular.
  const impactos = ANEIS.flatMap((r) => {
    for (let t = 0.02; t <= 1; t += 0.02) {
      const [x, y] = em(t);
      if (Math.hypot(x, y) < r) continue;
      const [tx, ty] = tangente(t);
      const n = Math.hypot(tx, ty) || 1;
      const [px, py] = [(-ty / n) * 7, (tx / n) * 7];
      return [`M${f(x - px)} ${f(y - py)}L${f(x + px)} ${f(y + py)}`];
    }
    return [];
  });
  return {
    d: `M0 0Q${f(meio[0])} ${f(meio[1])} ${f(fim[0])} ${f(fim[1])}`,
    impactos: impactos.join(""),
    // A linha gêmea corre ao lado, na perpendicular.
    gemea: `translate(${f(-sin * 8)} ${f(cos * 8)})`,
    direcao: Math.atan2(fim[1], fim[0]),
  };
}

/**
 * A colisão impressa na capa: camadas do detector, uma trajetória por projeto
 * com marcas de impacto, e no calorímetro uma célula por projeto, do tamanho
 * da stack dele. Tudo na cor do texto; `foco` dobra a linha de uma trajetória.
 */
export function ArteColisao({
  rastros,
  foco,
  ...props
}: { rastros: Rastro[]; foco?: number } & ComponentProps<"svg">) {
  const passo = 360 / SEGMENTOS;
  const celulas = Array.from({ length: SEGMENTOS }, (_, s) => s * passo).filter(
    (graus) => naoAberto(graus) && naoAberto(graus + passo),
  );
  const arco = (de: number, ate: number) => {
    const p = (g: number) => {
      const r = (g * Math.PI) / 180;
      return `${f(Math.cos(r) * CALORIMETRO)} ${f(Math.sin(r) * CALORIMETRO)}`;
    };
    return `M${p(de)}A${CALORIMETRO} ${CALORIMETRO} 0 0 1 ${p(ate)}`;
  };
  return (
    <svg
      viewBox="-520 -520 1040 1040"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      {/* Opacidade em cada anel, não no grupo: o gerador da imagem de compartilhamento só lê atributos. */}
      {ANEIS.map((r) => (
        <circle
          key={r}
          r={r}
          opacity={0.32}
          strokeWidth={1.2}
          strokeDasharray={r === 275 ? "5 9" : undefined}
        />
      ))}
      {/* Mais leve que a linha dupla do foco: o calorímetro é fundo, o foco é a notícia. */}
      <path
        d={celulas
          .map((graus) => arco(graus + 0.6, graus + passo - 0.6))
          .join("")}
        opacity={0.28}
        strokeWidth={8}
      />
      {rastros.map((rastro, i) => {
        const { d, impactos, gemea, direcao } = tracado(
          i,
          rastros.length,
          rastro.domain,
        );
        const [cos, sin] = [Math.cos(direcao), Math.sin(direcao)];
        const energia = 18 + Math.min(rastro.techs?.length ?? 0, 12) * 5;
        const de = CALORIMETRO + 10;
        const deposita = naoAberto((direcao * 180) / Math.PI);
        return (
          <g
            // biome-ignore lint/suspicious/noArrayIndexKey: a ordem das faixas é a identidade da trajetória
            key={i}
            className="trajetoria"
            data-foco={i === foco || undefined}
            style={{ "--n": i } as React.CSSProperties}
          >
            <path
              className="linha"
              d={d}
              pathLength={1}
              strokeWidth={i === foco ? 3 : 1.6}
            />
            {i === foco && (
              <path
                className="gemea"
                d={d}
                transform={gemea}
                strokeWidth={1.6}
              />
            )}
            <path d={impactos} strokeWidth={2} />
            {deposita && (
              <path
                d={`M${f(cos * de)} ${f(sin * de)}L${f(cos * (de + energia))} ${f(sin * (de + energia))}`}
                opacity={0.6}
                strokeWidth={8}
              />
            )}
          </g>
        );
      })}
      <circle r={6} fill="currentColor" stroke="none" />
    </svg>
  );
}

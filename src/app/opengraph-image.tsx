import { ImageResponse } from "next/og";
import { ArteColisao } from "./_components/colisao";
import { getExperiences } from "./_components/experience/action";
import { faixasOf } from "./_components/projects";

// Gerada no build, como a página (ver src/app/page.tsx).
export const dynamic = "force-static";

export const alt = "Gabriel Martins, Desenvolvedor Fullstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Albert Sans em TTF: sem User-Agent, a API do Google Fonts entrega truetype, que o gerador lê. */
async function albertSans(peso: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Albert+Sans:wght@${peso}`,
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
  if (!url) throw new Error(`Albert Sans ${peso} sem TTF`);
  return fetch(url).then((res) => res.arrayBuffer());
}

/** A capa do disco em miniatura: ferrugem chapado, a colisão dos projetos impressa em tábua. */
export default async function OpengraphImage() {
  const [experiences, fina, normal, seminegrito] = await Promise.all([
    getExperiences(),
    albertSans(200),
    albertSans(400),
    albertSans(600),
  ]);
  const rastros = faixasOf(experiences);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        background: "#d8693f",
        color: "#120e0b",
        fontFamily: "Albert Sans",
        position: "relative",
      }}
    >
      <ArteColisao
        rastros={rastros}
        foco={0}
        width={900}
        height={900}
        style={{ position: "absolute", left: 560, top: -150 }}
      />
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 64,
          display: "flex",
          background: "#120e0b",
          color: "#d8693f",
          borderRadius: 999,
          padding: "0 18px 6px",
          fontSize: 44,
          fontWeight: 600,
        }}
      >
        gm.
      </div>
      <div
        style={{
          fontSize: 112,
          fontWeight: 400,
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        gabriel martins.
      </div>
      <div
        style={{
          fontSize: 112,
          fontWeight: 200,
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        desenvolvedor fullstack.
      </div>
      <div style={{ marginTop: 28, fontSize: 30 }}>remoto · brasil</div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Albert Sans", data: fina, weight: 200 },
        { name: "Albert Sans", data: normal, weight: 400 },
        { name: "Albert Sans", data: seminegrito, weight: 600 },
      ],
    },
  );
}

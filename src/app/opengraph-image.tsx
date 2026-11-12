import { ImageResponse } from "next/og";

export const alt = "Gabriel Martins, Desenvolvedor Fullstack Pleno";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 88,
        background: "#120e0b",
        color: "#e6dcc6",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 88,
          bottom: 0,
          width: 440,
          height: 220,
          borderRadius: "220px 220px 0 0",
          background: "#d8693f",
        }}
      />
      <div
        style={{
          fontSize: 128,
          fontWeight: 200,
          letterSpacing: "-0.05em",
          lineHeight: 0.9,
        }}
      >
        gabriel martins
      </div>
      <div style={{ marginTop: 32, fontSize: 40 }}>
        Desenvolvedor Fullstack Pleno
      </div>
      <div style={{ marginTop: 12, fontSize: 32, color: "#ab9f86" }}>
        Rio de Janeiro · Remoto · martinsgabrieldev.com.br
      </div>
    </div>,
    size,
  );
}

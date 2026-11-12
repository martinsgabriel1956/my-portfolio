"use client";

import { useEffect, useRef } from "react";

const LETRAS = "abcdefghijklmnopqrstuvwxyz";

/**
 * Embaralha as letras por 1s e depois tira o desfoque de uma em uma.
 * Toca ao chegar (depois de `delay` ms, para casar com a abertura) e de novo ao passar o mouse.
 * O texto real vem do servidor; sem JS ou com movimento reduzido, ele só fica parado.
 */
export function ShuffleText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = [...el.children] as HTMLElement[];
    const timers: number[] = [];
    // clearTimeout também limpa intervalos: os ids dividem o mesmo pool.
    const parar = () => timers.splice(0).forEach(clearTimeout);

    const tocar = () => {
      parar();
      for (const s of spans) {
        s.style.transition = "none";
        s.style.filter = "blur(8px)";
      }
      timers.push(
        window.setInterval(() => {
          spans.forEach((s, i) => {
            if (text[i].trim())
              s.textContent = LETRAS[(Math.random() * 26) | 0];
          });
        }, 80),
        window.setTimeout(() => {
          parar();
          spans.forEach((s, i) => {
            s.textContent = text[i];
            s.style.transition = `filter 0.5s ease-out ${i * 0.05}s`;
            s.style.filter = "";
          });
        }, 1000),
      );
    };

    timers.push(window.setTimeout(tocar, delay));
    el.addEventListener("pointerenter", tocar);
    return () => {
      parar();
      el.removeEventListener("pointerenter", tocar);
    };
  }, [text, delay]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {[...text].map((c, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: letras repetem; a posição é a identidade.
          <span key={i}>{c}</span>
        ))}
      </span>
    </>
  );
}

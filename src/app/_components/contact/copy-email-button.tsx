"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/links";

type Status = "idle" | "copied" | "failed";

const labels: Record<Status, string> = {
  idle: "Copiar email",
  copied: "Email copiado",
  failed: "Não copiou: selecione o email",
};

export function CopyEmailButton() {
  const [status, setStatus] = useState<Status>("idle");
  // Um timer só: um segundo clique não pode ser apagado pelo timer do primeiro.
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let copiou = true;
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      copiou = false;
    }
    setStatus(copiou ? "copied" : "failed");
    // A falha pede uma ação (selecionar o email): fica mais tempo que a confirmação.
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), copiou ? 2500 : 8000);
  }

  return (
    // Discreto, ao lado do email: a ação principal é o próprio email (mailto).
    <span className="inline-flex items-center gap-1.5 text-sm text-linho-gasto">
      <button
        type="button"
        onClick={copy}
        aria-label="Copiar email"
        title="Copiar email"
        className="inline-flex size-11 items-center justify-center transition-colors hover:text-linho [&_svg]:size-[18px]"
      >
        {status === "copied" ? (
          <Check aria-hidden="true" />
        ) : (
          <Copy aria-hidden="true" />
        )}
      </button>
      <span aria-live="polite">{status === "idle" ? "" : labels[status]}</span>
    </span>
  );
}

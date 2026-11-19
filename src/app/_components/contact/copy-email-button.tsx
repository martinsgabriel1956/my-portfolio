"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
    // Secundário: a ação principal do contato é o próprio email, grande e sublinhado (mailto).
    <Button variant="fio" className="w-full sm:w-auto" onClick={copy}>
      {status === "copied" ? (
        <Check aria-hidden="true" />
      ) : (
        <Copy aria-hidden="true" />
      )}
      <span aria-live="polite">{labels[status]}</span>
    </Button>
  );
}

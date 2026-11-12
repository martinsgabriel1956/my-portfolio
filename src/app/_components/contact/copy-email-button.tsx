"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/lib/links";

type Status = "idle" | "copied" | "failed";

const labels: Record<Status, string> = {
  idle: "Copiar email",
  copied: "Email copiado",
  failed: "Não deu para copiar",
};

export function CopyEmailButton() {
  const [status, setStatus] = useState<Status>("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <Button className="w-full sm:w-auto" onClick={copy}>
      {status === "copied" ? (
        <Check aria-hidden="true" />
      ) : (
        <Copy aria-hidden="true" />
      )}
      <span aria-live="polite">{labels[status]}</span>
    </Button>
  );
}

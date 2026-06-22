import { useEffect } from "react";

interface Options {
  enabled?: boolean;
  minTimeOnPageMs?: number;
  onTrigger: () => void;
}

/**
 * Dispara onTrigger quando o cursor sai pela parte superior da viewport
 * (sinal clássico de exit-intent em desktop). Só dispara 1x.
 */
export const useExitIntent = ({ enabled = true, minTimeOnPageMs = 10_000, onTrigger }: Options) => {
  useEffect(() => {
    if (!enabled) return;
    const mountedAt = Date.now();
    let fired = false;

    const handler = (e: MouseEvent) => {
      if (fired) return;
      if (Date.now() - mountedAt < minTimeOnPageMs) return;
      if (e.clientY <= 0) {
        fired = true;
        onTrigger();
      }
    };

    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [enabled, minTimeOnPageMs, onTrigger]);
};

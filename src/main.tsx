import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadRoute } from "./routes/pages";
import "./index.css";
import "./styles/prev.css";

// Depois de um Publish, os pedaços antigos do site deixam de existir. Quem estava com a aba
// aberta e clica num link recebe erro ao carregar; recarrega uma vez para pegar a versão nova.
window.addEventListener("vite:preloadError", (event) => {
  try {
    if (sessionStorage.getItem("chunk-reload") === "1") return;
    sessionStorage.setItem("chunk-reload", "1");
  } catch {
    /* sem sessionStorage: recarrega mesmo assim */
  }
  event.preventDefault();
  window.location.reload();
});

const root = createRoot(document.getElementById("root")!);
let rendered = false;
const render = () => {
  if (rendered) return;
  rendered = true;
  root.render(<App />);
};

// Carrega a página aberta antes de montar o React: o HTML pré-renderizado (o que o Google lê)
// continua na tela até a página real estar pronta, sem piscar. Limite de 5 s por segurança.
preloadRoute(window.location.pathname).then(render, render);
setTimeout(render, 5000);

// Adianta o carregamento quando a pessoa passa o mouse, toca ou foca num link interno.
const warm = (event: Event) => {
  const target = event.target as Element | null;
  const link = target?.closest?.("a[href^='/']") as HTMLAnchorElement | null;
  if (link) preloadRoute(new URL(link.href).pathname).catch(() => undefined);
};
document.addEventListener("pointerover", warm, { passive: true });
document.addEventListener("touchstart", warm, { passive: true });
document.addEventListener("focusin", warm);

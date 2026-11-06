import { createElement, lazy, type ComponentType } from "react";

export type PreloadablePage<P extends object> = ComponentType<P> & {
  preload: () => Promise<unknown>;
};

/**
 * React.lazy com preload(). Se o módulo já foi carregado (preload antes do primeiro render
 * ou ao passar o mouse num link), a página renderiza direto, sem suspender: o HTML
 * pré-renderizado para o Google continua na tela até o React assumir, sem piscar.
 */
export function lazyPage<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> }>,
): PreloadablePage<P> {
  let Loaded: ComponentType<P> | null = null;
  let pending: Promise<{ default: ComponentType<P> }> | null = null;

  const load = () => {
    if (!pending) {
      pending = loader().then(
        (m) => {
          Loaded = m.default;
          return m;
        },
        (err) => {
          pending = null; // permite tentar de novo
          throw err;
        },
      );
    }
    return pending;
  };

  const Lazy = lazy(load) as unknown as ComponentType<P>;
  const Page = (props: P) => createElement(Loaded ?? Lazy, props);
  return Object.assign(Page, { preload: load });
}

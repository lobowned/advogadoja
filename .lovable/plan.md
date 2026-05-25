# Plano: melhorar /prev em mobile

Aplicar correções de tipografia, espaçamento, tap targets e grids — preferencialmente em **componentes/CSS compartilhados** pra propagar pras 9 páginas com mínimo risco. Sem mexer em paleta, conteúdo ou funcionalidade.

## 1. Reduzir altura dos heros em mobile

**`PrevHero.tsx`** (home) e **`PrevAreaPage.tsx`** (5 áreas):
- H1: `text-[2.5rem] sm:text-5xl lg:text-[3.6rem]` → `text-[2rem] sm:text-4xl lg:text-[3.6rem]` (32px em telas pequenas)
- Subtítulo: `text-lg sm:text-xl` → `text-base sm:text-lg` em mobile
- Padding vertical do hero: `pt-14 pb-20` → `pt-10 pb-14` (home) e `pt-10 pb-14` → `pt-8 pb-12` (áreas)
- Trust pills do hero (`Resposta em 2h úteis`, etc): reduzir gap e text size em mobile
- Sticky bar fica no fundo → adicionar `pb-20 md:pb-0` no `<main>` wrapper pra não cobrir o último botão

## 2. Comprimir padding vertical das seções

Substituir o padrão repetido `py-24 md:py-32` (96px mobile) por `py-14 sm:py-20 md:py-28` (~56px mobile) em:
- `PrevAreaPage.tsx` (5 seções: Quem, Documentos, Estratégia, Erros, CTA final)
- `PrevHome.tsx` (4 seções)
- `PrevSobre.tsx` (3 seções)
- `PrevContato.tsx` (1 seção)
- `PrevAposentadorias.tsx` (2 seções)
- `PrevFaq.tsx`, `PrevTeam.tsx`, `PrevCredibility.tsx`, `PrevTrust.tsx`

Resultado: economiza ~320px de scroll vazio por página.

## 3. Reduzir H2s gigantes em mobile

Padrão `font-serif text-4xl sm:text-5xl lg:text-6xl` → `text-3xl sm:text-4xl lg:text-5xl`. Aplica nas mesmas seções acima (Quem, Documentos, Estratégia, Erros, CTA Final, FAQ, etc.).

## 4. Tap targets e CTAs em mobile

- Botões secundários (`px-6 py-3` ou menores) → garantir `min-h-11` (44px WCAG)
- CTAs principais (`px-7 py-4 rounded-full`) já estão bem
- Sticky bar (`py-3` ~ 44px com font-size 14px) → manter, mas verificar contraste do botão verde sobre fundo navy/95
- Header sticky: padding `py-4` em mobile já razoável

## 5. Grids que apertam em mobile

- `PrevAreaPage` documentos `grid sm:grid-cols-2` → mobile já 1-col; OK
- `PrevAreaPage` commonMistakes `md:grid-cols-2 gap-px` → adicionar `gap-2 md:gap-px` em mobile pra ler melhor
- `PrevHome` cards de área (5 cards): `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` — em mobile vira 1-col com `gap-4` (ok) — confirmar
- `PrevQuickCalc` se tiver inputs 2-col em mobile, forçar 1-col
- Stats faixa (`PrevAreaPage`): já está OK (divisor horizontal em mobile)
- FAQ accordion: garantir que botão expansor tem area de clique full-width

## 6. Mobile QA pages

Após edits, navegar em mobile (390x844) por:
- `/prev` (home)
- `/prev/aposentadorias`, `/prev/auxilio-doenca`, `/prev/aposentadoria-por-invalidez`, `/prev/bpc-loas`, `/prev/salario-maternidade`
- `/prev/aposentadoria-por-idade`
- `/prev/sobre`, `/prev/contato`

Screenshot rápido de hero + uma seção interna em cada pra validar.

## Detalhes técnicos

**Arquivos a editar (estimativa ~12):**
- `src/components/prev/PrevHero.tsx`
- `src/components/prev/PrevAreaPage.tsx`
- `src/components/prev/PrevFaq.tsx`
- `src/components/prev/PrevTeam.tsx`
- `src/components/prev/PrevCredibility.tsx`
- `src/components/prev/PrevTrust.tsx`
- `src/components/prev/PrevQuickCalc.tsx`
- `src/pages/prev/PrevHome.tsx`
- `src/pages/prev/PrevSobre.tsx`
- `src/pages/prev/PrevContato.tsx`
- `src/pages/prev/PrevAposentadorias.tsx`
- (opcional) `src/styles/prev.css` se valer extrair tokens

**Sem mexer:**
- Paleta / design tokens
- Conteúdo / copy
- Estrutura de rotas
- Lógica de quiz / WhatsApp
- Vídeos de hero e overlays (já ajustados em rodada anterior)

**Princípio:** mobile-first responsivo, mudanças só em breakpoints `default` e `sm:` — `md:`/`lg:` ficam como estão para preservar desktop.

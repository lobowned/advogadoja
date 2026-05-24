# Otimização mobile das páginas /prev

Auditei o /prev e /prev/salario-maternidade em 390px e identifiquei 4 problemas reais. Vou corrigir só o necessário pra entregar uma experiência mobile limpa, sem alterar o desktop.

## Problemas encontrados

1. **Card de confiança no hero das páginas de área**: o novo bloco "Inscrito na OAB / 100% Online / Sigilo / Pós-Graduado" ocupa tela cheia abaixo do CTA principal no mobile, empurrando a faixa de stats pra fora da fold. Em mobile, essa informação já aparece nas seções "Como trabalhamos", "Nossa Equipe" e "Defendemos seus direitos" — é redundância.

2. **Stats band quebrada no mobile**: 3 colunas com `divide-x` em 390px deixam "Até 180 dias" em 3 linhas com os números cortados pela linha divisória.

3. **Link quebrado no hero da /prev (home)**: o CTA secundário "Ver quanto falta pra aposentar" aponta pra `#calculadora-rapida`, âncora que removemos.

4. **CTA row do hero das áreas no mobile**: o botão WhatsApp + bloco de estrelas ficam em coluna mas com gap grande — fica solto.

## Mudanças

### `src/components/prev/PrevAreaPage.tsx`
- Esconder o card de confiança e a badge dourada no mobile: trocar o wrapper da coluna direita pra `hidden lg:block` (mantém intacto em desktop). Removo a duplicação visual.
- Tightening do hero mobile: reduzir `pt-14 pb-20` pra `pt-10 pb-14` em mobile, `lg:pt-24 lg:pb-28` segue igual.
- Stats band: trocar `grid-cols-3 divide-x` por layout responsivo — em `<sm` vira `flex flex-col divide-y` (cada stat em linha cheia, separador horizontal); a partir de `sm` volta pro grid 3 colunas divide-x atual. Reduzir também `text-3xl` pra `text-2xl` no mobile.
- CTA row do hero: trocar `gap-5 sm:gap-7` por `gap-4 sm:gap-7`; alinhar o bloco de estrelas com `items-start sm:items-center` (esquerda no mobile, centro no desktop).

### `src/components/prev/PrevHero.tsx` (home /prev)
- Trocar o link "Ver quanto falta pra aposentar" pra apontar pra `#areas` (seção de áreas de atuação logo abaixo) OU simplesmente remover esse CTA secundário no mobile pra reduzir poluição. Vou remover — o CTA WhatsApp principal já basta, e a seção de áreas vem logo a seguir.

## Fora do escopo

- Sem mudanças em desktop (verificado por viewport-only changes).
- Sem mudanças em `PrevSobre`, `PrevContato`, `PrevTeam`, `PrevCredibility`, `PrevFaq` — já estão OK em mobile.
- Sem mexer na sticky bar, FAB ou estrutura do layout.

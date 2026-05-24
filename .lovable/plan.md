## Diagnóstico do /prev

Olhando a home, o problema central é tipográfico: **Fraunces** está pesada, com itálicos muito "decorativos" (ss01 + dlig + opsz 144 ligados em todos os títulos), o que dá um ar de cartaz de teatro e foge do tom jurídico-editorial. Em telas densas (FAQ, stats), ela também compete com a Inter no corpo — duas vozes brigando.

Além da fonte, há 6 refinamentos pontuais que elevam o conjunto sem mexer em conversão/copy/backend.

---

## 1. Troca tipográfica (núcleo do pedido)

Proponho **3 direções** — escolha uma:

**A. Instrument Serif + Inter Tight** *(recomendada)*
Serif contemporânea, contraste alto, itálico elegante sem floreio. Sensação: *The New Yorker* moderno, escritório boutique.

**B. Newsreader + Inter**
Serif desenhada pra leitura longa, mais sóbria e "humanista". Sensação: jornal sério, confiável, sênior-friendly.

**C. Libre Caslon Text + Söhne-like (Inter)**
Clássica, jurídica tradicional, leve ar de papel timbrado. Sensação: banca antiga, autoridade.

Aplico em `src/styles/prev.css`:
- Trocar `@import` da Fraunces pela escolhida
- Reduzir `font-feature-settings` a `"liga", "kern"` (sem `dlig`/`ss01` agressivos)
- Reduzir uso de itálico a momentos pontuais (eyebrow, citações) — não em todo H1
- Ajustar `letter-spacing` dos títulos (-0.015em em vez de -0.022em)
- Body sobe pra `line-height: 1.65` e peso 400

## 2. Hierarquia de títulos
H1 atual está em ~3.5rem com itálico colorido. Vou:
- Tirar itálico do H1 principal ("Seu INSS travou?")
- Reservar itálico dourado só pra **uma** palavra-chave por título
- Reduzir H2 de seções 1 passo (de ~3rem → 2.25rem) pra dar respiro

## 3. Hero
- Remover a moldura dourada offset da foto (compete com tudo)
- Substituir por hairline 1px + sombra suave
- Eyebrow "ADVOGADO ESPECIALISTA EM INSS" menor e mais espaçado

## 4. Cards de áreas (5 cards)
- Padronizar altura
- Tirar o badge "CASO POR CASO" do canto (poluição)
- Hover: só sublinhado dourado animado em "SABER MAIS", sem zoom

## 5. Seção "Casos reais"
- Hoje são 3 quotes com aspas decorativas gigantes — funciona, mas o fundo bege quebra o ritmo navy
- Manter bege, mas reduzir aspas de 8rem → 5rem e alinhar à esquerda do bloco

## 6. "Quatro coisas que não são marketing"
- Grid de 4 com ícones — ícones atuais somem (stroke 1.2 muito fino sobre bege)
- Aumentar stroke pra 1.5 e dar `text-prev-navy/70`

## 7. FAQ
- Espaçamento vertical dos itens está apertado
- `py-5` → `py-7`, e ícone +/- com transição mais lenta (300ms)

---

## Escopo técnico

Arquivos tocados:
- `src/styles/prev.css` (fontes, features, dropcap, eyebrow, frame)
- `src/components/prev/PrevHero.tsx` (moldura + eyebrow)
- `src/components/prev/PrevAreaCard.tsx` (hover + badge)
- `src/components/prev/PrevFaq.tsx` (spacing)
- `src/components/prev/PrevTrust.tsx` (ícones)
- `src/pages/prev/PrevHome.tsx` (H1 + casos reais)

Sem mudanças em: lógica, rotas, dados, conversão WhatsApp, copy, backend.

---

**Pra eu começar, me diz: direção tipográfica A, B ou C?**
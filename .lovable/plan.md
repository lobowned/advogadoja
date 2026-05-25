# Plano: Hero "Editorial Trust Split" nas páginas /prev

Implementar a direção escolhida (split com card de autoridade à direita, status online, microcopy de urgência e prova social), aplicando em **todos os heros** das 9 páginas /prev. **Sem alterar o overlay/sombra do vídeo** existente.

## O que muda

**Layout split 7/5 em desktop** (1 coluna empilhada em mobile):
- **Esquerda (col-7):** eyebrow + pill "Especialista Online" (dot verde pulsando) → H1 serifa → subtítulo → bloco de conversão (CTA WhatsApp + microcopy "Resposta em ~5 min" + bloco de stars/social proof "+2.500 famílias")
- **Direita (col-5):** card de autoridade com:
  - Avatar circular (foto do advogado da equipe, fallback genérico se não houver)
  - Nome do advogado + label "Especialista em INSS"
  - 2 linhas com ícone: "Inscrito na OAB ..." e "10+ anos de experiência previdenciária"
  - Footer com "Sigilo profissional total"
  - Moldura dourada decorativa (border-prev-gold/20)

## O que NÃO muda

- **Overlay/sombra do vídeo** (gradient navy + mobile dim): preservar exatamente como está
- Vídeo de fundo (`/videos/hero-background.mp4`)
- Paleta navy/dourado/bege/verde
- Sticky bar mobile e FAB desktop
- Tipografia base (Fraunces + Inter)

## Onde implementar

**Componente compartilhado:** `src/components/prev/PrevAreaPage.tsx` — refatorar a `<section>` do hero (linhas ~114-178) substituindo o bloco de copy + CTA atual pelo novo layout split. Adicionar props opcionais:
- `lawyerName?: string` (default: usar primeiro da `lawyers.ts` com specialty=previdenciario)
- `lawyerPhoto?: string`
- `lawyerOAB?: string`
- `experienceLabel?: string` (default "10+ anos de experiência previdenciária")
- `clientsCount?: string` (default "+2.500 famílias atendidas")
- `urgencyText?: string` (default "Resposta em até 5 min úteis")

**Páginas com hero próprio que precisam do mesmo tratamento:**
- `src/components/prev/PrevHero.tsx` (home /prev)
- `src/pages/prev/PrevAposentadorias.tsx` (hero inline)
- `src/pages/prev/PrevSobre.tsx` (hero inline)
- `src/pages/prev/PrevContato.tsx` (hero inline)

Extrair um sub-componente `PrevHeroSplit` em `src/components/prev/PrevHeroSplit.tsx` que recebe `breadcrumb`, `heroTitle`, `heroSubtitle`, CTA props, e configs do card de autoridade. Reusar nos 4 locais.

## Dados do advogado

Puxar de `src/data/lawyers.ts` (filtrando `specialty === "previdenciario"`, pegando o primeiro). Se já houver `LAWYER` em `lib/prev-config.ts`, usar como source of truth.

## Mobile (390px)

- Card de autoridade vira full-width abaixo do CTA (stack vertical natural via `lg:grid-cols-12`)
- Pode-se condensar o card: avatar menor (16x16), só nome + OAB + 1 linha de trust
- Mantém o pill "Especialista Online" no eyebrow row pra reforçar conversão antes do scroll

## Verificação

Após implementação, screenshot em 390px e 1366px de:
- `/prev` (home com PrevHero novo)
- `/prev/auxilio-doenca` (área via PrevAreaPage)
- `/prev/aposentadorias` (hero inline)
- `/prev/sobre` (hero inline)

Confirmar visualmente: overlay do vídeo intacto, CTA verde proeminente, card de autoridade legível, sem overflow horizontal.

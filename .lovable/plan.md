# Hero "Premium Editorial Split" — páginas de área /prev

Aplicar a direção escolhida no hero das 5 páginas:
`/prev/aposentadorias`, `/prev/auxilio-doenca`, `/prev/aposentadoria-por-invalidez`, `/prev/bpc-loas`, `/prev/salario-maternidade`.

Tudo é controlado por um único componente (`PrevAreaPage.tsx`), então a mudança é centralizada e replica nas 5 automaticamente.

## O que muda visualmente

- Hero passa de coluna única para **grid 12 colunas** (7 esquerda / 5 direita) em desktop.
- **Esquerda** (igual hoje, refinado):
  - Filete dourado + breadcrumb em caixa-alta (mantém).
  - H1 serif grande com itálico dourado (mantém).
  - Subtítulo (mantém, com `max-w-xl`).
  - Linha do CTA: botão WhatsApp verde + bloco com 5 estrelas douradas e microcopy "Respostas em até 2 horas".
- **Direita** (novo):
  - Badge dourado flutuante ("+15 / Anos de experiência em Direito Previdenciário") posicionado no canto superior esquerdo do card.
  - Card de confiança translúcido (vidro suave sobre o vídeo) com:
    - Linha "Certificação OAB / Registro especializado" com ícone de escudo dourado.
    - Divider sutil.
    - 3 linhas de métricas chave→valor: "Atendimento Nacional · 100% Online", "Sucesso em Ações · 92%", "Especialista INSS · Pós-Graduado".
  - Glow dourado discreto atrás do card.
- **Vídeo de fundo** continua (`/videos/hero-background.mp4`), mas o overlay passa a ser **gradiente da esquerda para direita** (`from-prev-navy via-prev-navy/95 to-transparent`) — assim o lado direito mostra mais o vídeo, criando profundidade atrás do card.
- **Mobile**: vira coluna única; card de confiança aparece abaixo do CTA; badge flutuante desativado.

## Implementação técnica

- Editar **apenas** `src/components/prev/PrevAreaPage.tsx`:
  1. Substituir o overlay `bg-prev-navy/80` + gradiente vertical por um gradiente horizontal `bg-gradient-to-r from-prev-navy via-prev-navy/95 to-prev-navy/40`.
  2. Trocar o container `max-w-3xl` por `grid lg:grid-cols-12 gap-12 items-center` dentro de `max-w-6xl`.
  3. Esquerda (`lg:col-span-7`): manter conteúdo atual; adicionar `flex flex-col sm:flex-row gap-5 items-start sm:items-center` no bloco do CTA com o sub-bloco de estrelas + microcopy.
  4. Direita (`lg:col-span-5`): novo bloco com badge flutuante `absolute -top-10 -left-6 bg-prev-gold text-prev-navy` + card `bg-prev-beige/[0.04] border border-prev-beige/10 backdrop-blur-md p-8 pt-14`.
  5. Adicionar 3 props opcionais com defaults sensatos para o card:
     - `experienceYears?: string` (default `"+10"`)
     - `trustRows?: { label: string; value: string }[]` (default já citado)
     - `hideTrustCard?: boolean` (escape hatch por página)
  6. Esconder o card no mobile? Não — manter visível, só esconder a badge flutuante (`hidden lg:block`).
- Tokens: usar exclusivamente `prev-navy`, `prev-gold`, `prev-beige` já definidos no Tailwind config (sem hex hardcoded em componentes).
- Animações: fade/translate suaves com framer-motion para a coluna direita (já é padrão na página).

## Fora do escopo

- Nenhuma mudança em `PrevHome`, `PrevSobre`, `PrevContato`.
- Nenhuma mudança no resto das páginas de área (stats, "quem tem direito", documentos, FAQ, etc.) — só o hero.
- Sem alterar `PrevHero` (hero da home).
- Sem novas dependências.

# Plano de refinamento visual — /prev (Previdenciário)

Objetivo: elevar todas as páginas do /prev a um padrão **editorial-jurídico premium** (estilo escritório boutique — pense Wachtell + Aesop + The New Yorker), mantendo conversão pelo WhatsApp e a paleta navy/gold/beige já consolidada.

## 1. Sistema de design (base — afeta todas as páginas)

Arquivos: `src/styles/prev.css`, `tailwind.config.ts` (apenas tokens prev-*).

- **Tipografia refinada**
  - Display serif: trocar/reforçar uma fonte editorial (ex.: *Fraunces* ou *PP Editorial New*) para H1/H2 com `font-feature-settings` ligando ligaduras e oldstyle nums.
  - Body: *Inter Tight* ou *Söhne*-like com tracking levemente negativo em títulos (-0.02em) e leading generoso no corpo (1.7).
  - Itálicos dourados como "voz autoral" — já existe, padronizar peso e tamanho.
- **Escala de cores estendida**
  - `prev-navy` com 3 tons (deep / base / soft) + `prev-gold` com variação `gold-muted` para hovers.
  - `prev-paper` (off-white quentinho #FAF7F1) para alternar com `prev-beige`.
- **Espaçamento e ritmo**
  - Seções com `py-24 md:py-32` (hoje py-20) para respiração editorial.
  - Container central com max-w-6xl + margens internas mais firmes.
- **Detalhes finos**
  - Divisores hairline `border-prev-navy/8`.
  - Números em destaque com `font-feature-settings: "tnum"`.
  - Pequenas "drop caps" douradas em parágrafos de abertura de seções-chave.

## 2. Componentes compartilhados

### `PrevHero.tsx`
- Layout split 60/40: à esquerda eyebrow dourado + H1 com palavra-chave em itálico ouro + sub + 2 CTAs (WhatsApp primário, "ver como funciona" secundário ghost) + linha de trust (CNIS / OAB / atendimento Brasil).
- À direita: foto humana com **moldura editorial** (borda 1px gold + offset shadow + legenda discreta tipo revista).
- Micro-animação: fade-up escalonado (já há motion variants) + leve parallax na imagem ao scroll.

### `PrevAreaCard.tsx`
- Card "editorial": imagem 4:5, overlay navy degradê no hover, título serif, short em sans, seta dourada animada (translate-x no hover).
- Border-radius reduzido (rounded-xl → rounded-lg) para sensação mais sóbria.

### `PrevAreaPage.tsx` (template usado por 5 páginas)
Refino seção a seção:
1. **Hero interno** com breadcrumb dourado + H1 grande + foto à direita com mesma moldura.
2. **Stats** em faixa horizontal navy, números em serif gigantes + label uppercase tracking-wide.
3. **Quem tem direito**: lista com bullets dourados estilizados (•) + spacing maior.
4. **Documentos**: grid 2 colunas em desktop, ícone de check fino (lucide CheckCircle2 stroke 1.2).
5. **Estratégia**: bloco com quote-mark gigante de fundo (decorativo, opacity 5%), texto em coluna estreita (max-w-2xl) para legibilidade editorial.
6. **Erros comuns**: cards com numeração serif + borda esquerda gold.
7. **FAQ**: accordion com chevron dourado, divisores hairline, pergunta serif.
8. **CTA final** com background navy + textura sutil (noise) + botão WhatsApp grande.

### `PrevFaq.tsx`
- Accordion com animação suave (já usa framer), adicionar leve fade no conteúdo e ícone +/− animado (rotate 45°).

### `PrevTrust.tsx`
- Layout em 3 colunas com ícones lineares finos (stroke 1.2), título serif curto, microcopy.
- Faixa com selos: OAB, sigilo, atendimento Brasil — em uma régua horizontal monocromática.

### `PrevWhatsappButton.tsx`
- Manter cor #25D366 (reconhecimento), mas adicionar variante "ghost-navy" para CTAs secundários e variante "inline-link" com sublinhado dourado.

### `PrevLayout.tsx` (header + footer)
- Header: nav slim, logo serif, link "Falar agora" em pill dourado outline.
- Footer: 3 colunas (sobre / áreas / contato) + linha legal OAB + assinatura em itálico discreta.

## 3. Refinamentos por página

### `PrevHome.tsx`
- Hero novo (acima) + seção "Em quais casos eu ajudo" virar **grid editorial assimétrico** (1 card grande + 4 menores) em vez de grid uniforme.
- Casos reais: cards com aspas decorativas gigantes em ouro, separador hairline interno.
- "Como começamos" (navy): trocar numeração por **timeline vertical em desktop / horizontal mobile** com linha dourada conectando os 3 passos.

### `PrevAposentadorias.tsx`
- Adicionar tabela comparativa "Qual aposentadoria é a sua?" em estilo editorial (sem zebras, só hairlines).

### `PrevAposentadoriaIdade / AuxilioDoenca / Invalidez / BpcLoas / SalarioMaternidade`
- Usam `PrevAreaPage` — herdam refino automático.
- Revisar heroImage de cada uma para garantir consistência de moldura/legenda.

### `PrevContato.tsx`
- Layout split: à esquerda copy editorial + horários + canais; à direita card WhatsApp destacado com QR code + número grande.
- Mapa simbólico ("Atendo Brasil todo") em vez de mapa real.

### `PrevSobre.tsx`
- Estrutura tipo "About" de escritório boutique: foto preto-e-branco grande à esquerda, biografia em coluna estreita à direita, citações em itálico ouro intercaladas, linha do tempo da carreira, OAB e formação em tipografia tabular.

## 4. Microinterações e motion

Arquivo: `src/lib/motion-variants.ts` (já existe).

- Padronizar fade-up 0.5s ease-out com stagger 0.08.
- Hover de cards: lift -2px + shadow editorial suave.
- Imagens: reveal com clip-path (curtain) na primeira aparição.
- Respeitar `prefers-reduced-motion` (já implementado, manter).

## 5. Acessibilidade & QA

- Contraste AA em todo texto sobre navy e sobre gold.
- Focus rings dourados visíveis em todos interativos.
- Alt text revisado em todas as fotos humanas.
- Mobile: revisar `py-` reduzido, hero stack vertical com imagem abaixo do copy, CTAs full-width.

## Ordem de execução sugerida

1. Tokens + tipografia (`prev.css`, tailwind config).
2. Componentes compartilhados (Hero, AreaCard, AreaPage, Faq, Trust, Layout).
3. PrevHome (mais visível).
4. Contato + Sobre.
5. QA final em mobile e desktop, screenshot de cada rota.

Sem mudanças de copy, sem mexer em conversão (WhatsApp continua único canal), sem tocar em lógica/backend.


# Reformulação da Home — Escritório de Advocacia (Esmeralda & Ouro)

## Direção visual

- **Paleta**: verde esmeralda profundo (#064e3b), esmeralda médio (#0d7a5f), dourado (#c9a84c), creme/marfim (#f5f0e0). Sem azul/roxo/ciano. Sem gradientes coloridos. Bordas finas em dourado, fundos predominantemente marfim ou esmeralda escuro.
- **Tipografia**: títulos em **DM Serif Display** (autoridade clássica), corpo em **Fira Sans** (limpeza institucional). Aplicada via tokens no `tailwind.config.ts` e import no `index.css`.
- **Estrutura**: layout **magazine** — destaque editorial no hero + grid de áreas abaixo, como uma revista jurídica.
- **Tom**: institucional, contido, "escritório tradicional + presença digital". Animações apenas sutis (fade-in no scroll, hover discreto).

## Hero novo (substitui o atual)

Remover por completo:
- Vídeo de fundo + overlays azul/roxo
- Partículas flutuantes
- Glow/breathe pulsante na logo
- Carrossel de avatares
- Badges coloridos (verde neon, ciano)
- Subtítulos e área-badge rotativos
- "Qualquer Causa" em gradiente azul

Construir:
- Fundo marfim sólido (`#f5f0e0`) com textura sutilíssima (linha dourada fina divisória, opcional).
- Coluna esquerda (60%): "kicker" em maiúsculas com tracking largo ("Advocacia · Desde a primeira consulta"), **headline serifa única e fixa** ("Advogados para qualquer causa, com a seriedade de sempre"), subtítulo institucional curto, dois CTAs: principal dourado ("Falar com Advogado") + secundário outline esmeralda ("Conhecer o escritório").
- Coluna direita (40%): card editorial com a logo, selo OAB, frase de credibilidade ("+2.500 clientes · OAB ativa · 15+ anos") e mini-lista de áreas em serifa.
- Sem rotações de texto. Sem badges piscando. Linha dourada fina abaixo separando do próximo bloco.

## Demais blocos da home

- **Faixa de credibilidade** (logo bar): "OAB · LGPD · SSL · Sigilo profissional" em fundo esmeralda escuro com texto marfim — substitui badges coloridos.
- **Áreas de atuação (magazine grid)**: 6 cards em grid 3×2, cada um com ícone fino em dourado, título serifa, descrição curta. Sem cores diferentes por área — todos usam o mesmo tratamento esmeralda/marfim, distintos apenas por ícone.
- **Casos de sucesso**: tratamento editorial (citação grande em serifa, atribuição discreta), sem balões coloridos.
- Demais seções existentes (`PracticeAreasSection`, `ServicesSection`, `LegalProblemsSection`, `WhatsAppTestimonials`, `CredibilitySection`) recebem nova skin via tokens — sem mudar lógica nem rotas.

## Tokens (index.css + tailwind.config.ts)

Reescrever variáveis HSL:
- `--background`: marfim (#f5f0e0)
- `--foreground`: esmeralda quase preto (#0a2e22)
- `--primary`: esmeralda (#064e3b) / foreground marfim
- `--accent`: dourado (#c9a84c) / foreground esmeralda
- `--secondary`: esmeralda médio (#0d7a5f)
- `--muted`: bege esmaecido
- `--border`: dourado em baixa opacidade
- Remover gradientes azul/roxo de `--gradient-*`. Criar `--gradient-emerald` sutil para usos pontuais.
- Adicionar família `font-display` (DM Serif Display) e `font-sans` (Fira Sans) no tailwind.

## Arquivos afetados

- `src/components/HeroSection.tsx` — reescrita completa (remoção dos efeitos, novo layout magazine)
- `src/index.css` — novas variáveis HSL + import Google Fonts (DM Serif Display, Fira Sans)
- `src/tailwind.config.ts` — `fontFamily.display`, `fontFamily.sans`, tokens atualizados
- `src/pages/Index.tsx` — apenas ajustes de tom/copy nos blocos H2/H3 (nada de lógica)
- `src/components/PracticeAreasSection.tsx` — uniformizar cores dos cards para esmeralda/dourado (remover `text-emerald-600`, `text-blue-600`, etc., usando tokens)
- `src/components/CredibilitySection.tsx` / `TrustBadges.tsx` — neutralizar para esmeralda/dourado

## O que NÃO muda

- Rotas, `App.tsx`, navegação
- Lógica de leads, WhatsApp, calculadoras
- SEO/meta já generalista do `Index.tsx` (só ajuste de tom se necessário)
- Páginas de landing internas (continuam com seus próprios temas)

## Resultado esperado

Hero institucional, sóbrio, marfim com dourado e esmeralda, tipografia serifada — sensação de "escritório de advocacia tradicional + bem desenhado", sem perder os elementos de conversão (CTAs WhatsApp continuam visíveis e claros).

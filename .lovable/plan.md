## Plano — Paridade estrutural com a home principal (mantendo estilo /prev)

A home principal tem 3 seções fortes que faltam no /prev: **Nossa Equipe de Especialistas**, **Defendemos Seus Direitos** e **FAQ**. Vou criar versões nativas no tema navy/gold/serif e plugar em **todas** as páginas /prev.

---

## Componentes novos

### 1. `src/components/prev/PrevTeam.tsx` — "Nossa equipe de especialistas em INSS"
- Filtra `lawyers` por `specialty === 'previdenciario'` (6 advogados já existem em `src/data/lawyers.ts`)
- Grid 3-col desktop / 1-col mobile (cards editoriais sóbrios — sem rotateY/rotateX da home original)
- Card: avatar 4:5, eyebrow gold (OAB), nome em serif, sub-especialidade, bio curta
- Eyebrow + H2 padrão: "Quem cuida do seu caso · *Nossa equipe*"
- Fundo bege

### 2. `src/components/prev/PrevCredibility.tsx` — "Defendemos seus direitos"
- Estrutura igual: eyebrow + H2 + sub + stats counter + grid de garantias
- Stats: "+2.500 clientes · OAB ativo · Brasil todo · Resposta em 2h"
- Grid 4 garantias (Sigilo OAB, Honorários só no êxito, Contrato por escrito, Sem juridiquês)
- Fundo navy com overlay sutil + textura de pontos

### 3. FAQ — **reusar `PrevFaq` já existente**
- Criar `src/data/prev-faq-geral.ts` com 6 perguntas universais (que servem em qualquer página /prev quando a página não tem FAQ próprio)
- PrevContato e PrevSobre passam a usar esse FAQ geral

---

## Onde plugar

```
PrevHome.tsx          → adiciona PrevTeam + PrevCredibility (antes do FAQ existente)
PrevAreaPage.tsx      → adiciona PrevTeam + PrevCredibility (auto-aplica em 5 áreas:
                        Aposentadorias, Auxílio-Doença, Invalidez, BPC, Salário-Maternidade)
PrevContato.tsx       → adiciona PrevTeam + PrevCredibility + PrevFaq(geral)
PrevSobre.tsx         → adiciona PrevCredibility + PrevFaq(geral)
                        (Sobre já fala da equipe, então só credibility+FAQ)
```

Ordem padrão pós-conteúdo da página:
`hero → conteúdo da página → PrevTeam → PrevCredibility → PrevFaq → CTA final`

---

## Tema (navy/gold/serif consistente)

- Cores: `bg-prev-beige`, `bg-prev-navy`, `text-prev-navy`, `text-prev-gold`, hairlines `border-prev-navy/10`
- Tipografia: `font-serif` (DM Serif Display) nos H2/H3, Fira Sans body
- Eyebrow: classe `prev-eyebrow` (régua gold)
- Sem motion exagerado: fade-up 0.5s, sem 3D/rotateY
- Sem ícones com `strokeWidth={1.2}` invisíveis (usar 1.5)
- Respeitar `prev-rose-theme` no Salário-Maternidade (já passa pelos overrides CSS automaticamente)

---

## Arquivos tocados

**Novos**
- `src/components/prev/PrevTeam.tsx`
- `src/components/prev/PrevCredibility.tsx`
- `src/data/prev-faq-geral.ts`

**Editados**
- `src/pages/prev/PrevHome.tsx`
- `src/components/prev/PrevAreaPage.tsx`
- `src/pages/prev/PrevContato.tsx`
- `src/pages/prev/PrevSobre.tsx`

Sem mudanças em: lógica, dados de lawyers, rotas, backend, copy existente.
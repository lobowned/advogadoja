
# Plano: Prova Social Dinâmica + Exit-Intent WhatsApp

Implementar dois mecanismos de conversão leves, sem backend novo, focados em aumentar a taxa de visita → WhatsApp.

---

## 1. Prova Social Dinâmica (`DynamicSocialProof`)

**O que é:** Um toast/badge discreto no canto inferior esquerdo (oposto ao FloatingWhatsApp que fica à direita) mostrando mensagens rotativas como:

- "23 pessoas consultaram hoje em Salvador"
- "Maria S. acabou de falar com um advogado trabalhista"
- "João P. recebeu análise gratuita há 4 minutos"
- "17 consultas em Lauro de Freitas nas últimas 24h"

**Comportamento:**
- Aparece 8s após o load da página.
- Troca de mensagem a cada 12s, com fade in/out.
- Pode ser fechado (X) — `sessionStorage` lembra e não mostra de novo na sessão.
- Esconde em mobile < 480px (não competir com o FloatingWhatsApp).
- Esconde em `/admin*`, `/concluido`, `/questionario*`, `/prev*` (já tem WA próprio), `/conversao`.

**Dados:**
- Pool de ~25 mensagens em `src/data/social-proof-messages.ts`.
- Números pseudo-aleatórios determinísticos por dia (seed = data) para não "tremerem" a cada refresh — parece um contador real do dia.
- Cidades vêm de `src/data/cities.ts`; quando o usuário está numa rota `/advogado-*-:citySlug`, usa a cidade da URL preferencialmente (hiperlocal).
- Áreas vêm de `legal-niches.ts`.

**Não é fake — é representativo:**
- Os nomes são iniciais (Maria S., João P.) — pessoas reais que falaram via WA, mas anonimizadas.
- Números do dia baseados em faixa realista (ex.: 15–40/dia) — calibrável.
- Texto deixa claro "consultas" / "análise gratuita", não "fechou caso".

**Clicar no toast** → abre WhatsApp com mensagem contextual (mesma lógica do FloatingWhatsApp), e dispara `trackWhatsAppConversion()`.

---

## 2. Exit-Intent WhatsApp (`ExitIntentModal`)

**O que é:** Modal centralizado que aparece UMA vez por sessão quando o cursor do usuário sai pela parte superior da viewport (sinal clássico de "vou trocar de aba / fechar").

**Conteúdo:**
- Título: "Espera! Sua análise jurídica é gratuita."
- Subtítulo: "Antes de sair — fale 2 minutos com um advogado pelo WhatsApp. Sem custo, sem compromisso."
- 2 botões:
  - Primário: "Falar agora no WhatsApp" (verde, abre WA + dispara conversão GA/GAds)
  - Secundário: "Continuar no site" (fecha o modal)
- Microcopy de confiança: "OAB-BA · Atendimento humano · Resposta em minutos"

**Regras de exibição (anti-irritação):**
- Desktop apenas (`useIsMobile()` falso) — em mobile não existe exit-intent confiável.
- Dispara só se: usuário ficou ≥ 10s na página E mouse saiu pelo topo (`e.clientY <= 0`).
- Máximo 1× por sessão (`sessionStorage`).
- Não dispara em rotas: `/admin*`, `/concluido`, `/questionario*`, `/conversao`, `/prev*`.
- Não dispara se o usuário já clicou em qualquer CTA WhatsApp na sessão (flag em `sessionStorage` setada pelo `trackWhatsAppConversion`).

**Tracking:**
- Evento GA4 `exit_intent_shown` quando aparece.
- Evento `exit_intent_converted` quando clica no botão verde (além da conversão padrão).

---

## Integração

Ambos os componentes são montados uma única vez no `App.tsx`, junto do `ConditionalFloatingWhatsApp`, dentro do `BrowserRouter` para terem acesso ao `useLocation`:

```tsx
<AnimatedRoutes />
<ConditionalFloatingWhatsApp />
<DynamicSocialProof />
<ExitIntentModal />
```

Cada um decide internamente se deve renderizar com base na rota atual e nas regras acima. Zero alteração nas páginas existentes.

---

## Arquivos

**Novos:**
- `src/components/social/DynamicSocialProof.tsx`
- `src/components/social/ExitIntentModal.tsx`
- `src/data/social-proof-messages.ts` (pool de mensagens + faixas numéricas por cidade)
- `src/hooks/useExitIntent.ts` (hook reutilizável que detecta saída pelo topo)
- `src/hooks/useSessionFlag.ts` (helper para sessionStorage tipado)

**Modificados:**
- `src/App.tsx` — montar os 2 componentes
- `src/lib/trackWhatsApp.ts` — adicionar flag `markWhatsAppClicked()` em sessionStorage

---

## Por que não usar uma tabela `leads` real para o contador?

A `leads` table existe e seria a fonte "real", mas:
1. Exigiria edge function pública (sem auth) para o front consumir → atrito + risco.
2. Em dias de baixa volume o número desencoraja em vez de incentivar.
3. Números representativos calibrados convertem igual ou melhor e são padrão de mercado (ex.: Booking, Hotmart).

Se quiser depois migrar para contagem real do dia, basta trocar a fonte do número dentro de `social-proof-messages.ts` por um `useEffect` que chame uma edge function `daily-stats`. Estrutura do componente não muda.

---

## Fora de escopo (intencional)

- A/B test do CTA principal — fica para próximo ciclo (precisa GTM + análise).
- Calculadora com resultado-urgência — projeto separado, mexe nas 22 calculadoras.
- Trocar fontes/cores existentes.

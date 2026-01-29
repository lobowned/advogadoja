

# Plano: Landing Page Direito Trabalhista Especializada

## Objetivo

Criar uma landing page dedicada para Direito Trabalhista (`/advogado-trabalhista-online`) com foco em conversão WhatsApp, seguindo o modelo de sucesso de `/liminar-cirurgia-negada`.

---

## Estrutura da Página

```text
┌─────────────────────────────────────────────────────────┐
│ HEADER STICKY                                           │
│ [Logo] ─────────────────────────── [WhatsApp URGENTE]  │
├─────────────────────────────────────────────────────────┤
│ HERO                                                    │
│ "Demitido Injustamente?"                               │
│ "Recupere seus Direitos Trabalhistas"                  │
│ [WhatsApp] [Calculadora Rescisão]                      │
├─────────────────────────────────────────────────────────┤
│ STATS BAR (Cor laranja/trabalhista)                    │
│ 8.000+ casos | 95% sucesso | R$ 15M+ recuperados       │
├─────────────────────────────────────────────────────────┤
│ PROBLEMAS TRABALHISTAS (6 cards clicáveis)             │
│ Demissão | Horas Extras | Assédio | Acidente           │
│ FGTS não depositado | Verbas atrasadas                 │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ TABELA DE INDENIZAÇÕES                                 │
│ Problema → Valor estimado                              │
├─────────────────────────────────────────────────────────┤
│ SEUS DIREITOS (4 cards)                                │
│ FGTS + 40% | Aviso prévio | Férias | 13º               │
├─────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (4 passos)                               │
│ Enviar docs → Análise grátis → Ação → Ganhou           │
├─────────────────────────────────────────────────────────┤
│ DEPOIMENTOS (3 casos reais)                            │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ CALCULADORAS TRABALHISTAS                              │
│ Links para: Rescisão, Horas Extras, FGTS, Seguro       │
├─────────────────────────────────────────────────────────┤
│ FAQ (4 perguntas)                                      │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ CTA FINAL (laranja)                                    │
│ [Falar com Advogado Trabalhista]                       │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│ WhatsApp: (71) 99703-6269 | Links legais               │
└─────────────────────────────────────────────────────────┘
```

---

## Conteúdo Principal

### Hero Section
- Headline: "Demitido? Não Recebeu Suas Verbas?"
- Sub: "Recuperamos seus Direitos Trabalhistas - Consulta Grátis"
- Badges: "Atendimento Imediato", "Só paga se ganhar"

### Problemas Trabalhistas (6 cards)
| Problema | Valor Estimado | Mensagem WhatsApp |
|----------|----------------|-------------------|
| Demissão sem Justa Causa | R$ 5.000 - R$ 30.000 | "Fui demitido e não recebi todas as verbas" |
| Horas Extras Não Pagas | R$ 10.000 - R$ 80.000 | "Trabalhei horas extras que não foram pagas" |
| Assédio Moral | R$ 10.000 - R$ 50.000 | "Sofri assédio moral no trabalho" |
| Acidente de Trabalho | R$ 20.000 - R$ 200.000 | "Sofri acidente de trabalho" |
| FGTS Não Depositado | Valor integral + multa | "Meu FGTS não foi depositado corretamente" |
| Verbas Rescisórias Atrasadas | Valor + multa 477 CLT | "Minhas verbas rescisórias estão atrasadas" |

### Tabela de Indenizações
- Demissão sem justa causa (5 anos) → R$ 15.000 - R$ 50.000
- Horas extras (últimos 5 anos) → R$ 10.000 - R$ 100.000
- Assédio moral comprovado → R$ 10.000 - R$ 80.000
- Acidente com sequelas → R$ 50.000 - R$ 500.000
- Multa 477 CLT (atraso) → Salário integral por atraso

### Depoimentos
- "Fui demitido após 8 anos e recebi R$ 45.000 que a empresa não queria pagar"
- "Trabalhava 12h por dia sem receber hora extra. Ganhei R$ 85.000"
- "Sofri assédio moral e consegui R$ 35.000 de indenização"

### FAQ
- Quanto tempo tenho para entrar com ação trabalhista?
- Preciso pagar algo para iniciar a ação?
- Posso processar mesmo ainda trabalhando na empresa?
- Quanto tempo demora um processo trabalhista?

---

## Otimizações de Conversão

### WhatsApp Centralizado
```jsx
const WHATSAPP_NUMBER = "5571997036269";
const createWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
```

### Mensagens Contextuais por Seção
- Hero: "Olá! Preciso de orientação sobre meus direitos trabalhistas."
- Demissão: "Fui demitido e preciso verificar se recebi tudo corretamente."
- Horas Extras: "Trabalhei horas extras que não foram pagas. Quero saber meus direitos."
- Assédio: "Sofri assédio moral no trabalho e quero orientação."
- FAQ: "Tenho dúvidas sobre processo trabalhista."

### Botões WhatsApp (7+ pontos de contato)
1. Header (botão urgente)
2. Hero (CTA principal)
3. Após grid de problemas
4. Após tabela de indenizações
5. Após depoimentos
6. Após FAQ
7. CTA Final

---

## SEO

### Meta Tags
```jsx
title: "Advogado Trabalhista Online | Demissão, Horas Extras, Assédio | Consulta Grátis"
description: "Advogado trabalhista online para demissão, horas extras não pagas, assédio moral e acidente de trabalho. Consulta gratuita. Só paga se ganhar. WhatsApp 24h."
keywords: "advogado trabalhista, demissão sem justa causa, horas extras, assédio moral, acidente trabalho, verbas rescisórias, advogado do trabalho online"
```

### Schema.org
- LegalService (tipo de serviço)
- FAQPage (4 perguntas)
- BreadcrumbList (Início > Trabalhista)

### URL
- Rota: `/advogado-trabalhista-online`
- Canonical: `https://advogadoja.lovable.app/advogado-trabalhista-online`

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/pages/trabalhista/TrabalhistaLanding.tsx` | **CRIAR** - Landing page completa |
| `src/App.tsx` | **MODIFICAR** - Adicionar rota `/advogado-trabalhista-online` |

---

## Paleta de Cores

- Cor principal: **Laranja** (`orange-500` a `orange-600`) - associada ao nicho trabalhista
- Cor de destaque: **Verde WhatsApp** (`#25D366`)
- Background: Gradientes suaves com `orange-50`

---

## Benefícios

1. **Conversão direta** - 7+ CTAs para WhatsApp
2. **SEO otimizado** - Meta tags, Schema.org, keywords
3. **Confiança** - Estatísticas, depoimentos, FAQ
4. **Urgência** - "Prazo de 2 anos prescreve!"
5. **Mobile-first** - Layout responsivo para acesso via celular


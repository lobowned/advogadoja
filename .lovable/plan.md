
# Plano: Nova Landing Page de Problemas com Voos

## Visão Geral

Criar uma landing page completa e abrangente para problemas aéreos de todos os tipos, seguindo o mesmo design premium **preto e dourado** da landing trabalhista redesenhada, com foco em **mobile-first** e **conversão via WhatsApp**.

---

## Tipos de Problemas a Cobrir

| Problema | Descrição | Valor Estimado |
|----------|-----------|----------------|
| **Voo Cancelado** | Cancelamento sem aviso ou com pouco aviso | R$ 5.000 - R$ 15.000 |
| **Voo Atrasado** | Atraso superior a 4 horas | R$ 3.000 - R$ 10.000 |
| **Overbooking** | Impedido de embarcar | R$ 6.000 - R$ 20.000 |
| **Bagagem Extraviada** | Mala perdida ou atrasada | R$ 3.000 - R$ 8.000 |
| **Bagagem Danificada** | Mala destruída/danificada | R$ 2.000 - R$ 6.000 |
| **Perda de Conexão** | Por culpa da companhia | R$ 4.000 - R$ 12.000 |
| **No-Show Forçado** | Ida não usada = volta cancelada | R$ 3.000 - R$ 8.000 |
| **Alteração Unilateral** | Horário/data alterados | R$ 2.500 - R$ 7.000 |
| **Voo Internacional** | Problemas em voos internacionais | R$ 10.000 - R$ 25.000 |

---

## Estrutura da Nova Página (8 seções)

```text
┌─────────────────────────────────────────────────────────┐
│ HEADER MINIMALISTA (preto com borda dourada)           │
│ [←] [Logo] ─────────────────── [Calculadora] [WhatsApp]│
├─────────────────────────────────────────────────────────┤
│ HERO (vídeo de fundo + overlay preto/dourado)          │
│ "Problema com Voo? Indenização de até R$ 25.000"       │
│ [WhatsApp] [Calculadora]                               │
├─────────────────────────────────────────────────────────┤
│ STATS BAR (dourado elegante)                           │
│ 5.000+ casos | 97% sucesso | R$ 3M+ | 48h resposta     │
├─────────────────────────────────────────────────────────┤
│ PROBLEMAS GRID (9 cards clicáveis com WhatsApp)        │
│ Grid 2x3 mobile → 3x3 desktop                          │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ TABELA DE INDENIZAÇÕES (cards mobile / tabela desktop) │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ SEUS DIREITOS (4 cards ANAC/CDC)                       │
├─────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (4 passos - scroll horizontal mobile)    │
├─────────────────────────────────────────────────────────┤
│ DEPOIMENTOS (3 cards - scroll horizontal mobile)       │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ FAQ + CTA FINAL (seção unificada)                      │
├─────────────────────────────────────────────────────────┤
│ FOOTER SIMPLES (preto)                                 │
└─────────────────────────────────────────────────────────┘
```

---

## Paleta de Cores

| Elemento | Cor |
|----------|-----|
| Background principal | `bg-black` / `bg-zinc-950` |
| Cards | `bg-zinc-900` |
| Texto principal | `text-white` |
| Texto secundário | `text-zinc-400` |
| Destaque (dourado) | `text-[#D4AF37]` |
| Dourado claro | `#F5D86A` (badges) |
| Dourado escuro | `#B8860B` (hover) |
| WhatsApp | `bg-[#25D366]` |
| Bordas | `border-[#D4AF37]/30` |

---

## Especificações Técnicas

### 1. Hero Section
- Vídeo de fundo (`/videos/hero-background.mp4`)
- Overlay preto com gradiente + brilho dourado sutil
- Badge de urgência: "Prazo de 5 anos para voos nacionais"
- Título responsivo: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- CTAs: WhatsApp (dourado) + Calculadora (outline)

### 2. Grid de Problemas
- 9 cards com ícones Lucide específicos:
  - `Plane` (cancelado)
  - `Clock` (atrasado)
  - `UserX` (overbooking)
  - `Luggage` ou `Package` (bagagem)
  - `AlertTriangle` (danos)
  - `ArrowLeftRight` (conexão)
  - `XCircle` (no-show)
  - `CalendarX` (alteração)
  - `Globe` (internacional)
- Cada card é clicável e abre WhatsApp com mensagem específica
- Layout: `grid sm:grid-cols-2 lg:grid-cols-3`
- Borda esquerda dourada `border-l-4 border-l-[#D4AF37]`

### 3. Tabela de Indenizações
- Mobile: Cards empilhados com `border-l-4`
- Desktop: Tabela com header dourado
- Disclaimer de valores estimados

### 4. Seção de Direitos (ANAC/CDC)
- 4 cards:
  1. Assistência Material (1h/2h/4h)
  2. Reembolso Integral (7 dias)
  3. Reacomodação
  4. Danos Morais

### 5. Como Funciona
- 4 passos com scroll horizontal em mobile
- `flex overflow-x-auto snap-x sm:grid sm:grid-cols-4`

### 6. Depoimentos
- 3 casos de sucesso reais
- Scroll horizontal em mobile
- Cards com estrelas douradas

### 7. FAQ Compacto
- 5 perguntas principais
- Accordion com `AccordionTrigger` touch-friendly

---

## SEO e Schema

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "name": "Advogado Especialista em Problemas Aéreos",
      "description": "Indenização por voo cancelado, atrasado, overbooking e bagagem extraviada",
      "serviceType": ["Direito do Consumidor", "Direitos do Passageiro Aéreo"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    }
  ]
}
```

**Meta tags:**
- Title: `Problemas com Voo? Indenização de até R$ 25.000 | Advogado Já`
- Description: `Voo cancelado, atrasado, overbooking ou bagagem perdida? Advogado especialista em direitos do passageiro. Consulta gratuita. Só paga se ganhar.`
- Canonical: `https://advogadoja.lovable.app/advogado-problemas-voo`

---

## Rota no App.tsx

```tsx
<Route path="/advogado-problemas-voo" element={<ProblemasVooLanding />} />
```

E manter a rota legada redirecionando:
```tsx
<Route path="/advogado-voo-cancelado-atrasado" element={<VooCanceladoLanding />} />
```

---

## Mobile-First Features

| Feature | Implementação |
|---------|---------------|
| Safe Areas iOS | `safe-top`, `safe-bottom` |
| Touch Feedback | `active:scale-95` em todos os botões |
| Scroll Horizontal | `snap-x snap-mandatory scrollbar-hide` |
| Responsividade | `text-2xl sm:text-3xl md:text-4xl` |
| Cards empilhados | `sm:hidden` para tabela mobile |
| Min touch target | `min-h-[56px]` em accordions |

---

## Arquivo a Criar

| Arquivo | Descrição |
|---------|-----------|
| `src/pages/consumer/ProblemasVooLanding.tsx` | Nova landing page completa |

## Arquivo a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/App.tsx` | Adicionar rota `/advogado-problemas-voo` |

---

## Diferencial em Relação à Landing Existente

| Aspecto | VooCanceladoLanding (atual) | ProblemasVooLanding (nova) |
|---------|----------------------------|---------------------------|
| Paleta | Verde esmeralda | Preto + Dourado |
| Problemas | 6 tipos | 9 tipos completos |
| Mobile | Básico | Mobile-first com carousels |
| Vídeo de fundo | Não | Sim |
| Touch feedback | Não | Sim (active states) |
| Safe areas | Não | Sim |
| Escopo | Foco em cancelamento/atraso | Todos os problemas aéreos |


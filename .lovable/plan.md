

# Plano: Redesign da Landing Trabalhista - Preto e Dourado

## Problemas Identificados na Análise

| Problema | Detalhe |
|----------|---------|
| **Excesso de seções** | 15+ seções diferentes sobrecarregam o usuário |
| **Paleta laranja** | Cores `orange-50/100/500/600/700` em toda a página |
| **Múltiplos backgrounds** | Alternância constante (branco, laranja, vermelho, verde, cinza) |
| **Redundância de conteúdo** | Seções "Problemas" e "Casos Especiais" são similares |
| **Header e Footer pesados** | Competem com o conteúdo principal |
| **Banner urgência muito agressivo** | `animate-pulse` vermelho causa fadiga visual |

---

## Nova Paleta de Cores: Preto e Dourado

```text
Preto (background/texto):
- bg-black / bg-zinc-950 / bg-zinc-900
- text-white / text-zinc-100

Dourado (destaques/CTAs):
- #D4AF37 (dourado clássico)
- #B8860B (dourado escuro - hover)
- #F5D86A (dourado claro - badges)

Verde WhatsApp (mantido para CTAs):
- #25D366 (manter para botões WhatsApp)
```

---

## Estrutura Simplificada (8 seções vs 15+)

```text
┌─────────────────────────────────────────────────────────┐
│ HEADER MINIMALISTA (preto com logo dourado)            │
│ [←] [Logo] ─────────────────────── [WhatsApp]          │
├─────────────────────────────────────────────────────────┤
│ HERO (fundo preto, texto branco, destaque dourado)     │
│ "Demitido Injustamente?"                               │
│ [WhatsApp Dourado] [Calculadora]                       │
├─────────────────────────────────────────────────────────┤
│ STATS BAR (dourado elegante, sem animação excessiva)   │
│ 8.000+ casos | 95% sucesso | R$ 15M+ recuperados       │
├─────────────────────────────────────────────────────────┤
│ PROBLEMAS + CASOS ESPECIAIS (unificados em 6 cards)    │
│ Grid 2x3 com borda dourada                             │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ TABELA DE VALORES (fundo preto, bordas douradas)       │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (4 passos - design minimalista)          │
├─────────────────────────────────────────────────────────┤
│ DEPOIMENTOS (3 cards - fundo escuro elegante)          │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ FAQ COMPACTO + CTA FINAL (seção única)                 │
├─────────────────────────────────────────────────────────┤
│ FOOTER SIMPLES (preto)                                 │
└─────────────────────────────────────────────────────────┘
```

---

## Seções Removidas/Simplificadas

| Seção Original | Ação |
|----------------|------|
| "Mentiras que Empresas Contam" | **REMOVER** - Redundante |
| "Seus Direitos na Demissão" | **REMOVER** - Mover para FAQ |
| "Documentos Necessários" | **REMOVER** - Informar no WhatsApp |
| "Casos Especiais" | **MESCLAR** com grid de Problemas |
| "Calculadoras" | **MOVER** para link no header ou footer |
| "Banner Urgência" (pulsante) | **SIMPLIFICAR** - Badge estático no hero |

---

## Mudanças de Estilo

### Cores a Substituir

| De (Laranja) | Para (Preto/Dourado) |
|--------------|----------------------|
| `bg-orange-50` | `bg-zinc-950` ou `bg-black` |
| `bg-orange-100` | `bg-zinc-900` |
| `bg-orange-500/600` | `bg-[#D4AF37]` (dourado) |
| `text-orange-600` | `text-[#D4AF37]` |
| `border-l-orange-500` | `border-l-[#D4AF37]` |
| `bg-red-50` (mentiras) | **REMOVER SEÇÃO** |
| `bg-green-50` (documentos) | **REMOVER SEÇÃO** |

### Header Minimalista
```jsx
<header className="sticky top-0 z-50 bg-black border-b border-[#D4AF37]/30">
```

### Cards Elegantes
```jsx
<Card className="bg-zinc-900 border-[#D4AF37]/30 hover:border-[#D4AF37]">
```

### Botões
```jsx
// CTA Principal (WhatsApp mantém verde)
<Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">

// CTA Secundário (dourado)
<Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-black">
```

---

## Resultado Esperado

1. **Visual premium** - Preto + dourado transmite sofisticação e confiança
2. **Menos fadiga** - 8 seções vs 15+ seções originais
3. **Foco na conversão** - Menos distrações, mais CTAs estratégicos
4. **Elegância** - Sem animações pulsantes excessivas
5. **Carregamento mais rápido** - Menos elementos DOM

---

## Arquivo a Modificar

| Arquivo | Ação |
|---------|------|
| `src/pages/trabalhista/TrabalhistaLanding.tsx` | Redesign completo com nova paleta e estrutura simplificada |


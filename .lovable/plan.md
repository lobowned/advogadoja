
# Plano: Redesign Premium da Landing Page Liminar Cirurgia Negada

## Situacao Atual

A pagina `/liminar-cirurgia-negada` utiliza um design antigo com:
- Fundo claro (light mode)
- Cores em tons de vermelho/verde
- Layout basico sem video de fundo
- Nao segue o padrao mobile-first das novas landings
- Falta touch feedback e safe areas para iOS
- Nao tem scroll horizontal para carousels em mobile

## Design Proposto: Black e Gold Premium

Seguir o mesmo padrao visual das novas landings (Trabalhista e Problemas com Voo):

| Elemento | Cor |
|----------|-----|
| Background principal | `bg-black` / `bg-zinc-950` |
| Cards | `bg-zinc-900` |
| Texto principal | `text-white` |
| Texto secundario | `text-zinc-400` |
| Destaque (dourado) | `text-[#D4AF37]` |
| Bordas | `border-[#D4AF37]/30` |
| WhatsApp | `bg-[#25D366]` |
| Urgencia (vermelho) | `text-red-500` (manter para emergencia) |

---

## Estrutura Redesenhada (8 secoes)

```text
+--------------------------------------------------------------+
| HEADER MINIMALISTA (preto + borda dourada)                   |
| [Voltar] [Logo] ---------------------- [Calculadora] [URGENTE]|
+--------------------------------------------------------------+
| HERO (video de fundo + overlay preto/dourado)                |
| Badge: "Urgencia Medica - Plantao 24h"                       |
| "Cirurgia Negada? Liminar em 24-48h"                         |
| [WhatsApp Urgente] [Calculadora Liminar]                     |
+--------------------------------------------------------------+
| STATS BAR (dourado elegante)                                 |
| 3.500+ liminares | 95% sucesso | 24-48h | R$ 15M+           |
+--------------------------------------------------------------+
| TIPOS DE CIRURGIA (grid 2x3 mobile -> 3x3 desktop)           |
| Cards clicaveis com WhatsApp + taxa de sucesso               |
| [CTA WhatsApp]                                               |
+--------------------------------------------------------------+
| DESCULPAS ILEGAIS (8 cards - scroll horizontal mobile)       |
| Cada desculpa vs realidade legal                             |
| [CTA Analisar Negativa]                                      |
+--------------------------------------------------------------+
| TABELA INDENIZACOES (cards mobile / tabela desktop)          |
| Por tipo de cirurgia                                         |
| [CTA WhatsApp]                                               |
+--------------------------------------------------------------+
| COMO FUNCIONA (4 passos - scroll horizontal mobile)          |
+--------------------------------------------------------------+
| DEPOIMENTOS (3 cards - scroll horizontal mobile)             |
| [CTA WhatsApp]                                               |
+--------------------------------------------------------------+
| DOCUMENTOS (2 cards lado a lado)                             |
| [CTA Enviar Documentos]                                      |
+--------------------------------------------------------------+
| FAQ COMPACTO (Accordion touch-friendly)                      |
+--------------------------------------------------------------+
| CTA FINAL (fundo vermelho escuro urgente)                    |
| "Sua Cirurgia Nao Pode Esperar"                              |
+--------------------------------------------------------------+
| FOOTER SIMPLES (preto)                                       |
+--------------------------------------------------------------+
```

---

## Melhorias Mobile-First

| Feature | Implementacao |
|---------|---------------|
| Safe Areas iOS | `safe-top`, `safe-bottom` |
| Touch Feedback | `active:scale-95` em todos os botoes/cards |
| Scroll Horizontal | `snap-x snap-mandatory scrollbar-hide` |
| Responsividade | `text-2xl sm:text-3xl md:text-4xl` |
| Cards empilhados | `sm:hidden` para tabela mobile |
| Min touch target | `min-h-[56px]` em accordions |
| Video Background | Mesmo da home com overlay escuro |

---

## Secoes Detalhadas

### 1. Header Minimalista
- Fundo `bg-black/95` com `backdrop-blur-sm`
- Borda inferior dourada `border-b border-[#D4AF37]/30`
- Logo com `brightness-0 invert`
- Botao URGENTE em `bg-red-600` (vermelho para emergencia)

### 2. Hero com Video
- Video `/videos/hero-background.mp4`
- Overlay: `bg-gradient-to-b from-black/80 via-black/70 to-black/90`
- Brilho dourado sutil: `bg-[#D4AF37]/5`
- Badge animado: "Urgencia Medica - Plantao 24h"
- Titulo responsivo com destaque em `text-[#D4AF37]`
- CTAs: WhatsApp (verde) + Calculadora (outline dourado)

### 3. Stats Bar
- Gradiente dourado: `from-[#D4AF37] via-[#F5D86A] to-[#D4AF37]`
- Texto preto para contraste
- Grid 2x2 em mobile, 4 colunas em desktop

### 4. Grid de Cirurgias
- 6 cards (Bariatrica, Oncologica, Ortopedica, Cardiaca, Neurologica, Oftalmologica)
- Cada card com icone, taxa de sucesso, link para pagina especifica
- Borda esquerda dourada `border-l-4 border-l-[#D4AF37]`
- Hover com `hover:-translate-y-1` e `hover:shadow-[#D4AF37]/10`

### 5. Desculpas Ilegais
- Scroll horizontal em mobile
- 8 cards com "desculpa" tachada + "realidade" em verde
- Design: fundo `bg-zinc-900`, borda esquerda vermelha

### 6. Tabela de Indenizacoes (NOVA)
- Mobile: Cards empilhados com valores destacados
- Desktop: Tabela com header dourado
- Valores por tipo de cirurgia

### 7. Como Funciona
- 4 passos em scroll horizontal mobile
- Conectores visuais entre passos (desktop)
- Tempo estimado em cada passo

### 8. Depoimentos
- 3 casos reais em scroll horizontal mobile
- Estrelas douradas
- Badge com resultado (ex: "Liminar em 48h")

### 9. Documentos
- 2 cards: Obrigatorios vs Recomendados
- Design escuro com bordas coloridas

### 10. FAQ
- Accordion com touch-friendly
- Min-height para touch targets

### 11. CTA Final
- Fundo vermelho escuro urgente
- Texto branco + botoes contrastantes

---

## Dados a Adicionar

### Tabela de Indenizacoes por Cirurgia
| Cirurgia | Liminar | Danos Morais |
|----------|---------|--------------|
| Bariatrica | 24-48h | R$ 10.000 - R$ 30.000 |
| Oncologica | 24h (urgencia) | R$ 20.000 - R$ 50.000 |
| Ortopedica | 48-72h | R$ 8.000 - R$ 25.000 |
| Cardiaca | 24h (urgencia) | R$ 15.000 - R$ 40.000 |
| Neurologica | 48h | R$ 12.000 - R$ 35.000 |
| Oftalmologica | 48-72h | R$ 8.000 - R$ 20.000 |

---

## Arquivo a Modificar

| Arquivo | Alteracao |
|---------|-----------|
| `src/pages/consumer/LiminarCirurgiaNegadaLanding.tsx` | Redesign completo seguindo padrao Black e Gold |

---

## Resultado Esperado

1. **Consistencia Visual** - Mesma identidade das outras landings premium
2. **Mobile-First** - Layout otimizado para telas pequenas
3. **Touch-Friendly** - Areas de toque adequadas (44px minimo)
4. **iPhone Safe** - Conteudo nao cortado por notch/home bar
5. **Video Background** - Hero impactante igual trabalhista
6. **Conversao** - CTAs estrategicos em todas as secoes
7. **Urgencia** - Elementos visuais que transmitem pressa (vermelho + dourado)

---

## Detalhes Tecnicos

### Imports Adicionais
```tsx
import { useMemo } from "react";
import { m, useReducedMotion } from "framer-motion";
import logoAdvogado from "@/assets/logo-advogado-online.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
```

### Motion Variants
```tsx
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

### Scroll Container
```tsx
<div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:mx-0 sm:px-0">
```

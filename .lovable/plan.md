

# Plano: Melhorias Mobile-First na Landing Trabalhista

## Problemas Identificados

| Problema | Detalhe | Impacto Mobile |
|----------|---------|----------------|
| **Padding excessivo no Hero** | `py-20 md:py-28` - muito espaço em mobile | Scroll desnecessário |
| **Título muito grande em mobile** | `text-4xl` em telas pequenas | Pode quebrar layout |
| **Badges lado a lado** | `flex-wrap gap-3` mas sem responsividade adequada | Podem ficar apertados |
| **Tabela não responsiva** | Apenas `overflow-x-auto` - usuário precisa scrollar | UX ruim |
| **Cards de problemas** | Layout `flex items-start gap-4` pode ser vertical em mobile | Melhor aproveitamento |
| **Stats bar** | Grid 2x2 muito apertado em mobile | Números cortados |
| **Botões Hero** | `px-8 py-6` muito grandes em mobile | Touch area boa, mas ocupa muito espaço |
| **Header não otimizado** | Logo e botões podem colidir em telas pequenas | Layout quebra |
| **Depoimentos grid** | `md:grid-cols-3` - em mobile fica 1 coluna ok, mas cards muito longos | Scroll excessivo |
| **Passos sem scroll horizontal** | Em mobile, 4 passos ficam 1 por linha | Alternativa: carousel |
| **Falta touch feedback** | Hover states não funcionam em touch | Precisa active states |
| **Falta safe-area para iPhone** | Não considera notch e home indicator | Conteúdo cortado |

---

## Melhorias a Implementar

### 1. Safe Areas para iOS

```jsx
<div className="min-h-screen bg-black pb-safe">
// E no header:
<header className="sticky top-0 z-50 pt-safe ...">
```

Adicionar ao `index.css`:
```css
.pb-safe { padding-bottom: env(safe-area-inset-bottom); }
.pt-safe { padding-top: env(safe-area-inset-top); }
```

### 2. Hero Mobile-First

```jsx
// Antes
className="py-20 md:py-28"
// Depois
className="py-12 sm:py-16 md:py-20 lg:py-28"

// Título responsivo
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"

// Badges empilhados em mobile
className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3"
```

### 3. Header Otimizado

```jsx
// Logo menor em mobile
<img className="h-8 sm:h-10 w-auto" />

// Esconder "Calculadora" em mobile (já está, verificar)
// Botão WhatsApp mais compacto
<Button size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
```

### 4. Cards de Problemas Responsivos

```jsx
// Layout vertical em mobile
<Card className="...">
  <CardContent className="p-4 sm:p-6">
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
      // Ícone centralizado em mobile
      <div className="flex justify-center sm:justify-start">
        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl ...">
          <problem.icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
      <div className="text-center sm:text-left flex-1">
        <h3 className="font-semibold text-base sm:text-lg">...</h3>
        ...
      </div>
    </div>
  </CardContent>
</Card>
```

### 5. Tabela Mobile-Friendly

Transformar tabela em cards empilhados no mobile:

```jsx
{/* Desktop: Tabela */}
<div className="hidden sm:block">
  <table>...</table>
</div>

{/* Mobile: Cards */}
<div className="sm:hidden space-y-3">
  {indemnityTable.map((item, index) => (
    <div className="bg-zinc-900 rounded-lg p-4 border-l-4 border-l-[#D4AF37]">
      <p className="text-zinc-300 text-sm">{item.problem}</p>
      <p className="text-[#D4AF37] font-bold text-lg mt-1">{item.value}</p>
    </div>
  ))}
</div>
```

### 6. Stats Bar Melhorado

```jsx
// Grid 2x2 com números menores em mobile
<div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
  <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</p>
  <p className="text-xs sm:text-sm">{stat.label}</p>
</div>
```

### 7. Passos - Scroll Horizontal em Mobile

```jsx
// Scroll horizontal em mobile, grid em desktop
<div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible sm:mx-0 sm:px-0">
  {steps.map((item, index) => (
    <div className="flex-shrink-0 w-[260px] snap-center mr-4 sm:w-auto sm:mr-0 ...">
      ...
    </div>
  ))}
</div>
```

### 8. Touch Feedback (Active States)

```jsx
// Adicionar active states para touch
className="... active:scale-[0.98] active:opacity-90 transition-all"

// Nos botões:
className="... active:scale-95"
```

### 9. Botões Responsivos

```jsx
// Hero CTAs menores em mobile
<Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">

// Botões WhatsApp internos
<Button size="default" className="sm:size-lg ...">
```

### 10. Depoimentos - Scroll Horizontal em Mobile

```jsx
<div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0">
  {testimonials.map((testimonial, index) => (
    <Card className="flex-shrink-0 w-[300px] snap-center mr-4 md:w-auto md:mr-0 ...">
      ...
    </Card>
  ))}
</div>
```

### 11. FAQ Touch-Friendly

```jsx
// Área de toque maior
<AccordionTrigger className="... py-5 sm:py-4 min-h-[56px]">
```

### 12. Footer Responsivo

```jsx
<footer className="... py-8 sm:py-10 pb-safe">
  <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
    ...
  </div>
</footer>
```

---

## Outras Melhorias Identificadas

### Performance

| Melhoria | Detalhe |
|----------|---------|
| **Lazy load das seções** | Usar `lazy` + Suspense para seções abaixo do fold |
| **Otimizar animações** | Adicionar `will-change: transform` nas animações |
| **Reduzir re-renders** | Usar `useMemo` para arrays estáticos |

### SEO

| Melhoria | Detalhe |
|----------|---------|
| **Viewport meta** | Verificar se tem `viewport-fit=cover` para iOS |
| **Preload WhatsApp URL** | `<link rel="preconnect" href="https://wa.me">` |

### Acessibilidade

| Melhoria | Detalhe |
|----------|---------|
| **Focus states** | Adicionar `focus-visible:ring-2 focus-visible:ring-[#D4AF37]` |
| **ARIA labels** | Adicionar nos links de WhatsApp |
| **Skip link** | Adicionar "Pular para conteúdo" |

### UX

| Melhoria | Detalhe |
|----------|---------|
| **Scroll suave** | `scroll-behavior: smooth` no container |
| **Indicadores de scroll** | Dots para carousels mobile |
| **Loading state** | Skeleton enquanto carrega |

---

## CSS Utilitários a Adicionar

```css
/* index.css */
@layer utilities {
  /* Safe areas iOS */
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom);
  }
  .pt-safe {
    padding-top: env(safe-area-inset-top);
  }
  
  /* Esconder scrollbar mas manter funcionalidade */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## Arquivos a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/pages/trabalhista/TrabalhistaLanding.tsx` | Todas as melhorias mobile-first |
| `src/index.css` | Utilitários safe-area e scrollbar-hide |
| `index.html` | Adicionar `viewport-fit=cover` e preconnects |

---

## Resultado Esperado

1. **Mobile-first** - Layout otimizado para telas pequenas
2. **Touch-friendly** - Áreas de toque adequadas (44px mínimo)
3. **iPhone safe** - Conteúdo não cortado por notch/home bar
4. **Performance** - Animações suaves, sem jank
5. **UX melhor** - Carousels horizontais em vez de grid vertical


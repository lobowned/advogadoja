

# Plano: Melhorar Landing Page Trabalhista

## Problemas Identificados

A página atual está funcional, mas pode ser aprimorada com base no modelo `/liminar-cirurgia-negada`:

| Problema | Impacto |
|----------|---------|
| Falta de animações e transições | Página estática, menos engajamento |
| Hero sem badge pulsante de urgência | Menor senso de urgência |
| Sem breadcrumbs para SEO | Perde rich snippets no Google |
| Sem PageTransition wrapper | Transição abrupta entre páginas |
| Seção "Como Funciona" sem indicador de tempo | Menos clareza no processo |
| Falta BackButton no header | Dificulta navegação |
| Sem seção de "desculpas ilegais" do empregador | Menos identificação com o problema |
| Depoimentos sem cidade/localização | Menos credibilidade |

---

## Melhorias a Implementar

### 1. Adicionar Animações e PageTransition

Envelopar com `PageTransition` e usar `framer-motion` para entrada suave das seções.

### 2. Hero com Badge Pulsante

```jsx
<Badge className="animate-pulse bg-red-100 text-red-700">
  <AlertTriangle className="w-4 h-4 mr-1" />
  Prazo de 2 anos! Não perca seus direitos
</Badge>
```

### 3. Adicionar Breadcrumbs

```jsx
const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Trabalhista" }
];
<BreadcrumbNav items={breadcrumbs} />
```

### 4. Nova Seção: "Mentiras que Empresas Contam"

Similar às "desculpas ilegais" da página de liminar:

| O que a empresa diz | A verdade |
|---------------------|-----------|
| "Você pediu demissão" | Coação é nula |
| "Era cargo de confiança" | Tem que provar |
| "Banco de horas" | Precisa acordo formal |
| "PJ não tem direitos" | Vínculo pode ser reconhecido |
| "Era trabalho autônomo" | Se tinha subordinação, é CLT |
| "Estágio não gera vínculo" | Estágio irregular = vínculo |

### 5. Melhorar Depoimentos com Localização

```jsx
{
  name: "Carlos M.",
  city: "São Paulo, SP",  // ADICIONAR
  case: "Demissão após 8 anos",
  value: "R$ 45.000",
  ...
}
```

### 6. Adicionar Indicadores de Tempo nos Passos

Similar à página de liminar:

```jsx
<Badge variant="outline" className="mb-2 text-xs">24h</Badge>
```

### 7. BackButton no Header

```jsx
<BackButton />
```

### 8. Seção de Documentos Necessários

Adicionar checklist de documentos para o processo trabalhista:

- CTPS (física ou digital)
- Últimos holerites
- Contrato de trabalho
- Termo de rescisão (TRCT)
- Comprovante de depósito FGTS
- Cartões de ponto (se houver)

### 9. Melhorar Visual dos Cards de Problemas

Adicionar borda lateral colorida como na página de liminar:

```jsx
className="border-l-4 border-l-orange-500"
```

### 10. Seção de Casos Especiais

Grid com tipos específicos de ações:

- Demissão discriminatória (doença, gravidez)
- Acidente de trabalho com sequelas
- Assédio sexual
- Trabalho análogo à escravidão
- Pejotização forçada
- Horas extras de motorista/vendedor

---

## Estrutura Atualizada

```text
┌─────────────────────────────────────────────────────────┐
│ HEADER STICKY                                           │
│ [←] [Logo] ─────────────────────── [WhatsApp URGENTE]  │
├─────────────────────────────────────────────────────────┤
│ BREADCRUMB: Início > Trabalhista                       │
├─────────────────────────────────────────────────────────┤
│ HERO (com badge pulsante de urgência)                  │
│ "Demitido Injustamente?"                               │
│ [WhatsApp] [Calculadora]                               │
├─────────────────────────────────────────────────────────┤
│ STATS BAR (animado ao entrar na viewport)              │
├─────────────────────────────────────────────────────────┤
│ PROBLEMAS (6 cards com borda lateral laranja)          │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ MENTIRAS QUE EMPRESAS CONTAM (8 cards) ← NOVO          │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ TABELA DE INDENIZAÇÕES                                 │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ SEUS DIREITOS (4 cards)                                │
├─────────────────────────────────────────────────────────┤
│ DOCUMENTOS NECESSÁRIOS ← NOVO                          │
│ [WhatsApp: Enviar Documentos]                          │
├─────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (4 passos com tempo estimado)            │
├─────────────────────────────────────────────────────────┤
│ CASOS ESPECIAIS (6 cards) ← NOVO                       │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ DEPOIMENTOS (3 cards com cidade)                       │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ CALCULADORAS                                            │
├─────────────────────────────────────────────────────────┤
│ FAQ (4 perguntas)                                      │
│ [WhatsApp CTA]                                         │
├─────────────────────────────────────────────────────────┤
│ BANNER URGÊNCIA (vermelho pulsante)                    │
├─────────────────────────────────────────────────────────┤
│ CTA FINAL                                               │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

---

## Arquivo a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/pages/trabalhista/TrabalhistaLanding.tsx` | Adicionar animações, breadcrumbs, novas seções, melhorar cards |

---

## Benefícios Esperados

1. **+30% engajamento** - Animações e transições suaves
2. **+SEO** - Breadcrumbs para rich snippets
3. **+Credibilidade** - Depoimentos com localização
4. **+Identificação** - Seção "mentiras das empresas"
5. **+Conversão** - Mais pontos de contato WhatsApp
6. **+Clareza** - Documentos necessários e tempos estimados


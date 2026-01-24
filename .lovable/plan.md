
# Plano: Melhorar Página Liminar Cirurgia Negada

## Problema Identificado

A página `/liminar-cirurgia-negada` tem:
1. **WhatsApp errado** na linha 547 (`5511999999999` deve ser `5571997036269`)
2. **CTAs apontando para rotas internas** ao invés de WhatsApp direto
3. **Falta de botões WhatsApp** em seções estratégicas

---

## Correções a Implementar

### 1. Corrigir WhatsApp Errado (Linha 547)

**De:**
```
https://wa.me/5511999999999?text=...
```

**Para:**
```
https://wa.me/5571997036269?text=...
```

---

### 2. Substituir CTAs de Link Interno por WhatsApp

| Localização | Linha | Mudança |
|-------------|-------|---------|
| Hero - Botão principal | 208-213 | Link para WhatsApp |
| Desculpas Ilegais | 326-330 | Link para WhatsApp |
| CTA Final | 540-545 | Link para WhatsApp |

**Novo padrão para CTAs:**
```jsx
<Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
  <a href="https://wa.me/5571997036269?text=Olá!%20Minha%20cirurgia%20foi%20negada%20e%20preciso%20de%20liminar%20urgente." target="_blank">
    <MessageCircle className="w-5 h-5 mr-2" />
    Falar com Advogado Agora
  </a>
</Button>
```

---

### 3. Adicionar WhatsApp em Novas Seções

| Seção | Ação |
|-------|------|
| **Tipos de Cirurgia** | Adicionar botão WhatsApp após grid de cards |
| **Testimonials** | Adicionar CTA WhatsApp abaixo dos depoimentos |
| **Documentos** | Adicionar CTA para enviar docs por WhatsApp |
| **FAQ** | Adicionar CTA WhatsApp após perguntas |
| **Footer** | Adicionar link WhatsApp e telefone |

---

### 4. Criar Constante para WhatsApp (Evitar Erros Futuros)

Adicionar no topo do componente:
```jsx
const WHATSAPP_NUMBER = "5571997036269";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Urgente: Minha cirurgia foi negada pelo plano e preciso de uma liminar.")}`;
```

---

### 5. Melhorias de Conversão Adicionais

- **Urgência visual**: Manter badge "Urgência Médica" pulsando
- **Botão de emergência no header**: Já existe, apenas verificar cor chamativa
- **Mensagens personalizadas** por seção:
  - Hero: "Minha cirurgia foi negada e preciso de liminar urgente"
  - Após tipos: "Preciso de liminar para [tipo de cirurgia]"
  - Após FAQ: "Tenho dúvidas sobre liminar para cirurgia negada"

---

## Resumo das Mudanças

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
│ [Logo] ─────────────────────────── [URGENTE WhatsApp] ✓ │
├─────────────────────────────────────────────────────────┤
│ HERO                                                    │
│ "Cirurgia Negada pelo Plano?"                          │
│ [WhatsApp Urgente] [Calculadora]                       │  ← MUDAR para WhatsApp
├─────────────────────────────────────────────────────────┤
│ STATS (3.500+ liminares, 95% sucesso...)               │
├─────────────────────────────────────────────────────────┤
│ TIPOS DE CIRURGIA                                       │
│ Cards: Bariátrica, Oncológica, Ortopédica...           │
│ [+ ADICIONAR WhatsApp CTA]                              │ ← NOVO
├─────────────────────────────────────────────────────────┤
│ DESCULPAS ILEGAIS                                       │
│ 8 cards de desculpas                                    │
│ [Analisar Negativa → WhatsApp]                         │ ← MUDAR para WhatsApp
├─────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (4 passos)                               │
├─────────────────────────────────────────────────────────┤
│ DEPOIMENTOS                                             │
│ 3 cards de sucesso                                      │
│ [+ ADICIONAR WhatsApp CTA]                              │ ← NOVO
├─────────────────────────────────────────────────────────┤
│ DOCUMENTOS                                              │
│ Checklists obrigatórios/recomendados                   │
│ [+ ADICIONAR "Enviar Docs pelo WhatsApp"]              │ ← NOVO
├─────────────────────────────────────────────────────────┤
│ FAQ                                                     │
│ 4 perguntas frequentes                                  │
│ [+ ADICIONAR WhatsApp CTA]                              │ ← NOVO
├─────────────────────────────────────────────────────────┤
│ CTA FINAL (vermelho)                                    │
│ [Quero Liminar → WhatsApp] [WhatsApp Urgente]          │ ← CORRIGIR número
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│ [+ ADICIONAR WhatsApp + Telefone]                      │ ← NOVO
└─────────────────────────────────────────────────────────┘
```

---

## Arquivos a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/pages/consumer/LiminarCirurgiaNegadaLanding.tsx` | Correção WhatsApp, novos CTAs, constante centralizada |

---

## Benefícios

1. **Conversão direta** - Todos CTAs levam para WhatsApp
2. **Número correto** - 5571997036269 em todos os lugares
3. **Mais pontos de contato** - 7+ botões WhatsApp ao longo da página
4. **Manutenção fácil** - Constante centralizada para o número
5. **Mensagens contextuais** - Cada seção com mensagem pré-definida relevante

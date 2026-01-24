
# Plano: Remover Chat e Expandir para Todas as Áreas do Direito

## Resumo das Mudanças

O site será transformado de um escritório focado em **Direito do Consumidor** com chat de atendimento para um escritório de advocacia **generalista** com atendimento exclusivamente por **WhatsApp**.

---

## Fase 1: Remover Sistema de Chat e Componentes Relacionados

### Arquivos a REMOVER (deletar):

| Arquivo | Motivo |
|---------|--------|
| `src/components/LawyerChatSection.tsx` | Componente principal do chat |
| `src/components/ChatProgressBar.tsx` | Indicador de progresso do chat |
| `src/components/TypingIndicator.tsx` | Indicador de "digitando..." |
| `src/components/QuickReplies.tsx` | Sugestões rápidas do chat |
| `src/components/UrgencyBadge.tsx` | Badge de urgência do chat |
| `src/components/StickyDesktopCTA.tsx` | Barra fixa que leva ao chat |
| `src/components/MobileBottomCTA.tsx` | CTA mobile para chat |
| `src/components/SuccessNotification.tsx` | Notificações de atendimento |
| `src/components/TodayCounter.tsx` | Contador de atendimentos |
| `src/components/PresenceNotification.tsx` | Notificação de presença |
| `src/components/LawyerStatusIndicator.tsx` | Status de advogados online |
| `src/components/LawyerCredentialsPopup.tsx` | Popup de credenciais |
| `src/components/ExitIntentPopup.tsx` | Popup de saída |
| `src/hooks/useLawyerChat.ts` | Hook do sistema de chat |
| `src/hooks/useLawyerPresence.ts` | Hook de presença |
| `src/hooks/useTodayAttendances.ts` | Hook de atendimentos |
| `src/contexts/LawyerPresenceContext.tsx` | Contexto de presença |
| `src/contexts/AttendanceContext.tsx` | Contexto de atendimento |
| `src/contexts/DetectedProblemContext.tsx` | Contexto de problema detectado |
| `src/data/lawyer-personalities.ts` | Personalidades dos advogados |
| `src/data/nudge-messages.ts` | Mensagens de nudge |
| `src/data/contextual-suggestions.ts` | Sugestões contextuais |
| `supabase/functions/lawyer-chat/index.ts` | Edge function do chat |
| `supabase/functions/send-followup/index.ts` | Follow-up automático |

### Arquivos a MODIFICAR:

**`src/App.tsx`**
- Remover imports dos contextos (LawyerPresenceProvider, AttendanceProvider)
- Remover componente `StickyDesktopCTA`
- Manter `FloatingWhatsApp`

**`src/pages/Index.tsx`**
- Remover `LawyerChatSection` e ref de chat
- Remover tracking de visibilidade do chat
- Remover `MobileBottomCTA`, `ExitIntentPopup`, `SuccessNotification`
- Adicionar nova seção de **Áreas de Atuação** com 6 áreas do direito
- Atualizar schemas JSON-LD para todas as áreas

---

## Fase 2: Expandir para Todas as Áreas do Direito

### Atualizar HeroSection (`src/components/HeroSection.tsx`):

**De:**
```
"Seus Direitos de Consumidor Foram Violados?"
"Voo cancelado, cobrança indevida, produto defeituoso, plano de saúde negou?"
```

**Para:**
```
"Precisa de Advogado Especialista?"
"Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal"
```

- Remover referências a "Especialistas CDC"
- Mudar badge para "Todas as Áreas"
- Atualizar testimonials para incluir outras áreas

---

### Criar Nova Seção: `PracticeAreasSection.tsx`

Nova seção mostrando as 6 áreas de atuação com cards clicáveis:

```
┌──────────────────────────────────────────────────────────────┐
│                 NOSSAS ÁREAS DE ATUAÇÃO                      │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐  │
│  │ 👔 TRABALHISTA  │  │ 👨‍👩‍👧 FAMÍLIA     │  │ 🛡️ CONSUMIDOR │  │
│  │ Demissão, Horas │  │ Divórcio, Pensão│  │ Voo, Banco   │  │
│  │ Extras, FGTS    │  │ Guarda Filhos   │  │ Plano Saúde  │  │
│  │                 │  │                 │  │              │  │
│  │ [WhatsApp →]    │  │ [WhatsApp →]    │  │ [WhatsApp →] │  │
│  └─────────────────┘  └─────────────────┘  └──────────────┘  │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐  │
│  │ ⚖️ CIVIL        │  │ 💚 PREVIDÊNCIA  │  │ 🔒 CRIMINAL  │  │
│  │ Contratos, Danos│  │ Aposentadoria   │  │ Defesa, HC   │  │
│  │ Morais, Herança │  │ INSS, Auxílio   │  │ Recursos     │  │
│  │                 │  │                 │  │              │  │
│  │ [WhatsApp →]    │  │ [WhatsApp →]    │  │ [WhatsApp →] │  │
│  └─────────────────┘  └─────────────────┘  └──────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

Cada card terá:
- Ícone e cor distintiva
- Nome da área
- 3-4 serviços principais
- Botão WhatsApp com mensagem pré-definida

---

### Atualizar `ConsumerProblemsSection.tsx`:

Renomear para `LegalProblemsSection.tsx` e expandir para incluir problemas de TODAS as áreas:

- Aviação → manter (consumidor)
- Telecomunicações → manter (consumidor)
- Bancos → manter (consumidor)
- Planos de Saúde → manter (consumidor)
- **Demissão Injusta** → NOVO (trabalhista)
- **Divórcio e Pensão** → NOVO (família)
- **Aposentadoria** → NOVO (previdenciário)
- **Negativação Indevida** → manter (consumidor)

Cada card levará para WhatsApp ao invés do chat.

---

### Atualizar Metadados SEO (`src/pages/Index.tsx`):

**Schema.org Organization:**
```javascript
"knowsAbout": [
  "Direito Trabalhista",
  "Direito de Família",
  "Direito do Consumidor",
  "Direito Previdenciário",
  "Direito Civil",
  "Direito Penal"
]
```

**LegalService Schema:**
```javascript
"serviceType": [
  "Reclamação Trabalhista",
  "Divórcio e Guarda",
  "Aposentadoria INSS",
  "Indenização Consumidor",
  "Inventário e Herança",
  "Defesa Criminal"
]
```

**Title e Meta:**
```
De: "Advogado de Consumidor Online | Consulta Gratuita"
Para: "Advogado Online | Trabalhista, Família, Consumidor | Advogado Já"
```

---

### Atualizar FloatingWhatsApp (`src/components/FloatingWhatsApp.tsx`):

Mudar mensagem padrão:

**De:**
```
"Olá! Vi o site de vocês e gostaria de falar com um advogado sobre meus direitos de consumidor."
```

**Para:**
```
"Olá! Vi o site de vocês e preciso de orientação jurídica."
```

---

## Fase 3: Atualizar Componentes Secundários

### LawyersShowcase (`src/components/LawyersShowcase.tsx`):
- Mostrar advogados de todas as especialidades, não só consumidor
- Botão CTA muda de "Falar com Advogado" para WhatsApp direto

### CredibilitySection (`src/components/CredibilitySection.tsx`):
- Atualizar texto para refletir todas as áreas

### WhatsAppTestimonials (`src/components/WhatsAppTestimonials.tsx`):
- Adicionar depoimentos de outras áreas (trabalhista, família, etc)

---

## Fase 4: Limpeza Final

### Remover referências órfãs:
- Remover imports não utilizados em todos os arquivos
- Limpar edge functions não mais necessárias
- Atualizar sitemap se necessário

---

## Resumo Visual da Nova Estrutura

```
ANTES (Consumidor + Chat):
┌─────────────────────┐
│     HERO            │  "Direitos de Consumidor"
├─────────────────────┤
│     CHAT            │  ← REMOVE
├─────────────────────┤
│  TESTIMONIALS       │
├─────────────────────┤
│  PROBLEMAS CONSUMO  │  ← Expande para todas áreas
├─────────────────────┤
│  ADVOGADOS          │
└─────────────────────┘

DEPOIS (Generalista + WhatsApp):
┌─────────────────────┐
│     HERO            │  "Precisa de Advogado?"
├─────────────────────┤
│  ÁREAS DE ATUAÇÃO   │  6 áreas → WhatsApp
├─────────────────────┤
│  TESTIMONIALS       │  Todas as áreas
├─────────────────────┤
│  PROBLEMAS COMUNS   │  8+ problemas → WhatsApp
├─────────────────────┤
│  ADVOGADOS          │  Todos especialistas
└─────────────────────┘
```

---

## Arquivos a Modificar/Criar

| Arquivo | Ação |
|---------|------|
| `src/pages/Index.tsx` | Modificar - remover chat, atualizar SEO |
| `src/components/HeroSection.tsx` | Modificar - texto generalista |
| `src/components/ConsumerProblemsSection.tsx` | Renomear/Modificar → `LegalProblemsSection.tsx` |
| `src/components/PracticeAreasSection.tsx` | **CRIAR** - nova seção de áreas |
| `src/components/FloatingWhatsApp.tsx` | Modificar - mensagem genérica |
| `src/components/LawyersShowcase.tsx` | Modificar - todas especialidades |
| `src/App.tsx` | Modificar - remover contextos e StickyDesktopCTA |
| ~20 arquivos | **DELETAR** - componentes do chat |

---

## Benefícios da Transformação

1. **Simplicidade** - Menos código, menos manutenção
2. **Conversão Direta** - WhatsApp é mais efetivo que chat
3. **Expansão de Mercado** - Atende 6x mais tipos de clientes
4. **SEO Ampliado** - Rankeia para mais termos de busca
5. **Performance** - Menos JavaScript = site mais rápido

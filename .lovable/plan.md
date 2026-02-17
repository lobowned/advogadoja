

# Landing Page: Desconto RMC e RCC - Cartao de Credito Consignado

## Pesquisa Completa do Problema

### O que sao RMC e RCC?
- **RMC (Reserva de Margem Consignavel)**: valor reservado do beneficio do INSS para pagamento de cartao de credito consignado. Compromete ate **5% da margem** do beneficio.
- **RCC (Reserva de Cartao Consignado)**: funciona de forma similar, e a reserva especifica para o cartao consignado vinculado ao beneficio.
- **Diferenca pratica**: a RMC e a reserva da margem para qualquer cartao consignado; a RCC e o desconto efetivo na conta/beneficio.

### Dimensao do Problema (Dados Reais 2025-2026)
- **Denuncias de consignado nao contratado cresceram 113% em 2025** (fonte: Contabeis/INSS)
- O INSS prorrogou o prazo de contestacao de descontos indevidos em aposentadorias
- Milhoes de aposentados e pensionistas sao vitimas de contratos fraudulentos
- O governo federal criou canal proprio no Meu INSS para exclusao de emprestimo consignado (gov.br)

### Margem Consignavel 2026
- **Emprestimo consignado**: ate 35% do beneficio
- **Cartao consignado (RMC)**: ate 5% do beneficio
- **Total**: ate 40% pode ser comprometido
- Com reajuste do salario minimo em 2026, a margem aumentou (novo valor base)

### Principais Golpes e Problemas
1. **Cartao consignado nao solicitado** - banco envia cartao sem pedido do aposentado
2. **Contratacao por telefone sem autorizacao** - ligam oferecendo "beneficio" e contratam sem consentimento
3. **Desconto sem contrato assinado** - aparece desconto misterioso no extrato
4. **Taxa de juros abusiva** - juros acima do teto permitido
5. **Cancelamento negado** - banco se recusa a cancelar o cartao consignado
6. **Conversao irregular** - emprestimo pessoal convertido em cartao consignado sem aviso
7. **Falta de informacao adequada** - nao explicam que o minimo do cartao vira divida rotativa

### Jurisprudencia e Valores de Indenizacao
- **TJRJ 2025**: Condenou banco por cartao consignado indevido - indenizacao por danos morais
- **TJMT 2025**: Reconheceu cobranca indevida em cartao nao contratado e condenou banco a indenizar idosa
- **TJMT 2025**: Obrigou banco a converter cartao consignado em emprestimo pessoal (pratica abusiva)
- **TJDFT**: Jurisprudencia consolidada sobre informacao adequada vs abusividade em cartao consignado
- **STJ 2025 (atencao)**: 3a Turma decidiu que fraude em consignado nao gera dano moral presumido a idosos (decisao controversa, mas nao impede acao)
- **Valores tipicos de indenizacao**: R$ 3.000 a R$ 15.000 por danos morais + restituicao em dobro dos valores descontados

### Direitos do Aposentado/Pensionista
1. **Cancelamento imediato** via Meu INSS (site ou app)
2. **Restituicao em dobro** dos valores descontados indevidamente (CDC art. 42)
3. **Danos morais** por contratar sem autorizacao
4. **Revisao contratual** de juros abusivos
5. **Nao ha prescricao** que impeca acao em contratos antigos com descontos continuados (trato sucessivo)

---

## Plano de Implementacao

### Arquivo a Criar
- `src/pages/consumer/CartaoConsignadoLanding.tsx`

### Arquivo a Modificar
- `src/App.tsx` - adicionar rota `/advogado-cartao-consignado`

### Estrutura da Landing Page (seguindo padrao premium da pagina de Voo)

**1. Hero Section** (fundo escuro com gradiente)
- Titulo: "Desconto no INSS que Voce Nao Autorizou?"
- Subtitulo: "RMC e RCC - Cartao de Credito Consignado Indevido"
- Badges: "Consulta Gratuita", "Denuncias cresceram 113% em 2025"
- Prova social: "X aposentados ja recuperaram seus valores"
- CTA WhatsApp

**2. Stats Bar**
- "+113% de denuncias em 2025"
- "Ate 5% do beneficio comprometido"
- "R$ 3.000 a R$ 15.000 de indenizacao"
- "Restituicao em dobro"

**3. Grid de Problemas** (7 tipos)
- Cartao nao solicitado
- Desconto sem contrato
- Taxa abusiva
- Cancelamento negado
- Contratacao por telefone
- Conversao irregular de emprestimo
- Desconto apos cancelamento

**4. Tabela de Valores Recuperaveis**
- Por tipo de problema com faixas de valores estimados

**5. Secao "Antes vs Depois"**
- ANTES: "Desconto todo mes sem explicacao, sem saber o que fazer, ligando para banco sem resposta"
- DEPOIS: "Desconto cancelado, valores devolvidos em dobro, indenizacao na conta"

**6. Secao "Seus Direitos"**
- CDC Art. 42 (devolucao em dobro)
- Portarias INSS sobre cancelamento
- Canal Meu INSS para exclusao
- Nao ha prescricao para descontos continuados

**7. Como Funciona** (3 passos)
1. Fale conosco pelo WhatsApp
2. Enviamos seus documentos (extrato INSS, HISCRE)
3. Entramos com a acao e voce recebe a indenizacao

**8. Depoimentos WhatsApp**
- Formato bolhas de conversa (mesmo estilo da pagina de Voo)

**9. FAQ** (perguntas reais)
- "O que e RMC e RCC?"
- "Nunca pedi cartao consignado, posso cancelar?"
- "Como saber se tenho desconto indevido?"
- "Quanto posso receber de indenizacao?"
- "Preciso ir ao banco para resolver?"
- "Quanto tempo demora o processo?"

**10. CTA Final com Urgencia**
- "Cada mes que passa e mais dinheiro descontado do seu beneficio"

**11. Botao Flutuante WhatsApp**

### SEO e Keywords
- Titulo: "Advogado Cartao Consignado - Desconto RMC RCC Indevido | Indenizacao"
- Keywords naturais: "desconto indevido INSS", "cartao consignado nao autorizado", "RMC RCC", "advogado aposentado", "cancelar cartao consignado"
- Schema LegalService

### Dependencias Existentes
- `framer-motion` (AnimatedSection, StaggerContainer)
- `lucide-react`
- Componentes UI (Card, Button, Accordion, Table)
- `FloatingWhatsApp`
- `PageTransition`


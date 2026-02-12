
# Melhorias para a Landing Page de Problemas com Voo

## O Que Ja Existe

A pagina tem uma estrutura solida com 8 secoes: Hero com video, Stats, Grid de Problemas, Tabela de Indenizacoes, Direitos ANAC/CDC, Como Funciona, Depoimentos e FAQ + CTA Final.

## Melhorias Propostas

### 1. Prova Social no Hero (Urgencia + Confianca)
Adicionar um contador de casos recentes logo abaixo do subtitulo do Hero, como:
- "847 passageiros ja receberam indenizacao" com estrelas de avaliacao
- Micro-avatares de clientes recentes para criar senso de comunidade

### 2. Secao "Companhias Aereas" (Reconhecimento Visual)
Adicionar logos das principais companhias aereas (LATAM, GOL, Azul, etc.) com texto "Ja processamos todas as grandes companhias". Isso gera reconhecimento imediato - o usuario ve a marca do seu problema ali.

### 3. Mais Depoimentos + Formato WhatsApp
Atualmente so tem 3 depoimentos. Adicionar mais 3-4 e apresentar alguns no formato de "print de WhatsApp" (bolhas de conversa), que e mais autentico e gera maior confianca.

### 4. Secao "Antes vs Depois" (Gatilho Emocional)
Uma secao mostrando o contraste:
- ANTES: "Sozinho contra a companhia aerea, sem saber seus direitos, estressado"
- DEPOIS: "Advogado especialista cuidando de tudo, indenizacao na conta, sem dor de cabeca"

### 5. Timer de Urgencia no CTA Final
Adicionar um elemento de urgencia no CTA final: "Seu prazo esta correndo - cada dia que passa pode reduzir sua indenizacao"

### 6. Botao Flutuante de WhatsApp
Adicionar um botao flutuante de WhatsApp fixo no canto inferior direito que acompanha o scroll, garantindo que o CTA esteja sempre acessivel.

### 7. Animacoes de Entrada nas Secoes
Atualmente a pagina e estatica. Adicionar animacoes suaves de fade-in e slide-up conforme o usuario rola, usando os componentes AnimatedSection e StaggerContainer ja existentes no projeto.

### 8. SEO - Mais Keywords no Conteudo
Integrar palavras-chave de Google Ads naturalmente no texto: "indenizacao voo cancelado", "direitos passageiro aereo", "advogado aviacao".

## Detalhes Tecnicos

### Arquivos a Modificar
- `src/pages/consumer/ProblemasVooLanding.tsx` - todas as melhorias acima

### Dependencias Existentes Utilizadas
- `framer-motion` (AnimatedSection, StaggerContainer) para animacoes
- `lucide-react` para icones adicionais
- Componentes UI existentes (Card, Button, etc.)

### Estrutura Final da Pagina (ordem das secoes)
1. Header fixo (existente)
2. Hero com video + prova social melhorada
3. Stats Bar (existente)
4. Logos de Companhias Aereas (novo)
5. Grid de Problemas (existente)
6. Tabela de Indenizacoes (existente)
7. Antes vs Depois (novo)
8. Direitos ANAC/CDC (existente)
9. Como Funciona (existente)
10. Depoimentos expandidos (melhorado)
11. FAQ (existente)
12. CTA Final com urgencia (melhorado)
13. Footer (existente)
14. Botao flutuante WhatsApp (novo)

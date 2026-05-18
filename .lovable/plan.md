
# Reposicionar a Home para Capturar CTR Generalista

Hoje a home está calibrada para Direito do Consumidor (headline, depoimentos, badges, keywords ocultas). Vamos abrir o funil para as 6 áreas do escritório (Trabalhista, Família, Consumidor, Previdenciário, Civil, Criminal) sem perder a força do hero.

## Mudanças no Hero (`src/components/HeroSection.tsx`)

1. **Headline generalista com rotação por dor**
   - Título fixo: "Advogado Online para Qualquer Causa"
   - Subtítulo dinâmico (rotaciona a cada 3s, mesmo padrão dos depoimentos):
     - "Demitido sem justa causa? Buscamos suas verbas."
     - "INSS negou seu benefício? Entramos com recurso."
     - "Divórcio, pensão ou guarda? Resolvemos com discrição."
     - "Voo cancelado, nome sujo, plano negado? Indenização garantida."
     - "Inventário, contrato ou dívida? Estratégia jurídica completa."
     - "Acusado injustamente? Defesa criminal especializada."
2. **Badges** — trocar o badge "Direito do Consumidor" por badge rotativa de área (Trabalhista → Família → INSS → Consumidor → Civil → Criminal), mantendo os badges "Advogados Online" e "4.9 • 2.500+".
3. **Depoimentos do hero** — substituir os 5 atuais (todos de Consumidor) por 6 cobrindo as áreas:
   - "Ganhei minhas verbas rescisórias!" — Trabalhista
   - "Aposentadoria aprovada em 90 dias!" — INSS
   - "Divórcio resolvido sem briga!" — Família
   - "Voo cancelado: R$ 12.000 de indenização!" — Consumidor
   - "Recuperei R$ 80 mil em ação cível!" — Civil
   - "Absolvido por falta de provas!" — Criminal

## Mudanças no Index (`src/pages/Index.tsx`)

1. **Reordenar seções** para que `PracticeAreasSection` (6 áreas) venha imediatamente após o hero — já está, mas aumentar destaque visual.
2. **Atualizar `<title>` e `<meta description>`**:
   - Title: "Advogado Online | Trabalhista, Família, INSS, Consumidor | Advogado Já"
   - Description: "Advogados online para todas as áreas: Trabalhista, Família, Consumidor, INSS, Civil e Criminal. Atendimento via WhatsApp. Consulta gratuita em todo o Brasil."
3. **Keywords meta tag** — rebalancear para incluir termos das 6 áreas (manter consumidor mas reduzir peso).
4. **Seção SEO oculta (`sr-only`)** — substituir o bloco focado em "preciso de advogado direito do consumidor" por bloco generalista com H2/H3 por área:
   - "Advogado Trabalhista Online", "Advogado de Família Online", "Advogado Previdenciário INSS", "Advogado Cível", "Advogado Criminal", além do existente de Consumidor.
5. **OG/Twitter tags** — atualizar com o novo título/descrição generalistas.

## Não mexer

- `PracticeAreasSection`, `ServicesSection`, `LegalProblemsSection`, `WhatsAppTestimonials` (já generalistas).
- Schemas JSON-LD (já cobrem todas as áreas).
- Rotas, dados, lógica de leads.

## Arquivos afetados

- `src/components/HeroSection.tsx` (headline, badge e depoimentos rotativos)
- `src/pages/Index.tsx` (title, description, keywords, OG/Twitter, bloco SEO oculto)

## Aplicar Dr. Gilberto Riccio (OAB/BA 46.638) nos heros /prev

### Passos

1. **Copiar a foto** de `user-uploads://ChatGPT_Image_25_de_mai._de_2026_21_47_27.png` para `src/assets/dr-gilberto-riccio.jpg`.

2. **Atualizar `src/components/prev/PrevHeroSplit.tsx`**:
   - Importar a nova foto.
   - Trocar os defaults para sempre exibir: `Dr. Gilberto Riccio`, `OAB/BA 46.638`, foto importada.
   - Remover a leitura de `lawyers.ts` (função `pickLawyer`) — props explícitas continuam ganhando, mas o fallback é o Gilberto.

3. **Limpar `lawyerId` nas páginas de área** que injetavam outros advogados, para não sobrescrever o novo default:
   - `PrevAposentadoriaIdade.tsx`
   - `PrevAuxilioDoenca.tsx`
   - `PrevInvalidez.tsx`
   - `PrevSalarioMaternidade.tsx`
   - `PrevBpcLoas.tsx`

4. **Verificação**: screenshot rápido em `/prev` e `/prev/auxilio-doenca` para conferir foto + OAB/BA 46.638 no card, sem afetar overlay do vídeo.

### O que NÃO muda
- Vídeo de fundo, overlay/sombra, layout split, CTAs, microcopy, tipografia.

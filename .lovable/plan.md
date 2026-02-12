

# Consolidar Landing Pages de Voo em Uma So

## O Que Existe Hoje

| Rota | Pagina | Estilo |
|------|--------|--------|
| `/advogado-problemas-voo` | ProblemasVooLanding | Black e Gold Premium (completa, 9 problemas) |
| `/advogado-voo-cancelado-atrasado` | VooCanceladoLanding | Design antigo (light mode, menos conteudo) |
| `/voo-cancelado` | VooCanceladoLanding | Mesma pagina acima (URL legacy) |

A pagina `/advogado-problemas-voo` ja e a mais completa, com 9 tipos de problemas, tabela de indenizacoes, depoimentos, FAQ e design premium.

## Plano

Redirecionar as rotas duplicadas para a pagina principal:

1. **Alterar `App.tsx`**: As rotas `/advogado-voo-cancelado-atrasado` e `/voo-cancelado` passam a redirecionar (Navigate) para `/advogado-problemas-voo`
2. **Manter `ProblemasVooLanding.tsx`** como a unica landing page de voo
3. **VooCanceladoLanding.tsx** deixa de ser necessario nas rotas (o arquivo pode ser mantido por seguranca, mas nao sera mais acessado)

### Resultado

- Todas as URLs de voo levam para a mesma pagina premium
- SEO consolidado em uma unica URL canonica
- Google Ads pode apontar para qualquer uma das 3 URLs que o usuario chegara na mesma pagina

### Detalhe Tecnico

No `App.tsx`, substituir:
```tsx
// DE:
<Route path="/advogado-voo-cancelado-atrasado" element={<VooCanceladoLanding />} />
<Route path="/voo-cancelado" element={<VooCanceladoLanding />} />

// PARA:
<Route path="/advogado-voo-cancelado-atrasado" element={<Navigate to="/advogado-problemas-voo" replace />} />
<Route path="/voo-cancelado" element={<Navigate to="/advogado-problemas-voo" replace />} />
```

Adicionar `Navigate` ao import do `react-router-dom`.


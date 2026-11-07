# Loop de SEO orgânico (começou em 07/11/2026)

Objetivo: mais visitas do Google e do Bing para https://riccioadvocacia.online.

## Regras de cada volta
- Nada de número inventado, depoimento, resultado, promessa, "especialista", "consulta gratuita", valor de honorário ou de indenização (Provimento OAB 205/2021). Só fatos verificáveis; lei citada com link do Planalto ou do órgão oficial.
- Escritório digital: sem endereço físico, sem horário inventado.
- Antes: `git fetch` e avançar `merge-publish` para `origin/main`. Depois: `npx tsc -p tsconfig.app.json --noEmit` e `npx vite build` sem erro.
- Gravar no GitHub em main + lovable-sync + riccio-live. Publicar é do Dr.: o loop só junta a lista do que subir.
- Uma tarefa por volta, do começo ao fim, e anotar em "Feito".

## 0. Do Dr. (trava o resto)
- [ ] Publicar no Lovable. Desde 07/11 02h30 o banco está fechado e o site no ar ainda tem o código antigo: o envio do questionário (/questionario) e a avaliação no fim do chat dão erro. O ajuste já está no GitHub (371b2d0 e c7f0975).

## Fila do loop
- [x] 1. Medição de base: Lighthouse no celular (rodando local) da home e de um artigo. Anotar notas e os 3 maiores ganhos; corrigir na hora o que for barato (imagem do topo, carregamento).
- [ ] 2. Página do advogado (confiança para o Google): /advogado-gilberto-riccio só com dados verificáveis (OAB/BA 46.638, CNPJ 50.947.818/0001-94, escritório digital, áreas, como funciona o atendimento online, link para a consulta no Cadastro Nacional da OAB). Schema ProfilePage + Person. Assinatura dos artigos e perguntas apontando para ela; entra no sitemap, no HTML estático e no rodapé.
- [ ] 3. Dados estruturados: validar o JSON-LD do HTML gerado (home, artigo, pergunta, cidade). Imagem em PNG/JPG no lugar do favicon.svg, sem priceRange, author.url para a página do advogado.
- [ ] 4. Pauta: sugestões reais da busca do Google (autocomplete) para as 6 áreas, com Salvador/Bahia e dúvidas comuns. Cruzar com os 103 artigos e as 117 perguntas e listar as 10 melhores lacunas em _planos/SEO-PAUTA.md.
- [ ] 5. Artigo novo 1 da pauta.
- [ ] 6. Artigo novo 2 da pauta.
- [ ] 7. Artigo novo 3 da pauta.
- [ ] 8. Artigo novo 4 da pauta.
- [ ] 9. Artigo novo 5 da pauta.
- [ ] 10. Search Console (quando o Chrome responder): páginas indexadas, erros, pedir indexação das páginas novas dentro da cota do dia.
- [ ] 11. Links internos: páginas de área e artigos antigos apontando para os artigos novos.
- [ ] 12. Fechamento: lista do que publicar e IndexNow das URLs novas depois do Publish.

Formato dos artigos: objeto BlogArticle (src/data/blog-articles.ts), rota /artigos/<área>/<slug>. 1.200+ palavras, "Em resumo" no início, passo a passo, documentos, prazos, 5 ou mais perguntas, fontes oficiais, links internos, data de atualização. Conferência jurídica antes de gravar.

## Feito
- 07/11 13h45 · item 1 · commit "perf: texto principal aparece antes no celular". Lighthouse no celular, site no ar: home 57 de velocidade e LCP 7,6 s; artigo 57 e LCP 8,5 s; SEO técnico 100 nos dois. O servidor responde em 0,9 s, mas o texto principal só aparecia depois do JavaScript (o título da home nascia invisível e em escala 0). Corrigido: o título só desliza, a imagem do vídeo da home não é mais pré-carregada nas outras 348 páginas, a fonte do Google não trava mais a primeira pintura e "consulta grátis" saiu das palavras-chave do cabeçalho. Para decidir com o Dr.: as tags do Google Ads e do GTM pesam uns 490 KB e atrasam o celular; dá para carregá-las depois da página, mas isso mexe na medição dos anúncios. Medir de novo depois do Publish.

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
- [x] 2. Página do advogado (confiança para o Google): /advogado-gilberto-riccio só com dados verificáveis (OAB/BA 46.638, CNPJ 50.947.818/0001-94, escritório digital, áreas, como funciona o atendimento online, link para a consulta no Cadastro Nacional da OAB). Schema ProfilePage + Person. Assinatura dos artigos e perguntas apontando para ela; entra no sitemap, no HTML estático e no rodapé.
- [x] 3. Dados estruturados: validar o JSON-LD do HTML gerado (home, artigo, pergunta, cidade). Imagem em PNG/JPG no lugar do favicon.svg, sem priceRange, author.url para a página do advogado.
- [x] 4. Pauta: sugestões reais da busca do Google (autocomplete) para as 6 áreas, com Salvador/Bahia e dúvidas comuns. Cruzar com os 103 artigos e as 117 perguntas e listar as 10 melhores lacunas em _planos/SEO-PAUTA.md.
- [x] 5. Artigo novo 1 da pauta.
- [x] 6. Artigo novo 2 da pauta.
- [x] 7. Artigo novo 3 da pauta.
- [ ] 8. Artigo novo 4 da pauta.
- [ ] 9. Artigo novo 5 da pauta.
- [ ] 10. Search Console (quando o Chrome responder): páginas indexadas, erros, pedir indexação das páginas novas dentro da cota do dia.
- [ ] 11. Links internos: páginas de área e artigos antigos apontando para os artigos novos.
- [ ] 12. Fechamento: lista do que publicar e IndexNow das URLs novas depois do Publish.

Formato dos artigos: objeto BlogArticle (src/data/blog-articles.ts), rota /artigos/<área>/<slug>. 1.200+ palavras, "Em resumo" no início, passo a passo, documentos, prazos, 5 ou mais perguntas, fontes oficiais, links internos, data de atualização. Conferência jurídica antes de gravar.

## Feito
- 07/11 13h45 · item 1 · commit "perf: texto principal aparece antes no celular". Lighthouse no celular, site no ar: home 57 de velocidade e LCP 7,6 s; artigo 57 e LCP 8,5 s; SEO técnico 100 nos dois. O servidor responde em 0,9 s, mas o texto principal só aparecia depois do JavaScript (o título da home nascia invisível e em escala 0). Corrigido: o título só desliza, a imagem do vídeo da home não é mais pré-carregada nas outras 348 páginas, a fonte do Google não trava mais a primeira pintura e "consulta grátis" saiu das palavras-chave do cabeçalho. Para decidir com o Dr.: as tags do Google Ads e do GTM pesam uns 490 KB e atrasam o celular; dá para carregá-las depois da página, mas isso mexe na medição dos anúncios. Medir de novo depois do Publish.
- 07/11 14h05 · item 2 · commit "seo: pagina do advogado". Nova /advogado-gilberto-riccio com foto real, OAB/BA 46.638, CNPJ, escritório digital, passo a passo do atendimento, 6 áreas, botão para conferir a inscrição no Cadastro Nacional da OAB e 5 perguntas. Dados para o Google: ProfilePage + Person (React e HTML estático). A autoria de artigos, perguntas, artigos locais e páginas de cidade aponta para ela; a caixa de autor dos artigos e a linha "Atualizado em" das perguntas viraram link. Entrou no rodapé, no sitemap (344 URLs) e no llms.txt. Conferido no celular.
- 07/11 14h25 · item 3 · commit "seo: dados estruturados sem faixa de preco". Novo verificador `npm run check:jsonld` (scripts/check-jsonld.mjs) passa pelas 350 páginas geradas: nenhum JSON inválido, nenhuma pergunta incompleta, nenhuma trilha fora de ordem, nenhum tipo repetido. Na versão montada pelo navegador (home, artigo, pergunta, Salvador), o artigo traz Article + FAQPage + BreadcrumbList com o autor ligado à página do advogado. Corrigido: faixa de preço ("$$", "Consulta inicial") saiu de 6 lugares (home, schema comum, cidades, consumidor por cidade, criminal) e a imagem do negócio na home deixou de ser o ícone do site (agora og-image.png). Observação: SVG é aceito pelo Google; o logotipo SVG ficou.
- 07/11 14h40 · item 4 · commit "seo: pauta de artigos". 621 sugestões reais do campo de busca do Google (70 buscas-semente) cruzadas com 4.488 títulos e perguntas do site. Lacunas fortes: "inquérito policial" e "lesão corporal" (nada no site), auxílio-acidente, aposentadoria 2026, pensão alimentícia atrasada, divórcio em cartório, conta de luz da Coelba, usucapião em cartório, perícia do INSS, crime de ameaça. Pauta com 10 temas, endereços e leis a conferir em _planos/SEO-PAUTA.md; ferramentas em scripts/pauta/. Próximos artigos: aposentadoria 2026, pensão atrasada, auxílio-acidente, conta da Coelba, inquérito policial.
- 07/11 15h05 · item 5 · commit "seo: artigo aposentadoria 2026". /artigos/previdenciario/aposentadoria-2026-regras: 5 regras de transição, regra permanente e cálculo, conferidos no texto da EC 103/2019 no Planalto (arts. 3º, 15 a 20 e 26), piso e teto de 2026; 8 perguntas; cerca de 1.500 palavras na página. Novo arquivo src/data/blog-articles-pauta.ts para os artigos da pauta; sitemap (345 URLs) e RSS atualizados. De quebra: o índice dos artigos aparecia duas vezes no celular (e solto acima do texto no computador) porque a página chamava o componente duas vezes; corrigido em todos os artigos. Trocada uma estatística sem fonte ("metade das reclamações termina em acordo") por frase sem número.
- 07/11 15h35 · item 6 · commit "seo: pensao alimenticia atrasada". O tema 2 da pauta já tinha artigo parecido (/artigos/familia/execucao-alimentos-prisao-penhora); em vez de criar um concorrente, o artigo foi reescrito no mesmo endereço para as buscas de "pensão alimentícia atrasada" (o que fazer, prescreve, parcelar, cobrar na cidade onde mora, desemprego, avô). Corrigidos 2 erros jurídicos: citava a Súmula 150 do STF para a prescrição (o prazo de 2 anos é do art. 206, § 2º, do Código Civil e não corre entre pais e filhos durante o poder familiar nem contra menor de 16) e chamava a penhora de "rito do art. 531" (é o art. 528, § 8º). Tudo conferido no CPC e no Código Civil no Planalto. 11 perguntas.
- 07/11 15h55 · item 7 · commit "seo: artigo auxilio-acidente". /artigos/previdenciario/auxilio-acidente: quem tem direito (empregado, doméstico, avulso, segurado especial; autônomo e MEI não), valor de 50% do salário de benefício, acumula com salário e não com aposentadoria, perícia, Justiça Estadual para acidente de trabalho e Federal para os demais. Conferido no texto em vigor da Lei 8.213/1991 (arts. 18 § 1º, 26 I, 86 e 103) e na página do serviço no gov.br. 9 perguntas.

# Rotina diária de SEO orgânico — riccioadvocacia.online

Roda todo dia às 10h pela tarefa agendada "seo-riccio-diaria" (criada com autorização do Dr. Gilberto em 08/11/2026; ele pediu que fosse diária). Ela substitui a antiga tarefa "indexacao-riccio-diaria", desligada no mesmo dia. Os passos marcados "só às segundas" rodam apenas na segunda-feira. Repositório: `C:\Users\pichau\Desktop\code\advogadoja`, branch local `merge-publish`; publicar no GitHub em `main`, `lovable-sync` e `riccio-live`.

## Regras que não mudam
- Siga as "Regras de cada volta" de `_planos/SEO-LOOP.md`: nada de número inventado, depoimento, resultado, promessa, "especialista", "consulta gratuita", valor de honorário ou de indenização (Provimento OAB 205/2021); escritório digital, sem endereço nem horário inventado; toda lei citada conferida no texto em vigor no Planalto (abrir no navegador do app e tirar `strike`, `s`, `del` e elementos com `text-decoration: line-through` antes de ler).
- Não clicar em Publicar no Lovable: terminar no `git push` e avisar que falta o Publish dele.
- Não mexer em Google Ads, GTM, nem nas páginas usadas em anúncios (/criminal, /prev) além de texto jurídico errado.
- Não alterar o Perfil da Empresa no Google nem configurações de contas.
- Nada de agentes em paralelo nem workflow (custa crédito do Gilberto).
- Commits terminam com a linha: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## Passo a passo
1. Preparação: `git fetch` e avançar `merge-publish` para `origin/main` (o Lovable também grava em `main`). Ler `_planos/SEO-LOOP.md`, `_planos/SEO-MEDICAO.md`, `_planos/SEO-INDEXACAO.md` e `_planos/SEO-PAUTA.md`.
2. Medição no Google (todo dia, leitura rápida; Claude in Chrome, aba nova no grupo; sempre `https://search.google.com/u/1/search-console/...` com `resource_id=https%3A%2F%2Friccioadvocacia.online%2F`):
   - Desempenho: cliques, impressões, CTR e posição média dos últimos 7 dias; às segundas, também os últimos 28 dias contra os 28 anteriores e as 10 consultas e 10 páginas com mais impressões.
   - Páginas (indexação): quantas indexadas e quantas não, com os motivos.
   - Se a janela do Chrome estiver escondida e a captura de tela falhar, leia o texto com get_page_text ou javascript_tool em pedaços pequenos.
   - Visitas de verdade vindas da busca: no Lovable (https://lovable.dev/projects/df589a75-d092-4a8d-b576-ed256bbbd500?view=more&subview=newAnalytics&channel=search), leia "SEO & AEO" dos últimos 7 dias (Google, Bing, ChatGPT) e as páginas de entrada; às segundas, também 30 dias. Só leitura: não clique em "Atrair mais tráfego", "Executar análise", "Tentar corrigir" nem "Conectar" (gastam crédito ou mexem no código). Se uma página de entrada abrir a home no lugar do conteúdo (título da home no HTML), corrija ou redirecione.
3. Medição no Bing (só às segundas; bing.com/webmasters, site riccioadvocacia.online, conta já logada no Chrome): Search Performance (cliques e impressões) e Site Explorer (páginas indexadas). Se pedir login, anote e siga sem ele.
4. Anote os números numa linha nova da tabela de `_planos/SEO-MEDICAO.md` (uma linha por dia) e compare com os dias e semanas anteriores.
5. Indexação:
   - Google: pedir indexação de até 6 endereços ("Solicitar indexação"), na ordem da Fila de `_planos/SEO-INDEXACAO.md`; se a fila estiver vazia, use páginas do relatório Páginas com "Detectada, mas não indexada" ou "Rastreada, mas não indexada". Pare na mensagem "A cota foi excedida". Marque no arquivo.
   - Bing: em URL Submission, envie até 100 endereços do sitemap que ainda não constam na lista "Enviados ao Bing" de `_planos/SEO-INDEXACAO.md` (crie a lista se não existir; a 1ª leva de 100 foi em 08/11/2026). Anote os enviados.
6. Títulos e descrições (só às segundas): entre as páginas com 50 ou mais impressões e CTR abaixo de 1% nos últimos 28 dias, melhore no máximo 5 `metaTitle`/`metaDescription` (o título só promete o que a página entrega; sem promessa de resultado). Anote antes e depois em `_planos/SEO-MEDICAO.md` para medir nas semanas seguintes. Não mexa de novo numa página alterada há menos de 4 semanas.
7. Leis novas: no Planalto, veja as leis ordinárias, complementares e emendas constitucionais publicadas desde a última checagem anotada em `_planos/SEO-MEDICAO.md` (portal de legislação do Planalto). Se alguma mudar regra tratada no site (penal, processo penal, execução penal, trabalho, INSS, família, consumidor, cível), corrija as páginas afetadas (procure no `src/data` pelo artigo da lei) e anote. Em 08/11/2026 a última conferida foi a EC 141/2026 (fim da escala 6x1).
8. Pauta e conteúdo: a partir das consultas com impressões sem página própria e de `scripts/pauta` (sementes novas), mantenha pelo menos 5 temas pendentes em `_planos/SEO-PAUTA.md`. Escreva 1 artigo novo por dia, o primeiro tema pendente da pauta, no formato de `src/data/blog-articles-pauta2.ts` (antes, procure endereço parecido; se existir, reforce o existente). Coloque o endereço novo em "Esperando publicação" no `_planos/SEO-INDEXACAO.md`.
9. Se mudou código: `npx tsc -p tsconfig.app.json --noEmit`, `npx tsx scripts/generate-sitemap.ts`, `npx tsx scripts/generate-rss.ts`, `npx vite build` e `npm run check:jsonld`, tudo sem erro. Anote a volta em "Feito" de `_planos/SEO-LOOP.md`, faça commit e `git push origin merge-publish:main merge-publish:lovable-sync merge-publish:riccio-live`.
10. Feche as abas que abriu no Chrome.

## Resumo para o Dr. (no fim)
Curto e simples (ele é advogado, não técnico): visitas vindas da busca nos últimos 7 dias (Lovable, "SEO & AEO"); cliques e impressões dos últimos 7 dias no Google (às segundas, as últimas 4 semanas contra as 4 anteriores, no Google e no Bing); quantas páginas indexadas; o que foi pedido de indexação; o que mudou hoje (títulos, correções por lei nova, artigo novo); e, se houve mudança de código, o lembrete "Falta clicar em Publicar no Lovable para entrar no ar". Se algo falhar (Search Console sem acesso, build quebrado), diga o que falhou e não suba nada quebrado.

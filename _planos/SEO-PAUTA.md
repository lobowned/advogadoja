# Pauta de artigos (07/11/2026)

Origem: sugestões reais do campo de busca do Google (621 sugestões de 70 buscas-semente nas 6 áreas, em `scripts/pauta/sugestoes.json`), cruzadas com os 4.488 títulos e perguntas que o site já publica (`scripts/pauta/lacunas.py`). Ficaram aqui só os temas sem página parecida, com procura real e ligação com os serviços do escritório.

Regras de todo artigo: só lei e fonte oficial conferidas na hora (Planalto, gov.br, CNJ, ANEEL, tribunais); nada de valor de indenização, chance de ganhar, honorário, depoimento ou promessa; data de atualização; links internos para a página da área, perguntas próximas e a página do advogado.

| # | Tema e título de trabalho | Área / endereço | Buscas reais que cobre | Conferir antes de escrever |
|---|---|---|---|---|
| 1 | Aposentadoria em 2026: regras de transição, idade mínima e pontos | previdenciário · /artigos/previdenciario/aposentadoria-2026-regras | aposentadoria 2026 regras, valor, mulher, novas regras, calendário | EC 103/2019 (arts. 15 a 20), valores de 2026 em valores-vigentes.ts |
| 2 | Pensão alimentícia atrasada: o que fazer, prisão, penhora e prescrição | família · /artigos/familia/pensao-alimenticia-atrasada | pensão atrasada o que fazer, prescreve, como proceder, pode ser parcelada | CPC arts. 528 a 533, Súmula 309 do STJ, CC arts. 197, 198 e 206 §2º |
| 3 | Auxílio-acidente do INSS: quem tem direito, valor e como pedir | previdenciário · /artigos/previdenciario/auxilio-acidente | auxílio acidente, como funciona, quem tem direito, valor, inss | Lei 8.213/1991 art. 86 e art. 18 §1º, LC 150/2015 |
| 4 | Conta de luz da Coelba alta ou com erro: como contestar | consumidor · /artigos/consumidor/conta-de-luz-coelba-alta | conta de luz coelba, conta de luz coelba bahia, embasa conta alta | Resolução Normativa ANEEL 1.000/2021, CDC art. 42, canais da Neoenergia Coelba e da ANEEL |
| 5 | Inquérito policial: o que é, prazos e direitos de quem é investigado | penal · /artigos/penal/inquerito-policial | inquérito policial, consulta, características, prazo | CPP arts. 4º a 23, Súmula Vinculante 14, Lei 8.906/1994 art. 7º XIV e XXI |
| 6 | Divórcio em cartório e online: requisitos, documentos e quando precisa de juiz | família · /artigos/familia/divorcio-em-cartorio-online | divórcio extrajudicial, divórcio online, com filhos, gratuito | CPC art. 733, Lei 11.441/2007, Resolução CNJ 35/2007 com a Resolução 571/2024, e-Notariado |
| 7 | Lesão corporal: leve, grave e gravíssima, penas e como corre o processo | penal · /artigos/penal/lesao-corporal | lesão corporal, leve, grave, gravíssima, dolosa | Código Penal art. 129 (texto atual no Planalto), Lei 9.099/1995 art. 88, Súmula 542 do STJ |
| 8 | Crime de ameaça: pena, representação e medida protetiva | penal · /artigos/penal/crime-de-ameaca | crime de ameaça, pena, ação penal condicionada, contra mulher, artigo | Código Penal art. 147 (texto atual no Planalto), Lei 11.340/2006 |
| 9 | Usucapião em cartório (extrajudicial): como funciona na Bahia | civil · /artigos/civil/usucapiao-extrajudicial | usucapião extrajudicial, quantos anos, familiar, extraordinária | Lei 6.015/1973 art. 216-A, CC arts. 1.238 a 1.244, Código Nacional de Normas do CNJ |
| 10 | Perícia do INSS: como funciona, o que levar e o que fazer se negarem | previdenciário · /artigos/previdenciario/pericia-inss | perícia inss como funciona, online, negada | Lei 8.213/1991, páginas do Meu INSS e do gov.br sobre perícia e Atestmed |

Reservas: boletim de ocorrência online na Bahia (Delegacia Virtual), reclamação no Procon da Bahia e no consumidor.gov.br, seguro-desemprego 2026, conta alta da Embasa. Para reforçar páginas que já existem em vez de criar novas: rescisão indireta (continuar trabalhando, seguro-desemprego) e assédio moral (como provar, exemplos, se é crime).

Ordem do loop (itens 5 a 9 de SEO-LOOP.md): 1, 2, 3, 4 e 5. Os outros ficam para a próxima rodada.

Andamento: 1 publicado no código (aposentadoria-2026-regras). 2 virou reescrita do artigo que já existia, /artigos/familia/execucao-alimentos-prisao-penhora, para não ter dois artigos disputando a mesma busca. Antes de cada artigo novo, procurar no sitemap e em src/data um endereço parecido: se existir, reforçar o existente. 3, 4 e 5 viraram artigos novos. 6 virou reescrita de /artigos/familia/divorcio-consensual.

# Pauta 2 (08/11/2026)

Origem: 975 sugestões reais do campo de busca do Google para 100 sementes novas (`scripts/pauta/sementes2.json`, resultado em `scripts/pauta/sugestoes2.json`), cruzadas com 4.778 títulos e perguntas do site (`python -X utf8 scripts/pauta/lacunas.py scripts/pauta/sugestoes2.json`).

| # | Tema e título de trabalho | Área / endereço | Buscas reais que cobre | Conferir antes de escrever |
|---|---|---|---|---|
| 11 | Furto: simples, qualificado e privilegiado, penas e diferença para roubo | penal · /artigos/penal/furto | furto, furto qualificado, furto e roubo | Código Penal arts. 155 e 156 (texto em vigor), Lei 9.099/1995 art. 89, CPP art. 28-A |
| 12 | Roubo: pena, aumentos e latrocínio | penal · /artigos/penal/roubo | roubo, roubo majorado, furto e roubo | Código Penal art. 157 (texto em vigor), Lei 8.072/1990 |
| 13 | Regulamentação de visitas: como funciona, como pedir e o que fazer se descumprirem | família · /artigos/familia/regulamentacao-de-visitas | regulamentação de visitas, como funciona, modelo | CC arts. 1.583 a 1.589, CPC arts. 693 a 699, Lei 12.318/2010 |
| 14 | Regime de bens no casamento e na união estável | família · /artigos/familia/regime-de-bens | regime de bens, casamento, união estável | CC arts. 1.639 a 1.688 e 1.725, Súmula 377 do STF |
| 15 | Receptação: o que é, pena e como se defender | penal · /artigos/penal/receptacao | receptação, culposa, qualificada | Código Penal art. 180 (texto em vigor) |
| 16 | Aposentadoria da pessoa com deficiência | previdenciário · /artigos/previdenciario/aposentadoria-pessoa-com-deficiencia | aposentadoria pessoa com deficiência, por idade, por tempo | LC 142/2013, EC 103/2019 art. 22, Decreto 3.048/1999 |
| 17 | Saída temporária (saidinha): quem tem direito depois da lei de 2024 | penal · /artigos/penal/saida-temporaria-saidinha | saidinha, saidinha presos | Lei 7.210/1984 arts. 122 a 125 com a Lei 14.843/2024 |
| 18 | Atestado médico no trabalho: o que a empresa pode e não pode exigir | trabalhista · /artigos/trabalhista/atestado-medico-trabalho | atestado médico trabalho, atestado de acompanhamento | Lei 605/1949 art. 6º, CLT art. 473, Lei 8.213/1991 art. 60 |
| 19 | Qualidade de segurado e carência no INSS | previdenciário · /artigos/previdenciario/qualidade-de-segurado-carencia | qualidade de segurado, carência inss, período de graça | Lei 8.213/1991 arts. 15, 24 a 27-A |

Reforçar em vez de criar: estabilidade da gestante (artigo de estabilidade em blog-articles.ts), férias vencidas (/artigos/trabalhista/ferias-nao-pagas-como-receber), dívida prescrita (/perguntas/cobranca-divida-prescrita-prazo), Pix enviado por engano (/artigos/consumidor/golpe-pix-como-recuperar-dinheiro), cartão clonado e compra não reconhecida (pergunta já existente), "corte de energia" (artigo da Coelba).

Próximas reservas: antecedentes criminais na Bahia, auxílio-reclusão, empregada doméstica, jovem aprendiz, contribuição do autônomo ao INSS, protesto em cartório, golpe do WhatsApp, prisão preventiva, porte de drogas para consumo pessoal.


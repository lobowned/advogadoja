# Passos que só o Dr. Gilberto pode fazer

Tudo o que dependia do código já está no GitHub. Estes passos precisam da sua conta, assinatura ou pagamento.

## 0. URGENTE: dados de clientes expostos (achado em 06/11)
- O banco do site (Lovable Cloud) tem regras que deixam **qualquer pessoa ler** os contatos (`leads`), os casos, as respostas do questionário e as análises, e **alterar** contatos. A pasta de documentos enviados (`case-documents`) deixa qualquer um ver e enviar arquivos. O próprio Lovable marca isso como crítico (Mais → Segurança: 10 tabelas e 2 regras de arquivos).
- A página **/admin** mostrava e exportava esses contatos **sem login**. Ela saiu do ar em 06/11 (o código ficou guardado em `src/pages/admin`).
- Falta fechar as regras do banco. O Lovable oferece "Try to fix" de graça, mas a correção mexe no banco de produção e pode quebrar o chat do site, que lê e atualiza o próprio contato pelo navegador. Por isso precisa da sua autorização. O caminho seguro é o chat passar a gravar pelo servidor (função) e só um login de administrador ler os contatos.

## 1. Publicar
No Lovable, projeto "Riccio Advocacia": botão **Publicar → Publicar alterações**.
Sem isso, nada do que foi feito aparece no site no ar.

## 2. Domínio próprio: FEITO (riccioadvocacia.online)
O site responde em **https://riccioadvocacia.online** e o endereço antigo (riccio-advocacia.lovable.app) redireciona para ele.
Desde 06/11 o site inteiro declara o domínio novo como endereço oficial (canonical, mapa do site, dados para o Google).
Opcional: registrar também **riccio.adv.br** (exclusivo de advogados, estava livre) só para proteger o nome.

## 3. Google Search Console do domínio novo: FEITO (06/11)
Propriedade **https://riccioadvocacia.online/** criada e verificada (arquivo HTML), `sitemap.xml` enviado e processado (343 páginas encontradas) e indexação pedida para a página inicial, /advogado-bahia e /perguntas.
Acompanhe em search.google.com/search-console (conta em que já está a propriedade antiga), menu **Páginas**: a indexação do domínio novo leva de alguns dias a algumas semanas.

## 4. Google Meu Negócio
Trocar o site do perfil para **https://riccioadvocacia.online**.
Quando chegar a carta do Google com o código, digite o código no perfil (ou me mande que eu sigo com você).
Depois de verificado: foto real sua ou do logo e a lista de serviços por área.

## 5. Bing (abastece também o ChatGPT e o DuckDuckGo)
Depois do passo 3: em bing.com/webmasters, com sua conta Microsoft, **Importar do Google Search Console**. Leva 2 minutos.

## 6. E-mail do site
Os endereços que aparecem no site (contato@advogadoja.com.br e privacidade@advogadoja.com.br) **não recebem e-mail**: o domínio advogadoja.com.br não tem servidor de e-mail configurado.
A Política de Privacidade precisa de um contato que funcione (LGPD). Duas saídas:
- ativar o encaminhamento grátis de e-mail do Cloudflare (Email Routing) para o seu Gmail; ou
- me dizer qual e-mail mostrar no site, que eu troco.

## 7. Chat do site (assistente virtual)
O texto do robô foi corrigido no código: ele não se apresenta mais como "Dr. Rafael, especialista em…" nem usa nomes de advogados que não existem.
Essa parte roda numa função do servidor, que **só muda depois de publicada no Lovable** (pedir no chat do Lovable: "publique a função lawyer-chat"). Isso gasta créditos do Lovable.

## 8. Perfis que trazem visita e credibilidade
Texto de apresentação para usar no JusBrasil, LinkedIn e no Google Meu Negócio:

> Gilberto Riccio é advogado inscrito na OAB/BA sob o nº 46.638. Atua de forma online em direito trabalhista, previdenciário (INSS), família, consumidor, cível e criminal, com atendimento em toda a Bahia. Explica direitos, prazos e documentos em linguagem simples e conduz cada caso do primeiro contato até o fim.

No JusBrasil, publique 1 artigo por mês (pode ser a versão resumida de um guia do site) com o link para o guia completo.

## Para decidir
- Horário de atendimento: a página inicial diz seg–sex 8h–20h e a área do INSS (/prev) diz 9h–18h. Qual vale?
- O rodapé da página /criminal cita Camaçari; o resto do site cita Salvador.
- A página /criminal diz que o escritório atua em "tribunais superiores". Se não for o caso, eu tiro.

## Cuidados (Provimento OAB 205/2021)
- Não anunciar consulta gratuita, valores de honorários, percentuais de êxito nem resultados de processos.
- Avaliações no Google são escritas pelos próprios clientes; não reproduzir depoimentos no site.

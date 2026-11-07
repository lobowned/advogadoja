/**
 * Páginas carregadas sob demanda.
 *
 * Antes, as 71 páginas e ~1,7 MB de textos (artigos, cidades, perguntas) iam no pacote
 * principal para qualquer visitante, mesmo quem só abria a página inicial. Agora só a
 * página inicial e a 404 vão no pacote principal (ver App.tsx); cada página abaixo
 * carrega quando aberta.
 *
 * preloadRoute() carrega a página do endereço atual ANTES do primeiro render (main.tsx),
 * então o HTML pré-renderizado para o Google fica na tela até o React assumir, sem piscar.
 * Também roda ao passar o mouse ou tocar num link interno.
 */
import { lazyPage } from "@/lib/lazyPage";
import { LOCAL_PAGE_KEYS } from "@/data/local-page-keys";

// Área /prev
export const PrevHome = lazyPage(() => import("@/pages/prev/PrevHome"));
export const PrevAposentadorias = lazyPage(() => import("@/pages/prev/PrevAposentadorias"));
export const PrevAposentadoriaIdade = lazyPage(() => import("@/pages/prev/PrevAposentadoriaIdade"));
export const PrevAuxilioDoenca = lazyPage(() => import("@/pages/prev/PrevAuxilioDoenca"));
export const PrevInvalidez = lazyPage(() => import("@/pages/prev/PrevInvalidez"));
export const PrevBpcLoas = lazyPage(() => import("@/pages/prev/PrevBpcLoas"));
export const PrevSalarioMaternidade = lazyPage(() => import("@/pages/prev/PrevSalarioMaternidade"));
export const PrevSobre = lazyPage(() => import("@/pages/prev/PrevSobre"));
export const PrevContato = lazyPage(() => import("@/pages/prev/PrevContato"));

// Guias e landing institucional
export const GuiaPage = lazyPage(() => import("@/pages/guias/GuiaPage"));
export const GuiasIndex = lazyPage(() => import("@/pages/guias/GuiasIndex"));
export const RiccioAdvocacia = lazyPage(() => import("@/pages/RiccioAdvocacia"));

// Páginas gerais
export const PrivacyPolicy = lazyPage(() => import("@/pages/PrivacyPolicy"));
export const TermsOfUse = lazyPage(() => import("@/pages/TermsOfUse"));
export const DynamicQuestionnaire = lazyPage(() => import("@/pages/DynamicQuestionnaire"));
export const Completed = lazyPage(() => import("@/pages/Completed"));
export const FAQIndex = lazyPage(() => import("@/pages/FAQIndex"));
export const FAQQuestion = lazyPage(() => import("@/pages/FAQQuestion"));
export const NicheLanding = lazyPage(() => import("@/pages/NicheLanding"));
export const CityLanding = lazyPage(() => import("@/pages/CityLanding"));
export const CityNicheLanding = lazyPage(() => import("@/pages/CityNicheLanding"));
export const Blog = lazyPage(() => import("@/pages/Blog"));
export const BlogPost = lazyPage(() => import("@/pages/BlogPost"));
export const BlogIndex = lazyPage(() => import("@/pages/BlogIndex"));
export const BlogArticle = lazyPage(() => import("@/pages/BlogArticle"));
export const SelectNiche = lazyPage(() => import("@/pages/SelectNiche"));
export const SelectAction = lazyPage(() => import("@/pages/SelectAction"));
export const News = lazyPage(() => import("@/pages/News"));
export const Sitemap = lazyPage(() => import("@/pages/Sitemap"));
export const Conversao = lazyPage(() => import("@/pages/Conversao"));
export const CityConsumerLanding = lazyPage(() => import("@/pages/CityConsumerLanding"));
export const LocalSEOArticle = lazyPage(() => import("@/pages/LocalSEOArticle"));
export const AdvogadoBahia = lazyPage(() => import("@/pages/AdvogadoBahia"));
export const TrabalhistaLanding = lazyPage(() => import("@/pages/trabalhista/TrabalhistaLanding"));
export const CriminalLanding = lazyPage(() => import("@/pages/criminal/CriminalLanding"));

// Calculadoras
export const Calculadoras = lazyPage(() => import("@/pages/Calculadoras"));
export const CalculadoraTrabalhista = lazyPage(() => import("@/pages/CalculadoraTrabalhista"));
export const CalculadoraPensao = lazyPage(() => import("@/pages/CalculadoraPensao"));
export const CalculadoraAposentadoria = lazyPage(() => import("@/pages/CalculadoraAposentadoria"));
export const CalculadoraHorasExtras = lazyPage(() => import("@/pages/CalculadoraHorasExtras"));
export const CalculadoraSeguroDesemprego = lazyPage(() => import("@/pages/CalculadoraSeguroDesemprego"));
export const CalculadoraFGTS = lazyPage(() => import("@/pages/CalculadoraFGTS"));
export const CalculadoraInsalubridade = lazyPage(() => import("@/pages/CalculadoraInsalubridade"));
export const CalculadoraPartilhaBens = lazyPage(() => import("@/pages/CalculadoraPartilhaBens"));
export const CalculadoraPensaoMorte = lazyPage(() => import("@/pages/CalculadoraPensaoMorte"));
export const CalculadoraAuxilioDoenca = lazyPage(() => import("@/pages/CalculadoraAuxilioDoenca"));
export const CalculadoraBPCLOAS = lazyPage(() => import("@/pages/CalculadoraBPCLOAS"));
export const CalculadoraAtualizacaoDivida = lazyPage(() => import("@/pages/CalculadoraAtualizacaoDivida"));
export const CalculadoraAluguelAtrasado = lazyPage(() => import("@/pages/CalculadoraAluguelAtrasado"));
export const CalculadoraDevolucaoEmDobro = lazyPage(() => import("@/pages/CalculadoraDevolucaoEmDobro"));

// Landings de consumidor
export const NegativacaoIndevidaLanding = lazyPage(() => import("@/pages/consumer/NegativacaoIndevidaLanding"));
export const PlanoSaudeNegouLanding = lazyPage(() => import("@/pages/consumer/PlanoSaudeNegouLanding"));
export const FraudeBancariaLanding = lazyPage(() => import("@/pages/consumer/FraudeBancariaLanding"));
export const CobrancaIndevidaLanding = lazyPage(() => import("@/pages/consumer/CobrancaIndevidaLanding"));
export const ProdutoDefeitousoLanding = lazyPage(() => import("@/pages/consumer/ProdutoDefeitousoLanding"));
export const LiminarCirurgiaNegadaLanding = lazyPage(() => import("@/pages/consumer/LiminarCirurgiaNegadaLanding"));
export const LiminarBariatricaLanding = lazyPage(() => import("@/pages/consumer/LiminarBariatricaLanding"));
export const LiminarOncologicaLanding = lazyPage(() => import("@/pages/consumer/LiminarOncologicaLanding"));
export const LiminarOrtopedicaLanding = lazyPage(() => import("@/pages/consumer/LiminarOrtopedicaLanding"));
export const LiminarCardiologicaLanding = lazyPage(() => import("@/pages/consumer/LiminarCardiologicaLanding"));
export const LiminarNeurologicaLanding = lazyPage(() => import("@/pages/consumer/LiminarNeurologicaLanding"));
export const LiminarOftalmologicaLanding = lazyPage(() => import("@/pages/consumer/LiminarOftalmologicaLanding"));
export const ProblemasVooLanding = lazyPage(() => import("@/pages/consumer/ProblemasVooLanding"));
export const CartaoConsignadoLanding = lazyPage(() => import("@/pages/consumer/CartaoConsignadoLanding"));

// Admin
// LeadsDashboard e QADashboard fora do ar (sem login; ver App.tsx). Os arquivos continuam em src/pages/admin.

type Preloadable = { preload: () => Promise<unknown> };

/** Endereço → páginas a carregar. Expressões ancoradas; a primeira que casar vale. */
const ROUTE_PRELOADS: Array<[RegExp, Preloadable[]]> = [
  [/^\/selecionar-nicho$/, [SelectNiche]],
  [/^\/selecionar-acao\/[^/]+$/, [SelectAction]],
  [/^\/questionario\/[^/]+\/[^/]+$/, [DynamicQuestionnaire]],
  [/^\/concluido$/, [Completed]],
  [/^\/blog$/, [BlogIndex]],
  [/^\/blog\/[^/]+$/, [BlogArticle]],
  // LocalSEOArticle repassa ao BlogPost os artigos de consumidor do blog
  [/^\/artigos\/consumidor\/[^/]+$/, [LocalSEOArticle, BlogPost]],
  [/^\/artigos(\/[^/]+)?$/, [Blog]],
  [/^\/artigos\/[^/]+\/[^/]+$/, [BlogPost]],
  // /perguntas-frequentes redireciona para /perguntas (App.tsx)
  [/^\/perguntas-frequentes$/, [FAQIndex]],
  [/^\/perguntas$/, [FAQIndex]],
  [/^\/perguntas\/[^/]+$/, [FAQQuestion]],
  [/^\/privacidade$/, [PrivacyPolicy]],
  [/^\/termos-de-uso$/, [TermsOfUse]],
  [/^\/sitemap$/, [Sitemap]],
  [/^\/advogado-bahia$/, [AdvogadoBahia]],
  [/^\/noticias(\/[^/]+)?$/, [News]],
  [/^\/calculadoras$/, [Calculadoras]],
  // Calculadoras de indenização aposentadas em 06/11/2026: redirecionam para o artigo da área
  [/^\/calculadora-(danos-morais|dpvat|voo-cancelado|negativacao|plano-saude|fraude-bancaria|liminar-cirurgia|inventario)$/, [BlogPost]],
  [/^\/calculadora-trabalhista$/, [CalculadoraTrabalhista]],
  [/^\/calculadora-pensao$/, [CalculadoraPensao]],
  [/^\/calculadora-aposentadoria$/, [CalculadoraAposentadoria]],
  [/^\/calculadora-atualizacao-divida$/, [CalculadoraAtualizacaoDivida]],
  [/^\/calculadora-partilha-bens$/, [CalculadoraPartilhaBens]],
  [/^\/calculadora-aluguel-atrasado$/, [CalculadoraAluguelAtrasado]],
  [/^\/calculadora-horas-extras$/, [CalculadoraHorasExtras]],
  [/^\/calculadora-seguro-desemprego$/, [CalculadoraSeguroDesemprego]],
  [/^\/calculadora-fgts$/, [CalculadoraFGTS]],
  [/^\/calculadora-pensao-morte$/, [CalculadoraPensaoMorte]],
  [/^\/calculadora-auxilio-doenca$/, [CalculadoraAuxilioDoenca]],
  [/^\/calculadora-bpc-loas$/, [CalculadoraBPCLOAS]],
  [/^\/calculadora-insalubridade$/, [CalculadoraInsalubridade]],
  [/^\/calculadora-devolucao-dobro$/, [CalculadoraDevolucaoEmDobro]],
  [/^\/(advogado-)?negativacao-indevida$/, [NegativacaoIndevidaLanding]],
  [/^\/(advogado-plano-saude-cobertura-negada|plano-saude-negou)$/, [PlanoSaudeNegouLanding]],
  [/^\/(advogado-)?cobranca-indevida$/, [CobrancaIndevidaLanding]],
  [/^\/advogado-produto-defeituoso$/, [ProdutoDefeitousoLanding]],
  [/^\/fraude-bancaria$/, [FraudeBancariaLanding]],
  [/^\/liminar-cirurgia-negada$/, [LiminarCirurgiaNegadaLanding]],
  [/^\/liminar-cirurgia-bariatrica$/, [LiminarBariatricaLanding]],
  [/^\/liminar-tratamento-cancer$/, [LiminarOncologicaLanding]],
  [/^\/liminar-cirurgia-ortopedica$/, [LiminarOrtopedicaLanding]],
  [/^\/liminar-cirurgia-cardiaca$/, [LiminarCardiologicaLanding]],
  [/^\/liminar-neurocirurgia$/, [LiminarNeurologicaLanding]],
  [/^\/liminar-cirurgia-olhos$/, [LiminarOftalmologicaLanding]],
  [/^\/advogado-cartao-consignado$/, [CartaoConsignadoLanding]],
  [/^\/advogado-trabalhista-online$/, [TrabalhistaLanding]],
  [/^\/criminal$/, [CriminalLanding]],
  [/^\/(advogado-problemas-voo|advogado-voo-cancelado-atrasado|voo-cancelado)$/, [ProblemasVooLanding]],
  [/^\/advogado-(consumidor|trabalhista|familia|civil|previdenciario|criminal)$/, [NicheLanding]],
  [/^\/advogado\/[^/]+$/, [CityLanding]],
  [/^\/conversao$/, [Conversao]],
  [/^\/riccioadvocacia$/, [RiccioAdvocacia]],
  [/^\/prev$/, [PrevHome]],
  [/^\/prev\/aposentadorias$/, [PrevAposentadorias]],
  [/^\/prev\/aposentadoria-por-idade$/, [PrevAposentadoriaIdade]],
  [/^\/prev\/auxilio-doenca$/, [PrevAuxilioDoenca]],
  [/^\/prev\/(invalidez|aposentadoria-por-invalidez)$/, [PrevInvalidez]],
  [/^\/prev\/bpc-loas$/, [PrevBpcLoas]],
  [/^\/prev\/salario-maternidade$/, [PrevSalarioMaternidade]],
  [/^\/prev\/sobre$/, [PrevSobre]],
  [/^\/prev\/contato$/, [PrevContato]],
  [/^\/guias$/, [GuiasIndex]],
  [/^\/guia\/[^/]+$/, [GuiaPage]],
];

const LOCAL_KEYS = new Set<string>(LOCAL_PAGE_KEYS);

/** Carrega o código da página de `pathname`. Endereço sem página própria: nada a carregar. */
export function preloadRoute(pathname: string): Promise<unknown> {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith("/advogado-") && LOCAL_KEYS.has(path.slice("/advogado-".length))) {
    return CityNicheLanding.preload();
  }
  for (const [re, pages] of ROUTE_PRELOADS) {
    if (re.test(path)) return Promise.all(pages.map((p) => p.preload()));
  }
  return Promise.resolve();
}

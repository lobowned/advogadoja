import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Scale, FileText, Mail, Phone, AlertCircle } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PageTransition from "@/components/motion/PageTransition";

const TermsOfUse = () => {
  const lastUpdated = "14 de dezembro de 2025";

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Termos de Uso | Advogado Já</title>
        <meta 
          name="description" 
          content="Termos de Uso do Advogado Já. Conheça as condições de uso da plataforma, responsabilidades e direitos em conformidade com a OAB." 
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/termos-de-uso" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-bold text-base sm:text-lg">Advogado Já</span>
              </Link>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 min-h-[44px]">
                  <Link to="/artigos">Artigos</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 min-h-[44px]">
                  <Link to="/">Falar com Advogado</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <BackButton to="/" label="Voltar ao início" className="mb-6" />
            <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leia atentamente os termos e condições de uso da plataforma Advogado Já, 
              em conformidade com o Código de Ética da OAB e legislação brasileira.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: {lastUpdated}
            </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Disclaimer Importante */}
            <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>Aviso Importante:</strong> O atendimento inicial pelo chat é realizado por 
                um assistente virtual para triagem e organização das informações. A análise jurídica 
                e pareceres formais são realizados exclusivamente por advogados habilitados na OAB.
              </AlertDescription>
            </Alert>

            {/* Identificação */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">1. Identificação do Prestador</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  <strong className="text-foreground">Razão Social:</strong> Advogado Já<br />
                  <strong className="text-foreground">CNPJ:</strong> 50.947.818/0001-94<br />
                  <strong className="text-foreground">Inscrição OAB:</strong> OAB/BA 46.638<br />
                  <strong className="text-foreground">Endereço:</strong> Salvador, Bahia, Brasil<br />
                  <strong className="text-foreground">E-mail:</strong> contato@advogadoja.com.br
                </p>
              </CardContent>
            </Card>

            {/* Natureza do Serviço */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">2. Natureza do Serviço</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  O Advogado Já é uma plataforma de atendimento jurídico que oferece:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Triagem inicial:</strong> coleta de informações sobre seu caso por meio de assistente virtual</li>
                  <li><strong className="text-foreground">Consulta jurídica gratuita:</strong> análise preliminar por advogados habilitados</li>
                  <li><strong className="text-foreground">Orientação jurídica:</strong> esclarecimento de dúvidas e direcionamento sobre possíveis ações</li>
                  <li><strong className="text-foreground">Representação judicial:</strong> mediante contratação formal de serviços advocatícios</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Importante:</strong> A consulta inicial não constitui parecer jurídico formal nem 
                  estabelece vínculo de representação. A relação advogado-cliente só se estabelece mediante 
                  contrato de honorários assinado.
                </p>
              </CardContent>
            </Card>

            {/* Sigilo Profissional */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">3. Sigilo Profissional</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Em conformidade com o artigo 7º do Estatuto da Advocacia (Lei 8.906/94) e o Código de 
                  Ética e Disciplina da OAB, todas as informações compartilhadas são protegidas pelo 
                  sigilo profissional:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Todas as comunicações são confidenciais e invioláveis</li>
                  <li>Nenhuma informação será divulgada sem sua autorização expressa</li>
                  <li>O sigilo abrange advogados, funcionários e prestadores de serviço</li>
                  <li>Utilizamos criptografia de ponta a ponta em todas as comunicações</li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsabilidades do Usuário */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">4. Responsabilidades do Usuário</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Ao utilizar nossos serviços, você concorda em:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fornecer informações verdadeiras, precisas e completas sobre seu caso</li>
                  <li>Manter atualizados seus dados de contato</li>
                  <li>Não utilizar a plataforma para fins ilícitos ou fraudulentos</li>
                  <li>Respeitar os profissionais e demais usuários da plataforma</li>
                  <li>Guardar sigilo sobre estratégias processuais definidas com seu advogado</li>
                  <li>Comparecer às audiências e atos processuais quando convocado</li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsabilidades do Escritório */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">5. Responsabilidades do Escritório</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Nos comprometemos a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Atuar com diligência, zelo e competência técnica</li>
                  <li>Manter você informado sobre o andamento do seu caso</li>
                  <li>Respeitar os prazos processuais</li>
                  <li>Agir com ética e em conformidade com as normas da OAB</li>
                  <li>Proteger seus dados pessoais conforme a LGPD</li>
                  <li>Informar previamente sobre custos, riscos e chances de êxito</li>
                </ul>
              </CardContent>
            </Card>

            {/* Honorários */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">6. Honorários Advocatícios</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  <strong className="text-foreground">Consulta inicial:</strong> A triagem e consulta inicial pelo chat são gratuitas.
                </p>
                <p className="mt-4">
                  <strong className="text-foreground">Contratação de serviços:</strong> Caso decida prosseguir com uma ação judicial, 
                  será apresentada proposta de honorários que pode incluir:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Honorários fixos:</strong> valor único ou parcelado</li>
                  <li><strong className="text-foreground">Honorários de êxito:</strong> percentual sobre o valor obtido na causa</li>
                  <li><strong className="text-foreground">Honorários mistos:</strong> combinação de valor fixo + êxito</li>
                </ul>
                <p className="mt-4">
                  Os valores serão sempre informados previamente e formalizados em contrato escrito, 
                  respeitando a Tabela de Honorários da OAB e o Código de Ética.
                </p>
              </CardContent>
            </Card>

            {/* Limitações */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">7. Limitações</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>O atendimento inicial não constitui parecer jurídico formal</li>
                  <li>Não há garantia de resultado em processos judiciais (vedado pelo Código de Ética da OAB)</li>
                  <li>Prazos processuais dependem do Poder Judiciário, não do advogado</li>
                  <li>A decisão de prosseguir com uma ação é exclusivamente do cliente</li>
                  <li>O advogado pode recusar casos que violem a ética profissional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Propriedade Intelectual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">8. Propriedade Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Todo o conteúdo da plataforma (textos, artigos, logotipos, design, código-fonte) é 
                  propriedade do Advogado Já e está protegido por direitos autorais.
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-4">
                  <li>Artigos podem ser compartilhados com citação da fonte</li>
                  <li>É proibida a reprodução comercial sem autorização</li>
                  <li>A marca "Advogado Já" é protegida</li>
                </ul>
              </CardContent>
            </Card>

            {/* Conduta Proibida */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">9. Conduta Proibida</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>É expressamente proibido:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fornecer informações falsas ou documentos fraudulentos</li>
                  <li>Tentar obter vantagem ilícita por meio dos serviços</li>
                  <li>Utilizar a plataforma para assédio, difamação ou ameaças</li>
                  <li>Interferir no funcionamento técnico da plataforma</li>
                  <li>Compartilhar credenciais de acesso com terceiros</li>
                </ul>
              </CardContent>
            </Card>

            {/* Rescisão */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">10. Rescisão</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>A relação pode ser encerrada:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Pelo cliente:</strong> a qualquer momento, mediante comunicação escrita</li>
                  <li><strong className="text-foreground">Pelo advogado:</strong> por justa causa (violação ética, inadimplência, perda de confiança)</li>
                </ul>
                <p className="mt-4">
                  Em caso de rescisão durante o processo, serão devidos honorários proporcionais 
                  ao trabalho realizado, conforme contrato.
                </p>
              </CardContent>
            </Card>

            {/* Publicidade Advocatícia */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">11. Publicidade (Provimento 205/2021 OAB)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Esta plataforma atua em conformidade com o Provimento 205/2021 do Conselho Federal da OAB, 
                  que regulamenta a publicidade advocatícia digital:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conteúdo de caráter informativo e educativo</li>
                  <li>Sem promessas de resultados ou captação indevida</li>
                  <li>Identificação clara do advogado responsável (OAB/BA 46.638)</li>
                  <li>Respeito à dignidade da profissão</li>
                  <li>Transparência nos serviços oferecidos</li>
                </ul>
              </CardContent>
            </Card>

            {/* Foro e Legislação */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">12. Foro e Legislação Aplicável</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Estes Termos de Uso são regidos pela legislação brasileira, especialmente:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lei 8.906/94 (Estatuto da Advocacia)</li>
                  <li>Código de Ética e Disciplina da OAB</li>
                  <li>Código Civil Brasileiro</li>
                  <li>Lei 13.709/2018 (LGPD)</li>
                  <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Foro:</strong> Fica eleito o foro da comarca de Salvador/BA para dirimir 
                  quaisquer questões decorrentes destes termos, com renúncia a qualquer outro, 
                  por mais privilegiado que seja.
                </p>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">13. Contato</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Para dúvidas sobre estes Termos de Uso:</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a 
                    href="mailto:contato@advogadoja.com.br"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    contato@advogadoja.com.br
                  </a>
                  <a 
                    href="https://wa.me/5571997036269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já | OAB/BA 46.638</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/termos-de-uso" className="hover:text-foreground transition-colors font-medium text-foreground">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default TermsOfUse;

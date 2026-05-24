import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Scale, Shield, Mail, Phone } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from "@/components/motion/PageTransition";

const PrivacyPolicy = () => {
  const lastUpdated = "14 de dezembro de 2025";

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Política de Privacidade | Advogado Já</title>
        <meta 
          name="description" 
          content="Política de Privacidade do Advogado Já. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD." 
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/privacidade" />
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua privacidade é nossa prioridade. Conheça como tratamos seus dados pessoais 
              em conformidade com a Lei Geral de Proteção de Dados (LGPD).
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
            
            {/* Identificação do Controlador */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">1. Identificação do Controlador</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  <strong className="text-foreground">Razão Social:</strong> Advogado Já<br />
                  <strong className="text-foreground">CNPJ:</strong> 50.947.818/0001-94<br />
                  <strong className="text-foreground">Registro OAB:</strong> OAB/BA 46.638<br />
                  <strong className="text-foreground">Endereço:</strong> Salvador, Bahia, Brasil<br />
                  <strong className="text-foreground">E-mail do Encarregado (DPO):</strong> privacidade@advogadoja.com.br
                </p>
              </CardContent>
            </Card>

            {/* Dados Coletados */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">2. Dados Pessoais Coletados</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Coletamos os seguintes dados pessoais para prestação de serviços jurídicos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Dados de identificação:</strong> nome completo, CPF, RG, data de nascimento</li>
                  <li><strong className="text-foreground">Dados de contato:</strong> e-mail, telefone, endereço</li>
                  <li><strong className="text-foreground">Dados do caso jurídico:</strong> informações sobre sua situação jurídica, documentos, histórico do caso</li>
                  <li><strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
                  <li><strong className="text-foreground">Dados de comunicação:</strong> mensagens trocadas via chat, e-mail ou WhatsApp</li>
                </ul>
              </CardContent>
            </Card>

            {/* Finalidade do Tratamento */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">3. Finalidade do Tratamento</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Seus dados são tratados para as seguintes finalidades:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Prestação de serviços de consultoria e assessoria jurídica</li>
                  <li>Análise e triagem inicial do seu caso jurídico</li>
                  <li>Comunicação sobre andamento de processos e atualizações</li>
                  <li>Envio de conteúdo informativo jurídico relevante (mediante consentimento)</li>
                  <li>Cumprimento de obrigações legais e regulatórias</li>
                  <li>Melhoria dos nossos serviços e experiência do usuário</li>
                </ul>
              </CardContent>
            </Card>

            {/* Base Legal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">4. Base Legal para o Tratamento</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>O tratamento de seus dados pessoais fundamenta-se nas seguintes bases legais (Art. 7º da LGPD):</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Execução de contrato:</strong> para prestação dos serviços jurídicos contratados</li>
                  <li><strong className="text-foreground">Cumprimento de obrigação legal:</strong> para atender requisitos legais e regulatórios da advocacia</li>
                  <li><strong className="text-foreground">Legítimo interesse:</strong> para melhoria dos serviços e comunicações relevantes</li>
                  <li><strong className="text-foreground">Consentimento:</strong> para envio de newsletters e conteúdo promocional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compartilhamento */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">5. Compartilhamento de Dados</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Seus dados podem ser compartilhados apenas nas seguintes situações:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Órgãos judiciais:</strong> tribunais, cartórios e órgãos públicos para andamento do seu processo</li>
                  <li><strong className="text-foreground">Prestadores de serviço:</strong> empresas de tecnologia que auxiliam na operação da plataforma (sempre sob contrato de confidencialidade)</li>
                  <li><strong className="text-foreground">Obrigação legal:</strong> quando exigido por lei, regulamento ou ordem judicial</li>
                  <li><strong className="text-foreground">Com seu consentimento:</strong> em outras situações, sempre com sua autorização expressa</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Importante:</strong> Nunca vendemos, alugamos ou compartilhamos seus dados para fins comerciais de terceiros.
                </p>
              </CardContent>
            </Card>

            {/* Direitos do Titular */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">6. Seus Direitos (Art. 18 da LGPD)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Você possui os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Confirmação e acesso:</strong> confirmar a existência de tratamento e acessar seus dados</li>
                  <li><strong className="text-foreground">Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                  <li><strong className="text-foreground">Anonimização ou bloqueio:</strong> de dados desnecessários ou excessivos</li>
                  <li><strong className="text-foreground">Portabilidade:</strong> receber seus dados em formato estruturado</li>
                  <li><strong className="text-foreground">Eliminação:</strong> solicitar a exclusão de dados tratados com base no consentimento</li>
                  <li><strong className="text-foreground">Revogação do consentimento:</strong> revogar o consentimento a qualquer momento</li>
                  <li><strong className="text-foreground">Oposição:</strong> opor-se ao tratamento realizado com base no legítimo interesse</li>
                </ul>
                <p className="mt-4">
                  Para exercer seus direitos, entre em contato pelo e-mail: <strong className="text-foreground">privacidade@advogadoja.com.br</strong>
                </p>
              </CardContent>
            </Card>

            {/* Retenção de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">7. Retenção de Dados</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Seus dados são mantidos pelo período necessário para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Documentos processuais:</strong> 5 a 20 anos, conforme prazos prescricionais legais</li>
                  <li><strong className="text-foreground">Dados contábeis:</strong> 5 anos após o término da relação contratual</li>
                  <li><strong className="text-foreground">Comunicações de marketing:</strong> até a revogação do consentimento</li>
                  <li><strong className="text-foreground">Logs de acesso:</strong> 6 meses (conforme Marco Civil da Internet)</li>
                </ul>
                <p className="mt-4">
                  Após os prazos de retenção, os dados são eliminados ou anonimizados de forma segura.
                </p>
              </CardContent>
            </Card>

            {/* Segurança */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">8. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Criptografia de dados em trânsito (HTTPS/TLS) e em repouso</li>
                  <li>Controles de acesso baseados em privilégio mínimo</li>
                  <li>Monitoramento contínuo de segurança e detecção de intrusões</li>
                  <li>Backup regular com armazenamento seguro</li>
                  <li>Treinamento da equipe em proteção de dados e sigilo profissional</li>
                  <li>Servidores em ambiente de nuvem certificado</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">9. Cookies e Tecnologias Similares</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Utilizamos cookies para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Cookies essenciais:</strong> necessários para funcionamento do site</li>
                  <li><strong className="text-foreground">Cookies de desempenho:</strong> análise de uso e melhoria da experiência</li>
                  <li><strong className="text-foreground">Cookies funcionais:</strong> lembrar suas preferências</li>
                </ul>
                <p className="mt-4">
                  Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                </p>
              </CardContent>
            </Card>

            {/* Alterações */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">10. Alterações nesta Política</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações 
                  significativas serão comunicadas por e-mail ou aviso em nossa plataforma. Recomendamos 
                  a revisão periódica desta página.
                </p>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">11. Contato</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>Para dúvidas, solicitações ou exercício de direitos, entre em contato:</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a 
                    href="mailto:privacidade@advogadoja.com.br"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    privacidade@advogadoja.com.br
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
              <Link to="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="hover:text-foreground transition-colors font-medium text-foreground">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;

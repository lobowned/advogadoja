import { Phone, Mail, Video, Clock } from "lucide-react";

const SupportChannels = () => {
  const channels: Array<{
    icon: any;
    title: string;
    description: string;
    contact: string;
    action: string;
    color: string;
    bgColor: string;
    highlight: boolean;
  }> = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Resposta imediata • Disponível agora",
      contact: "(XX) XXXXX-XXXX",
      action: "Enviar mensagem",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      highlight: true
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Resposta garantida em até 24h",
      contact: "contato@escritorio.com.br",
      action: "Enviar e-mail",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      highlight: false
    },
    {
      icon: Video,
      title: "Reunião Online",
      description: "Videoconferência segura e sigilosa",
      contact: "Agendamento disponível",
      action: "Agendar reunião",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      highlight: false
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      description: "Segunda a Sexta • Plantão aos sábados",
      contact: "09:00 às 18:00",
      action: "Ver disponibilidade",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
      highlight: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Fale Agora com Nossa Equipe
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Atendimento humanizado e resposta rápida. Escolha como prefere conversar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-lg p-4 sm:p-6 shadow-card hover:shadow-elegant transition-all group cursor-pointer ${
                  channel.highlight 
                    ? 'border-2 border-green-600 ring-2 ring-green-600/20' 
                    : 'border border-border'
                }`}
              >
                <div className={`mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full ${channel.bgColor} group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${channel.color}`} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {channel.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  {channel.description}
                </p>

                <p className={`text-sm sm:text-base font-semibold ${channel.color} mb-3 sm:mb-4`}>
                  {channel.contact}
                </p>

                <div className="text-xs sm:text-sm text-primary font-medium group-hover:underline">
                  {channel.action} →
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg text-foreground">
            <strong>Atendimento presencial:</strong> Rua Exemplo, 123 - Centro - Cidade/Estado - CEP 00000-000
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Estacionamento disponível • Acessibilidade completa
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;

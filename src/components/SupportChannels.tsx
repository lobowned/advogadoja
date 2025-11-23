import { Phone, Mail, Video, Clock } from "lucide-react";

const SupportChannels = () => {
  const channels = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Atendimento rápido e direto",
      contact: "(XX) XXXXX-XXXX",
      action: "Enviar mensagem",
      color: "text-green-600",
      bgColor: "bg-green-600/10"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Resposta em até 24h",
      contact: "contato@escritorio.com.br",
      action: "Enviar e-mail",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: Video,
      title: "Reunião Online",
      description: "Videoconferência segura",
      contact: "Agendamento disponível",
      action: "Agendar reunião",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      description: "Segunda a Sexta",
      contact: "09:00 às 18:00",
      action: "Ver disponibilidade",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o canal mais conveniente para você. Estamos prontos para atender.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all group cursor-pointer"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${channel.bgColor} group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-7 w-7 ${channel.color}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {channel.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {channel.description}
                </p>

                <p className={`font-semibold ${channel.color} mb-4`}>
                  {channel.contact}
                </p>

                <div className="text-sm text-primary font-medium group-hover:underline">
                  {channel.action} →
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <p className="text-lg text-foreground">
            <strong>Atendimento presencial:</strong> Rua Exemplo, 123 - Centro - Cidade/Estado - CEP 00000-000
          </p>
          <p className="text-muted-foreground mt-2">
            Estacionamento disponível • Acessibilidade completa
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;

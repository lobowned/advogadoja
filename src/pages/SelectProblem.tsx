import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  ShoppingCart, 
  AlertCircle, 
  CreditCard, 
  XCircle, 
  UserX, 
  Shield, 
  BadgeAlert,
  HelpCircle
} from "lucide-react";

const problems = [
  {
    id: "compras-online",
    title: "Problemas com Compras Online",
    description: "Produto não entregue, atraso na entrega, produto diferente",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    id: "produto-defeito",
    title: "Produto com Defeito",
    description: "Produto apresentou defeito ou não funciona corretamente",
    icon: AlertCircle,
    color: "text-red-600",
  },
  {
    id: "cobranca-indevida",
    title: "Cobrança Indevida",
    description: "Cobrança de valores não contratados ou incorretos",
    icon: CreditCard,
    color: "text-orange-600",
  },
  {
    id: "cancelamento-servicos",
    title: "Cancelamento de Serviços",
    description: "Dificuldade para cancelar serviço ou cobrança após cancelamento",
    icon: XCircle,
    color: "text-purple-600",
  },
  {
    id: "nome-negativado",
    title: "Nome Negativado Indevidamente",
    description: "Negativação indevida ou manutenção após pagamento",
    icon: UserX,
    color: "text-pink-600",
  },
  {
    id: "problemas-garantia",
    title: "Problemas com Garantia",
    description: "Recusa de garantia ou mau atendimento pós-venda",
    icon: Shield,
    color: "text-green-600",
  },
  {
    id: "golpes-fraudes",
    title: "Golpes e Fraudes",
    description: "Foi vítima de golpe, fraude ou propaganda enganosa",
    icon: BadgeAlert,
    color: "text-red-700",
  },
  {
    id: "outras-situacoes",
    title: "Outras Situações",
    description: "Outro tipo de problema relacionado ao consumo",
    icon: HelpCircle,
    color: "text-gray-600",
  },
];

const SelectProblem = () => {
  const navigate = useNavigate();

  const handleProblemSelect = (problemId: string) => {
    navigate(`/questionario/${problemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <button 
            onClick={() => navigate("/")}
            className="mb-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Voltar para página inicial
          </button>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Qual é o seu Problema?
          </h1>
          <p className="mt-2 text-muted-foreground">
            Selecione a opção que melhor descreve sua situação
          </p>
        </div>
      </header>

      {/* Problem Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <Card
                key={problem.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover"
                onClick={() => handleProblemSelect(problem.id)}
              >
                <div className="p-6">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10 ${problem.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Todas as informações fornecidas são sigilosas e protegidas</p>
        </div>
      </footer>
    </div>
  );
};

export default SelectProblem;

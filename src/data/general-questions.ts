import { Question } from "@/types/legal-flows";

export const generalQuestions: Question[] = [
  {
    id: 'nome_completo',
    type: 'text',
    label: 'Nome completo',
    placeholder: 'Digite seu nome completo',
    required: true,
  },
  {
    id: 'cpf',
    type: 'text',
    label: 'CPF',
    placeholder: '000.000.000-00',
    required: true,
    validation: {
      pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      message: 'CPF deve estar no formato 000.000.000-00',
    },
  },
  {
    id: 'data_nascimento',
    type: 'date',
    label: 'Data de nascimento',
    required: true,
  },
  {
    id: 'telefone',
    type: 'tel',
    label: 'Telefone/WhatsApp',
    placeholder: '(00) 00000-0000',
    required: true,
    hint: 'Preferimos WhatsApp para melhor atendimento',
  },
  {
    id: 'email',
    type: 'email',
    label: 'E-mail',
    placeholder: 'seu@email.com',
    required: true,
    validation: {
      type: 'email',
    },
  },
  {
    id: 'cidade',
    type: 'text',
    label: 'Cidade',
    placeholder: 'Digite sua cidade',
    required: true,
  },
  {
    id: 'estado',
    type: 'select',
    label: 'Estado',
    required: true,
    options: [
      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
      'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
      'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ],
  },
  {
    id: 'como_encontrou',
    type: 'select',
    label: 'Como nos encontrou?',
    required: true,
    options: [
      'Google',
      'Instagram',
      'Facebook',
      'WhatsApp',
      'Indicação de amigo/familiar',
      'YouTube',
      'Outro',
    ],
  },
  {
    id: 'urgencia',
    type: 'radio',
    label: 'Qual o nível de urgência do seu caso?',
    required: true,
    options: ['Urgente (preciso de atendimento imediato)', 'Normal (posso aguardar alguns dias)', 'Sem urgência'],
  },
  {
    id: 'preferencia_contato',
    type: 'radio',
    label: 'Como prefere ser contatado?',
    required: true,
    options: ['WhatsApp', 'Ligação telefônica', 'E-mail'],
  },
];

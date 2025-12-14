import { useState, useEffect, useCallback } from 'react';
import { lawyers, Lawyer } from '@/data/lawyers';

export type LawyerStatus = 'online' | 'busy' | 'away' | 'offline';

export type LawyerWithPresence = Lawyer & {
  status: LawyerStatus;
  lastSeen?: Date;
  joinedAt?: Date;
  busyUntil?: Date;
  currentActivity?: string;
};

type PresenceNotification = {
  id: string;
  message: string;
  type: 'join' | 'leave';
  timestamp: Date;
  lawyerPhoto?: string;
  lawyerName?: string;
};

// Função para calcular quantidade de advogados baseado no horário
const getExpectedOnlineCount = (): { min: number; max: number } => {
  const now = new Date();
  const hour = now.getHours();
  
  // Horário de expediente realista
  if (hour >= 6 && hour < 9) {
    // Plantão matutino
    return { min: 8, max: 12 };
  } else if (hour >= 9 && hour < 12) {
    // Manhã comercial
    return { min: 18, max: 25 };
  } else if (hour >= 12 && hour < 14) {
    // Horário de almoço
    return { min: 12, max: 18 };
  } else if (hour >= 14 && hour < 18) {
    // Tarde comercial (pico)
    return { min: 22, max: 30 };
  } else if (hour >= 18 && hour < 21) {
    // Plantão noturno inicial
    return { min: 14, max: 20 };
  } else if (hour >= 21 && hour < 23) {
    // Plantão noturno tardio
    return { min: 8, max: 14 };
  } else {
    // Madrugada (plantão de emergência)
    return { min: 5, max: 8 };
  }
};

// Mensagens de saída contextuais baseadas no horário
const getLeaveReasons = (): string[] => {
  const hour = new Date().getHours();
  
  if (hour >= 11 && hour < 14) {
    return ['saiu para o almoço', 'foi almoçar', 'intervalo de almoço'];
  } else if (hour >= 8 && hour < 18) {
    return [
      'foi para audiência',
      'saiu para atendimento externo',
      'está em reunião com cliente',
      'foi ao fórum',
      'atendimento presencial',
      'voltará em breve'
    ];
  } else {
    return [
      'encerrou o plantão',
      'finalizou o expediente',
      'voltará amanhã',
      'saiu para descanso'
    ];
  }
};

// Mensagens de entrada contextuais
const getJoinMessages = (lawyerName: string): string[] => {
  const hour = new Date().getHours();
  
  if (hour >= 6 && hour < 9) {
    return [
      `${lawyerName} iniciou o plantão matutino`,
      `${lawyerName} está online`,
    ];
  } else if (hour >= 18) {
    return [
      `${lawyerName} entrou no plantão noturno`,
      `${lawyerName} está disponível`,
    ];
  } else {
    return [
      `${lawyerName} está disponível agora`,
      `${lawyerName} entrou no plantão`,
      `${lawyerName} iniciou o atendimento`,
    ];
  }
};

// Atividades quando ocupado
const getBusyActivities = (): string[] => [
  'Atendendo outro cliente',
  'Em ligação',
  'Analisando documentos',
  'Preparando parecer',
  'Em reunião',
  'Finalizando atendimento'
];

export const useLawyerPresenceState = () => {
  const [onlineLawyers, setOnlineLawyers] = useState<LawyerWithPresence[]>([]);
  const [notification, setNotification] = useState<PresenceNotification | null>(null);

  // Inicializar com advogados baseado no horário
  useEffect(() => {
    const { min, max } = getExpectedOnlineCount();
    const initialCount = min + Math.floor(Math.random() * (max - min + 1));
    
    const shuffled = [...lawyers].sort(() => Math.random() - 0.5);
    const initialOnline = shuffled.slice(0, initialCount).map((l, idx) => {
      // 25% chance de estar ocupado inicialmente
      const isBusy = Math.random() < 0.25;
      return {
        ...l,
        status: (isBusy ? 'busy' : 'online') as LawyerStatus,
        joinedAt: new Date(Date.now() - Math.random() * 3600000), // Entrou nas últimas 1h
        currentActivity: isBusy ? getBusyActivities()[Math.floor(Math.random() * getBusyActivities().length)] : undefined,
        busyUntil: isBusy ? new Date(Date.now() + Math.random() * 120000 + 60000) : undefined, // 1-3 min
      };
    });
    setOnlineLawyers(initialOnline);
  }, []);

  // Atualizar advogados ocupados para disponíveis
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineLawyers(prev => prev.map(lawyer => {
        if (lawyer.status === 'busy' && lawyer.busyUntil && new Date() > lawyer.busyUntil) {
          return {
            ...lawyer,
            status: 'online' as LawyerStatus,
            currentActivity: undefined,
            busyUntil: undefined
          };
        }
        return lawyer;
      }));
    }, 10000); // Verificar a cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  // Simular entradas/saídas periódicas e mudanças de status
  useEffect(() => {
    const interval = setInterval(() => {
      const { min, max } = getExpectedOnlineCount();
      const action = Math.random();
      
      // 35% chance de advogado entrar (se abaixo do máximo)
      if (action < 0.35 && onlineLawyers.length < max) {
        const offlineLawyers = lawyers.filter(
          l => !onlineLawyers.find(ol => ol.id === l.id)
        );
        
        if (offlineLawyers.length > 0) {
          const newLawyer = offlineLawyers[Math.floor(Math.random() * offlineLawyers.length)];
          const joinMessages = getJoinMessages(newLawyer.name);
          
          setOnlineLawyers(prev => [
            ...prev,
            { 
              ...newLawyer, 
              status: 'online', 
              joinedAt: new Date() 
            }
          ]);
          
          setNotification({
            id: `${newLawyer.id}-${Date.now()}`,
            message: joinMessages[Math.floor(Math.random() * joinMessages.length)],
            type: 'join',
            timestamp: new Date(),
            lawyerPhoto: newLawyer.photo,
            lawyerName: newLawyer.name,
          });
        }
      } 
      // 25% chance de advogado sair (se acima do mínimo)
      else if (action < 0.60 && onlineLawyers.length > min) {
        const availableLawyers = onlineLawyers.filter(l => l.status !== 'busy');
        if (availableLawyers.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableLawyers.length);
          const leavingLawyer = availableLawyers[randomIndex];
          
          const leaveReasons = getLeaveReasons();
          
          setOnlineLawyers(prev => prev.filter(l => l.id !== leavingLawyer.id));
          
          setNotification({
            id: `${leavingLawyer.id}-${Date.now()}`,
            message: `${leavingLawyer.name} ${leaveReasons[Math.floor(Math.random() * leaveReasons.length)]}`,
            type: 'leave',
            timestamp: new Date(),
            lawyerPhoto: leavingLawyer.photo,
            lawyerName: leavingLawyer.name,
          });
        }
      }
      // 20% chance de advogado online ficar ocupado
      else if (action < 0.80) {
        const availableLawyers = onlineLawyers.filter(l => l.status === 'online');
        if (availableLawyers.length > 2) {
          const randomLawyer = availableLawyers[Math.floor(Math.random() * availableLawyers.length)];
          const activities = getBusyActivities();
          
          setOnlineLawyers(prev => prev.map(l => 
            l.id === randomLawyer.id 
              ? {
                  ...l,
                  status: 'busy' as LawyerStatus,
                  currentActivity: activities[Math.floor(Math.random() * activities.length)],
                  busyUntil: new Date(Date.now() + Math.random() * 180000 + 60000) // 1-4 min
                }
              : l
          ));
        }
      }
    }, 45000 + Math.random() * 45000); // 45-90 segundos

    return () => clearInterval(interval);
  }, [onlineLawyers]);

  // Limpar notificação após 3 segundos
  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  // Contar apenas advogados disponíveis (não ocupados)
  const availableCount = onlineLawyers.filter(l => l.status === 'online').length;
  const busyCount = onlineLawyers.filter(l => l.status === 'busy').length;

  return {
    onlineLawyers,
    notification,
    onlineCount: onlineLawyers.length,
    availableCount,
    busyCount,
  };
};

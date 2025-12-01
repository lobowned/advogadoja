import { useState, useEffect } from 'react';
import { lawyers, Lawyer } from '@/data/lawyers';

export type LawyerStatus = 'online' | 'busy' | 'away' | 'offline';

export type LawyerWithPresence = Lawyer & {
  status: LawyerStatus;
  lastSeen?: Date;
  joinedAt?: Date;
};

type PresenceNotification = {
  id: string;
  message: string;
  type: 'join' | 'leave';
  timestamp: Date;
};

export const useLawyerPresenceState = () => {
  const [onlineLawyers, setOnlineLawyers] = useState<LawyerWithPresence[]>([]);
  const [notification, setNotification] = useState<PresenceNotification | null>(null);

  // Inicializar com advogados aleatórios online (20-25)
  useEffect(() => {
    const shuffled = [...lawyers].sort(() => Math.random() - 0.5);
    const initialCount = 20 + Math.floor(Math.random() * 6); // 20-25
    const initialOnline = shuffled.slice(0, initialCount).map(l => ({
      ...l,
      status: 'online' as LawyerStatus,
      joinedAt: new Date(),
    }));
    setOnlineLawyers(initialOnline);
  }, []);

  // Simular entradas/saídas periódicas
  useEffect(() => {
    const interval = setInterval(() => {
      const action = Math.random();
      
      // 40% chance de advogado entrar (se abaixo do máximo)
      if (action < 0.40 && onlineLawyers.length < 32) {
        const offlineLawyers = lawyers.filter(
          l => !onlineLawyers.find(ol => ol.id === l.id)
        );
        
        if (offlineLawyers.length > 0) {
          const newLawyer = offlineLawyers[Math.floor(Math.random() * offlineLawyers.length)];
          setOnlineLawyers(prev => [
            ...prev,
            { ...newLawyer, status: 'online', joinedAt: new Date() }
          ]);
          
          const joinMessages = [
            `${newLawyer.name} entrou no plantão`,
            `${newLawyer.name} está disponível agora`,
            `${newLawyer.name} iniciou o atendimento`,
          ];
          
          setNotification({
            id: `${newLawyer.id}-${Date.now()}`,
            message: joinMessages[Math.floor(Math.random() * joinMessages.length)],
            type: 'join',
            timestamp: new Date(),
          });
        }
      } 
      // 35% chance de advogado sair (se acima do mínimo)
      else if (action < 0.75 && onlineLawyers.length > 15) {
        const randomIndex = Math.floor(Math.random() * onlineLawyers.length);
        const leavingLawyer = onlineLawyers[randomIndex];
        
        const leaveReasons = [
          'saiu para atendimento externo',
          'encerrou o plantão',
          'foi para audiência',
          'está em reunião',
          'voltará em breve',
        ];
        
        setOnlineLawyers(prev => prev.filter((_, i) => i !== randomIndex));
        
        setNotification({
          id: `${leavingLawyer.id}-${Date.now()}`,
          message: `${leavingLawyer.name} ${leaveReasons[Math.floor(Math.random() * leaveReasons.length)]}`,
          type: 'leave',
          timestamp: new Date(),
        });
      }
    }, 30000 + Math.random() * 60000); // 30-90 segundos

    return () => clearInterval(interval);
  }, [onlineLawyers]);

  // Limpar notificação após 3 segundos
  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return {
    onlineLawyers,
    notification,
    onlineCount: onlineLawyers.length,
  };
};

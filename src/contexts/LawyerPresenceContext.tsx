import { createContext, useContext, ReactNode } from 'react';
import { useLawyerPresenceState } from '@/hooks/useLawyerPresence';

type LawyerPresenceContextType = ReturnType<typeof useLawyerPresenceState>;

const LawyerPresenceContext = createContext<LawyerPresenceContextType | undefined>(undefined);

// O aviso flutuante "Dr./Dra. Fulano está online / foi para audiência" (PresenceNotification)
// não é mais exibido: simulava uma equipe de advogados que não existe. O escritório tem um
// advogado só (Dr. Gilberto Riccio, OAB/BA 46.638); os nomes do chat são do assistente virtual.
export const LawyerPresenceProvider = ({ children }: { children: ReactNode }) => {
  const presence = useLawyerPresenceState();

  return (
    <LawyerPresenceContext.Provider value={presence}>
      {children}
    </LawyerPresenceContext.Provider>
  );
};

export const useLawyerPresence = () => {
  const context = useContext(LawyerPresenceContext);
  if (context === undefined) {
    throw new Error('useLawyerPresence must be used within LawyerPresenceProvider');
  }
  return context;
};

import { createContext, useContext, ReactNode } from 'react';
import { useLawyerPresenceState } from '@/hooks/useLawyerPresence';

type LawyerPresenceContextType = ReturnType<typeof useLawyerPresenceState>;

const LawyerPresenceContext = createContext<LawyerPresenceContextType | null>(null);

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
  if (!context) {
    throw new Error('useLawyerPresence must be used within LawyerPresenceProvider');
  }
  return context;
};

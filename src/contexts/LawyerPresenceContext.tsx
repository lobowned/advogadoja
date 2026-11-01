import { createContext, useContext, ReactNode } from 'react';
import { useLawyerPresenceState } from '@/hooks/useLawyerPresence';
import PresenceNotification from '@/components/PresenceNotification';

type LawyerPresenceContextType = ReturnType<typeof useLawyerPresenceState>;

const LawyerPresenceContext = createContext<LawyerPresenceContextType | undefined>(undefined);

export const LawyerPresenceProvider = ({ children }: { children: ReactNode }) => {
  const presence = useLawyerPresenceState();
  
  return (
    <LawyerPresenceContext.Provider value={presence}>
      {children}
      <PresenceNotification notification={presence.notification} />
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

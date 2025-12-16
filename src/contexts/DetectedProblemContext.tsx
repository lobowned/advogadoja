import { createContext, useContext, useState, ReactNode } from 'react';

interface DetectedProblemContextType {
  detectedArea: string | null;
  setDetectedArea: (area: string | null) => void;
}

const DetectedProblemContext = createContext<DetectedProblemContextType | undefined>(undefined);

export const DetectedProblemProvider = ({ children }: { children: ReactNode }) => {
  const [detectedArea, setDetectedArea] = useState<string | null>(null);

  return (
    <DetectedProblemContext.Provider value={{ detectedArea, setDetectedArea }}>
      {children}
    </DetectedProblemContext.Provider>
  );
};

export const useDetectedProblem = () => {
  const context = useContext(DetectedProblemContext);
  if (!context) {
    throw new Error('useDetectedProblem must be used within DetectedProblemProvider');
  }
  return context;
};

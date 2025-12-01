import { createContext, useContext, ReactNode } from 'react';
import { useTodayAttendances } from '@/hooks/useTodayAttendances';

type AttendanceContextType = ReturnType<typeof useTodayAttendances>;

const AttendanceContext = createContext<AttendanceContextType | null>(null);

export const AttendanceProvider = ({ children }: { children: ReactNode }) => {
  const attendance = useTodayAttendances();
  
  return (
    <AttendanceContext.Provider value={attendance}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => {
  const context = useContext(AttendanceContext);
  if (!context) {
    throw new Error('useAttendance must be used within AttendanceProvider');
  }
  return context;
};

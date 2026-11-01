import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, UserMinus } from "lucide-react";

interface PresenceNotificationProps {
  notification: {
    id: string;
    message: string;
    type: 'join' | 'leave';
    timestamp: Date;
    lawyerPhoto?: string;
    lawyerName?: string;
  } | null;
}

const PresenceNotification = ({ notification }: PresenceNotificationProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
      
      // Tocar som sutil
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = notification.type === 'join' ? 700 : 500;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
      } catch (e) {
        // Silently fail if audio not available
      }

      const timeout = setTimeout(() => setVisible(false), 2800);
      return () => clearTimeout(timeout);
    }
  }, [notification?.id]);

  if (!notification || !visible) return null;

  return (
    <div 
      className={`fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in duration-300 ${
        !visible ? 'animate-out slide-out-to-top-2 fade-out' : ''
      }`}
    >
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border ${
        notification.type === 'join' 
          ? 'bg-green-50/90 dark:bg-green-950/90 border-green-200 dark:border-green-800' 
          : 'bg-orange-50/90 dark:bg-orange-950/90 border-orange-200 dark:border-orange-800'
      }`}>
        {notification.lawyerPhoto && (
          <Avatar className="h-10 w-10 border-2 border-white/50">
            <AvatarImage src={notification.lawyerPhoto} />
            <AvatarFallback className="text-xs">
              {notification.lawyerName?.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        )}
        
        <div className="flex items-center gap-2">
          {notification.type === 'join' ? (
            <UserPlus className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <UserMinus className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          )}
          <span className={`text-sm font-medium ${
            notification.type === 'join' 
              ? 'text-green-700 dark:text-green-300' 
              : 'text-orange-700 dark:text-orange-300'
          }`}>
            {notification.message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresenceNotification;

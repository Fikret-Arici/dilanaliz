import { useState, useEffect, useCallback } from 'react';

interface UseTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export function useTimer({ initialTime, onTimeUp, isActive }: UseTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const resetTimer = useCallback(() => {
    setTimeRemaining(initialTime);
  }, [initialTime]);

  const pauseTimer = useCallback(() => {
    // Timer'ı durdurma mantığı burada
  }, []);

  const resumeTimer = useCallback(() => {
    // Timer'ı devam ettirme mantığı burada
  }, []);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isActive, timeRemaining, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = (seconds: number) => {
    if (seconds <= 300) return 'text-red-600 bg-red-50 border-red-200';
    if (seconds <= 600) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-amber-600 bg-amber-50 border-amber-200';
  };

  return {
    timeRemaining,
    resetTimer,
    pauseTimer,
    resumeTimer,
    formatTime,
    getTimeColor,
    isTimeWarning: timeRemaining <= 300
  };
} 
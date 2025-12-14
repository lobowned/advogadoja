import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  delay?: number;
  disabled?: boolean;
}

export const useExitIntent = (options?: UseExitIntentOptions) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const closePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  useEffect(() => {
    if (options?.disabled) return;

    // Verificar se já mostrou nesta sessão
    const alreadyShown = sessionStorage.getItem('exit_intent_shown');
    if (alreadyShown) {
      setHasTriggered(true);
      return;
    }

    const delay = options?.delay || 10000;
    let canShow = false;

    const delayTimer = setTimeout(() => {
      canShow = true;
    }, delay);

    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar movimento para cima (saindo da página)
      if (e.clientY <= 0 && !hasTriggered && canShow) {
        setShowPopup(true);
        setHasTriggered(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }
    };

    // Mobile: detectar scroll rápido para cima
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;
      
      if (timeDiff > 0) {
        scrollVelocity = (lastScrollY - currentScrollY) / timeDiff;
      }
      
      const scrollingUpFast = scrollVelocity > 2;
      const nearTop = currentScrollY < 100;

      if (scrollingUpFast && nearTop && !hasTriggered && canShow) {
        setShowPopup(true);
        setHasTriggered(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(delayTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered, options?.delay, options?.disabled]);

  return { showPopup, setShowPopup, closePopup, hasTriggered };
};

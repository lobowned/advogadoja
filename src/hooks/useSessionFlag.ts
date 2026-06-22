import { useCallback, useState } from "react";

export const useSessionFlag = (key: string): [boolean, () => void] => {
  const [flag, setFlag] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(key) === "1";
  });

  const set = useCallback(() => {
    try {
      window.sessionStorage.setItem(key, "1");
    } catch {
      // ignore
    }
    setFlag(true);
  }, [key]);

  return [flag, set];
};

export const hasSessionFlag = (key: string): boolean => {
  try {
    return window.sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
};

export const setSessionFlag = (key: string): void => {
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    // ignore
  }
};

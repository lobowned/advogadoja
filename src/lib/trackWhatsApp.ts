const GOOGLE_ADS_ID = "AW-17774629021";

export const WHATSAPP_CLICKED_FLAG = "wa_clicked";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const markWhatsAppClicked = () => {
  try {
    window.sessionStorage.setItem(WHATSAPP_CLICKED_FLAG, "1");
  } catch {
    // ignore
  }
};

export const trackWhatsAppConversion = () => {
  markWhatsAppClicked();
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_ID,
    });
  }
};

export const trackGAEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

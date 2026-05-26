const GOOGLE_ADS_ID = "AW-17774629021";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackWhatsAppConversion = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_ID,
    });
  }
};

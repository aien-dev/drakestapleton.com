declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

export function trackRepoOutbound(repoName: string, destinationUrl: string) {
  trackEvent("repo_outbound_click", {
    repo_name: repoName,
    destination_url: destinationUrl,
    event_category: "engagement",
    event_label: repoName,
  });
}

export function trackInterestConversion() {
  trackEvent("conversion", {
    event_category: "lead",
    event_label: "conversation_received",
  });
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: "conversation_form",
  });
}

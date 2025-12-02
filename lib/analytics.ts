// lib/analytics.ts
// DataLayer push for Google Tag Manager

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pushDataLayer = (eventName: string, data: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...data,
    });
    // Debug log (remove in production if needed)
    if (process.env.NODE_ENV === 'development') {
      console.log(`DataLayer Push: ${eventName}`, data);
    }
  }
};

// Predefined events for type safety
export const trackCtaClick = (location: string) => {
  pushDataLayer('cta_click', { location });
};

export const trackNpcGenerated = (rollCount: number) => {
  pushDataLayer('npc_generated', { roll_count: rollCount });
};

export const trackFilterChange = (filterType: string, value: string) => {
  pushDataLayer('filter_change', { filter_type: filterType, value });
};

export const trackFeedbackClick = (location: string = 'header') => {
  pushDataLayer('feedback_click', { location });
};

export const trackCopyAction = (copyTarget: string) => {
  pushDataLayer('copy_action', { copy_target: copyTarget });
};

export const trackRollAnotherClick = (source: string) => {
  pushDataLayer('roll_another_click', { source });
};

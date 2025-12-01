// Sentry client configuration - FIXED for iPad touch compatibility
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5f1466f3b8e96b8ccd19352be89f31b2@o4510376683307008.ingest.de.sentry.io/4510376685469776",

  // NO integrations - Replay was causing touch event issues on iPad/tablets
  integrations: [],

  // Reduced tracing to avoid touch interference
  tracesSampleRate: 0.1,

  // Replay completely disabled - causes touch issues on iOS/iPad
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,

  // Keep error logging
  enableLogs: true,
});

// Required for Next.js navigation instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

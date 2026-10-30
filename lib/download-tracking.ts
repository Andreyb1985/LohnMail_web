export const SOFTWARE_DOWNLOADS = {
  windows: {
    href: "https://apps.microsoft.com/detail/9PK5RR3LQ9N9?cid=lohnmail_website",
    event: "windows_store_click",
    channel: "microsoft_store",
  },
  macos: {
    href: "/downloads/LohnMail-macOS.dmg",
    event: "macos_download_click",
    channel: "direct_download",
  },
} as const;

export type DownloadPlatform = keyof typeof SOFTWARE_DOWNLOADS;

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

export function trackDownloadClick(platform: DownloadPlatform) {
  if (typeof window === "undefined") return;

  const target = SOFTWARE_DOWNLOADS[platform];
  const analytics = window as AnalyticsWindow;
  const parameters = {
    platform,
    download_channel: target.channel,
    link_url: target.href,
    source: "trial_download_screen",
    transport_type: "beacon",
  };

  try {
    if (typeof analytics.gtag === "function") {
      analytics.gtag("event", target.event, parameters);
    } else {
      // Queue in the same format as gtag.js while its script is loading.
      function queue(..._args: unknown[]) {
        (analytics.dataLayer ??= []).push(arguments);
      }
      queue("event", target.event, parameters);
    }
  } catch {
    // Analytics must never prevent opening the Store or downloading a file.
  }
}

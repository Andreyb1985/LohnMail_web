"use client";

import type { ReactNode } from "react";
import { SOFTWARE_DOWNLOADS, trackDownloadClick, type DownloadPlatform } from "@/lib/download-tracking";

export default function SoftwareDownloadLink({ platform, disabled = false, children }: {
  platform: DownloadPlatform;
  disabled?: boolean;
  children: ReactNode;
}) {
  if (disabled) {
    return <div className="download-placeholder" aria-disabled="true">{children}</div>;
  }

  return (
    <a
      className="download-placeholder download-link"
      href={SOFTWARE_DOWNLOADS[platform].href}
      target={platform === "windows" ? "_blank" : undefined}
      rel={platform === "windows" ? "noreferrer" : undefined}
      download={platform === "macos" || undefined}
      onClick={() => trackDownloadClick(platform)}
      onAuxClick={(event) => {
        if (event.button === 1) trackDownloadClick(platform);
      }}
    >
      {children}
    </a>
  );
}

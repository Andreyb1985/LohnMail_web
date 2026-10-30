# Software download analytics

The existing Google Analytics property is `G-133RNTTSW2`.

| Event | Meaning |
| --- | --- |
| `windows_store_click` | A visitor activated the Microsoft Store link after submitting the trial form. |
| `macos_download_click` | A visitor activated the direct DMG link. |

These are click events, not completed downloads, installations, or unique users.
Keyboard activation and middle-click are supported. Opening a link via the browser
context menu or visiting a copied direct URL is not counted by these handlers.
Ad blockers and analytics/consent settings can prevent collection. Custom payloads
contain only platform, channel, fixed destination and source, never form fields.
The existing Analytics loading/consent behavior is unchanged.

## Viewing results

In Google Analytics, use Realtime to check incoming events and the Events report
to compare event counts and users by the two event names. Historical report data
is not immediate. Counts begin after deployment; there is no backfill.

The Windows URL contains `cid=lohnmail_website`. In Microsoft Partner Center,
open the app's Acquisitions report and the campaign-ID charts to review Store
page views and qualifying acquisitions for that campaign. These are Microsoft's
attributed acquisitions, not proof of a completed installation on every device.

## macOS release

The published macOS 2.2.0 build 2026102203 is preserved from the October 22 release
branch, including its update manifest. The active SoftwareDownloadLink tracks
`macos_download_click`. A disabled SoftwareDownloadLink emits no event.
This event indicates intent only: a failed or interrupted transfer cannot be
reported as a completed download. The server's request logs are a separate metric.

## References

- https://developers.google.com/analytics/devguides/collection/ga4/events
- https://learn.microsoft.com/en-us/windows/apps/publish/create-a-custom-app-promotion-campaign

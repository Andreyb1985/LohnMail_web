# Software gallery captures

Captured on 2026-10-02 from the current canonical desktop web UI in
`lohnmail-pywebview-test/web`. These are browser-rendered captures of that UI,
not photographs of a packaged Windows/macOS release. The canonical source's
version label is 2.0.3; it was not relabelled to a newer release number.

## Demo state

- Isolated temporary data directory, no customer files or credentials.
- Eight synthetic employees, using reserved `example.com` addresses.
- One employee has no email address.
- Three synthetic companies; Musterfirma GmbH is active.
- Actual backend PDF validation: eight processed, one missing email, zero errors.
- Actual backend shipping dry-run: seven protected PDFs prepared, zero sent.
- Network, SMTP, Outlook, licensing, secret storage and browser opening mocked
  or blocked. Dashboard license/system indicators belong to the demo fixture.
- The resulting read-only bridge state was rendered by the existing HTML/CSS/JS.

## Assets and responsive presentation

`public/software/2026-10-02/{dashboard,pruefung,versand,unternehmen}.png`
are 1600 x 1000 captures with no native OS window frame.

`components/SoftwareShowcase.tsx` keeps all mobile crop rectangles next to
their source image. Mobile shows selected real UI fragments, not a separate
mobile application. Adjacent table fragments keep their original row order.
The full original capture is available through the gallery's full-screen viewer.

For replacements, update both the source assets and crop coordinates. Verify
every tab at narrow phone, tablet and desktop widths, including the full-screen
viewer, original-size scrolling, keyboard navigation and overflow.

## Source fingerprints (SHA-256)

- `index.html`: `9e4524d0fe05d467d1a08d227a5f9980b562279103d4efa4615468b87a2fb034`
- `styles.css`: `46a2ba467bb3e0ef30cf2ea1d1992f185e96289d411eaa9e0bd722b59dfbdaa6`
- `app.js`: `2692c65799f57412e98a8ab5a678623de49ead6a6298647be3fcadfd1e42f3a5`

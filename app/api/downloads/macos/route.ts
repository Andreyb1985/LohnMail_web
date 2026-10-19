export function GET() {
  return new Response(
    "Der macOS-Download ist vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.",
    {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "Retry-After": "86400",
      },
    },
  );
}

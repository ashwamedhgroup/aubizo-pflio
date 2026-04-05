/** Shown while a lazy route chunk loads (React Suspense). */
export function RouteFallback() {
  return (
    <div
      className="flex min-h-[40vh] flex-1 flex-col items-center justify-center gap-2 text-sm text-zinc-500"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-200 border-t-teal-600"
        aria-hidden
      />
      <span>Loading…</span>
    </div>
  )
}

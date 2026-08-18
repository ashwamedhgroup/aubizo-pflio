import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PublicFooter } from '../components/layout/PublicFooter'
import { PublicHeader } from '../components/layout/PublicHeader'

export function PublicLayout() {
  return (
    <div className="flex min-h-svh flex-col font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <PublicHeader />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0" tabIndex={-1}>
        <Outlet />
      </main>
      <PublicFooter />

      {/* ── Sticky mobile bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Frosted glass backdrop */}
        <div className="border-t border-zinc-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex items-center gap-3 px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
            <a
              href="https://app.aubizo.com/login"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:scale-[0.98]"
            >
              Log in
            </a>
            <Link
              to="/demo"
              className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-b from-teal-500 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-teal-900/20 transition hover:from-teal-400 hover:to-teal-500 active:scale-[0.98]"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useMockAuth } from '../auth/MockAuthContext'
import { getSidebarNav } from './navConfig'

function linkClass({ isActive }) {
  return [
    'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-teal-100 text-teal-900' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900',
  ].join(' ')
}

export function PortalLayout() {
  const { user, logout } = useMockAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const items = getSidebarNav(user.role)
  let lastSection = null

  return (
    <div className="flex min-h-svh bg-zinc-100 font-sans text-zinc-800">
      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 w-60 border-r border-zinc-200 bg-white lg:static lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          'transition-transform',
        ].join(' ')}
      >
        <div className="flex h-14 items-center border-b border-zinc-200 px-4">
          <Link to="/app/dashboard" className="font-semibold text-zinc-900" onClick={() => setSidebarOpen(false)}>
            Aubizo portal
          </Link>
        </div>
        <nav className="space-y-1 p-3" aria-label="Portal">
          {items.map((item) => {
            const showHeading = item.section && item.section !== lastSection
            if (item.section) lastSection = item.section
            return (
              <div key={item.to}>
                {showHeading ? (
                  <p className="mb-2 mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {item.section}
                  </p>
                ) : null}
                <NavLink to={item.to} className={linkClass} end={item.to === '/app/dashboard'} onClick={() => setSidebarOpen(false)}>
                  {item.label}
                </NavLink>
              </div>
            )
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 p-3 text-xs text-zinc-500">
          <p className="truncate font-medium text-zinc-700">{user.name}</p>
          <p className="truncate capitalize">{user.role}</p>
          <button
            type="button"
            className="mt-2 text-teal-800 hover:underline"
            onClick={() => {
              logout()
              navigate('/login')
            }}
          >
            Sign out
          </button>
        </div>
      </aside>

      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <div className="flex min-h-svh flex-1 flex-col lg:pl-0">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-zinc-200 bg-white px-4">
          <button
            type="button"
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 lg:hidden"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <span className="text-sm text-zinc-500">Mock UI — no backend</span>
          <Link to="/" className="ml-auto text-sm text-teal-800 hover:underline">
            Public site
          </Link>
        </header>
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

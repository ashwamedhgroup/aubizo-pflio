import { Link } from 'react-router-dom'
import { footerNav } from '../../data/nav'

export function PublicFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 font-semibold tracking-tight text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-sm font-bold text-white">
                A
              </span>
              Aubizo
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              Structured software systems, websites, and applications — built around real workflows, delivered with
              clarity and ownership.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-zinc-400 transition hover:text-teal-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Get in touch</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <Link to="/contact" className="text-zinc-400 transition hover:text-teal-400">
                  Contact form
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-zinc-400 transition hover:text-teal-400">
                  Schedule a demo
                </Link>
              </li>
              <li>
                <a
                  href="https://app.aubizo.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition hover:text-teal-400"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800/80 pt-10 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {year} Aubizo. All rights reserved.</p>
          <p className="text-zinc-600">Built for operational clarity and independence.</p>
          <p className="text-xs text-zinc-600 sm:w-full">
            Photography via{' '}
            <a
              href="https://unsplash.com"
              className="text-zinc-500 underline decoration-zinc-700 underline-offset-2 hover:text-teal-400"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
            — replace with your brand assets when ready.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { demo as demoContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function DemoPage() {
  const d = demoContent

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative border-b border-zinc-800/80 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-20 top-0 h-[22rem] w-[22rem] rounded-full bg-teal-500/12 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-emerald-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
              backgroundSize: '28px 28px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="animate-fade-up inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-teal-300/90">
            {d.heroBadge}
          </p>
          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {d.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{d.description}</p>
          <p className="animate-fade-up mt-4 max-w-3xl text-base leading-relaxed text-zinc-500">{d.heroSubline}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <a
              href="#demo-form"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Book via form
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Enquire by email
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-teal-300/90 underline-offset-4 transition hover:text-teal-200 hover:underline"
            >
              See case studies →
            </Link>
          </div>
          <dl className="animate-fade-up mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
            {d.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50/90 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium leading-relaxed text-zinc-700">{d.responseLine}</p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7" id="demo-form">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">Schedule your session</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{d.formIntro}</p>
              <p className="mt-2 text-xs text-zinc-500">{d.formHint}</p>
              <form
                className="mt-8 space-y-4 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-lg shadow-zinc-900/[0.04] ring-1 ring-zinc-950/[0.04] sm:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                {d.fields.map((field) =>
                  field.type === 'textarea' ? (
                    <label key={field.name} className="input-label">
                      {field.label}
                      <textarea
                        name={field.name}
                        rows={field.rows ?? 4}
                        required={field.required}
                        className="input-field"
                      />
                    </label>
                  ) : (
                    <label key={field.name} className="input-label">
                      {field.label}
                      <input
                        type={field.type}
                        name={field.name}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="input-field"
                      />
                    </label>
                  ),
                )}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-b from-teal-600 to-teal-700 py-3 text-sm font-semibold text-white shadow-md transition hover:from-teal-500 hover:to-teal-600 sm:w-auto sm:px-10"
                >
                  {d.submit}
                </button>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 lg:space-y-8">
                <div className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-lg ring-1 ring-zinc-950/[0.04]">
                  <MediaImage
                    photoId={PHOTOS.demoBanner}
                    alt="Focused product conversation — calm, professional setting"
                    className="aspect-[16/10] w-full"
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    rounded="rounded-none"
                    flush
                  />
                </div>
                <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">{d.agendaTitle}</h3>
                  <ul className="mt-4 space-y-3">
                    {d.agenda.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                        <CheckIcon />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-zinc-800/20 bg-zinc-950 p-6 text-white">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400/90">{d.sidebarTitle}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{d.sidebarBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{d.trustStripTitle}</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {d.trustLogos.map((name) => (
              <li key={name} className="text-center text-sm font-semibold text-zinc-700 sm:text-base">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{d.exploreTitle}</h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">{d.exploreSubline}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.exploreLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-teal-500/30 hover:bg-white/[0.07]"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-teal-300">{item.label}</span>
                  <span className="mt-2 flex-1 text-xs text-zinc-500">{item.hint}</span>
                  <span className="mt-4 text-xs font-semibold text-teal-400/90 group-hover:underline">Open →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}

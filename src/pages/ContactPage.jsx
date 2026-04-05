import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { contact as contactContent } from '../data/siteContent'
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

export function ContactPage() {
  const c = contactContent

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
            {c.heroBadge}
          </p>
          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {c.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{c.description}</p>
          <p className="animate-fade-up mt-4 max-w-3xl text-base leading-relaxed text-zinc-500">{c.heroSubline}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Jump to form
            </a>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Request a demo instead
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-teal-300/90 underline-offset-4 transition hover:text-teal-200 hover:underline"
            >
              See case studies →
            </Link>
          </div>
          <dl className="animate-fade-up mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
            {c.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Response promise */}
      <section className="border-b border-zinc-200 bg-zinc-50/90 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium leading-relaxed text-zinc-700">{c.responseLine}</p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7" id="enquiry-form">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">{c.form.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.formIntro}</p>
              <p className="mt-2 text-xs text-zinc-500">{c.formHint}</p>
              <form
                className="mt-8 space-y-4 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-lg shadow-zinc-900/[0.04] ring-1 ring-zinc-950/[0.04] sm:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="input-label">
                  {c.form.name}
                  <input type="text" name="name" required autoComplete="name" className="input-field" />
                </label>
                <label className="input-label">
                  {c.form.email}
                  <input type="email" name="email" required autoComplete="email" className="input-field" />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="input-label">
                    {c.form.phone}
                    <input type="tel" name="phone" autoComplete="tel" className="input-field" />
                  </label>
                  <label className="input-label">
                    {c.form.company}
                    <input type="text" name="company" autoComplete="organization" className="input-field" />
                  </label>
                </div>
                <label className="input-label">
                  {c.form.message}
                  <textarea name="message" rows={5} required className="input-field" />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-b from-teal-600 to-teal-700 py-3 text-sm font-semibold text-white shadow-md transition hover:from-teal-500 hover:to-teal-600 sm:w-auto sm:px-10"
                >
                  {c.form.submit}
                </button>
              </form>

              <div className="mt-10 rounded-2xl border border-zinc-200/80 bg-white/80 p-6 ring-1 ring-zinc-950/[0.03]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">{c.afterSubmitTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {c.afterSubmit.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                      <CheckIcon />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 lg:space-y-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{c.sidebarTitle}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.company.hint}</p>
                  <dl className="mt-6 space-y-5 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {c.company.email.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-zinc-900">
                        {c.company.email.value ? (
                          <a href={`mailto:${c.company.email.value}`} className="text-teal-800 hover:underline">
                            {c.company.email.value}
                          </a>
                        ) : (
                          <span className="text-zinc-400">Add your email in site content</span>
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {c.company.phone.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-zinc-900">
                        {c.company.phone.value ? (
                          <a href={`tel:${c.company.phone.value}`} className="text-teal-800 hover:underline">
                            {c.company.phone.value}
                          </a>
                        ) : (
                          <span className="text-zinc-400">Add your phone in site content</span>
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {c.company.address.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-zinc-800">
                        {c.company.address.value ? (
                          c.company.address.value
                        ) : (
                          <span className="text-zinc-400">Add your office address in site content</span>
                        )}
                      </dd>
                    </div>
                  </dl>
                  <a
                    href={c.whatsappHref}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-teal-200/80 bg-teal-50/90 px-4 py-3 text-sm font-semibold text-teal-900 transition hover:bg-teal-100 sm:w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.whatsappLabel}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Location</h3>
                  <p className="mt-2 text-xs text-zinc-500">Embed Google Maps or OpenStreetMap here when you have coordinates.</p>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-200/80 shadow-md ring-1 ring-zinc-950/[0.04]">
                    <MediaImage
                      photoId={PHOTOS.contactOffice}
                      alt="Modern office workspace — pair with your real address and map embed"
                      className="aspect-[4/3] w-full"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      rounded="rounded-none"
                      flush
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{c.trustStripTitle}</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {c.trustLogos.map((name) => (
              <li key={name} className="text-center text-sm font-semibold text-zinc-700 sm:text-base">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explore */}
      <section className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.exploreTitle}</h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">{c.exploreSubline}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.exploreLinks.map((item) => (
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

      {/* Light close */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/90 px-8 py-10 text-center ring-1 ring-zinc-950/[0.03] sm:px-12">
          <p className="text-sm font-medium text-zinc-800">Prefer a structured walkthrough first?</p>
          <Link
            to="/demo"
            className="mt-4 inline-flex rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  )
}

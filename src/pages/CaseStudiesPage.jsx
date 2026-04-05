import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { caseStudies as cs, home as homeContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const caseMedia = [
  { photoId: PHOTOS.caseAssociation, alt: 'People collaborating in a community setting' },
  { photoId: PHOTOS.caseAgro, alt: 'Green agricultural field representing agro business' },
  { photoId: PHOTOS.caseManufacturing, alt: 'Industrial and manufacturing environment' },
  { photoId: PHOTOS.caseResearch, alt: 'Laboratory research setting' },
]

export function CaseStudiesPage() {
  const { cta } = homeContent
  const {
    title,
    description,
    heroBadge,
    heroSubline,
    stats,
    trustStripTitle,
    trustLogos,
    testimonial,
    note,
    sectorsHeading,
    sectors,
    cases,
  } = cs

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative border-b border-zinc-800/80 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-24 top-0 h-[24rem] w-[24rem] rounded-full bg-teal-500/14 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald-500/10 blur-3xl" />
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
            {heroBadge}
          </p>
          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{description}</p>
          <p className="animate-fade-up mt-4 max-w-3xl text-base leading-relaxed text-zinc-500">{heroSubline}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Discuss a similar build
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Request a demo
            </Link>
            <a
              href="#portfolio-work"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-teal-300/90 underline-offset-4 transition hover:text-teal-200 hover:underline"
            >
              View delivery stories ↓
            </a>
          </div>

          <dl className="animate-fade-up mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-b border-zinc-200 bg-zinc-50/90 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{trustStripTitle}</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustLogos.map((name) => (
              <li
                key={name}
                className="text-center text-sm font-semibold text-zinc-700 transition hover:text-teal-900 sm:text-base"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case studies — teaser cards → detail pages */}
      <section id="portfolio-work" className="scroll-mt-24 border-t border-zinc-200 bg-gradient-to-b from-zinc-100/60 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">Delivery stories</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">{note}</p>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-zinc-500">
            Open a story for challenge, approach, outcome, and scope.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {cases.map((c, i) => {
              const media = caseMedia[i] ?? caseMedia[0]
              return (
                <li key={c.id}>
                  <Link
                    to={`/case-studies/${c.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl"
                  >
                    <MediaImage
                      photoId={media.photoId}
                      alt={media.alt}
                      flush
                      rounded="rounded-none"
                      className="aspect-[5/3] w-full shrink-0"
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 45vw, 100vw"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-800">{c.tag}</p>
                      <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-900 group-hover:text-teal-900">
                        {c.name}
                      </h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">{c.excerpt}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-800 group-hover:underline">
                        View details <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-zinc-200 bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">What buyers tell us</p>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl sm:leading-snug">
            “{testimonial.quote}”
          </blockquote>
          <footer className="mt-8 text-sm text-zinc-400">
            <span className="font-semibold text-zinc-300">{testimonial.attribution}</span>
            {testimonial.context ? (
              <>
                {' '}
                · <span>{testimonial.context}</span>
              </>
            ) : null}
          </footer>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">{sectorsHeading}</h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Depth across regulated and operationally heavy environments — where clarity and structure matter as much as the
            user interface.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <li
                key={s}
                className="rounded-full border border-zinc-200/80 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-teal-200/80 hover:text-teal-900"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950 px-8 py-14 text-center shadow-2xl sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/${PHOTOS.heroSecondary}?auto=format&fit=crop&w=1600&q=50`})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/88 to-zinc-950/75" aria-hidden />
          <div className="relative">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">{cta.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">{cta.body}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
              >
                {cta.primary}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                {cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

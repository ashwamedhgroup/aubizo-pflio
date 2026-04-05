import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { home as homeContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const offeringMedia = [
  {
    photoId: PHOTOS.offeringErp,
    alt: 'Warehouse shelves representing inventory and operations management',
  },
  {
    photoId: PHOTOS.offeringWeb,
    alt: 'Developer workspace with laptop showing application development',
  },
  {
    photoId: PHOTOS.offeringCustom,
    alt: 'Code on screen representing tailored software development',
  },
  {
    photoId: PHOTOS.offeringProduct,
    alt: 'Analytics charts representing business reporting and ERP dashboards',
  },
]

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-teal-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HomePage() {
  const {
    heroBadge,
    headline,
    subtext,
    intro,
    stats,
    trustStripTitle,
    trustLogos,
    testimonial,
    offerings,
    whyClientsChooseUs,
    industriesTitle,
    industries,
    cta,
  } = homeContent

  return (
    <div className="overflow-x-hidden">
      {/* Hero — dark, corporate, high contrast */}
      <section className="relative border-b border-zinc-800/80 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald-400/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-teal-300/90">
              {heroBadge}
            </p>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">{subtext}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
              >
                {cta.primary}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                {cta.secondary}
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-teal-300/90 underline-offset-4 transition hover:text-teal-200 hover:underline"
              >
                See case studies
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up-delay lg:justify-self-end">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-transparent to-emerald-400/10 blur-2xl" aria-hidden />
            <MediaImage
              photoId={PHOTOS.heroPrimary}
              alt="Team reviewing business metrics and dashboards on a large monitor"
              className="relative aspect-[5/4] w-full max-w-lg shadow-2xl shadow-black/40 lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              rounded="rounded-2xl"
              flush
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-zinc-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">{trustStripTitle}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-tight text-zinc-400 transition hover:text-zinc-600"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + image */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">Why we’re different</p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-3xl">
              Systems shaped by people who’ve run real operations — not slideware.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">{intro}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-teal-800 hover:gap-2 hover:text-teal-900"
            >
              Our story <span aria-hidden>→</span>
            </Link>
          </div>
          <MediaImage
            photoId={PHOTOS.introSplit}
            alt="Facilitated workshop with team collaborating around a structured plan"
            className="aspect-[4/3] w-full shadow-xl ring-1 ring-zinc-200/80"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </div>
      </section>

      {/* Offerings */}
      <section className="border-y border-zinc-200 bg-zinc-100/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">What we deliver</h2>
            <p className="mt-4 text-zinc-600">
              Services for operations, digital, and custom builds — plus{' '}
              <strong className="font-semibold text-zinc-800">Aubizo</strong> as the operating system for agro businesses.
              All aligned to how you actually operate.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item, i) => {
              const media = offeringMedia[i]
              return (
                <li key={item.title}>
                  <Link
                    to={item.to}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl hover:shadow-zinc-900/5"
                  >
                    <MediaImage
                      photoId={media.photoId}
                      alt={media.alt}
                      flush
                      rounded="rounded-none"
                      className="aspect-[5/3] w-full shrink-0"
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 100vw"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-semibold leading-snug text-zinc-900">{item.title}</p>
                      {item.subtitle ? <p className="mt-2 text-sm text-zinc-600">{item.subtitle}</p> : null}
                      <span className="mt-auto pt-4 text-sm font-semibold text-teal-800 group-hover:underline">
                        Explore →
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Why choose + testimonial */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Why leaders choose Aubizo</h2>
            <p className="mt-3 text-zinc-600">Clarity, speed, and ownership — without the usual software baggage.</p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyClientsChooseUs.map((line) => (
                <li
                  key={line}
                  className="flex gap-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-zinc-700">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <aside className="sticky top-24 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white shadow-xl">
              <svg className="h-8 w-8 text-teal-500/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="mt-6 text-lg font-medium leading-relaxed text-zinc-100">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">{testimonial.attribution}</p>
                <p className="text-xs text-zinc-500">{testimonial.context}</p>
                <Link
                  to="/case-studies"
                  className="mt-4 inline-block text-sm font-semibold text-teal-400 hover:text-teal-300"
                >
                  View case studies →
                </Link>
              </footer>
            </aside>
            <div className="mt-6">
              <MediaImage
                photoId={PHOTOS.whyUs}
                alt="Focused team working together in a bright modern office"
                className="aspect-[4/3] w-full shadow-lg ring-1 ring-zinc-200/80"
                sizes="(min-width: 1024px) 320px, 100vw"
                rounded="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-zinc-200 bg-gradient-to-b from-zinc-100/80 to-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900">{industriesTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600">
            Deep experience where operations, inventory, and field teams matter.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <MediaImage
              photoId={PHOTOS.industries}
              alt="Agricultural field at sunrise, representing agro and allied industries"
              className="aspect-[21/9] w-full max-h-56 shadow-md ring-1 ring-zinc-200/60"
              sizes="(min-width: 1024px) 48rem, 100vw"
              rounded="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950 px-8 py-14 text-center shadow-2xl sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/${PHOTOS.heroSecondary}?auto=format&fit=crop&w=1600&q=50`})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/70" aria-hidden />
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

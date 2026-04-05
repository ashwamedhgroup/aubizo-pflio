import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { home as homeContent, products as productsContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const productMedia = [
  { photoId: PHOTOS.offeringProduct, alt: 'Operations dashboard and product experience' },
]

export function ProductsPage() {
  const { title, description, heroBadge, heroSubline, items } = productsContent
  const { cta } = homeContent

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
            {heroBadge}
          </p>
          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{description}</p>
          <p className="animate-fade-up mt-4 max-w-3xl text-base leading-relaxed text-zinc-500">{heroSubline}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Request a demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Enquire now
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-teal-300/90 underline-offset-4 transition hover:text-teal-200 hover:underline"
            >
              Services & custom builds →
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser cards → detail pages */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-center text-sm font-medium text-zinc-500">
          Problem → system → modules → control. Open Aubizo for the full product story.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {items.map((p, i) => {
            const media = productMedia[i] ?? productMedia[0]
            if (p.card) {
              const c = p.card
              return (
                <li key={p.id} className="sm:col-span-2">
                  <article className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-lg ring-1 ring-zinc-950/[0.04] transition duration-300 hover:border-teal-200/60 hover:shadow-xl lg:grid lg:grid-cols-2 lg:items-stretch">
                    <Link
                      to={`/products/${p.id}`}
                      className="relative block min-h-[200px] shrink-0 lg:min-h-full"
                      aria-label={`View ${p.shortName ?? p.title} product page`}
                    >
                      <MediaImage
                        photoId={media.photoId}
                        alt="Agro operations — inventory, field teams, and dealer network context"
                        flush
                        rounded="rounded-none"
                        className="h-full min-h-[200px] w-full object-cover lg:absolute lg:inset-0 lg:min-h-full"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </Link>
                    <div className="flex flex-col p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Aubizo</p>
                      <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-zinc-700">{p.excerpt}</p>
                      <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">What it is</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{c.whatItIs}</p>
                      <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">Who it’s for</h3>
                      <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
                        {c.whoFor.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Key capabilities
                      </h3>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {c.capabilities.map((line) => (
                          <li key={line} className="flex gap-2 text-sm text-zinc-700">
                            <span className="text-teal-600" aria-hidden>
                              •
                            </span>
                            {line}
                          </li>
                        ))}
                      </ul>
                      <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">Core value</h3>
                      <ul className="mt-2 space-y-1.5">
                        {c.coreValue.map((line) => (
                          <li key={line} className="text-sm font-medium text-teal-900/90">
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-6">
                        <Link
                          to={`/products/${p.id}#request-demo`}
                          className="inline-flex rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-500"
                        >
                          {c.cta}
                        </Link>
                        <Link
                          to={`/products/${p.id}`}
                          className="text-sm font-semibold text-teal-800 underline-offset-4 hover:underline"
                        >
                          Full product story →
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              )
            }
            return (
              <li key={p.id}>
                <Link
                  to={`/products/${p.id}`}
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
                    <h2 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-teal-900">
                      {p.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-800 group-hover:underline">
                      View details <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
          <li>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/80 ring-1 ring-zinc-950/[0.03]">
              <div
                className="flex aspect-[5/3] w-full shrink-0 items-center justify-center bg-zinc-100/80 text-sm font-medium text-zinc-500"
                aria-hidden
              >
                On the roadmap
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-semibold leading-snug text-zinc-700">More products coming soon</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  We’re building additional platforms around real operational needs — structured to start fast and scale
                  with your business.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex w-fit text-sm font-semibold text-teal-800 underline-offset-4 hover:underline"
                >
                  Tell us what you need →
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className="border-t border-zinc-200 bg-gradient-to-b from-zinc-100/80 to-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">Need implementation or customization?</h2>
          <p className="mt-4 text-zinc-600">
            Our team scopes rollouts, integrations, and bespoke modules — so your product investment matches how you
            actually operate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              View services
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
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

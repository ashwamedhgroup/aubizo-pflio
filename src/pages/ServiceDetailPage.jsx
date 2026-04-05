import { Link, Navigate, useParams } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { getServiceBySlug, home as homeContent, services as servicesContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const serviceMedia = [
  { photoId: PHOTOS.offeringErp, alt: 'Logistics and warehouse operations' },
  { photoId: PHOTOS.offeringWeb, alt: 'Laptop on desk showing web application work' },
  { photoId: PHOTOS.offeringCustom, alt: 'Software development and engineering workflow' },
]

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

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = getServiceBySlug(serviceSlug ?? '')
  const { cta } = homeContent

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const mediaIndex = servicesContent.items.findIndex((s) => s.id === service.id)
  const media = serviceMedia[mediaIndex] ?? serviceMedia[0]
  const others = servicesContent.items.filter((s) => s.id !== service.id)

  return (
    <div className="overflow-x-hidden">
      <section className="relative border-b border-zinc-800/80 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-teal-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
              backgroundSize: '26px 26px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav className="text-sm text-zinc-500">
            <Link to="/services" className="transition hover:text-teal-400">
              Services
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-400">{service.title}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">Capability</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{service.excerpt}</p>
          <Link
            to={service.href}
            className="mt-10 inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
          >
            {service.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <MediaImage
            photoId={media.photoId}
            alt={media.alt}
            className="aspect-[16/10] w-full shadow-xl lg:sticky lg:top-28"
            sizes="(min-width: 1024px) 36rem, 100vw"
            rounded="rounded-2xl"
          />
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">Overview</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">{service.description}</p>

            <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">What’s included</h2>
            <ul className="mt-5 space-y-4">
              {service.included.map((line) => (
                <li key={line} className="flex gap-4 text-base leading-relaxed text-zinc-700">
                  <CheckIcon />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50 p-6 ring-1 ring-zinc-950/[0.03]">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Who it’s for</h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-800">{service.whoFor}</p>
            </div>

          </div>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-100/40 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900">Other services</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {others.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-900"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950 px-8 py-12 text-center shadow-2xl sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-zinc-950/70" aria-hidden />
          <div className="relative">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">{cta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/demo"
                className="inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-teal-400"
              >
                {cta.primary}
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
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

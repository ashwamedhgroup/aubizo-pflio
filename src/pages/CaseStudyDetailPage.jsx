import { Link, Navigate, useParams } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { caseStudies as caseStudiesContent, getCaseStudyBySlug, home as homeContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const caseMedia = [
  { photoId: PHOTOS.caseAssociation, alt: 'People collaborating in a community setting' },
  { photoId: PHOTOS.caseAgro, alt: 'Green agricultural field representing agro business' },
  { photoId: PHOTOS.caseManufacturing, alt: 'Industrial and manufacturing environment' },
  { photoId: PHOTOS.caseResearch, alt: 'Laboratory research setting' },
]

function Section({ kicker, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{kicker}</h2>
      <div className="mt-4 text-base leading-relaxed text-zinc-700">{children}</div>
    </div>
  )
}

export function CaseStudyDetailPage() {
  const { caseSlug } = useParams()
  const study = getCaseStudyBySlug(caseSlug ?? '')
  const { cta } = homeContent

  if (!study) {
    return <Navigate to="/case-studies" replace />
  }

  const mediaIndex = caseStudiesContent.cases.findIndex((c) => c.id === study.id)
  const media = caseMedia[mediaIndex] ?? caseMedia[0]
  const others = caseStudiesContent.cases.filter((c) => c.id !== study.id)

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
            <Link to="/case-studies" className="transition hover:text-teal-400">
              Case studies
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-400">{study.name}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">{study.tag}</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            {study.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{study.excerpt}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Discuss a similar project
            </Link>
            <Link
              to="/services"
              className="inline-flex rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our capabilities
            </Link>
          </div>
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
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">Overview</h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">{study.overview}</p>
            </div>
            <Section kicker="Challenge">
              <p>{study.problem}</p>
            </Section>
            <Section kicker="Approach">
              <p>{study.solution}</p>
            </Section>
            <Section kicker="Outcome">
              <p>{study.outcome}</p>
            </Section>
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-6 ring-1 ring-zinc-950/[0.03]">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Scope / system built</h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-800">{study.scope}</p>
              <p className="mt-4 text-xs text-zinc-500">
                Screenshots and metrics can be added here as portfolio assets are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-100/40 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900">Other case studies</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {others.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/case-studies/${c.id}`}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-900"
                  >
                    {c.name}
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

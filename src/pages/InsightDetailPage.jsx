import { Link, Navigate, useParams } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { getInsightBySlug, home as homeContent, insights as insightsContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const categoryPhotos = {
  'Systems & Operations': PHOTOS.insightOps,
  'ERP & Software': PHOTOS.insightErp,
  'Automation & Efficiency': PHOTOS.insightAuto,
  'Websites & Digital Presence': PHOTOS.offeringWeb,
}

const categoryAlts = {
  'Systems & Operations': 'Notebook and laptop representing operational planning',
  'ERP & Software': 'Meeting focused on software and process decisions',
  'Automation & Efficiency': 'Automation and efficiency in a modern workspace',
  'Websites & Digital Presence': 'Digital presence and publishing concept',
}

export function InsightDetailPage() {
  const { insightSlug } = useParams()
  const insight = getInsightBySlug(insightSlug ?? '')
  const { cta } = homeContent
  const { articleStructure } = insightsContent

  if (!insight) {
    return <Navigate to="/insights" replace />
  }

  const photoId = categoryPhotos[insight.category] ?? PHOTOS.offeringWeb
  const alt = categoryAlts[insight.category] ?? 'Business insight'

  const sectionBodies = [insight.problem, insight.whyItHappens, insight.practicalSolution, insight.conclusion]

  const sameGroup = insightsContent.articles.find((g) => g.slug === insight.categorySlug)
  const othersInCategory = sameGroup?.items.filter((i) => i.slug !== insight.slug) ?? []
  const otherCategories = insightsContent.articles
    .filter((g) => g.slug !== insight.categorySlug)
    .flatMap((g) => g.items.map((i) => ({ ...i, category: g.category })))

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
            <Link to="/insights" className="transition hover:text-teal-400">
              Insights
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <Link to={`/insights#${insight.categorySlug}`} className="transition hover:text-teal-400">
              {insight.category}
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-400 line-clamp-1">{insight.title}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">{insight.category}</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            {insight.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{insight.teaser}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Talk this through with us
            </Link>
            <Link
              to="/demo"
              className="inline-flex rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <MediaImage
            photoId={photoId}
            alt={alt}
            className="aspect-[16/10] w-full shadow-xl lg:sticky lg:top-28"
            sizes="(min-width: 1024px) 36rem, 100vw"
            rounded="rounded-2xl"
          />
          <div className="space-y-10">
            {articleStructure.map((label, i) => (
              <div key={label}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">{label}</h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">{sectionBodies[i]}</p>
              </div>
            ))}
            <p className="pt-2 text-sm text-zinc-600">
              Want this applied to your ops?{' '}
              <Link to="/contact" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                Get in touch
              </Link>{' '}
              or{' '}
              <Link to="/case-studies" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                see how we’ve delivered
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {othersInCategory.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-100/40 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900">More in {insight.category}</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {othersInCategory.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/insights/${i.slug}`}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-900"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {otherCategories.length > 0 ? (
        <section className="border-t border-zinc-200 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900">Explore other topics</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherCategories.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/insights/${i.slug}`}
                    className="block rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-teal-200 hover:text-teal-900"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">{i.category}</span>
                    <span className="mt-2 block leading-snug">{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center">
              <Link to="/insights" className="text-sm font-semibold text-teal-800 hover:underline">
                View all insights →
              </Link>
            </p>
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

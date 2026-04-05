import { Link, Navigate, useParams } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { getProductBySlug, products as productsContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

const productMedia = [
  { photoId: PHOTOS.offeringProduct, alt: 'Operations dashboard and product experience' },
]

function buildGallery(screenshotLabels) {
  return [
    { label: screenshotLabels[0], photoId: PHOTOS.productDashboard, alt: 'Business dashboard with KPIs and charts' },
    { label: screenshotLabels[1], photoId: PHOTOS.productAnalytics, alt: 'Analytics and sales flow visualization' },
    { label: screenshotLabels[2], photoId: PHOTOS.productInventory, alt: 'Warehouse and stock management context' },
    { label: screenshotLabels[3], photoId: PHOTOS.productReports, alt: 'Charts and reporting for operational decisions' },
    { label: screenshotLabels[4], photoId: PHOTOS.productMobile, alt: 'Smartphone showing mobile business application' },
  ]
}

/** @param {number} index 0..n-1 around circle from top */
function hubSatelliteStyle(index, total) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const rPct = 40
  const x = 50 + rPct * Math.cos(angle)
  const y = 50 + rPct * Math.sin(angle)
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)',
  }
}

export function ProductDetailPage() {
  const { productSlug } = useParams()
  const product = getProductBySlug(productSlug ?? '')

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const mediaIndex = productsContent.items.findIndex((p) => p.id === product.id)
  const media = productMedia[mediaIndex] ?? productMedia[0]
  const others = productsContent.items.filter((p) => p.id !== product.id)
  const gallery = buildGallery(product.screenshotLabels ?? [])
  const { demoForm } = product

  const headline = product.headline ?? product.title
  const heroSubtext = product.heroSubtext ?? product.excerpt ?? ''
  const breadcrumbLabel = product.shortName ?? product.title
  const problem = product.problemSection
  const solution = product.solutionSection
  const moduleGroups = product.moduleGroups ?? []
  const why = product.whySection
  const hubModules = product.hubModules ?? []
  const closingCta = product.closingCta

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
            <Link to="/products" className="transition hover:text-teal-400">
              Products
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-400">{breadcrumbLabel}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">
            Operating system for agro businesses
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{heroSubtext}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#request-demo"
              className="inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              {demoForm.submit}
            </a>
          </div>
        </div>
      </section>

      {problem && solution ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800/90">{problem.title}</h2>
              <ul className="mt-5 space-y-3">
                {problem.bullets.map((line) => (
                  <li key={line} className="flex gap-3 text-base text-zinc-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/80" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-zinc-500">{problem.impactTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {problem.impacts.map((line) => (
                  <li
                    key={line}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-200/60 bg-teal-50/40 p-8 lg:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">{solution.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-700">{solution.body}</p>
              <MediaImage
                photoId={media.photoId}
                alt={media.alt}
                className="mt-8 aspect-[16/10] w-full shadow-lg"
                sizes="(min-width: 1024px) 36rem, 100vw"
                rounded="rounded-xl"
              />
            </div>
          </div>
        </section>
      ) : null}

      {moduleGroups.length > 0 ? (
        <section className="border-t border-zinc-200 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Modules</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg font-medium text-zinc-900">
              Everything connected — one structured system
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {moduleGroups.map((group) => (
                <li
                  key={group.title}
                  className="rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
                >
                  <h3 className="text-sm font-semibold text-zinc-900">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-zinc-600">
                        <span className="text-teal-600" aria-hidden>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {why ? (
        <section className="border-t border-zinc-200 bg-zinc-100/50 py-14 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">{why.title}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {why.bullets.map((line) => (
                <li key={line} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-800 shadow-sm">
                  <span className="text-teal-600" aria-hidden>
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {hubModules.length > 0 ? (
        <section className="border-t border-zinc-200 bg-white py-16 lg:py-20" aria-labelledby="hub-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="hub-heading" className="text-center text-lg font-semibold text-zinc-900 sm:text-xl">
              One platform at the center of your operations
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-zinc-600">
              Aubizo ties dealers, field teams, inventory, orders, and collections into a single control layer.
            </p>
            <div className="relative mx-auto mt-12 h-[min(22rem,70vw)] w-full max-w-lg sm:h-[26rem]">
              <div
                className="pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-teal-300/60 bg-teal-500/[0.03]"
                aria-hidden
              />
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 px-8 py-5 text-center shadow-xl shadow-teal-900/20">
                  <span className="text-lg font-bold tracking-tight text-white">Aubizo</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.15em] text-teal-100/90">
                    Agro OS
                  </span>
                </div>
              </div>
              {hubModules.map((label, i) => (
                <span
                  key={label}
                  style={hubSatelliteStyle(i, hubModules.length)}
                  className="absolute z-[5] max-w-[7.5rem] rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 text-center text-[11px] font-semibold leading-tight text-zinc-800 shadow-md sm:max-w-none sm:px-3 sm:text-xs"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-zinc-200 bg-zinc-100/40 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-zinc-900">Product gallery</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            Stock imagery stands in for real product screenshots — replace with Aubizo UI when available.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((shot) => (
              <li key={shot.label}>
                <figure className="space-y-2">
                  <MediaImage
                    photoId={shot.photoId}
                    alt={shot.alt}
                    className="aspect-video w-full"
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                    rounded="rounded-xl"
                  />
                  <figcaption className="text-xs font-medium text-zinc-500">{shot.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-zinc-900">Industries served</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.industries.map((ind) => (
            <li
              key={ind}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm"
            >
              {ind}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-lg font-semibold text-zinc-900">FAQ</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {product.faq.map((item) => (
            <div key={item.q} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <dt className="font-medium text-zinc-900">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {closingCta ? (
        <section className="border-t border-zinc-200 bg-gradient-to-br from-teal-950 via-zinc-950 to-zinc-900 py-14 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{closingCta.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">{closingCta.body}</p>
            <a
              href="#request-demo"
              className="mt-8 inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-400"
            >
              {demoForm.submit}
            </a>
          </div>
        </section>
      ) : null}

      <section id="request-demo" className="border-t border-zinc-200 bg-white py-16 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-zinc-900">{demoForm.title}</h2>
            <p className="mt-3 text-sm text-zinc-600">
              Share your details and we’ll follow up to schedule a walkthrough.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <label className="input-label-tight">
                Name
                <input type="text" name="name" autoComplete="name" className="input-field" required />
              </label>
              <label className="input-label-tight">
                Company Name
                <input type="text" name="company" autoComplete="organization" className="input-field" required />
              </label>
              <label className="input-label-tight">
                Phone
                <input type="tel" name="phone" autoComplete="tel" className="input-field" required />
              </label>
              <label className="input-label-tight">
                Email
                <input type="email" name="email" autoComplete="email" className="input-field" required />
              </label>
              <label className="input-label-tight">
                Business Type
                <input type="text" name="businessType" className="input-field" />
              </label>
              <label className="input-label-tight">
                Message
                <textarea name="message" rows={3} className="input-field" />
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-teal-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
              >
                {demoForm.submit}
              </button>
            </form>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Why Aubizo</h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Structured for real workflows — from sales and stock to collections and field teams — with room to extend
              through our services when your processes need more.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
              >
                Explore services
              </Link>
              <Link to="/products" className="inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold text-teal-800 hover:underline">
                All products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-100/40 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-zinc-900">Other products</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {others.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-900"
                  >
                    {p.shortName ?? p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  )
}

import { Link } from 'react-router-dom'
import { MediaImage } from '../components/ui/MediaImage'
import { about as aboutContent, home as homeContent } from '../data/siteContent'
import { PHOTOS } from '../data/stockMedia'

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

export function AboutPage() {
  const a = aboutContent
  const { cta } = homeContent

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative border-b border-zinc-800/80 bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-24 top-0 h-[24rem] w-[24rem] rounded-full bg-teal-500/12 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[18rem] w-[18rem] rounded-full bg-emerald-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
              backgroundSize: '28px 28px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="animate-fade-up inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-teal-300/90">
            {a.heroBadge}
          </p>
          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {a.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{a.description}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Case studies
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-xl ring-1 ring-zinc-950/[0.04]">
          <div className="grid lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <img
                src="/founder.png"
                alt="Samarth Waghchoure — Founder, Aubizo"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3 lg:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">{a.leadership.heading}</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600">
                {a.leadership.paragraphs.map((p, i) => (
                  <p key={`leadership-${i}`}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-zinc-200 bg-zinc-100/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.04] transition hover:shadow-lg">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl transition group-hover:bg-teal-500/15" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">{a.mission.heading}</h2>
            <p className="relative mt-5 text-lg font-medium leading-relaxed text-zinc-800">{a.mission.text}</p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 p-8 text-white shadow-xl">
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-36 w-36 rounded-full bg-teal-400/10 blur-2xl" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">{a.vision.heading}</h2>
            <p className="relative mt-5 text-lg font-medium leading-relaxed text-zinc-200">{a.vision.text}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">{a.story.heading}</p>
            <blockquote className="mt-6 border-l-4 border-teal-500/80 pl-6 text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl">
              {a.storyPullQuote}
            </blockquote>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-zinc-600">
              {a.story.paragraphs
                .filter((p) => p !== a.storyPullQuote)
                .map((p, i) => (
                  <p key={`story-${i}`}>{p}</p>
                ))}
            </div>
          </div>
          <div className="animate-fade-up-delay">
            <MediaImage
              photoId={PHOTOS.introSplit}
              alt="Team discussion reflecting operational clarity and structured planning"
              className="aspect-[4/3] w-full shadow-xl lg:sticky lg:top-28"
              sizes="(min-width: 1024px) 28rem, 100vw"
              rounded="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why we started */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{a.whyWeStarted.heading}</h2>
          <p className="mt-6 text-xl font-medium text-teal-300/95">{a.whyWeStarted.intro}</p>
          <p className="mt-4 text-zinc-400">{a.whyWeStarted.context}</p>
          <ul className="mt-8 space-y-4 border-l-2 border-teal-500/50 pl-6">
            {a.whyWeStarted.gapPoints.map((pt) => (
              <li key={pt} className="text-lg text-zinc-200">
                {pt}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">{a.whyWeStarted.bridge}</p>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-zinc-200">{a.whyWeStarted.closing}</p>
        </div>
      </section>

      {/* What you can expect */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{a.trustPoints.heading}</h2>
          <p className="mt-4 text-zinc-600">How we show up on real projects — from discovery to handover.</p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {a.trustPoints.items.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition hover:border-teal-200/60 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                <CheckIcon />
              </span>
              <span className="text-sm font-medium leading-relaxed text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Industries */}
      <section className="border-t border-zinc-200 bg-gradient-to-b from-zinc-100/80 to-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{a.sectors.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">{a.sectors.intro}</p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {a.sectors.list.map((name) => (
              <li
                key={name}
                className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
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

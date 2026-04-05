import { MediaImage } from '../ui/MediaImage'

/** Wraps page content: max-width, padding, optional top banner, and title block. */
export function PageShell({ title, description, banner, children }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pt-12">
      {banner && (
        <div className="mb-10">
          <MediaImage
            photoId={banner.photoId}
            alt={banner.alt}
            className="aspect-[21/9] max-h-64 w-full md:max-h-72"
            sizes="(min-width: 1152px) 72rem, 100vw"
            rounded="rounded-2xl"
          />
        </div>
      )}
      {(title || description) && (
        <header className="mb-10 max-w-3xl">
          {title && (
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h1>
          )}
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{description}</p>
          )}
        </header>
      )}
      {children}
    </div>
  )
}

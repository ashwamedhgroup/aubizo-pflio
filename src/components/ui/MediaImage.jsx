import { unsplashSrc, unsplashSrcSet } from '../../data/stockMedia'

/**
 * Responsive Unsplash image with stable crop, optional priority for LCP.
 * Pass either photoId + alt, or raw src + alt.
 */
export function MediaImage({
  photoId,
  src,
  alt,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  rounded = 'rounded-2xl',
  /** Inside cards: no outer ring so borders stay clean */
  flush = false,
}) {
  const resolvedSrc = src ?? unsplashSrc(photoId, 1400)
  const resolvedSrcSet = photoId && !src ? unsplashSrcSet(photoId) : undefined
  const frame = flush ? '' : 'ring-1 ring-zinc-200/80'

  return (
    <div className={`overflow-hidden bg-zinc-100 ${frame} ${rounded} ${className}`.trim()}>
      <img
        src={resolvedSrc}
        srcSet={resolvedSrcSet}
        sizes={resolvedSrcSet ? sizes : undefined}
        alt={alt}
        width={1400}
        height={933}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        className={imgClassName}
      />
    </div>
  )
}

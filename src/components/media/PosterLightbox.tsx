import { useEffect } from 'react'

type PosterLightboxProps = {
  src: string
  alt: string
  onClose: () => void
}

export function PosterLightbox({ src, alt, onClose }: PosterLightboxProps) {
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt}>
      <button type="button" className="lightbox-close" onClick={onClose}>
        关闭
      </button>
      <img src={src} alt={alt} />
    </div>
  )
}

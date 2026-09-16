import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { posterIndex, posters } from '@/data/program'

type PosterLightboxProps = {
  startSrc: string
  onClose: () => void
}

export function PosterLightbox({ startSrc, onClose }: PosterLightboxProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef({ x: 0, y: 0 })
  const [index, setIndex] = useState(() => posterIndex(startSrc))
  const [zoomed, setZoomed] = useState(false)
  const [zoomBox, setZoomBox] = useState<{ top: number; width: number } | null>(null)
  const current = posters[index] ?? posters[0]

  function goTo(next: number) {
    const scroller = scrollerRef.current
    if (!scroller || zoomed) return
    const clamped = Math.min(Math.max(next, 0), posters.length - 1)
    scroller.scrollTo({
      left: clamped * scroller.clientWidth,
      behavior: 'instant',
    })
    setIndex(clamped)
  }

  function openZoom(event: MouseEvent<HTMLButtonElement>) {
    const moved = Math.hypot(
      event.clientX - pointerStart.current.x,
      event.clientY - pointerStart.current.y,
    )
    if (moved > 10) return
    const image = event.currentTarget.querySelector('img')
    if (!image) return
    const rect = image.getBoundingClientRect()
    setZoomBox({ top: rect.top, width: rect.width })
    setZoomed(true)
  }

  function closeZoom() {
    setZoomed(false)
    setZoomBox(null)
  }

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const scroller = scrollerRef.current
    const start = posterIndex(startSrc)
    if (scroller) {
      scroller.scrollTo({
        left: start * scroller.clientWidth,
        behavior: 'instant',
      })
    }
    setIndex(start)
    setZoomed(false)
    setZoomBox(null)
    return () => {
      document.body.style.overflow = previous
    }
  }, [startSrc])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (zoomed) {
          closeZoom()
          return
        }
        onClose()
      }
      if (zoomed) return
      if (event.key === 'ArrowRight') goTo(index + 1)
      if (event.key === 'ArrowLeft') goTo(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onClose, zoomed])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="训练海报画廊">
      <div className="lightbox-actions">
        {zoomed ? (
          <button type="button" className="lightbox-close" onClick={closeZoom}>
            缩小
          </button>
        ) : null}
        <button type="button" className="lightbox-close" onClick={onClose}>
          关闭
        </button>
      </div>
      <p className="lightbox-meta">
        {current.page} · {current.label}
        {zoomed ? ' · 放大' : ''}
      </p>

      <div
        ref={scrollerRef}
        className="carousel"
        onScroll={(event) => {
          const target = event.currentTarget
          if (target.clientWidth === 0) return
          const next = Math.round(target.scrollLeft / target.clientWidth)
          if (next !== index) setIndex(next)
        }}
      >
        {posters.map((item) => (
          <figure key={item.src} className="carousel-slide">
            <button
              type="button"
              className="carousel-zoom-btn"
              onPointerDown={(event: PointerEvent<HTMLButtonElement>) => {
                pointerStart.current = { x: event.clientX, y: event.clientY }
              }}
              onClick={openZoom}
            >
              <img src={item.src} alt={`${item.page} ${item.label}`} />
            </button>
          </figure>
        ))}
      </div>

      <div className="carousel-nav">
        <button
          type="button"
          className="carousel-arrow"
          disabled={index === 0 || zoomed}
          onClick={() => goTo(index - 1)}
        >
          上一张
        </button>
        <div className="carousel-dots" aria-hidden>
          {posters.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              className={itemIndex === index ? 'dot is-active' : 'dot'}
              disabled={zoomed}
              onClick={() => goTo(itemIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          disabled={index === posters.length - 1 || zoomed}
          onClick={() => goTo(index + 1)}
        >
          下一张
        </button>
      </div>
      <p className="lightbox-hint">点图片放大细看，左右滑动换图</p>

      {zoomed && zoomBox ? (
        <div className="zoom-layer">
          <img
            src={current.src}
            alt={`${current.page} ${current.label} 放大`}
            style={{
              width: zoomBox.width,
              marginTop: zoomBox.top,
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

import { useState } from 'react'
import { PosterLightbox } from '@/components/media/PosterLightbox'
import { liftGuide } from '@/data/program'

export function GuidePage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">抱持要领</p>
        <h1>怎么更稳更安全地举起她</h1>
        <p className="lead">{liftGuide.principle}</p>
        <p className="warn">{liftGuide.note}</p>
      </header>

      <button type="button" className="hero-poster" onClick={() => setOpen(true)}>
        <img src={liftGuide.poster} alt="抱持动作指导海报" />
      </button>

      <ol className="step-list">
        {liftGuide.steps.map((step) => (
          <li key={step.no} className="step-card">
            <span className="exercise-no">{step.no}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="note-card danger">
        <h2>不要这样</h2>
        <ul>
          {liftGuide.donts.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {open ? (
        <PosterLightbox startSrc={liftGuide.poster} onClose={() => setOpen(false)} />
      ) : null}
    </div>
  )
}

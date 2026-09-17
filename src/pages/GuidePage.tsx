import { useState } from 'react'
import { PosterLightbox } from '@/components/media/PosterLightbox'
import { liftGuides } from '@/data/program'

export function GuidePage() {
  const [openSrc, setOpenSrc] = useState<string | null>(null)

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">抱持要领</p>
        <h1>怎么更稳更安全地举起她</h1>
        <p className="lead">三种举法：公主抱、贴身紧抱、坐姿托举。先练力量，再非常保守地接触真人。</p>
        <p className="warn">第 9 周以后再保守接触真人动作。安全第一。</p>
      </header>

      {liftGuides.map((guide) => (
        <section key={guide.poster} className="guide-block">
          <h2 className="section-title">{guide.title}</h2>
          <p className="lead">{guide.principle}</p>
          <p className="warn">{guide.note}</p>
          <button type="button" className="hero-poster" onClick={() => setOpenSrc(guide.poster)}>
            <img src={guide.poster} alt={`${guide.title}动作指导海报`} />
          </button>
          <ol className="step-list">
            {guide.steps.map((step) => (
              <li key={step.no} className="step-card">
                <span className="exercise-no">{step.no}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className="note-card danger">
        <h2>不要这样</h2>
        <ul>
          {liftGuides[0].donts.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {openSrc ? <PosterLightbox startSrc={openSrc} onClose={() => setOpenSrc(null)} /> : null}
    </div>
  )
}

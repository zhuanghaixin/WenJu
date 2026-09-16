import { useState } from 'react'
import { PosterLightbox } from '@/components/media/PosterLightbox'
import { posters, targets, weekPhases, weekPlan } from '@/data/program'

export function PlanPage() {
  const [poster, setPoster] = useState<string | null>(null)

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">总览</p>
        <h1>每周 3 练怎么安排</h1>
        <p className="lead">{weekPlan.recommend}</p>
        <p className="warn">{weekPlan.warning}</p>
      </header>

      <section className="grid-3">
        {weekPlan.cards.map((card) => (
          <article key={card.id} className="mini-card">
            <p className="mini-kicker">{card.id}日</p>
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
          </article>
        ))}
      </section>

      <section className="note-card">
        <h2>4 个重点能力</h2>
        <ul>
          {weekPlan.pillars.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              {item.why}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">12 周进阶</h2>
        <div className="phase-list">
          {weekPhases.map((phase) => (
            <article key={phase.title} className="phase-card">
              <h3>{phase.title}</h3>
              <ul>
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">目标参考</h2>
        <p className="hint">海报上的数字，按自身条件缩放，不是必须达到。</p>
        <ul className="target-list">
          {targets.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">原海报</h2>
        <div className="poster-grid">
          {posters.map((item) => (
            <button
              key={item.src}
              type="button"
              className="poster-thumb"
              onClick={() => setPoster(item.src)}
            >
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {poster ? (
        <PosterLightbox src={poster} alt="训练海报" onClose={() => setPoster(null)} />
      ) : null}
    </div>
  )
}

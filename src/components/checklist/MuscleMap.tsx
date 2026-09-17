import { activeMuscleRegions, type MuscleRegion, type MuscleView } from '@/data/muscles'

type MuscleMapProps = {
  muscles: string
}

function BodyFigure({ view, marks }: { view: MuscleView; marks: MuscleRegion[] }) {
  const src = view === 'front' ? './muscles/vegeta-anatomy-front.png' : './muscles/vegeta-anatomy-back.png'

  return (
    <figure className="muscle-fig">
      <div className="muscle-fig-frame">
        <img className="muscle-body" src={src} alt={view === 'front' ? '贝吉塔正面肌群解剖' : '贝吉塔背面肌群解剖'} />
        {marks.map((region, index) => (
          <span
            key={region.id}
            className={`muscle-pin-wrap is-${region.align}`}
            style={{ left: `${region.x}%`, top: `${region.y}%`, animationDelay: `${index * 80}ms` }}
          >
            <span className="muscle-aim" aria-hidden>
              <i className="muscle-glow" />
              <i className="muscle-dot" />
            </span>
            <b>{region.label}</b>
          </span>
        ))}
      </div>
      <figcaption>{view === 'front' ? '正面' : '背面'}</figcaption>
    </figure>
  )
}

export function MuscleMap({ muscles }: MuscleMapProps) {
  const regions = activeMuscleRegions(muscles)
  const labels = regions.map((region) => region.label)

  return (
    <section className="muscle-map" aria-label={`活动肌群：${labels.join('、') || '未标注'}`}>
      <div className="muscle-map-head">
        <h3>活动肌群</h3>
        <p>红点指向这个动作主要练的部位</p>
      </div>
      <div className="muscle-figs">
        <BodyFigure view="front" marks={regions.filter((region) => region.view === 'front')} />
        <BodyFigure view="back" marks={regions.filter((region) => region.view === 'back')} />
      </div>
    </section>
  )
}

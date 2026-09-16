import { useMemo, useState } from 'react'
import { DaySwitcher } from '@/components/checklist/DaySwitcher'
import { ExerciseRow } from '@/components/checklist/ExerciseRow'
import { ExerciseSheet } from '@/components/checklist/ExerciseSheet'
import { PosterLightbox } from '@/components/media/PosterLightbox'
import { formatDateLabel, getDay, todayKey, type Exercise } from '@/data/program'
import { useChecklist } from '@/hooks/useChecklist'
import { useTrainingDay } from '@/hooks/useTrainingDay'

export function TodayPage() {
  const date = todayKey()
  const { dayId, setDayId, suggested } = useTrainingDay()
  const day = getDay(dayId)
  const exerciseIds = useMemo(() => day.exercises.map((item) => item.id), [day])
  const { checks, toggle, doneCount } = useChecklist(date, exerciseIds)
  const [openExercise, setOpenExercise] = useState<Exercise | null>(null)
  const [showPoster, setShowPoster] = useState(false)

  const restHint =
    suggested === null
      ? '今天不是建议训练日，可以休息，也可以自己选一练。'
      : suggested === dayId
        ? `今天建议练 ${dayId} 日`
        : `今天建议练 ${suggested} 日，你正在看 ${dayId} 日`

  return (
    <div className="page">
      <header className="hero">
        <button type="button" className="hero-poster" onClick={() => setShowPoster(true)}>
          <img src={day.poster} alt={`${day.id}日训练海报，点开可左右滑动看 1 到 8 图`} />
        </button>
        <p className="hint">点海报可左右滑动，看完整 8 图</p>
        <p className="eyebrow">{formatDateLabel()}</p>
        <h1>
          {day.id}日
          <span>｜{day.title}</span>
        </h1>
        <p className="lead">{day.subtitle}</p>
        <p className="hint">{restHint}</p>
        <DaySwitcher value={dayId} suggested={suggested} onChange={setDayId} />
        <p className="progress">
          今日进度 {doneCount}/{day.exercises.length}
        </p>
        <div className="progress-bar" aria-hidden>
          <span style={{ width: `${(doneCount / day.exercises.length) * 100}%` }} />
        </div>
      </header>

      <section className="card-list">
        {day.exercises.map((exercise) => (
          <ExerciseRow
            key={exercise.id}
            exercise={exercise}
            done={Boolean(checks[exercise.id])}
            onToggle={() => {
              void toggle(exercise.id)
            }}
            onOpen={() => setOpenExercise(exercise)}
          />
        ))}
      </section>

      <section className="note-card">
        <h2>这一天记住</h2>
        <ul>
          {day.generalCues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
      </section>

      {openExercise ? (
        <ExerciseSheet day={day} exercise={openExercise} onClose={() => setOpenExercise(null)} />
      ) : null}
      {showPoster ? (
        <PosterLightbox startSrc={day.poster} onClose={() => setShowPoster(false)} />
      ) : null}
    </div>
  )
}

import { useEffect, useMemo, useRef, useState } from 'react'
import { CelebrateModal } from '@/components/celebrate/CelebrateModal'
import { DaySwitcher } from '@/components/checklist/DaySwitcher'
import { ExerciseRow } from '@/components/checklist/ExerciseRow'
import { ExerciseSheet } from '@/components/checklist/ExerciseSheet'
import { RestTimerBar } from '@/components/checklist/RestTimerBar'
import { PosterLightbox } from '@/components/media/PosterLightbox'
import { days, formatDateLabel, getDay, isAllDaysComplete, weekKey, type Exercise } from '@/data/program'
import { useChecklist } from '@/hooks/useChecklist'
import { useExercisePrefs } from '@/hooks/useExercisePrefs'
import { useRestTimer } from '@/hooks/useRestTimer'
import { useTrainingDay } from '@/hooks/useTrainingDay'

export function TodayPage() {
  const weekId = weekKey()
  const { dayId, setDayId, suggested } = useTrainingDay()
  const day = getDay(dayId)
  const exerciseIds = useMemo(() => day.exercises.map((item) => item.id), [day])
  const { checks, toggle, doneCount, ready } = useChecklist(weekId, exerciseIds)
  const { getPref, updatePref } = useExercisePrefs()
  const restTimer = useRestTimer()
  const [openExercise, setOpenExercise] = useState<Exercise | null>(null)
  const [showPoster, setShowPoster] = useState(false)
  const [showCelebrate, setShowCelebrate] = useState(false)
  const [celebrateVariant, setCelebrateVariant] = useState<'day' | 'week'>('day')
  const previousDone = useRef<number | null>(null)

  useEffect(() => {
    previousDone.current = null
  }, [dayId])

  useEffect(() => {
    if (!ready) return
    const total = exerciseIds.length
    const previous = previousDone.current
    previousDone.current = doneCount
    if (previous === null) return
    if (previous < total && doneCount === total) {
      const weekDone = isAllDaysComplete(checks)
      setCelebrateVariant(weekDone ? 'week' : 'day')
      setShowCelebrate(true)
    }
  }, [doneCount, ready, exerciseIds.length, dayId, checks])

  const restHint =
    suggested === null
      ? '今天不是建议训练日，可以休息，也可以自己选一练。'
      : suggested === dayId
        ? `今天建议练 ${dayId} 日`
        : `今天建议练 ${suggested} 日，你正在看 ${dayId} 日`

  return (
    <div className={restTimer.running ? 'page has-rest-bar' : 'page'}>
      <header className="hero">
        <button type="button" className="hero-poster" onClick={() => setShowPoster(true)}>
          <img src={day.poster} alt={`${day.id}日训练海报，点开可左右滑动看 1 到 9 图`} />
        </button>
        <p className="hint">点海报可左右滑动，看完整 9 图</p>
        <p className="eyebrow">{formatDateLabel()}</p>
        <h1>
          {day.id}日
          <span>｜{day.title}</span>
        </h1>
        <p className="lead">{day.subtitle}</p>
        <p className="hint">{restHint}</p>
        <DaySwitcher value={dayId} suggested={suggested} onChange={setDayId} />
        <p className="progress">
          本周 {day.id}日 {doneCount}/{day.exercises.length}
        </p>
        <p className="week-status">
          {days.map((item) => {
            const finished = item.exercises.every((exercise) => checks[exercise.id])
            return (
              <span key={item.id} className={finished ? 'is-done' : undefined}>
                {item.id}日{finished ? '已练' : '未练'}
              </span>
            )
          })}
          <span className="week-reset">下周一只清勾选</span>
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
            pref={getPref(exercise.id)}
            done={Boolean(checks[exercise.id])}
            onToggle={() => {
              void toggle(exercise.id)
            }}
            onOpen={() => setOpenExercise(exercise)}
            onRest={() => {
              void restTimer.start(getPref(exercise.id).restSec, exercise.name)
            }}
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

      {restTimer.running ? (
        <RestTimerBar left={restTimer.left} label={restTimer.label} onStop={restTimer.stop} />
      ) : null}
      {openExercise ? (
        <ExerciseSheet
          day={day}
          exercise={openExercise}
          pref={getPref(openExercise.id)}
          onPrefChange={(pref) => updatePref(openExercise.id, pref)}
          onStartRest={(seconds) => {
            void restTimer.start(seconds, openExercise.name)
            setOpenExercise(null)
          }}
          onClose={() => setOpenExercise(null)}
        />
      ) : null}
      {showPoster ? (
        <PosterLightbox startSrc={day.poster} onClose={() => setShowPoster(false)} />
      ) : null}
      {showCelebrate ? (
        <CelebrateModal
          variant={celebrateVariant}
          dayLabel={`${day.id}日`}
          onClose={() => setShowCelebrate(false)}
        />
      ) : null}
    </div>
  )
}

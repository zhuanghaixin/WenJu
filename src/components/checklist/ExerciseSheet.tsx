import { useEffect } from 'react'
import type { Exercise, TrainingDay } from '@/data/program'

type ExerciseSheetProps = {
  day: TrainingDay
  exercise: Exercise
  onClose: () => void
}

export function ExerciseSheet({ day, exercise, onClose }: ExerciseSheetProps) {
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="sheet-root" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label="关闭要领" onClick={onClose} />
      <section className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <div className="sheet-handle" />
        <img className="sheet-poster" src={day.poster} alt={`${day.id}日示范海报`} />
        <p className="eyebrow">
          {day.id}日 · {exercise.no}
        </p>
        <h2 id="sheet-title">{exercise.name}</h2>
        <p className="sheet-dose">
          {exercise.dose} · {exercise.muscles}
        </p>
        <h3>动作要领</h3>
        <ul className="cue-list">
          {exercise.cues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
        <h3>不要这样</h3>
        <ul className="mistake-list">
          {exercise.mistakes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type="button" className="primary-btn" onClick={onClose}>
          知道了
        </button>
      </section>
    </div>
  )
}

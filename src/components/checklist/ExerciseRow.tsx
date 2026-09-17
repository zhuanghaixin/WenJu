import type { Exercise } from '@/data/program'
import { formatLoad, type ExercisePref } from '@/lib/prefs'

type ExerciseRowProps = {
  exercise: Exercise
  pref: ExercisePref
  done: boolean
  onToggle: () => void
  onOpen: () => void
  onRest: () => void
  swapped?: boolean
}

export function ExerciseRow({ exercise, pref, done, onToggle, onOpen, onRest, swapped }: ExerciseRowProps) {
  const load = formatLoad(pref)

  return (
    <div className={done ? 'exercise-row is-done' : 'exercise-row'}>
      <button
        type="button"
        className={done ? 'check-btn is-checked' : 'check-btn'}
        aria-pressed={done}
        aria-label={done ? `取消完成 ${exercise.name}` : `完成 ${exercise.name}`}
        onClick={onToggle}
      >
        <span className="sr-only">{done ? '已完成' : '未完成'}</span>
      </button>
      <button type="button" className="exercise-body" onClick={onOpen}>
        <span className="exercise-no">{exercise.no}</span>
        <span className="exercise-meta">
          <span className="exercise-name">{exercise.name}</span>
          <span className="exercise-dose">
            {exercise.dose} · {exercise.muscles}
            {load ? ` · ${load}` : ''}
          </span>
        </span>
        <span className="exercise-more">{swapped ? '已替换' : '要领'}</span>
      </button>
      <button type="button" className="rest-btn" onClick={onRest} aria-label={`${exercise.name}开始组间休息`}>
        休息
      </button>
    </div>
  )
}

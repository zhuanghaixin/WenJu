import type { Exercise } from '@/data/program'

type ExerciseRowProps = {
  exercise: Exercise
  done: boolean
  onToggle: () => void
  onOpen: () => void
}

export function ExerciseRow({ exercise, done, onToggle, onOpen }: ExerciseRowProps) {
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
          </span>
        </span>
        <span className="exercise-more">要领</span>
      </button>
    </div>
  )
}

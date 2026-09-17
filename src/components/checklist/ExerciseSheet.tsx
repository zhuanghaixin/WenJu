import { useEffect } from 'react'
import { MuscleMap } from '@/components/checklist/MuscleMap'
import type { Exercise, TrainingDay } from '@/data/program'
import { convertWeight, parseWeight, type ExercisePref, type WeightUnit } from '@/lib/prefs'

const REST_PRESETS = [60, 90, 120]

type ExerciseSheetProps = {
  day: TrainingDay
  exercise: Exercise
  pref: ExercisePref
  onPrefChange: (pref: ExercisePref) => void
  onStartRest: () => void
  onClose: () => void
}

export function ExerciseSheet({
  day,
  exercise,
  pref,
  onPrefChange,
  onStartRest,
  onClose,
}: ExerciseSheetProps) {
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

  function setUnit(unit: WeightUnit) {
    const weight =
      pref.weight === null ? null : convertWeight(pref.weight, pref.unit, unit)
    onPrefChange({ ...pref, unit, weight })
  }

  return (
    <div className="sheet-root" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label="关闭要领" onClick={onClose} />
      <section className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <div className="sheet-handle" />
        <img
          className="sheet-poster"
          src={`/exercises/${exercise.id}.png`}
          alt={`${exercise.name}动作示范`}
        />
        <p className="eyebrow">
          {day.id}日 · {exercise.no}
        </p>
        <h2 id="sheet-title">{exercise.name}</h2>
        <p className="sheet-dose">
          {exercise.dose} · {exercise.muscles}
        </p>

        <section className="load-card">
          <h3>今天用多重</h3>
          <div className="load-row">
            <label className="load-field">
              <span className="sr-only">重量</span>
              <input
                type="number"
                inputMode="decimal"
                step="0.5"
                min="0"
                placeholder="重量"
                value={pref.weight ?? ''}
                onChange={(event) => {
                  onPrefChange({
                    ...pref,
                    weight: parseWeight(event.target.value),
                  })
                }}
              />
            </label>
            <div className="segment unit-segment" role="group" aria-label="重量单位">
              {(['kg', 'lb'] as const).map((unit) => (
                <button
                  key={unit}
                  type="button"
                  className={pref.unit === unit ? 'segment-btn is-active' : 'segment-btn'}
                  onClick={() => setUnit(unit)}
                >
                  {unit === 'kg' ? '公斤' : '磅'}
                </button>
              ))}
            </div>
          </div>
          <h3>组间休息</h3>
          <div className="rest-presets">
            {REST_PRESETS.map((sec) => (
              <button
                key={sec}
                type="button"
                className={pref.restSec === sec ? 'chip is-active' : 'chip'}
                onClick={() => onPrefChange({ ...pref, restSec: sec })}
              >
                {sec}秒
              </button>
            ))}
            <label className="load-field rest-custom">
              <span className="sr-only">自定义秒数</span>
              <input
                type="number"
                inputMode="numeric"
                min="10"
                max="600"
                value={pref.restSec}
                onChange={(event) => {
                  const next = Number(event.target.value)
                  onPrefChange({ ...pref, restSec: next > 0 ? next : 90 })
                }}
              />
            </label>
          </div>
          <button type="button" className="primary-btn" onClick={onStartRest}>
            开始 {pref.restSec} 秒休息
          </button>
        </section>

        <MuscleMap muscles={exercise.muscles} />
        <h3>动作要领</h3>
        <p className="breath-cue">
          <strong>呼吸</strong>
          {exercise.breathing}
        </p>
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

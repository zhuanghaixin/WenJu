import { useEffect, useRef, useState } from 'react'
import { MuscleMap } from '@/components/checklist/MuscleMap'
import type { Exercise, TrainingDay } from '@/data/program'
import {
  convertWeight,
  normalizeRestSec,
  parseWeight,
  type ExercisePref,
  type WeightUnit,
} from '@/lib/prefs'

const REST_PRESETS = [60, 90, 120]

type ExerciseSheetProps = {
  day: TrainingDay
  exercise: Exercise
  pref: ExercisePref
  onPrefChange: (pref: ExercisePref) => void
  onStartRest: (seconds: number) => void
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
  const [weightText, setWeightText] = useState(pref.weight === null ? '' : String(pref.weight))
  const [restText, setRestText] = useState(String(pref.restSec))
  const weightFocused = useRef(false)
  const restFocused = useRef(false)
  // 输入法组合中（中文联想、候选词等）原样保存文本，避免受控组件回滚把按键吞掉
  const composingWeight = useRef(false)
  const composingRest = useRef(false)

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

  useEffect(() => {
    if (weightFocused.current) return
    setWeightText(pref.weight === null ? '' : String(pref.weight))
  }, [pref.weight, pref.unit])

  useEffect(() => {
    if (restFocused.current) return
    setRestText(String(pref.restSec))
  }, [pref.restSec])

  // 输入过程中只做清理、不做 clamp，避免打字打到一半数字被改写
  function syncWeight(raw: string) {
    if (raw === '' || raw === '.' || raw.endsWith('.')) {
      if (raw === '') onPrefChange({ ...pref, weight: null })
      return
    }
    onPrefChange({ ...pref, weight: parseWeight(raw) })
  }

  function syncRest(raw: string) {
    if (raw === '') return
    const next = Number(raw)
    if (Number.isFinite(next) && next > 0) {
      onPrefChange({ ...pref, restSec: next })
    }
  }

  function setUnit(unit: WeightUnit) {
    weightFocused.current = false
    const weight =
      pref.weight === null ? null : convertWeight(pref.weight, pref.unit, unit)
    onPrefChange({ ...pref, unit, weight })
  }

  function commitRest() {
    const next = normalizeRestSec(Number(restText))
    restFocused.current = false
    setRestText(String(next))
    if (next !== pref.restSec) onPrefChange({ ...pref, restSec: next })
  }

  return (
    <div className="sheet-root" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label="关闭要领" onClick={onClose} />
      <section className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <div className="sheet-handle" />
        <img
          className="sheet-poster"
          src={`./exercises/${exercise.id}.png`}
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
                type="text"
                inputMode="decimal"
                enterKeyHint="done"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="重量"
                value={weightText}
                onFocus={(event) => {
                  weightFocused.current = true
                  // 全选已有数字：直接输入即覆盖，省掉先删再输这步
                  event.currentTarget.select()
                }}
                onCompositionStart={() => {
                  composingWeight.current = true
                }}
                onCompositionEnd={(event) => {
                  composingWeight.current = false
                  const raw = event.currentTarget.value.replace(/[^\d.]/g, '')
                  setWeightText(raw)
                  syncWeight(raw)
                }}
                onChange={(event) => {
                  const value = event.currentTarget.value
                  // 组合输入期间原样同步，保证 DOM 与 state 一致，否则按键会被吞
                  if (composingWeight.current) {
                    setWeightText(value)
                    return
                  }
                  const raw = value.replace(/[^\d.]/g, '')
                  setWeightText(raw)
                  syncWeight(raw)
                }}
                onBlur={() => {
                  weightFocused.current = false
                  const raw = weightText.replace(/[^\d.]/g, '')
                  const next = parseWeight(raw)
                  setWeightText(next === null ? '' : String(next))
                  onPrefChange({ ...pref, weight: next })
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
                onClick={() => {
                  restFocused.current = false
                  setRestText(String(sec))
                  onPrefChange({ ...pref, restSec: sec })
                }}
              >
                {sec}秒
              </button>
            ))}
            <label className="load-field rest-custom">
              <span className="sr-only">自定义秒数</span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                enterKeyHint="done"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="秒"
                value={restText}
                onFocus={(event) => {
                  restFocused.current = true
                  event.currentTarget.select()
                }}
                onCompositionStart={() => {
                  composingRest.current = true
                }}
                onCompositionEnd={(event) => {
                  composingRest.current = false
                  const raw = event.currentTarget.value.replace(/\D/g, '')
                  setRestText(raw)
                  syncRest(raw)
                }}
                onChange={(event) => {
                  const value = event.currentTarget.value
                  if (composingRest.current) {
                    setRestText(value)
                    return
                  }
                  const raw = value.replace(/\D/g, '')
                  setRestText(raw)
                  syncRest(raw)
                }}
                onBlur={commitRest}
              />
            </label>
          </div>
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              const seconds = normalizeRestSec(Number(restText))
              restFocused.current = false
              setRestText(String(seconds))
              onPrefChange({ ...pref, restSec: seconds })
              onStartRest(seconds)
            }}
          >
            {/* 显示值与点击后实际生效的秒数保持一致（normalize 后可能被夹到 10~600） */}
            开始 {normalizeRestSec(Number(restText === '' ? pref.restSec : restText))} 秒休息
          </button>
          <p className="hint">重量和组间休息会记住，下周一只清空勾选。</p>
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

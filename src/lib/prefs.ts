export type WeightUnit = 'kg' | 'lb'

export type ExercisePref = {
  weight: number | null
  unit: WeightUnit
  restSec: number
}

const LS_KEY = 'wenju-exercise-prefs-v1'
const DEFAULT_REST = 90

export function defaultPref(): ExercisePref {
  return { weight: null, unit: 'kg', restSec: DEFAULT_REST }
}

function readAll(): Record<string, ExercisePref> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}') as Record<string, ExercisePref>
  } catch {
    return {}
  }
}

export function loadPref(id: string): ExercisePref {
  const saved = readAll()[id]
  if (!saved) return defaultPref()
  return {
    weight: typeof saved.weight === 'number' ? saved.weight : null,
    unit: saved.unit === 'lb' ? 'lb' : 'kg',
    restSec: saved.restSec > 0 ? saved.restSec : DEFAULT_REST,
  }
}

export function savePref(id: string, pref: ExercisePref) {
  const all = readAll()
  all[id] = pref
  localStorage.setItem(LS_KEY, JSON.stringify(all))
}

export function convertWeight(value: number, from: WeightUnit, to: WeightUnit): number {
  if (from === to) return value
  const kg = from === 'kg' ? value : value / 2.20462
  const next = to === 'kg' ? kg : kg * 2.20462
  return Math.round(next * 2) / 2
}

export function formatLoad(pref: ExercisePref): string | null {
  if (pref.weight === null || Number.isNaN(pref.weight)) return null
  return `${pref.weight} ${pref.unit === 'lb' ? '磅' : '公斤'}`
}

export function parseWeight(raw: string): number | null {
  if (raw === '') return null
  const next = Number(raw)
  return Number.isFinite(next) && next >= 0 ? next : null
}

export function normalizeRestSec(seconds: number): number {
  if (!Number.isFinite(seconds) || seconds <= 0) return DEFAULT_REST
  return Math.min(600, Math.max(10, Math.round(seconds)))
}

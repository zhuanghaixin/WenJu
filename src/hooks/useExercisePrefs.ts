import { useCallback, useState } from 'react'
import {
  defaultPref,
  loadPref,
  savePref,
  type ExercisePref,
} from '@/lib/prefs'

export function useExercisePrefs() {
  const [prefs, setPrefs] = useState<Record<string, ExercisePref>>({})

  const getPref = useCallback((id: string) => prefs[id] ?? loadPref(id), [prefs])

  const updatePref = useCallback((id: string, next: ExercisePref) => {
    savePref(id, next)
    setPrefs((current) => ({ ...current, [id]: next }))
  }, [])

  return { getPref, updatePref, defaultPref }
}

import { useState } from 'react'
import { suggestedDay, type DayId } from '@/data/program'

const LS_DAY = 'wenju-selected-day'

function readSavedDay(): DayId {
  const saved = localStorage.getItem(LS_DAY)
  if (saved === 'A' || saved === 'B' || saved === 'C') return saved
  return suggestedDay() ?? 'A'
}

export function useTrainingDay() {
  const suggested = suggestedDay()
  const [dayId, setDayIdState] = useState<DayId>(readSavedDay)

  function setDayId(id: DayId) {
    setDayIdState(id)
    localStorage.setItem(LS_DAY, id)
  }

  return { dayId, setDayId, suggested }
}

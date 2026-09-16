import { useEffect, useMemo, useState } from 'react'
import { loadChecks, saveChecks, type CheckMap } from '@/lib/db'

export function useChecklist(date: string, exerciseIds: string[]) {
  const [checks, setChecks] = useState<CheckMap>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    setReady(false)
    void loadChecks(date).then((data) => {
      if (cancelled) return
      setChecks((current) =>
        Object.keys(current).length > 0 ? { ...data, ...current } : data,
      )
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [date])

  const doneCount = useMemo(
    () => exerciseIds.filter((id) => checks[id]).length,
    [checks, exerciseIds],
  )

  function toggle(id: string) {
    setChecks((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      void saveChecks(date, next)
      return next
    })
  }

  return { checks, toggle, doneCount, ready }
}

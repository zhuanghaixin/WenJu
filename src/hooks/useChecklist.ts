import { useEffect, useMemo, useState } from 'react'
import { loadChecks, saveChecks, type CheckMap } from '@/lib/db'

export function useChecklist(weekId: string, exerciseIds: string[]) {
  const [checks, setChecks] = useState<CheckMap>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    setReady(false)
    setChecks({})
    void loadChecks(weekId).then((data) => {
      if (cancelled) return
      setChecks((current) => ({ ...data, ...current }))
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [weekId])

  const doneCount = useMemo(
    () => exerciseIds.filter((id) => checks[id]).length,
    [checks, exerciseIds],
  )

  function toggle(id: string) {
    setChecks((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      void saveChecks(weekId, next)
      return next
    })
  }

  return { checks, toggle, doneCount, ready }
}

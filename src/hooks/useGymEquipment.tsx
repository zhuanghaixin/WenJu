import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import {
  defaultEquipment,
  equipmentCatalog,
  type EquipmentId,
} from '@/data/equipment'

const LS_KEY = 'wenju-equipment-v1'

function readOwned(): Record<EquipmentId, boolean> {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) ?? 'null') as
      | Partial<Record<EquipmentId, boolean>>
      | null
    if (!saved) return { ...defaultEquipment }
    return {
      ...defaultEquipment,
      ...Object.fromEntries(
        equipmentCatalog.map((item) => [item.id, saved[item.id] !== false]),
      ),
    } as Record<EquipmentId, boolean>
  } catch {
    return { ...defaultEquipment }
  }
}

type GymEquipmentContextValue = {
  flags: Record<EquipmentId, boolean>
  owned: Set<EquipmentId>
  toggle: (id: EquipmentId) => void
}

const GymEquipmentContext = createContext<GymEquipmentContextValue | null>(null)

export function GymEquipmentProvider({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<Record<EquipmentId, boolean>>(readOwned)

  const owned = useMemo(() => {
    const next = new Set<EquipmentId>()
    for (const item of equipmentCatalog) {
      if (flags[item.id]) next.add(item.id)
    }
    return next
  }, [flags])

  const toggle = useCallback((id: EquipmentId) => {
    setFlags((current) => {
      const next = { ...current, [id]: !current[id] }
      localStorage.setItem(LS_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const value = useMemo(() => ({ flags, owned, toggle }), [flags, owned, toggle])

  return <GymEquipmentContext.Provider value={value}>{children}</GymEquipmentContext.Provider>
}

export function useGymEquipment() {
  const value = useContext(GymEquipmentContext)
  if (!value) throw new Error('useGymEquipment 必须包在 GymEquipmentProvider 里')
  return value
}

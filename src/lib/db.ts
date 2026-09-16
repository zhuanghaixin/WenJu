import { weekDateKeys } from '@/data/program'

const DB_NAME = 'wenju'
const STORE = 'checks'
const LS_KEY = 'wenju-checks-v1'

export type CheckMap = Record<string, boolean>

function readLocal(): Record<string, CheckMap> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}') as Record<string, CheckMap>
  } catch {
    return {}
  }
}

function writeLocal(date: string, checks: CheckMap) {
  const all = readLocal()
  all[date] = checks
  localStorage.setItem(LS_KEY, JSON.stringify(all))
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE)
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export function peekAllChecks(): Record<string, CheckMap> {
  return readLocal()
}

export function mergeWeekChecks(live: CheckMap): CheckMap {
  const all = peekAllChecks()
  const merged: CheckMap = {}
  for (const key of weekDateKeys()) {
    Object.assign(merged, all[key] ?? {})
  }
  Object.assign(merged, live)
  return merged
}

export async function loadChecks(date: string): Promise<CheckMap> {
  const local = readLocal()[date] ?? {}
  try {
    const db = await openDb()
    const remote = await new Promise<CheckMap>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const request = tx.objectStore(STORE).get(date)
      request.onsuccess = () => resolve((request.result as CheckMap | undefined) ?? {})
      request.onerror = () => reject(request.error)
    })
    return Object.keys(remote).length > 0 ? remote : local
  } catch {
    return local
  }
}

export async function saveChecks(date: string, checks: CheckMap): Promise<void> {
  writeLocal(date, checks)
  try {
    const db = await openDb()
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      const request = tx.objectStore(STORE).put(checks, date)
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  } catch {
    // localStorage already written
  }
}

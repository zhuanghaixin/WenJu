import { weekDateKeys } from '@/data/program'

const DB_NAME = 'wenju'
const STORE = 'checks'
const DAILY_LS_KEY = 'wenju-checks-v1'
const WEEK_LS_KEY = 'wenju-checks-week-v1'

export type CheckMap = Record<string, boolean>

function readJson(key: string): Record<string, CheckMap> {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '{}') as Record<string, CheckMap>
  } catch {
    return {}
  }
}

function writeWeekLocal(weekId: string, checks: CheckMap) {
  const all = readJson(WEEK_LS_KEY)
  all[weekId] = checks
  localStorage.setItem(WEEK_LS_KEY, JSON.stringify(all))
}

function migrateFromDaily(weekId: string): CheckMap {
  const daily = readJson(DAILY_LS_KEY)
  const monday = new Date(`${weekId}T12:00:00`)
  const merged: CheckMap = {}
  for (const key of weekDateKeys(monday)) {
    Object.assign(merged, daily[key] ?? {})
  }
  return merged
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

function weekStoreKey(weekId: string) {
  return `week:${weekId}`
}

export async function loadChecks(weekId: string): Promise<CheckMap> {
  const local = readJson(WEEK_LS_KEY)[weekId] ?? {}
  let remote: CheckMap = {}
  try {
    const db = await openDb()
    remote = await new Promise<CheckMap>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const request = tx.objectStore(STORE).get(weekStoreKey(weekId))
      request.onsuccess = () => resolve((request.result as CheckMap | undefined) ?? {})
      request.onerror = () => reject(request.error)
    })
  } catch {
    remote = {}
  }

  const stored = Object.keys(local).length > 0 ? local : remote
  if (Object.keys(stored).length > 0) return stored

  const migrated = migrateFromDaily(weekId)
  if (Object.keys(migrated).length > 0) {
    writeWeekLocal(weekId, migrated)
    await saveChecks(weekId, migrated)
  }
  return migrated
}

export async function saveChecks(weekId: string, checks: CheckMap): Promise<void> {
  writeWeekLocal(weekId, checks)
  try {
    const db = await openDb()
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      const request = tx.objectStore(STORE).put(checks, weekStoreKey(weekId))
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  } catch {
    // localStorage already written
  }
}

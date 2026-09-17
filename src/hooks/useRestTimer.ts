import { useEffect, useRef, useState } from 'react'
import { normalizeRestSec } from '@/lib/prefs'
import { ensureNotifyPermission, notifyRestDone, playRestAlarm, unlockAudio } from '@/lib/beep'

export function useRestTimer() {
  const [endAt, setEndAt] = useState<number | null>(null)
  const [label, setLabel] = useState('')
  const [left, setLeft] = useState(0)
  const firedRef = useRef(false)

  useEffect(() => {
    if (!endAt) {
      setLeft(0)
      return
    }

    const finish = () => {
      if (firedRef.current) return
      firedRef.current = true
      setEndAt(null)
      playRestAlarm()
      void notifyRestDone(label)
    }

    const tick = () => {
      const remain = Math.max(0, Math.ceil((endAt - Date.now()) / 1000))
      setLeft(remain)
      if (remain <= 0) finish()
    }

    tick()
    const intervalId = window.setInterval(tick, 200)
    const timeoutId = window.setTimeout(finish, Math.max(0, endAt - Date.now()))
    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [endAt, label])

  function start(seconds: number, name: string) {
    void unlockAudio()
    void ensureNotifyPermission()
    firedRef.current = false
    setLabel(name)
    setEndAt(Date.now() + normalizeRestSec(seconds) * 1000)
  }

  function stop() {
    firedRef.current = true
    setEndAt(null)
    setLeft(0)
  }

  return { running: endAt !== null, left, label, start, stop }
}

export function formatClock(seconds: number) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

let unlocked: AudioContext | null = null

export async function unlockAudio() {
  try {
    if (!unlocked || unlocked.state === 'closed') {
      unlocked = new AudioContext()
    }
    if (unlocked.state === 'suspended') {
      await unlocked.resume()
    }
  } catch {
    unlocked = null
  }
}

export function playRestAlarm() {
  try {
    const context = unlocked && unlocked.state !== 'closed' ? unlocked : new AudioContext()
    unlocked = context
    if (context.state === 'suspended') {
      void context.resume()
    }
    const now = context.currentTime
    ;[0, 0.22, 0.44].forEach((offset, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = index === 2 ? 880 : 660
      gain.gain.setValueAtTime(0.0001, now + offset)
      gain.gain.exponentialRampToValueAtTime(0.18, now + offset + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.18)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(now + offset)
      oscillator.stop(now + offset + 0.2)
    })
  } catch {
    // ignore
  }

  if (navigator.vibrate) {
    navigator.vibrate([180, 80, 180, 80, 240])
  }
}

export async function notifyRestDone(name: string) {
  if (!('Notification' in window)) return
  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }
  if (Notification.permission !== 'granted') return
  const notification = new Notification('组间休息结束', {
    body: `${name} 可以开始下一组了`,
    silent: false,
    tag: 'wenju-rest',
  })
  window.setTimeout(() => notification.close(), 6000)
}

export async function ensureNotifyPermission() {
  if (!('Notification' in window)) return
  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }
}

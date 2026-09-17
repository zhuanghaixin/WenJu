import { formatClock } from '@/hooks/useRestTimer'

type RestTimerBarProps = {
  left: number
  label: string
  onStop: () => void
}

export function RestTimerBar({ left, label, onStop }: RestTimerBarProps) {
  return (
    <div className="rest-bar" role="status" aria-live="polite">
      <div>
        <p className="rest-bar-kicker">组间休息 · {label}</p>
        <p className="rest-bar-time">{formatClock(left)}</p>
      </div>
      <button type="button" className="ghost-btn" onClick={onStop}>
        跳过
      </button>
    </div>
  )
}

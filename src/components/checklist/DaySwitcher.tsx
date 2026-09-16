import type { DayId } from '@/data/program'

const options: DayId[] = ['A', 'B', 'C']

type DaySwitcherProps = {
  value: DayId
  suggested: DayId | null
  onChange: (id: DayId) => void
}

export function DaySwitcher({ value, suggested, onChange }: DaySwitcherProps) {
  return (
    <div className="segment" role="tablist" aria-label="选择训练日">
      {options.map((id) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={value === id}
          className={value === id ? 'segment-btn is-active' : 'segment-btn'}
          onClick={() => onChange(id)}
        >
          {id}日
          {suggested === id ? <span className="segment-hint">建议</span> : null}
        </button>
      ))}
    </div>
  )
}

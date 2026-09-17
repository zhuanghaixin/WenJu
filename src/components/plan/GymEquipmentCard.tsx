import { equipmentCatalog } from '@/data/equipment'
import type { EquipmentId } from '@/data/equipment'

type GymEquipmentCardProps = {
  flags: Record<EquipmentId, boolean>
  swapCount: number
  onToggle: (id: EquipmentId) => void
}

export function GymEquipmentCard({ flags, swapCount, onToggle }: GymEquipmentCardProps) {
  return (
    <section className="note-card" id="gym">
      <h2>我的健身房有什么</h2>
      <p className="hint">勾上本馆有的器械。没有的动作会自动换成替代，不用改训练日结构。</p>
      <ul className="gear-list">
        {equipmentCatalog.map((item) => (
          <li key={item.id}>
            <label className="gear-row">
              <input
                type="checkbox"
                checked={flags[item.id]}
                onChange={() => onToggle(item.id)}
              />
              <span>
                <strong>{item.label}</strong>
                <small>{item.hint}</small>
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="hint">
        {swapCount === 0
          ? '当前按海报原计划显示。'
          : `已按本馆器械替换 ${swapCount} 个动作。`}
      </p>
    </section>
  )
}

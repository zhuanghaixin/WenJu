export type EquipmentId =
  | 'hack-squat'
  | 'barbell'
  | 'shoulder-press'
  | 'rower'
  | 'assisted-pullup'
  | 'hip-machine'
  | 'curl-machine'
  | 'leg-extension'
  | 'reverse-pec'

export type EquipmentItem = {
  id: EquipmentId
  label: string
  hint: string
}

export const equipmentCatalog: EquipmentItem[] = [
  { id: 'hack-squat', label: '哈克深蹲', hint: '没有就换成杠铃深蹲或高脚杯深蹲' },
  { id: 'barbell', label: '杠铃', hint: '硬拉、泽奇、臀推都靠它' },
  { id: 'shoulder-press', label: '肩推机', hint: '没有就换成杠铃推举' },
  { id: 'rower', label: '划船机', hint: '没有就换成坐姿划船' },
  { id: 'assisted-pullup', label: '引体辅助机', hint: '没有就换成高位下拉' },
  { id: 'hip-machine', label: '髋内外收', hint: '没有就换成侧卧徒手' },
  { id: 'curl-machine', label: '弯举机', hint: '没有就换成哑铃弯举' },
  { id: 'leg-extension', label: '腿屈伸机', hint: '没有就换成分腿蹲' },
  { id: 'reverse-pec', label: '反向蝴蝶机', hint: '没有就换成弹力带面拉' },
]

export const defaultEquipment = Object.fromEntries(
  equipmentCatalog.map((item) => [item.id, true]),
) as Record<EquipmentId, boolean>

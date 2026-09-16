export type MuscleView = 'front' | 'back'

export type MuscleRegion = {
  id: string
  label: string
  view: MuscleView
  keywords: string[]
  x: number
  y: number
  align: 'left' | 'right'
}

export const muscleRegions: MuscleRegion[] = [
  { id: 'quads', label: '股四头', view: 'front', keywords: ['股四头', '前腿', '臀腿', '腿'], x: 36, y: 56, align: 'left' },
  { id: 'hips', label: '髋', view: 'front', keywords: ['髋'], x: 64, y: 44, align: 'right' },
  { id: 'abs', label: '核心', view: 'front', keywords: ['核心', '腹肌', '稳定性'], x: 36, y: 36, align: 'left' },
  { id: 'obliques', label: '侧链', view: 'front', keywords: ['侧链', '抗旋转'], x: 32, y: 37, align: 'left' },
  { id: 'arms', label: '手臂', view: 'front', keywords: ['手臂'], x: 24, y: 30, align: 'left' },
  { id: 'forearms', label: '握力', view: 'front', keywords: ['握力'], x: 20, y: 40, align: 'left' },
  { id: 'glutes', label: '臀', view: 'back', keywords: ['臀', '臀大肌', '臀腿'], x: 66, y: 46, align: 'right' },
  { id: 'hamstrings', label: '腘绳肌', view: 'back', keywords: ['腘绳肌'], x: 34, y: 58, align: 'left' },
  { id: 'traps', label: '斜方肌', view: 'back', keywords: ['斜方肌'], x: 66, y: 22, align: 'right' },
  { id: 'lats', label: '背阔肌', view: 'back', keywords: ['背阔肌'], x: 30, y: 33, align: 'left' },
  { id: 'upperBack', label: '上背', view: 'back', keywords: ['上背', '肩胛', '中背', '背'], x: 66, y: 29, align: 'right' },
  { id: 'lowerBack', label: '下背', view: 'back', keywords: ['下背'], x: 32, y: 40, align: 'left' },
]

export function activeMuscleRegions(muscles: string): MuscleRegion[] {
  return muscleRegions.filter((region) => region.keywords.some((keyword) => muscles.includes(keyword)))
}

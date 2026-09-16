export type DayId = 'A' | 'B' | 'C'

export type Exercise = {
  id: string
  no: string
  name: string
  dose: string
  muscles: string
  breathing: string
  cues: string[]
  mistakes: string[]
}

export type TrainingDay = {
  id: DayId
  title: string
  subtitle: string
  focus: string
  poster: string
  generalCues: string[]
  exercises: Exercise[]
}

export const days: TrainingDay[] = [
  {
    id: 'A',
    title: '腿部起身力量',
    subtitle: '更强的下肢，才能把喜欢的人稳稳举起',
    focus: '练下肢站得住，打好举起的基础',
    poster: '/posters/day-a.jpg',
    generalCues: [
      '核心收紧，背部挺直',
      '下蹲到大腿接近平行',
      '站起时用腿和臀发力，不要只用腰',
      '膝盖始终朝向脚尖，身体不要晃',
    ],
    exercises: [
      {
        id: 'a-squat',
        no: '01',
        name: '杠铃深蹲 / 史密斯深蹲',
        dose: '4 × 5',
        muscles: '股四头、臀、核心',
        breathing: '下蹲吸气，站起呼气。胸口撑住，不要整组都憋死。',
        cues: [
          '可用杠铃或史密斯机，先把动作做标准',
          '脚约与肩同宽，脚尖略外展',
          '核心收紧，胸口撑开，再往下坐',
          '膝盖与脚尖同向，蹲到大腿接近平行再站起',
        ],
        mistakes: ['膝盖内扣', '腰塌下去再硬撑', '用弹震或甩起来'],
      },
      {
        id: 'a-bulgarian',
        no: '02',
        name: '保加利亚分腿蹲',
        dose: '3 × 8 / 侧',
        muscles: '前腿股四头、臀',
        breathing: '下蹲吸气，前腿蹬起时呼气。',
        cues: [
          '后脚轻搭凳上，体重主要在前脚',
          '身体保持直立稳定，不要前扑',
          '下蹲控制节奏，前膝朝向脚尖',
          '站起时感受前侧腿发力',
        ],
        mistakes: ['后脚撑得太用力', '前膝过度往里扣', '速度太快失去平衡'],
      },
      {
        id: 'a-hip-thrust',
        no: '03',
        name: '臀推',
        dose: '3 × 8–10',
        muscles: '臀大肌、腘绳肌',
        breathing: '髋下放时吸气，推到顶呼气，顶峰停 1 秒把气呼完。',
        cues: [
          '上背靠凳，杠铃或重量压在髋上',
          '用臀部把髋推起来，顶峰收缩 1 秒',
          '核心始终收紧，不要靠腰甩',
          '下放时髋部有控制地回落',
        ],
        mistakes: ['过度挺腰', '只用脚后跟乱蹬', '顶部完全没有停顿'],
      },
      {
        id: 'a-leg-press',
        no: '04',
        name: '腿举',
        dose: '3 × 10',
        muscles: '股四头、臀',
        breathing: '踏板下放吸气，推起呼气。膝盖不要锁死再呼。',
        cues: [
          '双脚约与肩同宽，踩在踏板中部',
          '下放控制节奏，膝与脚尖同向',
          '推起时不要把膝盖锁死',
          '腰始终贴住靠背',
        ],
        mistakes: ['下放弹震', '膝盖完全伸直锁死', '腰离开靠垫'],
      },
      {
        id: 'a-plank',
        no: '05',
        name: '平板支撑',
        dose: '3 × 45–60 秒',
        muscles: '核心',
        breathing: '均匀鼻吸口呼，不要憋气。每口气都轻轻把肚子收住。',
        cues: [
          '身体一条直线，从头到脚跟',
          '核心收紧，肩在肘正上方',
          '不要塌腰，也不要故意把臀抬很高',
          '正常呼吸，不要憋气到发抖才停',
        ],
        mistakes: ['塌腰', '耸肩缩脖子', '屁股翘得太高'],
      },
      {
        id: 'a-pallof',
        no: '06',
        name: 'Pallof Press',
        dose: '3 × 12 / 侧',
        muscles: '腹肌抗旋转',
        breathing: '把手推出去时呼气，收回时吸气。身体越想转，越用呼气压住肋骨。',
        cues: [
          '侧对阻力，双手把把手推到胸前再伸直',
          '骨盆和胸口正对前方，身体不要跟着转',
          '推出去时核心更紧，再慢慢收回',
          '左右各做够次数',
        ],
        mistakes: ['用手臂硬推、腰跟着转', '站得太松', '速度太快没有对抗'],
      },
    ],
  },
  {
    id: 'B',
    title: '后侧链 + 抱持能力',
    subtitle: '强大的后侧链，是让你稳稳抱住喜欢的人的力量',
    focus: '练整体发力与前抱稳定',
    poster: '/posters/day-b.jpg',
    generalCues: [
      '杠铃贴近身体',
      '背部保持中立',
      '胸前抱持要稳',
      '核心全程收紧',
    ],
    exercises: [
      {
        id: 'b-deadlift',
        no: '01',
        name: '六角杠硬拉 / 传统硬拉',
        dose: '4 × 5',
        muscles: '髋、臀、背、腘绳肌',
        breathing: '拉起前先吸满气把腹压撑住，杠过膝后再呼一点；下放时再吸。',
        cues: [
          '脚站在杠内或杠下，小腿贴近杠',
          '挺胸收腹，背打直，肩在杠前方一点点',
          '用腿和髋把地面蹬开，杠始终贴近身体',
          '站直后倒回去，先屈髋再屈膝',
        ],
        mistakes: ['圆背硬拉', '杠离身体太远', '用腰甩起来'],
      },
      {
        id: 'b-zercher-squat',
        no: '02',
        name: '泽奇深蹲',
        dose: '3 × 6',
        muscles: '腿、核心、上背',
        breathing: '下蹲吸气撑住核心，站起呼气。不要憋到脸色发白。',
        cues: [
          '双臂交叉，把杠铃托在肘弯',
          '挺胸，核心收紧，再往下坐',
          '膝盖与脚尖同向，蹲到能控制的深度',
          '站起时胸口继续抬着，不要让杠往前掉',
        ],
        mistakes: ['肘掉下去、上背塌', '蹲得过浅又硬加重量', '憋气到脸色发白'],
      },
      {
        id: 'b-rdl',
        no: '03',
        name: '罗马尼亚硬拉',
        dose: '3 × 8',
        muscles: '腘绳肌、臀、下背',
        breathing: '髋后移、杠下滑时吸气，髋收回站直时呼气。',
        cues: [
          '膝微屈，固定这个角度',
          '髋往后推，杠贴着大腿下滑',
          '感受到大腿后侧被拉开，再靠髋回来',
          '背始终中立，不要故意圆背去够更低',
        ],
        mistakes: ['膝盖越蹲越弯变成深蹲', '杠离开身体', '下背过度弯曲'],
      },
      {
        id: 'b-farmer',
        no: '04',
        name: '农夫行走',
        dose: '4 × 20 米',
        muscles: '握力、核心、斜方肌',
        breathing: '起步先吸气收腹，走路时短促均匀呼吸，不要憋到脸红。',
        cues: [
          '挺胸收腹，肩膀下沉',
          '哑铃或壶铃贴着身体两侧',
          '小步走稳，脚跟先落地',
          '走直线，不要左右晃或耸肩',
        ],
        mistakes: ['身体侧倾', '用甩的方式起步', '低头含胸'],
      },
      {
        id: 'b-row',
        no: '05',
        name: '坐姿划船',
        dose: '3 × 8–12',
        muscles: '中背、肩胛',
        breathing: '拉向腹部时呼气，回放时吸气。',
        cues: [
          '坐稳，挺胸，先把肩胛往后收',
          '手肘贴近身体把把手拉向腹部',
          '感受背部发力，不要只用手臂弯',
          '回放时控制，肩不要跟着往前垮',
        ],
        mistakes: ['靠后仰甩', '耸肩', '底部完全放松塌下去'],
      },
      {
        id: 'b-zercher-hold',
        no: '06',
        name: '泽奇静态抱持',
        dose: '3 × 20–30 秒',
        muscles: '核心、上背、手臂',
        breathing: '小口均匀呼吸。每呼一口气，肋骨往回收一点，不要憋气硬撑。',
        cues: [
          '双臂交叉，把重量稳稳抱在胸前',
          '核心收紧，肋骨压下去',
          '站直，身体不要前后晃',
          '像真的抱着人一样，先求稳再求久',
        ],
        mistakes: ['重量挂在手腕上', '塌腰挺肚子', '摇来摇去硬撑时间'],
      },
    ],
  },
  {
    id: 'C',
    title: '综合稳定',
    subtitle: '更稳的我，才能把你抱得更久',
    focus: '提高控制力，抱起来更稳',
    poster: '/posters/day-c.jpg',
    generalCues: [
      '全程核心收紧',
      '动作别晃',
      '稳定比重量更重要',
      '控制身体晃动',
    ],
    exercises: [
      {
        id: 'c-goblet',
        no: '01',
        name: '高脚杯深蹲 / 前蹲',
        dose: '4 × 6–8',
        muscles: '臀腿、核心',
        breathing: '下蹲吸气，站起呼气。胸口抬着，气不要断。',
        cues: [
          '哑铃或壶铃抱在胸前，肘朝下',
          '双脚与肩同宽，核心收紧',
          '下蹲到大腿接近平行，膝与脚尖同向',
          '胸口始终抬着，不要让重量把你拉倒',
        ],
        mistakes: ['脚后跟离地', '膝盖内扣', '含胸让重量掉下去'],
      },
      {
        id: 'c-stepup',
        no: '02',
        name: '台阶踩踏',
        dose: '3 × 8 / 侧',
        muscles: '臀腿、平衡',
        breathing: '上台站起时呼气，控制下来时吸气。',
        cues: [
          '整只前脚踩上台阶，不要只有脚掌',
          '用上台那一侧的臀腿发力站起',
          '膝朝前，身体不要侧倾',
          '下来也要控制，换边做满',
        ],
        mistakes: ['后脚蹬地借力太多', '台阶太高导致晃', '膝盖往里扣'],
      },
      {
        id: 'c-lunge',
        no: '03',
        name: '行进弓步',
        dose: '3 × 10 / 侧',
        muscles: '臀腿、平衡',
        breathing: '迈步下蹲吸气，前腿蹬起时呼气。',
        cues: [
          '向前迈一步，前后膝都大约 90°',
          '后膝接近地面，但不要砸地板',
          '前腿发力站起，再换另一边',
          '躯干直立，核心收紧',
        ],
        mistakes: ['步子太小或太大', '前膝超过脚尖还往里扣', '低头往前扑'],
      },
      {
        id: 'c-pulldown',
        no: '04',
        name: '高位下拉',
        dose: '3 × 10',
        muscles: '背阔肌、手臂',
        breathing: '杆拉下来时呼气，回放时吸气。',
        cues: [
          '双手略宽于肩握住横杆',
          '挺胸，先把肩胛往下收',
          '把杆拉到锁骨 / 上胸附近',
          '感受背部发力，再有控制地放回去',
        ],
        mistakes: ['靠后仰甩杆', '拉到脖子后面', '只弯手臂、背没参与'],
      },
      {
        id: 'c-side-plank',
        no: '05',
        name: '侧桥',
        dose: '3 × 30–45 秒 / 侧',
        muscles: '核心、侧链',
        breathing: '均匀呼吸。呼气时把髋再抬稳一点，不要憋气。',
        cues: [
          '肘在肩正下方，身体一条直线',
          '把髋抬起来，不要让腰塌下去',
          '核心收紧，头到脚成一条板',
          '两边都做，哪边更弱就多注意那边',
        ],
        mistakes: ['髋往下掉', '肩往前卷', '用脖子撑着'],
      },
      {
        id: 'c-deadbug',
        no: '06',
        name: 'Dead Bug',
        dose: '3 × 10 / 侧',
        muscles: '核心、稳定性',
        breathing: '手脚伸出去时慢慢呼气，收回时吸气。腰始终贴地。',
        cues: [
          '仰卧，下背轻轻贴住地面',
          '对侧手脚同时慢慢伸出去',
          '腰不能拱起来，伸到还能控制为止',
          '收回后再换另一侧，节奏慢',
        ],
        mistakes: ['腰离开地面', '手脚甩得太快', '憋气到肩膀耸起来'],
      },
    ],
  },
]

export const weekPlan = {
  recommend: '周一 A / 周三 B / 周六 C，至少隔一天，每次 60–80 分钟',
  warning: '前 8 周不要拿真人测试。先把力量和动作练稳，才能稳稳抱住。',
  cards: [
    { id: 'A' as const, name: '下肢起身力量', desc: '深蹲为核，建立下肢基础力量' },
    { id: 'B' as const, name: '后侧链 + 抱持', desc: '硬拉强化后侧链，学习抱持发力' },
    { id: 'C' as const, name: '综合稳定', desc: '全身协调，让力量在真实情境里更稳' },
  ],
  pillars: [
    { name: '深蹲', why: '下肢力量的基石，站得稳才能举得起' },
    { name: '硬拉', why: '强化后侧链，从地面把力量拉起来' },
    { name: '泽奇深蹲 / 静态抱持', why: '模拟抱持，提升核心与抗压' },
    { name: '农夫行走', why: '走得稳、抱得久' },
  ],
}

export const weekPhases = [
  {
    title: '第 1–4 周 · 动作学习期',
    points: ['先把深蹲、臀推、硬拉做成标准动作', 'RPE 大约 6–7，能再说两句的强度', '第 4 周可略减量，巩固基础'],
  },
  {
    title: '第 5–8 周 · 力量提升期',
    points: ['深蹲、硬拉稳步加重', '泽奇深蹲和农夫走开始成型', '仍然不要拿真人做测试'],
  },
  {
    title: '第 9–11 周 · 专项强化期',
    points: ['接近目标重量', '抱持相关动作更稳', '只有动作标准才加重量'],
  },
  {
    title: '第 12 周 · 恢复与测试',
    points: ['减量恢复，再测真实水平', '测试前两天训练量大约减 30%', '不追求一次拉到极限'],
  },
]

export const targets = [
  { name: '深蹲', value: '80–100kg × 5' },
  { name: '硬拉', value: '100–120kg × 5' },
  { name: '泽奇深蹲', value: '45–55kg × 5' },
  { name: '泽奇静态抱持', value: '50–60kg × 30 秒' },
  { name: '农夫行走', value: '单手约 30kg × 20 米' },
  { name: '平板支撑', value: '60–90 秒' },
]

const liftDonts = [
  { title: '弯腰直拎', text: '弯腰硬提，很容易伤腰。' },
  { title: '身体太远', text: '人离太远，杠杆更差，也更容易晃。' },
  { title: '核心松、身体晃', text: '核心不收，身体一晃，两边都不安全。' },
  { title: '还没练就硬举', text: '没有力量基础就上真人，容易拉伤。' },
]

export const liftGuide = {
  poster: '/posters/lift-guide.jpg',
  title: '正面抱起',
  principle: '让她靠近你，用腿和臀发力，稳稳抱起，彼此更安心。',
  note: '第 9 周以后再保守接触真人动作。安全第一。',
  steps: [
    { no: '01', title: '贴近她', text: '让重心靠近你的身体。离得越近，越省力，也越稳。' },
    { no: '02', title: '半蹲准备', text: '核心收紧，背部挺直。先蹲好，再准备发力。' },
    { no: '03', title: '双臂固定', text: '一手托大腿下方，一手贴背。手臂大约 90°，把人固定住。' },
    { no: '04', title: '腿臀发力站起', text: '用腿和臀往上站，不要只用手臂硬拎。' },
    { no: '05', title: '保持 1–2 秒', text: '站稳后停一下，确认双方都稳、都舒适。' },
    { no: '06', title: '按反顺序放下', text: '先屈膝，控制往下放，让她稳稳回到地面。' },
  ],
  donts: liftDonts,
}

export const armLiftGuide = {
  poster: '/posters/lift-guide-arm.png',
  title: '背对平举',
  principle: '两个人脸朝同一边。你的手臂弯成 90°，她的背靠在你的小臂上，用腿和臀站起。',
  note: '第 9 周以后再保守接触真人动作。安全第一。这个比正面抱更费核心和平衡。',
  steps: [
    { no: '01', title: '站到同一朝向', text: '两个人脸朝同一边，像一起看窗外。你在她侧后方。' },
    { no: '02', title: '手臂弯成 90°', text: '半蹲，核心收紧。上臂贴近身体，小臂水平，给她当靠背。' },
    { no: '03', title: '背靠上小臂', text: '她仍看向前方，背部靠上你的小臂。另一只手可托住髋，肘保持约 90°。' },
    { no: '04', title: '腿臀发力站起', text: '用腿和臀往上站。她的背始终靠在你手臂上，不要转头对视。' },
    { no: '05', title: '接稳 1–2 秒', text: '她坐得比你高，一条腿可屈起。确认背靠稳、双方都舒适。' },
    { no: '06', title: '按反顺序放下', text: '先屈膝下蹲，再让她把脚落到地面。' },
  ],
  donts: liftDonts,
}

export const liftGuides = [liftGuide, armLiftGuide]

export const posters = [
  { src: '/posters/cover.jpg', label: '封面', page: '1/9' },
  { src: '/posters/overview.jpg', label: '每周安排', page: '2/9' },
  { src: '/posters/day-a.jpg', label: 'A 日', page: '3/9' },
  { src: '/posters/day-b.jpg', label: 'B 日', page: '4/9' },
  { src: '/posters/day-c.jpg', label: 'C 日', page: '5/9' },
  { src: '/posters/weeks.jpg', label: '12 周', page: '6/9' },
  { src: '/posters/lift-guide.jpg', label: '正面抱起', page: '7/9' },
  { src: '/posters/lift-guide-arm.png', label: '背对平举', page: '8/9' },
  { src: '/posters/targets.jpg', label: '目标参考', page: '9/9' },
]

export function posterIndex(src: string): number {
  const index = posters.findIndex((item) => item.src === src)
  return index >= 0 ? index : 0
}

export function getDay(id: DayId): TrainingDay {
  const found = days.find((item) => item.id === id)
  if (!found) throw new Error(`Unknown day ${id}`)
  return found
}

export function todayKey(date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function weekKey(date = new Date()): string {
  return weekDateKeys(date)[0]
}

export function weekDateKeys(date = new Date()): string[] {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const weekday = local.getDay()
  const mondayOffset = weekday === 0 ? -6 : 1 - weekday
  const monday = new Date(local)
  monday.setDate(local.getDate() + mondayOffset)
  return Array.from({ length: 7 }, (_, index) => {
    const next = new Date(monday)
    next.setDate(monday.getDate() + index)
    return todayKey(next)
  })
}

export function isAllDaysComplete(merged: Record<string, boolean>): boolean {
  return days.every((day) => day.exercises.every((item) => merged[item.id]))
}

export function formatDateLabel(date = new Date()): string {
  const week = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
  return `${date.getMonth() + 1}月${date.getDate()}日 周${week}`
}

export function suggestedDay(date = new Date()): DayId | null {
  const weekday = date.getDay()
  if (weekday === 1) return 'A'
  if (weekday === 3) return 'B'
  if (weekday === 6) return 'C'
  return null
}

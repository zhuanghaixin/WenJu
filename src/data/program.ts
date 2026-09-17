import { type EquipmentId } from '@/data/equipment'

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
  requires: EquipmentId[]
}

export type ExerciseSlot = {
  no: string
  options: Exercise[]
}

export type TrainingDay = {
  id: DayId
  title: string
  subtitle: string
  focus: string
  poster: string
  generalCues: string[]
  slots: ExerciseSlot[]
}

export const days: TrainingDay[] = [
  {
    id: 'A',
    title: '腿部起身 + 肩部力量',
    subtitle: '腿能把人举起来，肩能把重量稳住',
    focus: '练下肢站得住，肩也能把重量稳住',
    poster: './posters/day-a.jpg',
    generalCues: ['核心收紧', '背部挺直', '站起时用腿臀发力', '肩膀稳定不耸肩'],
    slots: [
      {
        no: '01',
        options: [
          {
            id: 'a-hack',
            no: '01',
            name: '哈克深蹲',
            dose: '4 × 5–8',
            muscles: '股四头、臀、核心',
            breathing: '下蹲吸气，站起呼气。胸口贴住靠垫。',
            cues: [
              '背和肩贴住滑轨靠垫，脚踩在踏板中部',
              '下蹲到大腿接近平行，膝与脚尖同向',
              '用腿和臀把更强的自己举起来',
              '站起时不要把膝盖锁死',
            ],
            mistakes: ['脚跟离地', '腰离开靠垫', '用弹震甩起来'],
            requires: ['hack-squat'],
          },
          {
            id: 'a-squat',
            no: '01',
            name: '杠铃深蹲 / 史密斯深蹲',
            dose: '4 × 5–8',
            muscles: '股四头、臀、核心',
            breathing: '下蹲吸气，站起呼气。胸口撑住，不要整组都憋死。',
            cues: [
              '本馆没有哈克，用杠铃或史密斯代替',
              '脚约与肩同宽，核心收紧再往下坐',
              '膝盖与脚尖同向，蹲到大腿接近平行',
              '站起用腿和臀，不要只用腰',
            ],
            mistakes: ['膝盖内扣', '腰塌下去再硬撑', '用弹震或甩起来'],
            requires: ['barbell'],
          },
          {
            id: 'a-goblet',
            no: '01',
            name: '高脚杯深蹲',
            dose: '4 × 6–8',
            muscles: '臀腿、核心',
            breathing: '下蹲吸气，站起呼气。',
            cues: ['哑铃或壶铃抱在胸前', '双脚与肩同宽，膝朝脚尖', '胸口始终抬着'],
            mistakes: ['脚后跟离地', '膝盖内扣', '含胸'],
            requires: [],
          },
        ],
      },
      {
        no: '02',
        options: [
          {
            id: 'a-hip-thrust',
            no: '02',
            name: '杠铃臀推',
            dose: '3 × 8–10',
            muscles: '臀大肌、腘绳肌',
            breathing: '髋下放吸气，推到顶呼气，顶峰停 1 秒。',
            cues: [
              '上背靠凳，杠铃压在髋上',
              '用臀部把髋推起来，顶峰收缩 1 秒',
              '感受臀大肌发力，不要靠腰甩',
              '下放时髋部有控制地回落',
            ],
            mistakes: ['过度挺腰', '只用脚后跟乱蹬', '顶部没有停顿'],
            requires: ['barbell'],
          },
          {
            id: 'a-glute-bridge',
            no: '02',
            name: '肩桥 / 徒手臀桥',
            dose: '3 × 10–12',
            muscles: '臀大肌、腘绳肌',
            breathing: '推起呼气，下放吸气。',
            cues: ['仰卧，脚踩实，用臀把髋推高', '顶峰停 1 秒再放下', '没有杠铃就先把发力做对'],
            mistakes: ['用腰撑', '脚滑掉', '顶部完全没停'],
            requires: [],
          },
        ],
      },
      {
        no: '03',
        options: [
          {
            id: 'a-leg-extension',
            no: '03',
            name: '坐姿腿屈伸',
            dose: '3 × 10–12',
            muscles: '股四头',
            breathing: '伸膝呼气，放下吸气。',
            cues: [
              '坐稳，背贴靠垫，脚踝勾住滚垫',
              '控制节奏把小腿伸直，不要甩',
              '顶峰停一下再慢放',
              '专注当下每一次发力',
            ],
            mistakes: ['借惯性甩起来', '屁股离开座位', '末端完全锁死弹震'],
            requires: ['leg-extension'],
          },
          {
            id: 'a-bulgarian',
            no: '03',
            name: '保加利亚分腿蹲',
            dose: '3 × 8 / 侧',
            muscles: '前腿股四头、臀',
            breathing: '下蹲吸气，前腿蹬起时呼气。',
            cues: ['没有屈伸机，用分腿蹲练前腿', '后脚轻搭凳上，体重在前脚', '前膝朝向脚尖'],
            mistakes: ['后脚撑得太用力', '前膝往里扣', '速度太快'],
            requires: [],
          },
        ],
      },
      {
        no: '04',
        options: [
          {
            id: 'a-hip-abduct',
            no: '04',
            name: '髋外展机',
            dose: '3 × 12–15',
            muscles: '髋、臀中肌',
            breathing: '打开时呼气，收回时吸气。',
            cues: [
              '坐稳，用髋把垫子向外推开',
              '稳定骨盆，感受臀中肌发力',
              '不要靠身体左右晃来借力',
              '控制收回，不要让配重砸下去',
            ],
            mistakes: ['骨盆跟着转', '用脚尖蹬垫', '速度太快'],
            requires: ['hip-machine'],
          },
          {
            id: 'a-floor-abduct',
            no: '04',
            name: '侧卧髋外展',
            dose: '3 × 12–15 / 侧',
            muscles: '髋、臀中肌',
            breathing: '抬腿呼气，放下吸气。',
            cues: ['侧卧，上侧腿外展抬起', '髋不要往前滚', '两边都做满'],
            mistakes: ['用甩的', '身体后仰借力'],
            requires: [],
          },
        ],
      },
      {
        no: '05',
        options: [
          {
            id: 'a-shoulder-press',
            no: '05',
            name: '肩推机',
            dose: '3 × 6–10',
            muscles: '肩、上背、核心',
            breathing: '推起呼气，放下吸气。',
            cues: [
              '核心收紧，不耸肩',
              '沿固定轨迹把重量稳稳推起',
              '头顶伸直但不要把腰塌成拱桥',
              '肩胛稳住，下放有控制',
            ],
            mistakes: ['耸肩缩脖子', '腰过度反弓', '用弹震甩上去'],
            requires: ['shoulder-press'],
          },
          {
            id: 'a-ohp',
            no: '05',
            name: '杠铃推举',
            dose: '3 × 6–10',
            muscles: '肩、上背、核心',
            breathing: '推起呼气，放下吸气。',
            cues: ['没有肩推机，用杠铃站姿或坐姿推举', '核心收紧，杠从锁骨推到头顶', '肘不要过度打开'],
            mistakes: ['靠腰甩', '耸肩', '杠落在脖子上'],
            requires: ['barbell'],
          },
          {
            id: 'a-pike',
            no: '05',
            name: '跪姿俯卧撑',
            dose: '3 × 8–12',
            muscles: '肩、核心',
            breathing: '推起呼气。',
            cues: ['没有推举器械，先把肩的稳定做出来', '身体一条线，不要塌腰'],
            mistakes: ['塌腰', '只动脖子'],
            requires: [],
          },
        ],
      },
      {
        no: '06',
        options: [
          {
            id: 'a-plank',
            no: '06',
            name: '平板支撑',
            dose: '3 × 45–60 秒',
            muscles: '核心',
            breathing: '均匀鼻吸口呼，不要憋气。',
            cues: [
              '身体一条直线，从头到脚跟',
              '腹侧收紧，肩在肘正上方',
              '不要塌腰，也不要故意把臀抬很高',
              '正常呼吸',
            ],
            mistakes: ['塌腰', '耸肩缩脖子', '屁股翘得太高'],
            requires: [],
          },
        ],
      },
    ],
  },
  {
    id: 'B',
    title: '后侧链 + 抱持能力',
    subtitle: '强大的后侧链，是稳稳托住喜欢的人的力量',
    focus: '练整体发力与前抱稳定',
    poster: './posters/day-b.jpg',
    generalCues: ['杠铃贴近身体', '上背稳定', '肘屈曲支撑', '核心全程收紧'],
    slots: [
      {
        no: '01',
        options: [
          {
            id: 'b-deadlift',
            no: '01',
            name: '杠铃硬拉',
            dose: '4 × 5',
            muscles: '髋、臀、背、腘绳肌',
            breathing: '拉起前先吸满气把腹压撑住，杠过膝后再呼一点。',
            cues: [
              '小腿贴近杠，挺胸收腹，背打直',
              '用腿和髋把地面蹬开，杠始终贴近身体',
              '站直到髋锁住，不要过度后仰',
              '下放先屈髋再屈膝',
            ],
            mistakes: ['圆背硬拉', '杠离身体太远', '用腰甩起来'],
            requires: ['barbell'],
          },
          {
            id: 'b-hinge',
            no: '01',
            name: '徒手髋铰链',
            dose: '4 × 8',
            muscles: '髋、臀、腘绳肌',
            breathing: '髋后移吸气，站直呼气。',
            cues: ['没有杠铃，先把髋后移做标准', '背中立，膝微屈', '感受大腿后侧被拉开再站直'],
            mistakes: ['变成深蹲', '圆背'],
            requires: [],
          },
        ],
      },
      {
        no: '02',
        options: [
          {
            id: 'b-zercher-squat',
            no: '02',
            name: '泽奇深蹲',
            dose: '3 × 6',
            muscles: '腿、核心、上背',
            breathing: '下蹲吸气撑住核心，站起呼气。',
            cues: [
              '双臂交叉，把杠铃托在肘弯',
              '挺胸，核心收紧，膝与脚尖同向',
              '前抱重量，像真的把人抱在身前',
              '站起时胸口继续抬着',
            ],
            mistakes: ['肘掉下去、上背塌', '蹲得过浅又硬加重量', '憋气到脸色发白'],
            requires: ['barbell'],
          },
          {
            id: 'b-goblet',
            no: '02',
            name: '高脚杯深蹲',
            dose: '3 × 6–8',
            muscles: '腿、核心',
            breathing: '下蹲吸气，站起呼气。',
            cues: ['没有杠铃做泽奇，用胸前抱哑铃代替前抱', '核心收紧，膝朝脚尖'],
            mistakes: ['含胸', '脚后跟离地'],
            requires: [],
          },
        ],
      },
      {
        no: '03',
        options: [
          {
            id: 'b-rdl',
            no: '03',
            name: '罗马尼亚硬拉',
            dose: '3 × 8',
            muscles: '腘绳肌、臀、下背',
            breathing: '髋后移时吸气，髋收回站直时呼气。',
            cues: [
              '膝微屈，固定这个角度',
              '髋往后推，杠贴着大腿下滑',
              '感受腘绳肌拉伸，再靠髋回来',
              '背始终中立',
            ],
            mistakes: ['膝盖越蹲越弯变成深蹲', '杠离开身体', '下背过度弯曲'],
            requires: ['barbell'],
          },
          {
            id: 'b-single-bridge',
            no: '03',
            name: '单腿臀桥',
            dose: '3 × 8 / 侧',
            muscles: '腘绳肌、臀',
            breathing: '推起呼气。',
            cues: ['没有杠铃，用单腿臀桥练后侧链', '髋推直，不要歪'],
            mistakes: ['用腰撑', '支撑脚打滑'],
            requires: [],
          },
        ],
      },
      {
        no: '04',
        options: [
          {
            id: 'b-rower',
            no: '04',
            name: '划船机',
            dose: '3 × 8–12',
            muscles: '中背、肩胛、腿',
            breathing: '拉向身体时呼气，回放时吸气。',
            cues: [
              '先蹬腿，再收髋，最后拉把手',
              '把手拉到下腹，肩胛后缩',
              '回放按相反顺序，不要只用手臂弯',
              '上背稳定，不要左右晃',
            ],
            mistakes: ['靠后仰甩', '只弯手臂', '回放砸下去'],
            requires: ['rower'],
          },
          {
            id: 'b-row',
            no: '04',
            name: '坐姿划船',
            dose: '3 × 8–12',
            muscles: '中背、肩胛',
            breathing: '拉向腹部时呼气，回放时吸气。',
            cues: ['没有划船机，用坐姿划船或哑铃划船', '先把肩胛往后收', '手肘贴近身体'],
            mistakes: ['靠后仰甩', '耸肩'],
            requires: [],
          },
        ],
      },
      {
        no: '05',
        options: [
          {
            id: 'b-curl',
            no: '05',
            name: '器械弯举',
            dose: '3 × 8–12',
            muscles: '手臂、肱二头',
            breathing: '弯起呼气，放下吸气。',
            cues: [
              '肘固定，只让前臂运动',
              '控制离心，不要甩',
              '抱人时手臂也要稳，这里练支撑',
              '肩膀不要跟着缩',
            ],
            mistakes: ['借腰甩', '肘到处飞', '底部完全放松砸下去'],
            requires: ['curl-machine'],
          },
          {
            id: 'b-db-curl',
            no: '05',
            name: '哑铃弯举',
            dose: '3 × 8–12',
            muscles: '手臂、肱二头',
            breathing: '弯起呼气。',
            cues: ['没有弯举机，用哑铃或弹力带', '肘贴身侧，不要晃'],
            mistakes: ['甩起来', '耸肩'],
            requires: [],
          },
        ],
      },
      {
        no: '06',
        options: [
          {
            id: 'b-zercher-hold',
            no: '06',
            name: '泽奇静态抱持',
            dose: '3 × 20–30 秒',
            muscles: '核心、上背、手臂',
            breathing: '小口均匀呼吸。每呼一口气，肋骨往回收一点。',
            cues: [
              '双臂交叉，把重量稳稳抱在胸前',
              '像抱住重量一样站稳，核心全程收紧',
              '站直，身体不要前后晃',
              '先求稳再求久',
            ],
            mistakes: ['重量挂在手腕上', '塌腰挺肚子', '摇来摇去硬撑时间'],
            requires: ['barbell'],
          },
          {
            id: 'b-hug-hold',
            no: '06',
            name: '哑铃 / 重物抱持',
            dose: '3 × 20–30 秒',
            muscles: '核心、上背、手臂',
            breathing: '均匀呼吸。',
            cues: ['没有杠铃，抱哑铃、沙袋或书包在胸前', '核心收紧，站直不晃'],
            mistakes: ['挂在手腕上', '塌腰'],
            requires: [],
          },
        ],
      },
    ],
  },
  {
    id: 'C',
    title: '综合稳定 + 背部',
    subtitle: '提高控制力，抱起后更稳',
    focus: '提高控制力、肩胛稳定与核心抗晃',
    poster: './posters/day-c.jpg',
    generalCues: ['全程核心收紧', '动作别晃', '单侧稳定很重要', '控制身体晃动'],
    slots: [
      {
        no: '01',
        options: [
          {
            id: 'c-hack',
            no: '01',
            name: '哈克深蹲（中等重量）',
            dose: '4 × 6–8',
            muscles: '股四头、臀、核心',
            breathing: '下蹲吸气，站起呼气。',
            cues: [
              '重量比 A 日轻，用来练控制与节奏',
              '全程贴住靠垫，不要借惯性',
              '蹲到能稳住的深度再站起',
              '稳定比再加一片更重要',
            ],
            mistakes: ['用 A 日的重量硬扛', '弹震', '腰离开靠垫'],
            requires: ['hack-squat'],
          },
          {
            id: 'c-goblet',
            no: '01',
            name: '高脚杯深蹲',
            dose: '4 × 6–8',
            muscles: '臀腿、核心',
            breathing: '下蹲吸气，站起呼气。',
            cues: ['没有哈克，用中等重量高脚杯深蹲练控制', '胸口抬着，膝朝脚尖'],
            mistakes: ['脚后跟离地', '含胸'],
            requires: [],
          },
        ],
      },
      {
        no: '02',
        options: [
          {
            id: 'c-assisted-pullup',
            no: '02',
            name: '辅助引体向上',
            dose: '3 × 6–10',
            muscles: '背阔肌、手臂',
            breathing: '拉上去呼气，下来吸气。',
            cues: [
              '膝或脚踩辅助踏板，双手握高位把手',
              '下拉肩胛，胸口向上',
              '肘朝下，不要只弯手臂',
              '下放控制，不要砸下去',
            ],
            mistakes: ['靠甩', '耸肩缩脖子', '只弯手臂、背没参与'],
            requires: ['assisted-pullup'],
          },
          {
            id: 'c-pulldown',
            no: '02',
            name: '高位下拉',
            dose: '3 × 8–12',
            muscles: '背阔肌、手臂',
            breathing: '杆拉下来时呼气，回放时吸气。',
            cues: ['没有辅助引体，用高位下拉', '挺胸，杆拉到锁骨附近', '先把肩胛往下收'],
            mistakes: ['靠后仰甩杆', '拉到脖子后面'],
            requires: [],
          },
        ],
      },
      {
        no: '03',
        options: [
          {
            id: 'c-hip-adduct',
            no: '03',
            name: '髋内收机',
            dose: '3 × 12–15',
            muscles: '髋、核心',
            breathing: '夹紧时呼气，打开时吸气。',
            cues: ['控制收腿，不借惯性', '骨盆稳住，不要左右扭', '慢放比夹紧更重要'],
            mistakes: ['用上半身晃', '配重砸回去'],
            requires: ['hip-machine'],
          },
          {
            id: 'c-floor-adduct',
            no: '03',
            name: '侧卧夹腿',
            dose: '3 × 12–15 / 侧',
            muscles: '髋、核心',
            breathing: '夹紧呼气。',
            cues: ['没有内收机，侧卧把上侧腿放下夹紧', '动作小而稳'],
            mistakes: ['乱甩', '翻胯'],
            requires: [],
          },
        ],
      },
      {
        no: '04',
        options: [
          {
            id: 'c-hip-abduct',
            no: '04',
            name: '髋外展机',
            dose: '3 × 12–15',
            muscles: '髋、臀中肌',
            breathing: '打开呼气，收回吸气。',
            cues: ['稳定骨盆，增强侧向稳定', '向外推开时不要晃上身', '两边力量尽量均匀'],
            mistakes: ['骨盆跟着转', '速度太快'],
            requires: ['hip-machine'],
          },
          {
            id: 'c-floor-abduct',
            no: '04',
            name: '侧卧髋外展',
            dose: '3 × 12–15 / 侧',
            muscles: '髋、臀中肌',
            breathing: '抬腿呼气。',
            cues: ['没有外展机，侧卧外展上侧腿', '髋不要往前滚'],
            mistakes: ['用甩的', '身体后仰'],
            requires: [],
          },
        ],
      },
      {
        no: '05',
        options: [
          {
            id: 'c-reverse-pec',
            no: '05',
            name: '反向蝴蝶机',
            dose: '3 × 10–15',
            muscles: '上背、肩胛',
            breathing: '打开呼气，合拢吸气。',
            cues: [
              '后束与上背发力',
              '手臂打开时肩胛往后夹',
              '若器械不支持，可改划船机面拉',
              '不要靠后仰甩',
            ],
            mistakes: ['耸肩', '用惯性甩开', '只动手臂'],
            requires: ['reverse-pec'],
          },
          {
            id: 'c-face-pull',
            no: '05',
            name: '面拉 / 弹力带开肩',
            dose: '3 × 12–15',
            muscles: '上背、肩胛',
            breathing: '拉开呼气。',
            cues: ['没有反向蝴蝶，用弹力带或绳索拉向脸侧', '肩胛后缩，肘略高于肩'],
            mistakes: ['耸肩', '只弯手腕'],
            requires: [],
          },
        ],
      },
      {
        no: '06',
        options: [
          {
            id: 'c-core',
            no: '06',
            name: '侧桥 / Dead Bug',
            dose: '3 组',
            muscles: '核心、侧链、稳定性',
            breathing: '侧桥均匀呼吸；Dead Bug 手脚伸出时慢慢呼气。',
            cues: [
              '这一组做两种：侧桥抗晃 + Dead Bug 控骨盆',
              '侧桥：身体一条直线，髋不塌',
              'Dead Bug：下背贴地，对侧手脚慢伸',
              '每组两边都做到能控制，不要比快',
            ],
            mistakes: ['髋往下掉', '腰离开地面', '手脚甩得太快'],
            requires: [],
          },
        ],
      },
    ],
  },
]

export function pickSlot(slot: ExerciseSlot, owned: ReadonlySet<EquipmentId>): Exercise {
  const hit = slot.options.find((item) => item.requires.every((need) => owned.has(need)))
  return hit ?? slot.options[slot.options.length - 1]
}

export function resolveDay(day: TrainingDay, owned: ReadonlySet<EquipmentId>): TrainingDay & { exercises: Exercise[] } {
  return {
    ...day,
    exercises: day.slots.map((slot) => pickSlot(slot, owned)),
  }
}

export function getDay(id: DayId): TrainingDay {
  const found = days.find((item) => item.id === id)
  if (!found) throw new Error(`Unknown day ${id}`)
  return found
}

export const weekPlan = {
  recommend: '周一 A / 周三 B / 周六 C，至少隔一天，每次 60–80 分钟。按真实健身房器械改编，先练稳，再练强。',
  warning: '前 8 周不要拿真人测试。先把力量和动作练起来，确保安全。',
  cards: [
    { id: 'A' as const, name: '腿部起身 + 肩部', desc: '更强的下肢力量，才能稳稳抱起她' },
    { id: 'B' as const, name: '后侧链 + 抱持', desc: '更强的后侧链，才能给她更多安全感' },
    { id: 'C' as const, name: '综合稳定 + 背部', desc: '更稳的核心和背部力量，让我们走得更远' },
  ],
  pillars: [
    { name: '哈克深蹲', why: '强壮下肢，轻松起身' },
    { name: '杠铃硬拉', why: '打造后侧链，提升抱持力' },
    { name: '泽奇深蹲', why: '核心更稳，抱起更安全' },
    { name: '肩推机', why: '强壮肩部，支撑更久' },
  ],
}

export const weekPhases = [
  {
    title: '第 1–4 周 · 动作学习期',
    points: ['学会哈克深蹲、臀推、硬拉、划船', 'RPE 6→7，建立基础力量', '第 4 周训练量减 10–15%'],
  },
  {
    title: '第 5–8 周 · 力量提升期',
    points: ['哈克深蹲 5×4，硬拉 5×3–4', '泽奇深蹲 4×5，肩推 4×6–8', '仍然不要拿真人测试'],
  },
  {
    title: '第 9–11 周 · 专项强化期',
    points: ['A/B/C 维持强度', '加入泽奇抱持 3–4 组 × 30 秒', '轻量模拟两种抱姿'],
  },
  {
    title: '第 12 周 · 恢复与测试',
    points: ['前两次训练减量约 30%', '第三次测试', '以稳定、干净动作为先'],
  },
]

export const targets = [
  { name: '哈克深蹲', value: '80–100kg × 5' },
  { name: '硬拉', value: '100–120kg × 5' },
  { name: '肩推', value: '40–50kg × 5' },
  { name: '泽奇静态抱持', value: '50–60kg × 30 秒' },
  { name: '农夫行走（或持重）', value: '单手约 30kg × 20 米' },
  { name: '平板支撑', value: '60–90 秒' },
]

const liftDonts = [
  { title: '弯腰硬抱', text: '弯腰硬提，很容易伤腰。' },
  { title: '身体离太远', text: '人离太远，杠杆更差，也更容易晃。' },
  { title: '核心松、身体晃', text: '核心不收，身体一晃，两边都不安全。' },
  { title: '没练熟就硬来', text: '没有力量基础就上真人，容易拉伤。' },
]

export const liftGuide = {
  poster: './posters/lift-guide.jpg',
  title: '公主抱',
  principle: '贴近身体，用腿和臀发力，稳稳托起。',
  note: '第 9 周以后再保守接触真人动作。安全第一。',
  steps: [
    { no: '01', title: '贴近她', text: '先靠近重心，让她更贴近你的身体。离得越近越省力。' },
    { no: '02', title: '半蹲准备', text: '核心收紧，背部挺直，屈膝准备发力。' },
    { no: '03', title: '双臂固定', text: '一手托大腿下方，一手托背 / 髋，贴紧身体。' },
    { no: '04', title: '腿臀发力站起', text: '用腿和臀的力量站起，不要只靠手臂。' },
    { no: '05', title: '保持 1–2 秒', text: '站稳后短暂停留，确认彼此都舒服稳定。' },
    { no: '06', title: '稳稳放下', text: '先屈膝，再按相反顺序慢放下。' },
  ],
  donts: liftDonts,
}

export const closeLiftGuide = {
  poster: './posters/lift-guide-close.jpg',
  title: '贴身紧抱',
  principle: '让她贴近你，用腿和臀发力，稳稳抱起。',
  note: '这类动作更适合在第 9 周以后保守尝试。',
  steps: [
    { no: '01', title: '贴近她', text: '让她背靠着你，尽量贴近你的身体。' },
    { no: '02', title: '半蹲准备', text: '双脚与肩同宽，屈膝下蹲，核心收紧，背部挺直。' },
    { no: '03', title: '双臂固定', text: '一手托住大腿下方，一手稳髋部 / 腰部。' },
    { no: '04', title: '腿臀发力站起', text: '双脚蹬地，臀部发力，慢慢站起。' },
    { no: '05', title: '保持 1–2 秒', text: '站稳后短暂停留，确认姿势稳定。' },
    { no: '06', title: '稳稳放下', text: '先屈膝，按相反顺序慢慢放下。' },
  ],
  donts: liftDonts,
}

export const seatedLiftGuide = {
  poster: './posters/lift-guide-seated.jpg',
  title: '坐姿托举',
  principle: '高难度动作：先练腿、核心和前臂稳定，再短暂停留。',
  note: '高难度姿势，建议充分热身、有保护，并非常保守地短暂停留尝试。',
  steps: [
    { no: '01', title: '先做空手路径', text: '先熟悉动作路线，学会发力节奏。控制节奏，屈肘托起不耸肩。' },
    { no: '02', title: '让她尽量靠近重心', text: '从身后靠近，背部贴近胸膛，重心更近更容易稳定。' },
    { no: '03', title: '双臂固定托住大腿', text: '双臂屈肘约 90°，托住她两侧大腿下方，前臂托住她，不要滑动。' },
    { no: '04', title: '腿臀发力站起', text: '用腿臀和核心发力站起，不要只靠手臂。' },
    { no: '05', title: '站稳 1 秒', text: '稳定后短暂停留，双方放松，核心收紧，不要晃。' },
    { no: '06', title: '慢慢放下', text: '按顺序，慢慢放下。按原路线全程控制。' },
  ],
  donts: liftDonts,
}

export const liftGuides = [liftGuide, closeLiftGuide, seatedLiftGuide]

export const posters = [
  { src: './posters/cover.jpg', label: '封面', page: '1/10' },
  { src: './posters/overview.jpg', label: '每周安排', page: '2/10' },
  { src: './posters/day-a.jpg', label: 'A 日', page: '3/10' },
  { src: './posters/day-b.jpg', label: 'B 日', page: '4/10' },
  { src: './posters/day-c.jpg', label: 'C 日', page: '5/10' },
  { src: './posters/weeks.jpg', label: '12 周', page: '6/10' },
  { src: './posters/lift-guide.jpg', label: '公主抱', page: '7/10' },
  { src: './posters/lift-guide-close.jpg', label: '贴身紧抱', page: '8/10' },
  { src: './posters/lift-guide-seated.jpg', label: '坐姿托举', page: '9/10' },
  { src: './posters/targets.jpg', label: '最终效果', page: '10/10' },
]

export function posterIndex(src: string): number {
  const index = posters.findIndex((item) => item.src === src)
  return index >= 0 ? index : 0
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

export function isAllDaysComplete(
  merged: Record<string, boolean>,
  owned: ReadonlySet<EquipmentId>,
): boolean {
  return days.every((day) => resolveDay(day, owned).exercises.every((item) => merged[item.id]))
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

export function countSwaps(owned: ReadonlySet<EquipmentId>): number {
  return days.reduce((sum, day) => {
    return (
      sum +
      day.slots.filter((slot) => {
        const chosen = pickSlot(slot, owned)
        return chosen.id !== slot.options[0].id
      }).length
    )
  }, 0)
}

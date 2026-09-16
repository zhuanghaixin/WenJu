# 会话日志

## 2026-09-16

- 会话的主要目的：评估设计/产品计划类 skill，并把 apple-design-skill 安装到 gym 项目
- 完成的主要任务：
  - 用 `npx skills add dickwu/apple-design-skill -a cursor -s apple-design -y` 安装到项目
  - 对比设计类与产品计划类 skill 的质量与安装量
- 关键决策和解决方案：
  - 项目级安装，不装全局
  - 设计评审用 apple-design（Apple HIG + 122 页参考）
  - 产品计划优先推荐 `to-prd` / `writing-plans` / `PLAID`，本次未安装，等用户确认
- 使用的技术栈：Skills CLI、Cursor Agent Skills、Apple HIG
- 修改了哪些文件：
  - `.agents/skills/apple-design/`（新增 skill 本体与 HIG 参考）
  - `skills-lock.json`（新增）
  - `log.md`（新增本条记录）

## 2026-09-16 产品理解确认

- 会话的主要目的：确认 Gym PWA 产品范围，是否理解图片与本地存储方案
- 完成的主要任务：
  - 复述产品：本地健身计划 Todolist + 动作要领 + 打卡
  - 明确无后端，用 IndexedDB / localStorage
  - 确认动作图片可识别并写成要领
- 关键决策和解决方案：
  - 不做服务端数据库
  - 计划/打卡/图片走 IndexedDB，轻量偏好走 localStorage
  - 技术栈（Vue / React）和动作清单等用户发图后再定
- 使用的技术栈：PWA、IndexedDB、localStorage（待选 Vue 或 React）
- 修改了哪些文件：
  - `需求.md`（写入初稿）
  - `log.md`（追加本条）

## 2026-09-16 交互收窄为 checklist

- 会话的主要目的：确认打卡交互只做勾选，不做复杂打卡系统
- 完成的主要任务：把「打卡」改写成 checklist：点一下完成，再点取消
- 关键决策和解决方案：
  - 不做日历墙、连续天数、分享、统计报表
  - 勾选状态仍本地存储
- 使用的技术栈：PWA、IndexedDB、localStorage
- 修改了哪些文件：
  - `需求.md`（核心交互改为 checklist）
  - `log.md`（追加本条）

## 2026-09-16 React PWA 实现

- 会话的主要目的：按海报和需求，用 React 实现本地健身 Checklist PWA
- 完成的主要任务：
  - 需求补全 A/B/C、抱持要领、12 周参考
  - 用 React 19 + TS + Vite + PWA 做出 今日 / 计划 / 要领
  - 每个动作带海报、要领、错误提示；勾选写入 IndexedDB + localStorage
  - 浏览器验证：勾选、刷新保留、打开要领、计划页和抱持页
- 关键决策和解决方案：
  - 不用 Vue，按用户要求用 React Hooks
  - 训练数据写死在 `program.ts`，图片放 `public/posters/`
  - 勾选同时写 IndexedDB 和 localStorage，避免只写一侧丢失
- 使用的技术栈：React 19、TypeScript、Vite、vite-plugin-pwa、React Router、IndexedDB、localStorage
- 修改了哪些文件：
  - `需求.md`（技术栈改为 React，组件名对齐）
  - `package.json` / `vite.config.ts` / `index.html` / `tsconfig.json`
  - `src/**`（页面、组件、hooks、训练数据、样式）
  - `public/posters/`、`public/icons/icon.svg`
  - `log.md`（追加本条）

## 2026-09-17 实现总结文档

- 会话的主要目的：把实现思路和用过的 skill 写进 doc
- 完成的主要任务：新增 `doc/实现总结.md`，覆盖产品收窄、数据/页面/存储思路、skill 清单、关键决策
- 关键决策和解决方案：总结放 `doc/`，不替代 `需求.md`；需求仍是产品范围，doc 是复盘
- 使用的技术栈：Markdown 文档（对应 React PWA 实现）
- 修改了哪些文件：
  - `doc/实现总结.md`（新增）
  - `log.md`（追加本条）

## 2026-09-17 提交到 GitHub

- 会话的主要目的：把稳举项目提交并推送到 GitHub
- 完成的主要任务：在 gym 目录单独初始化 git，创建私有仓库并推送
- 关键决策和解决方案：
  - 不复用家目录的 git
  - 仓库设为 private，与 CookForHer 一致
  - 不提交 node_modules
- 使用的技术栈：git、GitHub CLI
- 修改了哪些文件：
  - 新增本地 `.git`
  - `log.md`（追加本条）
- 仓库地址：https://github.com/zhuanghaixin/WenJu （private）

## 2026-09-17 海报改为 8 图轮播

- 会话的主要目的：评估并实现点海报后左右滑动 1–8 图
- 完成的主要任务：
  - 确认设计：只从海报入口进画廊，从当前图开始
  - `PosterLightbox` 改成 scroll-snap 轮播，今日/计划/要领共用
- 关键决策和解决方案：
  - 动作行仍打开要领抽屉，不进 8 图
  - 显示 `4/8 · B 日`，不用自动播放
- 使用的技术栈：React、CSS scroll-snap
- 修改了哪些文件：
  - `src/components/media/PosterLightbox.tsx`
  - `src/data/program.ts`
  - `src/pages/TodayPage.tsx` / `PlanPage.tsx` / `GuidePage.tsx`
  - `src/styles.css`、`需求.md`、`log.md`

## 2026-09-17 海报点击放大

- 会话的主要目的：轮播里单独点一张图可以放大细看
- 完成的主要任务：点当前海报进入可滚动放大层，缩小回到 8 图轮播
- 关键决策和解决方案：
  - 滑动超过 10px 不当作点击，避免和左右滑冲突
  - Escape 先退出放大，再关闭画廊
- 使用的技术栈：React、CSS overlay
- 修改了哪些文件：
  - `src/components/media/PosterLightbox.tsx`
  - `src/styles.css`、`需求.md`、`log.md`

## 2026-09-17 缩小与关闭同一行

- 会话的主要目的：放大预览里「缩小」和「关闭」排成一行
- 完成的主要任务：右上角共用一条操作栏，放大时两个按钮并排
- 关键决策和解决方案：用 `lightbox-actions` flex 行，不再上下叠两个粉按钮
- 使用的技术栈：React、CSS flex
- 修改了哪些文件：
  - `src/components/media/PosterLightbox.tsx`
  - `src/styles.css`、`log.md`

## 2026-09-17 放大时图片位置不跳

- 会话的主要目的：点击放大后图片不要往上跑，保持点之前的位置
- 完成的主要任务：放大层按点击时的 top/width 定位，只往下展开，可继续上滑看后半段
- 关键决策和解决方案：记录 getBoundingClientRect，放大图用同样宽度和顶部间距，不再顶对齐重排
- 使用的技术栈：React、CSS overlay
- 修改了哪些文件：
  - `src/components/media/PosterLightbox.tsx`
  - `src/styles.css`、`log.md`

## 2026-09-17 每动作独立示范图

- 会话的主要目的：要领抽屉里每个动作对应自己的器械示范图
- 完成的主要任务：按角色设定图生成 18 张高清动作图，并接到 A/B/C 清单
- 关键决策和解决方案：
  - 文件名与动作 id 一致，如 `a-squat.png`
  - 要领抽屉不再裁切整张日海报
- 使用的技术栈：React、静态 PNG
- 修改了哪些文件：
  - `public/exercises/*.png`（18 张）
  - `src/components/checklist/ExerciseSheet.tsx`
  - `src/styles.css`、`vite.config.ts`、`需求.md`、`log.md`

## 2026-09-17 完成庆祝弹窗

- 会话的主要目的：当天动作全部勾完时弹出悟空竖大拇指「做得好」
- 完成的主要任务：完成瞬间弹出动画卡片；刷新已完成页不重复弹
- 关键决策和解决方案：用上一次完成数对比，只有从 5/6 到 6/6 才出现
- 使用的技术栈：React、CSS animation
- 修改了哪些文件：
  - `src/components/celebrate/CelebrateModal.tsx`
  - `src/pages/TodayPage.tsx`
  - `public/effects/goku-thumbsup.png`
  - `src/styles.css`、`vite.config.ts`、`需求.md`、`log.md`

## 2026-09-17 三练完成庆祝

- 会话的主要目的：本周 A/B/C 都完成后弹出布尔玛亲吻害羞贝吉塔
- 完成的主要任务：按自然周合并打卡；第三练勾完出粉色弹窗，文案「你真是太棒了，贝吉塔」
- 关键决策和解决方案：单日完成仍是悟空；三练齐了替换成亲吻图，不叠两个弹窗
- 使用的技术栈：React、CSS animation、本周日期合并
- 修改了哪些文件：
  - `src/components/celebrate/CelebrateModal.tsx`
  - `src/pages/TodayPage.tsx`
  - `src/data/program.ts`、`src/lib/db.ts`
  - `public/effects/bulma-kiss-vegeta.png`
  - `src/styles.css`、`需求.md`、`log.md`

## 2026-09-17 是否做「我的」热力图

- 会话的主要目的：判断要不要加「我的」Tab + GitHub 式年历运动图
- 完成的主要任务：澄清本地数据并不会按周清空；建议先不加第四个 Tab
- 关键决策和解决方案：年历热力图和每周 3 练不匹配；真需求是看见本周/12 周历史，不是再开个人页
- 使用的技术栈：无新代码（产品判断）
- 修改了哪些文件：
  - `log.md`

## 2026-09-17 清单改为按周重置

- 会话的主要目的：TODOLIST 按自然周存，下周一清空
- 完成的主要任务：存储 key 从自然日改为周一；本周 A/B/C 共用一份勾选；旧的按日数据会迁进本周
- 关键决策和解决方案：不按天重开空清单；切换训练日不丢本周进度
- 使用的技术栈：React、localStorage + IndexedDB
- 修改了哪些文件：
  - `src/lib/db.ts`
  - `src/hooks/useChecklist.ts`
  - `src/data/program.ts`
  - `src/pages/TodayPage.tsx`
  - `src/styles.css`、`需求.md`、`log.md`


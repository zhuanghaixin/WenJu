import { useEffect } from 'react'

type CelebrateModalProps = {
  variant: 'day' | 'week'
  dayLabel?: string
  onClose: () => void
}

export function CelebrateModal({ variant, dayLabel, onClose }: CelebrateModalProps) {
  const isWeek = variant === 'week'

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className={`celebrate${isWeek ? ' celebrate-week' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebrate-title"
    >
      <button type="button" className="celebrate-backdrop" aria-label="关闭庆祝" onClick={onClose} />
      <div className={`celebrate-card${isWeek ? ' celebrate-card-week' : ''}`}>
        <span className="spark spark-1" />
        <span className="spark spark-2" />
        <span className="spark spark-3" />
        <span className="spark spark-4" />
        {isWeek ? (
          <>
            <img
              className="celebrate-art"
              src="./effects/bulma-kiss-vegeta.png"
              alt="布尔玛亲吻害羞的贝吉塔"
            />
            <p className="celebrate-kicker">本周 A · B · C 都完成</p>
            <h2 id="celebrate-title">你真是太棒了</h2>
            <p className="celebrate-sub">贝吉塔，这周三练我都看见了。</p>
          </>
        ) : (
          <>
            <img className="celebrate-art" src="./effects/goku-thumbsup.png" alt="孙悟空竖起大拇指" />
            <p className="celebrate-kicker">{dayLabel} 全部完成</p>
            <h2 id="celebrate-title">做得好</h2>
            <p className="celebrate-sub">比昨天的自己更强一点点。</p>
          </>
        )}
        <button type="button" className="primary-btn" onClick={onClose}>
          {isWeek ? '收下夸奖' : '继续'}
        </button>
      </div>
    </div>
  )
}

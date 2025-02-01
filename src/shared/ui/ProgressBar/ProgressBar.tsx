import cx from 'classnames'
import { FC } from 'react'
import s from './ProgressBar.module.css'

type Props = {
  className?: string
  full?: number
  part?: number
}

export const ProgressBar: FC<Props> = (props) => {
  const { className, full, part } = props
  const numFull = full || 0
  const numPart = part || 0
  const width = numFull > 0 ? (numPart / numFull) * 100 : 0

  return (
    <div className={cx(s.progressBar, className)}>
      <div className={s.inside} style={{ width: `${width}%` }} />
    </div>
  )
}

import cx from 'classnames'
import { FC } from 'react'

import s from './InfoBlock.module.css'

type Props = {
  icon: string
  value?: string
  text: string
  className?: string
  size?: 's' | 'm'
}

export const InfoBlock: FC<Props> = (props) => {
  const { icon, value, text, className, size = 'm' } = props

  return (
    <div className={cx(s.infoBlock, s[size], className)}>
      <div className={s.wrapperIcon}>
        <img src={icon} className={s.icon} alt="" />
      </div>
      <div className={s.info}>
        <p className={s.value}>{value}</p>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  )
}

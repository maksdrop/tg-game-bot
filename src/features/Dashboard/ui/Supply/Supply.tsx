import cx from 'classnames'
import { FC } from 'react'

import { bigNumberFormat } from 'shared/lib'
import { SupplyType } from '../../types/supply'

import s from './Supply.module.css'

type Props = {
  supply: SupplyType
}

export const Supply: FC<Props> = (props) => {
  const { supply } = props

  return (
    <div className={cx(s.supply, s[supply.color])}>
      <div className={s.wrapperIcon}>
        <img src={supply.icon} className={s.icon} alt="" />
      </div>
      <p>{bigNumberFormat(supply.value)}</p>
    </div>
  )
}

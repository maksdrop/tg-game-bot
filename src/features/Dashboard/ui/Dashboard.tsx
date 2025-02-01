import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { getTelegramUser } from 'entities/Telegram'
import avatar from './avatar.png'
import coinIcon from './coin.png'
import s from './Dashboard.module.css'
import { EnergyBlock } from './EnergyBlock/EnergyBlock'
import { InfoBlock } from './InfoBlock/InfoBlock'
import robotIcon from './robot.svg'
import { Supply } from './Supply/Supply'
import supplyIcon1 from './supply-icon-1.png'
import supplyIcon2 from './supply-icon-2.png'
import supplyIcon3 from './supply-icon-3.png'
import { TimerBlock } from './TimerBlock/TimerBlock'
import { TimerProgress } from './TimerProgress/TimerProgress'
import { SupplyType } from '../types/supply'

const supplyItems: SupplyType[] = [
  {
    icon: supplyIcon1,
    value: 4425,
    color: 'blue',
  },
  {
    icon: supplyIcon2,
    value: 1625,
    color: 'cyan',
  },
  {
    icon: supplyIcon3,
    value: 5121,
    color: 'pink',
  },
  {
    icon: coinIcon,
    value: 1840042,
    color: 'gold',
  },
]

export const Dashboard: FC = () => {
  const { t } = useTranslation()
  const { firstName } = getTelegramUser()

  return (
    <div className={s.dashboard}>
      <div className={s.header}>
        <div className={s.user}>
          <img src={avatar} className={s.avatar} alt="" />
          <p className={s.name}>{firstName}</p>
        </div>
        <InfoBlock icon={robotIcon} text={t('activeRobots')} value="3 / 12" size="s" />
      </div>
      <div className={s.list}>
        {supplyItems.map((supply) => {
          return <Supply supply={supply} />
        })}
      </div>
      <div className={s.row}>
        <EnergyBlock />
        <TimerBlock />
      </div>
      <TimerProgress className={s.progressBar} />
    </div>
  )
}

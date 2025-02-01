import { FC, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { decreaseEnergy } from 'entities/Energy'
import { decreaseTime } from 'entities/Timer'
import { formatTime } from 'shared/lib'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import clockIcon from './clock.svg'

export const TimerBlock: FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const timeLeft = useAppSelector((state) => state.timer.value)
  const initialTime = useAppSelector((state) => state.timer.initial)
  const energy = useAppSelector((state) => state.energy.value)
  const initialEnergy = useAppSelector((state) => state.energy.initial)

  useEffect(() => {
    const energyLossPerSecond: number = initialEnergy / initialTime

    const interval = setInterval(() => {
      if (timeLeft > 0 && energy > 0) {
        dispatch(decreaseTime(1))
        dispatch(decreaseEnergy(energyLossPerSecond))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [dispatch, timeLeft, energy, initialEnergy, initialTime])

  return <InfoBlock icon={clockIcon} text={t('timeUntilEnergyEnds')} value={formatTime(timeLeft)} />
}

import lightningIcon from 'assets/icons/lightning.svg'
import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'store/hooks'
import { bigNumberFormat } from 'shared/lib'
import { InfoBlock } from '../InfoBlock/InfoBlock'

export const EnergyBlock: FC = () => {
  const { t } = useTranslation()
  const initialEnergy = useAppSelector((state) => state.energy.initial)
  const energy = useAppSelector((state) => state.energy.value)

  return (
    <InfoBlock
      icon={lightningIcon}
      text={t('amountOfEnergy')}
      value={`${bigNumberFormat(energy)} / ${bigNumberFormat(initialEnergy)}`}
    />
  )
}

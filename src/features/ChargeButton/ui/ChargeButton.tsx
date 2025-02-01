import lightningIcon from 'assets/icons/lightning.svg'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'store/hooks'
import { resetGameTime } from 'entities/Timer'

import s from './ChargeButton.module.css'

export const ChargeButton: FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const handleResetTime = () => {
    dispatch(resetGameTime())
  }
  return (
    <div onClick={handleResetTime} className={s.chargeButton}>
      <p className={s.text}>{t('chargeStorageDevices')}</p>
      <img src={lightningIcon} className={s.lightningIcon} alt="" />
    </div>
  )
}

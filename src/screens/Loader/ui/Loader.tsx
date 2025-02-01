import { FC, useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { ProgressBar } from 'shared/ui'

import s from './Loader.module.css'

export const Loader: FC = () => {
  const { t } = useTranslation()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setProgress(50), 1000)
    setTimeout(() => setProgress(80), 2500)
    setTimeout(() => setProgress(100), 4000)
  }, [])

  return (
    <div className={s.loader}>
      <div className={s.content}>
        <p className={s.title}>{t('warsStarsExpedition')}</p>
        <div className={s.bottom}>
          <p className={s.loading}>{t('loading')}</p>
          <ProgressBar full={100} part={progress} />
          <div className={s.description}>{t('inTheFriendsTab')}</div>
        </div>
      </div>
    </div>
  )
}

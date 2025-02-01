import { useEffect, useState } from 'react'
import { initLocale } from 'entities/Locale'
import { getTelegramUser } from 'entities/Telegram'

export const useLocaleInit = () => {
  const [localeLoaded, setLocaleLoaded] = useState(false)
  const { languageCode } = getTelegramUser()

  useEffect(() => {
    initLocale(languageCode).then(() => setLocaleLoaded(true))
  }, [languageCode])

  return localeLoaded
}

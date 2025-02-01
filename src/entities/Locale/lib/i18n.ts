import i18n, { TFunction } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { localeDefault } from '../const/locale'

export const initLocale = async (locale: string): Promise<TFunction> => {
  if (i18n.isInitialized) {
    return i18n.changeLanguage(locale)
  }

  const translation = await import(`../const/translates/${locale}/translation.json`).catch(() => null)

  return i18n.use(initReactI18next).init({
    resources: translation ? { [locale]: { translation } } : {},
    fallbackLng: localeDefault,
    interpolation: {
      escapeValue: false,
    },

    lng: locale,
  })
}

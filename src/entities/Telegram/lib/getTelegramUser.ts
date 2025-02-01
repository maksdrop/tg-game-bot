import { Locale } from 'entities/Locale'

interface TelegramUser {
  firstName: string
  languageCode: string
}

export const getTelegramUser = (): TelegramUser => {
  const tg = window.Telegram.WebApp
  const user = tg?.initDataUnsafe?.user

  return {
    firstName: user?.username || '',
    languageCode: user?.language_code || Locale.en,
  }
}

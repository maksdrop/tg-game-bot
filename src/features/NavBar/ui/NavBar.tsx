import lightningIcon from 'assets/icons/lightning.svg'
import cx from 'classnames'
import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import documentIcon from './document.svg'
import friendsIcon from './friends.svg'
import s from './NavBar.module.css'
import planetIcon from './planet.svg'
import starshipIcon from './starship.png'

type NavItem = {
  icon?: string
  name: string
  className?: string
}

export const NavBar: FC = () => {
  const { t } = useTranslation()

  const navList: NavItem[] = [
    {
      icon: planetIcon,
      name: t('radar'),
    },
    {
      icon: lightningIcon,
      name: t('market'),
    },
    { name: t('starship'), className: s.starshipNav },
    {
      icon: documentIcon,
      name: t('tasks'),
    },
    {
      icon: friendsIcon,
      name: t('friends'),
    },
  ]

  return (
    <div className={s.navBar}>
      <div className={s.list}>
        {navList.map((item) => {
          return (
            <div key={item.name} className={cx(s.nav, item.className)}>
              <img src={item.icon} alt="" />
              <p className={s.name}>{item.name}</p>
            </div>
          )
        })}
      </div>
      <div className={s.starshipButton}>
        <img src={starshipIcon} className={s.starshipIcon} alt="" />
      </div>
    </div>
  )
}

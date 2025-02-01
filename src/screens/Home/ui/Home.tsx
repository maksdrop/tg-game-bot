import { FC } from 'react'

import { ChargeButton } from 'features/ChargeButton'
import { Dashboard } from 'features/Dashboard'
import { NavBar } from 'features/NavBar'

import s from './Home.module.css'

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <div className={s.content}>
        <Dashboard />
        <div className={s.bottom}>
          <ChargeButton />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

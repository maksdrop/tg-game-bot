import { FC } from 'react'

import { useAppSelector } from 'store/hooks'
import { ProgressBar } from 'shared/ui'

type Props = {
  className?: string
}

export const TimerProgress: FC<Props> = (props) => {
  const { className } = props
  const initialTime = useAppSelector((state) => state.timer.initial)
  const timeLeft = useAppSelector((state) => state.timer.value)

  return <ProgressBar className={className} full={initialTime} part={timeLeft} />
}

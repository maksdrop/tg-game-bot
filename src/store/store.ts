import { configureStore } from '@reduxjs/toolkit'
import { energyReducer } from 'entities/Energy'
import { timerReducer } from 'entities/Timer'

export const store = configureStore({
  reducer: {
    energy: energyReducer,
    timer: timerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

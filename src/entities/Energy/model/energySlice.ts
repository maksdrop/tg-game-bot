import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { resetGameTime } from 'entities/Timer'

interface EnergyState {
  value: number
  initial: number
}

const initialState: EnergyState = {
  value: 400,
  initial: 400,
}

const energySlice = createSlice({
  name: 'energy',
  initialState,
  reducers: {
    decreaseEnergy: (state, action: PayloadAction<number>) => {
      state.value = Math.max(Math.round(state.value - action.payload), 0)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetGameTime, (state) => {
      state.value = state.initial
    })
  },
})

export const { decreaseEnergy } = energySlice.actions
export const energyReducer = energySlice.reducer

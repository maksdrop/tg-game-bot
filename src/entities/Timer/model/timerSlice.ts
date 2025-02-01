import { createSlice, createAction } from '@reduxjs/toolkit'

interface TimerState {
  value: number
  initial: number
}

const initialState: TimerState = {
  value: 98,
  initial: 98,
}

export const resetGameTime = createAction('timer/resetGameTime')
export const decreaseTime = createAction<number>('timer/decreaseTime')

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetGameTime, (state) => {
      state.value = state.initial
    })
    builder.addCase(decreaseTime, (state, action) => {
      state.value = Math.max(state.value - action.payload, 0)
    })
  },
})

export const timerReducer = timerSlice.reducer

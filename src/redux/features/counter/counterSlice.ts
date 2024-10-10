import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
    count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.count += 1  
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

const counterSliceReducer = counterSlice.reducer;
export default counterSliceReducer;
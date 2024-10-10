import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions

const counterSliceReducer = counterSlice.reducer;
export default counterSliceReducer;
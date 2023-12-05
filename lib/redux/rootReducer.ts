/* Instruments */
import { counterSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
}

export const { decreament, increment, incrementByCount, incrementIfOdd } = counterSlice.actions; 
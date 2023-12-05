/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decreament: (state) => {
      state.value--
    },
    increment: (state) => {
      state.value++
    },
    incrementByCount: (state, payload) => {
      state.value = state.value + payload.payload
    },
    incrementIfOdd: (state, payload) => {
      if (state.value % 2 !== 0) {
        state.value = state.value + payload.payload
      }
    },

    // increment, decreament, incrementByAmount loginc here
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export enum counterAction {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_BY_COUNT = "INCREMENT_BY_COUNT",
  INCREMENT_IF_ODD = "INCREMENT_IF_ODD",
}
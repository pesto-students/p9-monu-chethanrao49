import { createSlice } from "@reduxjs/toolkit";

interface StepCounterState {
  steps: number;
}

const initialState: StepCounterState = {
  steps: 0,
};

const stepCounterSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    increment(state) {
      state.steps++;
    },
    reset(state) {
      state.steps = 0;
    },
  },
});

export const { increment, reset } = stepCounterSlice.actions;
export default stepCounterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import stepCounterSlice from "./features/step/stepSlice";

export const store = configureStore({
  reducer: {
    stepCounter: stepCounterSlice,
  },
});

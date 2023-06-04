import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightOn: true
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    toggleLight: (state) => {
      state.isLightOn = !state.isLightOn;
    }
  }
});

export const { toggleLight } = roomSlice.actions;
export default roomSlice.reducer;
